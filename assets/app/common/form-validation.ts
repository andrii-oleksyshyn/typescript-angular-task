interface ICustomNgModelController extends ng.INgModelController {
    $validators: ICustomModelValidators;
}

interface ICustomModelValidators extends ng.IModelValidators {
    email: any;
    integer: any;
    float: any;
}

((): void => {
    "use strict";

    angular.module('formValidation', [])
        .directive('validateEmail', validateEmail)
        .directive('validateInteger', integerNumber)
        .directive('validateFloat', floatNumber)
        .directive('showErrors', showErrors);

    function validateEmail(): ng.IDirective {
        var emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]+$/i;

        return {
            require: '^ngModel',
            restrict: 'A',
            link: function (scope, elm, attrs, ctrl: ICustomNgModelController): void {
                ctrl.$validators.email = function (modelValue) {
                    return ctrl.$isEmpty(modelValue) || emailRegexp.test(modelValue);
                };
            }
        };
    }

    function showErrors(): ng.IDirective {
        return {
            restrict: "A",
            require: "^form",
            link: function (scope, el, attrs, ngModelCtrl: ICustomNgModelController): void {
                var inputNames = attrs.showErrors;
                if (!inputNames)
                    return;

                var names = inputNames.split(",");
                for (var i = 0; i < names.length; i++) {
                    var inputName = names[i];

                    function modelInvalid() {
                        return ngModelCtrl[inputName].$invalid && ngModelCtrl.$dirty;
                    }

                    scope.$watch(modelInvalid, function (newVal, oldVal): void {
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

    function integerNumber(): ng.IDirective {
        var isValid = function (s) {
            s = $.trim(s);

            var val = parseInt(s, 10);
            var valid = !isNaN(val) && /^\d+$/.test(s) && val >= 0;

            return valid;
        };

        return {
            require: '^ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, ctrl: ICustomNgModelController): void {
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

    function floatNumber(): ng.IDirective {
        var isValid = function (s) {
            s = $.trim(s);

            var val = parseFloat(s);
            var valid = !isNaN(val) && /^[\d+\.]+$/.test(s) && val >= 0;
            return valid;
        };

        return {
            require: '^ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl: ICustomNgModelController) {
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