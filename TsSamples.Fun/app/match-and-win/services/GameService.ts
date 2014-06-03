/// <reference path="../../../scripts/common/utils.ts" />
module MatchAndWin {
    "use strict";

    export interface IGameService {
        reset(): void;
        checkForReveal(): boolean;
        slots: ISlot[];
        onGameComplete(callback: () => void): void;
    }

    var numberOfTeams: number = 5;
    var numberOfSlots: number = 6;
    var matchCountFoReveal: number = 2;

    class GameService implements IGameService {
        public slots: ISlot[];
        private callbackForGameComplete: () => void;

        reset(): void {
            this.slots = [];

            var numberTeamsToBeSlotted: number = Math.floor(numberOfSlots / matchCountFoReveal);
            var teamsPickedForSlotting: number[] = [];
            for (var i: number = 0; i < numberTeamsToBeSlotted; i++) {
                var randomTeam: number = Utils.RandomNumbers.GetRandom(numberOfTeams, 1, teamsPickedForSlotting);
                teamsPickedForSlotting.push(randomTeam);
            }

            var teamOccurences: number[] = new Array<number>(numberOfTeams);
            for (var i: number = 0; i < numberOfSlots; i++) {
                var occurences: number,
                    randomTeam: number;
                do {
                    randomTeam = Utils.RandomNumbers.GetRandomWithin(teamsPickedForSlotting);
                    occurences = (teamOccurences[randomTeam - 1] || 0) + 1;
                } while (occurences > matchCountFoReveal);
                teamOccurences[randomTeam - 1] = occurences;
                this.slots.push(new Slot(randomTeam));
            }
        }

        checkForReveal(): boolean {
            var flippedSlots: ISlot[] = [];
            angular.forEach(this.slots, (slot: ISlot): void => {
                if (slot && slot.flipped && !slot.revealed) {
                    flippedSlots.push(slot);
                }
            });

            var shouldReveal: boolean = true,
                matchedTeam: number = 0;
            if (flippedSlots.length === matchCountFoReveal) {
                angular.forEach(flippedSlots, (slot: ISlot): void => {
                    if (matchedTeam === 0) {
                        matchedTeam = slot.team;
                    } else if (matchedTeam !== slot.team) {
                        shouldReveal = false;
                    }
                });

                angular.forEach(flippedSlots, (slot: ISlot): void => {
                    if (shouldReveal === true) {
                        slot.revealed = true;
                    } else {
                        slot.close();
                    }
                });
            }

            this.isGameOver();

            return shouldReveal;
        }

        private isGameOver(): boolean {
            var flag: boolean = true;
            angular.forEach(this.slots, (slot: ISlot): void => {
                flag = flag && slot.revealed;
            });

            if (flag) {
                if (this.callbackForGameComplete) {
                    this.callbackForGameComplete();
                }
            }

            return flag;
        }

        onGameComplete(callback: () => void): void {
            this.callbackForGameComplete = callback;
        }
    }

    container.service("GameService", GameService);
}