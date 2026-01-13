
import { slideBuilder as build } from "taleem-slides";

/**
 * buildSlideManager
 * Returns a SlideManager from deck-v1 JSON
 */
export function buildSlideManager(deck) {
  return build(deck);
}
