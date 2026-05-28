# RicoFast — A design-led SaaS template for Astro

> [中文文档](README-zh.md) | English

An open-source SaaS website template built with Astro 5.15 and Tailwind CSS v4. Designed for indie hackers, AI/dev-tool teams, and OSS maintainers who want a polished, design-forward product site.

![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

**Links:** [Live Demo](https://ricofast.pages.dev/) · [GitHub](https://github.com/ricocc/ricoui-saas-template) · [Changelog](https://ricofast.pages.dev/changelog) · [Design Reference](https://ricofast.pages.dev/elements)

---

## Why RicoFast

Most open-source SaaS templates fall into two camps: bare starters that leave you rebuilding everything, or maximalist bundles that prioritize feature coverage over design quality. RicoFast focuses on design and visual polish — a documented design system that AI tools can accurately interpret, helping you produce pages with great visual and design quality.

## Features

- **11 production-ready pages** — Home (12 sections), Features, Pricing, Blog, Changelog, About, Contact, Sign in, Sign up, Elements, 404
- **15+ reusable section components** — Hero, FeatureGrid, FeatureDetail, Pricing cards, Comparison table, FAQ, Steps, Tech stack, Use cases, FinalCTA, and more
- **Auth page templates** — Sign in & Sign up in two layout variants (split-screen and centered card), ready to wire up your auth provider
- **MDX-powered Blog & Changelog** — Astro v5 Content Layer API, ready for v6
- **Built-in dark mode** — class-based, no flash on load, contrast-audited
- **Token-driven design system** — ~30 CSS custom properties, all documented in `docs/DESIGN.md`
- **Mobile-first responsive** — tested at 375 / 768 / 1024 / 1440
- **Subtle motion** — AOS scroll reveals + motion.js orchestration, respects `prefers-reduced-motion`
- **Lighthouse 95+** — Performance, Accessibility, Best Practices, SEO out of the box
- **SEO-ready** — Open Graph, Twitter cards, sitemap, RSS feed
- **TypeScript** — Astro check runs on every build
- **MIT-licensed** — Use for personal and commercial projects, no attribution required

## Tech stack

- **Framework:** [Astro 5.15.4](https://astro.build) (Content Layer API)
- **Styling:** [Tailwind CSS v4.1](https://tailwindcss.com) (`@theme` tokens)
- **Content:** MDX via `@astrojs/mdx`
- **Animation:** [AOS](https://michalsnik.github.io/aos/) + [motion.js](https://motion.dev/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Type checking:** TypeScript + `astro check`
- **Linter:** [Biome](https://biomejs.dev/)

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/ricocc/ricoui-saas-template.git my-saas
cd my-saas

# 2. Install dependencies
pnpm install   # or npm / yarn

# 3. Start dev server (http://localhost:5200)
pnpm dev
```

### Environment variables

Copy `.env.example` to `.env` and set your domain:

```env
PUBLIC_SITE_URL=https://your-domain.com
PUBLIC_GA4_ID=your-google-analytics-id  # optional
PUBLIC_UMAMI_ID=your-umami-id            # optional
```

If `PUBLIC_SITE_URL` is unset, the build falls back to a default — set the real domain before deploying so sitemap, RSS, and canonical URLs work.

## Project structure

```
├── docs/
│   └── DESIGN.md           # Design tokens, type scale, spacing — read first
├── public/
│   ├── assets/             # Images, og.jpg, etc.
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── pages/              # Routes — index, features, pricing, blog/, etc.
│   ├── layouts/            # Layout.astro (root), PageLayout, PostLayout, Meta
│   ├── components/
│   │   ├── home/           # HeroSection
│   │   ├── sections/       # Header, Footer, FAQ, BlogSection
│   │   ├── cards/          # BlogCard
│   │   ├── elements/       # SectionHeader, PageHeader, SeparatorLine
│   │   ├── ui/             # Button, Badge, AccordionItem, PricingToggle, BrowserFrame, Logo
│   │   └── widgets/        # Toc, Pagination, ToTop, Meta, OptimizedImage, TrackGa
│   ├── collections/        # menu.json, social.json
│   ├── content/
│   │   ├── post/           # Blog MDX entries
│   │   └── changelog/      # Changelog MDX entries
│   ├── config/site.js      # Site-wide config — edit this first
│   ├── styles/global.css   # Design tokens via Tailwind v4 @theme
│   └── content.config.js   # Content Layer schemas
├── CLAUDE.md               # Context for AI coding assistants
├── astro.config.mjs
└── package.json
```

## Pages

| Route | Purpose | Where to edit |
|-------|---------|---------------|
| `/` | Marketing home with 12 sections | `src/pages/index.astro` |
| `/features` | 6 feature detail modules | `src/pages/features.astro` |
| `/pricing` | 3-tier plans + comparison + FAQ | `src/pages/pricing.astro` |
| `/blog` | MDX-powered articles list | `src/content/post/` |
| `/changelog` | Versioned release notes | `src/content/changelog/` |
| `/about` | Story + values + timeline | `src/pages/about.astro` |
| `/contact` | Demo contact form | `src/pages/contact.astro` |
| `/sign-in` | Sign in — split-screen layout | `src/pages/sign-in.astro` |
| `/sign-up` | Sign up — split-screen layout | `src/pages/sign-up.astro` |
| `/elements` | Internal design reference | `src/pages/elements.astro` |
| `/404` | Not-found page | `src/pages/404.astro` |

Auth pages also include centered-card variants at `/signin` and `/signup`.

## Customization

The first 90% of customization happens in three places. There's a full walkthrough at [/blog/customize-your-saas-site](https://ricofast.pages.dev/blog/customize-your-saas-site).

### 1. Brand identity — `src/config/site.js`

```js
export const siteConfig = {
  title: "Your SaaS",
  author: "Your Team",
  url: "https://your-domain.com",
  mail: "hello@your-domain.com",
  meta: {
    title: "Your SaaS — One-line value proposition",
    description: "What your product does, clearly.",
    keywords: "your, target, keywords",
    image: "/og.jpg",
  },
  social: {
    twitter: "https://x.com/your-handle",
    github: "https://github.com/your-org/your-repo",
  },
};
```

### 2. Design tokens — `src/styles/global.css`

```css
@theme {
  --color-primary: #2d6dc3;          /* your brand color */
  --color-primary-strong: #0066ff;   /* hover/emphasis */
  --color-accent: #fad13b;            /* badges, highlights */
  --color-bg-primary: #fdfaf5;        /* page canvas */
  --font-brand: "Instrument Serif", serif;
  --font-sans: "Inter", sans-serif;
}
```

Full token table in [`docs/DESIGN.md`](docs/DESIGN.md).

### 3. Content — `src/content/`

Blog and changelog frontmatter schemas live in `src/content.config.js`. Drop new MDX files in `src/content/post/<slug>/index.mdx` — the build picks them up automatically.

## Commands

```bash
pnpm dev           # dev server on http://localhost:5200
pnpm build         # astro check && astro build → dist/
pnpm preview       # preview the production build
pnpm check         # biome lint + format
```

## Deploy

The build is static. Any static host works:

| Platform | Build command | Output |
|----------|---------------|--------|
| Cloudflare Pages | `pnpm build` | `dist/` |
| Vercel | `pnpm build` | `dist/` |
| Netlify | `pnpm build` | `dist` |
| GitHub Pages | `pnpm build` + Pages action | `dist` |

## Documentation

- [`docs/DESIGN.md`](docs/DESIGN.md) — Design tokens, type scale, spacing, motion specs
- [`docs/plan/`](docs/plan/) — Per-page detailed specs
- [`CLAUDE.md`](CLAUDE.md) — Working context for AI coding assistants

## Contributing

Contributions are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines on bug reports, feature requests, and pull requests.

## License

[MIT](LICENSE) — fork it, ship with it, sell what you build on top of it. No attribution required.

## Other templates

- **Blog Template** — open source: [https://github.com/ricocc/public-portfolio-site](https://github.com/ricocc/public-portfolio-site)

- **Portfolio Template** — open source: [https://github.com/ricocc/ricoui-portfolio](https://github.com/ricocc/ricoui-portfolio)

---

## About the author

I'm Rico, a web/UI designer passionate about creating interesting and creative work. With UI/UX design experience, currently focused on web design, visual implementation, and development projects.

Feel free to add my WeChat and connect:

<img src="https://ricoui.com/assets/wechat.png" alt="ricocc-wechat" width="280" />

I post updates on my blog [Rico's Blog](https://ricoui.com/). You can also follow me on [Xiaohongshu @Rico的设计漫想](https://www.xiaohongshu.com/user/profile/5f2b6903000000000101f51f) and [X @ricouii](https://x.com/ricouii).

If RicoFast helps you ship something, [star the repo](https://github.com/ricocc/ricoui-saas-template) — it's the simplest way to let me know.


## Support the author

If this template has been helpful, even a little support goes a long way in encouraging creators. Thank you!

<a href="https://ko-fi.com/T6T817U4KZ" target="_blank"><img height="40" src="https://storage.ko-fi.com/cdn/kofi2.png?v=6" alt="Buy Me a Coffee at ko-fi.com" /></a>


<img src="public/rico/wechat-qr.jpg" alt="ricocc-wechat" width="280" />

<br/>



---

⭐ If this template saves you time, please give it a Star.
