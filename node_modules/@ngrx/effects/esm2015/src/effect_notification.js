/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function EffectNotification() { }
if (false) {
    /** @type {?} */
    EffectNotification.prototype.effect;
    /** @type {?} */
    EffectNotification.prototype.propertyName;
    /** @type {?} */
    EffectNotification.prototype.sourceName;
    /** @type {?} */
    EffectNotification.prototype.sourceInstance;
    /** @type {?} */
    EffectNotification.prototype.notification;
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
export function verifyOutput(output, reporter) {
    reportErrorThrown(output, reporter);
    reportInvalidActions(output, reporter);
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function reportErrorThrown(output, reporter) {
    if (output.notification.kind === 'E') {
        reporter.handleError(output.notification.error);
    }
}
/**
 * @param {?} output
 * @param {?} reporter
 * @return {?}
 */
function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        /** @type {?} */
        const action = output.notification.value;
        /** @type {?} */
        const isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
        }
    }
}
/**
 * @param {?} action
 * @return {?}
 */
function isAction(action) {
    return action && action.type && typeof action.type === 'string';
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEffectName({ propertyName, sourceInstance, sourceName, }) {
    /** @type {?} */
    const isMethod = typeof sourceInstance[propertyName] === 'function';
    return `"${sourceName}.${propertyName}${isMethod ? '()' : ''}"`;
}
/**
 * @param {?} action
 * @return {?}
 */
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch (_a) {
        return action;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X25vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsd0NBTUM7OztJQUxDLG9DQUFrRDs7SUFDbEQsMENBQXFCOztJQUNyQix3Q0FBbUI7O0lBQ25CLDRDQUFvQjs7SUFDcEIsMENBQXNEOzs7Ozs7O0FBR3hELE1BQU0sVUFBVSxZQUFZLENBQzFCLE1BQTBCLEVBQzFCLFFBQXNCO0lBRXRCLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUEwQixFQUFFLFFBQXNCO0lBQzNFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ3BDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsb0JBQW9CLENBQzNCLE1BQTBCLEVBQzFCLFFBQXNCO0lBRXRCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFOztjQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLOztjQUNsQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXpDLElBQUksZUFBZSxFQUFFO1lBQ25CLFFBQVEsQ0FBQyxXQUFXLENBQ2xCLElBQUksS0FBSyxDQUNQLFVBQVUsYUFBYSxDQUNyQixNQUFNLENBQ1Asa0NBQWtDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN2RCxDQUNGLENBQUM7U0FDSDtLQUNGO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxTQUFTLFFBQVEsQ0FBQyxNQUFXO0lBQzNCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNsRSxDQUFDOzs7OztBQUVELFNBQVMsYUFBYSxDQUFDLEVBQ3JCLFlBQVksRUFDWixjQUFjLEVBQ2QsVUFBVSxHQUNTOztVQUNiLFFBQVEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVO0lBRW5FLE9BQU8sSUFBSSxVQUFVLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNsRSxDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLE1BQWlDO0lBQ2xELElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7SUFBQyxXQUFNO1FBQ04sT0FBTyxNQUFNLENBQUM7S0FDZjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVmZmVjdE5vdGlmaWNhdGlvbiB7XG4gIGVmZmVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgKCgpID0+IE9ic2VydmFibGU8YW55Pik7XG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuICBzb3VyY2VOYW1lOiBzdHJpbmc7XG4gIHNvdXJjZUluc3RhbmNlOiBhbnk7XG4gIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPEFjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQ+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5T3V0cHV0KFxuICBvdXRwdXQ6IEVmZmVjdE5vdGlmaWNhdGlvbixcbiAgcmVwb3J0ZXI6IEVycm9ySGFuZGxlclxuKSB7XG4gIHJlcG9ydEVycm9yVGhyb3duKG91dHB1dCwgcmVwb3J0ZXIpO1xuICByZXBvcnRJbnZhbGlkQWN0aW9ucyhvdXRwdXQsIHJlcG9ydGVyKTtcbn1cblxuZnVuY3Rpb24gcmVwb3J0RXJyb3JUaHJvd24ob3V0cHV0OiBFZmZlY3ROb3RpZmljYXRpb24sIHJlcG9ydGVyOiBFcnJvckhhbmRsZXIpIHtcbiAgaWYgKG91dHB1dC5ub3RpZmljYXRpb24ua2luZCA9PT0gJ0UnKSB7XG4gICAgcmVwb3J0ZXIuaGFuZGxlRXJyb3Iob3V0cHV0Lm5vdGlmaWNhdGlvbi5lcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwb3J0SW52YWxpZEFjdGlvbnMoXG4gIG91dHB1dDogRWZmZWN0Tm90aWZpY2F0aW9uLFxuICByZXBvcnRlcjogRXJyb3JIYW5kbGVyXG4pIHtcbiAgaWYgKG91dHB1dC5ub3RpZmljYXRpb24ua2luZCA9PT0gJ04nKSB7XG4gICAgY29uc3QgYWN0aW9uID0gb3V0cHV0Lm5vdGlmaWNhdGlvbi52YWx1ZTtcbiAgICBjb25zdCBpc0ludmFsaWRBY3Rpb24gPSAhaXNBY3Rpb24oYWN0aW9uKTtcblxuICAgIGlmIChpc0ludmFsaWRBY3Rpb24pIHtcbiAgICAgIHJlcG9ydGVyLmhhbmRsZUVycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYEVmZmVjdCAke2dldEVmZmVjdE5hbWUoXG4gICAgICAgICAgICBvdXRwdXRcbiAgICAgICAgICApfSBkaXNwYXRjaGVkIGFuIGludmFsaWQgYWN0aW9uOiAke3N0cmluZ2lmeShhY3Rpb24pfWBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBY3Rpb24oYWN0aW9uOiBhbnkpOiBhY3Rpb24gaXMgQWN0aW9uIHtcbiAgcmV0dXJuIGFjdGlvbiAmJiBhY3Rpb24udHlwZSAmJiB0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3ROYW1lKHtcbiAgcHJvcGVydHlOYW1lLFxuICBzb3VyY2VJbnN0YW5jZSxcbiAgc291cmNlTmFtZSxcbn06IEVmZmVjdE5vdGlmaWNhdGlvbikge1xuICBjb25zdCBpc01ldGhvZCA9IHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nO1xuXG4gIHJldHVybiBgXCIke3NvdXJjZU5hbWV9LiR7cHJvcGVydHlOYW1lfSR7aXNNZXRob2QgPyAnKCknIDogJyd9XCJgO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYWN0aW9uOiBBY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbn1cbiJdfQ==