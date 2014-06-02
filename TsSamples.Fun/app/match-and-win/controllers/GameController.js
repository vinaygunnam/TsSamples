var MatchAndWin;
(function (MatchAndWin) {
    "use strict";

    var GameController = (function () {
        function GameController() {
            this.numberOfTeams = 5;
            this.numberOfSlots = 6;
            this.start();
        }
        GameController.prototype.start = function () {
            this.slots = [];
            for (var i = 0; i < this.numberOfSlots; i++) {
                var slot = {
                    team: Math.floor(Math.random() * 100) % this.numberOfTeams + 1,
                    revealed: false,
                    flipped: false
                };
                this.slots.push(slot);
            }
        };
        return GameController;
    })();

    MatchAndWin.container.controller("GameController", GameController);
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=GameController.js.map
