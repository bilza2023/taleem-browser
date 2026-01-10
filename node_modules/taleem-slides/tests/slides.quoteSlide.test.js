import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("quoteSlide", () => {
  test("builds with quote", () => {
    const deck = {
      version: "deck-v1",
      deck: [{
        type: "quoteSlide",
        data: [{ name: "quote", content: "Hello" }]
      }]
    };

    const manager = slideBuilder(deck);
    const html = manager.renderSlide(0);

    expect(html).toContain("Hello");
  });

  test("throws without quote", () => {
    expect(() =>
      slideBuilder({
        version: "deck-v1",
        deck: [{ type: "quoteSlide", data: [] }]
      })
    ).toThrow();
  });
});
