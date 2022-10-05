export default class CardPack {
  #cards = [];

  get cards() {
    return this.#cards;
  }

  placeTopCard(card) {
    this.#cards.push(card);
  }

  takeTopCard() {
    return this.#cards.shift();
  }

  takeCard(card) {
    let discardedCard = this.#cards.find(a => a === card);

    if (discardedCard) {      
      this.#cards = this.#cards.filter(a => a !== discardedCard);
      return discardedCard;
    }
  }

  shuffle() {    
    for (let i = this.#cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
    }
  }

  constructor() {
    
  }
}