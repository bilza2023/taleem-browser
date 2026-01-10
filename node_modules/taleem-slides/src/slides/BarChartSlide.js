export const BarChartSlide = {
    type: "barChart",
  
    fromJSON(raw) {
      const bars = raw.data?.filter(d => d.name === "bar");
  
      if (!bars || bars.length === 0) {
        throw new Error("barChart: requires at least one bar");
      }
  
      // validate bar structure
      bars.forEach((b, i) => {
        if (
          typeof b.content !== "object" ||
          typeof b.content.label !== "string" ||
          typeof b.content.value !== "number"
        ) {
          throw new Error(`barChart: invalid bar at index ${i}`);
        }
      });
  
      return Object.freeze({
        type: "barChart",
  
        render() {
          return `
            <section class="slide barChart">
              <ul class="bars">
                ${bars.map(
                  b => `
                    <li class="bar">
                      <span class="bar-label">${b.content.label}</span>
                      <span class="bar-value">${b.content.value}</span>
                    </li>
                  `
                ).join("")}
              </ul>
            </section>
          `;
        }        
      });
    }
  };
  