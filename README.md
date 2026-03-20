# Fizzflow

A minimal, scroll-driven hero experience built for the Itzfizz Digital internship assessment.

Fizzflow turns scroll into motion: a letter-spaced headline, staggered intro animation, and a smooth scroll-linked visual system designed to feel premium, fast, and intentional.

## Live demo

[View Live Project](https://your-live-demo-link-here)

## Repository

[GitHub Repository](https://github.com/HarshYadav1711/fizzflow)

## Why this project stands out

This project was built with one goal in mind: create a polished hero section that feels like a real product experience, not a template.

The implementation focuses on:

- strong visual hierarchy
- smooth intro motion
- scroll-linked interaction
- clean, modular code
- performance-first animation design

## Features

- Full-screen hero section above the fold
- Letter-spaced headline with staggered reveal
- Stats that animate in with subtle sequencing
- Scroll-triggered visual movement tied to progress
- Transform-only animation pipeline for smooth performance
- Responsive layout with a premium dark aesthetic
- Original visual direction, not a copy of the reference demo

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- ScrollTrigger

## Animation approach

The motion system is intentionally simple and controlled:

- Intro animations use staggered fades and upward movement
- Scroll behavior is tied directly to scroll progress
- Only `transform` and `opacity` are used for motion
- GSAP cleanup is handled properly to keep the implementation stable

This keeps the experience smooth, deterministic, and lightweight.

## Folder structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  Hero/
    HeadlineLetters.tsx
    Hero.tsx
    hero.constants.ts

hooks/
  useHeroVisualMouseParallax.ts
  useScrollHeroMotion.ts

lib/
  gsap.ts
```

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

## Notes

- No paid APIs are used
- No external billing is required
- The project is intentionally scoped to the assignment brief
- The design is original and focused on motion quality rather than visual overload

## Deployment

### Production build (local)

```bash
npm run build
npm run start
```

`npm run build` must complete with no errors before deploy. The app is statically prerendered where possible (see build output).

### Vercel (recommended)

This is a standard **Next.js** App Router project—no custom server or environment variables are required for the default hero.

1. Push the repo to **GitHub** (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com) and **Import** the repository.
3. **Framework preset:** Next.js (auto-detected).
4. **Build command:** `npm run build` (default).
5. **Output:** Next.js default (no static `out/` export unless you change config).
6. **Install command:** `npm install` (default).
7. Deploy. Vercel runs production install + build on each push to the connected branch.

Optional: set **Root directory** if the app lives in a subfolder (not needed for this repo).

**Do not commit** build artifacts: `.next/`, `node_modules/`, or `.env*.local` (see `.gitignore`). If `.next` was ever committed, remove it from git history and rely on CI to build fresh.

### Source control

- **GitHub** (or similar) for source control and review
- **Vercel** for the live demo URL (update the [Live demo](#live-demo) link after the first deploy)
