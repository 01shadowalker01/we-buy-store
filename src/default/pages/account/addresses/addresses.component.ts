import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountSandbox} from '../../../../core/account/account.sandbox';
import {Router} from '@angular/router';
import {AccountService} from '../../../../core/account/account.service';

@Component({
    selector: 'app-addresses',
    templateUrl: './addresses.component.html',
    styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
    public getAddressinfo: any;

    constructor(public formBuilder: FormBuilder, private router: Router, public snackBar: MatSnackBar,
                public accountSandbox: AccountSandbox, public accountService: AccountService) {
    }

    ngOnInit() {
        this.getCustomerAddressList();
        this.getsubscrie();
    }

    public getCustomerAddressList() {
        const params: any = {};
        params.limit = 0;
        params.offset = 0;
        params.count = 0;
        this.accountSandbox.getAddressList(params);
    }

    public addressEdit(details) {
        this.accountService.setCustomerAddress(details);
        this.router.navigate(['/account/addaddresses_edit', details.addressId]);
    }

    public deleteAddress(id) {
        const params: any = {};
        params.addressId = id;
        this.accountSandbox.deleteCustomerAddress(params);
        this.getsubscrie();

    }

    public getsubscrie() {
        this.accountSandbox.getCustAddressList$.subscribe(data => {
            this.getAddressinfo = data;
        });
        this.accountSandbox.getCustDeleteAddress$.subscribe(value => {
            if (value && value.status) {
                if (value.status === 1) {
                    this.getCustomerAddressList();
                }
            }
        });
    }


}
