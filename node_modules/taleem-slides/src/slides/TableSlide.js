export const TableSlide = {
    type: "table",
  
    fromJSON(raw) {
      const rows = raw.data?.filter(d => d.name === "row").map(d => d.content);
  
      if (!rows || rows.length === 0) {
        throw new Error("table: requires at least one row");
      }
  
      return Object.freeze({
        type: "table",
        render() {
          return `
            <table class="slide table">
              ${rows.map(
                row =>
                  `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
              ).join("")}
            </table>
          `;
        }
        
      });
    }
  };
  