module app.utilService {
    "use strict";

    export interface IUserType {
        driver: number;
        client: number;
    }

    export interface IOrderStatus {
        new: number;
        pickedUp: number;
        droppedOff: number;
        cancelled: number;
    }

    export interface IUtilService {
        userTypes: Object[];
        orderStatus: Object[];
        toggleIdsCheckbox: Function;
        months: Object[];
    }

    var userType: IUserType = {
        driver: 0,
        client: 1
    };

    var orderStatus: IOrderStatus = {
        new: 0,
        pickedUp: 1,
        droppedOff: 2,
        cancelled: 3
    };

    export class UtilService implements IUtilService {
        userTypes = [
                { name: "Driver", value: 0 },
                { name: "Client", value: 1 }
        ];

        orderStatus = [
            { name: "New", value: 0 },
            { name: "Picked Up", value: 1 },
            { name: "Dropped Off", value: 2 },
            { name: "Cancelled", value: 3 }
        ];

        toggleIdsCheckbox(ids: any, id: any): void {
            var idx = ids.indexOf(id);

            if (idx != -1) {
                ids.splice(idx, 1);
            }
            else {
                ids.push(id);
            }
        }

        months = [
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

    function utilService(): IUtilService {
        return new UtilService();
    }

    utilService.$inject = [];

    angular.module("app.utilService", [])
        .constant("userType", userType)
        .constant("orderStatus", orderStatus)
        .factory("utilService", utilService);
}