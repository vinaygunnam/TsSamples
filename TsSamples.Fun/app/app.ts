module App {
    "use strict";

    export var container: ng.IModule = angular.module("app", ["ui.router", "matchAndWin"]);

    container.config(["$locationProvider", "$urlRouterProvider", "$stateProvider",
        (locationProvider: ng.ILocationProvider, urlRouterProvider: ng.route.IRouteProvider, stateProvider: ng.ui.IStateProvider): void => {
            locationProvider.html5Mode(false);

            urlRouterProvider
                .otherwise("/");

            stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "/app/templates/home.html"
                })
                .state("matchAndWin", {
                    url: "/match-and-reveal",
                    templateUrl: "/app/templates/match-and-win.html",
                    controller: "GameController as gc"
                });

            
        }]);
}