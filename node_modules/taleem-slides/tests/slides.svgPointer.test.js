import { describe, test, expect } from "vitest";
import { SvgPointerSlide } from "../src/slides/SvgPointerSlide.js";

describe("svgPointer", () => {
  test("builds with svg content", () => {
    const raw = {
      type: "svgPointer",
      data: [{ name: "svg", content: "<svg></svg>" }]
    };

    const slide = SvgPointerSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("<svg>");
  });

  test("throws if svg missing", () => {
    expect(() =>
      SvgPointerSlide.fromJSON({
        type: "svgPointer",
        data: []
      })
    ).toThrow("svgPointer: svg required");
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "svgPointer",
      data: [{ name: "svg", content: "<svg></svg>" }]
    };

    const a = SvgPointerSlide.fromJSON(raw);
    const b = SvgPointerSlide.fromJSON(raw);

    expect(a.render()).toBe(b.render());
  });
});
