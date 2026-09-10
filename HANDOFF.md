# Handoff notes

What I decided where the mockups didn't say, what I resolved, and what still
needs you. Nothing here was guessed silently.

---

## 1. Where the mockups were incomplete

### Only two detail pages were designed
The canvas has six artboards: Main page, **SiFive**, **Romulus**, Résumé, 404,
and System. The other six projects had no detail mockup, so I extended the same
beat vocabulary to them.

**This means the eyebrow labels and beat headings on those six pages are mine.**
The project-data doc supplied prose but no headings or eyebrows. Specifically
invented copy, worth your editorial pass:

| Project | Eyebrows I wrote | Headings I wrote |
|---|---|---|
| Cisco CDA | Alignment, Focus, Run views | "Diagrams, taxonomies, and shared concepts", "Designing for the network operator", "Watching a workflow run" |
| i360 Calls Mobile | Users, Constraints, Delivery, Testing | "Volunteers, not power users", "Designed to be heard as much as seen", "Every phase, both platforms", "Testing on real devices" |
| Kleptocracy | Reflection, Follow-up | "A first of its kind, for me", "A sequel that stalled" |
| Beltway Nonprofit | Process | "Styles, feedback, final comps" |
| H-W House Plans | Era | "Pre-responsive, and shelved" |

Body copy is verbatim from the project-data doc in every case.

### Kleptocracy sits in Tier 2 (moved after the mockups)
Your content-model doc called it "between the tiers — treat as Tier 1 but
shorter"; the mockup listed it as the fifth case study. It's since been moved
into **Earlier & lighter work** per Mark, making the list four and four, and the
Tier 2 grid four-up.

Its detail page is unchanged and still the deepest of the Tier 2 set (three
beats plus a live link, versus one or two beats for the others), but the header
kicker now reads **"Project"** rather than "Case study", because that label is
driven off `tier`. If you'd rather it kept "Case study", that wants a small
`kicker` override field on the project — say the word.

### No Tier 2 detail-page treatment
The mockup shows Tier 2 only as cards on the main list. For their detail pages I
reused the Tier 1 system with two changes: the kicker reads **"Project"** rather
than "Case study", and there's no outcome band. The hero image carries the page
so the short ones don't read as empty — see `/portfolio/sifive-logos/`, which is
a single beat.

The Tier 2 grid is four-up on desktop, each card exactly three of the twelve
columns with real 24px gutters, so it aligns with every other block on the page.
It halves to two-up below 1000px and stacks below 600px.

### The metadata table has no defined empty state
The mockup always shows four rows (Type / Company / Years / Role). The template
**omits rows with no value rather than leaving them blank**, so a project with a
thinner record degrades cleanly. As it stands every project fills all four:

- **Kleptocracy** — 2018, Hudson Institute (per Mark).
- **Beltway Nonprofit** — 2013, ReadyMadeWeb (subcontract) (per Mark). Neither
  year was recorded in the old HTML or the source docs.
- **Cisco** — years set to **2022 – 2023**, since the project-data doc says the
  automation product started in 2022, though you were at Cisco from 2020. Worth
  a second look if you'd rather show the full tenure.

### `h1` size is hand-tuned per artboard
SiFive's title is 108px and Romulus's is 132px, but the System artboard defines
one "Page title" token at 108. I made **108 the default** and added an opt-in
`title_scale: "large"` used only by Romulus, preserving what the mockup shows.
If you'd rather it were automatic by title length, that's a one-line change.

### Section-break heading size is inconsistent between artboards
SiFive's "Chip Designer" break is 72px; Romulus's "Iteration and additional
work" is 60px. The System artboard says "Section title — 60". **I used 60 for
both.**

### Captions are partial by design
The `showCaptions` toggle is on in the mockup, but only some images have
captions there. I carried the mockup's captions verbatim and wrote captions for
the other projects where the old site had something meaningful. Images without
one still have alt text.

### The global nav dropped the Blog link
Mockup nav is **Work / Résumé / mark@nuge.co**; mockup footer is **Work /
Résumé / LinkedIn / GitHub**. The old site's footer also had "Blog" and a link
labelled "Stack Exchange" that actually pointed at your Tumblr. I followed the
mockup and dropped both. The blog is still linked from the résumé's Writing
section. Say if you want it back in the footer.

---

## 2. Open items from your docs — resolved

- **TileLink logo found.** `images/port-panels/t-tilelink@2x.png` is the real
  logo. It's now the card image and hero for that project, replacing the
  mockup's "LOGO FILES NEEDED" placeholder and the old page's copy-pasted House
  Plans images.
- **The Kleptocracy demo still resolves.** `spinline.net/china/` loads ("Inside
  China's Kleptocracy"), so it's carried forward as a "Live" link at the foot of
  that case study.
- **`rom-cd` / `rom-not` duplicate.** The mockup uses `rom-not-zoom@2x` once and
  never `rom-cd`, so the bug is resolved by omission — `rom-cd` is unused.
- **`sifive-logos.html` category bug.** It read "E-commerce website", a
  copy-paste leftover. Now "Logo design".
- **The stray `</a>` in `sifive.html`** is moot — no markup was carried over from
  the old pages, only prose.

## 3. Logo assets — done

Both marks are in and rendering as a `pair` in the body of
`/portfolio/sifive-logos/`:

```
images/port-page-img/tilelink-logo.png      1869 x 859   ground #EBEBEB
images/port-page-img/rocket-chip-logo.png   2000 x 1939  ground #2E2E2E (dark variant)
```

They're very differently proportioned — a wide lockup next to a stacked one —
so they use a `frame: "logo"` variant: a 4:3 box with `object-fit: contain`, and
a per-image `frame_bg` matching that file's own ground, so the letterboxing is
invisible. Note the supplied Rocket Chip file is the **dark** variant; if you
ever swap in a light one, update `frame_bg` in `src/_data/projects.js` to match.

Captions were dropped on these two — the marks state their own names.

`images/port-panels/t-tilelink@2x.png` remains the page hero and list card.

## 4. Decisions waiting on you

1. **Redbone Group is not on the résumé.** Your résumé doc lists it (May 2026 –
   Present) marked "add when ready", and the mockup doesn't show it. I left it
   out to match both. It's your current role — say the word and it goes in at
   the top of `src/_data/resume.js`.
2. **The résumé PDF is stale.** `Mark-Nugent-Designer-Resume.pdf` is dated
   Jan 2024, so it predates Davillier and doesn't match the page it's linked
   from.
3. ~~`robots.txt`~~ — **done, per Mark's decision: shareable by link, absent
   from search.** The configuration is deliberately asymmetric and looks
   backwards at first glance:

   - **Search engines are ALLOWED to crawl** (Googlebot, Googlebot-Image,
     Bingbot, DuckDuckBot, Slurp, Applebot).
   - **`.htaccess` sends `X-Robots-Tag: noindex, nofollow, noarchive,
     nosnippet, noimageindex, notranslate` on every response** — pages, images
     and the PDF alike (verified against live Apache).
   - **AI/LLM, SEO and archive crawlers are blocked outright** (~35 agents),
     as is anything unnamed, via `User-agent: *`.

   The reason search engines are allowed: a `Disallow` blocks the fetch, so the
   crawler never reads the noindex — and Google may then list the bare URL
   anyway if it finds a link to it elsewhere. Allowing the fetch means the
   noindex is seen and the page is dropped entirely. Blocking would have been
   the *weaker* guarantee for a link-shared site.

   Ordering matters in that file: `Applebot-Extended` (AI training) must appear
   **before** `Applebot` (search), because the latter is a prefix of the former
   and a first-match parser would otherwise apply the Allow rule to it. Rules
   are regression-tested with a real robots parser — 22 agents, all correct.

   **Caveat: both mechanisms are advisory.** They bind compliant crawlers only;
   they are not access control. Genuine exclusion needs HTTP auth or an IP
   allowlist, which would break link-sharing.

4. **The Cisco → Davillier gap** (Nov 2023 – Aug 2024) is unaddressed, per your
   doc's own note. Dates simply speak for themselves right now.
5. **Switch GitHub Pages to "GitHub Actions"** in Settings → Pages, or the old
   root `index.html` keeps being served instead of the new build.

---

## 5. Responsive calls

The mockups are desktop-only. Breakpoints sit where the design actually breaks
(1200 / 1000 / 900 / 760 / 640), not at device sizes.

- **Main hero.** Not a scale-down. The name stays broken across two lines at
  every width — that stacked block is the page's signature — and the type is a
  `clamp()` from 64px to the mockup's 132px. Below 1000px the headline/intro
  columns stack, the intro takes a 62ch measure under the headline rather than
  a cramped 4-column well, and the red rule thins from 8px to 6px.
- **Project metadata table.** Below 1000px the label-left / value-right pattern
  is wrong — "User research, UX/UI design, visual design, UX writing" collides
  with its own label. It becomes a real two-column table: keys in a narrow rail,
  values left-aligned and free to wrap, hairlines kept so it still reads as the
  same tabular object.
- **Tier 1 project rows.** Below 900px the 4/7 split starves the text column, so
  the row stacks *with the image first* — which makes it read as the same object
  as a Tier 2 card. One card shape, two scales.
- **Beats.** Below 900px the 2-column eyebrow rail is too narrow for its words,
  so the eyebrow becomes a label above the text at full width, and body copy is
  capped at 68ch so it never runs the full viewport.
- **Masthead.** Three links, so nothing is hidden behind a menu — it becomes two
  stacked rows below 640px.
- **Nothing is hidden anywhere.** Verified across 11 pages × 9 widths
  (1440 → 320): **zero horizontal overflow, zero elements with text content
  set to `display:none`.** The old site's "description hidden below 641px" trick
  is gone.

---

## 5b. Click-to-enlarge images

Detail-bearing images open at full resolution. **26 of 40 images are enabled**,
chosen by two tests together: the content is detail-bearing (diagram, wireframe,
state chart, annotated spec, data grid, dense UI), *and* the source file is
meaningfully larger than its displayed size. Set `zoom: true` on an image in
`src/content/projects.js` to enable it.

Deliberately **not** enabled: every hero, and images where the source gains
nothing when enlarged — `rom-search` (1.07x), `ios-calls-ipad` (0.83x),
`cea-2` (0.94x) — plus purely illustrative ones (the logos, the test-devices
photo) and simple screens (`rom-login`, `rom-convmodal`).

The affordance is a `zoom-in` cursor plus a 30px hairline square in the image's
bottom-right corner, at 55% opacity, inverting to solid ink on hover or focus.
On touch (`hover: none`) it sits at 85% since there is no hover state.

**The site now ships 2 KB of JavaScript** (`src/js/zoom.js`) — the first and
only script, and it is a progressive enhancement. Each enlargeable image is
already an `<a>` pointing at the full-resolution file, so with JS off or broken
it opens in a new tab; the script upgrades that to a `<dialog>` lightbox so the
visitor stays on the page. Native `<dialog>` supplies Esc-to-close and focus
trapping. Modified clicks (cmd/ctrl/shift) still open a new tab.

## 5c. An image optimiser ran over `images/` — check before committing

At some point an optimiser recompressed **195 files** (~7% smaller each) and
**deleted 12**. Three of the deleted files were referenced by the site and were
rendering as broken images: `cda-wfexecution-zoom@2x.png`,
`rom-filtercd-zoom@2x.png` (the Romulus hero *and* list card) and
`rom-login-zoom@2x.png`. A fourth, `cea-1-zoom@2x.png`, was needed for the
Beltway hero. All four have been restored with `git checkout HEAD --`.

The other eight deletions are unreferenced and were left deleted. If you run
that tool again, re-run the missing-image check before deploying:

```
grep -rhoE 'src="/images/[^"]+"' --include='*.html' _site | sed 's/^src="//;s/"$//' \
  | sort -u | while read -r p; do [ -f "_site$p" ] || echo "MISSING $p"; done
```

## 5a. Apache deploy (`.htaccess`)

Source: `src/_static/htaccess` → built to `_site/.htaccess`. It covers three
things, all verified against a real Apache 2.4 instance:

- `ErrorDocument 404 /404.html` — the built 404 page won't fire without this.
- `X-Robots-Tag` noindex header (see item 3 above).
- **301s for every URL that moved.** All eight project pages went from
  `/portfolio/<name>.html` to `/portfolio/<slug>/`, `resume.html` to `/resume/`,
  and the old portfolio index to `/`. The `/portfolio/` rule is anchored with
  `$` so it can't swallow `/portfolio/<slug>/`.

**FTP deploys are additive.** Copying `_site` over the old site leaves every
old file in place — including `portfolio/index.html`, which would keep serving
the old portfolio list at a URL the new build has no file for. Delete the old
`portfolio/*.html`, `resume.html`, `styles/`, `js/`, `animation/` and
`bower_components/` from the server, or use an FTP sync that removes extras.

## 6. Old files

The previous site is still in the repo, untouched and superseded. It's all in
git history, so it's safe to remove whenever you're satisfied with the rebuild —
I left it rather than deleting on your behalf:

```
index.html  resume.html  portfolio/*.html
styles/     js/          animation/
bower.json  bower_components/  config.codekit3  scratch.sketch
```

`images/` is still live — the new site serves from it.
