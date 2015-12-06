(function () {
    "use strict";

    angular.module("app.httpInterceptor", []).factory("httpInterceptor", httpInterceptor);

    httpInterceptor.$inject = ["$q", "$rootScope"];

    function httpInterceptor($q, $rootScope) {

        function parseErrors(modelState) {
            for (var key in modelState) {
                for (var i = 0; i < modelState[key].length; i++) {
                    $rootScope.errorList.push(modelState[key][i]);
                }
            }
        }

        function error(response) {
            if (!$rootScope.errorList) {
                $rootScope.errorList = [];
            }

            if (response.data && response.data.errors)
                parseErrors(response.data.errors);
            else if (response.status === 400)
                $rootScope.errorList.push("An error occurred during processing your request.");
            else if (response.status === 404)
                $rootScope.errorList.push("The entity has been removed or does not exist.");

            return $q.reject(response);
        }

        return {
            requestError: error,
            responseError: error
        };
    }
}());
