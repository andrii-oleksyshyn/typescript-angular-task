((): void => {
    "use strict";

    angular
        .module("field", [])
        .directive("field", field);
    
    function field(): ng.IDirective {
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
    }
})();
