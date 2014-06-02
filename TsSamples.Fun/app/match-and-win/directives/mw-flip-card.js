var MatchAndWin;
(function (MatchAndWin) {
    "use strict";

    var FlipCardDirective = (function () {
        function FlipCardDirective() {
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
                    card.on("click", function () {
                        card.toggleClass("flipped");
                        scope.slot.flipped = !scope.slot.flipped;
                    });

                    scope.getSrc = function () {
                        return "/assets/img/portfolio/" + scope.slot.team + ".jpg";
                    };

                    scope.$watch("slot.revealed", function (newValue) {
                        if (newValue) {
                            card.off("click");
                        }
                    });
                }
            };

            return flipCard;
        }
        return FlipCardDirective;
    })();

    MatchAndWin.container.directive("mwFlipCard", FlipCardDirective);
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=mw-flip-card.js.map
