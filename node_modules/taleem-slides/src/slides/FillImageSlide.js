export const FillImageSlide = {
    type: "fillImage",
  
    fromJSON(raw) {
      const image = raw.data?.find(d => d.name === "image")?.content;
  
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
  