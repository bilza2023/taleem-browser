import { describe, test, expect } from "vitest";
import { BarChartSlide } from "../src/slides/BarChartSlide.js";

describe("barChart", () => {
  test("builds successfully with valid bars", () => {
    const raw = {
      type: "barChart",
      data: [
        { name: "bar", content: { label: "A", value: 10 } },
        { name: "bar", content: { label: "B", value: 20 } }
      ]
    };

    const slide = BarChartSlide.fromJSON(raw);

    expect(slide.type).toBe("barChart");

    const html = slide.render();

    // semantic assertions (NOT snapshot)
    expect(html).toContain("A");
    expect(html).toContain("10");
    expect(html).toContain("B");
    expect(html).toContain("20");
  });

  test("throws if no bars are provided", () => {
    const raw = {
      type: "barChart",
      data: []
    };

    expect(() => BarChartSlide.fromJSON(raw)).toThrow(
      "barChart: requires at least one bar"
    );
  });

  test("throws on invalid bar structure", () => {
    const raw = {
      type: "barChart",
      data: [
        { name: "bar", content: { label: "A", value: "wrong" } }
      ]
    };

    expect(() => BarChartSlide.fromJSON(raw)).toThrow(
      "barChart: invalid bar"
    );
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "barChart",
      data: [
        { name: "bar", content: { label: "X", value: 5 } }
      ]
    };

    const slide1 = BarChartSlide.fromJSON(raw);
    const slide2 = BarChartSlide.fromJSON(raw);

    expect(slide1.render()).toBe(slide2.render());
  });
});
