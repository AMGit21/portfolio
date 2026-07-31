# Ali Mantache — Portfolio v2

Personal portfolio for a Senior AI & Software Engineer. Fully static, fast,
accessible, themed (light / dark / system), and deployable to GitHub Pages.

## Stack (current stable)

| Layer | Package | Version |
| --- | --- | --- |
| Runtime | Node.js | ≥ 20.9 (`.nvmrc` → 22) |
| Framework | Next.js | 16.2 (App Router, Turbopack, static export) |
| UI | React | 19.2 |
| Styling | Tailwind CSS | 4.3 + `tw-animate-css` |
| Components | shadcn/ui | Button, Badge, Separator (new-york) |
| Primitives | radix-ui | 1.6 |
| Motion | Framer Motion | 12.x |
| Icons | lucide-react 1.x + react-icons | brand icons via FA/Simple Icons |
| Theming | next-themes | light / dark / system |
| Language | TypeScript | 5.9 (strict) |
| Lint | ESLint 9 + eslint-config-next | flat config |

## Getting started

```bash
# Optional: align Node with the project
nvm use   # or install Node 22+

npm install
npm run dev     # http://localhost:3000
npm run build   # static export → out/
npm run lint
```

Requires **Node ≥ 20.9** and **npm ≥ 10** (see `engines` in `package.json`).

## Editing content

All portfolio content lives in typed data files — no component changes needed
to update the CV:

| File | Contents |
| --- | --- |
| `src/data/profile.ts` | Name, roles, summary, contact, stats, links |
| `src/data/skills.ts` | Skill categories and technologies |
| `src/data/experience.ts` | Roles, achievements, tech stacks |
| `src/data/projects.ts` | Featured + secondary projects |
| `src/data/education.ts` | Degrees and certifications |
| `src/data/site.ts` | Site URL, metadata, navigation |

Replace `public/ali-mantache-cv.pdf` and `public/picture.png` to update the
CV download and portrait.

## Architecture

- `src/app/` — layout (fonts, metadata, JSON-LD), page, sitemap, robots, manifest
- `src/components/sections/` — hero, about, skills, experience, projects, education, contact
- `src/components/ui/` — shadcn primitives + motion helpers (`Reveal`, `Stagger`, `Magnetic`, `Counter`), tech icon map
- `components.json` — shadcn/ui config (add more with `npx shadcn@latest add <name>`)

Animations respect `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`
plus a CSS fallback for keyframe animations.

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it with GitHub Pages actions. The base path is
derived from the repository name automatically (e.g. `/portfolio` for
`amgit21.github.io/portfolio`).

One-time setup: in the repository settings, set **Pages → Source** to
**GitHub Actions**.
