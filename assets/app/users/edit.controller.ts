module app.user {
    class EditController {
        item: Object;
        init: Function;
        updateItem: Function;
        toggleIdsCheckbox: Function;
        userTypes: Object[];
        homeAddresses: any[];

        static $inject = ["$routeParams", "$location", "apiService", "utilService"];

        constructor($routeParams: app.address.IMyRouteParamsService,
            $location: ng.ILocationService,
            apiService: app.apiService.IApiService,
            utilService: app.utilService.IUtilService) {
            var vm = this;

            vm.item = {};
            vm.updateItem = updateItem;
            vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;
            vm.userTypes = utilService.userTypes;

            init();

            function init() {
                apiService.getAddresses()
                    .success(function (data: any): void {
                        vm.homeAddresses = $.map(data, function (item: any) {
                            return { name: item.streetAddress, value: item.id };
                        });
                    });

                if (!$routeParams.id)
                    return;

                apiService.getUserById($routeParams.id)
                    .success(function (data: any): void {
                        vm.item = data;

                    });
            }

            function updateItem(): void {
                if ($routeParams.id) {
                    apiService.updateUser(vm.item)
                        .success(function (): void {
                            $location.path("/users");
                        });
                } else {
                    apiService.addUser(vm.item)
                        .success(function (): void {
                            $location.path("/users");
                        });
                }
            }
        }
    }

    angular
        .module("app.user")
        .controller("UserEditController", EditController);
}