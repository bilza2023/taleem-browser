export const DonutChartSlide = {
    type: "donutChart",
  
    fromJSON(raw) {
      const segments = raw.data?.filter(d => d.name === "segment");
  
      if (!segments || segments.length === 0) {
        throw new Error("donutChart: requires at least one segment");
      }
  
      return Object.freeze({
        type: "donutChart",
        render() {
          return `
            <section class="slide donutChart">
              <ul>
                ${segments.map(
                  s => `<li>${s.content.label}: ${s.content.value}</li>`
                ).join("")}
              </ul>
            </section>
          `;
        }
        
      });
    }
  };
  