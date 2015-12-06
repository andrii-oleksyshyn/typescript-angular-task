(function () {
  "use strict";

  angular.module("app").controller("HeaderController", HeaderController);

  HeaderController.$inject = ["$rootScope"];

  function HeaderController ($rootScope) {
    var vm = this;
    vm.isCollapsed = true;

    $rootScope.$on("$locationChangeSuccess", function () {
      vm.isCollapsed = true;
    });
  }
})();
