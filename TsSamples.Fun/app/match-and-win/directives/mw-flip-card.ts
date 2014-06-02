module MatchAndWin {
    "use strict";

    interface IFlipCardScope extends ng.IScope {
        team: number;
        getSrc(): string;
    }
 
    class FlipCardDirective {
        constructor() {
            var flipCard: ng.IDirective = {
                restrict: "A",
                replace: true,
                templateUrl: "/app/match-and-win/directives/mw-flip-card.html",
                scope: {
                    team: "="
                },
                link: (scope: IFlipCardScope, element: any): void => {
                    var container: JQuery = <JQuery>element;
                    var card: JQuery = container.find(".card");
                    card.on("click", (): void => {
                        card.toggleClass("flipped");
                    });

                    scope.getSrc = (): string => {
                        return "/assets/img/portfolio/" + scope.team + ".jpg";
                    };
                }
            };

            return flipCard;
        }
    }

    container.directive("mwFlipCard", FlipCardDirective);
}