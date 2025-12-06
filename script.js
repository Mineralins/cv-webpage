// Language Toggle - wait for DOM to load
let languageToggle, languageText;

// Check for saved language or default to English
const savedLanguage = localStorage.getItem('language') || 'en';

// Language translations
const translations = {
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-badge': 'PROJECT MANAGER',
        'hero-title': 'Turning Vision Into Value',
        'hero-subtitle': 'Building digital ecosystems that empower teams, optimize spaces, and create meaningful impact through technology.',
        'hero-experience': 'Years of Experience',
        'hero-mvp': 'Months to MVP',
        'hero-projects': 'Projects Managed',
        'hero-cta1': 'Explore Opportunities',
        'hero-cta2': 'View Projects',
        
        // About Section
        'about-title': 'About Me',
        'about-philosophy': 'My Philosophy',
        'about-philosophy-text': 'I believe in building products that solve real problems. My approach combines strategic thinking with hands-on execution, ensuring that every feature delivers value to both users and business.',
        'about-journey': 'My Journey',
        'about-journey-text': 'From assistant to project manager to HR manager - I\'ve experienced business from multiple angles. This diverse background helps me understand stakeholder needs and bridge gaps between teams.',
        'about-seek': 'What I Seek',
        'about-seek-text': 'Looking for opportunities in Serbia where I can contribute to innovative projects, work with passionate teams, and help build products that make a difference.',
        'about-quote': '"Seeking to join a dream team of skilled professionals to build impactful products that simplify processes and improve lives."',
        'about-quote-author': '— From my resume',
        
        // Projects Section
        'projects-title': 'Project Portfolio',
        'projects-subtitle': 'From enterprise ecosystems to innovative micro-products',
        
        // Anima Project
        'anima-title': 'Anima: Smart Office Ecosystem Platform',
        'anima-description': 'A comprehensive microservices-based SaaS platform transforming hybrid work environments through intelligent space management, real-time analytics, and automation.',
        'anima-feature1': 'Microservices Architecture',
        'anima-feature2': 'Multi-module System',
        'anima-feature3': 'SaaS & On-Premise',
        'anima-components': '<strong>Platform Components:</strong> Booking system • Service Desk • Social modules • Engineering systems control • Multimedia management • Mobile applications (iOS/Android) • Web portal • Admin panel',
        'anima-challenge': 'Challenge',
        'anima-challenge-text': 'To develop an enterprise-grade platform that optimizes office space utilization for hybrid work models, integrating multiple building systems and providing data-driven insights for large corporations.',
        'anima-challenge1': '40%+ daily office space vacancy reduction challenge',
        'anima-challenge2': 'Integration of disparate systems: SCADA, HVAC, lighting, access control',
        'anima-challenge3': 'Real-time analytics for space optimization',
        'anima-challenge4': 'SaaS and On-Premise deployment options',
        'anima-role': 'My Role',
        'anima-role-title': '<strong>My Role:</strong> Project Manager | Scrum Master',
        'anima-role1': '<strong>End-to-end project leadership</strong> from concept to deployment',
        'anima-role2': '<strong>Microservices architecture planning</strong> and module coordination',
        'anima-role3': '<strong>Team management:</strong> 5 core specialists + outsourced teams',
        'anima-role4': '<strong>Agile/Scrum implementation</strong> with Jira/Bitrix24',
        'anima-role5': '<strong>Technical specification development</strong> for web/mobile apps',
        'anima-role6': '<strong>UX/UI testing</strong> and customer journey optimization',
        'anima-role7': '<strong>Integration coordination</strong> with corporate systems (Bitrix24, Kontur, etc.)',
        'anima-role8': '<strong>Pre-sales activities:</strong> demos, negotiations, contract preparation',
        'anima-role9': '<strong>Product monetization strategy</strong> and financial modeling',
        'anima-role10': '<strong>Compliance:</strong> Russian software registry & patent applications',
        'anima-outcome': 'Outcome',
        'anima-outcome-text': 'Successfully launched an award-winning enterprise solution:',
        'anima-outcome1': 'Achieved MVP in 7 months under tight deadlines',
        'anima-outcome2': 'Secured Skolkovo residency and domestic software registry inclusion',
        'anima-outcome3': 'Closed enterprise sales to major commercial companies',
        'anima-outcome4': 'Built and scaled core team from 0 to 5 key specialists',
        'anima-outcome5': 'Developed monetization strategy and financial models',
        'anima-outcome6': 'Registered software with Rospatent for IP protection',
        'anima-tech': 'Tech Stack:',
        'anima-link1': 'View Product Website',
        'anima-link2': 'Code Samples (Available on request)',
        
        // Mood Project
        'mood-title': 'Mood Tracking Interactive Application',
        'mood-description': 'An interactive exhibition application that captures and visualizes participant emotions in real-time, demonstrating innovative approach to user engagement and experience analytics.',
        'mood-highlight1': '2-week development cycle',
        'mood-highlight2': '500+ exhibition visitors',
        'mood-highlight3': 'Real-time analytics dashboard',
        'mood-challenge': 'Challenge',
        'mood-challenge-text': 'Create an engaging, lightweight application for a corporate exhibition to demonstrate user-centric approach, collect emotional feedback from attendees, and showcase real-time data visualization capabilities.',
        'mood-role': 'My Role & Responsibilities',
        'mood-role-text': '<strong>End-to-end product management:</strong>',
        'mood-role1': '<strong>Concept development:</strong> From idea to functional prototype',
        'mood-role2': '<strong>UI/UX design:</strong> Created mood selection interface and real-time visualization',
        'mood-role3': '<strong>Development oversight:</strong> Managed frontend development team',
        'mood-role4': '<strong>Exhibition deployment:</strong> Coordinated installation and technical support',
        'mood-role5': '<strong>Analytics implementation:</strong> Real-time mood tracking and visualization',
        'mood-role6': '<strong>Stakeholder presentations:</strong> Demonstrated product value to investors and clients',
        'mood-outcome': 'Outcome',
        'mood-outcome-text': 'A successful exhibition installation that engaged 500+ visitors, provided real-time mood analytics, demonstrated technical capabilities to potential clients, and generated leads for the main Anima platform.',
        'mood-link1': 'View Exhibition Demo',
        
        // Skills Section
        'skills-title': 'PM Toolkit & Skills',
        'skills-subtitle': 'Combining technical understanding with people leadership',
        'skills-methodologies': 'Methodologies',
        'skills-tools': 'Tools & Technologies',
        'skills-languages': 'Languages',
        'skills-competencies': 'Core Competencies',
        
        // Contact Section
        'contact-title': 'Let\'s Connect',
        'contact-subtitle': 'Open to opportunities in Serbia (Remote or Relocation)',
        'contact-info-title': 'Get in Touch',
        'contact-info-text': 'I\'m actively exploring project management opportunities where I can contribute to innovative teams and meaningful products. My experience with enterprise SaaS platforms and agile methodologies can help drive your projects to success.',
        'contact-email': 'Email',
        'contact-phone': 'Phone/WhatsApp',
        'contact-location': 'Location & Availability',
        'contact-form-title': 'Send a Message',
        'contact-name': 'Your Name',
        'contact-email-input': 'Your Email',
        'contact-subject': 'Subject',
        'contact-message': 'Your message...',
        'contact-submit': 'Send Message',
        'contact-note': 'This contact form is for demonstration purposes. Please use email or WhatsApp for direct communication.',
        'contact-availability': 'Available for opportunities in Serbia',
        'contact-roles': 'Interested in roles: Project Manager, Product Manager, Technical PM, Delivery Manager in IT sector',
        
        // Footer
        'footer-tagline': 'Product & Project Manager | Turning Vision Into Value',
        'footer-download': 'Download CV',
        'footer-note': 'Resume updated: December 2025 | Experience calculated dynamically | Website built with HTML, CSS & JavaScript'
    },
    ru: {
        // Navigation
        'nav-about': 'Обо мне',
        'nav-projects': 'Проекты',
        'nav-skills': 'Навыки',
        'nav-contact': 'Контакты',
        
        // Hero Section
        'hero-badge': 'ПРОЕКТНЫЙ МЕНЕДЖЕР',
        'hero-title': 'Превращаю Видение В Ценность',
        'hero-subtitle': 'Создаю цифровые экосистемы, которые расширяют возможности команд, оптимизируют пространства и создают значимое влияние через технологии.',
        'hero-experience': 'Лет опыта',
        'hero-mvp': 'Месяцев до MVP',
        'hero-projects': 'Управляемых проектов',
        'hero-cta1': 'Рассмотреть возможности',
        'hero-cta2': 'Смотреть проекты',
        
        // About Section
        'about-title': 'Обо мне',
        'about-philosophy': 'Моя философия',
        'about-philosophy-text': 'Я верю в создание продуктов, решающих реальные проблемы. Мой подход сочетает стратегическое мышление с практической реализацией, гарантируя, что каждая функция приносит ценность как пользователям, так и бизнесу.',
        'about-journey': 'Мой путь',
        'about-journey-text': 'От помощника до проектного менеджера и HR-менеджера - я изучила бизнес с разных сторон. Этот разнообразный опыт помогает мне понимать потребности стейкхолдеров и устранять разрывы между командами.',
        'about-seek': 'Что я ищу',
        'about-seek-text': 'Ищу возможности в Сербии, где могу внести вклад в инновационные проекты, работать со страстными командами и помогать создавать продукты, которые имеют значение.',
        'about-quote': '"Ищу команду мечты из опытных профессионалов для создания значимых продуктов, которые упрощают процессы и улучшают жизнь."',
        'about-quote-author': '— Из моего резюме',
        
        // Projects Section
        'projects-title': 'Портфолио проектов',
        'projects-subtitle': 'От корпоративных экосистем до инновационных микро-продуктов',
        
        // Anima Project
        'anima-title': 'Anima: Платформа экосистемы умного офиса',
        'anima-description': 'Комплексная SaaS-платформа на основе микросервисной архитектуры, преобразующая гибридные рабочие среды через интеллектуальное управление пространством, аналитику в реальном времени и автоматизацию.',
        'anima-feature1': 'Микросервисная архитектура',
        'anima-feature2': 'Многомодульная система',
        'anima-feature3': 'SaaS и On-Premise',
        'anima-components': '<strong>Компоненты платформы:</strong> Система бронирования • Service Desk • Социальные модули • Управление инженерными системами • Управление мультимедиа • Мобильные приложения (iOS/Android) • Веб-портал • Админ-панель',
        'anima-challenge': 'Задача',
        'anima-challenge-text': 'Разработать корпоративную платформу, оптимизирующую использование офисного пространства для гибридных рабочих моделей, интегрирующую различные строительные системы и предоставляющую аналитику на основе данных для крупных корпораций.',
        'anima-challenge1': 'Сокращение ежедневной простаивающей площади офиса на 40%+',
        'anima-challenge2': 'Интеграция различных систем: SCADA, HVAC, освещение, контроль доступа',
        'anima-challenge3': 'Аналитика в реальном времени для оптимизации пространства',
        'anima-challenge4': 'Варианты развертывания SaaS и On-Premise',
        'anima-role': 'Моя роль',
        'anima-role-title': '<strong>Моя роль:</strong> Менеджер проектов | Scrum Master',
        'anima-role1': '<strong>Полное руководство проектом</strong> от концепции до внедрения',
        'anima-role2': '<strong>Планирование микросервисной архитектуры</strong> и координация модулей',
        'anima-role3': '<strong>Управление командой:</strong> 5 ключевых специалистов + аутсорс-команды',
        'anima-role4': '<strong>Внедрение Agile/Scrum</strong> с использованием Jira/Bitrix24',
        'anima-role5': '<strong>Разработка технических заданий</strong> для веб/мобильных приложений',
        'anima-role6': '<strong>Тестирование UX/UI</strong> и оптимизация customer journey',
        'anima-role7': '<strong>Координация интеграций</strong> с корпоративными системами (Битрикс24, Контур и др.)',
        'anima-role8': '<strong>Пре-сейл активность:</strong> демонстрации, переговоры, подготовка контрактов',
        'anima-role9': '<strong>Стратегия монетизации продукта</strong> и финансовое моделирование',
        'anima-role10': '<strong>Соответствие требованиям:</strong> реестр отечественного ПО и патенты',
        'anima-outcome': 'Результат',
        'anima-outcome-text': 'Успешно запущено корпоративное решение:',
        'anima-outcome1': 'Достигнуто MVP за 7 месяцев в сжатые сроки',
        'anima-outcome2': 'Получен статус резидента Сколково и включение в реестр отечественного ПО',
        'anima-outcome3': 'Закрыты продажи корпоративным клиентам',
        'anima-outcome4': 'Создана и расширена основная команда с 0 до 5 ключевых специалистов',
        'anima-outcome5': 'Разработана стратегия монетизации и финансовые модели',
        'anima-outcome6': 'Зарегистрировано программное обеспечение в Роспатенте',
        'anima-tech': 'Технологический стек:',
        'anima-link1': 'Сайт продукта',
        'anima-link2': 'Примеры кода (по запросу)',
        
        // Mood Project
        'mood-title': 'Интерактивное приложение для отслеживания настроения',
        'mood-description': 'Интерактивное выставочное приложение, которое фиксирует и визуализирует эмоции участников в реальном времени, демонстрируя инновационный подход к вовлечению пользователей и аналитике опыта.',
        'mood-highlight1': '2-недельный цикл разработки',
        'mood-highlight2': '500+ посетителей выставки',
        'mood-highlight3': 'Панель аналитики в реальном времени',
        'mood-challenge': 'Задача',
        'mood-challenge-text': 'Создать увлекательное, легкое приложение для корпоративной выставки, чтобы продемонстрировать пользовательский подход, собрать эмоциональную обратную связь от посетителей и показать возможности визуализации данных в реальном времени.',
        'mood-role': 'Моя роль и обязанности',
        'mood-role-text': '<strong>Полное управление продуктом:</strong>',
        'mood-role1': '<strong>Разработка концепции:</strong> от идеи до функционального прототипа',
        'mood-role2': '<strong>Дизайн UI/UX:</strong> создание интерфейса выбора настроения и визуализации в реальном времени',
        'mood-role3': '<strong>Контроль разработки:</strong> управление фронтенд-командой',
        'mood-role4': '<strong>Развертывание на выставке:</strong> координация установки и технической поддержки',
        'mood-role5': '<strong>Реализация аналитики:</strong> отслеживание настроения и визуализация в реальном времени',
        'mood-role6': '<strong>Презентации стейкхолдерам:</strong> демонстрация ценности продукта инвесторам и клиентам',
        'mood-outcome': 'Результат',
        'mood-outcome-text': 'Успешная выставочная инсталляция, которая вовлекла 500+ посетителей, предоставила аналитику настроения в реальном времени, продемонстрировала технические возможности потенциальным клиентам и сгенерировала лиды для основной платформы Anima.',
        'mood-link1': 'Демо на выставке',
        
        // Skills Section
        'skills-title': 'Инструменты и навыки PM',
        'skills-subtitle': 'Сочетание технического понимания и лидерских качеств',
        'skills-methodologies': 'Методологии',
        'skills-tools': 'Инструменты и технологии',
        'skills-languages': 'Языки',
        'skills-competencies': 'Ключевые компетенции',
        
        // Contact Section
        'contact-title': 'Свяжитесь со мной',
        'contact-subtitle': 'Открыта для возможностей в Сербии (удаленно или переезд)',
        'contact-info-title': 'Связаться',
        'contact-info-text': 'Активно изучаю возможности в проектном менеджменте, где могу внести вклад в инновационные команды и значимые продукты. Мой опыт работы с корпоративными SaaS-платформами и гибкими методологиями может помочь в успехе ваших проектов.',
        'contact-email': 'Email',
        'contact-phone': 'Телефон/WhatsApp',
        'contact-location': 'Локация и доступность',
        'contact-form-title': 'Отправить сообщение',
        'contact-name': 'Ваше имя',
        'contact-email-input': 'Ваш email',
        'contact-subject': 'Тема',
        'contact-message': 'Ваше сообщение...',
        'contact-submit': 'Отправить сообщение',
        'contact-note': 'Эта контактная форма предназначена для демонстрации. Для прямого общения используйте email или WhatsApp.',
        'contact-availability': 'Доступна для возможностей в Сербии',
        'contact-roles': 'Интересующие роли: Менеджер проектов, Продуктовый менеджер, Технический PM, Delivery Manager в IT-секторе',
        
        // Footer
        'footer-tagline': 'Продуктовый и проектный менеджер | Превращаю видение в ценность',
        'footer-download': 'Скачать резюме',
        'footer-note': 'Резюме обновлено: декабрь 2025 | Опыт рассчитывается динамически | Сайт построен на HTML, CSS & JavaScript'
    }
};

// Function to apply language
function applyLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                // For buttons and links, preserve icons if they exist
                const icon = element.querySelector('i');
                const span = element.querySelector('span');
                if (icon && span) {
                    element.innerHTML = '<span>' + translation + '</span> ' + icon.outerHTML;
                } else if (icon) {
                    element.innerHTML = translation + ' ' + icon.outerHTML;
                } else {
                    element.textContent = translation;
                }
            } else if (element.tagName === 'H1' && key === 'hero-title') {
                // Special handling for h1 with highlight
                if (lang === 'ru') {
                    element.innerHTML = translation.replace('В Ценность', '<span class="highlight">В Ценность</span>');
                } else {
                    element.innerHTML = translation.replace('Into Value', '<span class="highlight">Into Value</span>');
                }
            } else {
                // Check if translation contains HTML
                if (translation.includes('<strong>') || translation.includes('<span>')) {
                    element.innerHTML = translation;
                } else {
                    // Default: replace text content
                    element.textContent = translation;
                }
            }
        }
    });
}

// Initialize language on DOM load
document.addEventListener('DOMContentLoaded', () => {
    languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageText = languageToggle.querySelector('.language-text');
        
        // Apply saved language
        if (savedLanguage === 'ru') {
            document.documentElement.setAttribute('lang', 'ru');
            if (languageText) languageText.textContent = 'RU';
            applyLanguage('ru');
        } else {
            document.documentElement.setAttribute('lang', 'en');
            if (languageText) languageText.textContent = 'EN';
            applyLanguage('en');
        }
        
        // Language toggle functionality
        languageToggle.addEventListener('click', () => {
            const currentLang = document.documentElement.getAttribute('lang');
            
            if (currentLang === 'en') {
                document.documentElement.setAttribute('lang', 'ru');
                if (languageText) languageText.textContent = 'RU';
                applyLanguage('ru');
                localStorage.setItem('language', 'ru');
            } else {
                document.documentElement.setAttribute('lang', 'en');
                if (languageText) languageText.textContent = 'EN';
                applyLanguage('en');
                localStorage.setItem('language', 'en');
            }
        });
    }
});

// Calculate years of experience dynamically
function calculateExperience() {
    const startDate = new Date('2024-08-01');
    const now = new Date();
    const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    const years = months / 12;
    return years.toFixed(1); // Returns like "1.5"
}

// Update experience in hero section
const experienceElement = document.getElementById('experienceYears');
if (experienceElement) {
    experienceElement.textContent = calculateExperience();
}

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters when in view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number:not(#experienceYears)');
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe hero section for counters
const heroSection = document.querySelector('.hero');
if (heroSection) {
    observer.observe(heroSection);
}

// Project tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form submission (demo - informational only)
const contactForm = document.getElementById('messageForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const lang = document.documentElement.getAttribute('lang');
        
        // Show informational message (no backend required)
        if (lang === 'ru') {
            alert(`Спасибо за ваше сообщение, ${name}! Это демонстрационная контактная форма. Для реального общения, пожалуйста, используйте email или WhatsApp, указанные выше.`);
        } else {
            alert(`Thank you for your message, ${name}! This is a demonstration contact form. For real communication, please use the email or WhatsApp provided above.`);
        }
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.75rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '1rem 0';
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections as they come into view
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        fadeInObserver.observe(section);
    });
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});