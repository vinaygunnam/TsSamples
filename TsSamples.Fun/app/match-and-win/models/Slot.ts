module MatchAndWin {
    "use strict";

    export interface ISlot {
        team: number;
        flipped: boolean;
        revealed: boolean;
        animationInProgress: boolean;
        setDomElement(element: JQuery): void;
        open(): void;
        close(): void;
    }

    export class Slot implements ISlot {
        private domElement: JQuery;
        public flipped: boolean;
        public revealed: boolean;
        public animationInProgress: boolean;
        constructor(public team: number) {
            this.flipped = false;
            this.revealed = false;
            this.animationInProgress = false;
        }

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
                this.animationInProgress = true;
                window.setTimeout((): void => {
                    this.flipped = false;
                    this.domElement.removeClass("flipped");
                    this.animationInProgress = false;
                }, 2000);
                
            }
        }
    }
} 