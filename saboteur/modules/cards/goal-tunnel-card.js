import TunnelCard, { TunnelPatterns } from "./tunnel-card.js";

export default class GoalTunnelCard extends TunnelCard {
  #isGold;

  getVisibleProperties(player) {
    return {
      ...super.getVisibleProperties(player),
      ...this.isVisibleTo(player) && {
        isGold: this.#isGold
      }
    }
  }

  constructor(isGold) {
    super(TunnelPatterns.doubleJunction);
    this.#isGold = isGold;
  }
}