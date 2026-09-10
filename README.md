# nuge.co

Mark Nugent's portfolio. Static site built with [Eleventy](https://www.11ty.dev/)
and Nunjucks templates.

## Running it

```bash
npm install
npm start      # dev server with live reload at localhost:8080
npm run build  # one-off build into _site/
```

## How it's put together

Everything is templated — there is no hand-copied page HTML. Adding a project
means adding an object to `src/_data/projects.js`; a page is generated from it.

```
src/
  _data/
    site.json            name, contact, intro copy, analytics id
    projects.js          all projects — the single source of truth
    visibleProjects.js   projects.js minus anything flagged `excluded`
    resume.js            experience, testimonials, skills, education, writing
  _includes/
    layouts/base.njk     document shell, fonts, masthead + footer
    partials/
      masthead.njk           site header and nav
      footer.njk             site footer
      project-card.njk       Tier 1 row on the main list
      project-card-compact.njk   Tier 2 card on the main list
      project-detail-beat.njk    one beat of a case study
      figures.njk            an image group (full / inset / pair)
      project-meta.njk       Type / Company / Years / Role table
  css/site.css           the whole stylesheet, tokens at the top
  index.njk              main page — intro + full project list
  project.njk            one template, paginated into every /portfolio/<slug>/
  resume.njk             résumé
  404.njk                not found
```

### The content model

A project's page body is an ordered list of `beats`. Each entry is one of:

| `type`    | renders as |
|-----------|------------|
| `beat`    | eyebrow rail + text column + optional image groups |
| `section` | a full-width section break (kicker + heading + rule) |
| `outcome` | the red outcome band |

Image groups take a `layout` of `full`, `inset`, or `pair`. A beat needing two
groups with different layouts adds `images2` / `layout2`.

Rows in the metadata table are omitted when the underlying data has no value,
rather than printed blank.

### Design system

Tokens live in `:root` at the top of `src/css/site.css` and come from the
"System" artboard of the Claude Design mockups: a 12-column grid with 24px
gutters and 80px page margins, Inter for text with JetBrains Mono for metadata
labels, and a palette of ink `#111111`, accent `#DE3226`, mute `#6E6B67`,
field `#EFEDE9`, paper `#FAFAF8`. No shadows, no radii, no gradients — rules
(2px at structural breaks, 1px within a set) and black/red bands carry the
structure.

The type scale is fluid: each size is a `clamp()` whose upper bound is exactly
the value given in the System artboard, so desktop matches the mockup and
narrow viewports step down smoothly.

### Responsive behaviour

The mockups are desktop-only; breakpoints at 1200 / 1000 / 900 / 760 / 640px
are derived from where the design actually breaks rather than device sizes.
Content is identical at every width — layout reflows, nothing is hidden.
See `HANDOFF.md` for the specific calls made.

## Deploying

`.github/workflows/deploy.yml` builds on push to `master` and publishes
`_site/` to GitHub Pages.

**One-time setup:** in the repository's Settings → Pages, set *Source* to
**GitHub Actions**. Until that's changed, Pages will keep serving the old
root-level `index.html` instead of the built site.
