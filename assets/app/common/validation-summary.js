(function() {
    "use strict";

    angular.module("validationSummary", [])
        .directive("validationSummary", function () {
            return {
                restrict: "E",
                templateUrl: "/app/common/validation-summary.html",
                replace: true,
                scope: false
            };
        });
})();
