import CardPackHolder from "./card-pack-holder.js";
import CardPack from "../card-packs/card-pack.js";
import Rules from "../rules.js";

export default class Player extends CardPackHolder {
  #handPack = new CardPack();

  // TODO: infrontPack

  #table;

  #draw() {
    let card = this.#table.draw();
    card.setVisibleTo(this);
    this.#handPack.placeTopCard(card);
  }

  #discard(card) {
    let discardedCard = this.#handPack.takeCard(card);
    
    if (discardedCard) {
      this.#table.discard(discardedCard);
      return discardedCard;
    }
  }

  moves = {
    skip: (card) => {
      let discardedCard = this.#discard(card);
      if (discardedCard) {
        this.#draw();
      }
    }
  }

  get handPackCards() {
    return this.#handPack.cards;
  }

  constructor(table) {
    /*let packs = {
      hand: new CardPack(),
      inFront: new CardPack()
    }

    super(packs);*/

    super();

    this.#table = table;

    for (let i = 0; i < Rules.player.handCardCount; i++) {
      this.#draw();
    }
  }
}