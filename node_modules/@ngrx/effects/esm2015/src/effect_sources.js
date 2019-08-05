/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { dematerialize, exhaustMap, filter, groupBy, map, mergeMap, } from 'rxjs/operators';
import { verifyOutput } from './effect_notification';
import { mergeEffects } from './effects_resolver';
import { getSourceForInstance } from './effects_metadata';
import { onIdentifyEffectsKey, onRunEffectsKey, onInitEffects, } from './lifecycle_hooks';
export class EffectSources extends Subject {
    /**
     * @param {?} errorHandler
     * @param {?} store
     */
    constructor(errorHandler, store) {
        super();
        this.errorHandler = errorHandler;
        this.store = store;
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.next(effectSourceInstance);
        if (onInitEffects in effectSourceInstance &&
            typeof effectSourceInstance[onInitEffects] === 'function') {
            this.store.dispatch(effectSourceInstance[onInitEffects]());
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    toActions() {
        return this.pipe(groupBy(getSourceForInstance), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        source$ => source$.pipe(groupBy(effectsInstance)))), mergeMap((/**
         * @param {?} source$
         * @return {?}
         */
        source$ => source$.pipe(exhaustMap(resolveEffectSource), map((/**
         * @param {?} output
         * @return {?}
         */
        output => {
            verifyOutput(output, this.errorHandler);
            return output.notification;
        })), filter((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => notification.kind === 'N')), dematerialize()))));
    }
}
EffectSources.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EffectSources.ctorParameters = () => [
    { type: ErrorHandler },
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectSources.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    EffectSources.prototype.store;
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function effectsInstance(sourceInstance) {
    if (onIdentifyEffectsKey in sourceInstance &&
        typeof sourceInstance[onIdentifyEffectsKey] === 'function') {
        return sourceInstance[onIdentifyEffectsKey]();
    }
    return '';
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function resolveEffectSource(sourceInstance) {
    /** @type {?} */
    const mergedEffects$ = mergeEffects(sourceInstance);
    if (isOnRunEffects(sourceInstance)) {
        return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
}
/**
 * @param {?} sourceInstance
 * @return {?}
 */
function isOnRunEffects(sourceInstance) {
    /** @type {?} */
    const source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X3NvdXJjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc3JjL2VmZmVjdF9zb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLE1BQU0sRUFDTixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsR0FDVCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixlQUFlLEVBR2YsYUFBYSxHQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFHM0IsTUFBTSxPQUFPLGFBQWMsU0FBUSxPQUFZOzs7OztJQUM3QyxZQUFvQixZQUEwQixFQUFVLEtBQWlCO1FBQ3ZFLEtBQUssRUFBRSxDQUFDO1FBRFUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO0lBRXpFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLG9CQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFaEMsSUFDRSxhQUFhLElBQUksb0JBQW9CO1lBQ3JDLE9BQU8sb0JBQW9CLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVSxFQUN6RDtZQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7O0lBS0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFDN0IsUUFBUTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxFQUMzRCxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsT0FBTyxDQUFDLElBQUksQ0FDVixVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFDL0IsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFeEMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFDSixDQUFDLFlBQVksRUFBd0MsRUFBRSxDQUNyRCxZQUFZLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFDNUIsRUFDRCxhQUFhLEVBQUUsQ0FDaEIsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4Q0YsVUFBVTs7OztZQXZCRixZQUFZO1lBQ0osS0FBSzs7Ozs7OztJQXdCUixxQ0FBa0M7Ozs7O0lBQUUsOEJBQXlCOzs7Ozs7QUF5QzNFLFNBQVMsZUFBZSxDQUFDLGNBQW1CO0lBQzFDLElBQ0Usb0JBQW9CLElBQUksY0FBYztRQUN0QyxPQUFPLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLFVBQVUsRUFDMUQ7UUFDQSxPQUFPLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7S0FDL0M7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7Ozs7O0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxjQUFtQjs7VUFDeEMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFFbkQsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDOzs7OztBQUVELFNBQVMsY0FBYyxDQUFDLGNBRXZCOztVQUNPLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7SUFFbkQsT0FBTyxDQUNMLGVBQWUsSUFBSSxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssVUFBVSxDQUMzRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVtYXRlcmlhbGl6ZSxcbiAgZXhoYXVzdE1hcCxcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHZlcmlmeU91dHB1dCB9IGZyb20gJy4vZWZmZWN0X25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBtZXJnZUVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHNfcmVzb2x2ZXInO1xuaW1wb3J0IHsgZ2V0U291cmNlRm9ySW5zdGFuY2UgfSBmcm9tICcuL2VmZmVjdHNfbWV0YWRhdGEnO1xuaW1wb3J0IHtcbiAgb25JZGVudGlmeUVmZmVjdHNLZXksXG4gIG9uUnVuRWZmZWN0c0tleSxcbiAgb25SdW5FZmZlY3RzRm4sXG4gIE9uUnVuRWZmZWN0cyxcbiAgb25Jbml0RWZmZWN0cyxcbn0gZnJvbSAnLi9saWZlY3ljbGVfaG9va3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWZmZWN0U291cmNlcyBleHRlbmRzIFN1YmplY3Q8YW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5uZXh0KGVmZmVjdFNvdXJjZUluc3RhbmNlKTtcblxuICAgIGlmIChcbiAgICAgIG9uSW5pdEVmZmVjdHMgaW4gZWZmZWN0U291cmNlSW5zdGFuY2UgJiZcbiAgICAgIHR5cGVvZiBlZmZlY3RTb3VyY2VJbnN0YW5jZVtvbkluaXRFZmZlY3RzXSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChlZmZlY3RTb3VyY2VJbnN0YW5jZVtvbkluaXRFZmZlY3RzXSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0b0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5waXBlKFxuICAgICAgZ3JvdXBCeShnZXRTb3VyY2VGb3JJbnN0YW5jZSksXG4gICAgICBtZXJnZU1hcChzb3VyY2UkID0+IHNvdXJjZSQucGlwZShncm91cEJ5KGVmZmVjdHNJbnN0YW5jZSkpKSxcbiAgICAgIG1lcmdlTWFwKHNvdXJjZSQgPT5cbiAgICAgICAgc291cmNlJC5waXBlKFxuICAgICAgICAgIGV4aGF1c3RNYXAocmVzb2x2ZUVmZmVjdFNvdXJjZSksXG4gICAgICAgICAgbWFwKG91dHB1dCA9PiB7XG4gICAgICAgICAgICB2ZXJpZnlPdXRwdXQob3V0cHV0LCB0aGlzLmVycm9ySGFuZGxlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQubm90aWZpY2F0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChub3RpZmljYXRpb24pOiBub3RpZmljYXRpb24gaXMgTm90aWZpY2F0aW9uPEFjdGlvbj4gPT5cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJ1xuICAgICAgICAgICksXG4gICAgICAgICAgZGVtYXRlcmlhbGl6ZSgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVmZmVjdHNJbnN0YW5jZShzb3VyY2VJbnN0YW5jZTogYW55KSB7XG4gIGlmIChcbiAgICBvbklkZW50aWZ5RWZmZWN0c0tleSBpbiBzb3VyY2VJbnN0YW5jZSAmJlxuICAgIHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtvbklkZW50aWZ5RWZmZWN0c0tleV0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIHNvdXJjZUluc3RhbmNlW29uSWRlbnRpZnlFZmZlY3RzS2V5XSgpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRWZmZWN0U291cmNlKHNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgY29uc3QgbWVyZ2VkRWZmZWN0cyQgPSBtZXJnZUVmZmVjdHMoc291cmNlSW5zdGFuY2UpO1xuXG4gIGlmIChpc09uUnVuRWZmZWN0cyhzb3VyY2VJbnN0YW5jZSkpIHtcbiAgICByZXR1cm4gc291cmNlSW5zdGFuY2UubmdyeE9uUnVuRWZmZWN0cyhtZXJnZWRFZmZlY3RzJCk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkRWZmZWN0cyQ7XG59XG5cbmZ1bmN0aW9uIGlzT25SdW5FZmZlY3RzKHNvdXJjZUluc3RhbmNlOiB7XG4gIFtvblJ1bkVmZmVjdHNLZXldPzogb25SdW5FZmZlY3RzRm47XG59KTogc291cmNlSW5zdGFuY2UgaXMgT25SdW5FZmZlY3RzIHtcbiAgY29uc3Qgc291cmNlID0gZ2V0U291cmNlRm9ySW5zdGFuY2Uoc291cmNlSW5zdGFuY2UpO1xuXG4gIHJldHVybiAoXG4gICAgb25SdW5FZmZlY3RzS2V5IGluIHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlW29uUnVuRWZmZWN0c0tleV0gPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cbiJdfQ==