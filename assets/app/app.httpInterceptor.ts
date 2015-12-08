module app.httpInterceptor {
    "use strict";

    interface IHttpInterceptor {
        parseErrors(modelState: any);
        error(response: any);
    }

    class HttpInterceptor implements IHttpInterceptor{
        public requestErrors = this.error;
        public responseError = this.error;

        constructor(private $q: ng.IQService, public $rootScope: IMyRootScope){}
        parseErrors(modelState) {
            for (var key in modelState) {
                for (var i = 0; i < modelState[key].length; i++) {
                    this.$rootScope.errorList.push(modelState[key][i]);
                }
            }
        }

        error(response) {
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
        }
    }

    function httpInterceptor($q, $rootScope): IHttpInterceptor {
        return new HttpInterceptor($q, $rootScope);
    }

    httpInterceptor.$inject = ['$q', '$rootScope'];

    angular
        .module("app.httpInterceptor", [])
        .factory("httpInterceptor", httpInterceptor);
}