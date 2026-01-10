import { describe, test, expect } from "vitest";
import { QuoteWithImageSlide } from "../src/slides/QuoteWithImageSlide.js";

describe("quoteWithImage", () => {
  test("builds with quote and image", () => {
    const raw = {
      type: "quoteWithImage",
      data: [
        { name: "quote", content: "Stay hungry" },
        { name: "image", content: "img.png" },
        { name: "author", content: "Steve Jobs" }
      ]
    };

    const slide = QuoteWithImageSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Stay hungry");
    expect(html).toContain("img.png");
    expect(html).toContain("Steve Jobs");
  });

  test("throws if quote or image missing", () => {
    expect(() =>
      QuoteWithImageSlide.fromJSON({
        type: "quoteWithImage",
        data: [{ name: "quote", content: "Only quote" }]
      })
    ).toThrow("quoteWithImage: quote and image required");
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "quoteWithImage",
      data: [
        { name: "quote", content: "A" },
        { name: "image", content: "b.png" }
      ]
    };

    const a = QuoteWithImageSlide.fromJSON(raw);
    const b = QuoteWithImageSlide.fromJSON(raw);

    expect(a.render()).toBe(b.render());
  });
});
