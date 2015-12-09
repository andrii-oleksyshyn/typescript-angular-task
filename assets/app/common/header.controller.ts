module app {
    "use strict";

    class HeaderController {
        isCollapsed: boolean;

        static $inject = ["$rootScope"];

        constructor($rootScope: ng.IRootScopeService) {
            var vm = this;
            vm.isCollapsed = true;

            $rootScope.$on("$locationChangeSuccess", function (): void {
                vm.isCollapsed = true;
            });
        }
    }

    angular
        .module("app")
        .controller("HeaderController", HeaderController);
}