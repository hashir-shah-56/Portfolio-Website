# Syed Hashir Abrar Shah — Personal Portfolio

Personal developer portfolio of **Syed Hashir Abrar Shah**, a **Front-End Developer & BS Information Technology student**. A static, single-page HTML/CSS/JavaScript website presenting development work, skills, professional experience, services, education, and contact options.

[Published portfolio](https://portfolio-syed-hashir-abrar-shah.netlify.app/) · [Source repository](https://github.com/hashir-shah-56/Portfolio-Website)

**Documentation audit: 2026-09-29.** This document describes the current working tree, including existing uncommitted website edits. Published-source differences are recorded under [Deployment](#deployment). No website functionality was changed by this documentation audit.

## Documentation Maintenance Rule

**README.md is the single source of truth for this portfolio project.**

**Every future implementation task that changes the website must update README.md in the same task.**

Update this document whenever features, sections, content, professional experience, skills, projects, project links, design system, CSS architecture, JavaScript behavior, responsive behavior, accessibility, SEO, dependencies, deployment, configuration, file structure, known limitations, roadmap, or testing behavior changes.

**An implementation task is NOT complete until README.md accurately reflects the resulting project state.** Update the changelog as part of that task. Preserve verified historical context; do not leave obsolete behavior described as current.

Code is the authority for current implementation. README is its maintained human-readable source of truth. When they conflict, inspect the implementation, establish actual behavior, and correct the documentation. Do not modify working code merely to match stale documentation.

## Table of Contents

- [Documentation Maintenance Rule](#documentation-maintenance-rule)
- [Project Overview](#project-overview)
- [Owner and Public Information](#owner-and-public-information)
- [Current Website Structure](#current-website-structure)
- [Hero](#hero)
- [About](#about)
- [Experience](#experience)
- [Skills](#skills)
- [Projects](#projects)
- [Project Case Study System](#project-case-study-system)
- [Services](#services)
- [Education](#education)
- [Contact System](#contact-system)
- [Navigation and Footer](#navigation-and-footer)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [Animations and Interactions](#animations-and-interactions)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Performance](#performance)
- [Portfolio Technology Stack](#portfolio-technology-stack)
- [Project Architecture](#project-architecture)
- [Complete Directory Structure](#complete-directory-structure)
- [Assets and Resume](#assets-and-resume)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [External Dependencies and Links](#external-dependencies-and-links)
- [Data and Privacy](#data-and-privacy)
- [Security Considerations](#security-considerations)
- [Browser Compatibility](#browser-compatibility)
- [Known Limitations](#known-limitations)
- [Roadmap and Incomplete Work](#roadmap-and-incomplete-work)
- [Testing and QA](#testing-and-qa)
- [AI and Developer Handoff](#ai-and-developer-handoff)
- [Changelog](#changelog)

## Project Overview

The portfolio provides recruiters, prospective clients, collaborators, and other developers with a public view of the owner's work and capabilities. Its goals are to present practical projects, explain relevant skills and internship experience, offer a downloadable resume, and make professional contact straightforward.

The visual identity uses a near-black background, neon-green accents, translucent cards, rounded corners, large headings, and animated interactions. The implementation uses plain browser technologies and separate CSS files rather than a framework, component build system, or CMS.

Current inventory: **8 main page sections, 2 project cards, 1 case-study modal, 1 internship, 12 skills in 3 categories, 4 services, and 3 education entries**. These counts describe current HTML, not earlier versions or additional technologies mentioned in the resume.

## Owner and Public Information

| Field | Current public website content |
|---|---|
| Full name / display name | Syed Hashir Abrar Shah / Hashir Shah |
| Positioning | Front-End Developer & BS IT Student |
| Navbar location | Rawalpindi, Pakistan |
| Current degree | Bachelor of Science in Information Technology |
| Institution / status | University of Gujrat / Currently Pursuing |
| Availability | Open For Work |
| Email | [syedhashir495@gmail.com](mailto:syedhashir495@gmail.com) |
| GitHub | [hashir-shah-56](https://github.com/hashir-shah-56) |
| LinkedIn | [hashir-abrar-shah](https://linkedin.com/in/hashir-abrar-shah) |
| Instagram | [syed_hashir_shah10](https://instagram.com/syed_hashir_shah10) |
| WhatsApp number displayed | +92 3209798572 |

The internship location is Islamabad, Pakistan, distinct from the navbar location. The resume contains older/different information; see [Assets and Resume](#assets-and-resume). Do not infer additional qualifications, employment dates, or personal details from filenames or comment examples.

## Current Website Structure

All page content is in [index.html](index.html). There are no additional HTML pages or application routes.

| Order | Element | Purpose / actions | Primary stylesheet |
|---|---|---|---|
| Header | `.navbar`, `#nav-menu` | Eight anchors, location, resume download, mobile toggle | `css/layout/navbar.css` |
| 1 | `#home.hero` | Introduction, rotating role, CTAs, portrait, statistics | `css/sections/hero.css` |
| 2 | `#about.about` | Professional description, image, contact/CV CTAs | `css/sections/about.css` |
| 3 | `#experience.experience` | SYSCOM internship timeline | `css/sections/experience.css` |
| 4 | `#skills.skills` | Three skill groups and proficiency bars | `css/sections/skills.css` |
| 5 | `#projects.projects` | Two project articles, links, flagship case study | `css/sections/projects.css` |
| 6 | `#services.services` | Four capability cards | `css/sections/services.css` |
| 7 | `#education.education` | Three education cards | `css/sections/education.css` |
| 8 | `#contact.contact` | Contact links and an unconnected form | `css/sections/contact.css` |
| Footer | `.footer` | Positioning, quick links, social links, copyright | `css/layout/footer.css` |
| Supporting UI | `.back-to-top`, `.scroll-progress`, `.preloader`, `.cursor-glow`, `#case-study-overlay` | Scroll feedback, loading overlay, pointer effect, dialog | Layout, animations, case-study CSS |

**Structural caveat:** `<main>` encloses only Hero. About through Contact are direct children of `<body>`. Shared section spacing therefore uses `section:not(.hero)`, not `main > section`. Moving landmarks or changing selector scope requires checking the resulting cascade and layout.

## Hero

- Greeting: “Hello, I'm”; sole `<h1>`: “Hashir Shah”, with the surname in green.
- Initial `.hero-subtitle`: “Front-End Developer”. JS cycles through **Front-End Developer**, **BS IT Student**, **E-Commerce Developer**, **Responsive Web Designer**, and **Open for Opportunities** every 2.5 seconds, with a 300ms delayed replacement. This is fade/slide rotation, not typing.
- Supporting copy: “I build responsive, user-focused web experiences with modern frontend technologies, combining clean UI/UX with practical backend integrations.”
- CTAs: **View Projects** → `#projects`; **Contact Me** → `#contact`; **Resume** → local DOCX download.
- HTML statistics: **2 Projects**, **9+ Technologies**, **Open For Work**. Numeric counters animate and remove the `+` suffix when finished. Values are authored manually, not derived from content counts.
- Image: `Images/Profile 2.png`, eager-loaded with descriptive alt text, inside square `.hero-image`. Desktop width 500px; `object-fit: cover`, 40px radius, light border, shadow, blurred green decoration.
- Desktop grid: `1.1fr .9fr`, 80px gap. At ≤992px it becomes one centered column. Portrait widths become 380px, 300px, and 240px at 992px, 768px, and 576px respectively.
- Directional reveal classes animate the columns. The decorative “Scroll Down” indicator is `aria-hidden` and not a clickable link.
- **No social-link row currently exists in Hero.** `.hero-social` CSS remains, but links are in Contact/Footer.

## About

`#about` has an “About Me” heading and `.about-content` containing an image and `.about-info`. The information heading is **Front-End Developer & BS IT Student**.

Two paragraphs describe BS Information Technology studies; responsive, intuitive, polished front-end development; e-commerce, business, and portfolio websites; and **HTML, CSS, JavaScript, PHP, MySQL, and Supabase**. The second references the **SYSCOM internship**, data analysis, dashboard reporting, **Jira, Looker, and Tableau**.

The image is `Images/Image.jpg`, alt “Hashir Shah working on a project”, `loading="lazy"`, `.img-fluid.rounded`. The more-specific `.about-image img` rule gives it 70% width, 30px radius, thin border, cover fitting, and grayscale filter. It has a left reveal effect. Transform/shadow transitions exist, but no active About image hover transformation; a video hover rule is commented out.

The base layout is a two-column grid with a 20px gap. `.about-info` is a vertical flex layout, maximum width 500px, 16px gap, 24px top margin. The buttons have a 32px top margin and 20px gap:

- **Let's Talk** → `#contact`.
- **Download CV** → `Images/Syed-Hashir-Abrar-Shah-Resume.docx`, with a download filename.

Responsive declarations attempt to stack content, center/wrap buttons, justify text, and constrain widths. **The current `.about .container .about-content` selector overrides the less-specific responsive display/column declarations: computed layout remains two columns even at 393px and 360px.** Section padding supplies clearance after the complete content and before Experience, without adding heading margins.

## Experience

One `.experience-item` appears in `.experience-timeline`:

| Field | Displayed value |
|---|---|
| Role / company | IT Intern / SYSCOM |
| Location | Islamabad, Pakistan |
| Period | 2026 |

An HTML TODO requests exact internship dates. Its example range is not verified employment information.

Current responsibilities:

1. Worked with operational and incident datasets for analysis and reporting.
2. Created dashboards and reports using Looker and Tableau.
3. Analyzed P1/P2 incidents, monthly trends, recurring incidents, domains, priorities, alert sources, countries, and internal/external classifications.
4. Used Microsoft Teams for task coordination and professional communication.
5. Gained practical exposure to an IT/telecommunications working environment.

Tool chips: **Looker**, **Microsoft Teams**, **Data Analysis**, **Dashboard Reporting**. Tableau appears in the responsibilities/About. Jira remains in About but is absent from the current local Experience bullet/chips; the published bullet still includes Jira (see Deployment).

The timeline is at most 800px wide with a green line and circular marker. Its card has hover lift/glow, role/company text, year badge, location, bullets, and wrapping chips. At ≤992px metadata stacks; ≤576px indentation/card padding become 44px/24px; ≤400px they become 36px/16px. There are no Experience CTAs or employer links.

## Skills

`#skills .skills-grid` contains three `.skill-category` cards and twelve `.skill-item` rows, each with a Font Awesome icon, label, 8px progress bar, and level text. Numbers are the source's self-described presentation values, not independent assessments.

| Category | Skill | Bar / `aria-valuenow` | Level |
|---|---|---:|---|
| Front-End | HTML5 | 95 | Advanced |
| Front-End | CSS3 | 90 | Advanced |
| Front-End | JavaScript | 78 | Intermediate |
| Front-End | Responsive Web Design | 88 | Advanced |
| Backend / Database | PHP | 68 | Intermediate |
| Backend / Database | MySQL | 70 | Intermediate |
| Backend / Database | Supabase | 72 | Intermediate |
| Backend / Database | REST API Integration | 65 | Intermediate |
| Tools & Deployment | Git | 65 | Intermediate |
| Tools & Deployment | GitHub | 65 | Intermediate |
| Tools & Deployment | Visual Studio Code | 65 | Intermediate |
| Tools & Deployment | Netlify | 65 | Intermediate |

Bars use progressbar roles, labels, and 0/100 min/max. JS observes at threshold .35, resets width to zero, then restores the inline target next animation frame; CSS transitions width over 1.6 seconds. The grid has three columns/32px gaps, becoming one column at ≤992px. Cards reveal/stagger and lift/glow on hover.

There is **no displayed Professional / Data Tools category, Design category, or Currently Learning section**. Learning CSS remains unused. About/Experience tool mentions must not be silently promoted into grid entries.

## Projects

`#projects .projects-container` contains exactly two `<article class="project-card">` elements. Data is static HTML, with no JSON, CMS, database query, filter UI, or generated list. Descriptions/case study represent the owner's claims about external work; this repository does not contain those applications' backends, and this audit did not verify their checkout/authentication/authorization behavior.

### Shah Embroidery & Art

| Field | Portfolio representation |
|---|---|
| Number / status | Project 01; “Featured” badge; case study calls it fully functional |
| Type / purpose | E-commerce platform for a handmade embroidery and artwork business |
| Image | `Images/Project_2.png`, lazy-loaded, descriptive screenshot alt text |
| Technologies | HTML5, CSS3, JavaScript, Supabase, Git / GitHub, Netlify |
| Tags | E-Commerce, Supabase, Authentication, Admin Dashboard, Responsive Design |
| Live demo | [shah-embroidery-and-art.netlify.app](https://shah-embroidery-and-art.netlify.app/) |
| Source | [Shah-Embroidery-and-Art](https://github.com/hashir-shah-56/Shah-Embroidery-and-Art) |
| Case study | `.js-open-case-study`, `data-project="shah-embroidery"` |

The card claims a dynamic product catalog, search, customer accounts, cart, wishlist, custom orders, checkout, Supabase integration, and owner-only admin dashboard. The case study adds category filtering; sign-up/login/account management; product/order administration; and Supabase database, authentication, and storage.

The case study describes the owner as sole developer responsible for planning, design, frontend implementation, Supabase integration, and Netlify deployment. Challenges include row-level security for owner access, persistent cart/wishlist state, responsive layouts, and product image storage/retrieval. These are displayed external-project claims, not functionality or security supplied by the portfolio itself.

Use the URL above: the shorter `shah-embroidery.netlify.app` is not the portfolio's current link. Card and modal both use the `shah-embroidery-and-art` address.

### ScentAura

| Field | Portfolio representation |
|---|---|
| Number / type | Project 02 / premium perfume e-commerce website |
| Purpose / features | Modern UI, responsive layouts, product search, shopping cart, smooth animations, elegant shopping experience |
| Image | `Images/Project.png`, lazy-loaded, descriptive perfume-site screenshot alt text |
| Technologies on card | HTML5, CSS3, JavaScript |
| Tags | E-Commerce, Responsive Design, JavaScript |
| Source | [ScentAura](https://github.com/hashir-shah-56/ScentAura) |
| Live demo / case study / explicit status | None displayed |

ScentAura uses `.project-card.reverse` to reverse desktop image/content placement. The resume describes additional PHP/MySQL functionality, but those technologies are not displayed on the current card. Do not merge resume claims into the card description without an intentional content update.

### Shared project presentation

Cards use two-column grids, 40px padding, 56px gap, 40px radius, glass background, thin border, and 80px inter-card gaps. Images have rounded clipping/dark overlay and scale to 1.05 on hover. CSS lift/glow and JS pointer tilt apply. `.project-tech-small` chip styling currently lives in `education.css`.

At ≤1200px card gaps become 40px. At ≤992px both card variants become one column and reverse order resets. At ≤576px links stack; ≤400px card padding is 20px. There is **no current Personal Portfolio card, placeholder card, or hidden third project**; placeholder CSS remains unused.

## Project Case Study System

The sole case study, Shah Embroidery & Art, is hard-coded near the end of `index.html`, before `script.js`.

- `#case-study-overlay` is fixed, with `role="dialog"`, `aria-modal="true"`, `aria-labelledby="cs-title"`, and initial `aria-hidden="true"`.
- `.case-study-modal` is scrollable, max-width 860px, max-height 90vh, padding 48px, radius 40px, secondary background.
- Openers call `openCaseStudy()`: remember focus, add `.active`, remove `aria-hidden`, hide body overflow, focus the first control (Close).
- Close button, Escape, or a click directly on the overlay background calls `closeCaseStudy()`: remove `.active`, restore hidden state/body overflow/focus.
- `data-project` exists but is **not read by JS**; every opener targets the same modal. This is reusable styling/event wiring, not a data-driven multi-project system.
- No separate URL, history entry, router, tabs, or fetched content exists.

Actual content: header/subtitle, six technology tags, **Project Overview**, **My Role**, **Key Features**, **Development Approach**, **Challenges & Solutions**, and Live Demo/GitHub CTAs. There are no separate Business Requirement, Result, Responsive Design, or Backend Integration panels.

At ≤768px panel padding is 32px; ≤480px it is 24px, max-height 95vh, and CTAs stack. Overlay padding stays 24px. Focus moves/restores but is **not trapped**; the background is not inert.

## Services

Four static service articles appear under “What I can help you build — focused on the skills I actually use.” No booking buttons or service-specific links exist.

| Service | Description / feature labels | Icon |
|---|---|---|
| Front-End Development | Responsive, interactive HTML/CSS/JS interfaces; Responsive Layouts, Modern UI, Clean Code | `fa-laptop-code` |
| E-Commerce Development | Catalogs, authentication, carts, checkout, database-backed functionality; Supabase / MySQL, User Accounts, Admin Dashboards | `fa-cart-shopping` |
| Responsive Web Design | Desktop/tablet/mobile interfaces; Mobile First, Cross Browser, No Layout Shifts | `fa-mobile-screen-button` |
| UI Implementation | Requirements/design concepts into interfaces; Pixel Accurate, Semantic HTML, Accessible | `fa-layer-group` |

Capability labels such as “Cross Browser”, “No Layout Shifts”, and “Accessible” do not certify this portfolio's testing results. The grid has 3/2/1 columns at desktop/≤992px/≤768px. Cards have 40px padding (20px at ≤400px), circular 72px icons, gradient border decoration, reveal/stagger, hover lift/glow, and JS tilt.

## Education

| Qualification | Institution | Status / dates exactly shown |
|---|---|---|
| Bachelor of Science in Information Technology | University of Gujrat | Currently Pursuing |
| Intermediate in Pre-Engineering | Askaria College | 2021-2023 |
| Matriculation in Science | New Jinnah Public School | 2021 |

The three cards use graduation-cap, university, and school icons. The centered container is a flex column with 20px gaps. Cards are at most 640px wide, with 40px padding, icon/text rows, green institution text, and pills. At ≤992px max-width becomes 100%; ≤576px icon/text stack and padding becomes 24px; ≤400px padding is 20px and degree text uses `--fs-lg`. Cards reveal/lift/glow. There are no education links/CTAs.

## Contact System

`#contact` offers Email, LinkedIn, GitHub, and WhatsApp cards beside `#contact-form`. Email uses `mailto:`; professional links use new tabs and `noopener noreferrer`.

The exact [WhatsApp destination](https://wa.me/+923209798572?text=I'm%20Can%20we%20Talk?) includes a leading `+` and the prefilled text “I'm Can we Talk?”. This is an outbound link, not an API integration. No message was sent and delivery was not tested.

| Form field | HTML attributes |
|---|---|
| Full Name | `id/name="name"`, text, required, `autocomplete="name"` |
| Email Address | `id/name="email"`, email, required, `autocomplete="email"` |
| Subject | `id/name="subject"`, text, optional |
| Message | `id/name="message"`, textarea, 7 rows, required |

Labels use matching `for`/`id`. The form has `novalidate`, no `action`, no `method`, no submit listener, and no Netlify Forms attributes. **It does not send email or save messages.** Browser-default submission performs **GET to the current page**, placing all field values in the URL query. A local test confirmed even an invalid email was submitted because submission validation is disabled.

There is no success/error response, submission loading state, spam protection, backend, API, or form service. Generic validation classes exist in CSS, but actual fields lack `.form-input`/`.form-textarea`, and no script applies feedback classes. Those definitions do not implement validation.

Contact uses `0.9fr 1.1fr` columns/64px gap, collapsing at ≤992px. The name/email `.form-row` becomes one column at ≤768px. Form padding reduces at 576px and 400px. See [Data and Privacy](#data-and-privacy) before changing submission behavior.

## Navigation and Footer

Header links target `#home`, `#about`, `#experience`, `#skills`, `#projects`, `#services`, `#education`, and `#contact`. Location is on the left; Resume download on the right.

**Navbar positioning is absolute, not sticky/fixed.** `handleNavbar()` adds `.scrolled` after 80px, changing background, blur, border, and shadow only. The “STICKY NAVBAR” JS comment does not reflect actual positioning.

`highlightActiveLink()` checks section `offsetTop - 180` and height, then sets `.active` on header links. Active links receive green text/underline; no `aria-current` is set. Header clicks prevent default anchor behavior and use `scrollIntoView({behavior:'smooth'})`, so that handler does not update the URL hash. Other anchors use normal fragment navigation and CSS smooth scrolling. `html` has `scroll-padding-top:110px`.

At ≤992px the hamburger appears and `.nav-center` becomes a dropdown. Toggling updates `aria-expanded`; menu links, outside-navbar clicks, Escape, and resizing above 992px close it. Opening does not lock body scrolling. Width is 50%, then `min(88%,380px)` at ≤768px. **The active transform replaces horizontal centering with `translateY(0)`, pushing the menu beyond the right edge on phones.** Navbar Resume hides at ≤576px; Hero/About downloads remain.

`.back-to-top` appears after 700px and calls smooth `scrollTo({top:0})`. It is a labeled 52px control fixed 24px from right/bottom. The fixed 3px `.scroll-progress` bar reflects document scroll percentage.

Footer contains “Hashir Shah”, the current positioning statement, eight quick links, GitHub/LinkedIn/Instagram icon links, and **© 2026 Syed Hashir Abrar Shah. All Rights Reserved.** The year is hard-coded. Social icons form a vertical column. Responsive grid declarations do not stack the main columns because a more-specific selector makes `.footer-container` a flex row.

## Design System

Tokens are in [css/base/variable.css](css/base/variable.css). Global rules in [css/style.css](css/style.css) follow all imports and can override imported styles.

### Color palette

| Token / use | Exact value |
|---|---|
| `--color-bg-primary` | `#050505` |
| `--color-bg-secondary` | `#0F0F0F` |
| `--color-bg-tertiary` | `#171717` |
| `--color-text-primary` | `#F5F5F5` |
| `--color-text-secondary` | `#BDBDBD` |
| `--color-text-muted` | `#7A7A7A` |
| `--color-accent` | `#85ee00` |
| `--color-accent-hover` | `#71be0b` |
| `--color-accent-dark` | `#4f8804` |
| `--color-glass`, `--glass-bg` | `rgba(255,255,255,0.05)` |
| `--color-glass-hover`, `--glass-bg-hover` | `rgba(255,255,255,0.08)` |
| `--color-border`, `--glass-border` | `rgba(255,255,255,0.08)` |
| `--color-border-light` | `rgba(255,255,255,0.15)` |
| Success / warning / danger | `#00D26A` / `#F7B500` / `#FF4D4D` |

Literal component colors also exist: About top border `#85e44e83`; Hero image border `#f0f1ed`; skill gradient endpoint `#8dff72`; scrollbar hover `#5eff3d`. Glows often use `rgba(57,255,20,...)`; newer chips use `rgba(133,238,0,0.06)`. These greens are not identical to the main accent.

### Typography

Headings: **Space Grotesk**. Body/UI: **Inter**. Both fall back to sans-serif. Google Fonts is requested twice:

- HTML requests Inter 300–800 and Space Grotesk 500/700.
- `variable.css` imports both families at 300–700.
- Both use `display=swap`; HTML preconnects to Google Fonts and its static font host.

Weight tokens: 300/400/500/600/700. Text sizes: .75/.875/1/1.125/1.25rem. Heading tokens h6→h1: 1.25/1.5/2/2.5/3.5/5rem; display: 6.5rem. Actual h1/h2/h3 rules are fluid:

```css
h1 { font-size: clamp(3.5rem, 7vw, var(--fs-display)); }
h2 { font-size: clamp(2.75rem, 5vw, var(--fs-h2)); }
h3 { font-size: clamp(2rem, 4vw, var(--fs-h3)); }
```

Headings use bold weight, line-height 1.1, and -1px letter spacing. Body line-height is 1.5; paragraphs 1.8. Other letter-spacing tokens are 0/2/4px. Hero/component mobile overrides are documented below; not every heading uses `.section-title`.

### Spacing and containers

Defined spacing tokens, in pixels: **4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 120, 160**. Common internal gaps are 16–32px; skills/services/timeline content commonly starts 64px below its header; project cards have 80px list gaps.

Shared section spacing:

```css
.section,
section:not(.hero) {
    padding-top: var(--section-pad-y);
    padding-bottom: var(--section-pad-y);
    position: relative;
}
main > .hero {
    padding-bottom: var(--section-pad-y);
}
```

| Viewport width | `--section-pad-y` per edge | Combined adjacent content gap |
|---|---:|---:|
| >1200px | 60px | 120px |
| 769–1200px | 40px | 80px |
| 577–768px | 35px | 70px |
| ≤576px | 30px | 60px |

This covers About → Experience → Skills → Projects → Services → Education → Contact without heading-margin patches. Hero contributes shared bottom padding; its minimum height, centering, and About's 1px border can produce a larger gap. These numbers are not heading-to-heading distances.

`.container` uses `width:min(100% - 4rem,1400px)` and auto inline margins. Max-width becomes 1200px at ≤1400px, 960px at ≤1200px, and 720px at ≤992px. At ≤768px width becomes `min(92%,100%)`. The `--container-padding:32px` token exists, but the width formula supplies base side space.

Legacy `section {padding-block:120px}` and `section:first-of-type {padding-top:200px}` remain in `layout.css`. Shared rules override non-Hero spacing. Hero's first-of-type top rule outranks responsive `.hero` top-padding declarations; the declared mobile 140px/120px values do not win that cascade.

`--space-6`, `--space-28`, and `--space-72` are referenced but **undefined**, affecting skill percentage margin, unused learning-chip padding, and a section-header margin shorthand. They are not valid design tokens.

### Buttons and cards

`.btn` is an inline-flex pill: 12px icon gap, 16px × 32px padding, weight 600, nowrap text. Primary uses green/near-black; secondary uses glass/white; ghost uses transparent/muted text with green hover. `.btn-ghost` lives in `education.css`. Outline/icon/size/block/loading variants exist but are not all used. `.btn-icon` defines a 56px circle; actual nav/social controls have independent sizes.

Buttons have a sheen pseudo-element, CSS hover/active transforms, and JS magnetic motion. Global/button `:focus-visible` uses a 2px green outline and 4px offset.

| Card | Base padding / radius | Layout / interaction |
|---|---|---|
| Project | 40px / 40px | Two columns, image zoom, lift/glow, JS tilt |
| Skill category | 32px / 40px | Vertical list, -8px hover lift/glow |
| Experience | 32px / 40px | Timeline, -6px hover lift/glow |
| Service | 40px / 40px | Flex column, lift/glow, JS tilt |
| Education | 40px / 40px | Icon/text row, -6px hover lift/glow |
| Contact | 24px / 30px | Icon/details row; transitions but no card-specific hover transform |

### Borders, radii, shadows, and layers

- Radius tokens: **12px**, **20px**, **30px**, **40px**, **999px** (small/medium/large/extra-large/round).
- Borders: `1px solid var(--color-border)` and `1px solid var(--color-border-light)`.
- Shadows: small `0 10px 25px rgba(0,0,0,.18)`; medium `0 15px 35px rgba(0,0,0,.28)`; large `0 25px 60px rgba(0,0,0,.45)`.
- Glows: small `0 0 12px rgba(57,255,20,.18)`; medium `0 0 20px rgba(57,255,20,.25), 0 0 45px rgba(57,255,20,.12)`; large `0 0 30px rgba(57,255,20,.40), 0 0 60px rgba(57,255,20,.20)`.
- Glass blur: **20px**. Transition tokens: **.25s/.35s/.55s ease**, with some component overrides.
- Layer tokens: background -2, grid -1, default 1, navbar 100, dropdown 500, overlay 900, modal 950, cursor 9999. Literal overrides include cursor 0, back-to-top 1000, scroll progress 99999, preloader 999999. The dialog overlay uses 900.

## Responsive Design

The stylesheet is predominantly desktop-first with max-width overrides. “Mobile First” is a service label, not its architectural strategy.

| Query | Rules / caveats |
|---|---|
| `max-width:1400px` | Container maximum 1200px. |
| `max-width:1200px` | Container maximum 960px; section edges 40px; Hero gap 48px; project gap 40px. About gap override loses to its base selector. |
| `max-width:992px` | Container maximum 720px; mobile menu; centered single-column Hero; portrait 380px; wrapping Hero buttons/stats; Experience metadata stacks; Education max-width 100%; Skills/Projects/Contact one column; reverse project order resets; Services two columns. About/footer stacking declarations are ineffective. |
| `max-width:768px` | Section edges 35px; container 92%; navbar height 64px; dropdown max 380px; portrait 300px; Hero title clamp 2.6rem/8vw/4rem; Services/form-row one column; footer-bottom stacks; modal padding 32px. `.nav-location span` does not match current markup. |
| `max-width:576px` | Section edges 30px; navbar width 94%, top 16px; navbar Resume hidden; portrait 240px; Hero title clamp 2.2rem/10vw/3rem, subtitle 1.1rem; stats full width; project links stack; About width/text/padding rules; Experience indentation/card padding reduced; Education stacks; form padding 24px. |
| `max-width:480px` | Case-study file only: modal padding 24px, max-height 95vh, CTAs stack. |
| `max-width:400px` | HTML/body hide overflow-x; navbar padding 16px; Hero title 2rem, description .95rem; Hero buttons full-width column; About paragraphs 14px; Experience/Education sizes reduce; `.section-title` 2rem; service/skill/project/contact/form padding 20px; footer headings 25px and some footer text 10px. |
| `max-height:600px` and `orientation:landscape` | Hero min-height auto; declared `padding-block:160px 80px` loses to higher-specificity Hero top/shared bottom rules. |
| `prefers-reduced-motion:reduce` | CSS disables animations/transitions and requests auto scrolling; JS motion remains partly active. |

JS uses **992px** for navigation and `(pointer:fine)` for cursor tracking. **Verified:** About remains two columns, footer stays a flex row, active mobile dropdown overflows right, and the 500px Hero portrait overflows/clips at 1024px. Hiding overflow is not proof all content fits. See [Testing and QA](#testing-and-qa).

## Animations and Interactions

All behavior is in [script.js](script.js); animation CSS is in [css/animations.css](css/animations.css), with component hover styles elsewhere.

| System | Implementation |
|---|---|
| Reveal | IntersectionObserver threshold .15, bottom root margin -80px; adds `.active` then unobserves; .8s opacity/translation transitions. |
| Entrance classes | `.fade-in/up/down/left/right`, `.zoom-in` define .8s keyframes. Directional classes also animate independently of observers; observer activation is not the sole visibility mechanism. |
| Stagger | CSS `.delay-1`–`.delay-5`: .1–.5s animation delays; JS `.delay-1`–`.delay-4`: .15/.30/.45/.60s transition delays. |
| Section fade | Separate observer threshold .15 adds `.section-visible`; .8s opacity animation. |
| Skill bars | Observer restores inline widths; 1.6s transition. |
| Counters | Observer threshold .4; requestAnimationFrame increments using an 1800ms target calculation. “Open” is skipped; the original plus suffix is lost. |
| Role rotation | Five strings, 2500ms interval, opacity/15px translation, 300ms text delay; no pause control. |
| Scroll/navigation | Active links, navbar scrolled styling, progress width, back-to-top visibility, smooth scrolling. |
| Hero parallax handler | Writes `backgroundPositionY = scrollY * .4`; no current Hero background image makes that visibly useful. |
| Magnetic buttons | `.btn` moves by 15% of pointer offset and resets on mouseleave. |
| Card tilt | Project/service cards use perspective(1000px), pointer-based X/Y rotation, -8px lift, then reset. |
| Cursor glow | Fine-pointer devices run continuous frame interpolation at .18; a 220px radial glow follows the pointer. |
| Back-to-top hover | JS -6px/1.08 scale; CSS colors/glow. |
| Images | Native loading attributes are used. `img[data-src]` observer code exists but has no matching current images. |
| Preloader | Full-screen dark overlay hides on window load, removed after 600ms. `.loader` has no spinner styling. Slow resources can delay dismissal. |
| Case study | Overlay fade/panel translation, open/close classes, focus move/restore, body overflow toggle. |
| Page visibility | Toggles `.page-hidden`; nothing uses it to pause timers/frame loops. |

Additional CSS utilities/keyframes include float, pulse glow, rotation, shimmer, neon borders, hover lift/scale/rotate, and the used scroll-bounce indicator. Definitions alone do not mean all effects are attached to current elements.

Reduced-motion CSS and the JS-added `.reduced-motion` class disable CSS animation/transitions. JS role changes, counters, cursor frames, magnetic motion, card tilt, and explicit smooth scrolling are not comprehensively gated. Preference changes after initialization are not handled. Direct scroll/resize listeners coexist with throttle/debounce wrappers, so event handling is not exclusively throttled.

## Accessibility

Implemented:

- English language, semantic header/nav/section/article/footer, one h1, named sections, alt text on all four images.
- Labeled toggle with expanded/controls attributes; keyboard-operable controls; Escape closes menu/dialog.
- Associated form labels, input types/required attributes, name/email autocomplete.
- Skill progressbar roles/labels/ranges; decorative icons and supporting effects hidden from assistive technology where specified.
- Dialog role/title/modal flag/hidden state, focus entry/restoration.
- Visible focus outlines, CSS reduced-motion support, labels on social icon/project links, noopener/noreferrer on new tabs.

Limitations: no skip link; only Hero inside main; heading-level jumps (About h2→h5, contact h5 labels); no dialog focus trap/inert background; no `aria-current`; hamburger label remains “Open navigation menu”; partial motion reduction; 10px footer text and cramped mobile layouts. No verified contrast audit, screen-reader testing, or WCAG conformance result. Preloader/reveal behavior needs a deliberate no-JS fallback. New-tab behavior is not consistently announced by accessible labels.

## SEO

| Item | Current implementation |
|---|---|
| Page title / `og:title` | `Syed Hashir Abrar Shah \| Front-End Developer` |
| Description | `Syed Hashir Abrar Shah — Front-End Developer & BS IT Student. I build responsive, user-focused web experiences with modern frontend technologies, combining clean UI/UX with practical backend integrations.` |
| Keywords | Hashir Shah, Portfolio, Front-End Developer, HTML, CSS, JavaScript, Supabase, PHP, MySQL, Web Developer, Pakistan |
| Author | Syed Hashir Abrar Shah |
| Robots meta | `index, follow` |
| Charset / viewport | UTF-8 / `width=device-width, initial-scale=1.0` |
| OG description | `Front-End Developer & BS IT Student building responsive, user-focused web experiences.` |
| OG type / image | `website` / relative `Images/Profile 2.png` |
| Favicon | SVG data URL: near-black rounded square, green “HS” |
| Headings | One h1 plus section/project/service/category headings; hierarchy caveats above |

No canonical link, `og:url`, Twitter Card tags, JSON-LD, `robots.txt`, sitemap, or web app manifest exists. The relative OG image may need an absolute URL for consistent previews. No indexing/rich-result verification is claimed.

## Performance

Implemented: no framework/runtime packages; end-of-body script; native lazy About/project images and eager Hero; Google font preconnects/`display=swap`; reusable CSS; one-time observer effects; some throttle/debounce handling; square Hero wrapper reserves aspect ratio.

Limits: 21 CSS files through imports; duplicate font requests with different weights; no build/minification; PNG/JPEG without `srcset`/`sizes` or WebP/AVIF alternatives; no explicit HTML image width/height; Hero PNG about 1.60 MB and flagship screenshot about .83 MB. Outside Hero's wrapper there is no consistent image-space reservation. “No Layout Shifts” is not a measured guarantee.

Unreferenced media is retained but not loaded by this page. Continuous animation, duplicate scroll handlers, blur, and persistent `will-change` add work. No service worker, offline cache, image pipeline, performance budget, or repository cache-header configuration exists. No Lighthouse scores, Core Web Vitals, or load benchmarks were measured.

## Portfolio Technology Stack

| Category | Used by this portfolio |
|---|---|
| Markup | HTML5, one static document |
| Styling | CSS3, custom properties, Grid, Flexbox, media queries, keyframes, backdrop filters |
| Behavior | Vanilla JavaScript, DOM events, IntersectionObserver, requestAnimationFrame, matchMedia, timers |
| Fonts | Google Fonts: Inter and Space Grotesk |
| Icons | Font Awesome Free 6.7.2 CSS/webfonts via cdnjs |
| Hosting | Netlify static site |
| Version control | Git and GitHub origin |
| Contact integrations | Ordinary mailto/professional/social links; no contact API |

**PHP, MySQL, Supabase, REST APIs, Looker, Tableau, Jira, and Microsoft Teams are skills/experience/project content, not portfolio runtime dependencies.** No React, Vue, Angular, Bootstrap, Tailwind, jQuery, Node application server, package manager configuration, database, authentication SDK, or analytics SDK is present. Temporary audit tooling is not a project dependency.

## Project Architecture

### HTML and content

`index.html` owns metadata, navigation, every section, links, cards, resume paths, and modal copy. No templating, hydration, server-rendering code, fetch-based content, or project data file exists. Flagship URL changes require updating card and modal. Section IDs connect header/footer anchors and active navigation.

### CSS ownership and cascade

`style.css` imports: base variables/reset/typography; layout utilities; buttons/cards/forms/case-study; navbar; Hero/About/Experience/Skills/Projects/Services/Education/Contact; footer; animations; responsive rules. Its own page, spacing, header, utility, focus, and motion rules come **after all imports**.

Classes are global, without modules/layers/preprocessing. Layout/style utilities overlap. Specificity matters as much as source order: later media rules do not necessarily defeat section selectors. `education.css` also styles hero socials, project technology chips, placeholders, and ghost buttons; removing it has cross-section effects.

### JavaScript and state

One strict-mode, non-module script caches DOM references; registers navigation/scroll/resize/key/mouse events; creates observers; runs role/cursor/counter effects; dismisses the preloader; and manages the dialog. State is variables and DOM classes/styles: role index, pointer coordinates, timer closures, open classes, remembered focus. No persistence, router, state library, or backend exists.

Local `debounce()`/`throttle()` helpers coexist with direct listeners. Initialization is split between DOMContentLoaded and window load. A success message is logged to the console. There is no submit handler or error-reporting service.

### Assets and configuration

Media/resume are in capitalized `Images/`; preserve filename case/spaces. The favicon is inline. No environment configuration or secrets are required. Aside from local Git metadata, there are no deployment configuration files, CI workflows, package manifests/lockfiles, test configuration, or license file.

## Complete Directory Structure

There are **35 maintained files: 1 HTML, 1 JavaScript, 21 CSS, 11 assets, and README**. `.git/` is local metadata and is not expanded. Temporary audit scripts are not part of the final project.

```text
/
├── .git/                              # Local Git metadata
├── index.html                         # Content, metadata, links, dialog
├── script.js                          # All browser behavior
├── README.md                          # Maintained documentation
├── css/
│   ├── style.css                      # Imports and final global rules
│   ├── responsive.css                 # Page-wide responsive overrides
│   ├── animations.css                 # Motion, progress, preloader, cursor
│   ├── base/
│   │   ├── variable.css               # Fonts and tokens
│   │   ├── reset.css                  # Browser/reset defaults
│   │   └── typography.css             # Text hierarchy and utilities
│   ├── components/
│   │   ├── buttons.css                # Button variants/states
│   │   ├── cards.css                  # Generic card utilities
│   │   ├── forms.css                  # Generic form utilities, partly unused
│   │   └── case-study.css             # Dialog layout/content/breakpoints
│   ├── layout/
│   │   ├── layout.css                 # Containers, section baseline, utilities
│   │   ├── navbar.css                 # Navbar, menu, back-to-top placement
│   │   └── footer.css                 # Footer/socials, back-to-top appearance
│   └── sections/
│       ├── hero.css
│       ├── about.css
│       ├── experience.css
│       ├── skills.css
│       ├── projects.css
│       ├── services.css
│       ├── education.css              # Also project chips/ghost buttons/legacy styles
│       └── contact.css
└── Images/
    ├── Image-2.png
    ├── Image.jpg
    ├── Profile 2.png
    ├── Profile.png
    ├── Project.png
    ├── Project_2.png
    ├── Syed-Hashir-Abrar-Shah-Resume.docx
    ├── Untitled - July 18, 2026 at 12.38.54.png
    ├── Video.mp4
    ├── Video_2.mp4
    └── Video_3.mp4
```

## Assets and Resume

| Asset under `Images/` | Dimensions | Bytes | Current use |
|---|---|---:|---|
| `Profile 2.png` | 1122 × 1402 | 1,604,560 | Hero and Open Graph image |
| `Image.jpg` | 1448 × 1448 | 285,763 | About |
| `Project_2.png` | 1349 × 633 | 826,157 | Shah Embroidery screenshot |
| `Project.png` | 1350 × 623 | 297,734 | ScentAura screenshot |
| `Image-2.png` | 864 × 1184 | 1,616,429 | Unreferenced by current HTML/CSS/JS |
| `Profile.png` | 924 × 1039 | 589,589 | Unreferenced |
| `Untitled - July 18, 2026 at 12.38.54.png` | 1000 × 1000 | 101,960 | Unreferenced; filename is not a verified milestone |
| `Video.mp4` | Not used by page | 423,963 | Retained, unreferenced media |
| `Video_2.mp4` | Not used by page | 8,844,680 | Retained, unreferenced media |
| `Video_3.mp4` | Not used by page | 12,262,860 | Retained, unreferenced media |
| `Syed-Hashir-Abrar-Shah-Resume.docx` | Word document | 14,983 | Navbar/Hero/About download |

There are no local fonts, SVG files, PDF resumes, or media optimization scripts. Unused assets are retained files, not implemented video/gallery functionality. Videos were inventoried for path, size, and references; playback/content was not audited because no page uses them.

DOCX text was inspected. It describes ScentAura with HTML/CSS/JavaScript/PHP/MySQL and older skills. Its degree institution is **GOVT. GORDON GRADUATE COLLEGE**, while the page says **University of Gujrat**. Its email/title wording also differs from the page, and it does not reflect the current flagship/Experience presentation. Reconcile these with the owner; this documentation does not infer an institutional affiliation or replace website facts with resume claims. The file was not modified.

## Local Development

Prerequisites: Git for cloning, an editor, and a modern browser. Internet is required for Google Fonts/Font Awesome. There is **no dependency installation, build step, npm command, environment variable, database, or secret required**.

```sh
git clone https://github.com/hashir-shah-56/Portfolio-Website.git
cd Portfolio-Website
```

Open `index.html` directly for a basic preview, or serve the root over HTTP for realistic URL/form behavior. If Python 3 is installed, one optional server is:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000/`. Python is optional tooling, not a dependency. VS Code with the optional Live Server extension can also serve `index.html`; no extension settings or fixed port are committed.

Edit HTML for content, the relevant CSS file for appearance, and `script.js` for behavior. Respect the import cascade and fragment-based navigation. Use synthetic form data only: default GET behavior exposes entered values in the URL.

## Deployment

**Published URL:** [portfolio-syed-hashir-abrar-shah.netlify.app](https://portfolio-syed-hashir-abrar-shah.netlify.app/).

The original README identifies this Netlify address; a 2026-09-29 HTTP check returned 200 and the expected title. Deployable output is static source: `index.html`, `css/`, `script.js`, and referenced `Images/` files. There is no generated `dist/` directory or build command.

For an equivalent Netlify static setup, publish the repository root and leave the build command empty. **These are source-appropriate settings, not verified dashboard settings.** Actual connected branch, automatic deploy trigger, account settings, hooks, dashboard environment values, caching, and headers cannot be determined from this repository.

No `netlify.toml`, `_redirects`, `_headers`, Functions, Forms attributes, CI workflow, or SPA fallback is committed. Same-document navigation does not require history-router redirects. A Git push is not documented as a verified automatic deployment workflow; deployment may be configured through the hosting dashboard.

### Published-source comparison: 2026-09-29

All **23 HTML/CSS/JS URLs** returned 200. After line-ending normalization, **21 matched** the working tree. Two differed:

| File | Published versus local |
|---|---|
| `index.html` | Published Experience says “Used Jira and Microsoft Teams…”; local says “Used Microsoft Teams…”. Published HTML also includes an extra Netlify hosting comment. |
| `css/responsive.css` | Local has an additional ≤400px `.about` flex-column/centering rule absent from production. |

Both local edits predated this task. They were preserved and not deployed. Main documentation describes local state; this table preserves the known production difference. Production media byte parity was not checked. Refresh this comparison after deployment rather than assuming a README update also publishes website changes.

## External Dependencies and Links

### Automatically loaded resources

| Resource | Purpose / loading method |
|---|---|
| `fonts.googleapis.com` | HTML stylesheet plus CSS import; Inter/Space Grotesk definitions |
| `fonts.gstatic.com` | Browser font requests; HTML preconnect with crossorigin |
| [Font Awesome Free 6.7.2](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css) | cdnjs stylesheet and associated webfonts for icons |

No third-party JS, analytics, map embed, CAPTCHA, form processor, application API, or Supabase client exists. Font Awesome's version is pinned, without integrity attribute or local copy. Google serves font definitions dynamically.

### Outbound destinations

Project URLs are under [Projects](#projects), profiles/email under [Owner and Public Information](#owner-and-public-information), WhatsApp under [Contact System](#contact-system). These are user-activated links, not embedded widgets. Resume is a local download. The production URL is documented here but is not a canonical link in HTML.

On 2026-09-29, portfolio production, Shah Embroidery demo, and the portfolio/Shah Embroidery/ScentAura GitHub repositories returned 200. Availability does not verify application features. LinkedIn, Instagram, mailto delivery, and WhatsApp delivery were not functionally tested; their destinations were checked against source only.

## Data and Privacy

- No code uses localStorage, sessionStorage, cookies, IndexedDB, or a portfolio database. No accounts or persisted app state exist.
- No analytics/tracking SDK appears in source. This is not a guarantee about hosting logs or external providers.
- Fonts/icons generate external resource requests. Professional/social links navigate to third parties when activated.
- The form's default GET puts name/email/subject/message into a request URL. On a hosted site these may reach hosting logs and browser history despite no message delivery. It is not a private local-only form.
- The resume is publicly downloadable; changing the page does not update the document automatically.

## Security Considerations

No API keys, auth tokens, credentials, `.env` files, backend endpoints, or secret configuration were found in audited working-tree source. This was not a full Git-history secret scan or infrastructure assessment.

Every current new-tab anchor uses `noopener noreferrer`. The portfolio does not insert external project data with `innerHTML`, execute external app JavaScript, or authenticate users. Supabase/RLS/admin security in the case study belongs to the showcased project and was not audited here.

The form has no effective submission/server validation. CDN resources lack Subresource Integrity. No repository CSP/security-header configuration exists; production header policy was not assessed. No license file exists; footer “All Rights Reserved” is not an open-source license grant.

## Browser Compatibility

The 2026-09-29 audit used **headless Microsoft Edge 154.0.4258.37 on Windows**, driven by temporary Playwright tooling, at widths 1440/1024/768/393/360px and height 1000px. This is desktop emulation, not physical device testing.

No committed support matrix, automated suite, or browser CI exists. Firefox, Safari, iOS Safari, Android browsers, and older versions were not tested. Modern features include IntersectionObserver, custom properties, Grid/Flexbox, clamp/min, aspect-ratio, focus-visible, backdrop-filter, and masks, without polyfills. “Cross Browser” is a capability label, not a test guarantee.

## Known Limitations

| Area | Verified limitation |
|---|---|
| Contact form | GET submission, validation disabled, no delivery/storage/feedback service; values enter URL. |
| Local/live parity | Two source files differ as detailed in Deployment. |
| Resume | Institution/contact/title and project/experience details differ from the current page; owner confirmation needed. |
| Internship dates | Only 2026 displayed; exact dates remain a TODO. |
| Responsive layout | 1024px document overflow/Hero clipping; About remains two columns; footer stays flex row; mobile menu exceeds viewport. |
| Navbar | Absolute-positioned, not sticky despite code comment. |
| Dialog | No focus trap/inert background; no separate route or multi-project dispatch. |
| Motion | CSS reduction does not stop all JS movement/timers; page-hidden class does not pause them. |
| Loading/no JS | Preloader depends on load/JS; reveal behavior lacks deliberate no-JS fallback. |
| Form styling | Generic input/textarea styles do not match current fields; defined feedback classes are not applied. |
| CSS correctness | Undefined `--space-6/28/72`; invalid `margin-top:-var(--space-8)` on technology chips; unsupported `size:100%` on small About image wrapper. |
| Legacy code | Unused learning, About stats/video, hero-social, placeholder, generic component, and `.mobile-menu` styles; `.nav-location` does not match current markup. |
| UI details | Counters lose “+”; header smooth navigation prevents native hash update; active links are class-only; footer year static. |
| Content scope | Two current projects; no ScentAura live demo/case study; no Currently Learning section. |
| SEO/performance | Missing metadata/files, duplicate fonts, large images, no measured performance scores. |
| Validation coverage | No retained tests, cross-browser/device certification, full contrast audit, or screen-reader assessment. |

These findings were documented without changing website functionality.

## Roadmap and Incomplete Work

**Implemented:** eight sections, current content inventory, responsive rules, shared section padding, professional/project links, DOCX downloads, animation systems, and one case-study dialog.

**Planned in source:** replace the internship year with exact owner-confirmed dates. This is the explicit HTML TODO; its example dates are not facts. No dated roadmap or committed feature schedule exists.

**Potential, not committed:** connect/remove the incomplete form; reconcile approved resume/page content; fix verified responsive specificity and dialog keyboard issues; complete reduced-motion/no-JS behavior; resolve invalid/unused CSS and duplicate font/event work; improve image delivery; add missing SEO data and repeatable QA. These derive from incomplete behavior/findings. More projects, case studies, technologies, or personal information require actual content and authorization.

## Testing and QA

There is **no automated test suite, test directory, package test command, or CI workflow**. The audit used a temporary script/local static server and removed the script afterward. Its browser tooling is not a portfolio dependency.

### Checks performed on 2026-09-29

| Check | Result / scope |
|---|---|
| Inventory | Read sole HTML/JS, all 21 CSS, previous README, Git history/origin; inventoried 11 assets and inspected DOCX text. |
| JS syntax | `node --check script.js` passed; Node was an audit tool. |
| Resources | Four displayed images decoded at recorded dimensions; external fonts/icons succeeded in the network-enabled run. |
| Page errors | No uncaught browser JS errors in exercised local flows; not an exhaustive console/network audit. |
| Anchors | All current fragment links resolve to IDs. |
| External-link markup | All new-tab anchors have noopener/noreferrer. |
| Counts | DOM verified 8 sections, 2 projects, 12 skills, 3 education cards. |
| Mobile navigation | At 393px, toggle/expanded state, Escape, and Skills selection/active state worked; menu bounds confirmed overflow. |
| Case study | Keyboard opening focuses Close; Escape closes/restores focus. This is not a focus-trap pass. |
| Back to top | Appeared after scrolling; keyboard activation returned scroll position to 0. |
| Form | Synthetic data submitted only to local in-memory server; invalid email accepted and values appeared in GET query. No real message sent. |
| Live sources/links | 23 source URLs fetched, 21 matching; 2 differences recorded. Five principal public URLs returned 200. |
| Final documentation pass | README anchor/file links, all 35 inventory entries, asset sizes, section IDs, breakpoints, and source facts checked; no broken documentation links or omitted inventory entries. Source/asset hashes matched the audit baseline. |

### Responsive measurements

These are content-container gaps with images loaded and CSS reduced motion enabled for stable geometry, not a certification of all animation/touch/keyboard states.

| Width × height | About → Experience and every subsequent transition | Hero → About | Document scroll width |
|---|---:|---:|---:|
| 1440 × 1000 | 120px | 121px | 1440px |
| 1024 × 1000 | 80px | approximately 111px | **1092px: overflow** |
| 768 × 1000 | 70px | 71px | 768px |
| 393 × 1000 | 60px | 61px | 393px |
| 360 × 1000 | 60px | 61px | 360px |

All measured transitions had positive clearance. Hero centering/minimum height, dynamic text, fonts, and viewport height can change its gap. At 393px the open menu began at x=196.5px and was about 323.3px wide, extending beyond the viewport despite normal closed-page scroll width. About computed as two columns and footer as a flex row at all five widths.

The 2026-09-28 spacing task also checked these widths and recorded pre-existing 1024px overflow. Its spacing check should not be treated as full layout certification.

### Manual regression checklist for future work

Serve the root over HTTP; record browser/version, viewport dimensions, date, and pass/fail findings. Recheck all eight anchors; mobile toggle/outside click/Escape/resize; project links/downloads; dialog open/close/focus/scroll; form with synthetic data; image loading; console/network errors; keyboard focus; reduced motion; all seven section transitions at 1440/1024/768/393/360px. Include the 480px modal and short-landscape rules when affected. Inspect element bounds rather than trusting overflow hiding.

Do not claim message delivery, compatibility, accessibility standards, or performance scores without performing the corresponding checks. Record remaining failures in Known Limitations/changelog.

## AI and Developer Handoff

1. Read README.md, including architecture, live differences, and limitations.
2. Inspect relevant current source and Git status; preserve unrelated local edits.
3. Preserve architecture unless a justified change is in scope.
4. Do not invent personal/professional information, dates, project claims, links, or proficiency.
5. Preserve black/neon-green identity unless redesign is requested.
6. Maintain responsive behavior; inspect computed rules, not comments alone.
7. Test changed behavior and affected viewport/keyboard states.
8. Update README.md in the same task to reflect final implementation.
9. Update the changelog with verified dates; distinguish changes from proposals.
10. Compare final documentation/code, including counts, URLs, assets, and limitations.

Code is implementation authority; README is the maintained human-readable source of truth. Resolve conflicts by inspection and documentation correction, not by blindly changing working code. Project URLs may appear in both card/modal; section changes affect the limited main wrapper; removing education CSS affects project chips/ghost buttons.

## Changelog

Dates come from Git history or the explicit audit date. Historical subjects are retained where they are the available evidence; they do not imply broader testing.

### 2026-09-29 — Comprehensive README Documentation Update

- Converted README into the single source of truth with mandatory same-task documentation/changelog maintenance.
- Documented architecture, files/assets, CSS cascade, JS state/behavior, and content ownership.
- Documented all portfolio sections, both projects, flagship case study, SYSCOM experience, twelve skills, four services, and three education entries.
- Documented exact design system, typography, cards/buttons, section spacing, responsive breakpoints, and effective cascade limitations.
- Added accessibility, SEO, performance, dependencies, privacy, security, and browser compatibility documentation.
- Added deployment/local setup guidance, verified live URLs, and recorded two-file production drift.
- Recorded form/resume/responsive/motion/dialog/CSS limitations, explicit TODO, and uncommitted potential improvements separately.
- Recorded actual source/browser/link checks, measurements, and developer/AI handoff requirements.
- Replaced the older “aspiring” overview with current public positioning and qualified responsive/integration claims with source evidence.
- Documentation-only change: website source/assets and existing local edits preserved.

### Date unknown — Existing local changes observed on 2026-09-29

- Experience coordination bullet changed from “Jira and Microsoft Teams” to “Microsoft Teams”; About still mentions Jira.
- Added ≤400px `.about` flex-column/centering rule.
- Already uncommitted at audit start; implementation dates are not inferred. Published files lacked these edits when checked.

### 2026-09-28 — Update V7 (`cc6fd6e`)

- Updated professional positioning, metadata/favicon, Hero/About/footer copy, resume/professional links.
- Added SYSCOM Experience and Education sections/styles; committed content includes all three education entries.
- Added Shah Embroidery & Art as featured project, screenshot/live/source links, and static case-study modal; ScentAura is the other current project.
- Restructured skills into Front-End, Backend / Database, Tools & Deployment; updated four services.
- Added case-study open/close/focus behavior and styles.
- Introduced shared responsive section padding, removing inconsistent section-specific edge values: 60px desktop edges, scaling to 40/35/30px without heading-margin patches.

### 2026-08-11 — Initial README (`cb5583d`)

- Original short overview, Netlify link, features, technology table; now superseded while preserving verified history.

### 2026-08-10 — Responsive Fix V5/V6 (`037e0ab`, `2861195`)

- Two responsive-fix revisions recorded in history; no automated test results accompany them.

### 2026-08-05 — Responsive Fix V4 (`bd4e25c`)

- Additional responsive revision recorded in Git history.

### 2026-08-03 — Refinement and responsive revisions

- Refining (`081ecc1`), its revert (`cecc38e`), main merge (`e637b61`), and Responsive fix V1/V2/V3 (`be313b4`, `154d9de`, `01ab1df`). Reverted work is not a current feature unless final source confirms it.

### 2026-07-31 — Portfolio refinement (`04cfdd7`)

- Commit subject: “Refiniing Of Portfolio”.

### 2026-07-22 — Initial repository (`b51f964`)

- First recorded commit. No earlier launch date is established by the repository.
