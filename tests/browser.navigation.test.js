// tests/browser.navigation.test.js

import { describe, it, expect, beforeEach } from "vitest";
import { createTaleemBrowser } from "../src/index.js";
import { deck } from "./_fixtures/deck.js";

describe("taleem-browser – navigation", () => {
  let slide;
  let browser;

  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;

    browser = createTaleemBrowser({
      mount: "#app",
      deck
    });

    slide = document.querySelector(".taleem-browser-slide");
  });

  it("starts on first slide", () => {
    expect(slide.innerHTML).toContain("A");
  });

  it("next() moves forward", () => {
    browser.next();
    expect(slide.innerHTML).toContain("B");
  });

  it("prev() moves backward", () => {
    browser.next();
    browser.prev();
    expect(slide.innerHTML).toContain("A");
  });

  it("goTo(index) jumps correctly", () => {
    browser.goTo(2);
    expect(slide.innerHTML).toContain("C");
  });

  it("goTo(out of bounds) does nothing", () => {
    browser.goTo(999);
    expect(slide.innerHTML).toContain("A");
  });
});
