module MatchAndWin {
    "use strict";

    interface IFlipCardScope extends ng.IScope {
        slot: ISlot;
        getSrc(): string;
    }
 
    class FlipCardDirective {
        public static $inject = ["GameService"];

        constructor(gameService: IGameService) {
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
                    scope.slot.setDomElement(card);
                    card.on("click", (): void => {
                        scope.$apply((): void => {
                            // if card is closed, open it
                            if (scope.slot.flipped === false && scope.slot.animationInProgress === false) {
                                scope.slot.open();
                                gameService.checkForReveal();
                            }
                        });
                    });

                    scope.getSrc = (): string => {
                        return "/assets/img/portfolio/" + scope.slot.team + ".jpg";
                    };
                }
            };

            return flipCard;
        }
    }

    container.directive("mwFlipCard", FlipCardDirective);
}