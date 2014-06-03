var App;
(function (App) {
    "use strict";

    App.container = angular.module("app", ["ui.router", "matchAndWin"]);

    App.container.config([
        "$locationProvider", "$urlRouterProvider", "$stateProvider",
        function (locationProvider, urlRouterProvider, stateProvider) {
            locationProvider.html5Mode(false).hashPrefix('!');

            urlRouterProvider.otherwise("/");

            stateProvider.state("home", {
                url: "/",
                templateUrl: "/app/templates/home.html"
            }).state("matchAndWin", {
                url: "/match-and-reveal",
                templateUrl: "/app/templates/match-and-win.html",
                controller: "GameController as gc"
            });
        }]);
})(App || (App = {}));
//# sourceMappingURL=app.js.map
