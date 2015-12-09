var app;
(function (app) {
    "use strict";
    var HeaderController = (function () {
        function HeaderController($rootScope) {
            var vm = this;
            vm.isCollapsed = true;
            $rootScope.$on("$locationChangeSuccess", function () {
                vm.isCollapsed = true;
            });
        }
        HeaderController.$inject = ["$rootScope"];
        return HeaderController;
    })();
    angular
        .module("app")
        .controller("HeaderController", HeaderController);
})(app || (app = {}));
