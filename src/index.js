
import { slideBuilder } from "taleem-slides";

/**
 * createTaleemBrowser
 * A pure slide document browser (index-based, no time).
 */
export function createTaleemBrowser({ mount, deck }) {
  if (!mount) {
    throw new Error("taleem-browser: mount is required");
  }
  if (!deck || !Array.isArray(deck.deck)) {
    throw new Error("taleem-browser: valid deck object required");
  }

  const root =
    typeof mount === "string" ? document.querySelector(mount) : mount;

  if (!root) {
    throw new Error("taleem-browser: mount element not found");
  }

  let currentIndex = 0;
  const total = deck.deck.length;

  // build static DOM once
  root.innerHTML = `
    <div class="taleem-browser-bg"></div>
    <div class="taleem-browser-slide"></div>
  `;

  const bgEl = root.querySelector(".taleem-browser-bg");
  const slideEl = root.querySelector(".taleem-browser-slide");

  // apply background from deck (browser-level responsibility)
  applyBackground(bgEl, deck.background);

  // build slide renderer
  const manager = slideBuilder(deck);

  function render() {
    slideEl.innerHTML = manager.renderSlide(currentIndex);
  }

  function next() {
    if (currentIndex < total - 1) {
      currentIndex++;
      render();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      render();
    }
  }

  function goTo(index) {
    if (index < 0 || index >= total) return;
    currentIndex = index;
    render();
  }

  function getIndex() {
    return currentIndex;
  }

  function getTotal() {
    return total;
  }

  function destroy() {
    root.innerHTML = "";
  }

  // initial render
  render();

  return {
    next,
    prev,
    goTo,
    getIndex,
    getTotal,
    render,
    destroy
  };
}

/* -----------------------------
   helpers (internal only)
------------------------------ */

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
