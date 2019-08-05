var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
var Actions = /** @class */ (function (_super) {
    __extends(Actions, _super);
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    Actions_1 = Actions;
    Actions.prototype.lift = function (operator) {
        var observable = new Actions_1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    var Actions_1;
    Actions = Actions_1 = __decorate([
        Injectable(),
        __param(0, Inject(ScannedActionsSubject)),
        __metadata("design:paramtypes", [Observable])
    ], Actions);
    return Actions;
}(Observable));
export { Actions };
export function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return filter(function (action) {
        return allowedTypes.some(function (type) { return type === action.type; });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFVLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQThCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QztJQUF5QywyQkFBYTtJQUNwRCxpQkFBMkMsTUFBc0I7UUFBakUsWUFDRSxpQkFBTyxTQUtSO1FBSEMsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7SUFDSCxDQUFDO2dCQVBVLE9BQU87SUFTbEIsc0JBQUksR0FBSixVQUFRLFFBQXdCO1FBQzlCLElBQU0sVUFBVSxHQUFHLElBQUksU0FBTyxFQUFLLENBQUM7UUFDcEMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7SUFkVSxPQUFPO1FBRG5CLFVBQVUsRUFBRTtRQUVFLFdBQUEsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7eUNBQVUsVUFBVTtPQURuRCxPQUFPLENBZW5CO0lBQUQsY0FBQztDQUFBLEFBZkQsQ0FBeUMsVUFBVSxHQWVsRDtTQWZZLE9BQU87QUFxRnBCLE1BQU0sVUFBVSxNQUFNO0lBQ3BCLHNCQUF5QjtTQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7UUFBekIsaUNBQXlCOztJQUV6QixPQUFPLE1BQU0sQ0FBQyxVQUFDLE1BQWM7UUFDM0IsT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQXBCLENBQW9CLENBQUM7SUFBL0MsQ0FBK0MsQ0FDaEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgU2Nhbm5lZEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiwgT3BlcmF0b3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbnM8ViA9IEFjdGlvbj4gZXh0ZW5kcyBPYnNlcnZhYmxlPFY+IHtcbiAgY29uc3RydWN0b3IoQEluamVjdChTY2FubmVkQWN0aW9uc1N1YmplY3QpIHNvdXJjZT86IE9ic2VydmFibGU8Vj4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICB9XG5cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8ViwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IEFjdGlvbnM8Uj4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG59XG5cbi8qKlxuICogJ29mVHlwZScgZmlsdGVycyBhbiBPYnNlcnZhYmxlIG9mIEFjdGlvbnMgaW50byBhbiBvYnNlcnZhYmxlIG9mIHRoZSBhY3Rpb25zXG4gKiB3aG9zZSB0eXBlIHN0cmluZ3MgYXJlIHBhc3NlZCB0byBpdC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgYGFjdGlvbnNgIGhhcyB0eXBlIGBBY3Rpb25zPEFkZGl0aW9uQWN0aW9ufFN1YnN0cmFjdGlvbkFjdGlvbj5gLCBhbmRcbiAqIHRoZSB0eXBlIG9mIHRoZSBgQWRkaXRpb25gIGFjdGlvbiBpcyBgYWRkYCwgdGhlblxuICogYGFjdGlvbnMucGlwZShvZlR5cGUoJ2FkZCcpKWAgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZTxBZGRpdGlvbkFjdGlvbj5gLlxuICpcbiAqIFByb3Blcmx5IHR5cGluZyB0aGlzIGZ1bmN0aW9uIGlzIGhhcmQgYW5kIHJlcXVpcmVzIHNvbWUgYWR2YW5jZWQgVFMgdHJpY2tzXG4gKiBiZWxvdy5cbiAqXG4gKiBUeXBlIG5hcnJvd2luZyBhdXRvbWF0aWNhbGx5IHdvcmtzLCBhcyBsb25nIGFzIHlvdXIgYGFjdGlvbnNgIG9iamVjdFxuICogc3RhcnRzIHdpdGggYSBgQWN0aW9uczxTb21lVW5pb25PZkFjdGlvbnM+YCBpbnN0ZWFkIG9mIGdlbmVyaWMgYEFjdGlvbnNgLlxuICpcbiAqIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2hlbiBvbmUgcGFzc2VzIGEgc2luZ2xlIHR5cGUgYXJndW1lbnRcbiAqIGBvZlR5cGU8VD4oJ3NvbWV0aGluZycpYCB0aGUgcmVzdWx0IGlzIGFuIGBPYnNlcnZhYmxlPFQ+YC4gTm90ZSwgdGhhdCBgVGBcbiAqIGNvbXBsZXRlbHkgb3ZlcnJpZGVzIGFueSBwb3NzaWJsZSBpbmZlcmVuY2UgZnJvbSAnc29tZXRoaW5nJy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBmb3IgdW5rbm93biAnYWN0aW9uczogQWN0aW9ucycgdGhlc2UgdHlwZXMgd2lsbCBwcm9kdWNlXG4gKiAnT2JzZXJ2YWJsZTxuZXZlcj4nLiBJbiBzdWNoIGNhc2VzIG9uZSBoYXMgdG8gbWFudWFsbHkgc2V0IHRoZSBnZW5lcmljIHR5cGVcbiAqIGxpa2UgYGFjdGlvbnMub2ZUeXBlPEFkZGl0aW9uQWN0aW9uPignYWRkJylgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBWIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIH0+LFxuICBUMSBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvblxuPih0MTogVDEpOiBPcGVyYXRvckZ1bmN0aW9uPFUsIFY+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxcbiAgViBleHRlbmRzIEV4dHJhY3Q8VSwgeyB0eXBlOiBUMSB8IFQyIH0+LFxuICBUMSBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb25cbj4odDE6IFQxLCB0MjogVDIpOiBPcGVyYXRvckZ1bmN0aW9uPFUsIFY+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxcbiAgViBleHRlbmRzIEV4dHJhY3Q8VSwgeyB0eXBlOiBUMSB8IFQyIHwgVDMgfT4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICBUMiBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVDMgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb25cbj4odDE6IFQxLCB0MjogVDIsIHQzOiBUMyk6IE9wZXJhdG9yRnVuY3Rpb248VSwgVj47XG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBWIGV4dGVuZHMgRXh0cmFjdDxVLCB7IHR5cGU6IFQxIHwgVDIgfCBUMyB8IFQ0IH0+LFxuICBUMSBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gIFQzIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICBUNCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvblxuPih0MTogVDEsIHQyOiBUMiwgdDM6IFQzLCB0NDogVDQpOiBPcGVyYXRvckZ1bmN0aW9uPFUsIFY+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxcbiAgViBleHRlbmRzIEV4dHJhY3Q8VSwgeyB0eXBlOiBUMSB8IFQyIHwgVDMgfCBUNCB8IFQ1IH0+LFxuICBUMSBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gIFQzIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICBUNCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgVDUgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb25cbj4odDE6IFQxLCB0MjogVDIsIHQzOiBUMywgdDQ6IFQ0LCB0NTogVDUpOiBPcGVyYXRvckZ1bmN0aW9uPFUsIFY+O1xuLyoqXG4gKiBGYWxsYmFjayBmb3IgbW9yZSB0aGFuIDUgYXJndW1lbnRzLlxuICogVGhlcmUgaXMgbm8gaW5mZXJlbmNlLCBzbyB0aGUgcmV0dXJuIHR5cGUgaXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IC1cbiAqIE9ic2VydmFibGU8QWN0aW9uPi5cbiAqXG4gKiBXZSBwcm92aWRlIGEgdHlwZSBwYXJhbWV0ZXIsIGV2ZW4gdGhvdWdoIFRTIHdpbGwgbm90IGluZmVyIGl0IGZyb20gdGhlXG4gKiBhcmd1bWVudHMsIHRvIHByZXNlcnZlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggb2xkIHZlcnNpb25zIG9mIG5ncnguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8ViBleHRlbmRzIEFjdGlvbj4oXG4gIC4uLmFsbG93ZWRUeXBlczogc3RyaW5nW11cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uLCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGUoXG4gIC4uLmFsbG93ZWRUeXBlczogc3RyaW5nW11cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uLCBBY3Rpb24+IHtcbiAgcmV0dXJuIGZpbHRlcigoYWN0aW9uOiBBY3Rpb24pID0+XG4gICAgYWxsb3dlZFR5cGVzLnNvbWUodHlwZSA9PiB0eXBlID09PSBhY3Rpb24udHlwZSlcbiAgKTtcbn1cbiJdfQ==