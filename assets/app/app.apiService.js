var app;
(function (app) {
    var apiService;
    (function (apiService_1) {
        "use strict";
        var ApiService = (function () {
            function ApiService($http) {
                this.$http = $http;
            }
            ApiService.prototype.getAddresses = function (limit, offset) {
                if (!offset)
                    offset = 0;
                if (limit)
                    return this.$http.get("/api/Addresses?limit=" + limit + "&skip=" + offset);
                else
                    return this.$http.get("/api/Addresses?skip=" + offset);
            };
            ApiService.prototype.getAddressById = function (addressId) {
                return this.$http.get("/api/Addresses/" + addressId);
            };
            ApiService.prototype.addAddress = function (item) {
                return this.$http.post("/api/Addresses", item);
            };
            ApiService.prototype.updateAddress = function (item) {
                return this.$http.put("/api/Addresses/" + item.id, item);
            };
            ApiService.prototype.deleteAddress = function (addressId) {
                return this.$http.delete("/api/Addresses/" + addressId);
            };
            ApiService.prototype.getUsers = function (limit, offset) {
                if (!offset)
                    offset = 0;
                if (limit)
                    return this.$http.get("/api/Users?limit=" + limit + "&skip=" + offset);
                else
                    return this.$http.get("/api/Users?skip=" + offset);
            };
            ApiService.prototype.getUserById = function (userId) {
                return this.$http.get("/api/Users/" + userId);
            };
            ApiService.prototype.addUser = function (item) {
                return this.$http.post("/api/Users", item);
            };
            ApiService.prototype.updateUser = function (item) {
                return this.$http.put("/api/Users/" + item.id, item);
            };
            ApiService.prototype.deleteUser = function (userId) {
                return this.$http.delete("/api/Users/" + userId);
            };
            ApiService.prototype.getOrders = function (limit, offset) {
                if (!offset)
                    offset = 0;
                if (limit)
                    return this.$http.get("/api/Orders?limit=" + limit + "&skip=" + offset);
                else
                    return this.$http.get("/api/Orders?skip=" + offset);
            };
            ApiService.prototype.getOrderById = function (orderId) {
                return this.$http.get("/api/Orders/" + orderId);
            };
            ApiService.prototype.addOrder = function (item) {
                return this.$http.post("/api/Orders", item);
            };
            ApiService.prototype.updateOrder = function (item) {
                return this.$http.put("/api/Orders/" + item.id, item);
            };
            ApiService.prototype.deleteOrder = function (orderId) {
                return this.$http.delete("/api/Orders/" + orderId);
            };
            return ApiService;
        })();
        apiService_1.ApiService = ApiService;
        function apiService($http) {
            return new ApiService($http);
        }
        apiService.$inject = ["$http"];
        angular
            .module("app.apiService", [])
            .factory("apiService", apiService);
    })(apiService = app.apiService || (app.apiService = {}));
})(app || (app = {}));
