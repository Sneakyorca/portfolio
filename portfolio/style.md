/\* # Style Guide

## Color Palette

### Light Mode

| Token                  | HSL           | Usage                        |
| ---------------------- | ------------- | ---------------------------- |
| `--background`         | `40 33% 96%`  | Page background (warm cream) |
| `--foreground`         | `220 20% 12%` | Primary text (deep charcoal) |
| `--primary`            | `12 80% 55%`  | Accent color (coral)         |
| `--primary-foreground` | `40 33% 96%`  | Text on primary              |
| `--secondary`          | `40 15% 88%`  | Secondary surfaces           |
| `--muted`              | `40 15% 90%`  | Muted backgrounds            |
| `--muted-foreground`   | `220 10% 46%` | Subdued text                 |
| `--card`               | `40 25% 93%`  | Card backgrounds             |
| `--border`             | `40 15% 85%`  | Borders and dividers         |

### Dark Mode

| Token          | HSL           | Usage                                   |
| -------------- | ------------- | --------------------------------------- |
| `--background` | `220 20% 8%`  | Page background (deep charcoal)         |
| `--foreground` | `40 20% 90%`  | Primary text (warm light)               |
| `--primary`    | `12 80% 58%`  | Accent color (coral, slightly brighter) |
| `--card`       | `220 18% 12%` | Card backgrounds                        |
| `--border`     | `220 15% 18%` | Borders and dividers                    |

## Typography

| Role                   | Font          | Weights            |
| ---------------------- | ------------- | ------------------ |
| **Display / Headings** | Space Grotesk | 300–700            |
| **Body**               | DM Sans       | 300, 400, 500, 700 |

### Usage

- All `h1`–`h6` elements use `font-display` (Space Grotesk)
- Body text uses `font-body` (DM Sans)
- Use Tailwind classes: `font-display`, `font-body`

## Spacing & Layout

- **Border radius**: `0.75rem` (`--radius`)
- **Nav height**: `4.5rem` (`--nav-height`)
- **Section padding**: `py-20 md:py-32 px-6 md:px-12 lg:px-20` (utility: `.section-padding`)
- **Max content width**: `max-w-7xl` (1400px container)

## Utility Classes

| Class                         | Effect                                             |
| ----------------------------- | -------------------------------------------------- |
| `.text-gradient`              | Coral gradient text (clips primary to transparent) |
| `.hover-lift`                 | Subtle lift on hover (`-translate-y-1`)            |
| `.section-padding`            | Consistent section spacing                         |
| `.reveal` / `.reveal.visible` | Scroll-triggered fade-in-up animation              |

## Animations

| Name             | Duration | Description                     |
| ---------------- | -------- | ------------------------------- |
| `fade-in-up`     | 0.6s     | Fade in + slide up 24px         |
| `fade-in`        | 0.5s     | Simple opacity fade             |
| `slide-in-right` | 0.6s     | Fade in + slide from right 40px |

## Component Conventions

- Use **shadcn/ui** components (`Button`, `Card`, `Badge`, etc.)
- Always use semantic tokens (`bg-background`, `text-foreground`, `bg-primary`) — never raw color values
- All colors must be HSL format in CSS variables
- Dark mode via `.dark` class on `<html>`

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS v3
- shadcn/ui (Radix primitives)
- Lucide icons
- class-variance-authority for component variants
  \*/
