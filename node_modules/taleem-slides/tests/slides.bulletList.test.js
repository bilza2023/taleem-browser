import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("bulletList", () => {
  test("builds with bullets", () => {
    const deck = {
      version: "deck-v1",
      deck: [{
        type: "bulletList",
        data: [
          { name: "bullet", content: "A" },
          { name: "bullet", content: "B" }
        ]
      }]
    };

    const manager = slideBuilder(deck);
    const html = manager.renderSlide(0);

    expect(html).toContain("A");
    expect(html).toContain("B");
  });

  test("throws with no bullets", () => {
    expect(() =>
      slideBuilder({
        version: "deck-v1",
        deck: [{ type: "bulletList", data: [] }]
      })
    ).toThrow();
  });
});
