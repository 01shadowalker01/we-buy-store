/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatStepper} from '@angular/material';
import {emailValidator} from '../../theme/utils/app-validators';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';
import {ConfigService} from '../../../core/service/config.service';
import {AccountSandbox} from '../../../core/account/account.sandbox';
import {ProductControlService} from '../../../core/product-control/product-control.service';
import {CommonSandbox} from '../../../core/common/common.sandbox';
import {Subscription} from 'rxjs';
import { iranCitiesList } from './iran-cities';


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
    // decorator
    @ViewChild('horizontalStepper') horizontalStepper: MatStepper;
    @ViewChild('verticalStepper') verticalStepper: MatStepper;
    //
    public iranCities = iranCitiesList;
    // reactive form
    public checkoutForm: FormGroup;
    public firstName: FormControl;
    public lastName: FormControl;
    // public company: FormControl;
    public email: FormControl;
    public phone: FormControl;
    // public country: FormControl;
    public city: FormControl;
    public state: FormControl;
    // public zip: FormControl;
    // public zipCodes: any;
    public address: FormControl;
    // public addressLine: FormControl;
    public checked: boolean;
    // validation
    public submitted = false;
    public newAddress = true;
    public dataOptions: any;
    // address option
    public showAddresses = false;
    // image
    public imagePath: any;
    // checkout list name
    public semiColon = ':';
    // subscriptions for unsuscribe the api respone
    private subscriptions: Array<Subscription> = [];

    constructor(public formBuilder: FormBuilder, public snackBar: MatSnackBar,
                public productControlSandbox: ProductControlSandbox,
                public listsSandbox: ListsSandbox,
                public accountSandbox: AccountSandbox,
                public commonSandbox: CommonSandbox,
                public configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef) {
    }

    // Initially calls initCheckoutForm function
    ngOnInit() {

        this.getCustomerAddressList();
        this.commonSandbox.doGetProfile();
        this.initCheckoutForm();
        this.setProfileDetails();
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
    }

    // calls accountSandbox getAddressList
    public getCustomerAddressList() {
        const params: any = {};
        params.limit = 0;
        params.offset = 0;
        params.count = 0;
        this.accountSandbox.getAddressList(params);
    }

    // passes address details to edit
    selectAddress(param) {
        this.showAddresses = false;
        this.editAddressList(param);
    }

    // create form group for checkout
    initCheckoutForm() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        // this.country = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.compose([Validators.required, emailValidator]));
        this.phone = new FormControl('', Validators.compose([Validators.required]));
        this.city = new FormControl('', Validators.required);
        this.state = new FormControl('', Validators.required);
        // this.zip = new FormControl('', Validators.required);
        this.address = new FormControl('', Validators.required);
        // this.addressLine = new FormControl('');

        this.checkoutForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            // company: this.company,
            email: this.email,
            phone: this.phone,
            // country: this.country,
            city: this.city,
            state: this.state,
            // zip: this.zip,
            address: this.address,
            // addressLine: this.addressLine,
        });
    }

    // editing billing form
    editAddressList(param) {
        this.checkoutForm.controls['company'].setValue(param.company);
        this.checkoutForm.controls['city'].setValue(param.city);
        this.checkoutForm.controls['state'].setValue(param.state);
        // if (typeof param.postcode === 'number') {
        //     this.zipCodes = parseInt(param.postcode, 10);
        //     this.checkoutForm.controls['zip'].setValue(this.zipCodes);
        // } else {
        //     this.checkoutForm.controls['zip'].setValue(param.postcode);
        // }
        this.checkoutForm.controls['address'].setValue(param.address1);
        // this.checkoutForm.controls['addressLine'].setValue(param.address2);
    }

    // editing billing form(from get profile api)
    setProfileDetails() {
        this.subscriptions.push(this.commonSandbox.getProfile$.subscribe(profile => {
            if (profile) {
                this.checkoutForm.controls['firstName'].setValue(profile.firstName);
                this.checkoutForm.controls['lastName'].setValue(profile.lastName);
                this.checkoutForm.controls['email'].setValue(profile.email);
                this.checkoutForm.controls['phone'].setValue(profile.mobileNumber);
            }
        }));
    }

    /**
     * place order with product detail, if the form is valid
     *
     * remove checkout local storage.
     * @param productDetails detail of the product for checkout
     */
    public placeOrder(productDetails) {
        this.submitted = true;
        if (productDetails.length === 0) {
            this.snackBar.open('ابتدا باید محصول اضافه کنید', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                horizontalPosition: 'right',
                duration: 3000
            });
            return;
        }
        if (!this.checkoutForm.valid) {
            return;
        }
        this.checkoutForm.value["company"] = "a"
        this.checkoutForm.value["zip"] = "a"
        this.checkoutForm.value["addressLine"] = "a"
        this.checkoutForm.value["country"] = "101";
        console.log(this.checkoutForm.value);
               
        const params = this.checkoutForm.value;
        // this.optionss(productDetails);
        params.productDetail = productDetails;
        localStorage.removeItem('checkout');
        this.productControlSandbox.PlaceOrder(params);
    }


    /**
     * increase or decrease product count
     *
     * @param product added product details
     * @param operation differentiate the operation is increament operation or decrement operation
     */
    changeCount(product, operation) {
        this.productControlSandbox.ChangeCount(product, operation);
    }

    // remove product from the cart, calling removeItemFromCart function from sandbox
    removeProduct(product) {
        this.productControlSandbox.removeItemFromCart(product);
    }

    // clear cart, for remove all products in the cart
    public clear() {
        this.productControlSandbox.clearCart();
    }

    // destroy the subscribed events while page destroy
    ngOnDestroy() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}
