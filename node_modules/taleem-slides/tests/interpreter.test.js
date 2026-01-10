import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("slideBuilder", () => {
  test("builds slide manager from a valid deck", () => {
    const deck = {
      version: "deck-v1",
      deck: [
        {
          type: "titleSlide",
          start: 0,
          end: 10,
          data: [{ name: "title", content: "Hello World" }]
        }
      ]
    };

    const manager = slideBuilder(deck);

    expect(manager).toBeDefined();
    expect(typeof manager.renderSlide).toBe("function");

    const html = manager.renderSlide(0);
    expect(typeof html).toBe("string");
    expect(html).toContain("Hello World");
  });

  test("throws on unknown slide type", () => {
    const deck = {
      version: "deck-v1",
      deck: [{ type: "unknownSlide", data: [] }]
    };

    expect(() => slideBuilder(deck)).toThrow(
      /unsupported slide type "unknownSlide"/
    );
  });

  test("throws on malformed slide data", () => {
    const deck = {
      version: "deck-v1",
      deck: [{ type: "titleSlide", data: [] }]
    };

    expect(() => slideBuilder(deck)).toThrow();
  });
});
