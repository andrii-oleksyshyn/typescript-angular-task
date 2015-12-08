module app.address {
    "use strict";

    interface IMyRouteParamsService extends ng.route.IRouteService {
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

            function init() {
                if (!$routeParams.id)
                    return;

                apiService.getAddressById($routeParams.id)
                    .success(function (data) {
                        vm.item = data;

                    });
            }

            function updateItem(): void {
                if ($routeParams.id) {
                    apiService.updateAddress(vm.item)
                        .success(function () {
                            $location.path("/addresses");
                        });
                } else {
                    apiService.addAddress(vm.item)
                        .success(function () {
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