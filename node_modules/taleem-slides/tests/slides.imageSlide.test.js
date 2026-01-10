import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("imageSlide", () => {
  test("builds with image", () => {
    const deck = {
      version: "deck-v1",
      deck: [{
        type: "imageSlide",
        data: [{ name: "image", content: "/img.png" }]
      }]
    };

    const manager = slideBuilder(deck);
    const html = manager.renderSlide(0);

    expect(html).toContain("/img.png");
  });

  test("throws without image", () => {
    expect(() =>
      slideBuilder({
        version: "deck-v1",
        deck: [{ type: "imageSlide", data: [] }]
      })
    ).toThrow();
  });
});
