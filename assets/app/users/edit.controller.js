var app;
(function (app) {
    var user;
    (function (user) {
        var EditController = (function () {
            function EditController($routeParams, $location, apiService, utilService) {
                var vm = this;
                vm.item = {};
                vm.updateItem = updateItem;
                vm.toggleIdsCheckbox = utilService.toggleIdsCheckbox;
                vm.userTypes = utilService.userTypes;
                init();
                function init() {
                    apiService.getAddresses()
                        .success(function (data) {
                        vm.homeAddresses = $.map(data, function (item) {
                            return { name: item.streetAddress, value: item.id };
                        });
                    });
                    if (!$routeParams.id)
                        return;
                    apiService.getUserById($routeParams.id)
                        .success(function (data) {
                        vm.item = data;
                    });
                }
                function updateItem() {
                    if ($routeParams.id) {
                        apiService.updateUser(vm.item)
                            .success(function () {
                            $location.path("/users");
                        });
                    }
                    else {
                        apiService.addUser(vm.item)
                            .success(function () {
                            $location.path("/users");
                        });
                    }
                }
            }
            EditController.$inject = ["$routeParams", "$location", "apiService", "utilService"];
            return EditController;
        })();
        angular
            .module("app.user")
            .controller("UserEditController", EditController);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
