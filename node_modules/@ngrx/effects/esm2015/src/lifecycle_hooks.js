/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * Interface to set an identifier for effect instances.
 *
 * By default, each Effects class is registered
 * once regardless of how many times the Effect class
 * is loaded. By implementing this interface, you define
 * a unique identifier to register an Effects class instance
 * multiple times.
 *
 * \@usageNotes
 *
 * ### Set an identifier for an Effects class
 *
 * ```ts
 * class EffectWithIdentifier implements OnIdentifyEffects {
 *  constructor(private effectIdentifier: string) {}
 *
 *  ngrxOnIdentifyEffects() {
 *    return this.effectIdentifier;
 *  }
 *
 * ```
 * @record
 */
export function OnIdentifyEffects() { }
if (false) {
    /**
     * \@description
     * String identifier to differentiate effect instances.
     * @return {?}
     */
    OnIdentifyEffects.prototype.ngrxOnIdentifyEffects = function () { };
}
/** @type {?} */
export const onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
/**
 * \@description
 * Interface to control the lifecycle of effects.
 *
 * By default, effects are merged and subscribed to the store. Implement the OnRunEffects interface to control the lifecycle of the resolved effects.
 *
 * \@usageNotes
 *
 * ### Implement the OnRunEffects interface on an Effects class
 *
 * ```ts
 * export class UserEffects implements OnRunEffects {
 *   constructor(private actions$: Actions) {}
 *
 *   ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
 *     return this.actions$.pipe(
 *       ofType('LOGGED_IN'),
 *       exhaustMap(() =>
 *         resolvedEffects$.pipe(
 *           takeUntil(this.actions$.pipe(ofType('LOGGED_OUT')))
 *         )
 *       )
 *     );
 *   }
 * }
 * ```
 * @record
 */
export function OnRunEffects() { }
if (false) {
    /**
     * \@description
     * Method to control the lifecycle of effects.
     * @type {?}
     */
    OnRunEffects.prototype.ngrxOnRunEffects;
}
/** @type {?} */
export const onRunEffectsKey = 'ngrxOnRunEffects';
/**
 * \@description
 * Interface to dispatch an action after effect registration.
 *
 * Implement this interface to dispatch a custom action after
 * the effect has been added. You can listen to this action
 * in the rest of the application to execute something after
 * the effect is registered.
 *
 * \@usageNotes
 *
 * ### Set an identifier for an Effects class
 *
 * ```ts
 * class EffectWithInitAction implements OnInitEffects {
 *  ngrxOnInitEffects() {
 *    return { type: '[EffectWithInitAction] Init' };
 *  }
 * ```
 * @record
 */
export function OnInitEffects() { }
if (false) {
    /**
     * \@description
     * Action to be dispatched after the effect is registered.
     * @return {?}
     */
    OnInitEffects.prototype.ngrxOnInitEffects = function () { };
}
/** @type {?} */
export const onInitEffects = 'ngrxOnInitEffects';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2hvb2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9lZmZlY3RzL3NyYy9saWZlY3ljbGVfaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsdUNBTUM7Ozs7Ozs7SUFEQyxvRUFBZ0M7OztBQUdsQyxNQUFNLE9BQU8sb0JBQW9CLEdBQy9CLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ3pCLGtDQU1DOzs7Ozs7O0lBREMsd0NBQWlDOzs7QUFHbkMsTUFBTSxPQUFPLGVBQWUsR0FBdUIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JyRSxtQ0FNQzs7Ozs7OztJQURDLDREQUE0Qjs7O0FBRzlCLE1BQU0sT0FBTyxhQUFhLEdBQXdCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVmZmVjdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogSW50ZXJmYWNlIHRvIHNldCBhbiBpZGVudGlmaWVyIGZvciBlZmZlY3QgaW5zdGFuY2VzLlxuICpcbiAqIEJ5IGRlZmF1bHQsIGVhY2ggRWZmZWN0cyBjbGFzcyBpcyByZWdpc3RlcmVkXG4gKiBvbmNlIHJlZ2FyZGxlc3Mgb2YgaG93IG1hbnkgdGltZXMgdGhlIEVmZmVjdCBjbGFzc1xuICogaXMgbG9hZGVkLiBCeSBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UsIHlvdSBkZWZpbmVcbiAqIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gcmVnaXN0ZXIgYW4gRWZmZWN0cyBjbGFzcyBpbnN0YW5jZVxuICogbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgU2V0IGFuIGlkZW50aWZpZXIgZm9yIGFuIEVmZmVjdHMgY2xhc3NcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgRWZmZWN0V2l0aElkZW50aWZpZXIgaW1wbGVtZW50cyBPbklkZW50aWZ5RWZmZWN0cyB7XG4gKiAgY29uc3RydWN0b3IocHJpdmF0ZSBlZmZlY3RJZGVudGlmaWVyOiBzdHJpbmcpIHt9XG4gKlxuICogIG5ncnhPbklkZW50aWZ5RWZmZWN0cygpIHtcbiAqICAgIHJldHVybiB0aGlzLmVmZmVjdElkZW50aWZpZXI7XG4gKiAgfVxuICpcbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uSWRlbnRpZnlFZmZlY3RzIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTdHJpbmcgaWRlbnRpZmllciB0byBkaWZmZXJlbnRpYXRlIGVmZmVjdCBpbnN0YW5jZXMuXG4gICAqL1xuICBuZ3J4T25JZGVudGlmeUVmZmVjdHMoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgb25JZGVudGlmeUVmZmVjdHNLZXk6IGtleW9mIE9uSWRlbnRpZnlFZmZlY3RzID1cbiAgJ25ncnhPbklkZW50aWZ5RWZmZWN0cyc7XG5cbmV4cG9ydCB0eXBlIG9uUnVuRWZmZWN0c0ZuID0gKFxuICByZXNvbHZlZEVmZmVjdHMkOiBPYnNlcnZhYmxlPEVmZmVjdE5vdGlmaWNhdGlvbj5cbikgPT4gT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogSW50ZXJmYWNlIHRvIGNvbnRyb2wgdGhlIGxpZmVjeWNsZSBvZiBlZmZlY3RzLlxuICpcbiAqIEJ5IGRlZmF1bHQsIGVmZmVjdHMgYXJlIG1lcmdlZCBhbmQgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUuIEltcGxlbWVudCB0aGUgT25SdW5FZmZlY3RzIGludGVyZmFjZSB0byBjb250cm9sIHRoZSBsaWZlY3ljbGUgb2YgdGhlIHJlc29sdmVkIGVmZmVjdHMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgSW1wbGVtZW50IHRoZSBPblJ1bkVmZmVjdHMgaW50ZXJmYWNlIG9uIGFuIEVmZmVjdHMgY2xhc3NcbiAqXG4gKiBgYGB0c1xuICogZXhwb3J0IGNsYXNzIFVzZXJFZmZlY3RzIGltcGxlbWVudHMgT25SdW5FZmZlY3RzIHtcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbiAqXG4gKiAgIG5ncnhPblJ1bkVmZmVjdHMocmVzb2x2ZWRFZmZlY3RzJDogT2JzZXJ2YWJsZTxFZmZlY3ROb3RpZmljYXRpb24+KSB7XG4gKiAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucyQucGlwZShcbiAqICAgICAgIG9mVHlwZSgnTE9HR0VEX0lOJyksXG4gKiAgICAgICBleGhhdXN0TWFwKCgpID0+XG4gKiAgICAgICAgIHJlc29sdmVkRWZmZWN0cyQucGlwZShcbiAqICAgICAgICAgICB0YWtlVW50aWwodGhpcy5hY3Rpb25zJC5waXBlKG9mVHlwZSgnTE9HR0VEX09VVCcpKSlcbiAqICAgICAgICAgKVxuICogICAgICAgKVxuICogICAgICk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uUnVuRWZmZWN0cyB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogTWV0aG9kIHRvIGNvbnRyb2wgdGhlIGxpZmVjeWNsZSBvZiBlZmZlY3RzLlxuICAgKi9cbiAgbmdyeE9uUnVuRWZmZWN0czogb25SdW5FZmZlY3RzRm47XG59XG5cbmV4cG9ydCBjb25zdCBvblJ1bkVmZmVjdHNLZXk6IGtleW9mIE9uUnVuRWZmZWN0cyA9ICduZ3J4T25SdW5FZmZlY3RzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEludGVyZmFjZSB0byBkaXNwYXRjaCBhbiBhY3Rpb24gYWZ0ZXIgZWZmZWN0IHJlZ2lzdHJhdGlvbi5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZGlzcGF0Y2ggYSBjdXN0b20gYWN0aW9uIGFmdGVyXG4gKiB0aGUgZWZmZWN0IGhhcyBiZWVuIGFkZGVkLiBZb3UgY2FuIGxpc3RlbiB0byB0aGlzIGFjdGlvblxuICogaW4gdGhlIHJlc3Qgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGV4ZWN1dGUgc29tZXRoaW5nIGFmdGVyXG4gKiB0aGUgZWZmZWN0IGlzIHJlZ2lzdGVyZWQuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgU2V0IGFuIGlkZW50aWZpZXIgZm9yIGFuIEVmZmVjdHMgY2xhc3NcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgRWZmZWN0V2l0aEluaXRBY3Rpb24gaW1wbGVtZW50cyBPbkluaXRFZmZlY3RzIHtcbiAqICBuZ3J4T25Jbml0RWZmZWN0cygpIHtcbiAqICAgIHJldHVybiB7IHR5cGU6ICdbRWZmZWN0V2l0aEluaXRBY3Rpb25dIEluaXQnIH07XG4gKiAgfVxuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT25Jbml0RWZmZWN0cyB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQWN0aW9uIHRvIGJlIGRpc3BhdGNoZWQgYWZ0ZXIgdGhlIGVmZmVjdCBpcyByZWdpc3RlcmVkLlxuICAgKi9cbiAgbmdyeE9uSW5pdEVmZmVjdHMoKTogQWN0aW9uO1xufVxuXG5leHBvcnQgY29uc3Qgb25Jbml0RWZmZWN0czoga2V5b2YgT25Jbml0RWZmZWN0cyA9ICduZ3J4T25Jbml0RWZmZWN0cyc7XG4iXX0=