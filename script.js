/* =======================================================
                    SCRIPT.JS
                    PART 1
======================================================= */

'use strict';

/* =======================================================
                    DOM ELEMENTS
======================================================= */

const MOBILE_BREAKPOINT = 992;

const navbar = document.querySelector('.navbar');

const navToggle = document.querySelector('.nav-toggle');

const navLinksContainer = document.querySelector('.nav-center');

const navLinks = document.querySelectorAll('.nav-links a');

const sections = document.querySelectorAll('section');

const backToTop = document.querySelector('.back-to-top');


/* =======================================================
                MOBILE NAVIGATION
======================================================= */

function openMobileMenu() {

    navLinksContainer.classList.add('active');

    navToggle.classList.add('active');

    navToggle.setAttribute('aria-expanded', 'true');

    document.body.style.overflow = '';

}

function closeMobileMenu() {

    navLinksContainer.classList.remove('active');

    navToggle.classList.remove('active');

    navToggle.setAttribute('aria-expanded', 'false');

    document.body.style.overflow = '';

}

function toggleMobileMenu() {

    navLinksContainer.classList.contains('active')
        ? closeMobileMenu()
        : openMobileMenu();

}

if (navToggle) {

    navToggle.addEventListener('click', toggleMobileMenu);

}


/* =======================================================
            CLOSE MENU AFTER CLICKING LINK
======================================================= */

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        if (window.innerWidth <= 992) {

            closeMobileMenu();

        }

    });

});


/* =======================================================
            CLOSE MENU WHEN CLICKING OUTSIDE
======================================================= */

document.addEventListener('click', (event) => {

    if (window.innerWidth > 992) return;

    if (!navLinksContainer.classList.contains('active')) return;

    const clickedNavbar = navbar.contains(event.target);

    if (!clickedNavbar) {

        closeMobileMenu();

    }

});


/* =======================================================
                STICKY NAVBAR
======================================================= */

function handleNavbar() {

    if (window.scrollY > 80) {

        navbar.classList.add('scrolled');

    }

    else {

        navbar.classList.remove('scrolled');

    }

}

window.addEventListener('scroll', handleNavbar);


/* =======================================================
                ACTIVE NAVIGATION
======================================================= */

function highlightActiveLink() {

    let currentSection = '';

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        const height = section.offsetHeight;

        if (

            window.scrollY >= top &&
            window.scrollY < top + height

        ) {

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        const target = link.getAttribute('href').substring(1);

        if (target === currentSection) {

            link.classList.add('active');

        }

    });

}

window.addEventListener('scroll', highlightActiveLink);


/*const downloadBtn = document.querySelector(".btn");

downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "../Portfolio Website/Images/Syed Hashir Abrar Shah - Resume.docx";

    link.download = "Hashir_Shah_Resume.docx";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}); */


/* =======================================================
                SMOOTH SCROLL
======================================================= */

navLinks.forEach(link => {

    link.addEventListener('click', function (event) {

        const href = this.getAttribute('href');

        if (!href.startsWith('#')) return;

        event.preventDefault();

        const target = document.querySelector(href);

        if (!target) return;

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});


/* =======================================================
                BACK TO TOP BUTTON
======================================================= */

function handleBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 700) {

        backToTop.classList.add('show');

    }

    else {

        backToTop.classList.remove('show');

    }

}

window.addEventListener('scroll', handleBackToTop);


if (backToTop) {

    backToTop.addEventListener('click', () => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });

}


/* =======================================================
                ESC KEY CLOSE MENU
======================================================= */

document.addEventListener('keydown', (event) => {

    if (

        event.key === 'Escape' &&
        navLinksContainer.classList.contains('active')

    ) {

        closeMobileMenu();

    }

});


/* =======================================================
                WINDOW RESIZE
======================================================= */

window.addEventListener('resize', () => {

    if (window.innerWidth > 992) {

        closeMobileMenu();

    }

});


/* =======================================================
                INITIALIZE
======================================================= */

document.addEventListener('DOMContentLoaded', () => {

    handleNavbar();

    highlightActiveLink();

    handleBackToTop();

});

/* =======================================================
                INTERSECTION OBSERVER
======================================================= */

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add('active');

            observer.unobserve(entry.target);

        });

    },

    {

        threshold: 0.15,

        rootMargin: "0px 0px -80px 0px"

    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =======================================================
                STAGGERED ANIMATION DELAYS
======================================================= */

const staggerItems = document.querySelectorAll(

    '.delay-1, .delay-2, .delay-3, .delay-4'

);

staggerItems.forEach(item => {

    if (item.classList.contains('delay-1')) {

        item.style.transitionDelay = "150ms";

    }

    if (item.classList.contains('delay-2')) {

        item.style.transitionDelay = "300ms";

    }

    if (item.classList.contains('delay-3')) {

        item.style.transitionDelay = "450ms";

    }

    if (item.classList.contains('delay-4')) {

        item.style.transitionDelay = "600ms";

    }

});


/* =======================================================
                SKILL BAR ANIMATION
======================================================= */

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            requestAnimationFrame(() => {

                bar.style.width = width;

            });

            observer.unobserve(bar);

        });

    },

    {

        threshold: 0.35

    }

);

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =======================================================
                COUNTER ANIMATION
======================================================= */

const counters = document.querySelectorAll(

    '.hero-stat h3, .about-stat h3'

);

function animateCounter(counter) {

    const text = counter.textContent.trim();

    const number = parseInt(text);

    if (isNaN(number)) return;

    let current = 0;

    const duration = 1800;

    const increment = number / (duration / 16);

    function update() {

        current += increment;

        if (current < number) {

            counter.textContent = Math.floor(current) + "+";

            requestAnimationFrame(update);

        }

        else {

            counter.textContent = number + " ";

        }

    }

    update();

}

const counterObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    },

    {

        threshold: 0.4

    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =======================================================
                SCROLL PROGRESS BAR
======================================================= */

const progressBar = document.querySelector('.scroll-progress');

function updateProgressBar() {

    if (!progressBar) return;

    const totalHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

}

window.addEventListener(

    'scroll',

    updateProgressBar

);


/* =======================================================
                SECTION OBSERVER
======================================================= */

const sectionObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('section-visible');

            }

        });

    },

    {

        threshold: 0.15

    }

);

sections.forEach(section => {

    sectionObserver.observe(section);

});

/* =======================================================
                ROTATING ROLE TEXT
======================================================= */

const roleElement = document.querySelector('.hero-subtitle');

const roles = [

    "Front-End Developer",

    "BS IT Student",

    "Responsive Web Designer",

    "Open for Opportunities"

];

let roleIndex = 0;

function rotateRole() {

    if (!roleElement) return;

    roleElement.style.opacity = "0";

    roleElement.style.transform = "translateY(15px)";

    setTimeout(() => {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        roleElement.textContent = roles[roleIndex];

        roleElement.style.opacity = "1";

        roleElement.style.transform = "translateY(0)";

    }, 300);

}

setInterval(rotateRole, 2500);



/* =======================================================
                PARALLAX HERO
======================================================= */

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {

    if (!hero) return;

    const offset = window.scrollY;

    hero.style.backgroundPositionY = offset * 0.4 + "px";

});



/* =======================================================
                MAGNETIC BUTTONS
======================================================= */

const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {

    button.addEventListener('mousemove', e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =

            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform = "translate(0,0)";

    });

});



/* =======================================================
                CARD TILT EFFECT
======================================================= */

const cards = document.querySelectorAll(

    '.project-card, .service-card'

);

cards.forEach(card => {

    card.addEventListener('mousemove', e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX =

            -(y - rect.height / 2) / 20;

        const rotateY =

            (x - rect.width / 2) / 20;

        card.style.transform =

            `perspective(1000px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateY(-8px)`;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});



/* =======================================================
                BACK TO TOP HOVER
======================================================= */

if (backToTop) {

    backToTop.addEventListener('mouseenter', () => {

        backToTop.style.transform =

            "translateY(-6px) scale(1.08)";

    });

    backToTop.addEventListener('mouseleave', () => {

        backToTop.style.transform = "";

    });

}

/* =======================================================
                PART 4 - PREMIUM FEATURES
======================================================= */


/* =======================================================
                 COORDINATED CURSOR AND AMBIENT GLOW
======================================================= */

const cursorGlow = document.querySelector('.cursor-glow');

if (cursorGlow) {
    const glowEnabled = window.matchMedia(
        '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let frameId = null;
    let active = false;
    let lastTime = 0;
    let pointerTarget = null;
    let refreshTarget = false;
    const nativeCursorSelector = 'input, textarea, select, [contenteditable]:not([contenteditable="false"]), .preloader:not(.hide)';
    const interactiveSelector = 'a[href], button, .btn, .project-card, [role="button"], summary';

    function scheduleCursor() {
        if (active && frameId === null) frameId = requestAnimationFrame(animateCursor);
    }

    function updateCursorState() {
        const native = Boolean(pointerTarget?.closest(nativeCursorSelector));
        const interactive = pointerTarget?.closest(interactiveSelector);
        const hover = !native && Boolean(interactive) &&
            !interactive.matches(':disabled, [aria-disabled="true"]');
        cursorGlow.classList.toggle('is-native', native);
        cursorGlow.classList.toggle('is-hover', hover);
        document.documentElement.classList.toggle('custom-cursor-active', !native);
    }

    function hideGlow() {
        if (frameId !== null) cancelAnimationFrame(frameId);
        frameId = null;
        active = false;
        lastTime = 0;
        pointerTarget = null;
        refreshTarget = false;
        cursorGlow.classList.remove('is-active', 'is-hover', 'is-pressed', 'is-native');
        document.documentElement.classList.remove('custom-cursor-active');
    }

    function animateCursor(time) {
        frameId = null;
        if (refreshTarget) {
            pointerTarget = document.elementFromPoint(mouseX, mouseY);
            refreshTarget = false;
        }
        // Exact latest coordinates for the ring; only the ambient glow trails.
        cursorGlow.style.setProperty('--pointer-x', `${mouseX}px`);
        cursorGlow.style.setProperty('--pointer-y', `${mouseY}px`);
        updateCursorState();
        // Preserve the original .18 easing at 60Hz, consistent on faster displays.
        const elapsed = lastTime ? Math.min(time - lastTime, 50) : 1000 / 60;
        lastTime = time;
        const blend = 1 - Math.pow(1 - .18, elapsed / (1000 / 60));
        glowX += (mouseX - glowX) * blend;
        glowY += (mouseY - glowY) * blend;
        const settled = Math.hypot(mouseX - glowX, mouseY - glowY) < .1;
        if (settled) {
            glowX = mouseX;
            glowY = mouseY;
        }
        cursorGlow.style.setProperty('--cursor-x', `${glowX}px`);
        cursorGlow.style.setProperty('--cursor-y', `${glowY}px`);
        cursorGlow.classList.add('is-active');
        if (!settled) frameId = requestAnimationFrame(animateCursor);
        else lastTime = 0;
    }

    function trackPointer(event) {
        if (event.pointerType === 'touch' || document.hidden) {
            hideGlow();
            return;
        }
        mouseX = event.clientX;
        mouseY = event.clientY;
        pointerTarget = event.target instanceof Element ? event.target : null;
        // First entry appears at the pointer, never flying in from (0, 0).
        if (!active) {
            glowX = mouseX;
            glowY = mouseY;
            active = true;
        }
        scheduleCursor();
    }

    function changeTarget(event) {
        if (!active || event.pointerType === 'touch') return;
        pointerTarget = event.target instanceof Element ? event.target : null;
        scheduleCursor();
    }

    function pressCursor(event) {
        if (event.pointerType === 'touch') {
            hideGlow();
            return;
        }
        trackPointer(event);
        cursorGlow.classList.add('is-pressed');
    }

    function releaseCursor() {
        cursorGlow.classList.remove('is-pressed');
    }

    function refreshCursorTarget() {
        if (!active) return;
        // Scrolling/layout changes can move a control under a stationary pointer.
        refreshTarget = true;
        scheduleCursor();
    }

    function syncGlowCapability() {
        hideGlow();
        const listeners = [
            ['pointermove', trackPointer], ['pointerover', changeTarget],
            ['pointerdown', pressCursor], ['pointerup', releaseCursor],
            ['pointercancel', hideGlow], ['scroll', refreshCursorTarget]
        ];
        for (const [type, handler] of listeners) {
            document.removeEventListener(type, handler, true);
            if (glowEnabled.matches) {
                document.addEventListener(type, handler, { passive: true, capture: true });
            }
        }
    }

    document.documentElement.addEventListener('pointerleave', hideGlow);
    window.addEventListener('resize', refreshCursorTarget);
    window.addEventListener('blur', hideGlow);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) hideGlow();
    });
    glowEnabled.addEventListener('change', syncGlowCapability);
    syncGlowCapability();
}



/* =======================================================
                LAZY LOADING IMAGES
======================================================= */

const lazyImages = document.querySelectorAll("img[data-src]");

if (lazyImages.length) {

    const imageObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const image = entry.target;

                image.src = image.dataset.src;

                image.removeAttribute("data-src");

                image.onload = () => {

                    image.classList.add("loaded");

                };

                observer.unobserve(image);

            });

        },

        {

            threshold: 0.1

        }

    );

    lazyImages.forEach(image => imageObserver.observe(image));

}



/* =======================================================
                PRELOADER
======================================================= */

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {

    if (!preloader) return;

    preloader.classList.add("hide");

    setTimeout(() => {

        preloader.remove();

    }, 600);

});



/* =======================================================
                REDUCED MOTION
======================================================= */

const prefersReducedMotion = window.matchMedia(

    "(prefers-reduced-motion: reduce)"

);

if (prefersReducedMotion.matches) {

    document.documentElement.classList.add("reduced-motion");

}



/* =======================================================
                DEBOUNCE
======================================================= */

function debounce(func, delay = 100) {

    let timeout;

    return function (...args) {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            func.apply(this, args);

        }, delay);

    };

}



/* =======================================================
                THROTTLE
======================================================= */

function throttle(func, limit = 100) {

    let waiting = false;

    return function (...args) {

        if (waiting) return;

        func.apply(this, args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

}



/* =======================================================
                PERFORMANCE EVENTS
======================================================= */

window.addEventListener(

    "scroll",

    throttle(() => {

        handleNavbar();

        highlightActiveLink();

        handleBackToTop();

        updateProgressBar();

    }, 16)

);



window.addEventListener(

    "resize",

    debounce(() => {

        if (window.innerWidth > MOBILE_BREAKPOINT) {

            closeMobileMenu();

        }

    }, 150)

);



/* =======================================================
                PAGE VISIBILITY
======================================================= */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.body.classList.add("page-hidden");

    }

    else {

        document.body.classList.remove("page-hidden");

    }

});



/* =======================================================
                INITIALIZATION
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("%cPortfolio Loaded Successfully",

        "color:#39ff14;font-size:16px;font-weight:bold;"

    );

});



/* =======================================================
            CASE STUDY MODAL
======================================================= */

const caseStudyOverlay = document.getElementById('case-study-overlay');

const openCaseStudyBtns = document.querySelectorAll('.js-open-case-study');

const closeCaseStudyBtns = document.querySelectorAll('.js-close-case-study');

let lastActiveElement = null;

function openCaseStudy() {

    if (!caseStudyOverlay) return;

    lastActiveElement = document.activeElement;

    caseStudyOverlay.classList.add('active');

    caseStudyOverlay.removeAttribute('aria-hidden');

    document.body.style.overflow = 'hidden';

    // Move focus to the modal
    const firstFocusable = caseStudyOverlay.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (firstFocusable) firstFocusable.focus();

}

function closeCaseStudy() {

    if (!caseStudyOverlay) return;

    caseStudyOverlay.classList.remove('active');

    caseStudyOverlay.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {

        lastActiveElement.focus();

    }

}

openCaseStudyBtns.forEach(btn => {

    btn.addEventListener('click', openCaseStudy);

});

closeCaseStudyBtns.forEach(btn => {

    btn.addEventListener('click', closeCaseStudy);

});

// Close on overlay click
if (caseStudyOverlay) {

    caseStudyOverlay.addEventListener('click', (e) => {

        if (e.target === caseStudyOverlay) {

            closeCaseStudy();

        }

    });

}

// Close on Escape key
document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape' && caseStudyOverlay &&
        caseStudyOverlay.classList.contains('active')) {

        closeCaseStudy();

    }

});
