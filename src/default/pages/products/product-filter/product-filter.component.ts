/*
* spurtcommerce
* version 2.1
* http://api.spurtcommerce.com
*
* Copyright (c) 2019 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import {ConfigService} from '../../../../core/service/config.service';

@Component({
    selector: 'app-spurt-product-filter',
    templateUrl: './product-filter.component.html',
    styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
    // price filter
    public priceFrom = '0';
    public priceTo: any = 1000;
    // filter used new
    public conditions = [{option: 'New', value: 1}, {option: 'Used', value: 2}];
    // filter with brand
    public brandId = '';
    // product list
    private category: any = '';
    private keyword: any = '';
    public condition: any = '';
    @Input() isClickedData: any;
    @Output() progressEmit = new EventEmitter<string>();
    // radio form variable
    public radioForm: FormGroup;
    public radio: FormControl;
        // image
    public imagePath: string;

    constructor(private router: Router,
                public listSandbox: ListsSandbox,
                private configService: ConfigService,
                private fb: FormBuilder) {
    }

    // Initially calls getCategories,getBrands function.
    ngOnInit() {
       // this.imagePath = this.configService.get('resize').imageUrl;
       this.imagePath = this.configService.getImageUrl();
        this.brandId = localStorage.getItem('brandSelectionKey');
        if (this.brandId == null) {
            this.brandId = '';
        }
        this.getCategories();
        this.getBrands();
        // subscribe subject getting value from MenuComponent
        this.listSandbox.productFilterData.subscribe((productId) => {
            if (productId) {
                // reset the form Controls value
                this.radioForm.controls['radio'].reset();
                this.brandId = '';
            }
        });
        this.loadForm();

    }

    // build a form for radiobutton by gouping the form control
    loadForm() {
        this.radioForm = this.fb.group({
            'radio': ['']
        });
    }

    // calls getProducts for filter
    public onChangeCategory(categoryId) {
        const id: number = categoryId;
        const objStrId = JSON.stringify(id);
        localStorage.setItem('categoryIdDataKey', objStrId);
        this.getProducts();
        this.router.navigate(['/products', id]);
    }

    // calls listSandbox getManufacturerList for getting brand list
    public getBrands() {
        const params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    }

    /**
     *  selecting brand in the brand list.
     *  Then calls getProducts to refresh the product list,
     *  set ,get,remove local storage for brandId.
     *  remove brandSelectionKey local storage.
     *  **/
    public selectBrand(brandId) {
        if ((this.brandId !== brandId) && (!localStorage.getItem('brandSelectionKey'))) {
            this.brandId = brandId;
            localStorage.setItem('brandKey', this.brandId);
            this.getProduct();
        } else {
            this.radioForm.controls['radio'].reset();
            this.brandId = '';
            localStorage.removeItem('brandKey');
            localStorage.removeItem('brandSelectionKey');
            const param: any = {};
            param.allproducts = 0;
            this.getProduct();
            if (!localStorage.getItem('categoryIdKey')) {
                this.router.navigate(['/products', param]);
            }
        }
    }

    // calls listSandbox getCategoryList with default param values
    public getCategories() {
        const params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        this.listSandbox.getCategoryList(params);
    }

    /**
     * Emit param to product component
     * @param manufacturerId to product component
     * */
    getProduct() {
        const params: any = {};
        params.manufacturerId = this.brandId;
        params.priceFrom = this.priceFrom;
        params.priceTo = this.priceTo;
        this.progressEmit.emit(params);
    }

    // calls getProducts event changed
    changeCondition(event, id) {
        this.condition = id;
        this.getProducts();
    }

    /** calls getProducts after the price value changed.
     * And set local storage for pagination purpose **/
    selectPrice() {
        localStorage.removeItem('fromPrice');
        localStorage.removeItem('priceTo');
        localStorage.setItem('fromPrice', this.priceFrom);
        const objStr = JSON.stringify(this.priceTo);
        localStorage.setItem('priceTo', objStr);
        this.priceFrom = localStorage.getItem('fromPrice');
        this.getProducts();
    }

    /**
     * calls listSandbox getProductList.Then calls listSandbox getProductCount
     *And also emits the param to product list for correct pagination.
     * */
    getProducts() {
        const params: any = {};
        params.limit = 10;
        params.offset = 0;
        /**  during removing local storage it assigns null string
         * this condition will handle that.**/
        if ((this.brandId === 'null') || (this.brandId == null)) {
            this.brandId = '';
            params.manufacturerId = this.brandId;
        } else {
            params.manufacturerId = this.brandId;
        }
        /**  during removing local storage it assigns null string
         * this condition will handle that.**/
        this.keyword = localStorage.getItem('keywordData');
        if ((this.keyword === 'null') || (this.keyword === 'empty') || (this.keyword == null)) {
            this.keyword = '';
            params.keyword = this.keyword;
        } else {
            params.keyword = this.keyword;
        }
        if (localStorage.getItem('categoryIdDataKey')) {

        }
        this.category = localStorage.getItem('categoryIdDataKey');
        /**  during removing local storage it assigns null string
         * this condition will handle that.**/
        if ((this.category === 'null') || (this.category == null)) {
            this.category = '';
            params.categoryId = this.category;
        } else {
            params.categoryId = this.category;
        }
        /**  during removing local storage it assigns null string
         * this condition will handle that.**/
        if ((this.priceFrom === 'null') || (this.priceFrom == null)) {
            this.priceFrom = '';
            params.priceFrom = this.priceFrom;
        } else {
            params.priceFrom = this.priceFrom;
        }
        if (!localStorage.getItem('priceTo')) {
            this.priceTo = '';
            params.priceTo = this.priceTo;
        } else {
            params.priceTo = this.priceTo;
        }
        params.condition = this.condition;
        // this.progressEmit.emit(params);
        this.listSandbox.getProductList(params);
        params.count = true;
        this.listSandbox.getProductCount(params);
    }
}

