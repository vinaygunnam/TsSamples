/// <reference path="../../../scripts/common/utils.ts" />
var MatchAndWin;
(function (MatchAndWin) {
    "use strict";

    var numberOfTeams = 5;
    var numberOfSlots = 6;
    var matchCountFoReveal = 2;

    var GameService = (function () {
        function GameService() {
        }
        GameService.prototype.reset = function () {
            this.slots = [];

            var numberTeamsToBeSlotted = Math.floor(numberOfSlots / matchCountFoReveal);
            var teamsPickedForSlotting = [];
            for (var i = 0; i < numberTeamsToBeSlotted; i++) {
                var randomTeam = Utils.RandomNumbers.GetRandom(numberOfTeams, 1, teamsPickedForSlotting);
                teamsPickedForSlotting.push(randomTeam);
            }

            var teamOccurences = new Array(numberOfTeams);
            for (var i = 0; i < numberOfSlots; i++) {
                var occurences, randomTeam;
                do {
                    randomTeam = Utils.RandomNumbers.GetRandomWithin(teamsPickedForSlotting);
                    occurences = (teamOccurences[randomTeam - 1] || 0) + 1;
                } while(occurences > matchCountFoReveal);
                teamOccurences[randomTeam - 1] = occurences;
                this.slots.push(new MatchAndWin.Slot(randomTeam));
            }
        };

        GameService.prototype.checkForReveal = function () {
            var flippedSlots = [];
            angular.forEach(this.slots, function (slot) {
                if (slot && slot.flipped && !slot.revealed) {
                    flippedSlots.push(slot);
                }
            });

            var shouldReveal = true, matchedTeam = 0;
            if (flippedSlots.length === matchCountFoReveal) {
                angular.forEach(flippedSlots, function (slot) {
                    if (matchedTeam === 0) {
                        matchedTeam = slot.team;
                    } else if (matchedTeam !== slot.team) {
                        shouldReveal = false;
                    }
                });

                angular.forEach(flippedSlots, function (slot) {
                    if (shouldReveal === true) {
                        slot.revealed = true;
                    } else {
                        slot.close();
                    }
                });
            }

            this.isGameOver();

            return shouldReveal;
        };

        GameService.prototype.isGameOver = function () {
            var flag = true;
            angular.forEach(this.slots, function (slot) {
                flag = flag && slot.revealed;
            });

            if (flag) {
                if (this.callbackForGameComplete) {
                    this.callbackForGameComplete();
                }
            }

            return flag;
        };

        GameService.prototype.onGameComplete = function (callback) {
            this.callbackForGameComplete = callback;
        };
        return GameService;
    })();

    MatchAndWin.container.service("GameService", GameService);
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=GameService.js.map
