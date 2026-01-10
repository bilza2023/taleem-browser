import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("fillImage", () => {
  test("builds with image", () => {
    const deck = {
      version: "deck-v1",
      deck: [{
        type: "fillImage",
        data: [{ name: "image", content: "/bg.png" }]
      }]
    };

    const manager = slideBuilder(deck);
    const html = manager.renderSlide(0);

    expect(html).toContain("/bg.png");
  });

  test("throws without image", () => {
    expect(() =>
      slideBuilder({
        version: "deck-v1",
        deck: [{ type: "fillImage", data: [] }]
      })
    ).toThrow();
  });
});
