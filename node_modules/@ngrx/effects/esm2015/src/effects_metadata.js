/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { compose } from '@ngrx/store';
/** @type {?} */
const METADATA_KEY = '__@ngrx/effects__';
/**
 * @record
 * @template T
 */
export function EffectMetadata() { }
if (false) {
    /** @type {?} */
    EffectMetadata.prototype.propertyName;
    /** @type {?} */
    EffectMetadata.prototype.dispatch;
}
/**
 * @template T
 * @param {?} sourceProto
 * @return {?}
 */
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? ((/** @type {?} */ (sourceProto.constructor)))[METADATA_KEY]
        : [];
}
/**
 * @template T
 * @param {?} sourceProto
 * @param {?} entries
 * @return {?}
 */
function setEffectMetadataEntries(sourceProto, entries) {
    /** @type {?} */
    const constructor = sourceProto.constructor;
    /** @type {?} */
    const meta = constructor.hasOwnProperty(METADATA_KEY)
        ? ((/** @type {?} */ (constructor)))[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
/**
 * @template T
 * @param {?=} __0
 * @return {?}
 */
export function Effect({ dispatch = true } = {}) {
    return (/** @type {?} */ ((/**
     * @template K
     * @param {?} target
     * @param {?} propertyName
     * @return {?}
     */
    function (target, propertyName) {
        /** @type {?} */
        const metadata = { propertyName, dispatch };
        setEffectMetadataEntries(target, [metadata]);
    })));
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getSourceMetadata(instance) {
    return compose(getEffectMetadataEntries, getSourceForInstance)(instance);
}
/**
 * @template T
 * @param {?} instance
 * @return {?}
 */
export function getEffectsMetadata(instance) {
    /** @type {?} */
    const metadata = {};
    for (const { propertyName, dispatch } of getSourceMetadata(instance)) {
        metadata[propertyName] = { dispatch };
    }
    return metadata;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0c19tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0c19tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFFaEMsWUFBWSxHQUFHLG1CQUFtQjs7Ozs7QUFFeEMsb0NBR0M7OztJQUZDLHNDQUF1Qzs7SUFDdkMsa0NBQWtCOzs7Ozs7O0FBR3BCLFNBQVMsd0JBQXdCLENBQUksV0FBYztJQUNqRCxPQUFPLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQyxtQkFBQSxXQUFXLENBQUMsV0FBVyxFQUFPLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUM7Ozs7Ozs7QUFFRCxTQUFTLHdCQUF3QixDQUMvQixXQUFjLEVBQ2QsT0FBaUM7O1VBRTNCLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVzs7VUFDckMsSUFBSSxHQUE2QixXQUFXLENBQUMsY0FBYyxDQUMvRCxZQUFZLENBQ2I7UUFDQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxXQUFXLEVBQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdELFlBQVksQ0FDYjtJQUNMLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBSSxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ2hELE9BQU87Ozs7OztJQUFBLFVBQ0wsTUFBUyxFQUNULFlBQWU7O2NBRVQsUUFBUSxHQUFzQixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUU7UUFDOUQsd0JBQXdCLENBQUksTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDLEdBQXVELENBQUM7QUFDM0QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFJLFFBQVc7SUFDakQsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBSSxRQUFXO0lBQzlDLE9BQU8sT0FBTyxDQUNaLHdCQUF3QixFQUN4QixvQkFBb0IsQ0FDckIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNkLENBQUM7Ozs7OztBQU1ELE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxRQUFXOztVQUN6QyxRQUFRLEdBQXVCLEVBQUU7SUFFdkMsS0FBSyxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BFLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQ3ZDO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmNvbnN0IE1FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfXyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWZmZWN0TWV0YWRhdGE8VD4ge1xuICBwcm9wZXJ0eU5hbWU6IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPjtcbiAgZGlzcGF0Y2g6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGdldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihzb3VyY2VQcm90bzogVCk6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiB7XG4gIHJldHVybiBzb3VyY2VQcm90by5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShNRVRBREFUQV9LRVkpXG4gICAgPyAoc291cmNlUHJvdG8uY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBbXTtcbn1cblxuZnVuY3Rpb24gc2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQ+KFxuICBzb3VyY2VQcm90bzogVCxcbiAgZW50cmllczogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+XG4pIHtcbiAgY29uc3QgY29uc3RydWN0b3IgPSBzb3VyY2VQcm90by5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgbWV0YTogQXJyYXk8RWZmZWN0TWV0YWRhdGE8VD4+ID0gY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoXG4gICAgTUVUQURBVEFfS0VZXG4gIClcbiAgICA/IChjb25zdHJ1Y3RvciBhcyBhbnkpW01FVEFEQVRBX0tFWV1cbiAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgTUVUQURBVEFfS0VZLCB7IHZhbHVlOiBbXSB9KVtcbiAgICAgICAgTUVUQURBVEFfS0VZXG4gICAgICBdO1xuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShtZXRhLCBlbnRyaWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdDxUPih7IGRpc3BhdGNoID0gdHJ1ZSB9ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbjxLIGV4dGVuZHMgRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+PihcbiAgICB0YXJnZXQ6IFQsXG4gICAgcHJvcGVydHlOYW1lOiBLXG4gICkge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBFZmZlY3RNZXRhZGF0YTxUPiA9IHsgcHJvcGVydHlOYW1lLCBkaXNwYXRjaCB9O1xuICAgIHNldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPih0YXJnZXQsIFttZXRhZGF0YV0pO1xuICB9IGFzICh0YXJnZXQ6IHt9LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IHN5bWJvbCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZUZvckluc3RhbmNlPFQ+KGluc3RhbmNlOiBUKTogVCB7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlTWV0YWRhdGE8VD4oaW5zdGFuY2U6IFQpOiBBcnJheTxFZmZlY3RNZXRhZGF0YTxUPj4ge1xuICByZXR1cm4gY29tcG9zZShcbiAgICBnZXRFZmZlY3RNZXRhZGF0YUVudHJpZXMsXG4gICAgZ2V0U291cmNlRm9ySW5zdGFuY2VcbiAgKShpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCB0eXBlIEVmZmVjdHNNZXRhZGF0YTxUPiA9IHtcbiAgW2tleSBpbiBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz5dPzogeyBkaXNwYXRjaDogYm9vbGVhbiB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0c01ldGFkYXRhPFQ+KGluc3RhbmNlOiBUKTogRWZmZWN0c01ldGFkYXRhPFQ+IHtcbiAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdHNNZXRhZGF0YTxUPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGRpc3BhdGNoIH0gb2YgZ2V0U291cmNlTWV0YWRhdGEoaW5zdGFuY2UpKSB7XG4gICAgbWV0YWRhdGFbcHJvcGVydHlOYW1lXSA9IHsgZGlzcGF0Y2ggfTtcbiAgfVxuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cbiJdfQ==