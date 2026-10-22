document.querySelectorAll("[data-copy]").forEach((btn) => {
  const label = btn.textContent;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied";
    } catch {
      btn.textContent = btn.dataset.copy;
    }
    setTimeout(() => { btn.textContent = label; }, 1800);
  });
});

// Case studies open in a modal sheet; the work/*.html pages stay real pages for direct links and search.
const caseSlugs = new Set(
  [...document.querySelectorAll("a.case")]
    .map((a) => a.getAttribute("href").match(/^work\/([\w-]+)\.html$/)?.[1])
    .filter(Boolean)
);
const baseTitle = document.title;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let dialog, sheet, body, current = null, opener = null;

function ensureDialog() {
  if (dialog) return;
  dialog = document.createElement("dialog");
  dialog.className = "case-modal";
  dialog.innerHTML = `<div class="case-modal-sheet">
      <div class="case-modal-bar"><button class="case-modal-close" type="button" aria-label="Close case study"><span aria-hidden="true">×</span></button></div>
      <div class="case-modal-body"></div>
    </div>`;
  document.body.append(dialog);
  sheet = dialog.querySelector(".case-modal-sheet");
  body = dialog.querySelector(".case-modal-body");
  dialog.querySelector(".case-modal-close").addEventListener("click", () => closeCase());
  dialog.addEventListener("click", (e) => { if (e.target === dialog) closeCase(); });
  dialog.addEventListener("cancel", (e) => { e.preventDefault(); closeCase(); });
  body.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.dataset.case) { e.preventDefault(); openCase(a.dataset.case); }
    else if ("close" in a.dataset) { e.preventDefault(); closeCase(); }
  });
}

async function openCase(slug, push = true) {
  ensureDialog();
  const url = new URL(`work/${slug}.html`, location.href);
  const firstOpen = !dialog.open;
  if (firstOpen) {
    dialog.showModal();
    document.documentElement.classList.add("modal-open");
  }
  if (firstOpen && push) {
    history.pushState({ case: slug }, "", `#${slug}`);
  } else {
    history.replaceState({ case: slug }, "", `#${slug}`);
  }
  current = slug;
  body.innerHTML = '<p class="case-modal-status mono">Loading…</p>';
  sheet.scrollTop = 0;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(String(res.status));
    const doc = new DOMParser().parseFromString(await res.text(), "text/html");
    const main = doc.querySelector("main");
    main.querySelectorAll("[href], [src]").forEach((el) => {
      for (const attr of ["href", "src"]) {
        const value = el.getAttribute(attr);
        if (!value || value.startsWith("#") || value.startsWith("mailto:")) continue;
        const abs = new URL(value, url);
        const other = attr === "href" && abs.pathname.match(/\/work\/([\w-]+)\.html$/);
        if (other) {
          el.setAttribute("href", `work/${other[1]}.html`);
          el.dataset.case = other[1];
        } else if (attr === "href" && /\/index\.html$/.test(abs.pathname)) {
          el.setAttribute("href", abs.hash || "#work");
          el.dataset.close = "";
        } else {
          el.setAttribute(attr, abs.href);
        }
      }
    });
    if (current !== slug) return;
    body.replaceChildren(...main.childNodes);
    const h1 = body.querySelector("h1");
    if (h1) { h1.id = "case-modal-title"; dialog.setAttribute("aria-labelledby", h1.id); }
    document.title = doc.title;
  } catch {
    body.innerHTML = `<p class="case-modal-status">This case couldn't be loaded. <a href="${url.href}">Open it as a page</a>.</p>`;
  }
}

function closeCase({ fromHistory = false } = {}) {
  if (!dialog?.open) return;
  const finish = () => {
    dialog.classList.remove("closing");
    dialog.close();
    document.documentElement.classList.remove("modal-open");
    document.title = baseTitle;
    opener?.focus({ preventScroll: true });
  };
  current = null;
  if (reduceMotion.matches) finish();
  else { dialog.classList.add("closing"); setTimeout(finish, 200); }
  if (fromHistory) return;
  if (history.state?.case) history.back();
  else history.replaceState(null, "", location.pathname + location.search);
}

document.addEventListener("click", (e) => {
  const a = e.target.closest("a.case");
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const slug = a.getAttribute("href").match(/^work\/([\w-]+)\.html$/)?.[1];
  if (!slug) return;
  e.preventDefault();
  opener = a;
  openCase(slug);
});

window.addEventListener("popstate", () => {
  const slug = location.hash.slice(1);
  if (caseSlugs.has(slug)) openCase(slug, false);
  else closeCase({ fromHistory: true });
});

const initial = location.hash.slice(1);
if (caseSlugs.has(initial)) {
  history.replaceState(null, "", location.pathname + location.search);
  opener = document.querySelector(`a.case[href="work/${initial}.html"]`);
  openCase(initial);
}
