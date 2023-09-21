import { defineStore } from 'pinia'

const useProductStore = defineStore('product', {
  state: () => ({
    product: {},
    productImagePreview: '',
    productImagesArray: [],
    productTitle: 'No Title',
    productAdditional: '',
    productProperties: [],
    productCity: '',
    productArea: '',
    productCategory: '',
    productSubCategory:'',
    productUser: { },
    productPrice: '',
    loaded: false,
    createdAt: ''
  }),
  actions: {
    setProduct(product) {
      this.product = product;
    },
    setProductImagePreview(productImagePreview) {
      this.productImagePreview = productImagePreview;
    },
    setProductImagesArray(productImagesArray) {
      this.productImagesArray = productImagesArray;
    },
    setProductTitle(productTitle) {
      this.productTitle = productTitle;
    },
    setProductAdditional(productAdditional) {
      this.productAdditional = productAdditional;
    },
    setProductProperties(productProperties) {
      this.productProperties = productProperties;
    },
    setProductCity(productCity) {
      this.productCity = productCity;   
    },
    setProductArea(productArea) {
      this.productArea = productArea;
    },
    setProductCategory(productCategory) {
      this.productCategory = productCategory;
    },
    setProductSubCategory(productSubCategory) {
      this.productSubCategory = productSubCategory;
    },
    setProductUser(productUser) {
      this.productUser = productUser;
    },
    setProductPrice(productPrice) {
      this.productPrice = productPrice;
    },
    setIsLoaded(bool){
      this.loaded = bool
    },
    setCreatedAt(date){
      this.createdAt = date
    }
},
  getters: {
    getProduct(state) {
      return state.product
    },
    getProductImagePreview(state) {
      return state.productImagePreview;
    },
    getProductImagesArray(state) {
      return state.productImagesArray;
    },
    getProductTitle(state) {
      return state.productTitle;
    },
    getProductAdditional(state) {
      return state.productAdditional;
    },
    getProductProperties(state) {
      return state.productProperties;
    },
    getProductCity(state) {
      return state.productCity;
    },
    getProductArea(state) {
      return state.productArea;
    },
    getProductCategory(state) {
      return state.productCategory;
    },
    getProductSubCategory(state) {
      return state.productSubCategory;
    },
    getProductUser(state) {
      return state.productUser;
    },
    getProductPrice(state) {
      return state.productPrice;
    },
    getIsLoaded(state) {
      return state.loaded;
    },
    getCreatedAt(state){
      return state.createdAt;
    }
  }
})

export default useProductStore;