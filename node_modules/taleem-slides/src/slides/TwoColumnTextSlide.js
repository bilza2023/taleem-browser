
export const TwoColumnTextSlide = {
    type: "twoColumnText",
  
    fromJSON(raw) {
      const left = raw.data?.filter(d => d.name === "left").map(d => d.content);
      const right = raw.data?.filter(d => d.name === "right").map(d => d.content);
  
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
  