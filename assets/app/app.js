(function () {
    "use strict";
    angular.module("app", [
        "ngRoute",
        "ngTable",
        "blockUI",
        "formValidation",
        "app.httpInterceptor",
        "app.utilService",
        "app.apiService",
        "field",
        "validationSummary",
        "app.address",
        "app.user",
        "app.order",
    ]);
})();
