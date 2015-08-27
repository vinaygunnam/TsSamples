var Tests;
(function (Tests) {
    "use strict";

    describe("some string", function () {
        var scope, controller;

        beforeEach(function () {
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();

                var gameService = {
                    checkForReveal: function () {
                        return false;
                    },
                    reset: function () {
                    },
                    onGameComplete: function (callback) {
                    },
                    slots: []
                };

                controller = $controller("GameController", {
                    "GameService": gameService
                });
            });

            it("should do something", function () {
            });
        });
    });
})(Tests || (Tests = {}));
//# sourceMappingURL=sample.js.map
