// src/slides/TableSlide.js
export const TableSlide = {
  type: "table",

  fromJSON(raw) {
    const rows = raw.data;

    if (!Array.isArray(rows) || rows.length === 0) {
      throw new Error("table: requires at least one row");
    }

    const [headers, ...body] = rows;

    return Object.freeze({
      type: "table",

      render() {
        return `
          <table class="slide table">
            <thead>
              <tr>
                ${headers.map(h => `<th>${h}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${body
                .map(
                  row =>
                    `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>
        `;
      }
    });
  }
};
