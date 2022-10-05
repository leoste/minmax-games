let counter = 0;

export default class Card {
  #id = counter++;

  #seers = [];

  constructor() {
    
  }

  isVisibleTo(player) {
    return this.#seers.includes(player);
  }

  setVisibleTo(player) {
    this.#seers.push(player);
  }

  getVisibleProperties(player) {
    return {};
  }

  // only add properties and fields that are immediately required
  // to avoid being locked into inefficient patterns
}

/*class EffectCard extends Card {
  static effects = {
    jail: "jail",
    unjail: "unjail"
  }

  // put player to jail, free player from jail.
  #effect;

  constructor(effect) {
    super();

    this.#effect = effect;
  }
}*/