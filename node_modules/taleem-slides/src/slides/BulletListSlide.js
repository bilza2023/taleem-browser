export const BulletListSlide = {
    type: "bulletList",
  
    fromJSON(raw) {
      const bullets = raw.data?.filter(d => d.name === "bullet").map(d => d.content);
  
      if (!bullets || bullets.length === 0) {
        throw new Error("bulletList: requires at least one bullet");
      }
  
      return Object.freeze({
        type: "bulletList",
        render() {
          return `
            <section class="slide bulletList">
              <ul>
                ${bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            </section>
          `;
        }
        
      });
    }
  };
  