module Tests {
    "use strict";

    describe("some string", () => {
        var scope, controller;

        beforeEach(() => {
            inject(($rootScope: ng.IScope, $controller: ng.IControllerService) => {
                scope = $rootScope.$new();

                var gameService: MatchAndWin.IGameService = {
                    checkForReveal(): boolean {
                        return false;
                    },
                    reset() {
                        
                    },
                    onGameComplete(callback: () => void) { },
                    slots: []
                };

                controller = $controller("GameController", {
                    "GameService": gameService
                });
            });

            it("should do something", () => {

            });
        });
    });
}