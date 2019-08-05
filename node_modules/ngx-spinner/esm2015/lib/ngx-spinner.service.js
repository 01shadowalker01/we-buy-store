/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxSpinnerService {
    /**
     * Creates an instance of NgxSpinnerService.
     * \@memberof NgxSpinnerService
     */
    constructor() {
        /**
         * Spinner observable
         *
         * \@memberof NgxSpinnerService
         */
        this.spinnerObservable = new Subject();
    }
    /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    show() {
        this.spinnerObservable.next(true);
    }
    /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @return {?}
     */
    hide() {
        this.spinnerObservable.next(false);
    }
}
NgxSpinnerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgxSpinnerService.ctorParameters = () => [];
/** @nocollapse */ NgxSpinnerService.ngInjectableDef = i0.defineInjectable({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
if (false) {
    /**
     * Spinner observable
     *
     * \@memberof NgxSpinnerService
     * @type {?}
     */
    NgxSpinnerService.prototype.spinnerObservable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTTs7Ozs7SUFXSjs7Ozs7O2lDQUwyQixJQUFJLE9BQU8sRUFBVztLQUtoQzs7Ozs7OztJQU1qQixJQUFJO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQzs7Ozs7OztJQU1ELElBQUk7UUFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7WUE5QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hTcGlubmVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBTcGlubmVyIG9ic2VydmFibGVcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgc3Bpbm5lck9ic2VydmFibGUgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyU2VydmljZS5cbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICAvKipcbiAgICogVG8gc2hvdyBzcGlubmVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgc2hvdygpIHtcbiAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQodHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFRvIGhpZGUgc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KGZhbHNlKTtcbiAgfVxufVxuIl19