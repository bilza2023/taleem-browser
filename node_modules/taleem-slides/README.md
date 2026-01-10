
# 📦 taleem-slides

> **Deterministic slide interpretation & rendering engine for deck-v1**

`taleem-slides` is a **pure, test-locked rendering layer**.
It takes a validated `deck-v1` JSON and produces **deterministic HTML output** through a strict public API.

This project does **not**:

* build decks
* mutate data
* manage timing state
* expose slide internals

It only **interprets** and **renders**.

---

## 🧠 Mental Model

```
deck-v1 JSON
   ↓
slideBuilder()
   ↓
SlideManager
   ↓
renderSlide(index [, showAt])
```

Key idea:
**Slides are private. Rendering is the only contract.**

---

## ✅ What This Project Guarantees

* Deterministic rendering (same input → same HTML)
* Strict validation per slide type
* Zero mutation after build
* No access to internal slide objects
* Full test coverage across all slide types

---

## 🔑 Public API

### `slideBuilder(deckV1Json) → SlideManager`

Builds and validates a deck, returning a `SlideManager`.

```js
import { slideBuilder } from "taleem-slides";

const manager = slideBuilder(deckJson);
```

Throws immediately on:

* invalid deck structure
* unsupported slide types
* invalid slide data

---

### `SlideManager.renderSlide(index, showAt?) → string`

Renders **one slide** to HTML.

```js
const html = manager.renderSlide(0);
```

Notes:

* `index` is zero-based
* `showAt` is optional (for time-aware slides)
* return value is **plain HTML string**

---

### `SlideManager.renderAll() → string`

Renders **all slides** as a static HTML dump.

```js
const fullHtml = manager.renderAll();
```

---

## 🔒 Encapsulation Rules (By Design)

* `SlideManager` does **not** expose slides
* Slides are frozen internally
* Rendered output is a string (immutable by nature)

If you want to *inspect structure*, that belongs in **taleem-core**, not here.

---

## 🧪 Testing Philosophy

This project has **56 passing tests** covering:

* slideBuilder validation
* every slide type
* deterministic rendering
* error handling
* edge cases

Tests assert **behavior**, not snapshots.

This test suite is the **living specification**.

---

## 🎞️ Supported Slide Types

`taleem-slides` supports all canonical `deck-v1` slide types, including:

* titleSlide
* titleAndSubtitle
* titleAndPara
* bulletList
* twoColumnText
* imageSlide
* imageWithTitle
* imageWithCaption
* imageLeftBulletsRight
* imageRightBulletsLeft
* table
* statistic
* donutChart
* barChart
* bigNumber
* quoteSlide
* quoteWithImage
* cornerWordsSlide
* contactSlide
* fillImage
* eq
* svgPointer

All validation rules are enforced at build time.

---

## 🧊 Versioning & Stability

* This project targets **deck-v1 only**
* No breaking changes without `deck-v2`
* Rendering output is intentionally simple HTML
* Styling is the responsibility of the consuming app

---

## 📍 When to Use This

Use `taleem-slides` when you want:

* a **trustworthy rendering engine**
* clean separation from content generation
* confidence that slides behave exactly as specified

Do **not** use it for:

* authoring decks
* editing slides
* managing playback state

---

---

# 🧠 taleem-core (Contextual Overview)

> **Authoring & specification layer for deck-v1**

`taleem-core` is responsible for **creating valid decks**.
`taleem-slides` is responsible for **rendering them**.

They are intentionally separate.

---

## Responsibility Split

| Concern             | taleem-core | taleem-slides |
| ------------------- | ----------- | ------------- |
| Deck creation       | ✅           | ❌             |
| Schema validation   | ✅           | ❌             |
| EQ expansion        | ✅           | ❌             |
| Timing rules        | ✅           | ❌             |
| Rendering HTML      | ❌           | ✅             |
| Slide encapsulation | ❌           | ✅             |

---

## Core Artifacts

From the docs you uploaded:

* `api.md` → defines **deck-v1 contract**
* `eq.md` → defines **EQ slide expansion rules**
* `timings.md` → defines **global timing semantics**

`taleem-slides` **trusts** these documents.
It does not reinterpret them.

---

## Architectural Law (Important)

> **Authoring and rendering must never mix**

Once a deck enters `taleem-slides`, it is:

* assumed valid
* treated as immutable
* rendered deterministically

This is why the system scales cleanly.
