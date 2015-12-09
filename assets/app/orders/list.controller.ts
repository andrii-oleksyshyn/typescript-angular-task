module app.order {
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

            vm.createLink = "/orders/edit";
            vm.deleteItem = deleteItem;
            vm.editItem = editItem;

            init();

            function init(): void {
                apiService.getOrders()
                    .success(function (data: any): void {
                        vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                    });
            }

            function deleteItem(id): void {
                apiService.deleteOrder(id)
                    .success(function (data: any): void {
                        $route.reload();
                    });
            }

            function editItem(id: any): void {
                $location.path("/orders/edit/" + id);
            }

        }
    }

    angular
        .module("app.order")
        .controller("OrderListController", ListController);
}