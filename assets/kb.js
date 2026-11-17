// Knowledge base for the chat. Every answer must come from material Nadine provided
// (old portfolio, CV, Pixum hypothesis sheets, her messages). Never add facts she hasn't confirmed.
// keys: lowercase words/phrases in German and English; umlauts may be written as ä or ae.
// a: answer variants per language (one is picked at random). next: topic ids suggested afterwards.
window.KB = {
  topics: [
    {
      id: "hello",
      label: { de: "Hallo", en: "Hello" },
      ask: { de: "Was kann ich dich fragen?", en: "What can I ask you?" },
      keys: ["hallo", "hi", "hey", "moin", "servus", "guten tag", "hello", "good morning", "guten morgen", "was kann ich", "what can i", "hilfe", "help"],
      a: {
        de: [
          "<p>Hallo! Ich bin ein kleiner Guide durch Nadines Arbeit. Frag mich nach ihren Projekten, ihren Ergebnissen, Design-Systemen oder danach, wie sie arbeitet.</p>",
          "<p>Hi! Schön, dass du da bist. Ich kenne Nadines Werdegang, ihre Projekte und ihre Arbeitsweise. Wo wollen wir anfangen?</p>",
        ],
        en: [
          "<p>Hi! I'm a small guide to Nadine's work. Ask me about her projects, her results, design systems or how she works.</p>",
          "<p>Hello and welcome! I know Nadine's career, her projects and how she works. Where shall we start?</p>",
        ],
      },
      next: ["about", "impact", "current"],
    },
    {
      id: "about",
      weight: 0.8,
      label: { de: "Über Nadine", en: "About Nadine" },
      ask: { de: "Wer ist Nadine?", en: "Who is Nadine?" },
      keys: ["wer ist", "who is", "about nadine", "ueber nadine", "über nadine", "vorstellen", "introduce", "yourself", "beschreib", "describe", "kurz", "summary", "zusammenfassung", "macht nadine", "does nadine do", "beruf", "job title", "rolle", "role"],
      a: {
        de: [
          "<p>Nadine ist Product & UX Designerin aus Aachen. Seit 2014 gestaltet sie digitale Produkte, für Start-ups, Agenturen und Inhouse-Teams, von E-Commerce über B2B-Plattformen bis zu Sport-Streaming.</p><p>Sie arbeitet an der Schnittstelle von Gestaltung, Psychologie und Technologie. Ihr stärkstes Werkzeug ist Empathie: im Research, in User Flows und im Umgang mit Stakeholder:innen.</p>",
          "<p>Kurz gesagt: Nadine übersetzt komplexe Anforderungen in einfache, menschenzentrierte Lösungen, und misst, was sie bewirken. Sie ist Product & UX Designerin in Aachen und hat unter anderem bei Pixum, FIEGE, reCup und heute bei DYN gearbeitet.</p>",
        ],
        en: [
          "<p>Nadine is a Product & UX Designer based in Aachen, Germany. She has been designing digital products since 2014, for start-ups, agencies and in-house teams, from e-commerce to B2B platforms to sports streaming.</p><p>She works where design, psychology and technology meet. Her strongest tool is empathy: in research, in user flows and in working with stakeholders.</p>",
          "<p>In short: Nadine turns complex requirements into simple, human-centred solutions, and measures what they change. She's a Product & UX Designer in Aachen who has worked at Pixum, FIEGE, reCup and now DYN, among others.</p>",
        ],
      },
      next: ["career", "softinteractions", "impact"],
    },
    {
      id: "softinteractions",
      label: { de: "Soft Interactions", en: "Soft Interactions" },
      ask: { de: "Was bedeutet Soft Interactions?", en: "What does Soft Interactions mean?" },
      keys: ["soft interactions", "soft interaction", "bedeutet", "meaning", "mean", "haltung", "attitude", "empathie", "empathy", "werte", "values", "philosophie", "philosophy", "warum soft", "staerke", "staerken", "strength", "strengths", "ausmacht", "auszeichnet", "superpower", "persoenlichkeit", "personality", "charakter", "character", "als mensch", "as a person", "wie ist sie", "what is she like"],
      a: {
        de: [
          "<p>Soft Interactions ist für Nadine nicht nur ein Portfolioname, sondern eine Haltung: ein Faible für klare Strukturen, leise Details und digitale Erlebnisse, die sich gut anfühlen, für alle Nutzer:innen.</p><p>Dazu gehören Feingefühl für Sprache, Hierarchie und Flow, Neugier auf echte Nutzer:innen und Freude daran, Probleme zu verstehen und elegant zu lösen.</p>",
        ],
        en: [
          "<p>For Nadine, Soft Interactions is more than a portfolio name. It's an attitude: a soft spot for clear structures, quiet details and digital experiences that feel good for everyone.</p><p>That means an ear for language, hierarchy and flow, curiosity about real users, and joy in understanding problems and solving them elegantly.</p>",
        ],
      },
      next: ["process", "personal", "about"],
    },
    {
      id: "career",
      weight: 0.7,
      label: { de: "Werdegang", en: "Career" },
      ask: { de: "Wie sieht ihr Werdegang aus?", en: "What's her career path?" },
      keys: ["werdegang", "career", "laufbahn", "erfahrung", "experience", "lebenslauf", "cv", "resume", "stationen", "arbeitgeber", "employers", "companies", "firmen", "unternehmen", "background", "jobs", "wo gearbeitet", "worked", "berufserfahrung", "jahre", "years", "wie lange", "how long", "seit wann", "since when"],
      a: {
        de: [
          "<p>Nadines Stationen:</p><ul><li><strong>heute</strong> · DYN: baut ein Multi-Brand-Design-System</li><li><strong>2024–2025</strong> · reCup: Senior UX Specialist</li><li><strong>2023–2024</strong> · FIEGE Logistics: Senior UX/UI Designerin</li><li><strong>2018–2023</strong> · Pixum: UX/UI Designerin</li><li><strong>2014–2017</strong> · MeinAuto.de: Web & Product Designerin</li></ul><p>Davor: Ausbildung zur Mediengestalterin und ein Trainee im Webdesign.</p>",
        ],
        en: [
          "<p>Nadine's stations:</p><ul><li><strong>now</strong> · DYN: building a multi-brand design system</li><li><strong>2024–2025</strong> · reCup: Senior UX Specialist</li><li><strong>2023–2024</strong> · FIEGE Logistics: Senior UX/UI Designer</li><li><strong>2018–2023</strong> · Pixum: UX/UI Designer</li><li><strong>2014–2017</strong> · MeinAuto.de: Web & Product Designer</li></ul><p>Before that: training as a media designer and a web design traineeship.</p>",
        ],
      },
      next: ["current", "pixum", "education"],
    },
    {
      id: "current",
      label: { de: "Heute bei DYN", en: "Now at DYN" },
      ask: { de: "Was macht sie gerade?", en: "What is she working on now?" },
      keys: ["dyn", "aktuell", "currently", "current", "derzeit", "gerade", "right now", "heute", "today", "jetzt", "streaming", "sport", "sports", "momentan"],
      a: {
        de: [
          "<p>Bei DYN baut Nadine ein Multi-Brand-Design-System von Grund auf, vorher gab es dort keins. Sie sammelt die bestehenden Design-Entscheidungen und gießt sie in ein System für B2B und B2C, mit Sport-Modi für die besonderen Anforderungen im Streaming und bei verschiedenen Sportarten.</p><p>Das macht sie allein, in Zusammenarbeit mit KI.</p>",
        ],
        en: [
          "<p>At DYN, Nadine is building a multi-brand design system from scratch, since there wasn't one before. She collects the existing design decisions and turns them into one system for B2B and B2C, with sport modes for the special needs of streaming and different sports.</p><p>She does it on her own, in cooperation with AI.</p>",
        ],
      },
      actions: [{ type: "case", slug: "design-systems" }],
      next: ["designsystems", "ai", "career"],
    },
    {
      id: "designsystems",
      label: { de: "Design-Systeme", en: "Design systems" },
      ask: { de: "Erzähl mir von ihren Design-Systemen", en: "Tell me about her design systems" },
      keys: ["design system", "designsystem", "design-system", "designsysteme", "design systems", "komponenten", "components", "component library", "bibliothek", "library", "atomic", "tokens", "token", "multi-brand", "multibrand", "multi brand", "marken", "brands", "sport modes", "sportmodi", "sport-modi", "storybook", "konsistenz", "consistency", "skalierbar", "scalable"],
      a: {
        de: [
          "<p>Nadine hat in drei Firmen Design-Systeme aufgebaut:</p><ul><li><strong>Pixum:</strong> ein hauseigenes System in Figma von Grund auf, mit UI-Designer:innen, als Basis für Website, App und Software</li><li><strong>reCup:</strong> das System gemeinsam mit UI-Designer:innen weiterentwickelt</li><li><strong>DYN:</strong> allein ein Multi-Brand-System mit Sport-Modi, unterstützt von KI</li></ul><p>Sie arbeitet seit 2018 mit Figma und mit Atomic Design.</p>",
          "<p>Ein gutes Design-System hilft bei klaren, skalierbaren Entscheidungen, macht Design-Änderungen schnell und einheitlich umsetzbar und spart Arbeit in der Entwicklung. Genau dafür baut Nadine sie: zuerst bei Pixum aus dem Nichts in Figma, heute bei DYN für mehrere Marken.</p><p>Ihr wichtigstes Learning: Es braucht mindestens eine:n Entwickler:in mit Auge für Details und Liebe zum Design, sonst funktioniert es nicht.</p>",
        ],
        en: [
          "<p>Nadine has built design systems at three companies:</p><ul><li><strong>Pixum:</strong> an in-house system in Figma from scratch, with UI designers, as the base for web, app and software</li><li><strong>reCup:</strong> developed the system further together with UI designers</li><li><strong>DYN:</strong> a multi-brand system with sport modes, built on her own with AI</li></ul><p>She has worked with Figma since 2018, using Atomic Design.</p>",
          "<p>A good design system makes decisions clear and scalable, lets design changes roll out quickly and consistently, and saves engineering work. That's why Nadine builds them: first at Pixum from scratch in Figma, now at DYN for several brands.</p><p>Her key lesson: it takes at least one engineer who has an eye for detail and loves design. Otherwise it won't work.</p>",
        ],
      },
      actions: [{ type: "case", slug: "design-systems" }],
      next: ["ai", "team", "tools"],
    },
    {
      id: "ai",
      label: { de: "KI", en: "AI" },
      ask: { de: "Wie nutzt sie KI?", en: "How does she use AI?" },
      keys: ["ki", "ai", "kuenstliche intelligenz", "künstliche intelligenz", "artificial intelligence", "llm", "chatgpt", "claude", "automatisierung", "automation", "dieser chat", "this chat", "chatbot", "bot", "wie funktioniert", "how does this work"],
      a: {
        de: [
          "<p>Bei DYN baut Nadine das Design-System in Zusammenarbeit mit KI, im Workflow zwischen Design und Code.</p><p>Und dieser Chat? Er läuft komplett in deinem Browser und antwortet nur mit Texten, die Nadine freigegeben hat. Erfinden kann er nichts.</p>",
        ],
        en: [
          "<p>At DYN, Nadine builds the design system in cooperation with AI, in the workflow between design and code.</p><p>And this chat? It runs entirely in your browser and only answers with texts Nadine has approved. It can't make things up.</p>",
        ],
      },
      next: ["designsystems", "current", "process"],
    },
    {
      id: "pixum",
      weight: 0.7,
      label: { de: "Pixum", en: "Pixum" },
      ask: { de: "Was hat sie bei Pixum gemacht?", en: "What did she do at Pixum?" },
      keys: ["pixum", "fotobuch", "photo book", "fotoprodukte", "photo products", "foto", "photo", "diginet", "e-commerce", "ecommerce", "onlineshop", "online shop"],
      a: {
        de: [
          "<p>Von 2018 bis 2023 war Nadine UX/UI Designerin bei Pixum, einem Onlineshop für Fotoprodukte. Ihre großen Themen:</p><ul><li>Navigation, Shopgruppen und Produktseiten neu strukturiert</li><li>Mein Pixum, den Kundenbereich, neu gebaut</li><li>ein hauseigenes Design-System in Figma von Grund auf</li><li>Übersicht und erste Konzepte für die Transaktionsmails</li></ul><p>Allein zwischen 2020 und 2022 hat sie über 90 Hypothesen geschrieben, die meisten per A/B-Test geprüft.</p>",
        ],
        en: [
          "<p>From 2018 to 2023 Nadine was UX/UI Designer at Pixum, an online shop for photo products. Her big topics:</p><ul><li>restructuring navigation, shop groups and product pages</li><li>rebuilding Mein Pixum, the customer account</li><li>an in-house design system in Figma from scratch</li><li>an overview and first concepts for the transactional emails</li></ul><p>Between 2020 and 2022 alone she wrote more than 90 hypotheses, most of them A/B tested.</p>",
        ],
      },
      next: ["shop", "account", "impact"],
    },
    {
      id: "shop",
      label: { de: "Pixum · Navigation & Shopstruktur", en: "Pixum · Navigation & shop structure" },
      ask: { de: "Wie hat sie den Shop neu strukturiert?", en: "How did she restructure the shop?" },
      keys: ["navigation", "navi", "menue", "menü", "menu", "shopgruppe", "shopgruppen", "shop group", "shop groups", "kategorie", "kategorien", "category", "categories", "produktseite", "produktseiten", "product page", "product pages", "produktdetailseite", "pdp", "product cards", "produkt-cards", "cards", "karten", "informationsarchitektur", "information architecture", "struktur", "structure", "restructure", "umstrukturierung", "relaunch", "cms", "shop"],
      a: {
        de: [
          "<p>Bei Pixum hat Nadine die Struktur Schritt für Schritt neu gebaut: zuerst die Navigation, dann die Shopgruppen, dann die Produktseiten darunter, alles auf einem neuen CMS und jede Änderung als Hypothese getestet.</p><p>Der Shopgruppen-Relaunch brachte insgesamt rund <strong>+13 %</strong> Uplift, Conversion, Warenkorbwert und Umsatz pro Sitzung stiegen. Die neuen Produkt-Cards brachten rund <strong>+30 %</strong> Conversion.</p>",
          "<p>Die Shopgruppen waren über Jahre in einem alten CMS gewachsen: nicht responsiv, eine volle Navigation, lange Wege bis in den Editor. Nadine hat das von Grund auf neu strukturiert, mit der Navigation als erstem Schritt.</p><p>Ehrlich gehört dazu: Nicht alles hat funktioniert. Fotopuzzle ins Hauptmenü zu holen hat die Klicks verschoben, aber nicht die Verkäufe. Genau deshalb wurde jeder Schritt getestet.</p>",
        ],
        en: [
          "<p>At Pixum, Nadine rebuilt the structure step by step: first the navigation, then the shop groups, then the product pages below them, all on a new CMS and every change tested as a hypothesis.</p><p>The shop group relaunch brought an overall uplift of about <strong>13 %</strong>, with conversion, cart value and revenue per session all going up. The new product cards lifted conversion by around <strong>30 %</strong>.</p>",
          "<p>The shop groups had grown for years on an old CMS: not responsive, a crowded navigation, a long way to the design editor. Nadine restructured it from the ground up, starting with the navigation.</p><p>To be honest, not everything worked: moving photo puzzles into the main navigation shifted the clicks but not the sales. That's exactly why every step was tested.</p>",
        ],
      },
      actions: [{ type: "case", slug: "shop-groups" }],
      next: ["impact", "hypotheses", "account"],
    },
    {
      id: "account",
      label: { de: "Pixum · Mein Pixum", en: "Pixum · Customer account" },
      ask: { de: "Was war das Mein-Pixum-Projekt?", en: "What was the customer account project?" },
      keys: ["mein pixum", "account", "accounts", "konto", "kundenkonto", "kundenbereich", "customer account", "login", "anmelden", "passwort", "password", "registrierung", "registrieren", "register", "sign up", "dashboard", "self-service", "selfservice", "vertrauen", "trust", "vertrauensbereiche", "sicherheit", "security", "anrede", "salutation"],
      a: {
        de: [
          "<p>Mein Pixum ist der Kundenbereich mit Bestellungen, Fotos und persönlichen Daten. Nadine hat ihn Schritt für Schritt neu gebaut:</p><ul><li>Navigation nach echter Nutzung, die meistgeklickten Seiten direkt auf dem Dashboard</li><li>einfachere Registrierung und ein neuer Passwort-Reset</li><li>Vertrauen eingebaut: E-Mail-Änderung nur mit Passwort, Anrede optional</li></ul><p>Ergebnis: Weniger Kund:innen brauchten einen zweiten Passwort-Reset am selben Tag. Live seit Oktober 2022.</p>",
        ],
        en: [
          "<p>Mein Pixum is the customer account with orders, photos and personal data. Nadine rebuilt it step by step:</p><ul><li>navigation based on real usage, with the most-clicked pages on the dashboard</li><li>simpler account creation and a new password reset</li><li>trust by design: changing the email needs the password, the salutation became optional</li></ul><p>Result: fewer customers needed a second password reset on the same day. Live since October 2022.</p>",
        ],
      },
      actions: [{ type: "case", slug: "my-pixum" }],
      next: ["accessibility", "hypotheses", "shop"],
    },
    {
      id: "impact",
      label: { de: "Ergebnisse", en: "Results" },
      ask: { de: "Welche Ergebnisse hat sie erzielt?", en: "What results has she achieved?" },
      keys: ["ergebnis", "ergebnisse", "result", "results", "zahlen", "numbers", "impact", "wirkung", "conversion", "kpi", "kpis", "umsatz", "revenue", "erfolg", "erfolge", "success", "uplift", "metriken", "metrics", "business", "wirtschaftlich", "roi", "messbar", "measurable", "achieved", "erreicht"],
      a: {
        de: [
          "<p>Ein paar Ergebnisse aus Nadines Zeit bei Pixum (gerundet, meist aus A/B-Tests):</p><ul><li><strong>≈ +30 %</strong> Conversion mit neuen Produkt-Cards</li><li><strong>≈ +20 %</strong> Conversion, als der „Jetzt gestalten“-Button auf der Handyhüllen-Seite in den sichtbaren Bereich kam</li><li><strong>≈ +13 %</strong> Conversion mit der neuen Startseite</li><li><strong>≈ +13 %</strong> Uplift nach dem Shopgruppen-Relaunch, statistisch signifikant</li></ul><p>Dahinter stehen über 90 Hypothesen aus 2020 bis 2022.</p>",
        ],
        en: [
          "<p>A few results from Nadine's time at Pixum (rounded, mostly from A/B tests):</p><ul><li><strong>≈ +30 %</strong> conversion with new product cards</li><li><strong>≈ +20 %</strong> conversion after moving the “Design now” button into view on the phone case page</li><li><strong>≈ +13 %</strong> conversion with the new homepage</li><li><strong>≈ +13 %</strong> uplift after the shop group relaunch, statistically significant</li></ul><p>Behind them: more than 90 hypotheses from 2020 to 2022.</p>",
        ],
      },
      actions: [{ type: "case", slug: "shop-groups" }],
      next: ["hypotheses", "shop", "process"],
    },
    {
      id: "hypotheses",
      label: { de: "Hypothesen & Tests", en: "Hypotheses & testing" },
      ask: { de: "Wie arbeitet sie mit Daten?", en: "How does she work with data?" },
      keys: ["hypothese", "hypothesen", "hypothesis", "hypotheses", "a/b", "ab test", "ab-test", "a/b-test", "split test", "testen", "testing", "test", "tests", "daten", "data", "datengetrieben", "data-driven", "analytics", "webanalyse", "analyse", "analysis", "experiment", "experimente", "heatmap", "messen", "measure"],
      a: {
        de: [
          "<p>Bei Pixum begann jede Änderung als Hypothese: <em>Wenn wir X tun, dann passiert Y, weil Z.</em> Zwischen 2020 und 2022 hat Nadine über 90 davon geschrieben, die meisten per A/B-Test geprüft.</p><p>Dazu nutzte sie Webanalyse, Heatmaps, Session Replays und NPS-Kommentare. Und sie berichtet auch, was nicht funktioniert hat.</p>",
        ],
        en: [
          "<p>At Pixum every change started as a hypothesis: <em>If we do X, then Y happens, because Z.</em> Between 2020 and 2022 Nadine wrote more than 90 of them, most were A/B tested.</p><p>She used web analytics, heatmaps, session replays and NPS comments. And she reports what didn't work, too.</p>",
        ],
      },
      next: ["impact", "research", "process"],
    },
    {
      id: "process",
      label: { de: "Arbeitsweise", en: "How she works" },
      ask: { de: "Wie arbeitet sie?", en: "How does she work?" },
      keys: ["arbeitsweise", "wie arbeitet", "how does she work", "how she works", "prozess", "process", "vorgehen", "approach", "methode", "methoden", "method", "methods", "workflow", "ucd", "user centered", "user-centred", "nutzerzentriert", "design thinking", "lean ux", "lean", "agile", "agil", "scrum", "kanban", "okr", "design sprint", "sprints"],
      a: {
        de: [
          "<p>Nadine beginnt mit echten Nutzer:innen und Daten, macht daraus Hypothesen, gestaltet in kleinen Schritten gemeinsam mit der Entwicklung und prüft, was sich verändert hat.</p><p>Methoden, mit denen sie arbeitet: nutzerzentriertes Design, Design Thinking, Design Sprints, Lean UX, Scrum, Kanban und OKRs.</p>",
          "<p>Ihre Cases folgen immer derselben Logik: Was war das Problem? Was hat sie gemacht? Was hat es verändert, für Nutzer:innen und fürs Business? Genau so arbeitet sie auch: verstehen, gestalten, messen.</p>",
        ],
        en: [
          "<p>Nadine starts with real users and data, turns findings into hypotheses, designs in small steps together with engineering, and checks what changed.</p><p>Methods she works with: user-centred design, design thinking, design sprints, Lean UX, Scrum, Kanban and OKRs.</p>",
          "<p>Her cases always follow the same logic: What was the problem? What did she do? What did it change, for users and for the business? That's how she works, too: understand, design, measure.</p>",
        ],
      },
      next: ["research", "team", "hypotheses"],
    },
    {
      id: "research",
      label: { de: "User Research", en: "User research" },
      ask: { de: "Macht sie auch User Research?", en: "Does she do user research?" },
      keys: ["research", "user research", "nutzerforschung", "forschung", "interview", "interviews", "usability", "usability test", "usability tests", "usertest", "user test", "nutzertest", "nutzertests", "umfrage", "survey", "nps", "zenloop", "qualitativ", "qualitative", "quantitativ", "quantitative", "zielgruppe", "target group", "personas", "marktanalyse", "market research"],
      a: {
        de: [
          "<p>Ja. Nadine macht qualitatives User Research und User Testing genauso wie quantitative Analysen: Webanalyse, Heatmaps, Zielgruppen- und Marktanalysen, NPS-Auswertungen.</p><p>Schon ihre Bachelorarbeit war eine Nutzerstudie, über Augmented-Reality-Apps als Touchpoint in der Vorkaufphase der Customer Journey.</p>",
        ],
        en: [
          "<p>Yes. Nadine does qualitative user research and user testing as well as quantitative analysis: web analytics, heatmaps, target group and market analysis, NPS evaluation.</p><p>Even her bachelor thesis was a user study, on augmented reality apps as a touchpoint in the pre-purchase phase of the customer journey.</p>",
        ],
      },
      next: ["hypotheses", "education", "process"],
    },
    {
      id: "recup",
      label: { de: "reCup · B2B-Plattform", en: "reCup · B2B platform" },
      ask: { de: "Was hat sie bei reCup gemacht?", en: "What did she do at reCup?" },
      keys: ["recup", "rebowl", "rebowls", "recups", "b2b", "gastronomie", "gastronomen", "gastro", "restaurant", "restaurants", "cafe", "cafes", "café", "mehrweg", "pfand", "reusable", "deposit", "kuendigung", "kündigung", "cancellation", "cancel", "knowledge hub", "wissensdatenbank", "hilfe-center", "help center", "plattform", "platform"],
      a: {
        de: [
          "<p>Von 2024 bis 2025 war Nadine Senior UX Specialist bei reCup, dem Mehrweg-Pfandsystem für Becher und Schalen. Sie hat die B2B-Plattform weiterentwickelt, über die Gastronom:innen reCups und reBowls bekommen und den ganzen Prozess verwalten.</p><p>Ihre Schwerpunkte: der Kündigungsprozess, die Struktur der Navigation und ein neuer Knowledge Hub, dazu die Weiterentwicklung des Design-Systems.</p>",
        ],
        en: [
          "<p>From 2024 to 2025 Nadine was Senior UX Specialist at reCup, the reusable deposit system for cups and bowls. She developed the B2B platform further, where restaurants and cafés get reCups and reBowls and manage the whole process.</p><p>Her focus: the cancellation process, the navigation structure and a new knowledge hub, plus developing the design system further.</p>",
        ],
      },
      next: ["designsystems", "industries", "career"],
    },
    {
      id: "fiege",
      label: { de: "FIEGE Logistics", en: "FIEGE Logistics" },
      ask: { de: "Was hat sie bei FIEGE gemacht?", en: "What did she do at FIEGE?" },
      keys: ["fiege", "logistik", "logistics", "roadmap", "ux roadmap", "ux-roadmap", "strategie", "strategy", "ux strategie", "ux strategy", "ux management", "b2e"],
      a: {
        de: [
          "<p>Bei FIEGE Logistics war Nadine 2023 bis 2024 Senior UX/UI Designerin. Sie war verantwortlich dafür, nutzerzentrierte Produktentwicklung zu etablieren: mit einer UX-Roadmap, einer UX-Strategie und UX-Management-Verantwortung über Teams hinweg.</p>",
        ],
        en: [
          "<p>At FIEGE Logistics Nadine was Senior UX/UI Designer from 2023 to 2024. She was responsible for establishing user-centred product development: a UX roadmap, a UX strategy and UX management across teams.</p>",
        ],
      },
      next: ["process", "team", "career"],
    },
    {
      id: "meinauto",
      label: { de: "MeinAuto.de", en: "MeinAuto.de" },
      ask: { de: "Was hat sie bei MeinAuto.de gemacht?", en: "What did she do at MeinAuto.de?" },
      keys: ["meinauto", "mein auto", "meinauto.de", "auto", "automotive", "autos", "cars", "car", "saas"],
      a: {
        de: [
          "<p>Von 2014 bis 2017 war Nadine Web & Product Designerin bei MeinAuto.de. Sie verantwortete Corporate Design und markenbezogene Entscheidungen, System-Design und Informationsarchitektur aller B2C- und B2B-Plattformen, und hat eine neue B2B-Plattform (SaaS) konzipiert und gestaltet.</p>",
        ],
        en: [
          "<p>From 2014 to 2017 Nadine was Web & Product Designer at MeinAuto.de. She was responsible for corporate design and brand decisions, system design and information architecture for all B2C and B2B platforms, and designed a new B2B platform (SaaS) from concept to screens.</p>",
        ],
      },
      next: ["career", "industries", "designsystems"],
    },
    {
      id: "emails",
      label: { de: "Pixum · Transaktionsmails", en: "Pixum · Transactional emails" },
      ask: { de: "Hat sie auch an E-Mails gearbeitet?", en: "Did she work on emails too?" },
      keys: ["transaktionsmail", "transaktionsmails", "transactional", "transactional email", "transactional emails", "bestellbestaetigung", "bestellbestätigung", "order confirmation", "versandbestaetigung", "versandbestätigung", "shipping confirmation", "newsletter", "mailing", "mailings", "e-mails", "emails"],
      a: {
        de: [
          "<p>Ja, bei Pixum. Nadine hat die Übersicht und Struktur der Transaktionsmails erstellt, etwa Bestell- und Versandbestätigungen, und erste Konzepte für ihre Umstrukturierung entworfen. Das blieb in der Konzeptphase, deshalb gibt es dazu keine eigene Case Study.</p>",
        ],
        en: [
          "<p>Yes, at Pixum. Nadine created the overview and structure of the transactional emails, such as order and shipping confirmations, and first concepts to restructure them. It stayed at the concept stage, so there's no case study for it.</p>",
        ],
      },
      next: ["pixum", "account", "cases"],
    },
    {
      id: "tools",
      label: { de: "Tools & Skills", en: "Tools & skills" },
      ask: { de: "Mit welchen Tools arbeitet sie?", en: "Which tools does she use?" },
      keys: ["tools", "tool", "werkzeuge", "software", "programme", "skills", "faehigkeiten", "fähigkeiten", "kenntnisse", "figma", "figjam", "miro", "adobe", "photoshop", "illustrator", "indesign", "jira", "confluence", "html", "css", "javascript", "code", "coden", "programmieren", "github", "storyblok", "contentful", "shopify", "wordpress", "shadcn", "google analytics", "piwik", "balsamiq", "lottie"],
      a: {
        de: [
          "<p>Design: Figma (seit 2018), FigJam, Miro, Adobe Creative Suite, Balsamiq, Lottie.</p><p>Daten & Research: Google Analytics, Piwik, Zenloop, Heatmap- und Clickmap-Tools.</p><p>Zusammenarbeit & Technik: Jira, Confluence, GitHub, Storyblok, Contentful, Shopify, WordPress, shadcn. HTML und CSS kann sie fortgeschritten, JavaScript in Grundzügen.</p>",
        ],
        en: [
          "<p>Design: Figma (since 2018), FigJam, Miro, Adobe Creative Suite, Balsamiq, Lottie.</p><p>Data & research: Google Analytics, Piwik, Zenloop, heatmap and click map tools.</p><p>Collaboration & tech: Jira, Confluence, GitHub, Storyblok, Contentful, Shopify, WordPress, shadcn. Advanced HTML and CSS, basic JavaScript.</p>",
        ],
      },
      next: ["designsystems", "process", "education"],
    },
    {
      id: "education",
      label: { de: "Ausbildung", en: "Education" },
      ask: { de: "Was hat sie gelernt oder studiert?", en: "What's her education?" },
      keys: ["ausbildung", "studium", "studiert", "studied", "study", "education", "degree", "abschluss", "bachelor", "b.a.", "uni", "university", "hochschule", "fom", "mediengestaltung", "mediengestalterin", "media design", "media designer", "thesis", "bachelorarbeit", "augmented reality", "trainee", "gelernt"],
      a: {
        de: [
          "<p>Nadine ist ausgebildete Mediengestalterin für Digital & Print (2010–2014) und hat danach berufsbegleitend Marketing & digitale Medien an der FOM studiert (B.A., 2017–2022).</p><p>Ihre Bachelorarbeit: Augmented-Reality-Anwendungen als Touchpoint in der Vorkaufphase der Customer Journey, eine Nutzerstudie.</p>",
        ],
        en: [
          "<p>Nadine trained as a media designer for digital & print (2010–2014) and then studied Marketing & Digital Media at FOM alongside her job (B.A., 2017–2022).</p><p>Her bachelor thesis: augmented reality apps as a touchpoint in the pre-purchase phase of the customer journey, a user study.</p>",
        ],
      },
      next: ["research", "career", "tools"],
    },
    {
      id: "team",
      label: { de: "Zusammenarbeit", en: "Collaboration" },
      ask: { de: "Wie ist sie im Team?", en: "What is she like in a team?" },
      keys: ["team", "teams", "zusammenarbeit", "collaboration", "collaborate", "stakeholder", "stakeholdern", "entwickler", "entwicklerin", "entwicklung", "developer", "developers", "engineering", "engineers", "mentoring", "mentor", "lead", "leadership", "fuehrung", "führung", "kultur", "culture", "kommunikation", "communication", "soft skills", "kollegen", "colleagues"],
      a: {
        de: [
          "<p>Nadine arbeitet eng mit der Entwicklung zusammen, Design-Systeme baut sie immer gemeinsam mit Engineering. Bei Pixum hat sie Junior-Kolleg:innen gementort und war von 2021 bis 2022 gewählte Mitarbeitervertreterin, dazu Teil einer Projektgruppe zu New Work und Unternehmensstrategie.</p><p>Empathie ist dabei ihr stärkstes Werkzeug, auch im Umgang mit Stakeholder:innen und im Team.</p>",
        ],
        en: [
          "<p>Nadine works closely with engineering and always builds design systems together with developers. At Pixum she mentored junior colleagues and was an elected employee representative from 2021 to 2022, plus part of a project group on new work and company strategy.</p><p>Empathy is her strongest tool here, too: with stakeholders and within the team.</p>",
        ],
      },
      next: ["process", "designsystems", "personal"],
    },
    {
      id: "accessibility",
      label: { de: "Barrierefreiheit", en: "Accessibility" },
      ask: { de: "Achtet sie auf Barrierefreiheit?", en: "Does she care about accessibility?" },
      keys: ["barrierefreiheit", "barrierefrei", "accessibility", "accessible", "a11y", "inklusiv", "inclusive", "inklusion", "inclusion", "wcag"],
      a: {
        de: [
          "<p>Ja. Nadine will digitale Produkte intuitiver, inklusiver und nachhaltiger machen. Bei Pixum gehörte Barrierefreiheit zu ihren Aufgaben, und in Mein Pixum wurde zum Beispiel die Anrede optional, damit sich niemand zwischen „Herr“ und „Frau“ entscheiden muss.</p><p>Ihre Erfahrung mit Design-Systemen: Ist die Struktur gut, lässt sich Barrierefreiheit auch nachträglich sauber integrieren.</p>",
        ],
        en: [
          "<p>Yes. Nadine wants to make digital products more intuitive, inclusive and sustainable. Accessibility was part of her role at Pixum, and in the customer account, for example, the salutation became optional so nobody has to choose between “Mr” and “Ms”.</p><p>Her experience with design systems: with a sound structure, accessibility can be added cleanly even later on.</p>",
        ],
      },
      next: ["designsystems", "account", "softinteractions"],
    },
    {
      id: "industries",
      label: { de: "Branchen", en: "Industries" },
      ask: { de: "In welchen Branchen hat sie gearbeitet?", en: "Which industries has she worked in?" },
      keys: ["branche", "branchen", "industry", "industries", "domain", "domaenen", "domänen", "sektor", "sector", "b2c", "b2b", "b2b2c"],
      a: {
        de: [
          "<p>E-Commerce und Online-Fotoprodukte (B2C), Automotive (B2C & B2B), Logistik, Gastronomie und Mehrweg (B2B & B2C) und heute Sport-Streaming (B2B & B2C).</p>",
        ],
        en: [
          "<p>E-commerce and online photo products (B2C), automotive (B2C & B2B), logistics, gastronomy and reusables (B2B & B2C), and now sports streaming (B2B & B2C).</p>",
        ],
      },
      next: ["career", "recup", "current"],
    },
    {
      id: "location",
      label: { de: "Standort & Sprachen", en: "Location & languages" },
      ask: { de: "Wo sitzt sie, welche Sprachen spricht sie?", en: "Where is she based, which languages?" },
      keys: ["wo wohnt", "wo sitzt", "wo lebt", "where is she", "where does she live", "wohnort", "standort", "location", "based", "aachen", "germany", "deutschland", "sprache", "sprachen", "language", "languages", "englisch", "english", "deutsch", "german"],
      a: {
        de: [
          "<p>Nadine lebt in Aachen. Deutsch ist ihre Muttersprache, Englisch spricht sie fließend.</p>",
        ],
        en: [
          "<p>Nadine is based in Aachen, Germany. German is her native language and she speaks English fluently.</p>",
        ],
      },
      next: ["contact", "about", "personal"],
    },
    {
      id: "personal",
      label: { de: "Privat", en: "Off the clock" },
      ask: { de: "Was macht sie privat gern?", en: "What does she enjoy outside work?" },
      keys: ["hobby", "hobbys", "hobbies", "freizeit", "free time", "privat", "personal", "interessen", "interests", "kochen", "cooking", "backen", "baking", "yoga", "spinning", "lesen", "reading", "buecher", "bücher", "books", "reisen", "travel", "museum", "museen", "musik", "music", "pastell", "pastel"],
      a: {
        de: [
          "<p>Nadine liest gern, von Fantasy bis Kahneman, macht Yoga und Spinning, backt und kocht, genießt gutes Essen und reist vor allem durch Europa. Und sie hat einen Hang zu Pastellfarben, klaren User Flows und einer Prise gesundem Menschenverstand.</p>",
        ],
        en: [
          "<p>Nadine likes reading, from fantasy to Kahneman, does yoga and spinning, bakes and cooks, enjoys good food and travels, mostly around Europe. And she has a weakness for pastel colours, clear user flows and a pinch of common sense.</p>",
        ],
      },
      next: ["softinteractions", "about", "contact"],
    },
    {
      id: "cases",
      label: { de: "Case Studies", en: "Case studies" },
      ask: { de: "Zeig mir ihre Case Studies", en: "Show me her case studies" },
      keys: ["case", "cases", "case study", "case studies", "projekte", "projekt", "projects", "project", "portfolio", "beispiele", "examples", "arbeitsproben", "work samples", "zeig mir"],
      a: {
        de: [
          "<p>Diese Case Studies kannst du direkt hier öffnen:</p><ul><li>Pixum: Navigation, Shopgruppen & Produktseiten</li><li>Pixum: Mein Pixum, der Kundenbereich</li><li>Design-Systeme, von Pixum bis DYN</li></ul><p>Zur B2B-Plattform von reCup erzähle ich dir gern auch etwas.</p>",
        ],
        en: [
          "<p>You can open these case studies right here:</p><ul><li>Pixum: navigation, shop groups & product pages</li><li>Pixum: Mein Pixum, the customer account</li><li>Design systems, from Pixum to DYN</li></ul><p>Happy to tell you about reCup's B2B platform, too.</p>",
        ],
      },
      actions: [
        { type: "case", slug: "shop-groups" },
        { type: "case", slug: "my-pixum" },
        { type: "case", slug: "design-systems" },
      ],
      next: ["impact", "recup", "process"],
    },
    {
      id: "contact",
      label: { de: "Kontakt", en: "Contact" },
      ask: { de: "Wie erreiche ich Nadine?", en: "How can I reach Nadine?" },
      keys: ["kontakt", "contact", "erreichen", "reach", "email", "e-mail", "mail", "schreiben", "write", "anrufen", "call", "linkedin", "hire", "einstellen", "anstellen", "stelle", "position", "freelance", "freiberuflich", "verfuegbar", "verfügbar", "available", "availability", "gespraech", "gespräch", "talk", "interview", "anfrage", "zusammenarbeiten", "work with"],
      a: {
        de: [
          "<p>Am besten per E-Mail: <strong>nadine.westmann@hotmail.com</strong>. Ob und wann sie für neue Projekte offen ist, fragst du sie am besten direkt.</p>",
        ],
        en: [
          "<p>Email is best: <strong>nadine.westmann@hotmail.com</strong>. Whether she's open to new projects is best asked directly.</p>",
        ],
      },
      actions: [{ type: "email" }, { type: "copy" }],
      next: ["about", "impact", "current"],
    },
    {
      id: "thanks",
      label: { de: "Gern", en: "You're welcome" },
      ask: { de: "Danke!", en: "Thanks!" },
      keys: ["danke", "dankeschoen", "dankeschön", "thanks", "thank you", "thx", "merci", "super", "cool", "toll", "great", "awesome", "nice", "perfekt", "perfect"],
      a: {
        de: ["<p>Sehr gern! Magst du noch etwas wissen?</p>", "<p>Gern geschehen. Frag ruhig weiter.</p>"],
        en: ["<p>You're welcome! Anything else you'd like to know?</p>", "<p>Happy to help. Feel free to keep asking.</p>"],
      },
      next: ["contact", "cases", "personal"],
    },
  ],
  more: ["mehr", "more", "details", "genauer", "erzaehl mehr", "erzähl mehr", "tell me more", "weiter", "go on", "und dann", "and then", "noch was", "anything else", "beispiel", "example"],
  starters: ["about", "impact", "designsystems", "process"],
  fallbackNext: ["about", "career", "impact", "cases"],
};
