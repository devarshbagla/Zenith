# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-product **React 19 + Vite 8** statically-prerendered content site ("From Dust to Zenith"). It uses **npm** (see `package-lock.json`). Standard scripts live in `package.json` (`dev`, `build`, `lint`, `preview`); prefer those.

- Dependencies are refreshed automatically on startup via the update script (`npm install`). No extra system dependencies are required.
- Dev server: `npm run dev` serves the full content site on port `5173`. All page content (stories, industries, lessons, about) comes from static local data in `src/data/`, so the site works with **zero backend**.
- Non-obvious gotcha: `npm run dev` (Vite) does **NOT** serve the `/api/*` endpoints, and `vite.config.js` has no proxy. The `/api/*` handlers are **Vercel serverless functions**; to exercise newsletter (`api/subscribe.js`), auth (`api/auth/*`), or dynamic OG images (`api/og.js`) locally you must run them under the Vercel dev runtime (e.g. `npx vercel dev`, since the `vercel` CLI is not a dependency).
- Those backend features additionally require secrets that are not present by default: `JWT_SECRET` and a Vercel Blob token `BLOB_READ_WRITE_TOKEN` (both required for auth/newsletter), plus optional `RESEND_API_KEY` (email sending is silently skipped if unset). Without these, only the content site can be exercised end-to-end.
- `npm run build` does a client build + SSR build + static prerender of every route (see `scripts/prerender.js`) + sitemap/RSS generation. It is fast and requires no secrets.
- `npm run lint` runs Oxlint.
