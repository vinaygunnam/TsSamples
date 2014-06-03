module MatchAndWin {
    export interface ISlot {
        team: number;
        flipped: boolean;
        revealed: boolean;
        setDomElement(element: JQuery): void;
        open(): void;
        close(): void;
    }

    export class Slot implements ISlot {
        private domElement: JQuery;
        constructor(public team: number, public flipped?: boolean, public revealed?: boolean) { }

        setDomElement(element: JQuery): void {
            this.domElement = element;
        }

        open(): void {
            this.flipped = true;
            this.domElement.addClass("flipped");
        }

        close(): void {
            // a slot can be closed ONLY if it is NOT REVEALED already
            if (this.revealed === false) {
                this.flipped = false;
                this.domElement.removeClass("flipped");
            }
        }
    }
} 