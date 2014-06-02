module MatchAndWin {
    "use strict";

    interface ISlot {
        team: number;
        flipped: boolean;
        revealed: boolean;
    }

    class GameController {
        private numberOfTeams: number = 5;
        private numberOfSlots: number = 6;
        public slots: ISlot[];

        constructor() {
            this.start();
        }

        start(): void {
            this.slots = [];
            for (var i: number = 0; i < this.numberOfSlots; i++) {
                var slot: ISlot = {
                    team: Math.floor(Math.random() * 100) % this.numberOfTeams + 1,
                    revealed: false,
                    flipped: false
                };
                this.slots.push(slot);
            }
        }
    }

    container.controller("GameController", GameController);
} 