module app.order {
    "use strict";

    class EditController {
        item: Object;
        init: Function;
        updateItem: Function;
        toggleIdsCheckbox: Function;
        orderStatus: Object[];
        clients: any[];
        drivers: any[];
        sourceAddresses: any[];
        destinationAddresses: any;

        static $inject = ["$routeParams", "$location", "apiService", "utilService"];

        constructor($routeParams: app.address.IMyRouteParamsService,
            $location: ng.ILocationService,
            apiService: app.apiService.IApiService,
            utilService: app.utilService.IUtilService) {

            var vm = this;

            vm.item = {};
            vm.updateItem = updateItem;
            vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;
            vm.orderStatus = utilService.orderStatus;

            init();

            function init(): void {
                apiService.getUsers()
                    .success(function (data: any) {
                        vm.clients = $.map(data, function (item: any) {
                            return { name: item.name, value: item.id };
                        });
                    });

                apiService.getUsers()
                    .success(function (data: any): void {
                        vm.drivers = $.map(data, function (item: any) {
                            return { name: item.name, value: item.id };
                        });
                    });

                apiService.getAddresses()
                    .success(function (data: any): void {
                        vm.sourceAddresses = $.map(data, function (item: any) {
                            return { name: item.streetAddress, value: item.id };
                        });
                    });

                apiService.getAddresses()
                    .success(function (data: any): void {
                        vm.destinationAddresses = $.map(data, function (item: any) {
                            return { name: item.streetAddress, value: item.id };
                        });
                    });

                if (!$routeParams.id)
                    return;

                apiService.getOrderById($routeParams.id)
                    .success(function (data: any): void {
                        vm.item = data;
                    });
            }

            function updateItem(): void {
                if ($routeParams.id) {
                    apiService.updateOrder(vm.item)
                        .success(function (): void {
                            $location.path("/orders");
                        });
                } else {
                    apiService.addOrder(vm.item)
                        .success(function (): void {
                            $location.path("/orders");
                        });
                }
            }
        }
    }

    angular
        .module("app.order")
        .controller("OrderEditController", EditController);
}