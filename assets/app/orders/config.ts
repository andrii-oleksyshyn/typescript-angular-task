((): void => {
    "use strict";

    angular
        .module("app.order")
        .config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {

        $routeProvider
            .when("/orders", { templateUrl: "app/orders/list.html", controller: "OrderListController", controllerAs: "vm" })
            .when("/orders/edit/:id?", { templateUrl: "app/orders/edit.html", controller: "OrderEditController", controllerAs: "vm" })
            .otherwise({ redirectTo: "/" });
    }
})();