
# taleem-browser

**taleem-browser** is a small, reliable JavaScript library for displaying
**JSON-based Taleem slide decks** in the browser.

It is intentionally simple.

> **Given a valid deck and an index, it renders that slide into the DOM.**

No timing.  
No autoplay.  
No hidden state.

---

## Why taleem-browser exists

Most slide systems mix too many responsibilities:
- rendering
- timing
- navigation
- animation
- state
- UI controls

`taleem-browser` deliberately avoids this.

It treats a slide deck as a **document**, not a video.

This makes it:
- predictable
- easy to debug
- easy to test
- safe for educational content
- reusable in any UI or framework

---

## What it is

`taleem-browser` is:

- an **index-based slide viewer**
- a **thin DOM wrapper**
- a **consumer of Taleem decks**
- a **renderer, not a player**

You decide *which slide index to show*.  
The browser renders it.

---

## What it does

`taleem-browser`:

- Accepts a **deck JSON object**
- Uses **taleem-slides** to convert slide JSON into HTML
- Injects a fixed DOM structure into a mount point
- Displays **exactly one slide at a time**
- Renders slides **by numeric index**
- Never mutates the deck
- Throws immediately on invalid slide types

The API is intentionally small and stable.

---

## Installation

```bash
npm install taleem-browser
````

---

## Basic usage

```js
import { createTaleemBrowser } from "taleem-browser";
import deck from "./deck.json";

const browser = createTaleemBrowser({
  mount: "#app",
  deck
});

browser.render(0);   // render first slide
browser.render(1);   // render second slide
```

---

## Public API

### `createTaleemBrowser(options)`

Creates a browser instance.

```ts
createTaleemBrowser({
  mount: HTMLElement | string,
  deck: TaleemDeck
})
```

#### Parameters

* `mount`
  A DOM element or a CSS selector where slides will be rendered.

* `deck`
  A **valid Taleem deck JSON object**.

---

### `browser.render(index)`

Renders the slide at the given index.

```js
browser.render(3);
```

* Index is zero-based
* Out-of-range indexes are ignored
* Rendering always replaces previous slide content

---

### `browser.getTotal()`

Returns the total number of slides in the deck.

```js
const total = browser.getTotal();
```

---

## DOM contract

`taleem-browser` injects the following structure into the mount element:

```html
<div class="taleem-browser-bg"></div>
<div class="taleem-browser-slide"></div>
```

### Meaning

* `.taleem-browser-bg`
  Deck-level background layer

* `.taleem-browser-slide`
  Container for the rendered slide HTML

These class names are **public and stable** and may be styled by consumers.

---

## Styling

`taleem-browser` does **not** generate slide styles.

Slide HTML and CSS are defined by **taleem-slides** and/or the consuming application.

This ensures:

* deterministic output
* inspectable markup
* no runtime styling surprises

---

## What this library intentionally does NOT do

This is a design choice, not a limitation.

`taleem-browser` does **not**:

* interpret timing (`start`, `end`, `showAt`)
* manage playback or autoplay
* handle animations or transitions
* validate slide field content
* expose internal state
* provide UI controls
* depend on any framework (React, Svelte, Vue, etc.)

These concerns belong to **other layers**.

---

## Relationship to other Taleem libraries

`taleem-browser` is part of a layered ecosystem.

### taleem-core

Defines deck schemas and validation rules.

### taleem-slides

Converts slide JSON into HTML templates.
Used internally by `taleem-browser`.

`taleem-browser` sits **above** these libraries to provide
a ready-to-use, index-based slide viewer.

If you need:

* schema validation → use `taleem-core`
* raw HTML rendering → use `taleem-slides`
* timed playback or narration → use a playback layer (e.g. `taleem-player`)

---

## Testing philosophy

`taleem-browser` tests **do not validate decks or slides**.

Tests use a **minimal, known-valid deck** to verify:

* DOM injection
* template resolution
* deterministic rendering
* index-based behavior

Slide correctness is explicitly **out of scope** for this library.

---

## Design philosophy

* Slides are documents
* Index is more fundamental than time
* Rendering should be deterministic
* State belongs to the caller
* Small libraries stay correct longer

> **Render by index.
> Everything else is interpretation.**

---

## License

MIT


