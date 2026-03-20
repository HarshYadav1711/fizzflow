# Fizzflow

A minimal, scroll-driven hero experience built for the Itzfizz Digital internship assessment.

Fizzflow turns scroll into motion: a letter-spaced headline, staggered intro animation, and a smooth scroll-linked visual system designed to feel premium, fast, and intentional.

## Live Demo

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

## Tech Stack

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

## Folder Structure

```bash
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
  useScrollHeroMotion.ts

lib/
  gsap.ts

## Getting Started

-> Install dependencies
npm install

-> Run the development server
npm run dev

-> Build for production
npm run build

## Notes

No paid APIs are used

No external billing is required

The project is intentionally scoped to the assignment brief

The design is original and focused on motion quality rather than visual overload

## Deployment

Recommended deployment:

Vercel for the live demo

GitHub for source control and review