((): void => {
    "use strict";

    angular
        .module("validationSummary", [])
        .directive("validationSummary", validationSummary);

    function validationSummary(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "/app/common/validation-summary.html",
            replace: true,
            scope: false
        };
    }
})();