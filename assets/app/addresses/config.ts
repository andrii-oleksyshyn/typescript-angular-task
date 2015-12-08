((): void => {
    "use strict";

    angular
        .module("app.address")
        .config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider) {

        $routeProvider
            .when("/addresses", { templateUrl: "app/addresses/list.html", controller: "AddressListController", controllerAs: "vm" })
            .when("/addresses/edit/:id?", { templateUrl: "app/addresses/edit.html", controller: "AddressEditController", controllerAs: "vm" })
            .otherwise({ redirectTo: "/" });
    }
})();
