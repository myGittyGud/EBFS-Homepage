# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start development server (localhost:3000)
npm run build   # Production build
npm run start   # Run production build
```

No linting, formatting, or test tooling is configured.

## Architecture

Single-page Next.js 15 (App Router) marketing website for EB Field Support AS — a Norwegian lighting control systems service company.

**Key files:**
- `app/layout.js` — Root layout; Space Grotesk font via Google Fonts; default language `lang="no"`
- `app/page.js` — Entire site as a single `'use client'` component
- `app/globals.css` — All styles; CSS variables for theming; one breakpoint at 720px

**`app/page.js` structure:**
- All bilingual content lives in a single `translations` object with `no` and `en` keys; language is toggled via `useState`
- Sections in order: Header → Hero → Services → About → Contact → Footer
- Contact info (email, phone) is stored as split strings revealed on button click — intentional to avoid plain-text exposure in HTML source
- SVG icons (IconWrench, IconShield, IconHeadset) are defined inline; no icon library

**Styling conventions:**
- Vanilla CSS with CSS variables (`--accent`, `--bg`, `--text-muted`, etc.) defined in `globals.css`
- No Tailwind, no CSS-in-JS, no component library
- Layout uses `.container` class capped at `--max-w: 1080px`

**Internationalization:**
- No i18n library — translations are a plain JS object in `page.js`; adding a language means extending that object and the toggle logic

**My Instructions:**
- Do not split page.js into multiple components unless asked
- All text must go through translations object
- Keep styling in globals.css
- Do not introduce new frameworks/libraries
