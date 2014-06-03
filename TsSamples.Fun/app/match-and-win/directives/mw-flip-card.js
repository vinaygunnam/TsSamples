var MatchAndWin;
(function (MatchAndWin) {
    "use strict";

    var FlipCardDirective = (function () {
        function FlipCardDirective(gameService) {
            var flipCard = {
                restrict: "A",
                replace: true,
                templateUrl: "/app/match-and-win/directives/mw-flip-card.html",
                scope: {
                    slot: "="
                },
                link: function (scope, element) {
                    var container = element;
                    var card = container.find(".card");
                    scope.slot.setDomElement(card);
                    card.on("click", function () {
                        // if card is closed, open it
                        if (scope.slot.flipped === false) {
                            scope.slot.open();
                            gameService.checkForReveal();
                        }
                    });

                    scope.getSrc = function () {
                        return "/assets/img/portfolio/" + scope.slot.team + ".jpg";
                    };
                }
            };

            return flipCard;
        }
        FlipCardDirective.$inject = ["GameService"];
        return FlipCardDirective;
    })();

    MatchAndWin.container.directive("mwFlipCard", FlipCardDirective);
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=mw-flip-card.js.map
