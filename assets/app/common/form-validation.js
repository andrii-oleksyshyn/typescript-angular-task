(function() {
    'use strict';

    angular.module('formValidation', [])
        .directive('validateEmail', validateEmail)
        .directive('validateInteger', integerNumber)
        .directive('validateFloat', floatNumber)
        .directive('showErrors', showErrors);

    function validateEmail() {
        var emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]+$/i;

        return {
            require: '^ngModel',
            restrict: 'A',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.email = function (modelValue) {
                    return ctrl.$isEmpty(modelValue) || emailRegexp.test(modelValue);
                };
            }
        };
    }

    function showErrors() {
        return {
            restrict: "A",
            require: "^form",
            link: function (scope, el, attrs, ngModelCtrl) {
                var inputNames = attrs.showErrors;
                if (!inputNames)
                    return;

                var names = inputNames.split(",");
                for (var i = 0; i < names.length; i++) {
                    var inputName = names[i];

                    function modelInvalid() {
                        return ngModelCtrl[inputName].$invalid && ngModelCtrl.$dirty;
                    }

                    scope.$watch(modelInvalid, function (newVal, oldVal) {
                        if (newVal) {
                            el.addClass("has-error");
                        } else {
                            el.removeClass("has-error");
                        }
                    });
                }
            }
        };
    }

    function integerNumber() {
        var isValid = function (s) {
            s = $.trim(s);

            var val = parseInt(s, 10);
            var valid = !isNaN(val) && /^\d+$/.test(s) && val >= 0;

            return valid;
        };

        return {
            require: '^ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$validators.integer = function(modelValue, viewValue) {
                    if (isValid(viewValue)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        };
    }

    function floatNumber() {
        var isValid = function (s) {
            s = $.trim(s);

            var val = parseFloat(s, 10);
            var valid = !isNaN(val) && /^[\d+\.]+$/.test(s) && val >= 0;
            return valid;
        };

        return {
            require: '^ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                ctrl.$validators.float = function (modelValue, viewValue) {
                    if (isValid(viewValue)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        };
    }
})();
