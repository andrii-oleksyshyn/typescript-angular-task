var app;
(function (app) {
    var utilService;
    (function (utilService_1) {
        "use strict";
        var userType = {
            driver: 0,
            client: 1
        };
        var orderStatus = {
            new: 0,
            pickedUp: 1,
            droppedOff: 2,
            cancelled: 3
        };
        var UtilService = (function () {
            function UtilService() {
                this.userTypes = [
                    { name: "Driver", value: 0 },
                    { name: "Client", value: 1 }
                ];
                this.orderStatus = [
                    { name: "New", value: 0 },
                    { name: "Picked Up", value: 1 },
                    { name: "Dropped Off", value: 2 },
                    { name: "Cancelled", value: 3 }
                ];
                this.months = [
                    { name: "January", value: 1 },
                    { name: "February", value: 2 },
                    { name: "March", value: 3 },
                    { name: "April", value: 4 },
                    { name: "May", value: 5 },
                    { name: "June", value: 6 },
                    { name: "July", value: 7 },
                    { name: "August", value: 8 },
                    { name: "September", value: 9 },
                    { name: "October", value: 10 },
                    { name: "November", value: 11 },
                    { name: "December", value: 12 }
                ];
            }
            UtilService.prototype.toggleIdsCheckbox = function (ids, id) {
                var idx = ids.indexOf(id);
                if (idx != -1) {
                    ids.splice(idx, 1);
                }
                else {
                    ids.push(id);
                }
            };
            return UtilService;
        })();
        utilService_1.UtilService = UtilService;
        function utilService() {
            return new UtilService();
        }
        utilService.$inject = [];
        angular.module("app.utilService", [])
            .constant("userType", userType)
            .constant("orderStatus", orderStatus)
            .factory("utilService", utilService);
    })(utilService = app.utilService || (app.utilService = {}));
})(app || (app = {}));
