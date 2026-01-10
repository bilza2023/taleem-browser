// src/slides/TitleSlide.js

/**
 * TitleSlide
 * Private implementation – not exported publicly
 */
export const TitleSlide = {
    type: "titleSlide",
  
    /**
     * Build a TitleSlide from raw deck JSON
     */
    fromJSON(rawSlide, index) {
      if (!Array.isArray(rawSlide.data)) {
        throw new Error(`TitleSlide: data must be an array`);
      }
  
      const titleItem = rawSlide.data.find(d => d.name === "title");
  
      if (!titleItem || typeof titleItem.content !== "string") {
        throw new Error(`TitleSlide: missing or invalid title content`);
      }
  
      const title = titleItem.content;
  
      // immutable slide object
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
  