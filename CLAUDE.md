# nadineux.com – "Soft Interactions"

Portfolio of Nadine, Product & UX Designer. Plain static HTML/CSS/JS, no build step. The owner requests changes in chat (often in German). The home page is a chat about her work that answers in German or English; case pages are in English.

## Structure
- `index.html` – the chat home: centred "Soft interactions" hero, a composer (auto-growing textarea up to 200px, mic, send) and starter questions. Once a conversation starts the composer docks at the bottom. Loads `assets/kb.js`, `assets/chat.js`, `assets/main.js`
- `assets/kb.js` – the chat's knowledge base (`window.KB`): topics with bilingual answers (`a.de`/`a.en`, one or more variants), matching keys (German and English, umlauts may be written either way), follow-up topics (`next`), actions (`case`, `email`, `copy`) and an optional `weight` < 1 for broad topics so specific ones win
- `assets/chat.js` – the chat engine, fully client-side: detects German/English per message, scores topics by keys (exact, prefix, phrase with inflections, small typo tolerance), picks a different variant each time, suggests follow-ups, falls back to "not learned yet" with a mailto that sends the visitor's question to Nadine. Mic uses the browser's Web Speech API (hidden where unsupported). Nothing is sent to any server
- `classic.html` – the previous scrolling portfolio home (impact, case cards, about, contact), linked as "Classic view" from the chat
- `work/<slug>.html` – one page per case study, linked in a "Next case" loop in this order: `shop-groups` (Pixum: navigation restructure, then shop groups and product pages; strongest numbers), `my-pixum` (Pixum customer account: account creation, password reset, dashboard; qualitative results from the hypothesis sheets), `recup-platform` (reCup B2B platform for restaurants: cancellation process, navigation, knowledge hub; no data, still placeholders, so the chat does not link to it), `design-systems` (Pixum from scratch in Figma with UI designers, reCup further developed with UI designers, DYN solo: multi-brand, B2B & B2C, sport modes, with AI; no data). Transactional emails were only overview and first concepts, so they are no case
- `assets/style.css` – all styles; colors and fonts are tokens on `:root`. Dark-only with a lilac accent (`--accent`), Figma-style frame labels (`.frame-label`, "#"), selection handles and a dotted canvas, all by the owner's choice; keep this look
- `assets/main.js` – copy-email button and the case modal: `a.case` cards and `window.showCase(slug, trigger)` (used by chat actions) fetch `work/<slug>.html` and show its `<main>` in a `<dialog>` sheet (URL hash `#<slug>`, back button and Esc close it, "Next case" navigates inside the modal). Case pages must keep all their content inside `<main>`
- `assets/img/` – WebP images. `portrait.webp` and `contact.webp` (used on `classic.html`). Re-encode photos before adding them so EXIF/GPS data is stripped. Photos sit in `.shape` masks with a lilac `.duo` duotone that fades to colour on hover
- `CNAME` – custom domain for GitHub Pages, which serves `main` from the repo root. Pushing to `main` deploys live; DNS for nadineux.com is managed at Squarespace Domains
- `404.html` – uses root-absolute paths on purpose

## Chat rules
- The chat only answers with text from `assets/kb.js`, and every fact in it must come from material Nadine provided (old portfolio, CV, Pixum hypothesis sheets, her messages). Never add or embellish facts; ask her instead. She reviews knowledge base changes before they go live
- It must not call external services (no LLM API, no analytics): the owner wants it private. "Learning" happens through the mailto fallback: visitors send unanswered questions to Nadine, and new answers are added to `kb.js` with her approval
- Write answers in both languages, short (2–4 sentences or a short list), with at least one `next` topic. Add keys in German and English. After changing keys, check that common questions still land on the right topic
- A small in-browser model was considered: multilingual embedding models are ~120 MB, over GitHub's 100 MB file limit and heavy for visitors, so matching is keyword-based for now

## Conventions
- Every case study follows the same story: **Situation → What I did → Result**, with business impact first. Keep it short and focused; the owner explicitly wants less text and sharper outcomes.
- Placeholder copy is wrapped in `<span class="todo">…</span>` (rendered with a dashed highlight). When real content arrives, replace the text and drop the wrapper. `grep -rn 'class="todo"'` lists what is still open.
- Case visuals are CSS phone mockups (`.phone` in `.case-visual`); replace with `<img>` screenshots in `assets/img/` once available. The design-systems case has an interactive playground (`.ds-demo`: brand + sport mode radios switch token sets via `:has()`, no JS so it also works inside the modal), labelled as an illustration, not DYN's real design
- Numbers from the owner's Pixum hypothesis tracking sheets (she worked at Pixum 01/2018–05/2023; sheets cover 2020–2022; her initials NWE): shown as 2020–2022 to match the "90+ hypotheses" count, rounded and marked with ≈, never exact figures and never absolute revenue. Every number names its metric. Only projects where she did the main work (not Magic Books, where she only helped; tiered pricing for photo prints is excluded at her request).
- Never invent metrics, employers or facts about the owner; ask for them.
