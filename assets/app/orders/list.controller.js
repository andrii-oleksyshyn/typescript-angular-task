
(function () {
    "use strict";

    angular.module("app.order").controller("OrderListController", ListController);

    ListController.$inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];

    function ListController($location, $route, apiService, utilService, NgTableParams) {
        var vm = this;
        vm.createLink = "/orders/edit";
        vm.deleteItem = deleteItem;
        vm.editItem = editItem;

        init();

        function init() {
            apiService.getOrders()
                .success(function (data) {
                    vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                });
        }

        function deleteItem(id) {
            apiService.deleteOrder(id)
                .success(function (data) {
                    $route.reload();
                });
        }

        function editItem(id) {
            $location.path("/orders/edit/" + id);
        }
    }
}());
