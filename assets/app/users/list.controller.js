
(function () {
    "use strict";

    angular.module("app.user").controller("UserListController", ListController);

    ListController.$inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];

    function ListController($location, $route, apiService, utilService, NgTableParams) {
        var vm = this;
        vm.createLink = "/users/edit";
        vm.deleteItem = deleteItem;
        vm.editItem = editItem;

        init();

        function init() {
            apiService.getUsers()
                .success(function (data) {
                    vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                });
        }

        function deleteItem(id) {
            apiService.deleteUser(id)
                .success(function (data) {
                    $route.reload();
                });
        }

        function editItem(id) {
            $location.path("/users/edit/" + id);
        }
    }
}());
