/*
 * spurtcommerce
 * version 2.1
* www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/lists.action';
import {ListsState, listsRecord} from './lists.state';
import {BannerListResponseModel} from '../models/banner-list-response.model';
import {PageDetailResponse} from '../models/page-detail-response';
import {RelatedProductListModel} from '../models/related-product-list.model';
import {FeaturedProductResponseModel} from '../models/featured-product-response.model';
import {ProductsResponseModel} from '../models/products-response.model';
import {CategoryResponseModel} from '../models/category-response.model';
import {ManufacturerResponseModel} from '../models/manufacturer-response.model';
import {ProductDetailResponseModel} from '../models/product-detail-response.model';
import {PagelistResponseModel} from '../models/pagelist-response.model';
import {SettingResponseModel} from '../models/setting-response.model';
import {CountryResponseModel} from '../models/country-response.model';
import {ZoneResponseModel} from '../models/zone-response.model';
import {TodayDealsResponseModel} from '../models/today-deals-response.model';
import {SubcategoryResponseModel} from '../models/subcategory.response';
import {ProductDetailMandatoryResponseModel} from '../models/product-detail-mandatory-response.model';

export const initialState: ListsState = new listsRecord() as unknown as ListsState;

export function reducer(state = initialState, {type, payload}: any): ListsState {

    if (!type) {

        return state;
    }
    switch (type) {
        case actions.ActionTypes.GET_PRODUCT_LIST: {

            return Object.assign({}, state, {
                productLoading: true,
                productLoaded: false,
                productFailed: false,
                products: []
            });
        }

        case actions.ActionTypes.PRODUCT_LIST_SUCCESS: {
            const tempProduct = payload.data.productList.map(product => {
                const productLists = new ProductsResponseModel(product);
                return productLists;
            });
            const tempMaxProductPrice = payload.data;


            return Object.assign({}, state, {
                productLoading: false,
                productLoaded: true,
                productFailed: false,
                products: tempProduct,
                maxProductPrice: tempMaxProductPrice
            });
        }
        case actions.ActionTypes.PRODUCT_LIST_FAIL: {
            return Object.assign({}, state, {
                productLoading: false,
                productLoaded: true,
                productFailed: true,
            });
        }

        case actions.ActionTypes.GET_PRODUCT_COUNT: {

            return Object.assign({}, state, {});
        }

        case actions.ActionTypes.PRODUCT_COUNT_SUCCESS: {

            return Object.assign({}, state, {
                productCount: payload.data
            });
        }
        case actions.ActionTypes.PRODUCT_COUNT_FAIL: {
            return Object.assign({}, state, {});
        }


        case actions.ActionTypes.GET_CATEGORY_LIST: {

            return Object.assign({}, state, {
                categoryLoading: true,
                categoryLoaded: false,
                categoryFailed: false,
            });
        }


        case actions.ActionTypes.CATEGORY_LIST_SUCCESS: {

            const tempCategory = payload.data.map(category => {
                const categoryLists = new CategoryResponseModel(category);
                return categoryLists;
            });

            return Object.assign({}, state, {
                category: tempCategory,
                categoryLoading: false,
                categoryLoaded: true,
                categoryFailed: false,
            });
        }
        case actions.ActionTypes.CATEGORY_LIST_FAIL: {
            return Object.assign({}, state, {
                categoryLoading: false,
                categoryLoaded: true,
                categoryFailed: true,
            });
        }
        case actions.ActionTypes.GET_RELATED_PRODUCT_LIST: {

            return Object.assign({}, state, {
                relatedProductLoading: true,
                relatedProductLoaded: false,
                relatedProductFailed: false,
                relatedProducts: []
            });
        }

        case actions.ActionTypes.RELATED_PRODUCT_LIST_SUCCESS: {
            const tempProduct = payload.data.map(product => {
                const tempList = new RelatedProductListModel(product);
                return tempList;
            });
            return Object.assign({}, state, {
                relatedProducts: tempProduct,
                relatedProductLoading: false,
                relatedProductLoaded: true,
                relatedProductFailed: false,
            });
        }
        case actions.ActionTypes.RELATED_PRODUCT_LIST_FAIL: {
            return Object.assign({}, state, {
                relatedProductLoading: false,
                relatedProductLoaded: true,
                relatedProductFailed: true,
            });
        }
        case actions.ActionTypes.GET_MANUFACTURER_LIST: {
            return Object.assign({}, state, {
                manufacturerLoading: true,
                manufacturerLoaded: false,
                manufacturerFailed: false,
            });
        }

        case actions.ActionTypes.MANUFACTURER_LIST_SUCCESS: {
            const tempBrand = payload.data.map(brand => {
                const tempList = new ManufacturerResponseModel(brand);
                return tempList;
            });
            return Object.assign({}, state, {
                manufacturer: tempBrand,
                manufacturerLoading: false,
                manufacturerLoaded: true,
                manufacturerFailed: false,
            });
        }
        case actions.ActionTypes.MANUFACTURER_LIST_FAIL: {
            return Object.assign({}, state, {
                manufacturerLoading: false,
                manufacturerLoaded: true,
                manufacturerFailed: true,
            });
        }

        case actions.ActionTypes.GET_PRODUCT_DETAIL: {

            const productdetail = new ProductDetailResponseModel({});

            return Object.assign({}, state, {
                productDetail: productdetail,
                productDetailLoading: true,
                productDetailLoaded: false,
                productDetailFailed: false

            });
        }

        case actions.ActionTypes.PRODUCT_DETAIL_SUCCESS: {
            const productdetail = new ProductDetailResponseModel(payload.data[0]);
            return Object.assign({}, state, {
                productDetail: productdetail,
                productDetailLoading: false,
                productDetailLoaded: true,
                productDetailFailed: false,
            });
        }
        case actions.ActionTypes.PRODUCT_DETAIL_FAIL: {
            return Object.assign({}, state, {
                productDetailLoading: false,
                productDetailLoaded: true,
                productDetailFailed: true,
            });
        }



        // product detail mandatory details

        case actions.ActionTypes.GET_PRODUCT_DETAIL_MANDATORY: {

            const productdetail = new ProductDetailResponseModel({});

            return Object.assign({}, state, {
                productDetailMandatory: productdetail,
                productDetailMandatoryLoading: true,
                productDetailMandatoryLoaded: false,
                productDetailMandatoryFailed: false

            });
        }

        case actions.ActionTypes.PRODUCT_DETAIL_MANDATORY_SUCCESS: {
            const productdetailMandatory = new ProductDetailMandatoryResponseModel(payload.data[0]);
            return Object.assign({}, state, {
                productDetailMandatory: productdetailMandatory,
                productDetailMandatoryLoading: false,
                productDetailMandatoryLoaded: true,
                productDetailMandatoryFailed: false,
            });
        }
        case actions.ActionTypes.PRODUCT_DETAIL_MANDATORY_FAIL: {
            return Object.assign({}, state, {
                productDetailMandatoryLoading: false,
                productDetailMandatoryLoaded: true,
                productDetailMandatoryFailed: true,
            });
        }

        case actions.ActionTypes.GET_AVAILABLE_VALUE: {
            const tempArray: any = [];
            return Object.assign({}, state, {
                availableOptionsArray: tempArray,
                availableValueLoading: true,
                availableValueLoaded: false,
                availableValueFailed: false
            });
        }
        case actions.ActionTypes.GET_BANNER_LIST: {
            return Object.assign({}, state, {
                bannerLoading: true,
                bannerLoaded: false,
                bannerFailed: false
            });
        }
        case actions.ActionTypes.GET_BANNER_LIST_SUCCESS: {
            const bannerModel = payload.data.map(_list => {
                const tempModel = new BannerListResponseModel(_list);
                return tempModel;
            });
            return Object.assign({}, state, {
                bannerList: bannerModel,
                bannerLoading: false,
                bannerLoaded: true,
                bannerFailed: false
            });
        }
        case actions.ActionTypes.GET_BANNER_LIST_FAIL: {
            return Object.assign({}, state, {
                bannerLoading: false,
                bannerLoaded: true,
                bannerFailed: true
            });
        }
        case actions.ActionTypes.GET_BANNER_LIST_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false
            });
        }
        case actions.ActionTypes.GET_BANNER_LIST_COUNT_SUCCESS: {

            return Object.assign({}, state, {
                bannerCount: payload.data,
                countLoading: false,
                countLoaded: true,
                countFailed: false
            });
        }
        case actions.ActionTypes.GET_BANNER_LIST_COUNT_FAIL: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: true
            });
        }
        case actions.ActionTypes.GET_FEATURED_PRODUCT_LIST: {
            return Object.assign({}, state, {
                featuredListLoading: true,
                featuredListLoaded: false,
                featuredListFailed: false
            });
        }
        case actions.ActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS: {
            const tempList = payload.data.map(list => {
                const tempObject = new FeaturedProductResponseModel(list);
                return tempObject;
            });
            return Object.assign({}, state, {
                featuredList: tempList,
                featuredListLoading: false,
                featuredListLoaded: true,
                featuredListFailed: false
            });
        }
        case actions.ActionTypes.GET_FEATURED_PRODUCT_LIST_FAIL: {
            return Object.assign({}, state, {
                featuredListLoading: false,
                featuredListLoaded: true,
                featuredListFailed: true
            });
        }
        case actions.ActionTypes.GET_PAGE_LIST: {
            return Object.assign({}, state, {
                pageListLoading: true,
                pageListLoaded: false,
                pageListFailed: false
            });
        }
        case actions.ActionTypes.GET_PAGE_LIST_SUCCESS: {
            const tempList = payload.data.map(list => {
                const tempObject = new PagelistResponseModel(list);
                return tempObject;
            });
            return Object.assign({}, state, {
                pageList: tempList,
                pageListLoading: false,
                pageListLoaded: true,
                pageListFailed: false
            });
        }
        case actions.ActionTypes.GET_PAGE_LIST_FAIL: {
            return Object.assign({}, state, {
                pageListLoading: false,
                pageListLoaded: true,
                pageListFailed: true
            });
        }
        case actions.ActionTypes.DO_CONTACT_US_ACTION: {
            return Object.assign({}, state, {
                contactUsLoading: true,
                contactusLoaded: false,
                contactusFailed: false
            });
        }
        case actions.ActionTypes.DO_CONTACT_US_SUCCESS_ACTION: {

            return Object.assign({}, state, {
                contactDetail: payload,
                contactUsLoading: false,
                contactusLoaded: true,
                contactusFailed: false
            });
        }
        case actions.ActionTypes.DO_CONTACT_US_FAIL_ACTION: {
            return Object.assign({}, state, {
                contactUsLoading: false,
                contactusLoaded: true,
                contactusFailed: true
            });
        }
        case actions.ActionTypes.GET_PAGE_DETAIL: {
            return Object.assign({}, state, {
                pageDetailLoading: true,
                pageDetailLoaded: false,
                pageDetailFailed: false
            });
        }
        case actions.ActionTypes.GET_PAGE_DETAIL_SUCCESS: {
            const tempModel = new PageDetailResponse(payload.data);

            return Object.assign({}, state, {
                pageDetail: tempModel,
                pageDetailLoading: false,
                pageDetailLoaded: true,
                pageDetailFailed: false
            });
        }
        case actions.ActionTypes.GET_PAGE_DETAIL_FAIL: {
            return Object.assign({}, state, {
                pageDetailLoading: false,
                pageDetailLoaded: true,
                pageDetailFailed: true
            });
        }
        case actions.ActionTypes.GET_SETTINGS_ACTION: {
            return Object.assign({}, state, {});
        }
        case actions.ActionTypes.GET_SETTINGS_SUCCESS_ACTION: {
            const tempSetting = new SettingResponseModel(payload.data[0]);
            return Object.assign({}, state, {
                settingDetail: tempSetting
            });
        }

        case actions.ActionTypes.GET_SETTINGS_FAIL_ACTION: {
            return Object.assign({}, state, {});
        }

        case actions.ActionTypes.GET_COUNTRY_LIST: {

            return Object.assign({}, state, {
                countryLoading: true,
                countryLoaded: false,
                countryFailed: false,
            });
        }

        case actions.ActionTypes.GET_COUNTRY_LIST_SUCCESS: {
            const tempList = payload.data.map(list => {
                const tempObject = new CountryResponseModel(list);
                return tempObject;
            });
            return Object.assign({}, state, {
                countryList: tempList,
                countryLoading: false,
                countryLoaded: true,
                countryFailed: false,
            });
        }
        case actions.ActionTypes.GET_COUNTRY_LIST_FAIL: {
            return Object.assign({}, state, {
                countryLoading: false,
                countryLoaded: true,
                countryFailed: true,
            });
        }

        case actions.ActionTypes.GET_ZONE_LIST_SUCCESS: {
            const tempList = payload.data.map(list => {
                const tempObject = new ZoneResponseModel(list);
                return tempObject;
            });
            return Object.assign({}, state, {
                zoneList: tempList,
                zoneLoading: false,
                zoneLoaded: true,
                zoneFailed: false,
            });
        }
        case actions.ActionTypes.GET_ZONE_LIST_FAIL: {
            return Object.assign({}, state, {
                zoneLoading: false,
                zoneLoaded: true,
                zoneFailed: true,
            });
        }
        case actions.ActionTypes.GET_TODAY_DEALS: {
            return Object.assign({}, state, {
                todayDealLoading: true,
                todayDealLoaded: false,
                todayDealFailed: false
            });
        }
        case actions.ActionTypes.GET_TODAY_DEALS_SUCCESS: {
            const tempList = payload.data.map(list => {
                const tempObject = new TodayDealsResponseModel(list);
                return tempObject;
            });
            return Object.assign({}, state, {
                todayDeal: tempList,
                todayDealLoading: false,
                todayDealLoaded: true,
                todayDealFailed: false
            });
        }
        case actions.ActionTypes.GET_TODAY_DEALS_FAIL: {
            return Object.assign({}, state, {
                todayDealLoading: false,
                todayDealLoaded: true,
                todayDealFailed: true
            });
        }

        // subcategory
        case actions.ActionTypes.GET_SubCATEGORY_LIST: {
            return Object.assign({}, state, {
                SelectedcategoryId: payload.CategoryId,
                subcategoryLoading: true,
                subcategoryLoaded: false,
                subcategoryFailed: false,
            });
        }
        case actions.ActionTypes.GET_SubCATEGORY_LIST_SUCCESS: {
            const tempList = payload.data.map(list => {
                const tempObject = new SubcategoryResponseModel(list);
                return tempObject;
            });
            return Object.assign({}, state, {
                subcategory: tempList,
                subcategoryLoading: false,
                subcategoryLoaded: true,
                subcategoryFailed: false,
            });
        }
        case actions.ActionTypes.GET_TODAY_DEALS_FAIL: {
            return Object.assign({}, state, {
                subcategoryLoading: false,
                subcategoryLoaded: true,
                subcategoryFailed: false,
            });
        }
        default: {
            return state;
        }
    }
}

export const productList = (state: ListsState) => state.products;
export const maxProductPrice = (state: ListsState) => state.maxProductPrice;
export const getProductCount = (state: ListsState) => state.productCount;
export const productLoading = (state: ListsState) => state.productLoading;
export const productLoaded = (state: ListsState) => state.productLoaded;
export const productFailed = (state: ListsState) => state.productFailed;

export const categoryList = (state: ListsState) => state.category;
export const relatedProducts = (state: ListsState) => state.relatedProducts;
export const manufacturer = (state: ListsState) => state.manufacturer;
export const productDetail = (state: ListsState) => state.productDetail;
export const productDetailMandatory = (state: ListsState) => state.productDetailMandatory;

export const getAvailableOptionsArray = (state: ListsState) => state.availableOptionsArray;

export const getBannerList = (state: ListsState) => state.bannerList;
export const getListLoading = (state: ListsState) => state.bannerLoading;
export const getListLoaded = (state: ListsState) => state.bannerLoaded;
export const getListFailed = (state: ListsState) => state.bannerFailed;

export const getBannerCount = (state: ListsState) => state.bannerCount;
export const getCountLoading = (state: ListsState) => state.countLoading;
export const getCountLoaded = (state: ListsState) => state.countLoaded;
export const getCountFailed = (state: ListsState) => state.countFailed;

export const getFeaturedList = (state: ListsState) => state.featuredList;
export const getFeaturedListLoading = (state: ListsState) => state.featuredListLoading;
export const getFeaturedLisLoaded = (state: ListsState) => state.featuredListLoaded;
export const getFeaturedLisFailed = (state: ListsState) => state.featuredListFailed;

export const getRelatedProductLoading = (state: ListsState) => state.relatedProductLoading;
export const getRelatedProductLoaded = (state: ListsState) => state.relatedProductLoaded;
export const getRelatedProductFailed = (state: ListsState) => state.relatedProductFailed;

export const getPageList = (state: ListsState) => state.pageList;
export const getPageListLoading = (state: ListsState) => state.pageListLoading;
export const getPageListLoaded = (state: ListsState) => state.pageListLoaded;
export const getPageListFailed = (state: ListsState) => state.pageListFailed;
export const getSettingDetail = (state: ListsState) => state.settingDetail;

export const getContactUsLoading = (state: ListsState) => state.contactUsLoading;
export const getContactUsLoaded = (state: ListsState) => state.contactusLoaded;
export const getContactUsFailed = (state: ListsState) => state.contactusFailed;
export const getContactDetail = (state: ListsState) => state.contactDetail;

export const getPageDetailLoading = (state: ListsState) => state.pageDetailLoading;
export const getPageDetailLoaded = (state: ListsState) => state.pageDetailLoaded;
export const getPageDetailFailed = (state: ListsState) => state.pageDetailFailed;
export const getPageDetail = (state: ListsState) => state.pageDetail;

export const getManufacturerLoading = (state: ListsState) => state.manufacturerLoading;
export const getManufacturerLoaded = (state: ListsState) => state.manufacturerLoaded;
export const getManufacturerFailed = (state: ListsState) => state.manufacturerFailed;

export const getProductDetailLoading = (state: ListsState) => state.productDetailLoading;
export const getProductDetailLoaded = (state: ListsState) => state.productDetailLoaded;
export const getProductDetailFailed = (state: ListsState) => state.productDetailFailed;

export const getCountryList = (state: ListsState) => state.countryList;
export const getCountryLoading = (state: ListsState) => state.countryLoading;
export const getCountryLoaded = (state: ListsState) => state.countryLoaded;
export const getCountryFailed = (state: ListsState) => state.countryFailed;

export const getZoneList = (state: ListsState) => state.zoneList;
export const getZoneLoading = (state: ListsState) => state.zoneLoading;
export const getZoneLoaded = (state: ListsState) => state.zoneLoaded;
export const getZoneFailed = (state: ListsState) => state.zoneFailed;

export const getTodayDealList = (state: ListsState) => state.todayDeal;
export const getTodayDealLoading = (state: ListsState) => state.todayDealLoading;
export const getTodayDealLoaded = (state: ListsState) => state.todayDealLoaded;
export const getTodayDealFailed = (state: ListsState) => state.todayDealFailed;

export const subCategoryList = (state: ListsState) => state.subcategory;
export const subCategoryLoading = (state: ListsState) => state.subcategoryLoading;
export const subCategoryLoaded = (state: ListsState) => state.subcategoryLoaded;
export const subCategoryFailed = (state: ListsState) => state.todayDealFailed;

export const selectedCategoryId = (state: ListsState) => state.SelectedcategoryId;
