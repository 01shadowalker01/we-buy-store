/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class AddresslistResponseModel {
    public address1: string;
    public address2: string;
    public addressId: number;
    public addressType: number;
    public city: string;
    public company: string;
    public firstName: string;
    public lastName: string;
    public postcode: string;
    public state: string;

    constructor(addresslistresponse: any) {
        this.address1 = addresslistresponse.address1 || '';
        this.address2 = addresslistresponse.address2 || '';
        this.company = addresslistresponse.company || '';
        this.firstName = addresslistresponse.firstName || '';
        this.lastName = addresslistresponse.lastName || '';
        this.addressId = addresslistresponse.addressId || 0;
        this.addressType = addresslistresponse.addressType || 0;
        this.city = addresslistresponse.city || '';
        this.postcode = addresslistresponse.postcode || '';
        this.state = addresslistresponse.state || '';
    }
}
