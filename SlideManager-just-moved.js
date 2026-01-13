
// src/slideManager/SlideManager.js

/**
 * SlideManager
 *
 * Stateless, time-agnostic slide-to-HTML orchestrator.
 * Slides are private and never exposed.
 */
export class SlideManager {
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
      return this.#slides
        .map((slide, index) => {
          if (typeof slide.render !== "function") {
            throw new Error(
              `SlideManager: slide at index ${index} has no render() method`
            );
          }
          return slide.render();
        })
        .join("\n");
    }
  }
  