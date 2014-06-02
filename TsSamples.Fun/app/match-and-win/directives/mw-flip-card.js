var MatchAndWin;
(function (MatchAndWin) {
    var FlipCardDirective = (function () {
        function FlipCardDirective() {
            var flipCard = {
                restrict: "A",
                replace: true,
                templateUrl: "/app/match-and-win/directives/mw-flip-card.html",
                scope: {
                    team: '='
                },
                link: function (scope, element) {
                    var container = element;
                    var card = container.find(".card");
                    card.on("click", function () {
                        card.toggleClass("flipped");
                    });

                    scope.getSrc = function () {
                        return "/assets/img/portfolio/" + scope.team + ".jpg";
                    };
                }
            };

            return flipCard;
        }
        return FlipCardDirective;
    })();

    MatchAndWin.container.directive("mwFlipCard", FlipCardDirective);
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=mw-flip-card.js.map
