import { describe, test, expect } from "vitest";
import { ImageRightBulletsLeftSlide } from "../src/slides/ImageRightBulletsLeftSlide.js";

describe("imageRightBulletsLeft", () => {
  test("builds with image and bullets", () => {
    const raw = {
      type: "imageRightBulletsLeft",
      data: [
        { name: "image", content: "img.png" },
        { name: "bullet", content: "A" }
      ]
    };

    const slide = ImageRightBulletsLeftSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("img.png");
    expect(html).toContain("A");
  });

  test("throws if image or bullets missing", () => {
    expect(() =>
      ImageRightBulletsLeftSlide.fromJSON({ type: "imageRightBulletsLeft", data: [] })
    ).toThrow("imageRightBulletsLeft: image and bullets required");
  });
});
