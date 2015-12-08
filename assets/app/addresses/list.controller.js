var app;
(function (app) {
    var address;
    (function (address) {
        "use strict";
        var ListController = (function () {
            function ListController($location, $route, apiService, utilService, NgTableParams) {
                var vm = this;
                vm.createLink = "/addresses/edit";
                vm.deleteItem = deleteItem;
                vm.editItem = editItem;
                init();
                function init() {
                    apiService.getAddresses()
                        .success(function (data) {
                        vm.tableParams = new NgTableParams({ count: 10 }, { data: data });
                    });
                }
                function deleteItem(id) {
                    apiService.deleteAddress(id)
                        .success(function (data) {
                        $route.reload();
                    });
                }
                function editItem(id) {
                    $location.path("/addresses/edit/" + id);
                }
            }
            ListController.$inject = ["$location", "$route", "apiService", "utilService", "NgTableParams"];
            return ListController;
        })();
        angular
            .module("app.address")
            .controller("AddressListController", ListController);
    })(address = app.address || (app.address = {}));
})(app || (app = {}));
