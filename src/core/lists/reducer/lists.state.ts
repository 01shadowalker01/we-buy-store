/*
 * spurtcommerce
 * version 2.1
* www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Map, Record} from 'immutable';
import {BannerListResponseModel} from '../models/banner-list-response.model';
import {FeaturedProductResponseModel} from '../models/featured-product-response.model';
import {ProductsResponseModel} from '../models/products-response.model';
import {CategoryResponseModel} from '../models/category-response.model';
import {ManufacturerResponseModel} from '../models/manufacturer-response.model';
import {ProductDetailResponseModel} from '../models/product-detail-response.model';
import {PagelistResponseModel} from '../models/pagelist-response.model';
import {SettingResponseModel} from '../models/setting-response.model';
import {CountryResponseModel} from '../models/country-response.model';
import {TodayDealsResponseModel} from '../models/today-deals-response.model';
import {ProductDetailMandatoryResponseModel} from '../models/product-detail-mandatory-response.model';

export interface ListsState extends Map<string, any> {
    products: Array<ProductsResponseModel>;
    maxProductPrice: any;
    productCount: number;
    category: Array<CategoryResponseModel>;
    relatedProducts: any;
    manufacturer: Array<ManufacturerResponseModel>;
    productDetail: ProductDetailResponseModel;
    productDetailMandatory: ProductDetailMandatoryResponseModel;

    productLoading: boolean;
    productLoaded: boolean;
    productFailed: boolean;

    bannerList: Array<BannerListResponseModel>;
    bannerLoading: boolean;
    bannerLoaded: boolean;
    bannerFailed: boolean;

    availableOptionsArray: any;

    bannerCount: any;
    countLoading: boolean;
    countLoaded: boolean;
    countFailed: boolean;

    featuredList: Array<FeaturedProductResponseModel>;
    featuredListLoading: boolean;
    featuredListLoaded: boolean;
    featuredListFailed: boolean;

    relatedProductLoading: boolean;
    relatedProductLoaded: boolean;
    relatedProductFailed: boolean;

    pageList: Array<PagelistResponseModel>;
    pageListLoading: boolean;
    pageListLoaded: boolean;
    pageListFailed: boolean;
    settingDetail: SettingResponseModel;

    contactUsLoading: boolean;
    contactusLoaded: boolean;
    contactusFailed: boolean;
    contactDetail: any;

    pageDetailLoading: boolean;
    pageDetailLoaded: boolean;
    pageDetailFailed: boolean;
    pageDetail: any;

    manufacturerLoading: boolean;
    manufacturerLoaded: boolean;
    manufacturerFailed: boolean;

    productDetailLoading: boolean;
    productDetailLoaded: boolean;
    productDetailFailed: boolean;

    countryList: Array<CountryResponseModel>;
    countryLoading: boolean;
    countryLoaded: boolean;
    countryFailed: boolean;

    zoneList: Array<CountryResponseModel>;
    zoneLoading: boolean;
    zoneLoaded: boolean;
    zoneFailed: boolean;

    todayDeal: Array<TodayDealsResponseModel>;
    todayDealLoading: boolean;
    todayDealLoaded: boolean;
    todayDealFailed: boolean;

    subcategory: any;
    subcategoryLoading: boolean;
    subcategoryLoaded: boolean;
    subcategoryFailed: boolean;

    SelectedcategoryId: any;

}

export const listsRecord = Record({
    products: [],
    maxProductPrice: {},
    productCount: 0,
    category: [],

    relatedProducts: [],
    manufacturer: [],
    productDetail: {},
    productDetailMandatory: {},
    productLoading: false,
    productLoaded: false,
    productFailed: false,

    availableOptionsArray: [],

    bannerList: [],
    bannerLoading: false,
    bannerLoaded: false,
    bannerFailed: false,

    bannerCount: 0,
    countLoading: false,
    countLoaded: false,
    countFailed: false,

    featuredList: [],
    featuredListLoading: false,
    featuredListLoaded: false,
    featuredListFailed: false,

    relatedProductLoading: false,
    relatedProductLoaded: false,
    relatedProductFailed: false,

    pageList: [],
    pageListLoading: false,
    pageListLoaded: false,
    pageListFailed: false,
    settingDetail: [],

    contactUsLoading: false,
    contactusLoaded: false,
    contactusFailed: false,
    contactDetail: {},

    pageDetailLoading: false,
    pageDetailLoaded: false,
    pageDetailFailed: false,
    pageDetail: {},

    manufacturerLoading: false,
    manufacturerLoaded: false,
    manufacturerFailed: false,

    productDetailLoading: false,
    productDetailLoaded: false,
    productDetailFailed: false,

    countryList: [],
    countryLoading: false,
    countryLoaded: false,
    countryFailed: false,

    zoneList: [],
    zoneLoading: false,
    zoneLoaded: false,
    zoneFailed: false,

    todayDeal: [],
    todayDealLoading: false,
    todayDealLoaded: false,
    todayDealFailed: false,

    subcategory: {},
    subcategoryLoading: false,
    subcategoryLoaded: false,
    subcategoryFailed: false,

    SelectedcategoryId: {},
});
