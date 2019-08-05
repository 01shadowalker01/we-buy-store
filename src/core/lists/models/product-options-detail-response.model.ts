/*
 * spurtcommerce
 * version 2.1
* www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {ProductOptionValueDetailResponseModel} from './product-option-value-detail-response.model';

export class ProductOptionsDetailResponseModel {
    public optionId: number;
    public optionValue: ProductOptionValueDetailResponseModel;
    public optionname: string;
    public optiontype: string;
    public productId: any;
    public productOptionId: number;
    public required: number;
    public value: string;


    constructor(listOptionsResponse: any) {
        this.optionId = listOptionsResponse.optionId || 0;
        this.optionValue = listOptionsResponse.optionValue || [];
        this.optionname = listOptionsResponse.optionname || '';
        this.optiontype = listOptionsResponse.optiontype || '';
        this.productId = listOptionsResponse.productId || '';
        this.productOptionId = listOptionsResponse.productOptionId || 0;
        this.required = listOptionsResponse.required || 0;
        this.value = listOptionsResponse.value || '';
    }
}
