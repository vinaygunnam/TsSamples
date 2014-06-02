module MatchAndWin {
    "use strict";

    interface IFlipCardScope extends ng.IScope {
        slot: ISlot;
        getSrc(): string;
    }
 
    class FlipCardDirective {
        constructor() {
            var flipCard: ng.IDirective = {
                restrict: "A",
                replace: true,
                templateUrl: "/app/match-and-win/directives/mw-flip-card.html",
                scope: {
                    slot: "="
                },
                link: (scope: IFlipCardScope, element: any): void => {
                    var container: JQuery = <JQuery>element;
                    var card: JQuery = container.find(".card");
                    card.on("click", (): void => {
                        card.toggleClass("flipped");
                        scope.slot.flipped = !scope.slot.flipped;
                    });

                    scope.getSrc = (): string => {
                        return "/assets/img/portfolio/" + scope.slot.team + ".jpg";
                    };

                    scope.$watch("slot.revealed", (newValue?: boolean): void => {
                        if (newValue) {
                            card.off("click");
                        }
                    });
                }
            };

            return flipCard;
        }
    }

    container.directive("mwFlipCard", FlipCardDirective);
}