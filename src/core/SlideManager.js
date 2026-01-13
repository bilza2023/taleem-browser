/**
 * SlideManager
 * Stateless, index-based slide renderer.
 * No timing. No DOM. No state exposure.
 */
export class SlideManager {
    #slides;
  
    constructor(slides) {
      if (!Array.isArray(slides)) {
        throw new Error("SlideManager: slides must be an array");
      }
      this.#slides = slides;
    }
  
    renderSlide(index) {
      const slide = this.#slides[index];
  
      if (!slide) {
        throw new Error(`SlideManager: invalid slide index ${index}`);
      }
  
      if (typeof slide.render !== "function") {
        throw new Error(`SlideManager: slide ${index} has no render()`);
      }
  
      return slide.render();
    }
  
    renderAll() {
      return this.#slides.map(s => s.render()).join("\n");
    }
  
    getTotal() {
      return this.#slides.length;
    }
  }
  