module MatchAndWin {
    "use strict";

    class GameController {
        public static $inject = ["GameService"];
        public slots: ISlot[];

        private gameService: IGameService;

        constructor(gameService: IGameService) {
            this.gameService = gameService;
            this.gameService.onGameComplete(this.onGameComplete);

            this.reset();
        }

        reset(): void {
            this.gameService.reset();
            this.slots = this.gameService.slots;
        }

        onGameComplete(): void {
            alert("Game over");
        }
    }

    container.controller("GameController", GameController);
}