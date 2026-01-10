
import { describe, test, expect } from "vitest";
import { ImageWithTitleSlide } from "../src/slides/ImageWithTitleSlide.js";

describe("imageWithTitle", () => {
  test("builds with image and title", () => {
    const raw = {
      type: "imageWithTitle",
      data: [
        { name: "image", content: "hero.png" },
        { name: "title", content: "Hello World" }
      ]
    };

    const slide = ImageWithTitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("hero.png");
    expect(html).toContain("Hello World");
  });

  test("throws if image or title missing", () => {
    expect(() =>
      ImageWithTitleSlide.fromJSON({
        type: "imageWithTitle",
        data: [{ name: "title", content: "Only title" }]
      })
    ).toThrow("imageWithTitle: image and title required");
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "imageWithTitle",
      data: [
        { name: "image", content: "a.png" },
        { name: "title", content: "B" }
      ]
    };

    const a = ImageWithTitleSlide.fromJSON(raw);
    const b = ImageWithTitleSlide.fromJSON(raw);

    expect(a.render()).toBe(b.render());
  });
});
