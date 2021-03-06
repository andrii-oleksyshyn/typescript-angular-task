module app.address {
    "use strict";

    export interface IMyRouteParamsService extends ng.route.IRouteService {
        id: any;
    }

    class EditController {
        item: Object;
        init: Function;
        updateItem: Function;
        toggleIdsCheckbox: Function;

        static $inject = ["$routeParams", "$location", "apiService", "utilService"];

        constructor($routeParams: IMyRouteParamsService,
            $location: ng.ILocationService,
            apiService: app.apiService.IApiService,
            utilService: app.utilService.IUtilService) {

            var vm = this;

            vm.item = {};
            vm.updateItem = updateItem;
            vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;

            init();

            function init(): void {
                if (!$routeParams.id)
                    return;

                apiService.getAddressById($routeParams.id)
                    .success(function (data: any): void {
                        vm.item = data;
                    });
            }

            function updateItem(): void {
                if ($routeParams.id) {
                    apiService.updateAddress(vm.item)
                        .success(function (): void {
                            $location.path("/addresses");
                        });
                } else {
                    apiService.addAddress(vm.item)
                        .success(function (): void {
                            $location.path("/addresses");
                        });
                }
            }
        }
    }

    angular
        .module("app.address")
        .controller("AddressEditController", EditController);
}