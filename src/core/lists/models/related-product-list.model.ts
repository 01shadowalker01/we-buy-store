/*
 * spurtcommerce
 * version 2.1
* www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class RelatedProductListModel {
    public name: string;
    public description: string;
    public price: string;
    public image: Array<any>;
    public productId: number;

    constructor(listResponse: any) {
        this.name = listResponse.name || '';
        this.description = listResponse.description || '';
        this.price = listResponse.price || '';
        this.image = listResponse.productImage || [];
        this.productId = listResponse.productId || 0;
    }
}
