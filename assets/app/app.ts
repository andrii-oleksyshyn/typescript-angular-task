((): void => {
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
            /*$(ContentStart)*/
            "app.address",
            "app.user",
            "app.order",
            /*$(ContentEnd)*/
        ]);
})();
