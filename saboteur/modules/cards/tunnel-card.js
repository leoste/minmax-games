import Card from "./card.js";

export const TunnelPatterns = {
  sideways: [
    0, 0, 0,
    1, 1, 1,
    0, 0, 0,
  ],
  sidewaysJunction: [
    0, 1, 0,
    1, 1, 1,
    0, 0, 0,
  ],
  doubleJunction: [
    0, 1, 0,
    1, 1, 1,
    0, 1, 0,
  ],
  straightJunction: [
    0, 1, 0,
    1, 1, 0,
    0, 1, 0,
  ],
  straight: [
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
  ],
  curveA: [
    0, 1, 0,
    0, 1, 1,
    0, 0, 0,
  ],
  curveB: [
    0, 0, 0,
    0, 1, 1,
    0, 1, 0,
  ],
  sidewaysDeadendB: [
    0, 0, 0,
    0, 0, 1,
    0, 0, 0,
  ],
  sidewaysDeadendA: [
    0, 0, 0,
    1, 0, 1,
    0, 0, 0,
  ],
  sidewaysJunctionDeadend: [
    0, 1, 0,
    1, 0, 1,
    0, 0, 0,
  ],
  doubleJunctionDeadend: [
    0, 1, 0,
    1, 0, 1,
    0, 1, 0,
  ],
  straightJunctionDeadend: [
    0, 1, 0,
    1, 0, 0,
    0, 1, 0,
  ],
  straightDeadendA: [
    0, 1, 0,
    0, 0, 0,
    0, 1, 0,
  ],
  curveADeadend: [
    0, 1, 0,
    0, 0, 1,
    0, 0, 0,
  ],
  curveBDeadend: [
    0, 0, 0,
    0, 0, 1,
    0, 1, 0,
  ],
  straightDeadendB: [
    0, 0, 0,
    0, 0, 0,
    0, 1, 0,
  ]
}

export default class TunnelCard extends Card {
  #pattern;

  getVisibleProperties(player) {
    return {
      ...super.getVisibleProperties(player),
      ...this.isVisibleTo(player) && {
        pattern: this.#pattern
      }
    }
  }

  constructor(pattern) {
    super();

    this.#pattern = pattern;
  }

  // some tunnel pieces are asymmetric. rotates 180 degrees
  rotate() {
    this.#pattern.reverse();
  }
}