import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("TitleSlide", () => {
  test("render() is deterministic", () => {
    const deck = {
      version: "deck-v1",
      deck: [
        {
          type: "titleSlide",
          data: [{ name: "title", content: "Deterministic" }]
        }
      ]
    };

    const manager = slideBuilder(deck);

    const html1 = manager.renderSlide(0);
    const html2 = manager.renderSlide(0);

    expect(html1).toBe(html2);
  });

  test("rendered output is immutable (string)", () => {
    const deck = {
      version: "deck-v1",
      deck: [
        {
          type: "titleSlide",
          data: [{ name: "title", content: "Frozen" }]
        }
      ]
    };

    const manager = slideBuilder(deck);
    const html = manager.renderSlide(0);

    expect(() => {
      html.type = "hack";
    }).toThrow();
  });
});
