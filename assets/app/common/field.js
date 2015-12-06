(function() {
    "use strict";

    angular.module("field", [])
        .directive("field", function () {
            return {
                restrict: "E",
                templateUrl: "app/common/field.html",
                replace: true,
                scope: {
                    name: "@",
                    type: "@",
                    title: "@",
                    value: "=",
                    placeholder: "@",
                    items: "=",
                    required: "@"
                }
            };
        });
})();
