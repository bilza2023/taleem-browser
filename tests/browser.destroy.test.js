import { describe, it, expect, beforeEach } from "vitest";
import { createTaleemBrowser } from "../src/index.js";
import { deck } from "./_fixtures/deck.js";

describe("taleem-browser – destroy", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
  });

  it("clears DOM on destroy()", () => {
    const browser = createTaleemBrowser({
      mount: "#app",
      deck
    });

    browser.destroy();

    const app = document.getElementById("app");
    expect(app.innerHTML).toBe("");
  });
});


import { describe, it, expect, beforeEach } from "vitest";
import { createTaleemBrowser } from "../src/index.js";
import { deck } from "./_fixtures/deck.js";

describe("taleem-browser – navigation", () => {
  let browser;

  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`;
    browser = createTaleemBrowser({
      mount: "#app",
      deck
    });
  });

  it("starts at index 0", () => {
    expect(browser.getIndex()).toBe(0);
  });

  it("moves next()", () => {
    browser.next();
    expect(browser.getIndex()).toBe(1);
  });

  it("moves prev()", () => {
    browser.next();
    browser.prev();
    expect(browser.getIndex()).toBe(0);
  });

  it("goTo(index) works", () => {
    browser.goTo(2);
    expect(browser.getIndex()).toBe(2);
  });

  it("does not go out of bounds", () => {
    browser.goTo(999);
    expect(browser.getIndex()).toBe(0);
  });

  it("reports total slides", () => {
    expect(browser.getTotal()).toBe(3);
  });
});