# Portfolio

A modern single-page portfolio built with React and Vite. It presents an animated personal site with a theme-aware layout, an intro hero, about/work/skills sections, and a contact area designed for quick conversation and hiring inquiries.

## Features

- Responsive one-page layout with clear section-based navigation
- Light and dark themes with persisted user preference
- Scroll-triggered reveal animations for a more polished feel
- Background visual effects and layered section styling
- Work, skills, about, and contact sections tailored for a portfolio presentation

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 9

## Project Structure

- `src/App.jsx` wires together the site layout and shared effects
- `src/main.jsx` mounts the app and theme provider
- `src/sections/` contains the main page sections
- `src/components/` contains reusable UI pieces
- `src/hooks/` contains the theme context and reveal animation hook

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start a local development server and print the local URL in the terminal.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project

## Deployment

This project is ready to deploy as a static Vite app. A common setup is Vercel, but any static hosting platform that supports SPA deployments will work.

## Notes

- The theme preference is saved in `localStorage`.
- Reveal animations are driven by `IntersectionObserver` and apply to elements with animation utility classes.
- Content and visuals can be customized by editing the section components under `src/sections/`.
