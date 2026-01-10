export const EqSlide = {
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
              ${raw.data.map(d => `<div>${d.content}</div>`).join("")}
            </section>
          `;
        }
        
      });
    }
  };
  