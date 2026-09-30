// Run with Playwright available via NODE_PATH; no website runtime dependency.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

(async () => {
    const browser = await chromium.launch({ channel: 'msedge', headless: true });
    const errors = [];
    try {
        console.log('Browser:', browser.version());
        for (const width of [1920, 1440, 1366, 1024]) {
            const page = await browser.newPage({ viewport: { width, height: 1000 } });
            page.on('pageerror', error => errors.push(error.message));
            await page.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href);
            await page.waitForTimeout(1200);
            const glow = page.locator('.cursor-glow');
            assert.equal(await glow.count(), 1);
            const before = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]);
            async function move(x, y) {
                await page.mouse.move(x, y);
                await page.evaluate(() => new Promise(requestAnimationFrame));
                const ring = await glow.evaluate(e => {
                    const p = getComputedStyle(e, '::after');
                    const t = new DOMMatrix(p.transform);
                    return {x:t.m41 + parseFloat(p.width)/2, y:t.m42 + parseFloat(p.height)/2};
                });
                assert.ok(Math.abs(ring.x-x)<.2 && Math.abs(ring.y-y)<.2, 'Ring follows without interpolation');
                await page.waitForTimeout(1000);
                const state = await glow.evaluate(e => {
                    const s = getComputedStyle(e);
                    const p = getComputedStyle(e, '::before');
                    const t = new DOMMatrix(p.transform);
                    return { x: t.m41 + parseFloat(p.width) / 2, y: t.m42 + parseFloat(p.height) / 2,
                        opacity: s.opacity, display: s.display, events: s.pointerEvents, z: s.zIndex,
                        gradient: p.backgroundImage, alpha: p.opacity, width: p.width };
                });
                assert.ok(Math.abs(state.x - x) < .2 && Math.abs(state.y - y) < .2, JSON.stringify(state));
                assert.equal(state.opacity, '1');
                assert.notEqual(state.display, 'none');
                assert.equal(state.events, 'none');
                assert.equal(state.z, '9999');
                assert.equal(state.width, '360px');
                assert.equal(state.alpha, '0.1');
                assert.ok(state.gradient.includes('133, 238, 0'));
                assert.equal(await page.evaluate(([x,y]) => document.elementFromPoint(x,y)?.classList.contains('cursor-glow'), [x,y]), false);
            }
            for (const [x,y] of [[500,400],[1,1],[width-1,1],[width-1,999],[1,999]]) await move(x,y);
            for (let i=0; i<30; i++) await page.mouse.move(10 + i*(width-20)/30, 100+i*20);
            await move(width/2, 400);
            for (const selector of ['#hero','#about','#experience','#skills','#projects','#services','#education','#contact','.footer']) {
                await page.locator(selector).evaluate(e => e.scrollIntoView({behavior:'instant'}));
                await move(width/2, 400);
            }
            const after = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]);
            assert.deepEqual(after, before, 'Glow must not change document dimensions');
            // Verify no further glow writes once interpolation settles.
            await glow.evaluate(e => { window.glowWrites=0; window.glowObserver=new MutationObserver(r=>window.glowWrites+=r.length); window.glowObserver.observe(e,{attributes:true}); });
            await page.waitForTimeout(250);
            assert.equal(await page.evaluate(() => window.glowWrites), 0);
            await page.evaluate(() => window.glowObserver.disconnect());
            // Exercise every actual link/button and project card, plus representative non-controls.
            const targets = page.locator('a[href], button, .project-card, .hero-image, .hero-stat, .experience-item, .skill-category, .service-card, .education-card1, .education-card2, .education-card3, .nav-left');
            let hoverCount = 0;
            for (const target of await targets.all()) {
                if (!await target.isVisible() || await target.evaluate(e => Boolean(e.closest('#case-study-overlay')))) continue;
                if (await target.evaluate(e => e.classList.contains('back-to-top'))) continue;
                await target.scrollIntoViewIfNeeded();
                await target.hover({force:true});
                await page.waitForTimeout(240);
                const result = await page.evaluate(() => {
                    const e = document.querySelector('.cursor-glow');
                    const x = parseFloat(e.style.getPropertyValue('--pointer-x'));
                    const y = parseFloat(e.style.getPropertyValue('--pointer-y'));
                    const hit = document.elementFromPoint(x,y);
                    const interactive = hit?.closest('a[href],button,.btn,.project-card,[role="button"],summary');
                    const expected = Boolean(interactive && !interactive.matches(':disabled,[aria-disabled="true"]'));
                    return {expected, actual:e.classList.contains('is-hover'), width:parseFloat(getComputedStyle(e,'::after').width), cursor:getComputedStyle(hit).cursor};
                });
                assert.equal(result.actual,result.expected);
                assert.equal(result.width,result.expected ? 40 : 22);
                assert.equal(result.cursor,'none');
                hoverCount++;
            }
            await page.locator('.js-open-case-study').hover();
            await page.waitForFunction(() => getComputedStyle(document.querySelector('.cursor-glow'),'::after').width === '40px');
            await page.mouse.down();
            await page.waitForFunction(() => getComputedStyle(document.querySelector('.cursor-glow'),'::after').width === '34px');
            assert.equal(await glow.evaluate(e => getComputedStyle(e,'::after').width),'34px');
            await page.mouse.up();
            await page.waitForTimeout(240);
            assert.equal(await glow.evaluate(e => e.classList.contains('is-pressed')),false);
            await page.keyboard.press('Escape');
            await page.locator('#contact input').first().click();
            await page.waitForTimeout(100);
            assert.equal(await page.evaluate(() => document.documentElement.classList.contains('custom-cursor-active')),false);
            assert.equal(await glow.evaluate(e => getComputedStyle(e,'::after').opacity),'0');
            await page.locator('#contact input').first().fill('Cursor QA');
            assert.equal(await page.locator('#contact input').first().inputValue(), 'Cursor QA');
            await page.locator('.js-open-case-study').click();
            assert.equal(await page.locator('#case-study-overlay').getAttribute('aria-hidden'), null);
            await page.keyboard.press('Escape');
            await page.locator('#contact').evaluate(e => e.scrollIntoView({behavior:'instant'}));
            await page.waitForTimeout(300);
            await page.locator('.back-to-top').click();
            await page.waitForFunction(() => scrollY < 2, null, {timeout:10000});
            assert.ok(await page.evaluate(() => scrollY < 2));
            await page.locator('.nav-links a[href="#skills"]').click();
            await page.waitForFunction(() => scrollY > 100);
            assert.ok(await page.evaluate(() => scrollY > 100));
            await page.emulateMedia({ reducedMotion: 'reduce' });
            await page.mouse.move(200,200);
            await page.waitForTimeout(100);
            assert.equal(await glow.evaluate(e => getComputedStyle(e).display), 'none');
            assert.equal(await glow.getAttribute('class'), 'cursor-glow');
            assert.equal(await page.evaluate(() => document.documentElement.classList.contains('custom-cursor-active')),false);
            await page.emulateMedia({ reducedMotion: 'no-preference' });
            await page.waitForTimeout(100);
            await move(300,300);
            await page.evaluate(() => window.dispatchEvent(new Event('blur')));
            assert.equal(await glow.getAttribute('class'), 'cursor-glow');
            console.log(`PASS ${width}px: precise ring, ${hoverCount} hover targets, click feedback, native input, movement, edges, sections, scrolling, idle, clicks, motion; document ${before[0]}px`);
            if (width === 1440) {
                await page.locator('#hero').evaluate(e => e.scrollIntoView({behavior:'instant'}));
                await move(700,500);
                await page.screenshot({path: process.env.TEMP + '/portfolio-cursor-fixed.png'});
            }
            await page.close();
        }
        for (const width of [768,430,393,360,1440]) {
            const page = await browser.newPage({viewport:{width,height:1000},hasTouch:true,isMobile:true});
            await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
            await page.mouse.move(200,200);
            assert.equal(await page.locator('.cursor-glow').evaluate(e=>getComputedStyle(e).display),'none');
            assert.equal(await page.locator('.cursor-glow').getAttribute('style'),null);
            assert.equal(await page.evaluate(() => document.documentElement.classList.contains('custom-cursor-active')),false);
            console.log(`PASS touch-only ${width}px: hidden, no coordinate writes`);
            await page.close();
        }
        assert.deepEqual(errors, []);
        console.log('PASS: no uncaught page errors');
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode=1; });
