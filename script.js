let languageToggle, languageText;
let translations = {};

const savedLanguage = localStorage.getItem('language') || 'en';

async function loadTranslations() {
    try {
        const [en, ru] = await Promise.all([
            fetch('locales/en.json').then((r) => {
                if (!r.ok) throw new Error(`en.json: ${r.status}`);
                return r.json();
            }),
            fetch('locales/ru.json').then((r) => {
                if (!r.ok) throw new Error(`ru.json: ${r.status}`);
                return r.json();
            })
        ]);
        translations = { en, ru };
        return true;
    } catch (error) {
        console.error('Failed to load translations:', error);
        return false;
    }
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (!translations[lang] || translations[lang][key] === undefined) return;

        const translation = translations[lang][key];

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
            const icon = element.querySelector('i');
            const span = element.querySelector('span');
            if (icon && span) {
                element.innerHTML = '<span>' + translation + '</span> ' + icon.outerHTML;
            } else if (icon) {
                element.innerHTML = translation + ' ' + icon.outerHTML;
            } else {
                element.textContent = translation;
            }
        } else if (element.tagName === 'LABEL') {
            element.textContent = translation;
        } else if (element.tagName === 'H1' && key === 'hero-title') {
            if (lang === 'ru') {
                element.innerHTML = translation.replace('В Ценность', '<span class="highlight">В Ценность</span>');
            } else {
                element.innerHTML = translation.replace('Into Value', '<span class="highlight">Into Value</span>');
            }
        } else if (key === 'about-journey-text') {
            element.textContent = '';
            if (Array.isArray(translation)) {
                translation.forEach((lineText) => {
                    const span = document.createElement('span');
                    span.className = 'line';
                    span.textContent = lineText;
                    element.appendChild(span);
                });
            } else {
                element.innerHTML = translation;
            }
        } else if (typeof translation === 'string' && (translation.includes('<strong>') || translation.includes('<span>'))) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
}

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    if (languageText) languageText.textContent = lang === 'ru' ? 'RU' : 'EN';
    applyLanguage(lang);
    localStorage.setItem('language', lang);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            closeMobileNav();
        });
    });
}

function initNavbarScroll() {
    const navbar = document.querySelector('.site-header');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('site-header--scrolled', window.scrollY > 50);
    });
}

function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const siteNav = document.querySelector('.site-nav');
    if (!navToggle || !siteNav) return;

    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('site-nav--open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

function initContactForm() {
    const contactForm = document.getElementById('messageForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const lang = document.documentElement.getAttribute('lang');

        if (lang === 'ru') {
            alert(`Спасибо за ваше сообщение, ${name}! Это демонстрационная контактная форма. Для реального общения, пожалуйста, используйте email или WhatsApp, указанные выше.`);
        } else {
            alert(`Thank you for your message, ${name}! This is a demonstration contact form. For real communication, please use the email or WhatsApp provided above.`);
        }

        contactForm.reset();
    });
}

function closeMobileNav() {
    const siteNav = document.querySelector('.site-nav');
    const navToggle = document.getElementById('navToggle');
    if (siteNav?.classList.contains('site-nav--open')) {
        siteNav.classList.remove('site-nav--open');
        navToggle?.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const loaded = await loadTranslations();

    languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageText = languageToggle.querySelector('.language-text');

        if (loaded) {
            setLanguage(savedLanguage === 'ru' ? 'ru' : 'en');
        } else {
            document.documentElement.setAttribute('lang', 'en');
            if (languageText) languageText.textContent = 'EN';
        }

        languageToggle.addEventListener('click', () => {
            if (!loaded) return;
            const currentLang = document.documentElement.getAttribute('lang');
            setLanguage(currentLang === 'en' ? 'ru' : 'en');
        });
    }

    initSmoothScroll();
    initNavbarScroll();
    initMobileNav();
    initContactForm();
});
