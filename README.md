# cv-webpage

Bilingual (EN/RU) CV landing page for Ksenia Kurilova — Project Manager portfolio.

## Purpose

Static single-page resume showcasing experience, projects (Anima, Mood App), skills, and contact information. Built with [Litura](https://litura.net/) design system on a light theme.

## File structure

```
cv-webpage/
├── index.html          # Page markup, Litura components, data-i18n attributes
├── style.css           # Layout overrides only (~250 lines)
├── script.js           # i18n loader, interactions
├── locales/
│   ├── en.json         # English strings (source of truth for content)
│   └── ru.json         # Russian strings
├── me.img.jpg          # Profile photo
└── README.md
```

## Tech stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 |
| Design system | [Litura](https://litura.net/) `0.3.1-alpha` — `data-theme="light"`, `data-density="spacious"` |
| Icons | Font Awesome 6.4 (CDN) |
| i18n | `fetch()` + JSON locale files |
| Build | None — static files, deploy to GitHub Pages |

Litura CDN (pinned):

```html
<link rel="stylesheet" href="https://unpkg.com/litura@0.3.1-alpha/index.css">
```

## Litura components by section

| Section | Litura classes |
|---------|----------------|
| Nav | `.nav`, `.nav__item`, `.nav__link`, `.btn.btn--ghost` |
| Hero | `.hero`, `.label.label--pill`, `.stats-grid`, `.stat-card`, `.btn` |
| About | `.feature-grid`, `.feature-card`, `.card`, `.card--accented` |
| Projects | `.card.card--fluid`, `.badge`, `.tabs.tabs--pills` (CSS-only) |
| Skills | `.card`, `.badge`, custom `.skill-level` bars |
| Contact | `.card`, `.label.label--success` |
| Footer | `.text-muted` via custom `.site-footer` |

Project-specific layout lives in `style.css` (hero grid, fixed header, mobile nav, photo frame).

## i18n system

1. HTML elements carry `data-i18n="key"` with English fallback text matching `locales/en.json`
2. On load, `script.js` fetches both JSON files and calls `applyLanguage(lang)`
3. Language stored in `localStorage` key `language` (`en` | `ru`)
4. `document.documentElement.lang` updated on switch

### Special handlers in `applyLanguage()`

| Key / element | Behavior |
|---------------|----------|
| `hero-title` (H1) | Wraps "Into Value" / "В Ценность" in `<span class="highlight">` |
| `about-journey-text` | JSON array → `<span class="line">` per row |
| `BUTTON`, `A` with `<i>` | Preserves icon child on text update |
| `LABEL` | Tab labels (Litura CSS tabs) |
| Strings with `<strong>` | Applied via `innerHTML` |

### Adding a new translatable string

1. Add `data-i18n="new-key"` to the HTML element
2. Set English fallback text in HTML to match `locales/en.json`
3. Add `"new-key": "..."` to **both** `locales/en.json` and `locales/ru.json`

## JavaScript features

| Feature | Implementation |
|---------|----------------|
| Experience years | `calculateExperience()` from 2024-06-01 → `#experienceYears` |
| MVP counter | `animateCounter()` on `.stat-number[data-target]` when hero enters viewport |
| Language toggle | `#languageToggle` — skipped if locale fetch fails |
| Smooth scroll | Anchor links, 80px offset for fixed header |
| Mobile nav | `#navToggle` toggles `.site-nav--open`; closes on anchor click |
| Navbar shadow | `.site-header--scrolled` class on scroll > 50px |
| Demo form | `#messageForm` handler (no-op — form not in HTML) |

## Anima project tabs

CSS-only Litura tabs — **no JavaScript**. Litura supports tab input ids `t1`–`t6` only. Pattern:

```html
<input type="radio" name="anima-tabs" id="t1" class="tabs__input" checked>
<label for="t1" class="tabs__tab" data-i18n="anima-challenge">...</label>
<div class="tabs__panel" data-for="t1">...</div>
```

`data-for` must equal the radio `id`.

## Local development

`fetch()` for locale JSON **does not work** on `file://`. Use a local HTTP server:

```bash
npx serve .
# or
python -m http.server 8080
```

Open `http://localhost:3000` (serve) or `http://localhost:8080`.

## Deployment

Works on GitHub Pages — locale JSON served from same origin, no CORS issues.

## Guidelines for AI agents

- **Content source of truth:** `locales/en.json` and `locales/ru.json` — HTML fallbacks must match EN JSON
- Do not change resume content without explicit user request
- Do not revert to dark purple theme or custom Google Fonts
- Keep Litura as primary styling; extend via `style.css` overrides only
- Do not add JS for Anima tabs — use Litura CSS tabs pattern
- Pin Litura version in CDN URL when upgrading
- New UI strings require both locale files

## Review log (Bugbot)

Post-migration review verified and fixed:

| Severity | Issue | Fix |
|----------|-------|-----|
| High | `setLanguage` called when locale fetch fails | Only apply i18n when `loadTranslations()` succeeds |
| High | Litura CDN 404 (`0.3.2-alpha` unpublished) | Pinned to `0.3.1-alpha/index.css` (not `min/` — broken `@media layer`) |
| High | Anima tab ids not in Litura `t1`–`t6` set | Renamed to `t1`, `t2`, `t3` |
| Medium | `aria-expanded` stale after nav link click | `closeMobileNav()` resets toggle state |

Known limitations:

- Opening via `file://` shows English HTML only; language toggle disabled until served over HTTP
- Litura `0.3.x` is alpha — pin version before upgrading

## Links

- [Litura component playground](https://litura.net/examples/components/)
- [Litura GitHub](https://github.com/amadeuszprus/litura)
