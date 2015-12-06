
(function () {
    "use strict";

    angular.module("app.apiService", []).factory("apiService", apiService);

    apiService.$inject = ["$http"];

    function apiService($http) {
        return {
            getAddresses: function (limit, offset) {
                if (!offset)
                    offset = 0;
                if (limit)
                    return $http.get("/api/Addresses?limit=" + limit + "&skip=" + offset);
                else
                    return $http.get("/api/Addresses?skip=" + offset);
            },

            getAddressById: function (addressId) {
                return $http.get("/api/Addresses/" + addressId);
            },

            addAddress: function (item) {
                return $http.post("/api/Addresses", item);
            },

            updateAddress: function (item) {
                return $http.put("/api/Addresses/" + item.id, item);
            },

            deleteAddress: function (addressId) {
                return $http.delete("/api/Addresses/" + addressId);
            },

            getUsers: function (limit, offset) {
                if (!offset)
                    offset = 0;
                if (limit)
                    return $http.get("/api/Users?limit=" + limit + "&skip=" + offset);
                else
                    return $http.get("/api/Users?skip=" + offset);
            },

            getUserById: function (userId) {
                return $http.get("/api/Users/" + userId);
            },

            addUser: function (item) {
                return $http.post("/api/Users", item);
            },

            updateUser: function (item) {
                return $http.put("/api/Users/" + item.id, item);
            },

            deleteUser: function (userId) {
                return $http.delete("/api/Users/" + userId);
            },

            getOrders: function (limit, offset) {
                if (!offset)
                    offset = 0;
                if (limit)
                    return $http.get("/api/Orders?limit=" + limit + "&skip=" + offset);
                else
                    return $http.get("/api/Orders?skip=" + offset);
            },

            getOrderById: function (orderId) {
                return $http.get("/api/Orders/" + orderId);
            },

            addOrder: function (item) {
                return $http.post("/api/Orders", item);
            },

            updateOrder: function (item) {
                return $http.put("/api/Orders/" + item.id, item);
            },

            deleteOrder: function (orderId) {
                return $http.delete("/api/Orders/" + orderId);
            },

        };
    }
}());
