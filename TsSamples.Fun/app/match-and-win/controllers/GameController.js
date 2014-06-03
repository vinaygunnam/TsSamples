var MatchAndWin;
(function (MatchAndWin) {
    "use strict";

    var GameController = (function () {
        function GameController(gameService) {
            this.gameService = gameService;
            this.gameService.onGameComplete(this.onGameComplete);

            this.reset();
        }
        GameController.prototype.reset = function () {
            this.gameService.reset();
            this.slots = this.gameService.slots;
        };

        GameController.prototype.onGameComplete = function () {
            alert("Game over");
        };
        GameController.$inject = ["GameService"];
        return GameController;
    })();

    MatchAndWin.container.controller("GameController", GameController);
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=GameController.js.map
