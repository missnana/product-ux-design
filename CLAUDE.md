# nadineux.com – "Soft Interactions"

Portfolio of Nadine, Product & UX Designer. Plain static HTML/CSS/JS, no build step. The owner requests changes in chat (often in German); site copy is in English.

## Structure
- `index.html` – hero, selected work (4 case cards), about, contact
- `work/<slug>.html` – one page per case study: `navigation`, `create-account`, `transaction`, `user-account`
- `assets/style.css` – all styles; colors and fonts are tokens on `:root` (light) with dark overrides below
- `assets/main.js` – copy-email button only
- `CNAME` – custom domain for GitHub Pages
- `404.html` – uses root-absolute paths on purpose

## Conventions
- Every case study follows the same story: **Situation → What I did → Result**, with business impact first. Keep it short and focused; the owner explicitly wants less text and sharper outcomes.
- Placeholder copy is wrapped in `<span class="todo">…</span>` (rendered with a dashed highlight). When real content arrives, replace the text and drop the wrapper. `grep -rn 'class="todo"'` lists what is still open.
- A new case study: copy an existing `work/*.html`, add a card to the work grid in `index.html`, and fix the "Next case" links so they form a loop.
- Case visuals are CSS phone mockups (`.phone` in `.case-visual`); replace with `<img>` screenshots in `assets/img/` once available.
- Never invent metrics, employers or facts about the owner; ask for them.
