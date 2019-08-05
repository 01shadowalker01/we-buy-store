(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('swiper/dist/js/swiper.js')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'swiper/dist/js/swiper.js'], factory) :
    (global = global || self, factory((global.zef = global.zef || {}, global.zef.ngxSwiperWrapper = {}), global.ng.core, global.ng.common, global.Swiper));
}(this, function (exports, core, common, Swiper) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SWIPER_CONFIG = new core.InjectionToken('SWIPER_CONFIG');
    /** @type {?} */
    var SwiperEvents = [
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.indexChange = new core.EventEmitter();
            this.S_INIT = new core.EventEmitter();
            this.S_BEFOREDESTROY = new core.EventEmitter();
            this.S_SCROLL = new core.EventEmitter();
            this.S_PROGRESS = new core.EventEmitter();
            this.S_RESIZE = new core.EventEmitter();
            this.S_BREAKPOINT = new core.EventEmitter();
            this.S_BEFORERESIZE = new core.EventEmitter();
            this.S_KEYPRESS = new core.EventEmitter();
            this.S_SLIDERMOVE = new core.EventEmitter();
            this.S_SLIDECHANGE = new core.EventEmitter();
            this.S_SETTRANSLATE = new core.EventEmitter();
            this.S_SETTRANSITION = new core.EventEmitter();
            this.S_FROMEDGE = new core.EventEmitter();
            this.S_REACHEND = new core.EventEmitter();
            this.S_REACHBEGINNING = new core.EventEmitter();
            this.S_AUTOPLAY = new core.EventEmitter();
            this.S_AUTOPLAYSTART = new core.EventEmitter();
            this.S_AUTOPLAYSTOP = new core.EventEmitter();
            this.S_IMAGESREADY = new core.EventEmitter();
            this.S_LAZYIMAGELOAD = new core.EventEmitter();
            this.S_LAZYIMAGEREADY = new core.EventEmitter();
            this.S_SCROLLDRAGEND = new core.EventEmitter();
            this.S_SCROLLDRAGMOVE = new core.EventEmitter();
            this.S_SCROLLDRAGSTART = new core.EventEmitter();
            this.S_TAP = new core.EventEmitter();
            this.S_CLICK = new core.EventEmitter();
            this.S_DOUBLETAP = new core.EventEmitter();
            this.S_TOUCHEND = new core.EventEmitter();
            this.S_TOUCHMOVE = new core.EventEmitter();
            this.S_TOUCHSTART = new core.EventEmitter();
            this.S_TOUCHMOVEOPPOSITE = new core.EventEmitter();
            this.S_TRANSITIONEND = new core.EventEmitter();
            this.S_TRANSITIONSTART = new core.EventEmitter();
            this.S_SLIDEPREVTRANSITIONEND = new core.EventEmitter();
            this.S_SLIDEPREVTRANSITIONSTART = new core.EventEmitter();
            this.S_SLIDENEXTTRANSITIONEND = new core.EventEmitter();
            this.S_SLIDENEXTTRANSITIONSTART = new core.EventEmitter();
            this.S_SLIDECHANGETRANSITIONEND = new core.EventEmitter();
            this.S_SLIDECHANGETRANSITIONSTART = new core.EventEmitter();
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
            if (!common.isPlatformBrowser(this.platformId)) {
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
            { type: core.Directive, args: [{
                        selector: '[swiper]',
                        exportAs: 'ngxSwiper'
                    },] }
        ];
        /** @nocollapse */
        SwiperDirective.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.NgZone },
            { type: core.ElementRef },
            { type: core.KeyValueDiffers },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [SWIPER_CONFIG,] }] }
        ]; };
        SwiperDirective.propDecorators = {
            index: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            performance: [{ type: core.Input }],
            config: [{ type: core.Input, args: ['swiper',] }],
            indexChange: [{ type: core.Output }],
            S_INIT: [{ type: core.Output, args: ['init',] }],
            S_BEFOREDESTROY: [{ type: core.Output, args: ['beforeDestroy',] }],
            S_SCROLL: [{ type: core.Output, args: ['scroll',] }],
            S_PROGRESS: [{ type: core.Output, args: ['progress',] }],
            S_RESIZE: [{ type: core.Output, args: ['resize',] }],
            S_BREAKPOINT: [{ type: core.Output, args: ['breakpoint',] }],
            S_BEFORERESIZE: [{ type: core.Output, args: ['beforeResize',] }],
            S_KEYPRESS: [{ type: core.Output, args: ['keyPress',] }],
            S_SLIDERMOVE: [{ type: core.Output, args: ['sliderMove',] }],
            S_SLIDECHANGE: [{ type: core.Output, args: ['slideChange',] }],
            S_SETTRANSLATE: [{ type: core.Output, args: ['setTranslate',] }],
            S_SETTRANSITION: [{ type: core.Output, args: ['setTransition',] }],
            S_FROMEDGE: [{ type: core.Output, args: ['fromEdge',] }],
            S_REACHEND: [{ type: core.Output, args: ['reachEnd',] }],
            S_REACHBEGINNING: [{ type: core.Output, args: ['reachBeginning',] }],
            S_AUTOPLAY: [{ type: core.Output, args: ['autoplay',] }],
            S_AUTOPLAYSTART: [{ type: core.Output, args: ['autoplayStart',] }],
            S_AUTOPLAYSTOP: [{ type: core.Output, args: ['autoplayStop',] }],
            S_IMAGESREADY: [{ type: core.Output, args: ['imagesReady',] }],
            S_LAZYIMAGELOAD: [{ type: core.Output, args: ['lazyImageLoad',] }],
            S_LAZYIMAGEREADY: [{ type: core.Output, args: ['lazyImageReady',] }],
            S_SCROLLDRAGEND: [{ type: core.Output, args: ['scrollDragEnd',] }],
            S_SCROLLDRAGMOVE: [{ type: core.Output, args: ['scrollDragMove',] }],
            S_SCROLLDRAGSTART: [{ type: core.Output, args: ['scrollDragStart',] }],
            S_TAP: [{ type: core.Output, args: ['swiperTap',] }],
            S_CLICK: [{ type: core.Output, args: ['swiperClick',] }],
            S_DOUBLETAP: [{ type: core.Output, args: ['swiperDoubleTap',] }],
            S_TOUCHEND: [{ type: core.Output, args: ['swiperTouchEnd',] }],
            S_TOUCHMOVE: [{ type: core.Output, args: ['swiperTouchMove',] }],
            S_TOUCHSTART: [{ type: core.Output, args: ['swiperTouchStart',] }],
            S_TOUCHMOVEOPPOSITE: [{ type: core.Output, args: ['swiperTouchMoveOpposite',] }],
            S_TRANSITIONEND: [{ type: core.Output, args: ['swiperTransitionEnd',] }],
            S_TRANSITIONSTART: [{ type: core.Output, args: ['swiperTransitionStart',] }],
            S_SLIDEPREVTRANSITIONEND: [{ type: core.Output, args: ['slidePrevTransitionEnd',] }],
            S_SLIDEPREVTRANSITIONSTART: [{ type: core.Output, args: ['slidePrevTransitionStart',] }],
            S_SLIDENEXTTRANSITIONEND: [{ type: core.Output, args: ['slideNextTransitionEnd',] }],
            S_SLIDENEXTTRANSITIONSTART: [{ type: core.Output, args: ['slideNextTransitionStart',] }],
            S_SLIDECHANGETRANSITIONEND: [{ type: core.Output, args: ['slideChangeTransitionEnd',] }],
            S_SLIDECHANGETRANSITIONSTART: [{ type: core.Output, args: ['slideChangeTransitionStart',] }]
        };
        return SwiperDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SwiperComponent = /** @class */ (function () {
        function SwiperComponent(zone, cdRef, platformId, defaults) {
            this.zone = zone;
            this.cdRef = cdRef;
            this.platformId = platformId;
            this.defaults = defaults;
            this.mo = null;
            this.swiperConfig = null;
            this.paginationBackup = null;
            this.paginationConfig = null;
            this.index = null;
            this.disabled = false;
            this.performance = false;
            this.useSwiperClass = true;
            this.indexChange = new core.EventEmitter();
            this.S_INIT = new core.EventEmitter();
            this.S_BEFOREDESTROY = new core.EventEmitter();
            this.S_SCROLL = new core.EventEmitter();
            this.S_PROGRESS = new core.EventEmitter();
            this.S_RESIZE = new core.EventEmitter();
            this.S_BREAKPOINT = new core.EventEmitter();
            this.S_BEFORERESIZE = new core.EventEmitter();
            this.S_KEYPRESS = new core.EventEmitter();
            this.S_SLIDERMOVE = new core.EventEmitter();
            this.S_SLIDECHANGE = new core.EventEmitter();
            this.S_SETTRANSLATE = new core.EventEmitter();
            this.S_SETTRANSITION = new core.EventEmitter();
            this.S_FROMEDGE = new core.EventEmitter();
            this.S_REACHEND = new core.EventEmitter();
            this.S_REACHBEGINNING = new core.EventEmitter();
            this.S_AUTOPLAY = new core.EventEmitter();
            this.S_AUTOPLAYSTART = new core.EventEmitter();
            this.S_AUTOPLAYSTOP = new core.EventEmitter();
            this.S_IMAGESREADY = new core.EventEmitter();
            this.S_LAZYIMAGELOAD = new core.EventEmitter();
            this.S_LAZYIMAGEREADY = new core.EventEmitter();
            this.S_SCROLLDRAGEND = new core.EventEmitter();
            this.S_SCROLLDRAGMOVE = new core.EventEmitter();
            this.S_SCROLLDRAGSTART = new core.EventEmitter();
            this.S_TAP = new core.EventEmitter();
            this.S_CLICK = new core.EventEmitter();
            this.S_DOUBLETAP = new core.EventEmitter();
            this.S_TOUCHEND = new core.EventEmitter();
            this.S_TOUCHMOVE = new core.EventEmitter();
            this.S_TOUCHSTART = new core.EventEmitter();
            this.S_TOUCHMOVEOPPOSITE = new core.EventEmitter();
            this.S_TRANSITIONEND = new core.EventEmitter();
            this.S_TRANSITIONSTART = new core.EventEmitter();
            this.S_SLIDEPREVTRANSITIONEND = new core.EventEmitter();
            this.S_SLIDEPREVTRANSITIONSTART = new core.EventEmitter();
            this.S_SLIDENEXTTRANSITIONEND = new core.EventEmitter();
            this.S_SLIDENEXTTRANSITIONSTART = new core.EventEmitter();
            this.S_SLIDECHANGETRANSITIONEND = new core.EventEmitter();
            this.S_SLIDECHANGETRANSITIONSTART = new core.EventEmitter();
        }
        Object.defineProperty(SwiperComponent.prototype, "isAtLast", {
            get: /**
             * @return {?}
             */
            function () {
                return (!this.directiveRef || !this.directiveRef.swiper()) ?
                    false : this.directiveRef.swiper()['isEnd'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
            get: /**
             * @return {?}
             */
            function () {
                return (!this.directiveRef || !this.directiveRef.swiper()) ?
                    false : this.directiveRef.swiper()['isBeginning'];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SwiperComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!common.isPlatformBrowser(this.platformId)) {
                return;
            }
            this.zone.runOutsideAngular(function () {
                _this.updateClasses();
                if (_this.swiperSlides && typeof MutationObserver !== 'undefined') {
                    _this.mo = new MutationObserver(function () {
                        _this.updateClasses();
                    });
                    _this.mo.observe(_this.swiperSlides.nativeElement, { childList: true });
                }
            });
            window.setTimeout(function () {
                if (_this.directiveRef) {
                    _this.S_INIT.emit();
                    _this.directiveRef.indexChange = _this.indexChange;
                    SwiperEvents.forEach(function (eventName) {
                        if (_this.directiveRef) {
                            /** @type {?} */
                            var output = "S_" + eventName.replace('swiper', '').toUpperCase();
                            /** @type {?} */
                            var directiveOutput = (/** @type {?} */ (output));
                            /** @type {?} */
                            var componentOutput = (/** @type {?} */ (output));
                            _this.directiveRef[directiveOutput] = (/** @type {?} */ (_this[componentOutput]));
                        }
                    });
                }
            }, 0);
        };
        /**
         * @return {?}
         */
        SwiperComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.mo) {
                this.mo.disconnect();
            }
            if (this.config && this.paginationBackup) {
                this.config.pagination = this.paginationBackup;
            }
        };
        /**
         * @return {?}
         */
        SwiperComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.swiperConfig = new SwiperConfig(this.defaults);
            this.swiperConfig.assign(this.config); // Custom configuration
            if (this.swiperConfig.pagination === true ||
                (this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
                    (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
                    !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
                this.config = this.config || {};
                if (!this.paginationConfig) {
                    this.paginationBackup = this.config.pagination;
                    this.paginationConfig = {
                        el: '.swiper-pagination',
                        renderBullet: function (index, className) {
                            /** @type {?} */
                            var children = _this.swiperSlides ? _this.swiperSlides.nativeElement.children : [];
                            /** @type {?} */
                            var bullet = "<span class=\"" + className + " " + className + "-middle\" index=\"" + index + "\"></span>";
                            if (index === 0) {
                                bullet = "<span class=\"" + className + " " + className + "-first\" index=\"" + index + "\"></span>";
                            }
                            else if (index === (children.length - 1)) {
                                bullet = "<span class=\"" + className + " " + className + "-last\" index=\"" + index + "\"></span>";
                            }
                            return "<span class=\"swiper-pagination-handle\" index=\"" + index + "\">" + bullet + "</span>";
                        }
                    };
                }
                if (this.swiperConfig.pagination === true) {
                    this.config.pagination = this.paginationConfig;
                }
                else {
                    this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
                }
            }
            return (/** @type {?} */ (this.config));
        };
        /**
         * @private
         * @return {?}
         */
        SwiperComponent.prototype.updateClasses = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.swiperSlides) {
                /** @type {?} */
                var updateNeeded = false;
                /** @type {?} */
                var children = this.swiperSlides.nativeElement.children;
                for (var i = 0; i < children.length; i++) {
                    if (!children[i].classList.contains('swiper-slide')) {
                        updateNeeded = true;
                        children[i].classList.add('swiper-slide');
                    }
                }
                if (updateNeeded && this.directiveRef) {
                    this.directiveRef.update();
                }
            }
            this.cdRef.detectChanges();
        };
        /**
         * @param {?} index
         * @return {?}
         */
        SwiperComponent.prototype.onPaginationClick = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.config && this.directiveRef && (this.config.pagination === true ||
                (this.config.pagination && typeof this.config.pagination === 'object' &&
                    (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                    (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
                this.directiveRef.setIndex(index);
            }
        };
        SwiperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'swiper',
                        exportAs: 'ngxSwiper',
                        template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n  <div #swiperSlides class=\"swiper-wrapper\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\n  <div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\n  <div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\n  <div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["swiper[fxflex] {\n  display: flex;\n  flex-direction: inherit;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: inherit;\n  -webkit-box-orient: inherit;\n}\n\nswiper[fxflex] > .swiper.s-wrapper {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nswiper > .swiper.s-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\nswiper > .swiper.s-wrapper .swiper-wrapper .swiper-slide {\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nswiper > .swiper.s-wrapper .swiper-pagination {\n  pointer-events: none;\n}\n\nswiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  position: relative;\n\n  display: inline-block;\n  padding: 4px;\n  margin: 2px;\n\n  cursor: pointer;\n  pointer-events: all;\n}\n\nswiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet {\n  display: inline-block;\n\n  margin: 0;\n\n  pointer-events: none;\n}\n\nswiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last,\nswiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first {\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-button-prev {\n  top: 10px;\n  left: 50%;\n\n  margin-top: 0;\n  margin-left: -13px;\n\n  transform: rotate(90deg);\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-button-next {\n  top: auto;\n  bottom: 10px;\n  left: 50%;\n\n  margin-top: 0;\n  margin-left: -13px;\n\n  transform: rotate(90deg);\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-scrollbar {\n  width: 8px;\n\n  transition: width 250ms ease-in-out;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-scrollbar:hover {\n  width: 16px;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle {\n  display: block;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet {\n  display: inline-block;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last,\nswiper > .swiper.s-wrapper.swiper-container-vertical > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first {\n  margin: 0 -1px;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-scrollbar {\n  height: 8px;\n\n  transition: height 250ms ease-in-out;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-scrollbar:hover {\n  height: 16px;\n}\n\nswiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last,\nswiper > .swiper.s-wrapper.swiper-container-horizontal > .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first {\n  margin: -1px 0;\n}\n", "/**\n * Swiper 4.4.6\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: December 19, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;-o-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-o-transition:.2s transform,.2s top;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-o-transition:.2s transform,.2s left;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-o-transition:.2s transform,.2s right;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}"]
                    }] }
        ];
        /** @nocollapse */
        SwiperComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [SWIPER_CONFIG,] }] }
        ]; };
        SwiperComponent.propDecorators = {
            index: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            performance: [{ type: core.Input }],
            config: [{ type: core.Input }],
            useSwiperClass: [{ type: core.Input }],
            indexChange: [{ type: core.Output }],
            swiperSlides: [{ type: core.ViewChild, args: ['swiperSlides',] }],
            directiveRef: [{ type: core.ViewChild, args: [SwiperDirective,] }],
            S_INIT: [{ type: core.Output, args: ['init',] }],
            S_BEFOREDESTROY: [{ type: core.Output, args: ['beforeDestroy',] }],
            S_SCROLL: [{ type: core.Output, args: ['scroll',] }],
            S_PROGRESS: [{ type: core.Output, args: ['progress',] }],
            S_RESIZE: [{ type: core.Output, args: ['resize',] }],
            S_BREAKPOINT: [{ type: core.Output, args: ['breakpoint',] }],
            S_BEFORERESIZE: [{ type: core.Output, args: ['beforeResize',] }],
            S_KEYPRESS: [{ type: core.Output, args: ['keyPress',] }],
            S_SLIDERMOVE: [{ type: core.Output, args: ['sliderMove',] }],
            S_SLIDECHANGE: [{ type: core.Output, args: ['slideChange',] }],
            S_SETTRANSLATE: [{ type: core.Output, args: ['setTranslate',] }],
            S_SETTRANSITION: [{ type: core.Output, args: ['setTransition',] }],
            S_FROMEDGE: [{ type: core.Output, args: ['fromEdge',] }],
            S_REACHEND: [{ type: core.Output, args: ['reachEnd',] }],
            S_REACHBEGINNING: [{ type: core.Output, args: ['reachBeginning',] }],
            S_AUTOPLAY: [{ type: core.Output, args: ['autoplay',] }],
            S_AUTOPLAYSTART: [{ type: core.Output, args: ['autoplayStart',] }],
            S_AUTOPLAYSTOP: [{ type: core.Output, args: ['autoplayStop',] }],
            S_IMAGESREADY: [{ type: core.Output, args: ['imagesReady',] }],
            S_LAZYIMAGELOAD: [{ type: core.Output, args: ['lazyImageLoad',] }],
            S_LAZYIMAGEREADY: [{ type: core.Output, args: ['lazyImageReady',] }],
            S_SCROLLDRAGEND: [{ type: core.Output, args: ['scrollDragEnd',] }],
            S_SCROLLDRAGMOVE: [{ type: core.Output, args: ['scrollDragMove',] }],
            S_SCROLLDRAGSTART: [{ type: core.Output, args: ['scrollDragStart',] }],
            S_TAP: [{ type: core.Output, args: ['swiperTap',] }],
            S_CLICK: [{ type: core.Output, args: ['swiperClick',] }],
            S_DOUBLETAP: [{ type: core.Output, args: ['swiperDoubleTap',] }],
            S_TOUCHEND: [{ type: core.Output, args: ['swiperTouchEnd',] }],
            S_TOUCHMOVE: [{ type: core.Output, args: ['swiperTouchMove',] }],
            S_TOUCHSTART: [{ type: core.Output, args: ['swiperTouchStart',] }],
            S_TOUCHMOVEOPPOSITE: [{ type: core.Output, args: ['swiperTouchMoveOpposite',] }],
            S_TRANSITIONEND: [{ type: core.Output, args: ['swiperTransitionEnd',] }],
            S_TRANSITIONSTART: [{ type: core.Output, args: ['swiperTransitionStart',] }],
            S_SLIDEPREVTRANSITIONEND: [{ type: core.Output, args: ['slidePrevTransitionEnd',] }],
            S_SLIDEPREVTRANSITIONSTART: [{ type: core.Output, args: ['slidePrevTransitionStart',] }],
            S_SLIDENEXTTRANSITIONEND: [{ type: core.Output, args: ['slideNextTransitionEnd',] }],
            S_SLIDENEXTTRANSITIONSTART: [{ type: core.Output, args: ['slideNextTransitionStart',] }],
            S_SLIDECHANGETRANSITIONEND: [{ type: core.Output, args: ['slideChangeTransitionEnd',] }],
            S_SLIDECHANGETRANSITIONSTART: [{ type: core.Output, args: ['slideChangeTransitionStart',] }]
        };
        return SwiperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SwiperModule = /** @class */ (function () {
        function SwiperModule() {
        }
        SwiperModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SwiperComponent, SwiperDirective],
                        exports: [common.CommonModule, SwiperComponent, SwiperDirective]
                    },] }
        ];
        return SwiperModule;
    }());

    exports.SwiperComponent = SwiperComponent;
    exports.SwiperDirective = SwiperDirective;
    exports.SWIPER_CONFIG = SWIPER_CONFIG;
    exports.SwiperConfig = SwiperConfig;
    exports.SwiperModule = SwiperModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-swiper-wrapper.umd.js.map
