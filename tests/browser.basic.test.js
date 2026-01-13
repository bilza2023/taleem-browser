import { describe, it, expect, beforeEach } from "vitest";
import { createTaleemBrowser } from "../src/index.js";
import { deck } from "./_fixtures/deck.js";

describe("taleem-browser – basic", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
  });

  it("renders first slide on init", () => {
    createTaleemBrowser({
      mount: "#app",
      deck
    });

    const slide = document.querySelector(".taleem-browser-slide");
    expect(slide).toBeTruthy();
    expect(slide.innerHTML).toContain("A");
  });
});
