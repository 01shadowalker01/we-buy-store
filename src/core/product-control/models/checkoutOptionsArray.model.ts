/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class CheckoutOptionsArrayModel {
    public productOptions: any = [];

    constructor(checkoutArrayRequest: any) {
        if (checkoutArrayRequest) {
            for (let i = 0; i < checkoutArrayRequest.length; i++) {
                for (let j = 0; j < checkoutArrayRequest[i].optionValue.length; j++) {
                    const productOptionsObject: any = {};
                    productOptionsObject.productOptionId = checkoutArrayRequest[i].productOptionId || 0;
                    productOptionsObject.productOptionValueId = checkoutArrayRequest[i].optionValue[j].productOptionValueId || 0;
                    productOptionsObject.name = checkoutArrayRequest[i].optionname || '';
                    productOptionsObject.value = checkoutArrayRequest[i].optionValue[j].optionValueName || '';
                    productOptionsObject.type = checkoutArrayRequest[i].optiontype || '';
                    this.productOptions.push(productOptionsObject);
                }

            }
        }
    }
}

