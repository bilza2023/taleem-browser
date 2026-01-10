import { describe, test, expect } from "vitest";
import { ContactSlide } from "../src/slides/ContactSlide.js";

describe("contactSlide", () => {
  test("builds with contact items", () => {
    const raw = {
      type: "contactSlide",
      data: [
        { name: "line", content: "Email: test@example.com" },
        { name: "line", content: "Phone: 123456" }
      ]
    };

    const slide = ContactSlide.fromJSON(raw);

    expect(slide.type).toBe("contactSlide");

    const html = slide.render();

    expect(html).toContain("Email: test@example.com");
    expect(html).toContain("Phone: 123456");
  });

  test("throws if no content is provided", () => {
    const raw = {
      type: "contactSlide",
      data: []
    };

    expect(() => ContactSlide.fromJSON(raw)).toThrow(
      "contactSlide: content required"
    );
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "contactSlide",
      data: [
        { name: "line", content: "Address: Somewhere" }
      ]
    };

    const slide1 = ContactSlide.fromJSON(raw);
    const slide2 = ContactSlide.fromJSON(raw);

    expect(slide1.render()).toBe(slide2.render());
  });
});
