/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { merge } from 'rxjs';
import { ignoreElements, map, materialize } from 'rxjs/operators';
import { getSourceForInstance, getSourceMetadata } from './effects_metadata';
/**
 * @param {?} sourceInstance
 * @return {?}
 */
export function mergeEffects(sourceInstance) {
    /** @type {?} */
    const sourceName = getSourceForInstance(sourceInstance).constructor.name;
    /** @type {?} */
    const observables = getSourceMetadata(sourceInstance).map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ propertyName, dispatch }) => {
        /** @type {?} */
        const observable = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        if (dispatch === false) {
            return observable.pipe(ignoreElements());
        }
        /** @type {?} */
        const materialized$ = observable.pipe(materialize());
        return materialized$.pipe(map((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => ({
            effect: sourceInstance[propertyName],
            notification,
            propertyName,
            sourceName,
            sourceInstance,
        }))));
    }));
    return merge(...observables);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRTdFLE1BQU0sVUFBVSxZQUFZLENBQzFCLGNBQW1COztVQUViLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTs7VUFFbEUsV0FBVyxHQUFzQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHOzs7O0lBQzFFLENBQUMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQWtDLEVBQUU7O2NBQ3ZELFVBQVUsR0FDZCxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO1lBQ2hELENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFFbEMsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3RCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzFDOztjQUVLLGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FDdkIsR0FBRzs7OztRQUNELENBQUMsWUFBa0MsRUFBc0IsRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDcEMsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsY0FBYztTQUNmLENBQUMsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDLEVBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBtZXJnZSwgTm90aWZpY2F0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpZ25vcmVFbGVtZW50cywgbWFwLCBtYXRlcmlhbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRWZmZWN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9lZmZlY3Rfbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlLCBnZXRTb3VyY2VNZXRhZGF0YSB9IGZyb20gJy4vZWZmZWN0c19tZXRhZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVmZmVjdHMoXG4gIHNvdXJjZUluc3RhbmNlOiBhbnlcbik6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiB7XG4gIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRTb3VyY2VGb3JJbnN0YW5jZShzb3VyY2VJbnN0YW5jZSkuY29uc3RydWN0b3IubmFtZTtcblxuICBjb25zdCBvYnNlcnZhYmxlczogT2JzZXJ2YWJsZTxhbnk+W10gPSBnZXRTb3VyY2VNZXRhZGF0YShzb3VyY2VJbnN0YW5jZSkubWFwKFxuICAgICh7IHByb3BlcnR5TmFtZSwgZGlzcGF0Y2ggfSk6IE9ic2VydmFibGU8RWZmZWN0Tm90aWZpY2F0aW9uPiA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4gPVxuICAgICAgICB0eXBlb2Ygc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gc291cmNlSW5zdGFuY2VbcHJvcGVydHlOYW1lXSgpXG4gICAgICAgICAgOiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBpZiAoZGlzcGF0Y2ggPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoaWdub3JlRWxlbWVudHMoKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGVyaWFsaXplZCQgPSBvYnNlcnZhYmxlLnBpcGUobWF0ZXJpYWxpemUoKSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbGl6ZWQkLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248QWN0aW9uPik6IEVmZmVjdE5vdGlmaWNhdGlvbiA9PiAoe1xuICAgICAgICAgICAgZWZmZWN0OiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgc291cmNlTmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiBtZXJnZSguLi5vYnNlcnZhYmxlcyk7XG59XG4iXX0=