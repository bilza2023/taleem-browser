import { describe, test, expect } from "vitest";
import { ImageWithCaptionSlide } from "../src/slides/ImageWithCaptionSlide.js";

describe("imageWithCaption", () => {
  test("builds with image and caption", () => {
    const raw = {
      type: "imageWithCaption",
      data: [
        { name: "image", content: "photo.png" },
        { name: "caption", content: "A caption" }
      ]
    };

    const slide = ImageWithCaptionSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("photo.png");
    expect(html).toContain("A caption");
  });

  test("throws if image or caption missing", () => {
    expect(() =>
      ImageWithCaptionSlide.fromJSON({
        type: "imageWithCaption",
        data: [{ name: "image", content: "photo.png" }]
      })
    ).toThrow("imageWithCaption: image and caption required");
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "imageWithCaption",
      data: [
        { name: "image", content: "x.png" },
        { name: "caption", content: "Y" }
      ]
    };

    const a = ImageWithCaptionSlide.fromJSON(raw);
    const b = ImageWithCaptionSlide.fromJSON(raw);

    expect(a.render()).toBe(b.render());
  });
});
