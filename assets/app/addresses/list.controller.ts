module app.address {
    "use strict";

    class ListController {
        createLink: string;
        init: Function;
        deleteItem: Function;
        editItem: Function;
        tableParams: Object;
        
        static $inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];
        
        constructor($location: ng.ILocationService, 
            $route: ng.route.IRouteService,
            apiService: app.apiService.IApiService,
            utilService: app.utilService.IUtilService,
            NgTableParams: ng.ngtable.ITableParams) {

            var vm = this;

            vm.createLink = "/addresses/edit";
            vm.deleteItem = deleteItem;
            vm.editItem = editItem;

            init();

            function init(): void {
                apiService.getAddresses()
                    .success(function (data) {
                        vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                    });
            }

            function deleteItem(id): void {
                apiService.deleteAddress(id)
                    .success(function (data) {
                        $route.reload();
                    });
            }

            function editItem(id) {
                $location.path("/addresses/edit/" + id);
            }

        }
    }
    
    angular
        .module("app.address")
        .controller("AddressListController", ListController);
}