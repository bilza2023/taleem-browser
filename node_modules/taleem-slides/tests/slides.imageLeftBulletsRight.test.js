import { describe, test, expect } from "vitest";
import { ImageLeftBulletsRightSlide } from "../src/slides/ImageLeftBulletsRightSlide.js";

describe("imageLeftBulletsRight", () => {
  test("builds with image and bullets", () => {
    const raw = {
      type: "imageLeftBulletsRight",
      data: [
        { name: "image", content: "img.png" },
        { name: "bullet", content: "One" },
        { name: "bullet", content: "Two" }
      ]
    };

    const slide = ImageLeftBulletsRightSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("img.png");
    expect(html).toContain("One");
    expect(html).toContain("Two");
  });

  test("throws if image or bullets missing", () => {
    expect(() =>
      ImageLeftBulletsRightSlide.fromJSON({ type: "imageLeftBulletsRight", data: [] })
    ).toThrow("imageLeftBulletsRight: image and bullets required");
  });
});
