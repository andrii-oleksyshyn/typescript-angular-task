var app;
(function (app) {
    var order;
    (function (order) {
        "use strict";
        var EditController = (function () {
            function EditController($routeParams, $location, apiService, utilService) {
                var vm = this;
                vm.item = {};
                vm.updateItem = updateItem;
                vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;
                vm.orderStatus = utilService.orderStatus;
                init();
                function init() {
                    apiService.getUsers()
                        .success(function (data) {
                        vm.clients = $.map(data, function (item) {
                            return { name: item.name, value: item.id };
                        });
                    });
                    apiService.getUsers()
                        .success(function (data) {
                        vm.drivers = $.map(data, function (item) {
                            return { name: item.name, value: item.id };
                        });
                    });
                    apiService.getAddresses()
                        .success(function (data) {
                        vm.sourceAddresses = $.map(data, function (item) {
                            return { name: item.streetAddress, value: item.id };
                        });
                    });
                    apiService.getAddresses()
                        .success(function (data) {
                        vm.destinationAddresses = $.map(data, function (item) {
                            return { name: item.streetAddress, value: item.id };
                        });
                    });
                    if (!$routeParams.id)
                        return;
                    apiService.getOrderById($routeParams.id)
                        .success(function (data) {
                        vm.item = data;
                    });
                }
                function updateItem() {
                    if ($routeParams.id) {
                        apiService.updateOrder(vm.item)
                            .success(function () {
                            $location.path("/orders");
                        });
                    }
                    else {
                        apiService.addOrder(vm.item)
                            .success(function () {
                            $location.path("/orders");
                        });
                    }
                }
            }
            EditController.$inject = ["$routeParams", "$location", "apiService", "utilService"];
            return EditController;
        })();
        angular
            .module("app.order")
            .controller("OrderEditController", EditController);
    })(order = app.order || (app.order = {}));
})(app || (app = {}));
