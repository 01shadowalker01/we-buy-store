/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as Swiper from 'swiper/dist/js/swiper.js';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Optional, ElementRef, Directive, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { SWIPER_CONFIG, SwiperConfig, SwiperEvents } from './swiper.interfaces';
var SwiperDirective = /** @class */ (function () {
    function SwiperDirective(platformId, zone, elementRef, differs, defaults) {
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.initialIndex = null;
        this.configDiff = null;
        this.disabled = false;
        this.performance = false;
        this.indexChange = new EventEmitter();
        this.S_INIT = new EventEmitter();
        this.S_BEFOREDESTROY = new EventEmitter();
        this.S_SCROLL = new EventEmitter();
        this.S_PROGRESS = new EventEmitter();
        this.S_RESIZE = new EventEmitter();
        this.S_BREAKPOINT = new EventEmitter();
        this.S_BEFORERESIZE = new EventEmitter();
        this.S_KEYPRESS = new EventEmitter();
        this.S_SLIDERMOVE = new EventEmitter();
        this.S_SLIDECHANGE = new EventEmitter();
        this.S_SETTRANSLATE = new EventEmitter();
        this.S_SETTRANSITION = new EventEmitter();
        this.S_FROMEDGE = new EventEmitter();
        this.S_REACHEND = new EventEmitter();
        this.S_REACHBEGINNING = new EventEmitter();
        this.S_AUTOPLAY = new EventEmitter();
        this.S_AUTOPLAYSTART = new EventEmitter();
        this.S_AUTOPLAYSTOP = new EventEmitter();
        this.S_IMAGESREADY = new EventEmitter();
        this.S_LAZYIMAGELOAD = new EventEmitter();
        this.S_LAZYIMAGEREADY = new EventEmitter();
        this.S_SCROLLDRAGEND = new EventEmitter();
        this.S_SCROLLDRAGMOVE = new EventEmitter();
        this.S_SCROLLDRAGSTART = new EventEmitter();
        this.S_TAP = new EventEmitter();
        this.S_CLICK = new EventEmitter();
        this.S_DOUBLETAP = new EventEmitter();
        this.S_TOUCHEND = new EventEmitter();
        this.S_TOUCHMOVE = new EventEmitter();
        this.S_TOUCHSTART = new EventEmitter();
        this.S_TOUCHMOVEOPPOSITE = new EventEmitter();
        this.S_TRANSITIONEND = new EventEmitter();
        this.S_TRANSITIONSTART = new EventEmitter();
        this.S_SLIDEPREVTRANSITIONEND = new EventEmitter();
        this.S_SLIDEPREVTRANSITIONSTART = new EventEmitter();
        this.S_SLIDENEXTTRANSITIONEND = new EventEmitter();
        this.S_SLIDENEXTTRANSITIONSTART = new EventEmitter();
        this.S_SLIDECHANGETRANSITIONEND = new EventEmitter();
        this.S_SLIDECHANGETRANSITIONSTART = new EventEmitter();
    }
    Object.defineProperty(SwiperDirective.prototype, "index", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
        var params = new SwiperConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        if (params.scrollbar === true) {
            params.scrollbar = {
                el: '.swiper-scrollbar'
            };
        }
        if (params.pagination === true) {
            params.pagination = {
                el: '.swiper-pagination'
            };
        }
        if (params.navigation === true) {
            params.navigation = {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            };
        }
        if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
        }
        if (this.initialIndex != null) {
            params.initialSlide = this.initialIndex;
            this.initialIndex = null;
        }
        params.on = {
            slideChange: function () {
                if (_this.instance && _this.indexChange.observers.length) {
                    _this.emit(_this.indexChange, _this.instance.realIndex);
                }
            }
        };
        this.zone.runOutsideAngular(function () {
            _this.instance = new Swiper(_this.elementRef.nativeElement, params);
        });
        if (params.init !== false && this.S_INIT.observers.length) {
            this.emit(this.S_INIT, this.instance);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach(function (eventName) {
            /** @type {?} */
            var swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            _this.instance.on(swiperEvent, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length === 1) {
                    args = args[0];
                }
                /** @type {?} */
                var output = "S_" + swiperEvent.toUpperCase();
                /** @type {?} */
                var emitter = (/** @type {?} */ (_this[(/** @type {?} */ (output))]));
                if (emitter.observers.length) {
                    _this.emit(emitter, args);
                }
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create();
            this.configDiff.diff(this.config || {});
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.destroy(true, _this.instance.initialized || false);
            });
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.configDiff) {
            /** @type {?} */
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.initialIndex = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SwiperDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.instance && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    });
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    });
                }
            }
        }
    };
    /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    SwiperDirective.prototype.emit = /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    function (emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run(function () { return emitter.emit(value); });
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.swiper = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.init();
            });
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.instance) {
                _this.zone.runOutsideAngular(function () {
                    _this.instance.update();
                });
            }
        }, 0);
    };
    /**
     * @param {?=} real
     * @return {?}
     */
    SwiperDirective.prototype.getIndex = /**
     * @param {?=} real
     * @return {?}
     */
    function (real) {
        if (!this.instance) {
            return this.initialIndex || 0;
        }
        else {
            return real ? this.instance.realIndex : this.instance.activeIndex;
        }
    };
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.setIndex = /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (index, speed, silent) {
        var _this = this;
        if (!this.instance) {
            this.initialIndex = index;
        }
        else {
            /** @type {?} */
            var realIndex_1 = index * this.instance.params.slidesPerGroup;
            if (this.instance.params.loop) {
                realIndex_1 += this.instance.loopedSlides;
            }
            this.zone.runOutsideAngular(function () {
                _this.instance.slideTo(realIndex_1, speed, !silent);
            });
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.prevSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.slidePrev(speed, !silent);
            });
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.nextSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.instance) {
            this.zone.runOutsideAngular(function () {
                _this.instance.slideNext(speed, !silent);
            });
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.stopAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(function () {
                _this.instance.autoplay.stop();
            });
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.startAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(function () {
                _this.instance.autoplay.start();
            });
        }
    };
    SwiperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[swiper]',
                    exportAs: 'ngxSwiper'
                },] }
    ];
    /** @nocollapse */
    SwiperDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef },
        { type: KeyValueDiffers },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
    ]; };
    SwiperDirective.propDecorators = {
        index: [{ type: Input }],
        disabled: [{ type: Input }],
        performance: [{ type: Input }],
        config: [{ type: Input, args: ['swiper',] }],
        indexChange: [{ type: Output }],
        S_INIT: [{ type: Output, args: ['init',] }],
        S_BEFOREDESTROY: [{ type: Output, args: ['beforeDestroy',] }],
        S_SCROLL: [{ type: Output, args: ['scroll',] }],
        S_PROGRESS: [{ type: Output, args: ['progress',] }],
        S_RESIZE: [{ type: Output, args: ['resize',] }],
        S_BREAKPOINT: [{ type: Output, args: ['breakpoint',] }],
        S_BEFORERESIZE: [{ type: Output, args: ['beforeResize',] }],
        S_KEYPRESS: [{ type: Output, args: ['keyPress',] }],
        S_SLIDERMOVE: [{ type: Output, args: ['sliderMove',] }],
        S_SLIDECHANGE: [{ type: Output, args: ['slideChange',] }],
        S_SETTRANSLATE: [{ type: Output, args: ['setTranslate',] }],
        S_SETTRANSITION: [{ type: Output, args: ['setTransition',] }],
        S_FROMEDGE: [{ type: Output, args: ['fromEdge',] }],
        S_REACHEND: [{ type: Output, args: ['reachEnd',] }],
        S_REACHBEGINNING: [{ type: Output, args: ['reachBeginning',] }],
        S_AUTOPLAY: [{ type: Output, args: ['autoplay',] }],
        S_AUTOPLAYSTART: [{ type: Output, args: ['autoplayStart',] }],
        S_AUTOPLAYSTOP: [{ type: Output, args: ['autoplayStop',] }],
        S_IMAGESREADY: [{ type: Output, args: ['imagesReady',] }],
        S_LAZYIMAGELOAD: [{ type: Output, args: ['lazyImageLoad',] }],
        S_LAZYIMAGEREADY: [{ type: Output, args: ['lazyImageReady',] }],
        S_SCROLLDRAGEND: [{ type: Output, args: ['scrollDragEnd',] }],
        S_SCROLLDRAGMOVE: [{ type: Output, args: ['scrollDragMove',] }],
        S_SCROLLDRAGSTART: [{ type: Output, args: ['scrollDragStart',] }],
        S_TAP: [{ type: Output, args: ['swiperTap',] }],
        S_CLICK: [{ type: Output, args: ['swiperClick',] }],
        S_DOUBLETAP: [{ type: Output, args: ['swiperDoubleTap',] }],
        S_TOUCHEND: [{ type: Output, args: ['swiperTouchEnd',] }],
        S_TOUCHMOVE: [{ type: Output, args: ['swiperTouchMove',] }],
        S_TOUCHSTART: [{ type: Output, args: ['swiperTouchStart',] }],
        S_TOUCHMOVEOPPOSITE: [{ type: Output, args: ['swiperTouchMoveOpposite',] }],
        S_TRANSITIONEND: [{ type: Output, args: ['swiperTransitionEnd',] }],
        S_TRANSITIONSTART: [{ type: Output, args: ['swiperTransitionStart',] }],
        S_SLIDEPREVTRANSITIONEND: [{ type: Output, args: ['slidePrevTransitionEnd',] }],
        S_SLIDEPREVTRANSITIONSTART: [{ type: Output, args: ['slidePrevTransitionStart',] }],
        S_SLIDENEXTTRANSITIONEND: [{ type: Output, args: ['slideNextTransitionEnd',] }],
        S_SLIDENEXTTRANSITIONSTART: [{ type: Output, args: ['slideNextTransitionStart',] }],
        S_SLIDECHANGETRANSITIONEND: [{ type: Output, args: ['slideChangeTransitionEnd',] }],
        S_SLIDECHANGETRANSITIONSTART: [{ type: Output, args: ['slideChangeTransitionStart',] }]
    };
    return SwiperDirective;
}());
export { SwiperDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.initialIndex;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.configDiff;
    /** @type {?} */
    SwiperDirective.prototype.disabled;
    /** @type {?} */
    SwiperDirective.prototype.performance;
    /** @type {?} */
    SwiperDirective.prototype.config;
    /** @type {?} */
    SwiperDirective.prototype.indexChange;
    /** @type {?} */
    SwiperDirective.prototype.S_INIT;
    /** @type {?} */
    SwiperDirective.prototype.S_BEFOREDESTROY;
    /** @type {?} */
    SwiperDirective.prototype.S_SCROLL;
    /** @type {?} */
    SwiperDirective.prototype.S_PROGRESS;
    /** @type {?} */
    SwiperDirective.prototype.S_RESIZE;
    /** @type {?} */
    SwiperDirective.prototype.S_BREAKPOINT;
    /** @type {?} */
    SwiperDirective.prototype.S_BEFORERESIZE;
    /** @type {?} */
    SwiperDirective.prototype.S_KEYPRESS;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDERMOVE;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDECHANGE;
    /** @type {?} */
    SwiperDirective.prototype.S_SETTRANSLATE;
    /** @type {?} */
    SwiperDirective.prototype.S_SETTRANSITION;
    /** @type {?} */
    SwiperDirective.prototype.S_FROMEDGE;
    /** @type {?} */
    SwiperDirective.prototype.S_REACHEND;
    /** @type {?} */
    SwiperDirective.prototype.S_REACHBEGINNING;
    /** @type {?} */
    SwiperDirective.prototype.S_AUTOPLAY;
    /** @type {?} */
    SwiperDirective.prototype.S_AUTOPLAYSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_AUTOPLAYSTOP;
    /** @type {?} */
    SwiperDirective.prototype.S_IMAGESREADY;
    /** @type {?} */
    SwiperDirective.prototype.S_LAZYIMAGELOAD;
    /** @type {?} */
    SwiperDirective.prototype.S_LAZYIMAGEREADY;
    /** @type {?} */
    SwiperDirective.prototype.S_SCROLLDRAGEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SCROLLDRAGMOVE;
    /** @type {?} */
    SwiperDirective.prototype.S_SCROLLDRAGSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_TAP;
    /** @type {?} */
    SwiperDirective.prototype.S_CLICK;
    /** @type {?} */
    SwiperDirective.prototype.S_DOUBLETAP;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHEND;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHMOVE;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_TOUCHMOVEOPPOSITE;
    /** @type {?} */
    SwiperDirective.prototype.S_TRANSITIONEND;
    /** @type {?} */
    SwiperDirective.prototype.S_TRANSITIONSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDEPREVTRANSITIONEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDEPREVTRANSITIONSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDENEXTTRANSITIONEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDENEXTTRANSITIONSTART;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDECHANGETRANSITIONEND;
    /** @type {?} */
    SwiperDirective.prototype.S_SLIDECHANGETRANSITIONSTART;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.differs;
    /**
     * @type {?}
     * @private
     */
    SwiperDirective.prototype.defaults;
}
//# sourceMappingURL=swiper.directive.js.map