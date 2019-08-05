import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountSandbox} from '../../../../core/account/account.sandbox';
import {AccountService} from '../../../../core/account/account.service';
import {ActivatedRoute, Router} from '@angular/router';

// import { AppService } from '../../../app.service';

@Component({
    selector: 'app-addaddresses',
    templateUrl: './addaddresses.component.html',
    styleUrls: ['./addaddresses.component.scss']
})
export class AddaddressesComponent implements OnInit {

    billingForm: FormGroup;
    shippingForm: FormGroup;
    addAddressForm: FormGroup;
    customerAddress: any = [];
    addressId: any;
    countries = [];

    constructor(private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, public snackBar: MatSnackBar, public accountSandbox: AccountSandbox, public  accountService: AccountService) {
    }

    ngOnInit() {
        this.addressId = this.route.snapshot.paramMap.get('id');
        this.addAddressForm = this.formBuilder.group({
            'address1': ['', Validators.required],
            'address2': [''],
            'addresstype': '',
            'city': '',
            'state': '',
            'postcode': ['', Validators.required]
        });
        this.billingForm = this.formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'middleName': '',
            'company': '',
            'email': ['', Validators.required],
            'phone': ['', Validators.required],
            'country': ['', Validators.required],
            'city': ['', Validators.required],
            'state': '',
            'zip': ['', Validators.required],
            'address': ['', Validators.required]
        });
        this.shippingForm = this.formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'middleName': '',
            'company': '',
            'email': ['', Validators.required],
            'phone': ['', Validators.required],
            'country': ['', Validators.required],
            'city': ['', Validators.required],
            'state': '',
            'zip': ['', Validators.required],
            'address': ['', Validators.required]
        });
        this.addAddressForm.patchValue({addresstype: '1', tc: true});
        this.editAddressForm();

    }

    editAddressForm() {
        this.customerAddress.push(this.accountService.getCustomerAddress());
        if (this.customerAddress && this.customerAddress[0]) {
            this.addAddressForm.controls['address1'].setValue(this.customerAddress[0].address1);
            this.addAddressForm.controls['address2'].setValue(this.customerAddress[0].address2);
            if (this.customerAddress[0].addressType === 1) {
                this.addAddressForm.patchValue({addresstype: '1', tc: true});
            } else if (this.customerAddress[0].addressType === 0) {
                this.addAddressForm.patchValue({addresstype: '0', tc: true});
            }
            this.addAddressForm.controls['city'].setValue(this.customerAddress[0].city);
            this.addAddressForm.controls['state'].setValue(this.customerAddress[0].state);
            this.addAddressForm.controls['postcode'].setValue(this.customerAddress[0].postcode);
        }
    }

    public onSubmit(addressFormGroup) {
        const params: any = {};
        params.address1 = addressFormGroup.address1;
        params.address2 = addressFormGroup.address2;
        params.city = addressFormGroup.city;
        params.state = addressFormGroup.state;
        params.postcode = addressFormGroup.postcode;
        if (addressFormGroup.addresstype === '1') {
            params.addressType = 1;
        } else {
            params.addressType = 0;
        }
        if (this.customerAddress && this.customerAddress[0]) {
            params.addressId = this.addressId;
            this.accountSandbox.updateCustomerAddress(params);
            this.customerAddress = [];
        } else {
            this.accountSandbox.addCustomerAddress(params);
        }

    }

    cancle() {
        this.accountService.setCustomerAddress('');
        this.router.navigate(['/account/addresses']);
    }


}
