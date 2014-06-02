module MatchAndWin {
    "use strict";

    interface ISlot {
        team: number;
        flipped: boolean;
    }

    class GameController {
        private numberOfTeams: number = 5;
        private numberOfSlots: number = 6;
        public slots: ISlot[];

        constructor() { }

        start(): void {
            this.slots = [];
            for (var i = 0; i < this.numberOfSlots; i++) {
                var slot: ISlot = {
                    team: Math.floor(Math.random() * 100) % 5 + 1,
                    flipped: false
                };
                this.slots.push(slot);
            }
        }
    }

    container.controller("GameController", GameController);
} 