var app;
(function (app) {
    var httpInterceptor;
    (function (httpInterceptor_1) {
        "use strict";
        var HttpInterceptor = (function () {
            function HttpInterceptor($q, $rootScope) {
                this.$q = $q;
                this.$rootScope = $rootScope;
                this.requestErrors = this.error;
                this.responseError = this.error;
            }
            HttpInterceptor.prototype.parseErrors = function (modelState) {
                for (var key in modelState) {
                    for (var i = 0; i < modelState[key].length; i++) {
                        this.$rootScope.errorList.push(modelState[key][i]);
                    }
                }
            };
            HttpInterceptor.prototype.error = function (response) {
                if (!this.$rootScope.errorList) {
                    this.$rootScope.errorList = [];
                }
                if (response.data && response.data.errors)
                    this.parseErrors(response.data.errors);
                else if (response.status === 400)
                    this.$rootScope.errorList.push("An error occurred during processing your request.");
                else if (response.status === 404)
                    this.$rootScope.errorList.push("The entity has been removed or does not exist.");
                return this.$q.reject(response);
            };
            return HttpInterceptor;
        })();
        function httpInterceptor($q, $rootScope) {
            return new HttpInterceptor($q, $rootScope);
        }
        httpInterceptor.$inject = ['$q', '$rootScope'];
        angular
            .module("app.httpInterceptor", [])
            .factory("httpInterceptor", httpInterceptor);
    })(httpInterceptor = app.httpInterceptor || (app.httpInterceptor = {}));
})(app || (app = {}));
