import GoalTunnelCard from "./cards/goal-tunnel-card.js";
import Player from "./card-pack-holders/player.js";
import Table from "./card-pack-holders/table.js";

export default class Game {
  #instructionsHandler;

  constructor(instructionsHandler) {
    console.log("new game eee");

    let table = new Table();

    let players = table.players;
    let player = players[0];

    // proof of concept
    console.log("before", player.handPackCards);
    player.moves.skip(player.handPackCards[0]);
    console.log("after", player.handPackCards);

    console.log(table);

    this.#instructionsHandler = instructionsHandler;

    // instructions test
    let instructions = {
      // this could also be a pseudo-gamestate thing, lets see how it goes
      render: {
        playArea: table.playArea,
        currentPlayer: undefined
      }
      /*callbacks: {
        function(){console.log("blablabla")}
      }*/
    };
    this.#instructionsHandler(instructions);
  }
}