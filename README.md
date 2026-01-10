
# taleem-browser

**taleem-browser** is a minimal, index-based slide document browser.

At its core, it is a **JSON → Slides engine**:

> **JSON in →  slides out**

It takes a structured slide deck (JSON) and renders one slide at a time into the DOM, allowing simple, reliable navigation by index.

There is **no timeline**, **no autoplay**, and **no animation logic** by design.

---

## Core idea

Slides are **documents**, not animations.

A deck is an **ordered list of slides**.  
`taleem-browser` lets you **view and navigate** that list safely and deterministically.

- No matter how simple or complex the deck is
- Whether timing metadata exists or not
- Even if timing metadata is incomplete or wrong

Slides always render.

---

## What this library does

`taleem-browser`:

- Accepts a **deck JSON object**
- Renders slides using `taleem-slides`
- Owns a single DOM mount point
- Displays **exactly one slide at a time**
- Navigates slides by **index**
- Always succeeds at rendering content

Navigation is explicit and controlled via a small API:

- `next()`
- `prev()`
- `goTo(index)`

---

## What this library intentionally does NOT do

`taleem-browser` does **not**:

- interpret `start`, `end`, or `showAt`
- manage time or intervals
- autoplay slides
- sync audio or narration
- perform animations
- depend on any framework (React, Svelte, etc.)

These concerns belong to a **separate playback layer**, not a document browser.

---

## Relationship to other Taleem libraries

`taleem-browser` sits above lower-level libraries:

- **taleem-core**  
  Defines schemas and core data rules.

- **taleem-slides**  
  Converts slide JSON into HTML.

`taleem-browser` uses `taleem-slides` internally so users don’t have to wire renderers manually.

If you want full control over rendering, you can use `taleem-slides` directly.  
If you want a **ready-to-use slide viewer**, use `taleem-browser`.

---

## Usage (minimal)

```js
import { createTaleemBrowser } from "taleem-browser";
import deck from "./deck.json";

const browser = createTaleemBrowser({
  mount: "#app",
  deck
});

browser.next();
browser.prev();
browser.goTo(3);
````

That’s it.

---

## Design philosophy

* Slides are **content-first**
* Index is more fundamental than time
* Rendering should never fail because of timing
* Static viewing is the default
* Playback is an optional interpretation

> **Slides are documents.
> Timing is an optional playback layer.**

---

## Advanced playback

If you need timed playback (e.g. animations, narration, or video-like behavior), use a higher-level utility (such as a future `taleem-player`) that **drives** `taleem-browser`.

The browser itself remains simple, stable, and predictable.

---

## License

MIT
