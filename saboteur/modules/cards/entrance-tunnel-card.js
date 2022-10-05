import TunnelCard, { TunnelPatterns } from "./tunnel-card.js";

export default class EntranceTunnelCard extends TunnelCard {
  constructor() {
    super(TunnelPatterns.doubleJunction);
  }
}