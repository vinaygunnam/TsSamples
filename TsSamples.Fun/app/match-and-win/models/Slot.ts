module MatchAndWin {
    "use strict";

    export var animationInProgress: boolean = false;

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
        public flipped: boolean;
        public revealed: boolean;
        constructor(public team: number) {
            this.flipped = false;
            this.revealed = false;
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
                animationInProgress = true;
                window.setTimeout((): void => {
                    this.flipped = false;
                    this.domElement.removeClass("flipped");
                    animationInProgress = false;
                }, 2000);
                
            }
        }
    }
} 