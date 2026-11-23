# Sumit Jaiswal — Portfolio

Modern, futuristic personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**.

## Features

- Dark mode by default with polished light mode toggle (persisted)
- Smooth scroll + scroll-triggered section animations
- Interactive skill bars with fill animations
- Project cards with hover fill effects
- Experience timeline
- Book Reviews placeholder section
- Contact form UI (frontend only)
- SEO metadata + Open Graph

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | Run ESLint               |

## Customize

- Resume content lives in `src/data/portfolio.ts`
- Design tokens (colors, glass, fills) in `src/app/globals.css`
- Set `NEXT_PUBLIC_SITE_URL` for absolute OG URLs + QR codes in production
- Replace `public/Sumit_Jaiswal_Resume.pdf` with your real resume PDF
- Shareable resume page: `/resume` (QR codes point here)
