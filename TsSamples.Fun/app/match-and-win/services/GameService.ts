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

            var teamOccurences: number[] = new Array<number>(numberOfTeams);
            angular.forEach(teamOccurences, (occurence: number, index: number) => {
                teamOccurences[index] = 0;
            });

            for (var i: number = 0; i < numberOfSlots; i++) {
                var randomTeam: number;

                do {
                    randomTeam = Math.floor(Math.random() * 100) % numberOfTeams + 1;
                } while (teamOccurences[randomTeam] + 1 <= matchCountFoReveal);

                teamOccurences[randomTeam]++;
                var slot: ISlot = new Slot(randomTeam);
                this.slots.push(slot);
            }
        }

        checkForReveal(): boolean {
            var flippedSlots = [];
            angular.forEach(this.slots, (slot: ISlot) => {
                if (slot && slot.flipped && !slot.revealed) {
                    flippedSlots.push(slot);
                }
            });

            var shouldReveal = true,
                matchedTeam: number = 0;
            if (flippedSlots.length === matchCountFoReveal) {
                angular.forEach(flippedSlots, (slot: ISlot) => {
                    if (matchedTeam === 0) {
                        matchedTeam = slot.team;
                    } else if (matchedTeam !== slot.team) {
                        shouldReveal = false;
                    }
                });

                angular.forEach(flippedSlots, (slot: ISlot) => {
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
            var flag = true;
            angular.forEach(this.slots, (slot: ISlot) => {
                flag = flag && slot.revealed;
            });

            if (flag) {
                if (this.callbackForGameComplete) {
                    this.callbackForGameComplete();
                }
            }

            return flag;
        }

        onGameComplete(callback: () => void) {
            this.callbackForGameComplete = callback;
        } 
    }

    container.service("GameService", GameService);
}