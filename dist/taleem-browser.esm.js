// node_modules/taleem-slides/src/slides/TitleSlide.js
var TitleSlide = {
  type: "titleSlide",
  /**
   * Build a TitleSlide from raw deck JSON
   */
  fromJSON(rawSlide, index) {
    if (!Array.isArray(rawSlide.data)) {
      throw new Error(`TitleSlide: data must be an array`);
    }
    const titleItem = rawSlide.data.find((d) => d.name === "title");
    if (!titleItem || typeof titleItem.content !== "string") {
      throw new Error(`TitleSlide: missing or invalid title content`);
    }
    const title = titleItem.content;
    return Object.freeze({
      type: "titleSlide",
      render() {
        return `
            <div class="slide titleSlide">
              <h1>${title}</h1>
            </div>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TitleAndSubtitleSlide.js
var TitleAndSubtitleSlide = {
  type: "titleAndSubtitle",
  fromJSON(raw) {
    const title = raw.data?.find((d) => d.name === "title")?.content;
    const subtitle = raw.data?.find((d) => d.name === "subtitle")?.content;
    if (!title || !subtitle) {
      throw new Error("titleAndSubtitle: requires title and subtitle");
    }
    return Object.freeze({
      type: "titleAndSubtitle",
      render() {
        return `
            <section class="slide titleAndSubtitle">
              <h1>${title}</h1>
              <h2>${subtitle}</h2>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TitleAndParaSlide.js
var TitleAndParaSlide = {
  type: "titleAndPara",
  fromJSON(raw) {
    const title = raw.data?.find((d) => d.name === "title")?.content;
    const para = raw.data?.find((d) => d.name === "para")?.content;
    if (!title || !para) {
      throw new Error("titleAndPara: requires title and para");
    }
    return Object.freeze({
      type: "titleAndPara",
      render() {
        return `
            <section class="slide titleAndPara">
              <h1>${title}</h1>
              <p>${para}</p>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/BulletListSlide.js
var BulletListSlide = {
  type: "bulletList",
  fromJSON(raw) {
    const bullets = raw.data?.filter((d) => d.name === "bullet").map((d) => d.content);
    if (!bullets || bullets.length === 0) {
      throw new Error("bulletList: requires at least one bullet");
    }
    return Object.freeze({
      type: "bulletList",
      render() {
        return `
            <section class="slide bulletList">
              <ul>
                ${bullets.map((b) => `<li>${b}</li>`).join("")}
              </ul>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TwoColumnTextSlide.js
var TwoColumnTextSlide = {
  type: "twoColumnText",
  fromJSON(raw) {
    const left = raw.data?.filter((d) => d.name === "left").map((d) => d.content);
    const right = raw.data?.filter((d) => d.name === "right").map((d) => d.content);
    if (!left?.length || !right?.length) {
      throw new Error("twoColumnText: requires left and right columns");
    }
    return Object.freeze({
      type: "twoColumnText",
      render() {
        return `
            <section class="slide twoColumnText">
              <div class="col left">${left.join("<br/>")}</div>
              <div class="col right">${right.join("<br/>")}</div>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageSlide.js
var ImageSlide = {
  type: "imageSlide",
  fromJSON(raw) {
    const src = raw.data?.find((d) => d.name === "image")?.content;
    if (!src) throw new Error("imageSlide: image required");
    return Object.freeze({
      type: "imageSlide",
      render() {
        return `
            <section class="slide imageSlide">
              <img src="${src}" alt="" />
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/FillImageSlide.js
var FillImageSlide = {
  type: "fillImage",
  fromJSON(raw) {
    const image = raw.data?.find((d) => d.name === "image")?.content;
    if (!image) {
      throw new Error("fillImage: image required");
    }
    return Object.freeze({
      type: "fillImage",
      render() {
        return `
            <section class="slide fillImage">
              <img src="${image}" alt="" />
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageWithTitleSlide.js
var ImageWithTitleSlide = {
  type: "imageWithTitle",
  fromJSON(raw) {
    const src = raw.data?.find((d) => d.name === "image")?.content;
    const title = raw.data?.find((d) => d.name === "title")?.content;
    if (!src || !title) {
      throw new Error("imageWithTitle: image and title required");
    }
    return Object.freeze({
      type: "imageWithTitle",
      render() {
        return `
            <section class="slide imageWithTitle">
              <img src="${src}" alt="" />
              <h1>${title}</h1>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageWithCaptionSlide.js
var ImageWithCaptionSlide = {
  type: "imageWithCaption",
  fromJSON(raw) {
    const src = raw.data?.find((d) => d.name === "image")?.content;
    const caption = raw.data?.find((d) => d.name === "caption")?.content;
    if (!src || !caption) {
      throw new Error("imageWithCaption: image and caption required");
    }
    return Object.freeze({
      type: "imageWithCaption",
      render() {
        return `
            <figure class="slide imageWithCaption">
              <img src="${src}" alt="" />
              <figcaption>${caption}</figcaption>
            </figure>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageLeftBulletsRightSlide.js
var ImageLeftBulletsRightSlide = {
  type: "imageLeftBulletsRight",
  fromJSON(raw) {
    const image = raw.data?.find((d) => d.name === "image")?.content;
    const bullets = raw.data?.filter((d) => d.name === "bullet").map((d) => d.content);
    if (!image || !bullets?.length) {
      throw new Error("imageLeftBulletsRight: image and bullets required");
    }
    return Object.freeze({
      type: "imageLeftBulletsRight",
      render() {
        return `
            <section class="slide imageLeftBulletsRight">
              <img src="${image}" alt="" />
              <ul>
                ${bullets.map((b) => `<li>${b}</li>`).join("")}
              </ul>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageRightBulletsLeftSlide.js
var ImageRightBulletsLeftSlide = {
  type: "imageRightBulletsLeft",
  fromJSON(raw) {
    const image = raw.data?.find((d) => d.name === "image")?.content;
    const bullets = raw.data?.filter((d) => d.name === "bullet").map((d) => d.content);
    if (!image || !bullets?.length) {
      throw new Error("imageRightBulletsLeft: image and bullets required");
    }
    return Object.freeze({
      type: "imageRightBulletsLeft",
      render() {
        return `
            <section class="slide imageRightBulletsLeft">
              <ul>
                ${bullets.map((b) => `<li>${b}</li>`).join("")}
              </ul>
              <img src="${image}" alt="" />
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TableSlide.js
var TableSlide = {
  type: "table",
  fromJSON(raw) {
    const rows = raw.data?.filter((d) => d.name === "row").map((d) => d.content);
    if (!rows || rows.length === 0) {
      throw new Error("table: requires at least one row");
    }
    return Object.freeze({
      type: "table",
      render() {
        return `
            <table class="slide table">
              ${rows.map(
          (row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
        ).join("")}
            </table>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/StatisticSlide.js
var StatisticSlide = {
  type: "statistic",
  fromJSON(raw) {
    const label = raw.data?.find((d) => d.name === "label")?.content;
    const value = raw.data?.find((d) => d.name === "value")?.content;
    if (!label || value === void 0) {
      throw new Error("statistic: requires label and value");
    }
    return Object.freeze({
      type: "statistic",
      render() {
        return `
            <section class="slide statistic">
              <div class="stat-value">${value}</div>
              <div class="stat-label">${label}</div>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/BigNumberSlide.js
var BigNumberSlide = {
  type: "bigNumber",
  fromJSON(raw) {
    const value = raw.data?.find((d) => d.name === "number")?.content;
    const label = raw.data?.find((d) => d.name === "label")?.content;
    if (!value) throw new Error("bigNumber: number required");
    return Object.freeze({
      type: "bigNumber",
      render() {
        return `
            <section class="slide bigNumber">
              <div class="number">${value}</div>
              ${label ? `<div class="label">${label}</div>` : ""}
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/BarChartSlide.js
var BarChartSlide = {
  type: "barChart",
  fromJSON(raw) {
    const bars = raw.data?.filter((d) => d.name === "bar");
    if (!bars || bars.length === 0) {
      throw new Error("barChart: requires at least one bar");
    }
    bars.forEach((b, i) => {
      if (typeof b.content !== "object" || typeof b.content.label !== "string" || typeof b.content.value !== "number") {
        throw new Error(`barChart: invalid bar at index ${i}`);
      }
    });
    return Object.freeze({
      type: "barChart",
      render() {
        return `
            <section class="slide barChart">
              <ul class="bars">
                ${bars.map(
          (b) => `
                    <li class="bar">
                      <span class="bar-label">${b.content.label}</span>
                      <span class="bar-value">${b.content.value}</span>
                    </li>
                  `
        ).join("")}
              </ul>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/DonutChartSlide.js
var DonutChartSlide = {
  type: "donutChart",
  fromJSON(raw) {
    const segments = raw.data?.filter((d) => d.name === "segment");
    if (!segments || segments.length === 0) {
      throw new Error("donutChart: requires at least one segment");
    }
    return Object.freeze({
      type: "donutChart",
      render() {
        return `
            <section class="slide donutChart">
              <ul>
                ${segments.map(
          (s) => `<li>${s.content.label}: ${s.content.value}</li>`
        ).join("")}
              </ul>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/QuoteSlide.js
var QuoteSlide = {
  type: "quoteSlide",
  fromJSON(raw) {
    const text = raw.data?.find((d) => d.name === "quote")?.content;
    const author = raw.data?.find((d) => d.name === "author")?.content;
    if (!text) throw new Error("quoteSlide: quote required");
    return Object.freeze({
      type: "quoteSlide",
      render() {
        return `
            <blockquote class="slide quoteSlide">
              <p>${text}</p>
              ${author ? `<footer>${author}</footer>` : ""}
            </blockquote>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/QuoteWithImageSlide.js
var QuoteWithImageSlide = {
  type: "quoteWithImage",
  fromJSON(raw) {
    const quote = raw.data?.find((d) => d.name === "quote")?.content;
    const image = raw.data?.find((d) => d.name === "image")?.content;
    const author = raw.data?.find((d) => d.name === "author")?.content;
    if (!quote || !image) {
      throw new Error("quoteWithImage: quote and image required");
    }
    return Object.freeze({
      type: "quoteWithImage",
      render() {
        return `
            <section class="slide quoteWithImage">
              <img src="${image}" alt="" />
              <blockquote>
                <p>${quote}</p>
                ${author ? `<footer>${author}</footer>` : ""}
              </blockquote>
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/CornerWordsSlide.js
var CornerWordsSlide = {
  type: "cornerWordsSlide",
  fromJSON(raw) {
    const words = raw.data?.filter((d) => d.name === "word").map((d) => d.content);
    if (!words || words.length === 0) {
      throw new Error("cornerWordsSlide: requires at least one word");
    }
    return Object.freeze({
      type: "cornerWordsSlide",
      render() {
        return `
            <section class="slide cornerWordsSlide">
              ${words.map(
          (w, i) => `<span class="corner-word corner-${i + 1}">${w}</span>`
        ).join("")}
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ContactSlide.js
var ContactSlide = {
  type: "contactSlide",
  fromJSON(raw) {
    const items = raw.data?.map((d) => `<div>${d.content}</div>`);
    if (!items?.length) throw new Error("contactSlide: content required");
    return Object.freeze({
      type: "contactSlide",
      render() {
        return `
            <section class="slide contactSlide">
              ${items.join("")}
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/EqSlide.js
var EqSlide = {
  type: "eq",
  fromJSON(raw) {
    if (!Array.isArray(raw.data)) {
      throw new Error("eq: data must be array");
    }
    return Object.freeze({
      type: "eq",
      render() {
        return `
            <section class="slide eq">
              ${raw.data.map((d) => `<div>${d.content}</div>`).join("")}
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/SvgPointerSlide.js
var SvgPointerSlide = {
  type: "svgPointer",
  fromJSON(raw) {
    const svg = raw.data?.find((d) => d.name === "svg")?.content;
    if (!svg) throw new Error("svgPointer: svg required");
    return Object.freeze({
      type: "svgPointer",
      render() {
        return `
            <section class="slide svgPointer">
              ${svg}
            </section>
          `;
      }
    });
  }
};

// node_modules/taleem-slides/src/registry.js
var registry = {
  titleSlide: TitleSlide,
  titleAndSubtitle: TitleAndSubtitleSlide,
  titleAndPara: TitleAndParaSlide,
  bulletList: BulletListSlide,
  twoColumnText: TwoColumnTextSlide,
  imageSlide: ImageSlide,
  fillImage: FillImageSlide,
  imageWithTitle: ImageWithTitleSlide,
  imageWithCaption: ImageWithCaptionSlide,
  imageLeftBulletsRight: ImageLeftBulletsRightSlide,
  imageRightBulletsLeft: ImageRightBulletsLeftSlide,
  table: TableSlide,
  statistic: StatisticSlide,
  bigNumber: BigNumberSlide,
  barChart: BarChartSlide,
  donutChart: DonutChartSlide,
  quoteSlide: QuoteSlide,
  quoteWithImage: QuoteWithImageSlide,
  cornerWordsSlide: CornerWordsSlide,
  contactSlide: ContactSlide,
  eq: EqSlide,
  svgPointer: SvgPointerSlide
};

// node_modules/taleem-slides/src/slideManager/SlideManager.js
var SlideManager = class {
  #slides;
  constructor(slides) {
    if (!Array.isArray(slides)) {
      throw new Error("SlideManager: slides must be an array");
    }
    this.#slides = slides;
  }
  /**
   * Render a single slide by index.
   *
   * @param {number} index
   * @param {number} [showAt]
   * @returns {string} HTML
   */
  renderSlide(index, showAt) {
    const slide = this.#slides[index];
    if (!slide) {
      throw new Error(`SlideManager: invalid slide index ${index}`);
    }
    if (typeof slide.render !== "function") {
      throw new Error(
        `SlideManager: slide at index ${index} has no render() method`
      );
    }
    return slide.render(showAt);
  }
  /**
   * Render all slides as a static HTML dump.
   *
   * @returns {string} HTML
   */
  renderAll() {
    return this.#slides.map((slide, index) => {
      if (typeof slide.render !== "function") {
        throw new Error(
          `SlideManager: slide at index ${index} has no render() method`
        );
      }
      return slide.render();
    }).join("\n");
  }
};

// node_modules/taleem-slides/src/interpreter/slideBuilder.js
function slideBuilder(deckV1Json) {
  if (!deckV1Json || typeof deckV1Json !== "object") {
    throw new Error("slideBuilder: input must be an object");
  }
  if (deckV1Json.version !== "deck-v1") {
    throw new Error(
      `slideBuilder: unsupported deck version "${deckV1Json.version}"`
    );
  }
  if (!Array.isArray(deckV1Json.deck)) {
    throw new Error("slideBuilder: deck must be an array");
  }
  const slides = deckV1Json.deck.map((rawSlide, index) => {
    if (!rawSlide || typeof rawSlide !== "object") {
      throw new Error(`slideBuilder: slide ${index} is not an object`);
    }
    const { type } = rawSlide;
    if (!type || typeof type !== "string") {
      throw new Error(`slideBuilder: slide ${index} has no valid type`);
    }
    const builder = registry[type];
    if (!builder) {
      throw new Error(
        `slideBuilder: unsupported slide type "${type}" at index ${index}`
      );
    }
    try {
      return builder.fromJSON(rawSlide, index);
    } catch (err) {
      throw new Error(
        `slideBuilder: failed to build slide "${type}" at index ${index}
${err.message}`
      );
    }
  });
  slides.forEach(Object.freeze);
  Object.freeze(slides);
  return new SlideManager(slides);
}

// src/release.js
var TALEEM_BROWSER_VERSION = "0.1.3";
var TALEEM_CSS_URL = "https://github.com/bilza2023/taleem-browser/releases/download/v0.1.3/taleem.css";

// src/index.js
function createTaleemBrowser({ mount, deck }) {
  if (!mount) {
    throw new Error("taleem-browser: mount is required");
  }
  if (!deck || !Array.isArray(deck.deck)) {
    throw new Error("taleem-browser: valid deck object required");
  }
  const root = typeof mount === "string" ? document.querySelector(mount) : mount;
  if (!root) {
    throw new Error("taleem-browser: mount element not found");
  }
  let currentIndex = 0;
  const total = deck.deck.length;
  root.innerHTML = `
    <div class="taleem-browser-bg"></div>
    <div class="taleem-browser-slide"></div>
  `;
  const bgEl = root.querySelector(".taleem-browser-bg");
  const slideEl = root.querySelector(".taleem-browser-slide");
  applyBackground(bgEl, deck.background);
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
function applyBackground(el, bg = {}) {
  el.style.position = "absolute";
  el.style.inset = "0";
  el.style.zIndex = "0";
  el.style.backgroundColor = bg.backgroundColor || "#000";
  el.style.backgroundImage = bg.backgroundImage ? `url(${bg.backgroundImage})` : "none";
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
  el.style.opacity = bg.backgroundImageOpacity !== void 0 ? bg.backgroundImageOpacity : 1;
}
export {
  TALEEM_BROWSER_VERSION,
  TALEEM_CSS_URL,
  createTaleemBrowser
};
