module app.httpInterceptor {
    "use strict";

    interface IHttpInterceptor {
        parseErrors(modelState: any);
        error(response: any);
    }

    class HttpInterceptor implements IHttpInterceptor {

        constructor(private $q: ng.IQService, public $rootScope: IMyRootScope) {}

        parseErrors(modelState) {
            for (var key in modelState) {
                for (var i = 0; i < modelState[key].length; i++) {
                    this.$rootScope.errorList.push(modelState[key][i]);
                }
            }
        }

        error(response: any) {
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

    httpInterceptor.$inject = ['$q', '$rootScope'];

    function httpInterceptor($q, $rootScope): IHttpInterceptor {
        return new HttpInterceptor($q, $rootScope);
    }

    angular
        .module("app.httpInterceptor", [])
        .factory("httpInterceptor", httpInterceptor);
}