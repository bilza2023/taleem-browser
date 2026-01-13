// src/browser/createBrowser.js

import { buildSlideManager } from "../core/slideBuilder.js";

/**
 * createTaleemBrowser
 * Index-based document browser (NO TIME)
 */
export function createTaleemBrowser({ mount, deck }) {
  if (!mount) throw new Error("browser: mount required");
  if (!deck || !Array.isArray(deck.deck))
    throw new Error("browser: valid deck required");

  const root =
    typeof mount === "string" ? document.querySelector(mount) : mount;

  if (!root) throw new Error("browser: mount not found");

  // static DOM shell
  root.innerHTML = `
    <div class="taleem-browser-bg"></div>
    <div class="taleem-browser-slide"></div>
  `;

  const bgEl = root.querySelector(".taleem-browser-bg");
  const slideEl = root.querySelector(".taleem-browser-slide");

  applyBackground(bgEl, deck.background);

  const manager = buildSlideManager(deck);
  const total = deck.deck.length;
  let index = 0;

  function render() {
    slideEl.innerHTML = manager.renderSlide(index);
  }

  function next() {
    if (index < total - 1) {
      index++;
      render();
    }
  }

  function prev() {
    if (index > 0) {
      index--;
      render();
    }
  }

  function goTo(i) {
    if (i < 0 || i >= total) return;
    index = i;
    render();
  }

  render();

  return {
    next,
    prev,
    goTo,
    render
  };
}

/* helpers */

function applyBackground(el, bg = {}) {
  el.style.position = "absolute";
  el.style.inset = "0";
  el.style.zIndex = "0";
  el.style.backgroundColor = bg.backgroundColor || "#000";
  el.style.backgroundImage = bg.backgroundImage
    ? `url(${bg.backgroundImage})`
    : "none";
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
  el.style.opacity =
    bg.backgroundImageOpacity !== undefined
      ? bg.backgroundImageOpacity
      : 1;
}
