/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Inject, Optional } from '@angular/core';
import { Store, StoreRootModule, StoreFeatureModule, } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import { ROOT_EFFECTS } from './tokens';
/** @type {?} */
export const ROOT_EFFECTS_INIT = '@ngrx/effects/init';
export class EffectsRootModule {
    /**
     * @param {?} sources
     * @param {?} runner
     * @param {?} store
     * @param {?} rootEffects
     * @param {?} storeRootModule
     * @param {?} storeFeatureModule
     */
    constructor(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach((/**
         * @param {?} effectSourceInstance
         * @return {?}
         */
        effectSourceInstance => sources.addEffects(effectSourceInstance)));
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    /**
     * @param {?} effectSourceInstance
     * @return {?}
     */
    addEffects(effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    }
}
EffectsRootModule.decorators = [
    { type: NgModule, args: [{},] }
];
/** @nocollapse */
EffectsRootModule.ctorParameters = () => [
    { type: EffectSources },
    { type: EffectsRunner },
    { type: Store },
    { type: Array, decorators: [{ type: Inject, args: [ROOT_EFFECTS,] }] },
    { type: StoreRootModule, decorators: [{ type: Optional }] },
    { type: StoreFeatureModule, decorators: [{ type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EffectsRootModule.prototype.sources;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yb290X21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yb290X21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFFTCxLQUFLLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBRXhDLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxvQkFBb0I7QUFHckQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7O0lBQzVCLFlBQ1UsT0FBc0IsRUFDOUIsTUFBcUIsRUFDckIsS0FBaUIsRUFDSyxXQUFrQixFQUM1QixlQUFnQyxFQUNoQyxrQkFBc0M7UUFMMUMsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQU85QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixXQUFXLENBQUMsT0FBTzs7OztRQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FDekMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUN6QyxDQUFDO1FBRUYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsb0JBQXlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBckJGLFFBQVEsU0FBQyxFQUFFOzs7O1lBTEgsYUFBYTtZQURiLGFBQWE7WUFKcEIsS0FBSzt3Q0FnQkYsTUFBTSxTQUFDLFlBQVk7WUFmdEIsZUFBZSx1QkFnQlosUUFBUTtZQWZYLGtCQUFrQix1QkFnQmYsUUFBUTs7Ozs7OztJQUxULG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTdG9yZU1vZHVsZSxcbiAgU3RvcmUsXG4gIFN0b3JlUm9vdE1vZHVsZSxcbiAgU3RvcmVGZWF0dXJlTW9kdWxlLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzUnVubmVyIH0gZnJvbSAnLi9lZmZlY3RzX3J1bm5lcic7XG5pbXBvcnQgeyBFZmZlY3RTb3VyY2VzIH0gZnJvbSAnLi9lZmZlY3Rfc291cmNlcyc7XG5pbXBvcnQgeyBST09UX0VGRkVDVFMgfSBmcm9tICcuL3Rva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBST09UX0VGRkVDVFNfSU5JVCA9ICdAbmdyeC9lZmZlY3RzL2luaXQnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRWZmZWN0c1Jvb3RNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNvdXJjZXM6IEVmZmVjdFNvdXJjZXMsXG4gICAgcnVubmVyOiBFZmZlY3RzUnVubmVyLFxuICAgIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIEBJbmplY3QoUk9PVF9FRkZFQ1RTKSByb290RWZmZWN0czogYW55W10sXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVSb290TW9kdWxlOiBTdG9yZVJvb3RNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgc3RvcmVGZWF0dXJlTW9kdWxlOiBTdG9yZUZlYXR1cmVNb2R1bGVcbiAgKSB7XG4gICAgcnVubmVyLnN0YXJ0KCk7XG5cbiAgICByb290RWZmZWN0cy5mb3JFYWNoKGVmZmVjdFNvdXJjZUluc3RhbmNlID0+XG4gICAgICBzb3VyY2VzLmFkZEVmZmVjdHMoZWZmZWN0U291cmNlSW5zdGFuY2UpXG4gICAgKTtcblxuICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogUk9PVF9FRkZFQ1RTX0lOSVQgfSk7XG4gIH1cblxuICBhZGRFZmZlY3RzKGVmZmVjdFNvdXJjZUluc3RhbmNlOiBhbnkpIHtcbiAgICB0aGlzLnNvdXJjZXMuYWRkRWZmZWN0cyhlZmZlY3RTb3VyY2VJbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==