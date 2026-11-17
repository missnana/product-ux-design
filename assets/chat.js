(() => {
  const KB = window.KB;
  const EMAIL = "nadine.westmann@hotmail.com";
  const CASE_TITLES = {
    "shop-groups": { de: "Shopstruktur", en: "Shop structure" },
    "my-pixum": { de: "Mein Pixum", en: "Customer account" },
    "design-systems": { de: "Design-Systeme", en: "Design systems" },
  };

  const UI = {
    de: {
      lede: "Frag mich, was du über Nadines Arbeit wissen willst: Projekte, Ergebnisse, Arbeitsweise.",
      placeholder: "Frag etwas über Nadines Arbeit …",
      send: "Senden",
      mic: "Frage einsprechen",
      micStop: "Aufnahme beenden",
      listening: "Ich höre zu …",
      next: "Weiter fragen",
      start: "Zum Beispiel",
      open: "Case Study öffnen",
      write: "Nadine schreiben",
      copy: "E-Mail kopieren",
      copied: "Kopiert",
      sendQuestion: "Frage an Nadine schicken",
      you: "Du",
      reset: "Neuer Chat",
      privacy: "Läuft in deinem Browser: Getippte Fragen verlassen diese Seite nicht. Die Spracheingabe nutzt den Sprachdienst deines Browsers.",
      classic: "Klassische Ansicht",
      fallback: [
        "<p>Dazu weiß ich noch nichts. Ich antworte nur mit dem, was Nadine selbst aufgeschrieben hat, damit nichts erfunden ist. Magst du ihr deine Frage schicken?</p>",
        "<p>Das kann ich dir leider noch nicht beantworten, dazu hat Nadine mir nichts erzählt. Schick ihr die Frage gern direkt, dann lernt dieser Chat auch dazu.</p>",
      ],
      moreDone: "<p>Dazu habe ich dir gerade alles erzählt, was ich weiß. Vielleicht interessiert dich eins davon:</p>",
      mailSubject: "Frage aus dem Portfolio-Chat",
      mailBody: (q) => `Hallo Nadine,\n\nim Chat auf nadineux.com habe ich gefragt:\n\n„${q}“\n\n`,
    },
    en: {
      lede: "Ask me anything about Nadine's work: projects, results, how she works.",
      placeholder: "Ask about Nadine's work …",
      send: "Send",
      mic: "Ask by voice",
      micStop: "Stop recording",
      listening: "Listening …",
      next: "Ask next",
      start: "For example",
      open: "Open case study",
      write: "Write to Nadine",
      copy: "Copy email",
      copied: "Copied",
      sendQuestion: "Send question to Nadine",
      you: "You",
      reset: "New chat",
      privacy: "Runs in your browser: typed questions never leave this page. Voice input uses your browser's speech service.",
      classic: "Classic view",
      fallback: [
        "<p>I don't know that yet. I only answer with what Nadine has written down herself, so nothing is made up. Want to send her your question?</p>",
        "<p>I can't answer that one yet, Nadine hasn't told me about it. Feel free to send her the question directly, that's how this chat learns.</p>",
      ],
      moreDone: "<p>That's everything I know about it. Maybe one of these is interesting:</p>",
      mailSubject: "Question from the portfolio chat",
      mailBody: (q) => `Hi Nadine,\n\nin the chat on nadineux.com I asked:\n\n"${q}"\n\n`,
    },
  };

  // ---------- language ----------
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
  };
  let lang = store.get("si-lang") || ((navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en");

  const DE_WORDS = new Set("ich du sie er was wie wer wo wann warum welche welcher welches hat hast habt ist sind und oder bei mit fuer ueber von zu im in den der die das ein eine einen kannst koennt erzaehl erzaehle zeig mir mich dir nicht auch noch schon gemacht arbeitet arbeitest gearbeitet macht machst ihre ihr ihren deine dein gibt es moechte will".split(" "));
  const EN_WORDS = new Set("i you she he what how who where when why which has have is are and or at with for about of to in the a an can could tell show me my your her his not also did does do worked work works there would like want".split(" "));

  function detectLang(text) {
    if (/[äöüß]/i.test(text)) return "de";
    let de = 0, en = 0;
    for (const t of normalize(text).split(" ")) {
      if (DE_WORDS.has(t) || /(heit|keit|ung|lich|isch|schaft)$/.test(t)) de++;
      if (EN_WORDS.has(t) || /(tion|ness|ity|ing)$/.test(t)) en++;
    }
    if (de > en) return "de";
    if (en > de) return "en";
    return lang;
  }

  // ---------- matching ----------
  function normalize(s) {
    return s.toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, " ").trim();
  }

  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      let rowMin = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        rowMin = Math.min(rowMin, cur[j]);
      }
      if (rowMin > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }

  const topics = KB.topics.map((t) => ({ ...t, nkeys: [...new Set(t.keys.map(normalize))] }));
  const byId = Object.fromEntries(topics.map((t) => [t.id, t]));
  const moreKeys = KB.more.map(normalize);

  // Phrase keys match consecutive tokens; longer words also match their plural/inflected forms.
  function phraseHit(tokens, words) {
    for (let i = 0; i + words.length <= tokens.length; i++) {
      if (words.every((w, j) => tokens[i + j] === w || (w.length >= 4 && tokens[i + j].startsWith(w)))) return true;
    }
    return false;
  }

  function scoreTopic(t, text, tokens) {
    let score = 0;
    for (const k of t.nkeys) {
      if (k.includes(" ")) {
        const words = k.split(" ");
        if (phraseHit(tokens, words)) score += 1 + words.length;
        continue;
      }
      let best = 0;
      for (const tok of tokens) {
        if (tok === k) { best = 2; break; }
        if (k.length >= 5 && tok.startsWith(k)) best = Math.max(best, 1.5);
        else if (k.length >= 5 && Math.abs(tok.length - k.length) <= 1) {
          const max = k.length >= 8 ? 2 : 1;
          if (lev(tok, k, max) <= max) best = Math.max(best, 1.25);
        }
      }
      score += best;
    }
    return score * (t.weight || 1);
  }

  function match(input) {
    const text = normalize(input);
    const tokens = text.split(" ").filter(Boolean);
    let best = null, bestScore = 0;
    for (const t of topics) {
      const s = scoreTopic(t, text, tokens);
      if (s > bestScore) { best = t; bestScore = s; }
    }
    if (bestScore >= 1.25) return { topic: best };
    const isMore = moreKeys.some((k) => (k.includes(" ") ? ` ${text} `.includes(` ${k} `) : tokens.includes(k)));
    if (isMore && tokens.length <= 6) return { more: true };
    return { topic: null };
  }

  // ---------- conversation state ----------
  const asked = new Set();
  const lastVariant = {};
  let lastTopic = null;

  function pickVariant(t, l) {
    const list = t.a[l];
    if (list.length === 1) return { html: list[0], index: 0 };
    let i = Math.floor(Math.random() * list.length);
    if (i === lastVariant[t.id]) i = (i + 1) % list.length;
    return { html: list[i], index: i };
  }

  function suggestionsFor(ids) {
    const pool = [...ids, ...KB.fallbackNext, ...KB.starters];
    const out = [];
    for (const id of pool) {
      if (out.length >= 3) break;
      if (!byId[id] || asked.has(id) || out.includes(id) || id === "thanks") continue;
      out.push(id);
    }
    return out;
  }

  // ---------- DOM ----------
  const $ = (s) => document.querySelector(s);
  const app = $(".chat-app");
  const log = $(".chat-log");
  const scroller = $(".chat-main");
  const form = $(".composer");
  const input = $("#chat-input");
  const sendBtn = $(".composer-send");
  const micBtn = $(".composer-mic");
  const starters = $(".starters");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function scrollDown() {
    scroller.scrollTo({ top: scroller.scrollHeight, behavior: reduceMotion.matches ? "auto" : "smooth" });
  }

  function applyLang() {
    const t = UI[lang];
    document.documentElement.lang = lang;
    $(".chat-lede").textContent = t.lede;
    input.placeholder = t.placeholder;
    sendBtn.setAttribute("aria-label", t.send);
    micBtn.setAttribute("aria-label", listening ? t.micStop : t.mic);
    $(".privacy-text").textContent = t.privacy;
    $(".classic-link").textContent = t.classic;
    $(".chat-reset").textContent = t.reset;
    $(".starters-label").textContent = t.start;
    document.querySelectorAll("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang)));
    renderStarters();
  }

  function renderStarters() {
    const wrap = $(".starters-chips");
    wrap.replaceChildren(...KB.starters.map((id) => chip(id)));
  }

  function chip(id) {
    const b = el("button", "q-chip");
    b.type = "button";
    b.textContent = byId[id].ask[lang];
    b.addEventListener("click", () => ask(byId[id].ask[lang]));
    return b;
  }

  function addUser(text) {
    const m = el("div", "msg msg-user");
    m.append(el("span", "msg-label mono", UI[lang].you));
    const bubble = el("p", "bubble");
    bubble.textContent = text;
    m.append(bubble);
    log.append(m);
  }

  function typing() {
    const m = el("div", "msg msg-bot is-typing");
    m.append(el("span", "frame-label", "…"), el("div", "typing-dots", "<i></i><i></i><i></i>"));
    log.append(m);
    return m;
  }

  function actionButton(a, question) {
    const t = UI[lang];
    if (a.type === "case") {
      const b = el("button", "btn btn-ghost btn-sm");
      b.type = "button";
      b.innerHTML = `${t.open}: ${CASE_TITLES[a.slug][lang]} <span class="arrow" aria-hidden="true">→</span>`;
      b.addEventListener("click", () => window.showCase?.(a.slug, b));
      return b;
    }
    if (a.type === "email" || a.type === "question") {
      const link = el("a", `btn btn-sm ${a.type === "question" ? "btn-primary" : "btn-ghost"}`);
      const subject = encodeURIComponent(t.mailSubject);
      const body = a.type === "question" ? `&body=${encodeURIComponent(t.mailBody(question))}` : "";
      link.href = `mailto:${EMAIL}?subject=${subject}${body}`;
      link.innerHTML = `${a.type === "question" ? t.sendQuestion : t.write} <span class="arrow" aria-hidden="true">→</span>`;
      return link;
    }
    if (a.type === "copy") {
      const b = el("button", "btn btn-ghost btn-sm");
      b.type = "button";
      b.textContent = t.copy;
      b.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(EMAIL); b.textContent = t.copied; }
        catch { b.textContent = EMAIL; }
        setTimeout(() => { b.textContent = UI[lang].copy; }, 1800);
      });
      return b;
    }
    return null;
  }

  function addBot({ label, html, actions = [], next = [], question }) {
    const m = el("div", "msg msg-bot");
    m.append(el("span", "frame-label", label));
    m.append(el("div", "answer", html));
    const btns = actions.map((a) => actionButton(a, question)).filter(Boolean);
    if (btns.length) {
      const row = el("div", "msg-actions");
      row.append(...btns);
      m.append(row);
    }
    const ids = suggestionsFor(next);
    if (ids.length) {
      const s = el("div", "msg-suggest");
      s.append(el("span", "mono", UI[lang].next));
      const chips = el("div", "q-chips");
      chips.append(...ids.map(chip));
      s.append(chips);
      m.append(s);
    }
    log.querySelectorAll(".msg-suggest").forEach((n) => n.remove());
    log.append(m);
  }

  function respond(question) {
    const l = detectLang(question);
    if (l !== lang) { lang = l; applyLang(); }
    const r = match(question);
    if (r.topic) {
      const t = r.topic;
      const v = pickVariant(t, lang);
      lastVariant[t.id] = v.index;
      asked.add(t.id);
      lastTopic = t;
      return { label: t.label[lang], html: v.html, actions: t.actions, next: t.next };
    }
    if (r.more && lastTopic) {
      const list = lastTopic.a[lang];
      if (list.length > 1) {
        const i = (lastVariant[lastTopic.id] + 1) % list.length;
        lastVariant[lastTopic.id] = i;
        return { label: lastTopic.label[lang], html: list[i], actions: lastTopic.actions, next: lastTopic.next };
      }
      return { label: lastTopic.label[lang], html: UI[lang].moreDone, next: lastTopic.next };
    }
    const fb = UI[lang].fallback;
    return {
      label: lang === "de" ? "Noch nicht gelernt" : "Not learned yet",
      html: fb[Math.floor(Math.random() * fb.length)],
      actions: [{ type: "question" }],
      next: KB.fallbackNext,
      question,
    };
  }

  let busy = false;
  function ask(text) {
    const q = text.trim();
    if (!q || busy) return;
    busy = true;
    app.classList.add("chatting");
    addUser(q);
    input.value = "";
    autosize();
    updateSend();
    const dots = typing();
    scrollDown();
    const reply = respond(q);
    const delay = reduceMotion.matches ? 150 : 450 + Math.min(900, reply.html.length * 1.2);
    setTimeout(() => {
      dots.remove();
      addBot(reply);
      busy = false;
      scrollDown();
    }, delay);
  }

  // ---------- composer ----------
  const MAX_H = 200;
  function autosize() {
    input.style.height = "auto";
    const h = Math.min(input.scrollHeight, MAX_H);
    input.style.height = `${h}px`;
    input.style.overflowY = input.scrollHeight > MAX_H ? "auto" : "hidden";
  }
  function updateSend() { sendBtn.disabled = !input.value.trim(); }

  input.addEventListener("input", () => { autosize(); updateSend(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); form.requestSubmit(); }
  });
  form.addEventListener("submit", (e) => { e.preventDefault(); stopListening(); ask(input.value); });

  // ---------- voice ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, listening = false, baseText = "";
  function stopListening() { if (rec && listening) rec.stop(); }
  if (!SR) {
    micBtn.hidden = true;
  } else {
    micBtn.addEventListener("click", () => {
      if (listening) { rec.stop(); return; }
      rec = new SR();
      rec.lang = lang === "de" ? "de-DE" : "en-US";
      rec.interimResults = true;
      rec.continuous = false;
      baseText = input.value ? `${input.value.trim()} ` : "";
      rec.onstart = () => {
        listening = true;
        form.classList.add("is-listening");
        micBtn.setAttribute("aria-label", UI[lang].micStop);
        input.placeholder = UI[lang].listening;
      };
      rec.onresult = (e) => {
        let text = "";
        for (const r of e.results) text += r[0].transcript;
        input.value = baseText + text;
        autosize();
        updateSend();
      };
      const end = () => {
        listening = false;
        form.classList.remove("is-listening");
        micBtn.setAttribute("aria-label", UI[lang].mic);
        input.placeholder = UI[lang].placeholder;
        input.focus();
      };
      rec.onend = end;
      rec.onerror = end;
      try { rec.start(); } catch { end(); }
    });
  }

  // ---------- header controls ----------
  document.querySelectorAll("[data-lang-btn]").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.langBtn;
    store.set("si-lang", lang);
    applyLang();
  }));
  $(".chat-reset").addEventListener("click", () => {
    log.replaceChildren();
    asked.clear();
    lastTopic = null;
    app.classList.remove("chatting");
    input.focus();
  });

  applyLang();
  autosize();
  updateSend();
})();
