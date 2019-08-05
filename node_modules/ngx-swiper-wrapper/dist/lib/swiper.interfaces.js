/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
/** @type {?} */
export var SwiperEvents = [
    'init',
    'beforeDestroy',
    'scroll',
    'progress',
    'keyPress',
    'beforeResize',
    'afterResize',
    'resize',
    'breakpoint',
    'beforeResize',
    'sliderMove',
    'slideChange',
    'setTranslate',
    'setTransition',
    'fromEdge',
    'reachEnd',
    'reachBeginning',
    'autoplay',
    'autoplayStop',
    'autoplayStart',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'scrollDragEnd',
    'scrollDragMove',
    'scrollDragStart',
    'swiperTap',
    'swiperClick',
    'swiperDoubleTap',
    'swiperTouchEnd',
    'swiperTouchMove',
    'swiperTouchStart',
    'swiperTouchMoveOpposite',
    'swiperTransitionEnd',
    'swiperTransitionStart',
    'slideNextTransitionEnd',
    'slideNextTransitionStart',
    'slidePrevTransitionEnd',
    'slidePrevTransitionStart',
    'slideChangeTransitionEnd',
    'slideChangeTransitionStart'
];
/**
 * @record
 */
export function SwiperConfigInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.init;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.initialSlide;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.direction;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.speed;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.setWrapperSize;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.virtualTranslate;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.width;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.height;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.autoHeight;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.roundLengths;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.nested;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.uniqueNavElements;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.effect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.runCallbacksOnInit;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.watchOverflow;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.spaceBetween;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerView;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerColumn;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerColumnFill;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesPerGroup;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.centeredSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesOffsetBefore;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidesOffsetAfter;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.normalizeSlideIndex;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.centerInsufficientSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.grabCursor;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchEventsTarget;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchAngle;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.simulateTouch;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.shortSwipes;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.longSwipes;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.longSwipesRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.longSwipesMs;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.followFinger;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.allowTouchMove;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.threshold;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchMoveStopPropagation;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.iOSEdgeSwipeDetection;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.iOSEdgeSwipeThreshold;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.touchReleaseOnEdges;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.passiveListeners;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.resistance;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.resistanceRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preventInteractionOnTransition;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.allowSlidePrev;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.allowSlideNext;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.noSwiping;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.noSwipingClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.noSwipingSelector;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.swipeHandler;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preventClicks;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preventClicksPropagation;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideToClickedSlide;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeMode;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentum;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumVelocityRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumBounce;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMomentumBounceRatio;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeMinimumVelocity;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.freeModeSticky;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.watchSlidesProgress;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.watchSlidesVisibility;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.preloadImages;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.updateOnImagesReady;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loop;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loopAdditionalSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loopedSlides;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.loopFillGroupWithBlank;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.breakpoints;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.breakpointsInverse;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.observer;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.observeParents;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.containerModifierClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideActiveClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicatedActiveClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideVisibleClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicateClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideNextClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicatedNextClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slidePrevClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.slideDuplicatedPrevClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.wrapperClass;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.fadeEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.flipEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.cubeEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.coverflowEffect;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.parallax;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.a11y;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.lazy;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.zoom;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.thumbs;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.history;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.virtual;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.autoplay;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.keyboard;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.scrollbar;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.mousewheel;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.controller;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.navigation;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.pagination;
    /** @type {?|undefined} */
    SwiperConfigInterface.prototype.hashNavigation;
}
/**
 * @record
 */
export function SwiperA11YInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.prevSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.nextSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.firstSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.lastSlideMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.paginationBulletMessage;
    /** @type {?|undefined} */
    SwiperA11YInterface.prototype.notificationClass;
}
/**
 * @record
 */
export function SwiperLazyInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadPrevNext;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadPrevNextAmount;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadOnTransitionStart;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.elementClass;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadingClass;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.loadedClass;
    /** @type {?|undefined} */
    SwiperLazyInterface.prototype.preloaderClass;
}
/**
 * @record
 */
export function SwiperZoomInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.maxRatio;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.minRatio;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.toggle;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.containerClass;
    /** @type {?|undefined} */
    SwiperZoomInterface.prototype.zoomedSlideClass;
}
/**
 * @record
 */
export function SwiperThumbsInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperThumbsInterface.prototype.swiper;
    /** @type {?|undefined} */
    SwiperThumbsInterface.prototype.slideThumbActiveClass;
    /** @type {?|undefined} */
    SwiperThumbsInterface.prototype.thumbsContainerClass;
}
/**
 * @record
 */
export function SwiperHistoryInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperHistoryInterface.prototype.replaceState;
    /** @type {?|undefined} */
    SwiperHistoryInterface.prototype.key;
}
/**
 * @record
 */
export function SwiperVirtualInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.slides;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.cache;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.addSliderBefore;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.addSliderAfter;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.renderSlide;
    /** @type {?|undefined} */
    SwiperVirtualInterface.prototype.renderExternal;
}
/**
 * @record
 */
export function SwiperKeyboardInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperKeyboardInterface.prototype.enabled;
    /** @type {?|undefined} */
    SwiperKeyboardInterface.prototype.onlyInViewport;
}
/**
 * @record
 */
export function SwiperAutoplayInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.delay;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.stopOnLastSlide;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.disableOnInteraction;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.reverseDirection;
    /** @type {?|undefined} */
    SwiperAutoplayInterface.prototype.waitForTransition;
}
/**
 * @record
 */
export function SwiperScrollbarInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.el;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.hide;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.draggable;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.snapOnRelease;
    /** @type {?|undefined} */
    SwiperScrollbarInterface.prototype.dragSize;
}
/**
 * @record
 */
export function SwiperControllerInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperControllerInterface.prototype.control;
    /** @type {?|undefined} */
    SwiperControllerInterface.prototype.inverse;
    /** @type {?|undefined} */
    SwiperControllerInterface.prototype.by;
}
/**
 * @record
 */
export function SwiperNavigationInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.nextEl;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.prevEl;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.hideOnClick;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.disabledClass;
    /** @type {?|undefined} */
    SwiperNavigationInterface.prototype.hiddenClass;
}
/**
 * @record
 */
export function SwiperPaginationInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.el;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.type;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.bulletElement;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.dynamicBullets;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.dynamicMainBullets;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.hideOnClick;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.clickable;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderBullet;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderFraction;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderProgressbar;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.renderCustom;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.bulletClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.bulletActiveClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.modifierClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.currentClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.totalClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.hiddenClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.progressbarFillClass;
    /** @type {?|undefined} */
    SwiperPaginationInterface.prototype.clickableClass;
}
/**
 * @record
 */
export function SwiperMousewheelInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.forceToAxis;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.releaseOnEdges;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.invert;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.sensitivity;
    /** @type {?|undefined} */
    SwiperMousewheelInterface.prototype.eventsTarget;
}
/**
 * @record
 */
export function SwiperHashNavigationInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperHashNavigationInterface.prototype.watchState;
    /** @type {?|undefined} */
    SwiperHashNavigationInterface.prototype.replaceState;
}
/**
 * @record
 */
export function SwiperFadeEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperFadeEffectInterface.prototype.crossFade;
}
/**
 * @record
 */
export function SwiperFlipEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperFlipEffectInterface.prototype.limitRotation;
    /** @type {?|undefined} */
    SwiperFlipEffectInterface.prototype.slideShadows;
}
/**
 * @record
 */
export function SwiperCubeEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.shadow;
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.shadowScale;
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.shadowOffset;
    /** @type {?|undefined} */
    SwiperCubeEffectInterface.prototype.slideShadows;
}
/**
 * @record
 */
export function SwiperCoverflowEffectInterface() { }
if (false) {
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.depth;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.rotate;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.stretch;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.modifier;
    /** @type {?|undefined} */
    SwiperCoverflowEffectInterface.prototype.slideShadows;
}
/**
 * @record
 */
export function SwiperBreakpointsInterface() { }
var SwiperConfig = /** @class */ (function () {
    function SwiperConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    SwiperConfig.prototype.assign = /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    function (config, target) {
        if (config === void 0) { config = {}; }
        target = target || this;
        for (var key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
                (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    };
    return SwiperConfig;
}());
export { SwiperConfig };
if (false) {
    /** @type {?} */
    SwiperConfig.prototype.on;
    /** @type {?} */
    SwiperConfig.prototype.init;
    /** @type {?} */
    SwiperConfig.prototype.initialSlide;
    /** @type {?} */
    SwiperConfig.prototype.direction;
    /** @type {?} */
    SwiperConfig.prototype.speed;
    /** @type {?} */
    SwiperConfig.prototype.setWrapperSize;
    /** @type {?} */
    SwiperConfig.prototype.virtualTranslate;
    /** @type {?} */
    SwiperConfig.prototype.width;
    /** @type {?} */
    SwiperConfig.prototype.height;
    /** @type {?} */
    SwiperConfig.prototype.autoHeight;
    /** @type {?} */
    SwiperConfig.prototype.roundLengths;
    /** @type {?} */
    SwiperConfig.prototype.nested;
    /** @type {?} */
    SwiperConfig.prototype.uniqueNavElements;
    /** @type {?} */
    SwiperConfig.prototype.effect;
    /** @type {?} */
    SwiperConfig.prototype.runCallbacksOnInit;
    /** @type {?} */
    SwiperConfig.prototype.watchOverflow;
    /** @type {?} */
    SwiperConfig.prototype.spaceBetween;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerView;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerColumn;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerColumnFill;
    /** @type {?} */
    SwiperConfig.prototype.slidesPerGroup;
    /** @type {?} */
    SwiperConfig.prototype.centeredSlides;
    /** @type {?} */
    SwiperConfig.prototype.slidesOffsetBefore;
    /** @type {?} */
    SwiperConfig.prototype.slidesOffsetAfter;
    /** @type {?} */
    SwiperConfig.prototype.normalizeSlideIndex;
    /** @type {?} */
    SwiperConfig.prototype.centerInsufficientSlides;
    /** @type {?} */
    SwiperConfig.prototype.grabCursor;
    /** @type {?} */
    SwiperConfig.prototype.touchEventsTarget;
    /** @type {?} */
    SwiperConfig.prototype.touchRatio;
    /** @type {?} */
    SwiperConfig.prototype.touchAngle;
    /** @type {?} */
    SwiperConfig.prototype.simulateTouch;
    /** @type {?} */
    SwiperConfig.prototype.shortSwipes;
    /** @type {?} */
    SwiperConfig.prototype.longSwipes;
    /** @type {?} */
    SwiperConfig.prototype.longSwipesRatio;
    /** @type {?} */
    SwiperConfig.prototype.longSwipesMs;
    /** @type {?} */
    SwiperConfig.prototype.followFinger;
    /** @type {?} */
    SwiperConfig.prototype.allowTouchMove;
    /** @type {?} */
    SwiperConfig.prototype.threshold;
    /** @type {?} */
    SwiperConfig.prototype.touchMoveStopPropagation;
    /** @type {?} */
    SwiperConfig.prototype.iOSEdgeSwipeDetection;
    /** @type {?} */
    SwiperConfig.prototype.iOSEdgeSwipeThreshold;
    /** @type {?} */
    SwiperConfig.prototype.touchReleaseOnEdges;
    /** @type {?} */
    SwiperConfig.prototype.passiveListeners;
    /** @type {?} */
    SwiperConfig.prototype.resistance;
    /** @type {?} */
    SwiperConfig.prototype.resistanceRatio;
    /** @type {?} */
    SwiperConfig.prototype.preventInteractionOnTransition;
    /** @type {?} */
    SwiperConfig.prototype.allowSlidePrev;
    /** @type {?} */
    SwiperConfig.prototype.allowSlideNext;
    /** @type {?} */
    SwiperConfig.prototype.noSwiping;
    /** @type {?} */
    SwiperConfig.prototype.noSwipingClass;
    /** @type {?} */
    SwiperConfig.prototype.noSwipingSelector;
    /** @type {?} */
    SwiperConfig.prototype.swipeHandler;
    /** @type {?} */
    SwiperConfig.prototype.preventClicks;
    /** @type {?} */
    SwiperConfig.prototype.preventClicksPropagation;
    /** @type {?} */
    SwiperConfig.prototype.slideToClickedSlide;
    /** @type {?} */
    SwiperConfig.prototype.freeMode;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentum;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumVelocityRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumBounce;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMomentumBounceRatio;
    /** @type {?} */
    SwiperConfig.prototype.freeModeMinimumVelocity;
    /** @type {?} */
    SwiperConfig.prototype.freeModeSticky;
    /** @type {?} */
    SwiperConfig.prototype.watchSlidesProgress;
    /** @type {?} */
    SwiperConfig.prototype.watchSlidesVisibility;
    /** @type {?} */
    SwiperConfig.prototype.preloadImages;
    /** @type {?} */
    SwiperConfig.prototype.updateOnImagesReady;
    /** @type {?} */
    SwiperConfig.prototype.loop;
    /** @type {?} */
    SwiperConfig.prototype.loopAdditionalSlides;
    /** @type {?} */
    SwiperConfig.prototype.loopedSlides;
    /** @type {?} */
    SwiperConfig.prototype.loopFillGroupWithBlank;
    /** @type {?} */
    SwiperConfig.prototype.breakpoints;
    /** @type {?} */
    SwiperConfig.prototype.breakpointsInverse;
    /** @type {?} */
    SwiperConfig.prototype.observer;
    /** @type {?} */
    SwiperConfig.prototype.observeParents;
    /** @type {?} */
    SwiperConfig.prototype.containerModifierClass;
    /** @type {?} */
    SwiperConfig.prototype.slideClass;
    /** @type {?} */
    SwiperConfig.prototype.slideActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedActiveClass;
    /** @type {?} */
    SwiperConfig.prototype.slideVisibleClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicateClass;
    /** @type {?} */
    SwiperConfig.prototype.slideNextClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedNextClass;
    /** @type {?} */
    SwiperConfig.prototype.slidePrevClass;
    /** @type {?} */
    SwiperConfig.prototype.slideDuplicatedPrevClass;
    /** @type {?} */
    SwiperConfig.prototype.wrapperClass;
    /** @type {?} */
    SwiperConfig.prototype.fadeEffect;
    /** @type {?} */
    SwiperConfig.prototype.flipEffect;
    /** @type {?} */
    SwiperConfig.prototype.cubeEffect;
    /** @type {?} */
    SwiperConfig.prototype.coverflowEffect;
    /** @type {?} */
    SwiperConfig.prototype.parallax;
    /** @type {?} */
    SwiperConfig.prototype.a11y;
    /** @type {?} */
    SwiperConfig.prototype.lazy;
    /** @type {?} */
    SwiperConfig.prototype.zoom;
    /** @type {?} */
    SwiperConfig.prototype.history;
    /** @type {?} */
    SwiperConfig.prototype.virtual;
    /** @type {?} */
    SwiperConfig.prototype.autoplay;
    /** @type {?} */
    SwiperConfig.prototype.keyboard;
    /** @type {?} */
    SwiperConfig.prototype.scrollbar;
    /** @type {?} */
    SwiperConfig.prototype.mousewheel;
    /** @type {?} */
    SwiperConfig.prototype.controller;
    /** @type {?} */
    SwiperConfig.prototype.navigation;
    /** @type {?} */
    SwiperConfig.prototype.pagination;
    /** @type {?} */
    SwiperConfig.prototype.hashNavigation;
}
//# sourceMappingURL=swiper.interfaces.js.map