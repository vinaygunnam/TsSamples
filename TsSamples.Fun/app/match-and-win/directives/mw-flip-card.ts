module MatchAndWin {
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
                    team: '='
                },
                link: (scope: IFlipCardScope, element: any): void => {
                    var container = <JQuery>element;
                    var card = container.find(".card");
                    card.on("click", () => {
                        card.toggleClass("flipped");
                    });

                    scope.getSrc = () => {
                        return "/assets/img/portfolio/" + scope.team + ".jpg";
                    };
                }
            };

            return flipCard;
        }
    }

    container.directive("mwFlipCard", FlipCardDirective);
}