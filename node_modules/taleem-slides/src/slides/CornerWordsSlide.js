export const CornerWordsSlide = {
    type: "cornerWordsSlide",
  
    fromJSON(raw) {
      const words = raw.data?.filter(d => d.name === "word").map(d => d.content);
  
      if (!words || words.length === 0) {
        throw new Error("cornerWordsSlide: requires at least one word");
      }
  
      return Object.freeze({
        type: "cornerWordsSlide",
        render() {
          return `
            <section class="slide cornerWordsSlide">
              ${words.map(
                (w, i) =>
                  `<span class="corner-word corner-${i + 1}">${w}</span>`
              ).join("")}
            </section>
          `;
        }
        
      });
    }
  };
  