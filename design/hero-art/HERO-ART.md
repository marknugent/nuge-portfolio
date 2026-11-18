# Hero line art: integration notes

A decorative layer for the portfolio hero. Three stroke-only SVGs draw themselves in one after another, hold, then crossfade to the next. It sits behind the name and tagline, fades out toward the text column, and is clipped at the coral divider.

`demo.html` is a working reference. Open it in a browser to see the intended result, and copy from it.

## Files

| File | What it is |
| --- | --- |
| `art-state-machine.svg` | Workflow version state machine |
| `art-workflow-editor.svg` | Cisco workflow editor |
| `art-phones.svg` | Two-phone call survey screens |
| `art-crm-search.svg` | CRM case table with the search dropdown (Cases / Residents / Groups) |
| `hero-art.css` | Layout, draw animation, crossfade, masks, reduced motion. All tuning variables live here |
| `hero-art.js` | Slide cycler (about 40 lines, no dependencies) |
| `demo.html` | Reference page with all of the above wired together |
| `source/gen.py` | Generator for the SVGs. Not needed at runtime |

## Markup

```html
<header class="hero">                       <!-- existing hero: needs position: relative; overflow: hidden -->
  <nav>...</nav>                            <!-- existing; keep it above the art (position: relative; z-index: 1+) -->
  <div class="hero-art" data-hold="7000" data-fade="1600" aria-hidden="true">
    <div class="hero-art__slide hero-art__slide--state-machine">   <!-- inline art-state-machine.svg --> </div>
    <div class="hero-art__slide hero-art__slide--workflow-editor"> <!-- inline art-workflow-editor.svg --> </div>
    <div class="hero-art__slide hero-art__slide--phones">          <!-- inline art-phones.svg --> </div>
    <div class="hero-art__slide hero-art__slide--crm-search">      <!-- inline art-crm-search.svg --> </div>
  </div>
  <div class="hero__text">...</div>         <!-- existing name and tagline; position: relative; z-index: 1 -->
</header>
<link rel="stylesheet" href="hero-art.css">
<script src="hero-art.js" defer></script>
```

## Requirements

1. **The SVGs must be inline in the HTML**, not loaded with `<img>` or CSS `background-image`. CSS cannot animate paths inside an image. Paste them in, or inline them at build time (Vite `?raw`, Astro `set:html`, Next.js raw import, a Webflow embed element).
2. Keep the `class="d"`, `class="f"` and `style="--i:N"` attributes on every shape. They drive the animation. `d` shapes draw on, `f` shapes (dotted lines) fade in, and `--i` is the stagger order.
3. The art is `aria-hidden`. It is decoration only.
4. `.hero` must clip overflow, otherwise the art leaks past the coral divider.

## Tuning (CSS variables on `.hero-art`)

| Variable | Default | Effect |
| --- | --- | --- |
| `--art-opacity` | `0.5` | Brightness ceiling for every slide |
| `--art-color` | `#fff` | Stroke color |
| `--draw` | `1.4s` | Time each stroke takes to draw |
| `--step` | `35ms` | Delay between groups of strokes (each slide finishes drawing in about 2 seconds) |
| `--fade` | `1.6s` | Crossfade length. Keep in sync with `data-fade` |

Placement: every slide is sized so it runs off the right and bottom edges of the hero and is cropped by the hero's `overflow: hidden`. Keep it that way. Fitting an artwork fully inside the hero, or fading its edges, makes it look like a floating cloud next to the phones. Only the left edge fades, so the art stays clear of the text.

Hold time per slide is `data-hold` on `.hero-art` (milliseconds). Per-slide size and position are the `--w`, `--x` and `--y` values in the `.hero-art__slide--*` rules.

The left edge fade is the `mask-image` on `.hero-art`. Move its stops if the headline gets longer or shorter.

## Behavior to preserve

- Slides draw only while active, and hold their finished state while fading out.
- Reduced motion (or JS disabled): the first slide shows fully drawn, with no drawing and no cycling.
- The cycle pauses when the tab is hidden.
- Under 820px wide the art is hidden. The hero is text-first on small screens.
- Do not add `vector-effect: non-scaling-stroke`. It breaks the draw technique, which relies on `pathLength="1"`.

## Notes on the artwork

The SVGs are stylized redraws of the original screens, with text replaced by placeholder bars of varied length. No client content or readable copy is included. To change the drawing, ask for a regenerated SVG rather than editing paths by hand.

## Eleventy notes

The site is a static Eleventy build, so:
- Put the four SVGs in `_includes/` (for example `_includes/hero-art/`) and inline each one in the layout with `{% include "hero-art/art-phones.svg" %}` (Nunjucks) or the equivalent for the template language in use. They must be inline, not `<img>`.
- Pass `hero-art.css` and `hero-art.js` through with `addPassthroughCopy` (or inline the CSS) and load the script with `defer`.
- Slide order is the order of the `.hero-art__slide` elements in the markup.
