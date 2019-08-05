/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class EditProfileModal {
    public firstName: any;
    public lastName: any;
    public password: any;
    public emailId: any;
    public address: any;
    public countryId: any;
    public zoneId: any;
    public pincode: any;
    public phoneNumber: any;
    public image: any;

    constructor(editRequest: any) {
        this.firstName = editRequest.firstName || '';
        this.lastName = editRequest.lastName || '';
        this.password = editRequest.password || '';
        this.emailId = editRequest.email || '';
        this.address = editRequest.address || '';
        this.countryId = editRequest.country || '';
        this.zoneId = editRequest.zoneId || '';
        this.pincode = editRequest.pincode || '';
        this.phoneNumber = editRequest.phoneNumber || '';
        this.image = editRequest.image || '';
    }
}
