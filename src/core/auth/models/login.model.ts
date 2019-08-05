/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class LoginModel {
    public emailId: any;
    public password: any;

    constructor(loginRequest: any) {
        this.emailId = loginRequest.email || '';
        this.password = loginRequest.password || '';
    }
}
