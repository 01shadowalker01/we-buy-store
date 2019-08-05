import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
    // decorator
    @Input() isShow: any;

    @Input() message = '';

    constructor() { }

    ngOnInit() {
    }
}
