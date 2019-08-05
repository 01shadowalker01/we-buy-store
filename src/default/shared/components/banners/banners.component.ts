import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
    @Input() banners: Array<any> = [];

    constructor() {
    }

    ngOnInit() {
    }

}
