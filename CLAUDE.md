# nadineux.com – "Soft Interactions"

Portfolio of Nadine, Product & UX Designer. Plain static HTML/CSS/JS, no build step. The owner requests changes in chat (often in German); site copy is in English.

## Structure
- `index.html` – hero, selected work (4 case cards), about, contact
- `work/<slug>.html` – one page per case study, linked in a "Next case" loop in this order: `shop-groups` (Pixum: navigation restructure, then shop groups and product pages; strongest numbers), `my-pixum` (Pixum customer account: account creation, password reset, dashboard; qualitative results from the hypothesis sheets), `recup-platform` (reCup B2B platform for restaurants: cancellation process, navigation, knowledge hub; no data), `design-systems` (Pixum from scratch in Figma with UI designers, reCup further developed with UI designers, DYN solo: multi-brand, B2B & B2C, sport modes, with AI; no data). Transactional emails were only overview and first concepts, so they sit in the "Also" chips, not as a case. Content comes from the owner's earlier Squarespace portfolio (German); the site renders it in English
- `assets/style.css` – all styles; colors and fonts are tokens on `:root`. The site is dark-only with a lilac accent (`--accent`) by the owner's choice; don't add a light theme unless asked
- `assets/main.js` – copy-email button only
- `assets/img/` – WebP images. `portrait.webp` (About, Figma logo at Config) and `contact.webp` (Contact). Re-encode photos before adding them so EXIF/GPS data is stripped. Photos sit in `.shape` masks (`shape-flower`, `shape-clover`, echoing the old site) with a lilac `.duo` duotone that fades to colour on hover
- `CNAME` – custom domain for GitHub Pages, which serves `main` from the repo root. Pushing to `main` deploys live; DNS for nadineux.com is managed at Squarespace Domains
- `404.html` – uses root-absolute paths on purpose

## Conventions
- Every case study follows the same story: **Situation → What I did → Result**, with business impact first. Keep it short and focused; the owner explicitly wants less text and sharper outcomes.
- Placeholder copy is wrapped in `<span class="todo">…</span>` (rendered with a dashed highlight). When real content arrives, replace the text and drop the wrapper. `grep -rn 'class="todo"'` lists what is still open.
- A new case study: copy an existing `work/*.html`, add a card to the work grid in `index.html`, and fix the "Next case" links so they form a loop.
- Case visuals are CSS phone mockups (`.phone` in `.case-visual`); replace with `<img>` screenshots in `assets/img/` once available.
- The Impact section on the home page uses results from the owner's Pixum hypothesis tracking sheets (she worked at Pixum 01/2018–05/2023; sheets cover 2020–2022; her initials NWE). The site shows 2020–2022 so it matches the "90+ hypotheses" count. The owner wants values rounded and marked with ≈, never exact figures and never absolute revenue. Every number names its metric. Only list projects where she did the main work (not Magic Books, where she only helped; tiered pricing for photo prints is excluded at her request).
- Never invent metrics, employers or facts about the owner; ask for them.
