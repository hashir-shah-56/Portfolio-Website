/* =======================================================
                    SCRIPT.JS
                    PART 1
======================================================= */

'use strict';

/* =======================================================
                    DOM ELEMENTS
======================================================= */

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

    document.body.style.overflow = 'hidden';

}

function closeMobileMenu() {

    navLinksContainer.classList.remove('active');

    navToggle.classList.remove('active');

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

            counter.textContent = number + "+";

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

    "BS Information Technology Student",

    "UI Enthusiast",

    "Web Designer",

    "Problem Solver"

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
                CURSOR GLOW
======================================================= */

const cursorGlow = document.querySelector('.cursor-glow');

if (cursorGlow && window.matchMedia("(pointer:fine)").matches) {

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function animateCursor() {

        glowX += (mouseX - glowX) * 0.18;
        glowY += (mouseY - glowY) * 0.18;

        cursorGlow.style.transform =
            `translate(${glowX}px, ${glowY}px)`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

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