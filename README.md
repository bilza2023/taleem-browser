# taleem-browser

**taleem-browser** provides a simple and reliable way to create **JSON-based slide presentations** and display them in the browser.

It is designed for:
- students
- teachers
- academics
- anyone who wants structured, content-driven slides without complex tools

At its core, `taleem-browser` does one thing well:

> **Take a slide deck written in JSON and display it as slides.**

You give it a valid deck, and it renders the slides — one at a time — into the page.

That’s it.

There is no autoplay, no animation system, and no timing dependency.  
Slides always render, regardless of how simple or complex the deck is.

---

## Core idea

A slide deck is treated as a **document**, not a video or animation.

Slides are shown in a fixed order, and the browser moves between them by position (previous, next, or jump to a slide).

This makes slide creation:
- predictable
- easy to debug
- safe to modify
- suitable for learning and teaching material

You focus on **content and structure**.  
`taleem-browser` handles display and navigation.


---

## What this library does

`taleem-browser`:

- Accepts a **deck JSON object**
- Renders slides using `taleem-slides`
- Owns a single DOM mount point
- Displays **exactly one slide at a time**
- Navigates slides by **index**
- Always succeeds at rendering content

The public API is intentionally small:

```js
browser.next()
browser.prev()
browser.goTo(index)

browser.getIndex()
browser.getTotal()

browser.render()
browser.destroy()
````

That’s the entire contract.

---

## What this library intentionally does NOT do

This is not an omission — it is a design choice.

`taleem-browser` does **not**:

* interpret `start`, `end`, or `showAt`
* manage time, intervals, or autoplay
* perform animations or transitions
* sync audio or narration
* depend on any framework (React, Svelte, Vue, etc.)
* grow configuration options endlessly

These concerns belong to **different layers or different libraries**.

---
“Canonical slide styles live at src/styles/taleem.css and are shipped as a release asset.”
---

## Relationship to other Taleem libraries

`taleem-browser` is part of a small, layered ecosystem.

### Lower-level libraries

* **taleem-core**
  Defines deck schemas, validation rules, and core concepts.
  📄 API reference:
  [https://github.com/bilza2023/taleem-core/blob/master/docs/api.md](https://github.com/bilza2023/taleem-core/blob/master/docs/api.md)

* **taleem-slides**
  Converts slide JSON into HTML.
  This is the renderer used internally by `taleem-browser`.
  🔗 Repository:
  [https://github.com/bilza2023/taleem-slides](https://github.com/bilza2023/taleem-slides)

`taleem-browser` sits **above** these libraries so users do not need to wire renderers or schemas manually.

If you want low-level control over rendering, use `taleem-slides` directly.
If you want a **ready-to-use slide viewer**, use `taleem-browser`.

---

## Example deck (gold standard)

A complete, production-quality example deck is available here:

🔗 **Demo gold-standard deck**
[https://github.com/bilza2023/taleem/blob/master/decks/demo-gold.json](https://github.com/bilza2023/taleem/blob/master/decks/demo-gold.json)

This deck is used as a visual and structural reference for:

* slide layout
* spacing
* typography
* JSON structure

---

## Advanced playback (out of scope)

Timed playback, animations, narration, or video-like behavior are **explicitly out of scope** for this library.

Timing-related fields such as `start`, `end`, and `showAt` are treated as **metadata**, not requirements.

For deeper reading on timing concepts and EQ-style slides:

* 📄 EQ slide format (advanced, optional):
  [https://github.com/bilza2023/taleem-core/blob/master/docs/eq.md](https://github.com/bilza2023/taleem-core/blob/master/docs/eq.md)

* 📄 Timing rules (for playback layers, not the browser):
  [https://github.com/bilza2023/taleem-core/blob/master/docs/timings.md](https://github.com/bilza2023/taleem-core/blob/master/docs/timings.md)

A future playback layer (e.g. `taleem-player`) may interpret these fields, but `taleem-browser` never depends on them.

---

## Project discipline (important)

To keep the core strong, we follow strict rules:

### ❌ Things we do NOT do

* Do **not** add new slide types (too early)
* Do **not** add new features casually
* Do **not** blur browser and player responsibilities
* Do **not** over-optimize
* Do **not** grow the API
* Do **not** chase frameworks or trends

### ✅ Things we focus on

* More example decks
* CSS and rendering bug fixes
* Navigation correctness
* Documentation clarity
* Stability over novelty

Every “no” protects the core.

---

## Minimal usage

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
```

---

## Design philosophy

* Slides are **content-first**
* Index is more fundamental than time
* Rendering should never fail
* Static viewing is the default
* Playback is an optional interpretation

> **Slides are documents.
> Timing is an optional playback layer.**

---

### Related project (optional)

`taleem-browser` is actively used in the **Taleem demo project**, which showcases real decks, layouts, and usage patterns as they evolve.

The demo project is a work in progress and is provided as a reference, not a dependency:

https://github.com/bilza2023/taleem

---

## License

MIT

