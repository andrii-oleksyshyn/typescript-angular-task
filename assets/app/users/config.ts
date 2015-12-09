((): void => {
    "use strict";

    angular
        .module("app.user")
        .config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {

        $routeProvider
            .when("/users", { templateUrl: "app/users/list.html", controller: "UserListController", controllerAs: "vm" })
            .when("/users/edit/:id?", { templateUrl: "app/users/edit.html", controller: "UserEditController", controllerAs: "vm" })
            .otherwise({ redirectTo: "/" });
    }
})();
