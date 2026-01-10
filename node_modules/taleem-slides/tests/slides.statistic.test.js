import { describe, test, expect } from "vitest";
import { StatisticSlide } from "../src/slides/StatisticSlide.js";

describe("statistic", () => {
  test("builds with label and value", () => {
    const raw = {
      type: "statistic",
      data: [
        { name: "label", content: "Users" },
        { name: "value", content: 120 }
      ]
    };

    const slide = StatisticSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Users");
    expect(html).toContain("120");
  });

  test("throws if label or value missing", () => {
    expect(() =>
      StatisticSlide.fromJSON({
        type: "statistic",
        data: [{ name: "label", content: "Only label" }]
      })
    ).toThrow("statistic: requires label and value");
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "statistic",
      data: [
        { name: "label", content: "X" },
        { name: "value", content: 5 }
      ]
    };

    const a = StatisticSlide.fromJSON(raw);
    const b = StatisticSlide.fromJSON(raw);

    expect(a.render()).toBe(b.render());
  });
});
