export const ImageRightBulletsLeftSlide = {
    type: "imageRightBulletsLeft",
  
    fromJSON(raw) {
      const image = raw.data?.find(d => d.name === "image")?.content;
      const bullets = raw.data?.filter(d => d.name === "bullet").map(d => d.content);
  
      if (!image || !bullets?.length) {
        throw new Error("imageRightBulletsLeft: image and bullets required");
      }
  
      return Object.freeze({
        type: "imageRightBulletsLeft",
        render() {
          return `
            <section class="slide imageRightBulletsLeft">
              <ul>
                ${bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
              <img src="${image}" alt="" />
            </section>
          `;
        }
        
      });
    }
  };
  