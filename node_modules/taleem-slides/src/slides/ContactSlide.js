export const ContactSlide = {
    type: "contactSlide",
  
    fromJSON(raw) {
      const items = raw.data?.map(d => `<div>${d.content}</div>`);
  
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
  