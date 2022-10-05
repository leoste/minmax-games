import CardPack from "../card-packs/card-pack.js";
import CardPackHolder from "./card-pack-holder.js";
import { TunnelPatterns } from "../cards/tunnel-card.js";
import PlayableTunnelCard from "../cards/playable-tunnel-card.js";
import PlaceholderTunnelCard from "../cards/placeholder-tunnel-card.js";
import EntranceTunnelCard from "../cards/entrance-tunnel-card.js";
import Rules from "../rules.js";
import GoalTunnelCard from "../cards/goal-tunnel-card.js";
import Player from "./player.js";

export default class Table extends CardPackHolder {
  #drawPile = new CardPack();
  #discardPile = new CardPack();
  #playArea = new CardPack();
  #players = [];

  #fillPlayArea(count) {
    for (let i = 0; i < count; i++) {
      this.#playArea.placeTopCard(new PlaceholderTunnelCard());
    }
  }

  get playArea() {
    return this.#playArea;
  }

  get players() {
    return this.#players;
  }

  draw() {
    return this.#drawPile.takeTopCard();
  }
  
  discard(card) {
    this.#discardPile.placeTopCard(card);
  }

  constructor() {
    super();

    [
      [4, TunnelPatterns.sideways],
      [5, TunnelPatterns.sidewaysJunction],
      [5, TunnelPatterns.doubleJunction],
      [5, TunnelPatterns.straightJunction],
      [3, TunnelPatterns.straight],
      [4, TunnelPatterns.curveA],
      [5, TunnelPatterns.curveB],
      [1, TunnelPatterns.sidewaysDeadendA],
      [1, TunnelPatterns.sidewaysDeadendB],
      [1, TunnelPatterns.sidewaysJunctionDeadend],
      [1, TunnelPatterns.doubleJunctionDeadend],
      [1, TunnelPatterns.straightJunctionDeadend],
      [1, TunnelPatterns.straightDeadendB],
      [1, TunnelPatterns.curveADeadend],
      [1, TunnelPatterns.curveBDeadend],
      [1, TunnelPatterns.straightDeadendA],
    ].forEach(definition => {
      for (let i = 0; i < definition[0]; i++) {
        this.#drawPile.placeTopCard(new PlayableTunnelCard(definition[1]));
      }
    });

    // TODO: add effect cards to drawpile

    this.#drawPile.shuffle();

    let playAreaSmallHalf = Math.floor(Rules.table.playArea.width / 2);
    let playAreaBigHalf = Rules.table.playArea.width - playAreaSmallHalf;
    let goldIndex = Math.floor(Math.random() * (playAreaBigHalf * 2));
    this.#fillPlayArea(playAreaSmallHalf);
    this.#playArea.placeTopCard(new EntranceTunnelCard());
    this.#fillPlayArea(Rules.table.playArea.width - playAreaSmallHalf - 1);
    this.#fillPlayArea(Rules.table.playArea.width * (Rules.table.playArea.height - 2));    
    for (let i = 0; i < Rules.table.playArea.width; i++) {
      this.#playArea.placeTopCard(
        i % 2 === 0
        ? new GoalTunnelCard(i === goldIndex)
        : new PlaceholderTunnelCard()
      );
    }

    for (let i = 0; i < Rules.table.playerCount; i++) {
      this.#players.push(new Player(this));
    }

    /*let packs = { drawPile, discardPile, playArea }

    super(packs);*/
  }
}