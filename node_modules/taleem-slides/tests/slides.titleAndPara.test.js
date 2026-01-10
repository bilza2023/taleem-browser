import { describe, test, expect } from "vitest";
import { slideBuilder } from "../src/interpreter/slideBuilder.js";

describe("titleAndPara", () => {
  test("builds successfully", () => {
    const deck = {
      version: "deck-v1",
      deck: [{
        type: "titleAndPara",
        data: [
          { name: "title", content: "Heading" },
          { name: "para", content: "Paragraph" }
        ]
      }]
    };

    const manager = slideBuilder(deck);
    const html = manager.renderSlide(0);

    expect(html).toContain("Heading");
    expect(html).toContain("Paragraph");
  });

  test("throws on missing para", () => {
    expect(() =>
      slideBuilder({
        version: "deck-v1",
        deck: [{
          type: "titleAndPara",
          data: [{ name: "title", content: "X" }]
        }]
      })
    ).toThrow();
  });
});
