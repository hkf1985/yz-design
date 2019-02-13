(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/button/button.component */ "./src/app/view/button/button.component.ts");
/* harmony import */ var _view_icon_view_icon_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/icon-view/icon-view.component */ "./src/app/view/icon-view/icon-view.component.ts");
/* harmony import */ var _view_nav_top_nav_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/nav-top/nav-top.component */ "./src/app/view/nav-top/nav-top.component.ts");
/* harmony import */ var _view_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/popover/popover.component */ "./src/app/view/popover/popover.component.ts");
/* harmony import */ var _view_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/scroll/scroll.component */ "./src/app/view/scroll/scroll.component.ts");
/* harmony import */ var _view_page_reload_page_reload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/page-reload/page-reload.component */ "./src/app/view/page-reload/page-reload.component.ts");
/* harmony import */ var _view_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/upload-img/upload-img.component */ "./src/app/view/upload-img/upload-img.component.ts");
/* harmony import */ var _view_flex_flex_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/flex/flex.component */ "./src/app/view/flex/flex.component.ts");
/* harmony import */ var _view_flex_item_flex_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/flex-item/flex-item.component */ "./src/app/view/flex-item/flex-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _view_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"] },
    { path: 'navTop', component: _view_nav_top_nav_top_component__WEBPACK_IMPORTED_MODULE_4__["NavTopComponent"] },
    { path: 'popover', component: _view_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"] },
    { path: 'flex', component: _view_flex_flex_component__WEBPACK_IMPORTED_MODULE_9__["FlexComponent"] },
    { path: 'flexItem', component: _view_flex_item_flex_item_component__WEBPACK_IMPORTED_MODULE_10__["FlexItemComponent"] },
    { path: 'icon', component: _view_icon_view_icon_view_component__WEBPACK_IMPORTED_MODULE_3__["IconViewComponent"] },
    { path: 'scroll', component: _view_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_6__["ScrollComponent"] },
    { path: 'pageReload', component: _view_page_reload_page_reload_component__WEBPACK_IMPORTED_MODULE_7__["PageReloadComponent"] },
    { path: 'uploadImg', component: _view_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_8__["UploadImgComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-right-nav class=\"pull-left\"></app-right-nav>\n<div  class=\"pull-right content\" [ngStyle]=\"{'width.px':width,'height.px':height}\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.width = document.documentElement.clientWidth * .8 - 30;
        this.height = document.documentElement.clientHeight;
        this.title = 'yz-design';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_rose_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-rose-mobile */ "./node_modules/ng-rose-mobile/fesm5/ng-rose-mobile.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/right-nav/right-nav.component */ "./src/app/component/right-nav/right-nav.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _view_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/button/button.component */ "./src/app/view/button/button.component.ts");
/* harmony import */ var _view_icon_view_icon_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/icon-view/icon-view.component */ "./src/app/view/icon-view/icon-view.component.ts");
/* harmony import */ var _component_mobile_view_mobile_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/mobile-view/mobile-view.component */ "./src/app/component/mobile-view/mobile-view.component.ts");
/* harmony import */ var _view_nav_top_nav_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/nav-top/nav-top.component */ "./src/app/view/nav-top/nav-top.component.ts");
/* harmony import */ var _view_popover_popover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/popover/popover.component */ "./src/app/view/popover/popover.component.ts");
/* harmony import */ var _view_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/scroll/scroll.component */ "./src/app/view/scroll/scroll.component.ts");
/* harmony import */ var _view_page_reload_page_reload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/page-reload/page-reload.component */ "./src/app/view/page-reload/page-reload.component.ts");
/* harmony import */ var _view_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/upload-img/upload-img.component */ "./src/app/view/upload-img/upload-img.component.ts");
/* harmony import */ var _view_flex_flex_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/flex/flex.component */ "./src/app/view/flex/flex.component.ts");
/* harmony import */ var _view_flex_item_flex_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view/flex-item/flex-item.component */ "./src/app/view/flex-item/flex-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_6__["RightNavComponent"],
                _view_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
                _view_icon_view_icon_view_component__WEBPACK_IMPORTED_MODULE_9__["IconViewComponent"],
                _component_mobile_view_mobile_view_component__WEBPACK_IMPORTED_MODULE_10__["MobileViewComponent"],
                _view_nav_top_nav_top_component__WEBPACK_IMPORTED_MODULE_11__["NavTopComponent"],
                _view_popover_popover_component__WEBPACK_IMPORTED_MODULE_12__["PopoverComponent"],
                _view_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__["ScrollComponent"],
                _view_page_reload_page_reload_component__WEBPACK_IMPORTED_MODULE_14__["PageReloadComponent"],
                _view_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_15__["UploadImgComponent"],
                _view_flex_flex_component__WEBPACK_IMPORTED_MODULE_16__["FlexComponent"],
                _view_flex_item_flex_item_component__WEBPACK_IMPORTED_MODULE_17__["FlexItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ng_rose_mobile__WEBPACK_IMPORTED_MODULE_3__["NgRoseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/mobile-view/mobile-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/mobile-view/mobile-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile\">\n  <div class=\"mobile-header\">\n    <div class=\"phone\"></div>\n    <div class=\"camera\"></div>\n  </div>\n  <div class=\"mobile-content\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"mobile-footer\">\n    <div class=\"mobile-button\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/mobile-view/mobile-view.component.less":
/*!******************************************************************!*\
  !*** ./src/app/component/mobile-view/mobile-view.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobile {\n  width: 375px;\n  border: 2px solid #000000;\n  border-radius: 20px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  margin: 20px auto;\n}\n.mobile .mobile-header {\n  height: 60px;\n  background-color: #333333;\n  position: relative;\n  overflow: hidden;\n}\n.mobile .mobile-header .phone {\n  width: 60px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #000000;\n  margin: 27px auto;\n}\n.mobile .mobile-header .camera {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);\n  background-color: #000000;\n  position: absolute;\n  left: 230px;\n  top: 27px;\n}\n.mobile .mobile-content {\n  width: 100%;\n  height: 667px;\n  overflow-y: auto;\n  background-color: #f0f0f0;\n}\n.mobile .mobile-footer {\n  width: 100%;\n  height: 60px;\n  background-color: #333333;\n  overflow: hidden;\n}\n.mobile .mobile-footer .mobile-button {\n  height: 40px;\n  width: 40px;\n  border: 1px solid #000000;\n  border-radius: 20px;\n  margin: 9px auto;\n}\n"

/***/ }),

/***/ "./src/app/component/mobile-view/mobile-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/mobile-view/mobile-view.component.ts ***!
  \****************************************************************/
/*! exports provided: MobileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileViewComponent", function() { return MobileViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileViewComponent = /** @class */ (function () {
    function MobileViewComponent() {
    }
    MobileViewComponent.prototype.ngOnInit = function () {
    };
    MobileViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mobile-view',
            template: __webpack_require__(/*! ./mobile-view.component.html */ "./src/app/component/mobile-view/mobile-view.component.html"),
            styles: [__webpack_require__(/*! ./mobile-view.component.less */ "./src/app/component/mobile-view/mobile-view.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileViewComponent);
    return MobileViewComponent;
}());



/***/ }),

/***/ "./src/app/component/right-nav/right-nav.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/right-nav/right-nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-nav\" [ngStyle]=\"{'width.px':width,'height.px':height}\">\n  <h2>YZ DESIGN</h2>\n  <ul>\n    <li>\n      <h3>布局</h3>\n      <div class=\"list\">\n        <a routerLink=\"/flex\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">flex</a>\n        <a routerLink=\"/flexItem\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">flex-item</a>\n      </div>\n    </li>\n    <li>\n      <h3>按钮和图标</h3>\n      <div class=\"list\">\n        <a routerLink=\"\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">按钮</a>\n        <a routerLink=\"/icon\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">图标</a>\n      </div>\n    </li>\n    <li>\n      <h3>导航</h3>\n      <div class=\"list\">\n        <a routerLink=\"/navTop\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">顶部导航</a>\n        <a routerLink=\"/popover\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">气泡</a>\n      </div>\n    </li>\n    <li>\n      <h3>数据输入</h3>\n      <div class=\"list\">\n        <a routerLink=\"/uploadImg\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">图片上传</a>\n      </div>\n    </li>\n    <li>\n      <h3>数据加载</h3>\n      <div class=\"list\">\n        <a routerLink=\"/scroll\"  routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">数据更新</a>\n        <a routerLink=\"/pageReload\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">页面刷新</a>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/component/right-nav/right-nav.component.less":
/*!**************************************************************!*\
  !*** ./src/app/component/right-nav/right-nav.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-nav {\n  overflow-y: auto;\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.1);\n}\n.right-nav h2 {\n  text-align: center;\n  font-size: 24px;\n  line-height: 40px;\n  padding: 20px 0;\n}\n.right-nav ul {\n  padding-bottom: 20px;\n}\n.right-nav li h3 {\n  font-size: 16px;\n  padding-left: 10px;\n  height: 44px;\n  line-height: 44px;\n}\n.right-nav li .list {\n  padding-left: 10px;\n  overflow: hidden;\n}\n.right-nav li .list a {\n  font-size: 14px;\n  padding-left: 10px;\n  line-height: 32px;\n  display: block;\n  cursor: pointer;\n  color: #333;\n  border-left: 2px solid #fff;\n}\n.right-nav li .list a:hover {\n  color: #108ee9;\n}\n.right-nav li .list a.active {\n  background-color: rgba(16, 142, 233, 0.2);\n  color: #108ee9;\n  border-left-color: #108ee9;\n}\n"

/***/ }),

/***/ "./src/app/component/right-nav/right-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/right-nav/right-nav.component.ts ***!
  \************************************************************/
/*! exports provided: RightNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightNavComponent", function() { return RightNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightNavComponent = /** @class */ (function () {
    function RightNavComponent() {
        this.width = document.documentElement.clientWidth * .2;
        this.height = document.documentElement.clientHeight;
    }
    RightNavComponent.prototype.ngOnInit = function () {
    };
    RightNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-nav',
            template: __webpack_require__(/*! ./right-nav.component.html */ "./src/app/component/right-nav/right-nav.component.html"),
            styles: [__webpack_require__(/*! ./right-nav.component.less */ "./src/app/component/right-nav/right-nav.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], RightNavComponent);
    return RightNavComponent;
}());



/***/ }),

/***/ "./src/app/view/button/button.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/button/button.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Button 按钮</h2>\n\n<div class=\"table\">\n  <div class=\"clear header\">\n    <h4 class=\"win-10\">属性</h4>\n    <h4 class=\"win-70\">说明</h4>\n    <h4 class=\"win-10\">类型</h4>\n    <h4 class=\"win-10\">默认值</h4>\n  </div>\n  <ul class=\"list\">\n    <li class=\"clear\" *ngFor=\"let item of data\">\n      <p class=\"win-10\">{{item.attr}}</p>\n      <p class=\"win-70\">{{item.explain}}</p>\n      <p class=\"win-10\">{{item.type}}</p>\n      <p class=\"win-10\">{{item.default}}</p>\n    </li>\n  </ul>\n</div>\n\n<h2>按钮示例</h2>\n\n<div class=\"example\">\n    <app-mobile-view>\n      <div class=\"button-wrap\">\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'small'\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [disabled]=\"true\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'warning'\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'warning'\" [disabled]=\"true\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'default'\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'default'\" [disabled]=\"true\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'hollow'\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'hollow'\" [disabled]=\"true\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'hollow'\" [type]=\"'warning'\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'hollow'\" [type]=\"'warning'\" [disabled]=\"true\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'hollow'\" [type]=\"'default'\">小按钮</nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'hollow'\" [type]=\"'default'\" [disabled]=\"true\">小按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'small'\" [shape]=\"'radio'\" [iconType]=\"'home'\"></nrs-button>\n        <nrs-button [size]=\"'small'\" [shape]=\"'radio'\" [iconType]=\"'map2'\" [disabled]=\"true\"></nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'warning'\" [shape]=\"'radio'\" [iconType]=\" 'map'\" ></nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'warning'\" [shape]=\"'radio'\" [iconType]=\" 'history'\" [disabled]=\"true\"></nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'default'\" [shape]=\"'radio'\" [iconType]=\" 'clock'\" ></nrs-button>\n        <nrs-button [size]=\"'small'\" [type]=\"'default'\" [shape]=\"'radio'\" [iconType]=\" 'clock2'\" [disabled]=\"true\"></nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <h2>中等按钮</h2>\n        <nrs-button [size]=\"'middle'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'warning'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'warning'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'default'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'default'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [type]=\"'warning'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [type]=\"'warning'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [type]=\"'default'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [type]=\"'default'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'radio'\" [iconType]=\" 'home'\"></nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'radio'\" [iconType]=\" 'home2'\" [disabled]=\"true\"></nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'warning'\" [shape]=\"'radio'\" [iconType]=\" 'clock'\" ></nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'warning'\" [shape]=\"'radio'\" [iconType]=\" 'home3'\" [disabled]=\"true\"></nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'default'\" [shape]=\"'radio'\" [iconType]=\" 'map'\" ></nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'default'\" [shape]=\"'radio'\" [iconType]=\" 'map2'\" [disabled]=\"true\"></nrs-button>\n\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'middle'\" [iconType]=\" 'download'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [disabled]=\"true\" [iconType]=\" 'download'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'warning'\" [iconType]=\" 'download'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'warning'\" [iconType]=\" 'download'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'default'\" [iconType]=\" 'download'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [type]=\"'default'\" [iconType]=\" 'download'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [iconType]=\" 'download'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [iconType]=\" 'download'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [iconType]=\" 'download'\" [type]=\"'warning'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [iconType]=\" 'download'\" [type]=\"'warning'\" [disabled]=\"true\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [iconType]=\" 'download'\" [type]=\"'default'\">中等按钮</nrs-button>\n        <nrs-button [size]=\"'middle'\" [shape]=\"'hollow'\" [iconType]=\" 'download'\" [type]=\"'default'\" [disabled]=\"true\">中等按钮</nrs-button>\n\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [type]=\"'warning'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [type]=\"'default'\">大按钮</nrs-button>\n\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [type]=\"'warning'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [type]=\"'default'\">大按钮</nrs-button>\n\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [disabled]=\"true\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [type]=\"'warning'\"  [disabled]=\"true\"> 大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [type]=\"'default'\"  [disabled]=\"true\">大按钮</nrs-button>\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\" >大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\"  [type]=\"'warning'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\" [type]=\"'default'\" >大按钮</nrs-button>\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\"  [disabled]=\"true\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\"  [type]=\"'warning'\" [disabled]=\"true\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'large'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\" [type]=\"'default'\" [disabled]=\"true\">大按钮</nrs-button>\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [type]=\"'warning'\" [loading]=\"loader\" (onclick)=\"updateData()\">updateData</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [type]=\"'warning'\" [loading]=\"loaderTwo\"   [disabled]=\"true\" (onclick)=\"updateDataTwo()\"> updateDataTwo</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [type]=\"'default'\">大按钮</nrs-button>\n\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [type]=\"'warning'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [type]=\"'default'\">大按钮</nrs-button>\n\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [disabled]=\"true\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [type]=\"'default'\"  [disabled]=\"true\">大按钮</nrs-button>\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\" >大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\"  [type]=\"'warning'\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\" [type]=\"'default'\" >大按钮</nrs-button>\n\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\"  [disabled]=\"true\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\"  [type]=\"'warning'\" [disabled]=\"true\">大按钮</nrs-button>\n        <nrs-white-space [height]=\"20\"></nrs-white-space>\n        <nrs-button [size]=\"'full'\" [iconType]=\" 'download'\" [shape]=\"'hollow'\" [type]=\"'default'\" [disabled]=\"true\">大按钮</nrs-button>\n      </div>\n    </app-mobile-view>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/view/button/button.component.less":
/*!***************************************************!*\
  !*** ./src/app/view/button/button.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src:  url('icomoon.eot?8t91ih');\n  src:  url('icomoon.eot?8t91ih#iefix') format('embedded-opentype'),\n    url('icomoon.ttf?8t91ih') format('truetype'),\n    url('icomoon.woff?8t91ih') format('woff'),\n    url('icomoon.svg?8t91ih#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /*line-height: 1;*/\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-Loading:before {\n  content: \"\\e900\";\n}\n\n.icon-check:before {\n  content: \"\\e901\";\n}\n\n.icon-more3:before {\n  content: \"\\e902\";\n}\n\n.icon-certificate:before {\n  content: \"\\e903\";\n}\n\n.icon-news:before {\n  content: \"\\e904\";\n}\n\n.icon-keys01:before {\n  content: \"\\e905\";\n}\n\n.icon-user02:before {\n  content: \"\\e906\";\n}\n\n.icon-user03:before {\n  content: \"\\e907\";\n}\n\n.icon-keys02:before {\n  content: \"\\e908\";\n}\n\n.icon-android:before {\n  content: \"\\e909\";\n}\n\n.icon-help:before {\n  content: \"\\e90a\";\n}\n\n.icon-ios:before {\n  content: \"\\e90b\";\n}\n\n.icon-searchPage:before {\n  content: \"\\e90c\";\n}\n\n.icon-add:before {\n  content: \"\\e90d\";\n}\n\n.icon-back:before {\n  content: \"\\e90e\";\n}\n\n.icon-close:before {\n  content: \"\\e90f\";\n}\n\n.icon-hotLine:before {\n  content: \"\\e910\";\n}\n\n.icon-i:before {\n  content: \"\\e911\";\n}\n\n.icon-link:before {\n  content: \"\\e912\";\n}\n\n.icon-more:before {\n  content: \"\\e913\";\n}\n\n.icon-next_1:before {\n  content: \"\\e914\";\n}\n\n.icon-next:before {\n  content: \"\\e915\";\n}\n\n.icon-phone:before {\n  content: \"\\e916\";\n}\n\n.icon-pwd:before {\n  content: \"\\e917\";\n}\n\n.icon-reduce:before {\n  content: \"\\e918\";\n}\n\n.icon-tabs:before {\n  content: \"\\e919\";\n}\n\n.icon-tel:before {\n  content: \"\\e91a\";\n}\n\n.icon-time:before {\n  content: \"\\e91b\";\n}\n\n.icon-user:before {\n  content: \"\\e91c\";\n}\n\n.icon-verify:before {\n  content: \"\\e91d\";\n}\n\n.icon-mobile:before {\n  content: \"\\e91e\";\n}\n\n.icon-show:before {\n  content: \"\\e91f\";\n}\n\n.icon-site:before {\n  content: \"\\e920\";\n}\n\n.icon-triangle:before {\n  content: \"\\e921\";\n}\n\n.icon-hide:before {\n  content: \"\\e922\";\n}\n\n.icon-userData:before {\n  content: \"\\e923\";\n}\n\n.icon-header:before {\n  content: \"\\e924\";\n}\n\n.icon-feedback:before {\n  content: \"\\e925\";\n}\n\n.icon-learn:before {\n  content: \"\\e926\";\n}\n\n.icon-set:before {\n  content: \"\\e927\";\n}\n\n.icon-selected:before {\n  content: \"\\e928\";\n}\n\n.icon-notSelected:before {\n  content: \"\\e929\";\n}\n\n.icon-notice:before {\n  content: \"\\e92a\";\n}\n\n.icon-define:before {\n  content: \"\\e92b\";\n}\n\n.icon-lock:before {\n  content: \"\\e92c\";\n}\n\n.icon-unfinished:before {\n  content: \"\\e92d\";\n}\n\n.icon-closedEyes:before {\n  content: \"\\e92e\";\n}\n\n.icon-signOut:before {\n  content: \"\\e92f\";\n}\n\n.icon-closev2:before {\n  content: \"\\e930\";\n}\n\n.icon-photo:before {\n  content: \"\\e931\";\n}\n\n.icon-photograph:before {\n  content: \"\\e932\";\n}\n\n.icon-video:before {\n  content: \"\\e933\";\n}\n\n.icon-userDetails:before {\n  content: \"\\e934\";\n}\n\n.icon-index:before {\n  content: \"\\e935\";\n}\n\n.icon-phone02:before {\n  content: \"\\e936\";\n}\n\n.icon-eyes:before {\n  content: \"\\e937\";\n}\n\n.icon-pwd02:before {\n  content: \"\\e938\";\n}\n\n.icon-company:before {\n  content: \"\\e939\";\n}\n\n.icon-county:before {\n  content: \"\\e93a\";\n}\n\n.icon-search:before {\n  content: \"\\e93b\";\n}\n\n.icon-alipay:before {\n  content: \"\\e93c\";\n}\n\n.icon-WeChat:before {\n  content: \"\\e93d\";\n}\n\n.icon-right-arrow:before {\n  content: \"\\e93e\";\n}\n\n.icon-more2:before {\n  content: \"\\e93f\";\n}\n\n.icon-course:before {\n  content: \"\\e940\";\n}\n\n.icon-verified:before {\n  content: \"\\e941\";\n}\n\n.icon-home:before {\n  content: \"\\e942\";\n}\n\n.icon-home2:before {\n  content: \"\\e943\";\n}\n\n.icon-home3:before {\n  content: \"\\e944\";\n}\n\n.icon-office:before {\n  content: \"\\e945\";\n}\n\n.icon-newspaper:before {\n  content: \"\\e946\";\n}\n\n.icon-pencil:before {\n  content: \"\\e947\";\n}\n\n.icon-pencil2:before {\n  content: \"\\e948\";\n}\n\n.icon-quill:before {\n  content: \"\\e949\";\n}\n\n.icon-pen:before {\n  content: \"\\e94a\";\n}\n\n.icon-blog:before {\n  content: \"\\e94b\";\n}\n\n.icon-eyedropper:before {\n  content: \"\\e94c\";\n}\n\n.icon-droplet:before {\n  content: \"\\e94d\";\n}\n\n.icon-paint-format:before {\n  content: \"\\e94e\";\n}\n\n.icon-image:before {\n  content: \"\\e94f\";\n}\n\n.icon-images:before {\n  content: \"\\eb20\";\n}\n\n.icon-camera:before {\n  content: \"\\e950\";\n}\n\n.icon-headphones:before {\n  content: \"\\e951\";\n}\n\n.icon-music:before {\n  content: \"\\e952\";\n}\n\n.icon-play:before {\n  content: \"\\e953\";\n}\n\n.icon-film:before {\n  content: \"\\e954\";\n}\n\n.icon-video-camera:before {\n  content: \"\\e955\";\n}\n\n.icon-dice:before {\n  content: \"\\e956\";\n}\n\n.icon-pacman:before {\n  content: \"\\e957\";\n}\n\n.icon-spades:before {\n  content: \"\\e958\";\n}\n\n.icon-clubs:before {\n  content: \"\\e959\";\n}\n\n.icon-diamonds:before {\n  content: \"\\e95a\";\n}\n\n.icon-bullhorn:before {\n  content: \"\\e95b\";\n}\n\n.icon-connection:before {\n  content: \"\\e95c\";\n}\n\n.icon-podcast:before {\n  content: \"\\e95d\";\n}\n\n.icon-feed:before {\n  content: \"\\e95e\";\n}\n\n.icon-mic:before {\n  content: \"\\e95f\";\n}\n\n.icon-book:before {\n  content: \"\\e960\";\n}\n\n.icon-books:before {\n  content: \"\\e961\";\n}\n\n.icon-library:before {\n  content: \"\\e962\";\n}\n\n.icon-file-text:before {\n  content: \"\\e963\";\n}\n\n.icon-profile:before {\n  content: \"\\e964\";\n}\n\n.icon-file-empty:before {\n  content: \"\\e965\";\n}\n\n.icon-files-empty:before {\n  content: \"\\e966\";\n}\n\n.icon-file-text2:before {\n  content: \"\\e967\";\n}\n\n.icon-file-picture:before {\n  content: \"\\e968\";\n}\n\n.icon-file-music:before {\n  content: \"\\e969\";\n}\n\n.icon-file-play:before {\n  content: \"\\e96a\";\n}\n\n.icon-file-video:before {\n  content: \"\\e96b\";\n}\n\n.icon-file-zip:before {\n  content: \"\\e96c\";\n}\n\n.icon-copy:before {\n  content: \"\\e96d\";\n}\n\n.icon-paste:before {\n  content: \"\\e96e\";\n}\n\n.icon-stack:before {\n  content: \"\\e96f\";\n}\n\n.icon-folder:before {\n  content: \"\\e970\";\n}\n\n.icon-folder-open:before {\n  content: \"\\e971\";\n}\n\n.icon-folder-plus:before {\n  content: \"\\e972\";\n}\n\n.icon-folder-minus:before {\n  content: \"\\e973\";\n}\n\n.icon-folder-download:before {\n  content: \"\\e974\";\n}\n\n.icon-folder-upload:before {\n  content: \"\\e975\";\n}\n\n.icon-price-tag:before {\n  content: \"\\e976\";\n}\n\n.icon-price-tags:before {\n  content: \"\\e977\";\n}\n\n.icon-barcode:before {\n  content: \"\\e978\";\n}\n\n.icon-qrcode:before {\n  content: \"\\e979\";\n}\n\n.icon-ticket:before {\n  content: \"\\e97a\";\n}\n\n.icon-cart:before {\n  content: \"\\e97b\";\n}\n\n.icon-coin-dollar:before {\n  content: \"\\e97c\";\n}\n\n.icon-coin-euro:before {\n  content: \"\\e97d\";\n}\n\n.icon-coin-pound:before {\n  content: \"\\e97e\";\n}\n\n.icon-coin-yen:before {\n  content: \"\\e97f\";\n}\n\n.icon-credit-card:before {\n  content: \"\\e980\";\n}\n\n.icon-calculator:before {\n  content: \"\\e981\";\n}\n\n.icon-lifebuoy:before {\n  content: \"\\e982\";\n}\n\n.icon-phone1:before {\n  content: \"\\e983\";\n}\n\n.icon-phone-hang-up:before {\n  content: \"\\e984\";\n}\n\n.icon-address-book:before {\n  content: \"\\e985\";\n}\n\n.icon-envelop:before {\n  content: \"\\e986\";\n}\n\n.icon-pushpin:before {\n  content: \"\\e987\";\n}\n\n.icon-location:before {\n  content: \"\\e988\";\n}\n\n.icon-location2:before {\n  content: \"\\e989\";\n}\n\n.icon-compass:before {\n  content: \"\\e98a\";\n}\n\n.icon-compass2:before {\n  content: \"\\e98b\";\n}\n\n.icon-map:before {\n  content: \"\\e98c\";\n}\n\n.icon-map2:before {\n  content: \"\\e98d\";\n}\n\n.icon-history:before {\n  content: \"\\e98e\";\n}\n\n.icon-clock:before {\n  content: \"\\e98f\";\n}\n\n.icon-clock2:before {\n  content: \"\\e990\";\n}\n\n.icon-alarm:before {\n  content: \"\\e991\";\n}\n\n.icon-bell:before {\n  content: \"\\e992\";\n}\n\n.icon-stopwatch:before {\n  content: \"\\e993\";\n}\n\n.icon-calendar:before {\n  content: \"\\e994\";\n}\n\n.icon-printer:before {\n  content: \"\\e995\";\n}\n\n.icon-keyboard:before {\n  content: \"\\e996\";\n}\n\n.icon-display:before {\n  content: \"\\e997\";\n}\n\n.icon-laptop:before {\n  content: \"\\e998\";\n}\n\n.icon-mobile1:before {\n  content: \"\\e999\";\n}\n\n.icon-mobile2:before {\n  content: \"\\e99a\";\n}\n\n.icon-tablet:before {\n  content: \"\\e99b\";\n}\n\n.icon-tv:before {\n  content: \"\\e99c\";\n}\n\n.icon-drawer:before {\n  content: \"\\e99d\";\n}\n\n.icon-drawer2:before {\n  content: \"\\e99e\";\n}\n\n.icon-box-add:before {\n  content: \"\\e99f\";\n}\n\n.icon-box-remove:before {\n  content: \"\\e9a0\";\n}\n\n.icon-download:before {\n  content: \"\\e9a1\";\n}\n\n.icon-upload:before {\n  content: \"\\e9a2\";\n}\n\n.icon-floppy-disk:before {\n  content: \"\\e9a3\";\n}\n\n.icon-drive:before {\n  content: \"\\e9a4\";\n}\n\n.icon-database:before {\n  content: \"\\e9a5\";\n}\n\n.icon-undo:before {\n  content: \"\\e9a6\";\n}\n\n.icon-redo:before {\n  content: \"\\e9a7\";\n}\n\n.icon-undo2:before {\n  content: \"\\e9a8\";\n}\n\n.icon-redo2:before {\n  content: \"\\e9a9\";\n}\n\n.icon-forward:before {\n  content: \"\\e9aa\";\n}\n\n.icon-reply:before {\n  content: \"\\e9ab\";\n}\n\n.icon-bubble:before {\n  content: \"\\e9ac\";\n}\n\n.icon-bubbles:before {\n  content: \"\\e9ad\";\n}\n\n.icon-bubbles2:before {\n  content: \"\\e9ae\";\n}\n\n.icon-bubble2:before {\n  content: \"\\e9af\";\n}\n\n.icon-bubbles3:before {\n  content: \"\\e9b0\";\n}\n\n.icon-bubbles4:before {\n  content: \"\\e9b1\";\n}\n\n.icon-user1:before {\n  content: \"\\e9b2\";\n}\n\n.icon-users:before {\n  content: \"\\e9b3\";\n}\n\n.icon-user-plus:before {\n  content: \"\\e9b4\";\n}\n\n.icon-user-minus:before {\n  content: \"\\e9b5\";\n}\n\n.icon-user-check:before {\n  content: \"\\e9b6\";\n}\n\n.icon-user-tie:before {\n  content: \"\\e9b7\";\n}\n\n.icon-quotes-left:before {\n  content: \"\\e9b8\";\n}\n\n.icon-quotes-right:before {\n  content: \"\\e9b9\";\n}\n\n.icon-hour-glass:before {\n  content: \"\\e9ba\";\n}\n\n.icon-spinner:before {\n  content: \"\\e9bb\";\n}\n\n.icon-spinner2:before {\n  content: \"\\e9bc\";\n}\n\n.icon-spinner3:before {\n  content: \"\\e9bd\";\n}\n\n.icon-spinner4:before {\n  content: \"\\e9be\";\n}\n\n.icon-spinner5:before {\n  content: \"\\e9bf\";\n}\n\n.icon-spinner6:before {\n  content: \"\\eb1f\";\n}\n\n.icon-spinner7:before {\n  content: \"\\e9c0\";\n}\n\n.icon-spinner8:before {\n  content: \"\\e9c1\";\n}\n\n.icon-spinner9:before {\n  content: \"\\e9c2\";\n}\n\n.icon-spinner10:before {\n  content: \"\\e9c3\";\n}\n\n.icon-spinner11:before {\n  content: \"\\e9c4\";\n}\n\n.icon-binoculars:before {\n  content: \"\\e9c5\";\n}\n\n.icon-search1:before {\n  content: \"\\e9c6\";\n}\n\n.icon-zoom-in:before {\n  content: \"\\e9c7\";\n}\n\n.icon-zoom-out:before {\n  content: \"\\e9c8\";\n}\n\n.icon-enlarge:before {\n  content: \"\\e9c9\";\n}\n\n.icon-shrink:before {\n  content: \"\\e9ca\";\n}\n\n.icon-enlarge2:before {\n  content: \"\\e9cb\";\n}\n\n.icon-shrink2:before {\n  content: \"\\e9cc\";\n}\n\n.icon-key:before {\n  content: \"\\eb1e\";\n}\n\n.icon-key2:before {\n  content: \"\\e9cd\";\n}\n\n.icon-lock1:before {\n  content: \"\\e9ce\";\n}\n\n.icon-unlocked:before {\n  content: \"\\e9cf\";\n}\n\n.icon-wrench:before {\n  content: \"\\e9d0\";\n}\n\n.icon-equalizer:before {\n  content: \"\\e9d1\";\n}\n\n.icon-equalizer2:before {\n  content: \"\\e9d2\";\n}\n\n.icon-cog:before {\n  content: \"\\e9d3\";\n}\n\n.icon-cogs:before {\n  content: \"\\e9d4\";\n}\n\n.icon-hammer:before {\n  content: \"\\e9d5\";\n}\n\n.icon-magic-wand:before {\n  content: \"\\e9d6\";\n}\n\n.icon-aid-kit:before {\n  content: \"\\e9d7\";\n}\n\n.icon-bug:before {\n  content: \"\\e9d8\";\n}\n\n.icon-pie-chart:before {\n  content: \"\\e9d9\";\n}\n\n.icon-stats-dots:before {\n  content: \"\\e9da\";\n}\n\n.icon-stats-bars:before {\n  content: \"\\e9db\";\n}\n\n.icon-stats-bars2:before {\n  content: \"\\e9dc\";\n}\n\n.icon-trophy:before {\n  content: \"\\e9dd\";\n}\n\n.icon-gift:before {\n  content: \"\\e9de\";\n}\n\n.icon-glass:before {\n  content: \"\\e9df\";\n}\n\n.icon-glass2:before {\n  content: \"\\e9e0\";\n}\n\n.icon-mug:before {\n  content: \"\\e9e1\";\n}\n\n.icon-spoon-knife:before {\n  content: \"\\e9e2\";\n}\n\n.icon-leaf:before {\n  content: \"\\e9e3\";\n}\n\n.icon-rocket:before {\n  content: \"\\e9e4\";\n}\n\n.icon-meter:before {\n  content: \"\\e9e5\";\n}\n\n.icon-meter2:before {\n  content: \"\\e9e6\";\n}\n\n.icon-hammer2:before {\n  content: \"\\e9e7\";\n}\n\n.icon-fire:before {\n  content: \"\\e9e8\";\n}\n\n.icon-lab:before {\n  content: \"\\e9e9\";\n}\n\n.icon-magnet:before {\n  content: \"\\e9ea\";\n}\n\n.icon-bin:before {\n  content: \"\\e9eb\";\n}\n\n.icon-bin2:before {\n  content: \"\\e9ec\";\n}\n\n.icon-briefcase:before {\n  content: \"\\e9ed\";\n}\n\n.icon-airplane:before {\n  content: \"\\e9ee\";\n}\n\n.icon-truck:before {\n  content: \"\\e9ef\";\n}\n\n.icon-road:before {\n  content: \"\\e9f0\";\n}\n\n.icon-accessibility:before {\n  content: \"\\e9f1\";\n}\n\n.icon-target:before {\n  content: \"\\e9f2\";\n}\n\n.icon-shield:before {\n  content: \"\\e9f3\";\n}\n\n.icon-power:before {\n  content: \"\\e9f4\";\n}\n\n.icon-switch:before {\n  content: \"\\e9f5\";\n}\n\n.icon-power-cord:before {\n  content: \"\\e9f6\";\n}\n\n.icon-clipboard:before {\n  content: \"\\e9f7\";\n}\n\n.icon-list-numbered:before {\n  content: \"\\e9f8\";\n}\n\n.icon-list:before {\n  content: \"\\e9f9\";\n}\n\n.icon-list2:before {\n  content: \"\\e9fa\";\n}\n\n.icon-tree:before {\n  content: \"\\e9fb\";\n}\n\n.icon-menu:before {\n  content: \"\\e9fc\";\n}\n\n.icon-menu2:before {\n  content: \"\\e9fd\";\n}\n\n.icon-menu3:before {\n  content: \"\\e9fe\";\n}\n\n.icon-menu4:before {\n  content: \"\\e9ff\";\n}\n\n.icon-cloud:before {\n  content: \"\\ea00\";\n}\n\n.icon-cloud-download:before {\n  content: \"\\ea01\";\n}\n\n.icon-cloud-upload:before {\n  content: \"\\ea02\";\n}\n\n.icon-cloud-check:before {\n  content: \"\\ea03\";\n}\n\n.icon-download2:before {\n  content: \"\\ea04\";\n}\n\n.icon-upload2:before {\n  content: \"\\ea05\";\n}\n\n.icon-download3:before {\n  content: \"\\ea06\";\n}\n\n.icon-upload3:before {\n  content: \"\\ea07\";\n}\n\n.icon-sphere:before {\n  content: \"\\ea08\";\n}\n\n.icon-earth:before {\n  content: \"\\ea09\";\n}\n\n.icon-link1:before {\n  content: \"\\ea0a\";\n}\n\n.icon-flag:before {\n  content: \"\\ea0b\";\n}\n\n.icon-attachment:before {\n  content: \"\\ea0c\";\n}\n\n.icon-eye:before {\n  content: \"\\ea0d\";\n}\n\n.icon-eye-plus:before {\n  content: \"\\ea0e\";\n}\n\n.icon-eye-minus:before {\n  content: \"\\ea0f\";\n}\n\n.icon-eye-blocked:before {\n  content: \"\\ea10\";\n}\n\n.icon-bookmark:before {\n  content: \"\\ea11\";\n}\n\n.icon-bookmarks:before {\n  content: \"\\ea12\";\n}\n\n.icon-sun:before {\n  content: \"\\ea13\";\n}\n\n.icon-contrast:before {\n  content: \"\\ea14\";\n}\n\n.icon-brightness-contrast:before {\n  content: \"\\ea15\";\n}\n\n.icon-star-empty:before {\n  content: \"\\ea16\";\n}\n\n.icon-star-half:before {\n  content: \"\\ea17\";\n}\n\n.icon-star-full:before {\n  content: \"\\ea18\";\n}\n\n.icon-heart:before {\n  content: \"\\ea19\";\n}\n\n.icon-heart-broken:before {\n  content: \"\\ea1a\";\n}\n\n.icon-man:before {\n  content: \"\\ea1b\";\n}\n\n.icon-woman:before {\n  content: \"\\ea1c\";\n}\n\n.icon-man-woman:before {\n  content: \"\\ea1d\";\n}\n\n.icon-happy:before {\n  content: \"\\ea1e\";\n}\n\n.icon-happy2:before {\n  content: \"\\ea1f\";\n}\n\n.icon-smile:before {\n  content: \"\\ea20\";\n}\n\n.icon-smile2:before {\n  content: \"\\ea21\";\n}\n\n.icon-tongue:before {\n  content: \"\\ea22\";\n}\n\n.icon-tongue2:before {\n  content: \"\\ea23\";\n}\n\n.icon-sad:before {\n  content: \"\\ea24\";\n}\n\n.icon-sad2:before {\n  content: \"\\ea25\";\n}\n\n.icon-wink:before {\n  content: \"\\ea26\";\n}\n\n.icon-wink2:before {\n  content: \"\\ea27\";\n}\n\n.icon-grin:before {\n  content: \"\\ea28\";\n}\n\n.icon-grin2:before {\n  content: \"\\ea29\";\n}\n\n.icon-cool:before {\n  content: \"\\ea2a\";\n}\n\n.icon-cool2:before {\n  content: \"\\ea2b\";\n}\n\n.icon-angry:before {\n  content: \"\\ea2c\";\n}\n\n.icon-angry2:before {\n  content: \"\\ea2d\";\n}\n\n.icon-evil:before {\n  content: \"\\ea2e\";\n}\n\n.icon-evil2:before {\n  content: \"\\ea2f\";\n}\n\n.icon-shocked:before {\n  content: \"\\ea30\";\n}\n\n.icon-shocked2:before {\n  content: \"\\ea31\";\n}\n\n.icon-baffled:before {\n  content: \"\\ea32\";\n}\n\n.icon-baffled2:before {\n  content: \"\\ea33\";\n}\n\n.icon-confused:before {\n  content: \"\\ea34\";\n}\n\n.icon-confused2:before {\n  content: \"\\ea35\";\n}\n\n.icon-neutral:before {\n  content: \"\\ea36\";\n}\n\n.icon-neutral2:before {\n  content: \"\\ea37\";\n}\n\n.icon-hipster:before {\n  content: \"\\ea38\";\n}\n\n.icon-hipster2:before {\n  content: \"\\ea39\";\n}\n\n.icon-wondering:before {\n  content: \"\\ea3a\";\n}\n\n.icon-wondering2:before {\n  content: \"\\ea3b\";\n}\n\n.icon-sleepy:before {\n  content: \"\\ea3c\";\n}\n\n.icon-sleepy2:before {\n  content: \"\\ea3d\";\n}\n\n.icon-frustrated:before {\n  content: \"\\ea3e\";\n}\n\n.icon-frustrated2:before {\n  content: \"\\ea3f\";\n}\n\n.icon-crying:before {\n  content: \"\\ea40\";\n}\n\n.icon-crying2:before {\n  content: \"\\ea41\";\n}\n\n.icon-point-up:before {\n  content: \"\\ea42\";\n}\n\n.icon-point-right:before {\n  content: \"\\ea43\";\n}\n\n.icon-point-down:before {\n  content: \"\\ea44\";\n}\n\n.icon-point-left:before {\n  content: \"\\ea45\";\n}\n\n.icon-warning:before {\n  content: \"\\ea46\";\n}\n\n.icon-notification:before {\n  content: \"\\ea47\";\n}\n\n.icon-question:before {\n  content: \"\\ea48\";\n}\n\n.icon-plus:before {\n  content: \"\\ea49\";\n}\n\n.icon-minus:before {\n  content: \"\\ea4a\";\n}\n\n.icon-info:before {\n  content: \"\\ea4b\";\n}\n\n.icon-cancel-circle:before {\n  content: \"\\ea4c\";\n}\n\n.icon-blocked:before {\n  content: \"\\ea4d\";\n}\n\n.icon-cross:before {\n  content: \"\\ea4e\";\n}\n\n.icon-checkmark:before {\n  content: \"\\ea4f\";\n}\n\n.icon-checkmark2:before {\n  content: \"\\ea50\";\n}\n\n.icon-spell-check:before {\n  content: \"\\ea51\";\n}\n\n.icon-enter:before {\n  content: \"\\ea52\";\n}\n\n.icon-exit:before {\n  content: \"\\ea53\";\n}\n\n.icon-play2:before {\n  content: \"\\ea54\";\n}\n\n.icon-pause:before {\n  content: \"\\ea55\";\n}\n\n.icon-stop:before {\n  content: \"\\ea56\";\n}\n\n.icon-previous:before {\n  content: \"\\ea57\";\n}\n\n.icon-next1:before {\n  content: \"\\ea58\";\n}\n\n.icon-backward:before {\n  content: \"\\ea59\";\n}\n\n.icon-forward2:before {\n  content: \"\\ea5a\";\n}\n\n.icon-play3:before {\n  content: \"\\ea5b\";\n}\n\n.icon-pause2:before {\n  content: \"\\ea5c\";\n}\n\n.icon-stop2:before {\n  content: \"\\ea5d\";\n}\n\n.icon-backward2:before {\n  content: \"\\ea5e\";\n}\n\n.icon-forward3:before {\n  content: \"\\ea5f\";\n}\n\n.icon-first:before {\n  content: \"\\ea60\";\n}\n\n.icon-last:before {\n  content: \"\\ea61\";\n}\n\n.icon-previous2:before {\n  content: \"\\ea62\";\n}\n\n.icon-next2:before {\n  content: \"\\ea63\";\n}\n\n.icon-eject:before {\n  content: \"\\ea64\";\n}\n\n.icon-volume-high:before {\n  content: \"\\ea65\";\n}\n\n.icon-volume-medium:before {\n  content: \"\\ea66\";\n}\n\n.icon-volume-low:before {\n  content: \"\\ea67\";\n}\n\n.icon-volume-mute:before {\n  content: \"\\ea68\";\n}\n\n.icon-volume-mute2:before {\n  content: \"\\ea69\";\n}\n\n.icon-volume-increase:before {\n  content: \"\\ea6a\";\n}\n\n.icon-volume-decrease:before {\n  content: \"\\ea6b\";\n}\n\n.icon-loop:before {\n  content: \"\\ea6c\";\n}\n\n.icon-loop2:before {\n  content: \"\\ea6d\";\n}\n\n.icon-infinite:before {\n  content: \"\\ea6e\";\n}\n\n.icon-shuffle:before {\n  content: \"\\ea6f\";\n}\n\n.icon-arrow-up-left:before {\n  content: \"\\ea70\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\ea71\";\n}\n\n.icon-arrow-up-right:before {\n  content: \"\\ea72\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\ea73\";\n}\n\n.icon-arrow-down-right:before {\n  content: \"\\ea74\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\ea75\";\n}\n\n.icon-arrow-down-left:before {\n  content: \"\\ea76\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\ea77\";\n}\n\n.icon-arrow-up-left2:before {\n  content: \"\\ea78\";\n}\n\n.icon-arrow-up2:before {\n  content: \"\\ea79\";\n}\n\n.icon-arrow-up-right2:before {\n  content: \"\\ea7a\";\n}\n\n.icon-arrow-right2:before {\n  content: \"\\ea7b\";\n}\n\n.icon-arrow-down-right2:before {\n  content: \"\\ea7c\";\n}\n\n.icon-arrow-down2:before {\n  content: \"\\ea7d\";\n}\n\n.icon-arrow-down-left2:before {\n  content: \"\\ea7e\";\n}\n\n.icon-arrow-left2:before {\n  content: \"\\ea7f\";\n}\n\n.icon-circle-up:before {\n  content: \"\\ea80\";\n}\n\n.icon-circle-right:before {\n  content: \"\\ea81\";\n}\n\n.icon-circle-down:before {\n  content: \"\\ea82\";\n}\n\n.icon-circle-left:before {\n  content: \"\\ea83\";\n}\n\n.icon-tab:before {\n  content: \"\\ea84\";\n}\n\n.icon-move-up:before {\n  content: \"\\ea85\";\n}\n\n.icon-move-down:before {\n  content: \"\\ea86\";\n}\n\n.icon-sort-alpha-asc:before {\n  content: \"\\ea87\";\n}\n\n.icon-sort-alpha-desc:before {\n  content: \"\\ea88\";\n}\n\n.icon-sort-numeric-asc:before {\n  content: \"\\ea89\";\n}\n\n.icon-sort-numberic-desc:before {\n  content: \"\\ea8a\";\n}\n\n.icon-sort-amount-asc:before {\n  content: \"\\ea8b\";\n}\n\n.icon-sort-amount-desc:before {\n  content: \"\\ea8c\";\n}\n\n.icon-command:before {\n  content: \"\\ea8d\";\n}\n\n.icon-shift:before {\n  content: \"\\ea8e\";\n}\n\n.icon-ctrl:before {\n  content: \"\\ea8f\";\n}\n\n.icon-opt:before {\n  content: \"\\ea90\";\n}\n\n.icon-checkbox-checked:before {\n  content: \"\\ea91\";\n}\n\n.icon-checkbox-unchecked:before {\n  content: \"\\ea92\";\n}\n\n.icon-radio-checked:before {\n  content: \"\\ea93\";\n}\n\n.icon-radio-checked2:before {\n  content: \"\\ea94\";\n}\n\n.icon-radio-unchecked:before {\n  content: \"\\ea95\";\n}\n\n.icon-crop:before {\n  content: \"\\ea96\";\n}\n\n.icon-make-group:before {\n  content: \"\\ea97\";\n}\n\n.icon-ungroup:before {\n  content: \"\\ea98\";\n}\n\n.icon-scissors:before {\n  content: \"\\ea99\";\n}\n\n.icon-filter:before {\n  content: \"\\ea9a\";\n}\n\n.icon-font:before {\n  content: \"\\ea9b\";\n}\n\n.icon-ligature:before {\n  content: \"\\ea9c\";\n}\n\n.icon-ligature2:before {\n  content: \"\\ea9d\";\n}\n\n.icon-text-height:before {\n  content: \"\\ea9e\";\n}\n\n.icon-text-width:before {\n  content: \"\\ea9f\";\n}\n\n.icon-font-size:before {\n  content: \"\\eaa0\";\n}\n\n.icon-bold:before {\n  content: \"\\eaa1\";\n}\n\n.icon-underline:before {\n  content: \"\\eaa2\";\n}\n\n.icon-italic:before {\n  content: \"\\eaa3\";\n}\n\n.icon-strikethrough:before {\n  content: \"\\eaa4\";\n}\n\n.icon-omega:before {\n  content: \"\\eaa5\";\n}\n\n.icon-sigma:before {\n  content: \"\\eaa6\";\n}\n\n.icon-page-break:before {\n  content: \"\\eaa7\";\n}\n\n.icon-superscript:before {\n  content: \"\\eaa8\";\n}\n\n.icon-subscript:before {\n  content: \"\\eaa9\";\n}\n\n.icon-superscript2:before {\n  content: \"\\eaaa\";\n}\n\n.icon-subscript2:before {\n  content: \"\\eaab\";\n}\n\n.icon-text-color:before {\n  content: \"\\eaac\";\n}\n\n.icon-pagebreak:before {\n  content: \"\\eaad\";\n}\n\n.icon-clear-formatting:before {\n  content: \"\\eaae\";\n}\n\n.icon-table:before {\n  content: \"\\eaaf\";\n}\n\n.icon-table2:before {\n  content: \"\\eab0\";\n}\n\n.icon-insert-template:before {\n  content: \"\\eab1\";\n}\n\n.icon-pilcrow:before {\n  content: \"\\eab2\";\n}\n\n.icon-ltr:before {\n  content: \"\\eab3\";\n}\n\n.icon-rtl:before {\n  content: \"\\eab4\";\n}\n\n.icon-section:before {\n  content: \"\\eab5\";\n}\n\n.icon-paragraph-left:before {\n  content: \"\\eab6\";\n}\n\n.icon-paragraph-center:before {\n  content: \"\\eab7\";\n}\n\n.icon-paragraph-right:before {\n  content: \"\\eab8\";\n}\n\n.icon-paragraph-justify:before {\n  content: \"\\eab9\";\n}\n\n.icon-indent-increase:before {\n  content: \"\\eaba\";\n}\n\n.icon-indent-decrease:before {\n  content: \"\\eabb\";\n}\n\n.icon-share:before {\n  content: \"\\eabc\";\n}\n\n.icon-new-tab:before {\n  content: \"\\eabd\";\n}\n\n.icon-embed:before {\n  content: \"\\eabe\";\n}\n\n.icon-embed2:before {\n  content: \"\\eabf\";\n}\n\n.icon-terminal:before {\n  content: \"\\eac0\";\n}\n\n.icon-share2:before {\n  content: \"\\eac1\";\n}\n\n.icon-mail:before {\n  content: \"\\eac2\";\n}\n\n.icon-mail2:before {\n  content: \"\\eac3\";\n}\n\n.icon-mail3:before {\n  content: \"\\eac4\";\n}\n\n.icon-mail4:before {\n  content: \"\\eac5\";\n}\n\n.icon-amazon:before {\n  content: \"\\eac6\";\n}\n\n.icon-google:before {\n  content: \"\\eac7\";\n}\n\n.icon-google2:before {\n  content: \"\\eac8\";\n}\n\n.icon-google3:before {\n  content: \"\\eac9\";\n}\n\n.icon-google-plus:before {\n  content: \"\\eaca\";\n}\n\n.icon-google-plus2:before {\n  content: \"\\eacb\";\n}\n\n.icon-google-plus3:before {\n  content: \"\\eacc\";\n}\n\n.icon-hangouts:before {\n  content: \"\\eacd\";\n}\n\n.icon-google-drive:before {\n  content: \"\\eace\";\n}\n\n.icon-facebook:before {\n  content: \"\\eacf\";\n}\n\n.icon-facebook2:before {\n  content: \"\\ead0\";\n}\n\n.icon-instagram:before {\n  content: \"\\ead1\";\n}\n\n.icon-whatsapp:before {\n  content: \"\\ead2\";\n}\n\n.icon-spotify:before {\n  content: \"\\ead3\";\n}\n\n.icon-telegram:before {\n  content: \"\\ead4\";\n}\n\n.icon-twitter:before {\n  content: \"\\ead5\";\n}\n\n.icon-vine:before {\n  content: \"\\ead6\";\n}\n\n.icon-vk:before {\n  content: \"\\ead7\";\n}\n\n.icon-renren:before {\n  content: \"\\ead8\";\n}\n\n.icon-sina-weibo:before {\n  content: \"\\ead9\";\n}\n\n.icon-rss:before {\n  content: \"\\eada\";\n}\n\n.icon-rss2:before {\n  content: \"\\eadb\";\n}\n\n.icon-youtube:before {\n  content: \"\\eadc\";\n}\n\n.icon-youtube2:before {\n  content: \"\\eadd\";\n}\n\n.icon-twitch:before {\n  content: \"\\eade\";\n}\n\n.icon-vimeo:before {\n  content: \"\\eadf\";\n}\n\n.icon-vimeo2:before {\n  content: \"\\eae0\";\n}\n\n.icon-lanyrd:before {\n  content: \"\\eae1\";\n}\n\n.icon-flickr:before {\n  content: \"\\eae2\";\n}\n\n.icon-flickr2:before {\n  content: \"\\eae3\";\n}\n\n.icon-flickr3:before {\n  content: \"\\eae4\";\n}\n\n.icon-flickr4:before {\n  content: \"\\eae5\";\n}\n\n.icon-dribbble:before {\n  content: \"\\eae6\";\n}\n\n.icon-behance:before {\n  content: \"\\eae7\";\n}\n\n.icon-behance2:before {\n  content: \"\\eae8\";\n}\n\n.icon-deviantart:before {\n  content: \"\\eae9\";\n}\n\n.icon-500px:before {\n  content: \"\\eaea\";\n}\n\n.icon-steam:before {\n  content: \"\\eaeb\";\n}\n\n.icon-steam2:before {\n  content: \"\\eaec\";\n}\n\n.icon-dropbox:before {\n  content: \"\\eaed\";\n}\n\n.icon-onedrive:before {\n  content: \"\\eaee\";\n}\n\n.icon-github:before {\n  content: \"\\eaef\";\n}\n\n.icon-npm:before {\n  content: \"\\eaf0\";\n}\n\n.icon-basecamp:before {\n  content: \"\\eaf1\";\n}\n\n.icon-trello:before {\n  content: \"\\eaf2\";\n}\n\n.icon-wordpress:before {\n  content: \"\\eaf3\";\n}\n\n.icon-joomla:before {\n  content: \"\\eaf4\";\n}\n\n.icon-ello:before {\n  content: \"\\eaf5\";\n}\n\n.icon-blogger:before {\n  content: \"\\eaf6\";\n}\n\n.icon-blogger2:before {\n  content: \"\\eaf7\";\n}\n\n.icon-tumblr:before {\n  content: \"\\eaf8\";\n}\n\n.icon-tumblr2:before {\n  content: \"\\eaf9\";\n}\n\n.icon-yahoo:before {\n  content: \"\\eafa\";\n}\n\n.icon-yahoo2:before {\n  content: \"\\eafb\";\n}\n\n.icon-tux:before {\n  content: \"\\eafc\";\n}\n\n.icon-appleinc:before {\n  content: \"\\eafd\";\n}\n\n.icon-finder:before {\n  content: \"\\eafe\";\n}\n\n.icon-android1:before {\n  content: \"\\eaff\";\n}\n\n.icon-windows:before {\n  content: \"\\eb00\";\n}\n\n.icon-windows8:before {\n  content: \"\\eb01\";\n}\n\n.icon-soundcloud:before {\n  content: \"\\eb02\";\n}\n\n.icon-soundcloud2:before {\n  content: \"\\eb03\";\n}\n\n.icon-skype:before {\n  content: \"\\eb04\";\n}\n\n.icon-reddit:before {\n  content: \"\\eb05\";\n}\n\n.icon-hackernews:before {\n  content: \"\\eb06\";\n}\n\n.icon-wikipedia:before {\n  content: \"\\eb07\";\n}\n\n.icon-linkedin:before {\n  content: \"\\eb08\";\n}\n\n.icon-linkedin2:before {\n  content: \"\\eb09\";\n}\n\n.icon-lastfm:before {\n  content: \"\\eb0a\";\n}\n\n.icon-lastfm2:before {\n  content: \"\\eb0b\";\n}\n\n.icon-delicious:before {\n  content: \"\\eb0c\";\n}\n\n.icon-stumbleupon:before {\n  content: \"\\eb0d\";\n}\n\n.icon-stumbleupon2:before {\n  content: \"\\eb0e\";\n}\n\n.icon-stackoverflow:before {\n  content: \"\\eb0f\";\n}\n\n.icon-pinterest:before {\n  content: \"\\eb10\";\n}\n\n.icon-pinterest2:before {\n  content: \"\\eb11\";\n}\n\n.icon-xing:before {\n  content: \"\\eb12\";\n}\n\n.icon-xing2:before {\n  content: \"\\eb13\";\n}\n\n.icon-flattr:before {\n  content: \"\\eb14\";\n}\n\n.icon-foursquare:before {\n  content: \"\\eb15\";\n}\n\n.icon-yelp:before {\n  content: \"\\eb16\";\n}\n\n.icon-paypal:before {\n  content: \"\\eb17\";\n}\n\n.icon-chrome:before {\n  content: \"\\eb18\";\n}\n\n.icon-firefox:before {\n  content: \"\\eb19\";\n}\n\n.icon-IE:before {\n  content: \"\\eb1a\";\n}\n\n.icon-edge:before {\n  content: \"\\eb1b\";\n}\n\n.icon-safari:before {\n  content: \"\\eb1c\";\n}\n\n.icon-opera:before {\n  content: \"\\eb1d\";\n}\n\n.icon-file-pdf:before {\n  content: \"\\eb21\";\n}\n\n.icon-file-openoffice:before {\n  content: \"\\eb22\";\n}\n\n.icon-file-word:before {\n  content: \"\\eb23\";\n}\n\n.icon-file-excel:before {\n  content: \"\\eb24\";\n}\n\n.icon-libreoffice:before {\n  content: \"\\eb25\";\n}\n\n.icon-html-five:before {\n  content: \"\\eb26\";\n}\n\n.icon-html-five2:before {\n  content: \"\\eb27\";\n}\n\n.icon-css3:before {\n  content: \"\\eb28\";\n}\n\n.icon-git:before {\n  content: \"\\eb29\";\n}\n\n.icon-codepen:before {\n  content: \"\\eb2a\";\n}\n\n.icon-svg:before {\n  content: \"\\eb2b\";\n}\n\n.icon-IcoMoon:before {\n  content: \"\\eb2c\";\n}\n\nh2 {\n  padding: 20px 10%;\n  font-size: 20px;\n  line-height: 40px;\n  box-sizing: border-box;\n}\n\n.table {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.table .header {\n  background-color: rgba(16, 142, 233, 0.1);\n  height: 40px;\n}\n\n.table .header h4 {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.table .list {\n  width: 100%;\n  overflow: hidden;\n}\n\n.table .list li {\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(16, 142, 233, 0.1);\n}\n\n.table .list li p {\n  overflow: hidden;\n  float: left;\n  padding: 5px 10px;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-size: 12px;\n}\n\n.example {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/view/button/button.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/button/button.component.ts ***!
  \*************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.data = [
            {
                attr: '[size]',
                explain: "按钮大小,分别是small middle large full",
                type: "string",
                default: "middle "
            },
            {
                attr: '[type]',
                explain: "按钮类型,分别是primary ,warning,default",
                type: "string",
                default: "primary "
            },
            {
                attr: '[shape]',
                explain: "按钮形状,entity ,hollow,radio；large full类型按钮不存在radio类型",
                type: "string",
                default: "entity "
            },
            {
                attr: '[iconType]',
                explain: "按钮图标，small类型按钮不能设置默认图标",
                type: "string",
                default: "无默认值 "
            },
            {
                attr: '[loading]',
                explain: "设置点击后动画,默认值为false，修改为true时执行动画，动画仅将iconFont引入可以看到",
                type: "boolean",
                default: "false "
            },
            {
                attr: '[disabled]',
                explain: "默认为false,改为true后按钮禁用，禁用后点击事件将不起作用",
                type: "boolean",
                default: "false"
            }
        ];
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.updateData = function () {
        this.loader = true;
    };
    ButtonComponent.prototype.updateDataTwo = function () {
        this.loaderTwo = true;
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/view/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.less */ "./src/app/view/button/button.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/view/flex-item/flex-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/view/flex-item/flex-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  flex-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/flex-item/flex-item.component.less":
/*!*********************************************************!*\
  !*** ./src/app/view/flex-item/flex-item.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/flex-item/flex-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/flex-item/flex-item.component.ts ***!
  \*******************************************************/
/*! exports provided: FlexItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexItemComponent", function() { return FlexItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlexItemComponent = /** @class */ (function () {
    function FlexItemComponent() {
    }
    FlexItemComponent.prototype.ngOnInit = function () {
    };
    FlexItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flex-item',
            template: __webpack_require__(/*! ./flex-item.component.html */ "./src/app/view/flex-item/flex-item.component.html"),
            styles: [__webpack_require__(/*! ./flex-item.component.less */ "./src/app/view/flex-item/flex-item.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexItemComponent);
    return FlexItemComponent;
}());



/***/ }),

/***/ "./src/app/view/flex/flex.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/flex/flex.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>flex</h2>\n<nrs-white-space></nrs-white-space>\n<h3>flex简要介绍</h3>\n<div>\n  <h4>1.flex容器的两个主要概念</h4>\n  <p>水平主轴（main axis）和垂直交叉主轴（cross axis）这两者是理解flex的开始，必须明白flex是有着这两个东西的，因为在flex父块内的子块的分布顺序排布方式与这两者是紧密关联的，请先记住一个是沿水平方向从左到右（或者从右到左。子元素的开始的位置称为main start，结束为main end）排列子元素的水平主轴，另一个是从上到下（或者从下到上 。子元素的开始的位置称为cross starts，结束为cross end）排列子元素的垂直交叉主轴。</p>\n  <h4>2.在flex容器内可设置的六个属性</h4>\n  <ol>\n    <li>\n      <h5><1> flex-direction   //控制主轴的布局方式（子元素的排列方向）</h5>\n      <p>属性值：</p>\n      <ol>\n        <li>(1) row  //子元素从水平方向的左端开始排列   （默认值）</li>\n        <li>(2) row-reverse  //子元素从水平方向的右端开始排列</li>\n        <li>(3) column    //子元素布局从垂直方向，从上往下</li>\n        <li>(4) column-reverse  //子元素布局从垂直方向，从下往上</li>\n      </ol>\n    </li>\n    <li>\n    <h5><2> flex-wrap //子元素的布局排列的换行设定</h5>\n    <p>属性值：</p>\n    <ol>\n      <li>(1) nowrap  //不换行  （默认值）</li>\n      <li>(2) wrap //换行，第一行在上方</li>\n      <li>(3) wrap-reverse // 换行，第一行在下方</li>\n    </ol>\n  </li>\n    <li>\n      <h5><3>flex-flow  //前面flex-direction和flex-wrap的组合形式，作用：子元素的排列方式和换行情况的设定</h5>\n      <p>属性值：</p>\n      <ol>\n        <li>(1) flex-wrap  :  row nowrap  //（默认值） </li>\n        <li>(2) 类似1这种使用flex-direction和flex-wrap的属性值的组合</li>\n      </ol>\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/view/flex/flex.component.less":
/*!***********************************************!*\
  !*** ./src/app/view/flex/flex.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/flex/flex.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/flex/flex.component.ts ***!
  \*********************************************/
/*! exports provided: FlexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexComponent", function() { return FlexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlexComponent = /** @class */ (function () {
    function FlexComponent() {
    }
    FlexComponent.prototype.ngOnInit = function () {
    };
    FlexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flex',
            template: __webpack_require__(/*! ./flex.component.html */ "./src/app/view/flex/flex.component.html"),
            styles: [__webpack_require__(/*! ./flex.component.less */ "./src/app/view/flex/flex.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexComponent);
    return FlexComponent;
}());



/***/ }),

/***/ "./src/app/view/icon-view/icon-view.component.html":
/*!*********************************************************!*\
  !*** ./src/app/view/icon-view/icon-view.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Icon 图标</h2>\n\n<div class=\"table\">\n  <div class=\"clear header\">\n    <h4 class=\"win-10\">属性</h4>\n    <h4 class=\"win-70\">说明</h4>\n    <h4 class=\"win-10\">类型</h4>\n    <h4 class=\"win-10\">默认值</h4>\n  </div>\n  <ul class=\"list\">\n    <li class=\"clear\" *ngFor=\"let item of data\">\n      <p class=\"win-10\">{{item.attr}}</p>\n      <p class=\"win-70\">{{item.explain}}</p>\n      <p class=\"win-10\">{{item.type}}</p>\n      <p class=\"win-10\">{{item.default}}</p>\n    </li>\n  </ul>\n</div>\n\n<h2>按钮示例</h2>\n\n<app-mobile-view>\n  <ul class=\"list-sample\">\n    <li>\n      <nrs-icon [type]=\"'home'\" [size]=\"11\"></nrs-icon>\n    </li>\n    <li>\n      <nrs-icon [type]=\"'home'\" [size]=\"13\"></nrs-icon>\n    </li>\n    <li>\n      <nrs-icon [type]=\"'home'\" [size]=\"15\"></nrs-icon>\n    </li>\n    <li>\n      <nrs-icon [type]=\"'home'\" [size]=\"17\"></nrs-icon>\n    </li>\n    <li class=\"color-red\">\n      <nrs-icon [type]=\"'home'\" [size]=\"19\"></nrs-icon>\n    </li>\n    <li class=\"color-blue\">\n      <nrs-icon [type]=\"'home'\" [size]=\"19\"></nrs-icon>\n    </li>\n  </ul>\n</app-mobile-view>\n"

/***/ }),

/***/ "./src/app/view/icon-view/icon-view.component.less":
/*!*********************************************************!*\
  !*** ./src/app/view/icon-view/icon-view.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src:  url('icomoon.eot?8t91ih');\n  src:  url('icomoon.eot?8t91ih#iefix') format('embedded-opentype'),\n    url('icomoon.ttf?8t91ih') format('truetype'),\n    url('icomoon.woff?8t91ih') format('woff'),\n    url('icomoon.svg?8t91ih#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /*line-height: 1;*/\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-Loading:before {\n  content: \"\\e900\";\n}\n\n.icon-check:before {\n  content: \"\\e901\";\n}\n\n.icon-more3:before {\n  content: \"\\e902\";\n}\n\n.icon-certificate:before {\n  content: \"\\e903\";\n}\n\n.icon-news:before {\n  content: \"\\e904\";\n}\n\n.icon-keys01:before {\n  content: \"\\e905\";\n}\n\n.icon-user02:before {\n  content: \"\\e906\";\n}\n\n.icon-user03:before {\n  content: \"\\e907\";\n}\n\n.icon-keys02:before {\n  content: \"\\e908\";\n}\n\n.icon-android:before {\n  content: \"\\e909\";\n}\n\n.icon-help:before {\n  content: \"\\e90a\";\n}\n\n.icon-ios:before {\n  content: \"\\e90b\";\n}\n\n.icon-searchPage:before {\n  content: \"\\e90c\";\n}\n\n.icon-add:before {\n  content: \"\\e90d\";\n}\n\n.icon-back:before {\n  content: \"\\e90e\";\n}\n\n.icon-close:before {\n  content: \"\\e90f\";\n}\n\n.icon-hotLine:before {\n  content: \"\\e910\";\n}\n\n.icon-i:before {\n  content: \"\\e911\";\n}\n\n.icon-link:before {\n  content: \"\\e912\";\n}\n\n.icon-more:before {\n  content: \"\\e913\";\n}\n\n.icon-next_1:before {\n  content: \"\\e914\";\n}\n\n.icon-next:before {\n  content: \"\\e915\";\n}\n\n.icon-phone:before {\n  content: \"\\e916\";\n}\n\n.icon-pwd:before {\n  content: \"\\e917\";\n}\n\n.icon-reduce:before {\n  content: \"\\e918\";\n}\n\n.icon-tabs:before {\n  content: \"\\e919\";\n}\n\n.icon-tel:before {\n  content: \"\\e91a\";\n}\n\n.icon-time:before {\n  content: \"\\e91b\";\n}\n\n.icon-user:before {\n  content: \"\\e91c\";\n}\n\n.icon-verify:before {\n  content: \"\\e91d\";\n}\n\n.icon-mobile:before {\n  content: \"\\e91e\";\n}\n\n.icon-show:before {\n  content: \"\\e91f\";\n}\n\n.icon-site:before {\n  content: \"\\e920\";\n}\n\n.icon-triangle:before {\n  content: \"\\e921\";\n}\n\n.icon-hide:before {\n  content: \"\\e922\";\n}\n\n.icon-userData:before {\n  content: \"\\e923\";\n}\n\n.icon-header:before {\n  content: \"\\e924\";\n}\n\n.icon-feedback:before {\n  content: \"\\e925\";\n}\n\n.icon-learn:before {\n  content: \"\\e926\";\n}\n\n.icon-set:before {\n  content: \"\\e927\";\n}\n\n.icon-selected:before {\n  content: \"\\e928\";\n}\n\n.icon-notSelected:before {\n  content: \"\\e929\";\n}\n\n.icon-notice:before {\n  content: \"\\e92a\";\n}\n\n.icon-define:before {\n  content: \"\\e92b\";\n}\n\n.icon-lock:before {\n  content: \"\\e92c\";\n}\n\n.icon-unfinished:before {\n  content: \"\\e92d\";\n}\n\n.icon-closedEyes:before {\n  content: \"\\e92e\";\n}\n\n.icon-signOut:before {\n  content: \"\\e92f\";\n}\n\n.icon-closev2:before {\n  content: \"\\e930\";\n}\n\n.icon-photo:before {\n  content: \"\\e931\";\n}\n\n.icon-photograph:before {\n  content: \"\\e932\";\n}\n\n.icon-video:before {\n  content: \"\\e933\";\n}\n\n.icon-userDetails:before {\n  content: \"\\e934\";\n}\n\n.icon-index:before {\n  content: \"\\e935\";\n}\n\n.icon-phone02:before {\n  content: \"\\e936\";\n}\n\n.icon-eyes:before {\n  content: \"\\e937\";\n}\n\n.icon-pwd02:before {\n  content: \"\\e938\";\n}\n\n.icon-company:before {\n  content: \"\\e939\";\n}\n\n.icon-county:before {\n  content: \"\\e93a\";\n}\n\n.icon-search:before {\n  content: \"\\e93b\";\n}\n\n.icon-alipay:before {\n  content: \"\\e93c\";\n}\n\n.icon-WeChat:before {\n  content: \"\\e93d\";\n}\n\n.icon-right-arrow:before {\n  content: \"\\e93e\";\n}\n\n.icon-more2:before {\n  content: \"\\e93f\";\n}\n\n.icon-course:before {\n  content: \"\\e940\";\n}\n\n.icon-verified:before {\n  content: \"\\e941\";\n}\n\n.icon-home:before {\n  content: \"\\e942\";\n}\n\n.icon-home2:before {\n  content: \"\\e943\";\n}\n\n.icon-home3:before {\n  content: \"\\e944\";\n}\n\n.icon-office:before {\n  content: \"\\e945\";\n}\n\n.icon-newspaper:before {\n  content: \"\\e946\";\n}\n\n.icon-pencil:before {\n  content: \"\\e947\";\n}\n\n.icon-pencil2:before {\n  content: \"\\e948\";\n}\n\n.icon-quill:before {\n  content: \"\\e949\";\n}\n\n.icon-pen:before {\n  content: \"\\e94a\";\n}\n\n.icon-blog:before {\n  content: \"\\e94b\";\n}\n\n.icon-eyedropper:before {\n  content: \"\\e94c\";\n}\n\n.icon-droplet:before {\n  content: \"\\e94d\";\n}\n\n.icon-paint-format:before {\n  content: \"\\e94e\";\n}\n\n.icon-image:before {\n  content: \"\\e94f\";\n}\n\n.icon-images:before {\n  content: \"\\eb20\";\n}\n\n.icon-camera:before {\n  content: \"\\e950\";\n}\n\n.icon-headphones:before {\n  content: \"\\e951\";\n}\n\n.icon-music:before {\n  content: \"\\e952\";\n}\n\n.icon-play:before {\n  content: \"\\e953\";\n}\n\n.icon-film:before {\n  content: \"\\e954\";\n}\n\n.icon-video-camera:before {\n  content: \"\\e955\";\n}\n\n.icon-dice:before {\n  content: \"\\e956\";\n}\n\n.icon-pacman:before {\n  content: \"\\e957\";\n}\n\n.icon-spades:before {\n  content: \"\\e958\";\n}\n\n.icon-clubs:before {\n  content: \"\\e959\";\n}\n\n.icon-diamonds:before {\n  content: \"\\e95a\";\n}\n\n.icon-bullhorn:before {\n  content: \"\\e95b\";\n}\n\n.icon-connection:before {\n  content: \"\\e95c\";\n}\n\n.icon-podcast:before {\n  content: \"\\e95d\";\n}\n\n.icon-feed:before {\n  content: \"\\e95e\";\n}\n\n.icon-mic:before {\n  content: \"\\e95f\";\n}\n\n.icon-book:before {\n  content: \"\\e960\";\n}\n\n.icon-books:before {\n  content: \"\\e961\";\n}\n\n.icon-library:before {\n  content: \"\\e962\";\n}\n\n.icon-file-text:before {\n  content: \"\\e963\";\n}\n\n.icon-profile:before {\n  content: \"\\e964\";\n}\n\n.icon-file-empty:before {\n  content: \"\\e965\";\n}\n\n.icon-files-empty:before {\n  content: \"\\e966\";\n}\n\n.icon-file-text2:before {\n  content: \"\\e967\";\n}\n\n.icon-file-picture:before {\n  content: \"\\e968\";\n}\n\n.icon-file-music:before {\n  content: \"\\e969\";\n}\n\n.icon-file-play:before {\n  content: \"\\e96a\";\n}\n\n.icon-file-video:before {\n  content: \"\\e96b\";\n}\n\n.icon-file-zip:before {\n  content: \"\\e96c\";\n}\n\n.icon-copy:before {\n  content: \"\\e96d\";\n}\n\n.icon-paste:before {\n  content: \"\\e96e\";\n}\n\n.icon-stack:before {\n  content: \"\\e96f\";\n}\n\n.icon-folder:before {\n  content: \"\\e970\";\n}\n\n.icon-folder-open:before {\n  content: \"\\e971\";\n}\n\n.icon-folder-plus:before {\n  content: \"\\e972\";\n}\n\n.icon-folder-minus:before {\n  content: \"\\e973\";\n}\n\n.icon-folder-download:before {\n  content: \"\\e974\";\n}\n\n.icon-folder-upload:before {\n  content: \"\\e975\";\n}\n\n.icon-price-tag:before {\n  content: \"\\e976\";\n}\n\n.icon-price-tags:before {\n  content: \"\\e977\";\n}\n\n.icon-barcode:before {\n  content: \"\\e978\";\n}\n\n.icon-qrcode:before {\n  content: \"\\e979\";\n}\n\n.icon-ticket:before {\n  content: \"\\e97a\";\n}\n\n.icon-cart:before {\n  content: \"\\e97b\";\n}\n\n.icon-coin-dollar:before {\n  content: \"\\e97c\";\n}\n\n.icon-coin-euro:before {\n  content: \"\\e97d\";\n}\n\n.icon-coin-pound:before {\n  content: \"\\e97e\";\n}\n\n.icon-coin-yen:before {\n  content: \"\\e97f\";\n}\n\n.icon-credit-card:before {\n  content: \"\\e980\";\n}\n\n.icon-calculator:before {\n  content: \"\\e981\";\n}\n\n.icon-lifebuoy:before {\n  content: \"\\e982\";\n}\n\n.icon-phone1:before {\n  content: \"\\e983\";\n}\n\n.icon-phone-hang-up:before {\n  content: \"\\e984\";\n}\n\n.icon-address-book:before {\n  content: \"\\e985\";\n}\n\n.icon-envelop:before {\n  content: \"\\e986\";\n}\n\n.icon-pushpin:before {\n  content: \"\\e987\";\n}\n\n.icon-location:before {\n  content: \"\\e988\";\n}\n\n.icon-location2:before {\n  content: \"\\e989\";\n}\n\n.icon-compass:before {\n  content: \"\\e98a\";\n}\n\n.icon-compass2:before {\n  content: \"\\e98b\";\n}\n\n.icon-map:before {\n  content: \"\\e98c\";\n}\n\n.icon-map2:before {\n  content: \"\\e98d\";\n}\n\n.icon-history:before {\n  content: \"\\e98e\";\n}\n\n.icon-clock:before {\n  content: \"\\e98f\";\n}\n\n.icon-clock2:before {\n  content: \"\\e990\";\n}\n\n.icon-alarm:before {\n  content: \"\\e991\";\n}\n\n.icon-bell:before {\n  content: \"\\e992\";\n}\n\n.icon-stopwatch:before {\n  content: \"\\e993\";\n}\n\n.icon-calendar:before {\n  content: \"\\e994\";\n}\n\n.icon-printer:before {\n  content: \"\\e995\";\n}\n\n.icon-keyboard:before {\n  content: \"\\e996\";\n}\n\n.icon-display:before {\n  content: \"\\e997\";\n}\n\n.icon-laptop:before {\n  content: \"\\e998\";\n}\n\n.icon-mobile1:before {\n  content: \"\\e999\";\n}\n\n.icon-mobile2:before {\n  content: \"\\e99a\";\n}\n\n.icon-tablet:before {\n  content: \"\\e99b\";\n}\n\n.icon-tv:before {\n  content: \"\\e99c\";\n}\n\n.icon-drawer:before {\n  content: \"\\e99d\";\n}\n\n.icon-drawer2:before {\n  content: \"\\e99e\";\n}\n\n.icon-box-add:before {\n  content: \"\\e99f\";\n}\n\n.icon-box-remove:before {\n  content: \"\\e9a0\";\n}\n\n.icon-download:before {\n  content: \"\\e9a1\";\n}\n\n.icon-upload:before {\n  content: \"\\e9a2\";\n}\n\n.icon-floppy-disk:before {\n  content: \"\\e9a3\";\n}\n\n.icon-drive:before {\n  content: \"\\e9a4\";\n}\n\n.icon-database:before {\n  content: \"\\e9a5\";\n}\n\n.icon-undo:before {\n  content: \"\\e9a6\";\n}\n\n.icon-redo:before {\n  content: \"\\e9a7\";\n}\n\n.icon-undo2:before {\n  content: \"\\e9a8\";\n}\n\n.icon-redo2:before {\n  content: \"\\e9a9\";\n}\n\n.icon-forward:before {\n  content: \"\\e9aa\";\n}\n\n.icon-reply:before {\n  content: \"\\e9ab\";\n}\n\n.icon-bubble:before {\n  content: \"\\e9ac\";\n}\n\n.icon-bubbles:before {\n  content: \"\\e9ad\";\n}\n\n.icon-bubbles2:before {\n  content: \"\\e9ae\";\n}\n\n.icon-bubble2:before {\n  content: \"\\e9af\";\n}\n\n.icon-bubbles3:before {\n  content: \"\\e9b0\";\n}\n\n.icon-bubbles4:before {\n  content: \"\\e9b1\";\n}\n\n.icon-user1:before {\n  content: \"\\e9b2\";\n}\n\n.icon-users:before {\n  content: \"\\e9b3\";\n}\n\n.icon-user-plus:before {\n  content: \"\\e9b4\";\n}\n\n.icon-user-minus:before {\n  content: \"\\e9b5\";\n}\n\n.icon-user-check:before {\n  content: \"\\e9b6\";\n}\n\n.icon-user-tie:before {\n  content: \"\\e9b7\";\n}\n\n.icon-quotes-left:before {\n  content: \"\\e9b8\";\n}\n\n.icon-quotes-right:before {\n  content: \"\\e9b9\";\n}\n\n.icon-hour-glass:before {\n  content: \"\\e9ba\";\n}\n\n.icon-spinner:before {\n  content: \"\\e9bb\";\n}\n\n.icon-spinner2:before {\n  content: \"\\e9bc\";\n}\n\n.icon-spinner3:before {\n  content: \"\\e9bd\";\n}\n\n.icon-spinner4:before {\n  content: \"\\e9be\";\n}\n\n.icon-spinner5:before {\n  content: \"\\e9bf\";\n}\n\n.icon-spinner6:before {\n  content: \"\\eb1f\";\n}\n\n.icon-spinner7:before {\n  content: \"\\e9c0\";\n}\n\n.icon-spinner8:before {\n  content: \"\\e9c1\";\n}\n\n.icon-spinner9:before {\n  content: \"\\e9c2\";\n}\n\n.icon-spinner10:before {\n  content: \"\\e9c3\";\n}\n\n.icon-spinner11:before {\n  content: \"\\e9c4\";\n}\n\n.icon-binoculars:before {\n  content: \"\\e9c5\";\n}\n\n.icon-search1:before {\n  content: \"\\e9c6\";\n}\n\n.icon-zoom-in:before {\n  content: \"\\e9c7\";\n}\n\n.icon-zoom-out:before {\n  content: \"\\e9c8\";\n}\n\n.icon-enlarge:before {\n  content: \"\\e9c9\";\n}\n\n.icon-shrink:before {\n  content: \"\\e9ca\";\n}\n\n.icon-enlarge2:before {\n  content: \"\\e9cb\";\n}\n\n.icon-shrink2:before {\n  content: \"\\e9cc\";\n}\n\n.icon-key:before {\n  content: \"\\eb1e\";\n}\n\n.icon-key2:before {\n  content: \"\\e9cd\";\n}\n\n.icon-lock1:before {\n  content: \"\\e9ce\";\n}\n\n.icon-unlocked:before {\n  content: \"\\e9cf\";\n}\n\n.icon-wrench:before {\n  content: \"\\e9d0\";\n}\n\n.icon-equalizer:before {\n  content: \"\\e9d1\";\n}\n\n.icon-equalizer2:before {\n  content: \"\\e9d2\";\n}\n\n.icon-cog:before {\n  content: \"\\e9d3\";\n}\n\n.icon-cogs:before {\n  content: \"\\e9d4\";\n}\n\n.icon-hammer:before {\n  content: \"\\e9d5\";\n}\n\n.icon-magic-wand:before {\n  content: \"\\e9d6\";\n}\n\n.icon-aid-kit:before {\n  content: \"\\e9d7\";\n}\n\n.icon-bug:before {\n  content: \"\\e9d8\";\n}\n\n.icon-pie-chart:before {\n  content: \"\\e9d9\";\n}\n\n.icon-stats-dots:before {\n  content: \"\\e9da\";\n}\n\n.icon-stats-bars:before {\n  content: \"\\e9db\";\n}\n\n.icon-stats-bars2:before {\n  content: \"\\e9dc\";\n}\n\n.icon-trophy:before {\n  content: \"\\e9dd\";\n}\n\n.icon-gift:before {\n  content: \"\\e9de\";\n}\n\n.icon-glass:before {\n  content: \"\\e9df\";\n}\n\n.icon-glass2:before {\n  content: \"\\e9e0\";\n}\n\n.icon-mug:before {\n  content: \"\\e9e1\";\n}\n\n.icon-spoon-knife:before {\n  content: \"\\e9e2\";\n}\n\n.icon-leaf:before {\n  content: \"\\e9e3\";\n}\n\n.icon-rocket:before {\n  content: \"\\e9e4\";\n}\n\n.icon-meter:before {\n  content: \"\\e9e5\";\n}\n\n.icon-meter2:before {\n  content: \"\\e9e6\";\n}\n\n.icon-hammer2:before {\n  content: \"\\e9e7\";\n}\n\n.icon-fire:before {\n  content: \"\\e9e8\";\n}\n\n.icon-lab:before {\n  content: \"\\e9e9\";\n}\n\n.icon-magnet:before {\n  content: \"\\e9ea\";\n}\n\n.icon-bin:before {\n  content: \"\\e9eb\";\n}\n\n.icon-bin2:before {\n  content: \"\\e9ec\";\n}\n\n.icon-briefcase:before {\n  content: \"\\e9ed\";\n}\n\n.icon-airplane:before {\n  content: \"\\e9ee\";\n}\n\n.icon-truck:before {\n  content: \"\\e9ef\";\n}\n\n.icon-road:before {\n  content: \"\\e9f0\";\n}\n\n.icon-accessibility:before {\n  content: \"\\e9f1\";\n}\n\n.icon-target:before {\n  content: \"\\e9f2\";\n}\n\n.icon-shield:before {\n  content: \"\\e9f3\";\n}\n\n.icon-power:before {\n  content: \"\\e9f4\";\n}\n\n.icon-switch:before {\n  content: \"\\e9f5\";\n}\n\n.icon-power-cord:before {\n  content: \"\\e9f6\";\n}\n\n.icon-clipboard:before {\n  content: \"\\e9f7\";\n}\n\n.icon-list-numbered:before {\n  content: \"\\e9f8\";\n}\n\n.icon-list:before {\n  content: \"\\e9f9\";\n}\n\n.icon-list2:before {\n  content: \"\\e9fa\";\n}\n\n.icon-tree:before {\n  content: \"\\e9fb\";\n}\n\n.icon-menu:before {\n  content: \"\\e9fc\";\n}\n\n.icon-menu2:before {\n  content: \"\\e9fd\";\n}\n\n.icon-menu3:before {\n  content: \"\\e9fe\";\n}\n\n.icon-menu4:before {\n  content: \"\\e9ff\";\n}\n\n.icon-cloud:before {\n  content: \"\\ea00\";\n}\n\n.icon-cloud-download:before {\n  content: \"\\ea01\";\n}\n\n.icon-cloud-upload:before {\n  content: \"\\ea02\";\n}\n\n.icon-cloud-check:before {\n  content: \"\\ea03\";\n}\n\n.icon-download2:before {\n  content: \"\\ea04\";\n}\n\n.icon-upload2:before {\n  content: \"\\ea05\";\n}\n\n.icon-download3:before {\n  content: \"\\ea06\";\n}\n\n.icon-upload3:before {\n  content: \"\\ea07\";\n}\n\n.icon-sphere:before {\n  content: \"\\ea08\";\n}\n\n.icon-earth:before {\n  content: \"\\ea09\";\n}\n\n.icon-link1:before {\n  content: \"\\ea0a\";\n}\n\n.icon-flag:before {\n  content: \"\\ea0b\";\n}\n\n.icon-attachment:before {\n  content: \"\\ea0c\";\n}\n\n.icon-eye:before {\n  content: \"\\ea0d\";\n}\n\n.icon-eye-plus:before {\n  content: \"\\ea0e\";\n}\n\n.icon-eye-minus:before {\n  content: \"\\ea0f\";\n}\n\n.icon-eye-blocked:before {\n  content: \"\\ea10\";\n}\n\n.icon-bookmark:before {\n  content: \"\\ea11\";\n}\n\n.icon-bookmarks:before {\n  content: \"\\ea12\";\n}\n\n.icon-sun:before {\n  content: \"\\ea13\";\n}\n\n.icon-contrast:before {\n  content: \"\\ea14\";\n}\n\n.icon-brightness-contrast:before {\n  content: \"\\ea15\";\n}\n\n.icon-star-empty:before {\n  content: \"\\ea16\";\n}\n\n.icon-star-half:before {\n  content: \"\\ea17\";\n}\n\n.icon-star-full:before {\n  content: \"\\ea18\";\n}\n\n.icon-heart:before {\n  content: \"\\ea19\";\n}\n\n.icon-heart-broken:before {\n  content: \"\\ea1a\";\n}\n\n.icon-man:before {\n  content: \"\\ea1b\";\n}\n\n.icon-woman:before {\n  content: \"\\ea1c\";\n}\n\n.icon-man-woman:before {\n  content: \"\\ea1d\";\n}\n\n.icon-happy:before {\n  content: \"\\ea1e\";\n}\n\n.icon-happy2:before {\n  content: \"\\ea1f\";\n}\n\n.icon-smile:before {\n  content: \"\\ea20\";\n}\n\n.icon-smile2:before {\n  content: \"\\ea21\";\n}\n\n.icon-tongue:before {\n  content: \"\\ea22\";\n}\n\n.icon-tongue2:before {\n  content: \"\\ea23\";\n}\n\n.icon-sad:before {\n  content: \"\\ea24\";\n}\n\n.icon-sad2:before {\n  content: \"\\ea25\";\n}\n\n.icon-wink:before {\n  content: \"\\ea26\";\n}\n\n.icon-wink2:before {\n  content: \"\\ea27\";\n}\n\n.icon-grin:before {\n  content: \"\\ea28\";\n}\n\n.icon-grin2:before {\n  content: \"\\ea29\";\n}\n\n.icon-cool:before {\n  content: \"\\ea2a\";\n}\n\n.icon-cool2:before {\n  content: \"\\ea2b\";\n}\n\n.icon-angry:before {\n  content: \"\\ea2c\";\n}\n\n.icon-angry2:before {\n  content: \"\\ea2d\";\n}\n\n.icon-evil:before {\n  content: \"\\ea2e\";\n}\n\n.icon-evil2:before {\n  content: \"\\ea2f\";\n}\n\n.icon-shocked:before {\n  content: \"\\ea30\";\n}\n\n.icon-shocked2:before {\n  content: \"\\ea31\";\n}\n\n.icon-baffled:before {\n  content: \"\\ea32\";\n}\n\n.icon-baffled2:before {\n  content: \"\\ea33\";\n}\n\n.icon-confused:before {\n  content: \"\\ea34\";\n}\n\n.icon-confused2:before {\n  content: \"\\ea35\";\n}\n\n.icon-neutral:before {\n  content: \"\\ea36\";\n}\n\n.icon-neutral2:before {\n  content: \"\\ea37\";\n}\n\n.icon-hipster:before {\n  content: \"\\ea38\";\n}\n\n.icon-hipster2:before {\n  content: \"\\ea39\";\n}\n\n.icon-wondering:before {\n  content: \"\\ea3a\";\n}\n\n.icon-wondering2:before {\n  content: \"\\ea3b\";\n}\n\n.icon-sleepy:before {\n  content: \"\\ea3c\";\n}\n\n.icon-sleepy2:before {\n  content: \"\\ea3d\";\n}\n\n.icon-frustrated:before {\n  content: \"\\ea3e\";\n}\n\n.icon-frustrated2:before {\n  content: \"\\ea3f\";\n}\n\n.icon-crying:before {\n  content: \"\\ea40\";\n}\n\n.icon-crying2:before {\n  content: \"\\ea41\";\n}\n\n.icon-point-up:before {\n  content: \"\\ea42\";\n}\n\n.icon-point-right:before {\n  content: \"\\ea43\";\n}\n\n.icon-point-down:before {\n  content: \"\\ea44\";\n}\n\n.icon-point-left:before {\n  content: \"\\ea45\";\n}\n\n.icon-warning:before {\n  content: \"\\ea46\";\n}\n\n.icon-notification:before {\n  content: \"\\ea47\";\n}\n\n.icon-question:before {\n  content: \"\\ea48\";\n}\n\n.icon-plus:before {\n  content: \"\\ea49\";\n}\n\n.icon-minus:before {\n  content: \"\\ea4a\";\n}\n\n.icon-info:before {\n  content: \"\\ea4b\";\n}\n\n.icon-cancel-circle:before {\n  content: \"\\ea4c\";\n}\n\n.icon-blocked:before {\n  content: \"\\ea4d\";\n}\n\n.icon-cross:before {\n  content: \"\\ea4e\";\n}\n\n.icon-checkmark:before {\n  content: \"\\ea4f\";\n}\n\n.icon-checkmark2:before {\n  content: \"\\ea50\";\n}\n\n.icon-spell-check:before {\n  content: \"\\ea51\";\n}\n\n.icon-enter:before {\n  content: \"\\ea52\";\n}\n\n.icon-exit:before {\n  content: \"\\ea53\";\n}\n\n.icon-play2:before {\n  content: \"\\ea54\";\n}\n\n.icon-pause:before {\n  content: \"\\ea55\";\n}\n\n.icon-stop:before {\n  content: \"\\ea56\";\n}\n\n.icon-previous:before {\n  content: \"\\ea57\";\n}\n\n.icon-next1:before {\n  content: \"\\ea58\";\n}\n\n.icon-backward:before {\n  content: \"\\ea59\";\n}\n\n.icon-forward2:before {\n  content: \"\\ea5a\";\n}\n\n.icon-play3:before {\n  content: \"\\ea5b\";\n}\n\n.icon-pause2:before {\n  content: \"\\ea5c\";\n}\n\n.icon-stop2:before {\n  content: \"\\ea5d\";\n}\n\n.icon-backward2:before {\n  content: \"\\ea5e\";\n}\n\n.icon-forward3:before {\n  content: \"\\ea5f\";\n}\n\n.icon-first:before {\n  content: \"\\ea60\";\n}\n\n.icon-last:before {\n  content: \"\\ea61\";\n}\n\n.icon-previous2:before {\n  content: \"\\ea62\";\n}\n\n.icon-next2:before {\n  content: \"\\ea63\";\n}\n\n.icon-eject:before {\n  content: \"\\ea64\";\n}\n\n.icon-volume-high:before {\n  content: \"\\ea65\";\n}\n\n.icon-volume-medium:before {\n  content: \"\\ea66\";\n}\n\n.icon-volume-low:before {\n  content: \"\\ea67\";\n}\n\n.icon-volume-mute:before {\n  content: \"\\ea68\";\n}\n\n.icon-volume-mute2:before {\n  content: \"\\ea69\";\n}\n\n.icon-volume-increase:before {\n  content: \"\\ea6a\";\n}\n\n.icon-volume-decrease:before {\n  content: \"\\ea6b\";\n}\n\n.icon-loop:before {\n  content: \"\\ea6c\";\n}\n\n.icon-loop2:before {\n  content: \"\\ea6d\";\n}\n\n.icon-infinite:before {\n  content: \"\\ea6e\";\n}\n\n.icon-shuffle:before {\n  content: \"\\ea6f\";\n}\n\n.icon-arrow-up-left:before {\n  content: \"\\ea70\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\ea71\";\n}\n\n.icon-arrow-up-right:before {\n  content: \"\\ea72\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\ea73\";\n}\n\n.icon-arrow-down-right:before {\n  content: \"\\ea74\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\ea75\";\n}\n\n.icon-arrow-down-left:before {\n  content: \"\\ea76\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\ea77\";\n}\n\n.icon-arrow-up-left2:before {\n  content: \"\\ea78\";\n}\n\n.icon-arrow-up2:before {\n  content: \"\\ea79\";\n}\n\n.icon-arrow-up-right2:before {\n  content: \"\\ea7a\";\n}\n\n.icon-arrow-right2:before {\n  content: \"\\ea7b\";\n}\n\n.icon-arrow-down-right2:before {\n  content: \"\\ea7c\";\n}\n\n.icon-arrow-down2:before {\n  content: \"\\ea7d\";\n}\n\n.icon-arrow-down-left2:before {\n  content: \"\\ea7e\";\n}\n\n.icon-arrow-left2:before {\n  content: \"\\ea7f\";\n}\n\n.icon-circle-up:before {\n  content: \"\\ea80\";\n}\n\n.icon-circle-right:before {\n  content: \"\\ea81\";\n}\n\n.icon-circle-down:before {\n  content: \"\\ea82\";\n}\n\n.icon-circle-left:before {\n  content: \"\\ea83\";\n}\n\n.icon-tab:before {\n  content: \"\\ea84\";\n}\n\n.icon-move-up:before {\n  content: \"\\ea85\";\n}\n\n.icon-move-down:before {\n  content: \"\\ea86\";\n}\n\n.icon-sort-alpha-asc:before {\n  content: \"\\ea87\";\n}\n\n.icon-sort-alpha-desc:before {\n  content: \"\\ea88\";\n}\n\n.icon-sort-numeric-asc:before {\n  content: \"\\ea89\";\n}\n\n.icon-sort-numberic-desc:before {\n  content: \"\\ea8a\";\n}\n\n.icon-sort-amount-asc:before {\n  content: \"\\ea8b\";\n}\n\n.icon-sort-amount-desc:before {\n  content: \"\\ea8c\";\n}\n\n.icon-command:before {\n  content: \"\\ea8d\";\n}\n\n.icon-shift:before {\n  content: \"\\ea8e\";\n}\n\n.icon-ctrl:before {\n  content: \"\\ea8f\";\n}\n\n.icon-opt:before {\n  content: \"\\ea90\";\n}\n\n.icon-checkbox-checked:before {\n  content: \"\\ea91\";\n}\n\n.icon-checkbox-unchecked:before {\n  content: \"\\ea92\";\n}\n\n.icon-radio-checked:before {\n  content: \"\\ea93\";\n}\n\n.icon-radio-checked2:before {\n  content: \"\\ea94\";\n}\n\n.icon-radio-unchecked:before {\n  content: \"\\ea95\";\n}\n\n.icon-crop:before {\n  content: \"\\ea96\";\n}\n\n.icon-make-group:before {\n  content: \"\\ea97\";\n}\n\n.icon-ungroup:before {\n  content: \"\\ea98\";\n}\n\n.icon-scissors:before {\n  content: \"\\ea99\";\n}\n\n.icon-filter:before {\n  content: \"\\ea9a\";\n}\n\n.icon-font:before {\n  content: \"\\ea9b\";\n}\n\n.icon-ligature:before {\n  content: \"\\ea9c\";\n}\n\n.icon-ligature2:before {\n  content: \"\\ea9d\";\n}\n\n.icon-text-height:before {\n  content: \"\\ea9e\";\n}\n\n.icon-text-width:before {\n  content: \"\\ea9f\";\n}\n\n.icon-font-size:before {\n  content: \"\\eaa0\";\n}\n\n.icon-bold:before {\n  content: \"\\eaa1\";\n}\n\n.icon-underline:before {\n  content: \"\\eaa2\";\n}\n\n.icon-italic:before {\n  content: \"\\eaa3\";\n}\n\n.icon-strikethrough:before {\n  content: \"\\eaa4\";\n}\n\n.icon-omega:before {\n  content: \"\\eaa5\";\n}\n\n.icon-sigma:before {\n  content: \"\\eaa6\";\n}\n\n.icon-page-break:before {\n  content: \"\\eaa7\";\n}\n\n.icon-superscript:before {\n  content: \"\\eaa8\";\n}\n\n.icon-subscript:before {\n  content: \"\\eaa9\";\n}\n\n.icon-superscript2:before {\n  content: \"\\eaaa\";\n}\n\n.icon-subscript2:before {\n  content: \"\\eaab\";\n}\n\n.icon-text-color:before {\n  content: \"\\eaac\";\n}\n\n.icon-pagebreak:before {\n  content: \"\\eaad\";\n}\n\n.icon-clear-formatting:before {\n  content: \"\\eaae\";\n}\n\n.icon-table:before {\n  content: \"\\eaaf\";\n}\n\n.icon-table2:before {\n  content: \"\\eab0\";\n}\n\n.icon-insert-template:before {\n  content: \"\\eab1\";\n}\n\n.icon-pilcrow:before {\n  content: \"\\eab2\";\n}\n\n.icon-ltr:before {\n  content: \"\\eab3\";\n}\n\n.icon-rtl:before {\n  content: \"\\eab4\";\n}\n\n.icon-section:before {\n  content: \"\\eab5\";\n}\n\n.icon-paragraph-left:before {\n  content: \"\\eab6\";\n}\n\n.icon-paragraph-center:before {\n  content: \"\\eab7\";\n}\n\n.icon-paragraph-right:before {\n  content: \"\\eab8\";\n}\n\n.icon-paragraph-justify:before {\n  content: \"\\eab9\";\n}\n\n.icon-indent-increase:before {\n  content: \"\\eaba\";\n}\n\n.icon-indent-decrease:before {\n  content: \"\\eabb\";\n}\n\n.icon-share:before {\n  content: \"\\eabc\";\n}\n\n.icon-new-tab:before {\n  content: \"\\eabd\";\n}\n\n.icon-embed:before {\n  content: \"\\eabe\";\n}\n\n.icon-embed2:before {\n  content: \"\\eabf\";\n}\n\n.icon-terminal:before {\n  content: \"\\eac0\";\n}\n\n.icon-share2:before {\n  content: \"\\eac1\";\n}\n\n.icon-mail:before {\n  content: \"\\eac2\";\n}\n\n.icon-mail2:before {\n  content: \"\\eac3\";\n}\n\n.icon-mail3:before {\n  content: \"\\eac4\";\n}\n\n.icon-mail4:before {\n  content: \"\\eac5\";\n}\n\n.icon-amazon:before {\n  content: \"\\eac6\";\n}\n\n.icon-google:before {\n  content: \"\\eac7\";\n}\n\n.icon-google2:before {\n  content: \"\\eac8\";\n}\n\n.icon-google3:before {\n  content: \"\\eac9\";\n}\n\n.icon-google-plus:before {\n  content: \"\\eaca\";\n}\n\n.icon-google-plus2:before {\n  content: \"\\eacb\";\n}\n\n.icon-google-plus3:before {\n  content: \"\\eacc\";\n}\n\n.icon-hangouts:before {\n  content: \"\\eacd\";\n}\n\n.icon-google-drive:before {\n  content: \"\\eace\";\n}\n\n.icon-facebook:before {\n  content: \"\\eacf\";\n}\n\n.icon-facebook2:before {\n  content: \"\\ead0\";\n}\n\n.icon-instagram:before {\n  content: \"\\ead1\";\n}\n\n.icon-whatsapp:before {\n  content: \"\\ead2\";\n}\n\n.icon-spotify:before {\n  content: \"\\ead3\";\n}\n\n.icon-telegram:before {\n  content: \"\\ead4\";\n}\n\n.icon-twitter:before {\n  content: \"\\ead5\";\n}\n\n.icon-vine:before {\n  content: \"\\ead6\";\n}\n\n.icon-vk:before {\n  content: \"\\ead7\";\n}\n\n.icon-renren:before {\n  content: \"\\ead8\";\n}\n\n.icon-sina-weibo:before {\n  content: \"\\ead9\";\n}\n\n.icon-rss:before {\n  content: \"\\eada\";\n}\n\n.icon-rss2:before {\n  content: \"\\eadb\";\n}\n\n.icon-youtube:before {\n  content: \"\\eadc\";\n}\n\n.icon-youtube2:before {\n  content: \"\\eadd\";\n}\n\n.icon-twitch:before {\n  content: \"\\eade\";\n}\n\n.icon-vimeo:before {\n  content: \"\\eadf\";\n}\n\n.icon-vimeo2:before {\n  content: \"\\eae0\";\n}\n\n.icon-lanyrd:before {\n  content: \"\\eae1\";\n}\n\n.icon-flickr:before {\n  content: \"\\eae2\";\n}\n\n.icon-flickr2:before {\n  content: \"\\eae3\";\n}\n\n.icon-flickr3:before {\n  content: \"\\eae4\";\n}\n\n.icon-flickr4:before {\n  content: \"\\eae5\";\n}\n\n.icon-dribbble:before {\n  content: \"\\eae6\";\n}\n\n.icon-behance:before {\n  content: \"\\eae7\";\n}\n\n.icon-behance2:before {\n  content: \"\\eae8\";\n}\n\n.icon-deviantart:before {\n  content: \"\\eae9\";\n}\n\n.icon-500px:before {\n  content: \"\\eaea\";\n}\n\n.icon-steam:before {\n  content: \"\\eaeb\";\n}\n\n.icon-steam2:before {\n  content: \"\\eaec\";\n}\n\n.icon-dropbox:before {\n  content: \"\\eaed\";\n}\n\n.icon-onedrive:before {\n  content: \"\\eaee\";\n}\n\n.icon-github:before {\n  content: \"\\eaef\";\n}\n\n.icon-npm:before {\n  content: \"\\eaf0\";\n}\n\n.icon-basecamp:before {\n  content: \"\\eaf1\";\n}\n\n.icon-trello:before {\n  content: \"\\eaf2\";\n}\n\n.icon-wordpress:before {\n  content: \"\\eaf3\";\n}\n\n.icon-joomla:before {\n  content: \"\\eaf4\";\n}\n\n.icon-ello:before {\n  content: \"\\eaf5\";\n}\n\n.icon-blogger:before {\n  content: \"\\eaf6\";\n}\n\n.icon-blogger2:before {\n  content: \"\\eaf7\";\n}\n\n.icon-tumblr:before {\n  content: \"\\eaf8\";\n}\n\n.icon-tumblr2:before {\n  content: \"\\eaf9\";\n}\n\n.icon-yahoo:before {\n  content: \"\\eafa\";\n}\n\n.icon-yahoo2:before {\n  content: \"\\eafb\";\n}\n\n.icon-tux:before {\n  content: \"\\eafc\";\n}\n\n.icon-appleinc:before {\n  content: \"\\eafd\";\n}\n\n.icon-finder:before {\n  content: \"\\eafe\";\n}\n\n.icon-android1:before {\n  content: \"\\eaff\";\n}\n\n.icon-windows:before {\n  content: \"\\eb00\";\n}\n\n.icon-windows8:before {\n  content: \"\\eb01\";\n}\n\n.icon-soundcloud:before {\n  content: \"\\eb02\";\n}\n\n.icon-soundcloud2:before {\n  content: \"\\eb03\";\n}\n\n.icon-skype:before {\n  content: \"\\eb04\";\n}\n\n.icon-reddit:before {\n  content: \"\\eb05\";\n}\n\n.icon-hackernews:before {\n  content: \"\\eb06\";\n}\n\n.icon-wikipedia:before {\n  content: \"\\eb07\";\n}\n\n.icon-linkedin:before {\n  content: \"\\eb08\";\n}\n\n.icon-linkedin2:before {\n  content: \"\\eb09\";\n}\n\n.icon-lastfm:before {\n  content: \"\\eb0a\";\n}\n\n.icon-lastfm2:before {\n  content: \"\\eb0b\";\n}\n\n.icon-delicious:before {\n  content: \"\\eb0c\";\n}\n\n.icon-stumbleupon:before {\n  content: \"\\eb0d\";\n}\n\n.icon-stumbleupon2:before {\n  content: \"\\eb0e\";\n}\n\n.icon-stackoverflow:before {\n  content: \"\\eb0f\";\n}\n\n.icon-pinterest:before {\n  content: \"\\eb10\";\n}\n\n.icon-pinterest2:before {\n  content: \"\\eb11\";\n}\n\n.icon-xing:before {\n  content: \"\\eb12\";\n}\n\n.icon-xing2:before {\n  content: \"\\eb13\";\n}\n\n.icon-flattr:before {\n  content: \"\\eb14\";\n}\n\n.icon-foursquare:before {\n  content: \"\\eb15\";\n}\n\n.icon-yelp:before {\n  content: \"\\eb16\";\n}\n\n.icon-paypal:before {\n  content: \"\\eb17\";\n}\n\n.icon-chrome:before {\n  content: \"\\eb18\";\n}\n\n.icon-firefox:before {\n  content: \"\\eb19\";\n}\n\n.icon-IE:before {\n  content: \"\\eb1a\";\n}\n\n.icon-edge:before {\n  content: \"\\eb1b\";\n}\n\n.icon-safari:before {\n  content: \"\\eb1c\";\n}\n\n.icon-opera:before {\n  content: \"\\eb1d\";\n}\n\n.icon-file-pdf:before {\n  content: \"\\eb21\";\n}\n\n.icon-file-openoffice:before {\n  content: \"\\eb22\";\n}\n\n.icon-file-word:before {\n  content: \"\\eb23\";\n}\n\n.icon-file-excel:before {\n  content: \"\\eb24\";\n}\n\n.icon-libreoffice:before {\n  content: \"\\eb25\";\n}\n\n.icon-html-five:before {\n  content: \"\\eb26\";\n}\n\n.icon-html-five2:before {\n  content: \"\\eb27\";\n}\n\n.icon-css3:before {\n  content: \"\\eb28\";\n}\n\n.icon-git:before {\n  content: \"\\eb29\";\n}\n\n.icon-codepen:before {\n  content: \"\\eb2a\";\n}\n\n.icon-svg:before {\n  content: \"\\eb2b\";\n}\n\n.icon-IcoMoon:before {\n  content: \"\\eb2c\";\n}\n\nh2 {\n  padding: 20px 10%;\n  font-size: 20px;\n  line-height: 40px;\n  box-sizing: border-box;\n}\n\n.table {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.table .header {\n  background-color: rgba(16, 142, 233, 0.1);\n  height: 40px;\n}\n\n.table .header h4 {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.table .list {\n  width: 100%;\n  overflow: hidden;\n}\n\n.table .list li {\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(16, 142, 233, 0.1);\n}\n\n.table .list li p {\n  overflow: hidden;\n  float: left;\n  padding: 5px 10px;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-size: 12px;\n}\n\n.example {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.list-sample li {\n  width: 25%;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  border: 1px solid #eee;\n  float: left;\n  box-sizing: border-box;\n}\n\n.list-sample .color-red {\n  color: red;\n}\n\n.list-sample .color-blue {\n  color: blue;\n}\n"

/***/ }),

/***/ "./src/app/view/icon-view/icon-view.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/icon-view/icon-view.component.ts ***!
  \*******************************************************/
/*! exports provided: IconViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconViewComponent", function() { return IconViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconViewComponent = /** @class */ (function () {
    function IconViewComponent() {
        this.data = [
            {
                attr: '[size]',
                explain: "图标大小 12px",
                type: "number",
                default: 12
            },
            {
                attr: '[type]',
                explain: "图标类型，即图标的名字",
                type: "string",
                default: "无默认值"
            },
        ];
    }
    IconViewComponent.prototype.ngOnInit = function () {
    };
    IconViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-view',
            template: __webpack_require__(/*! ./icon-view.component.html */ "./src/app/view/icon-view/icon-view.component.html"),
            styles: [__webpack_require__(/*! ./icon-view.component.less */ "./src/app/view/icon-view/icon-view.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], IconViewComponent);
    return IconViewComponent;
}());



/***/ }),

/***/ "./src/app/view/nav-top/nav-top.component.html":
/*!*****************************************************!*\
  !*** ./src/app/view/nav-top/nav-top.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>NavTop 顶部导航</h2>\n<div class=\"table\">\n  <div class=\"clear header\">\n    <h4 class=\"win-10\">属性</h4>\n    <h4 class=\"win-60\">说明</h4>\n    <h4 class=\"win-20\">类型</h4>\n    <h4 class=\"win-10\">默认值</h4>\n  </div>\n  <ul class=\"list\">\n    <li class=\"clear\" *ngFor=\"let item of data\">\n      <p class=\"win-10\">{{item.attr}}</p>\n      <p class=\"win-60\">{{item.explain}}</p>\n      <p class=\"win-20\">{{item.type}}</p>\n      <p class=\"win-10\">{{item.default}}</p>\n    </li>\n  </ul>\n</div>\n<app-mobile-view>\n  <nrs-nav-top [leftContent]=\"leftContent\" (leftClick)=\"backPrePage()\" [rightContent]=\"rightContent\" (rightClick)=\"lookPop()\">按钮展示</nrs-nav-top>\n  <nrs-white-space></nrs-white-space>\n  <nrs-nav-top [leftContent]=\"leftContent\" [type]=\"'dark'\" (leftClick)=\"backPrePage()\">按钮展示2</nrs-nav-top>\n  <nrs-white-space></nrs-white-space>\n  <nrs-nav-top [leftContent]=\"leftContent\" [type]=\"'primary'\" (leftClick)=\"backPrePage()\">按钮展示3</nrs-nav-top>\n  <nrs-white-space></nrs-white-space>\n  <nrs-nav-top [leftContent]=\"leftContent\" [type]=\"'red'\" (leftClick)=\"backPrePage()\">按钮展示4</nrs-nav-top>\n</app-mobile-view>\n\n\n<ng-template #leftContent>\n  <nrs-icon [type]=\" 'back'\" [size]=\"16\"></nrs-icon>\n</ng-template>\n\n<ng-template #rightContent>\n  <nrs-popover [showPop]=\"showPopList\" (closedPop)=\"hidePopover($event)\" [popList]=\"popList\"></nrs-popover>\n</ng-template>\n\n<ng-template #popList>\n  <ng-container *ngFor=\"let item of popLists\">\n    <nrs-pop-item [link]=\"item.link\" [iconType]=\"item.type\">{{item.title}}</nrs-pop-item>\n  </ng-container>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/view/nav-top/nav-top.component.less":
/*!*****************************************************!*\
  !*** ./src/app/view/nav-top/nav-top.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src:  url('icomoon.eot?8t91ih');\n  src:  url('icomoon.eot?8t91ih#iefix') format('embedded-opentype'),\n    url('icomoon.ttf?8t91ih') format('truetype'),\n    url('icomoon.woff?8t91ih') format('woff'),\n    url('icomoon.svg?8t91ih#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /*line-height: 1;*/\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-Loading:before {\n  content: \"\\e900\";\n}\n\n.icon-check:before {\n  content: \"\\e901\";\n}\n\n.icon-more3:before {\n  content: \"\\e902\";\n}\n\n.icon-certificate:before {\n  content: \"\\e903\";\n}\n\n.icon-news:before {\n  content: \"\\e904\";\n}\n\n.icon-keys01:before {\n  content: \"\\e905\";\n}\n\n.icon-user02:before {\n  content: \"\\e906\";\n}\n\n.icon-user03:before {\n  content: \"\\e907\";\n}\n\n.icon-keys02:before {\n  content: \"\\e908\";\n}\n\n.icon-android:before {\n  content: \"\\e909\";\n}\n\n.icon-help:before {\n  content: \"\\e90a\";\n}\n\n.icon-ios:before {\n  content: \"\\e90b\";\n}\n\n.icon-searchPage:before {\n  content: \"\\e90c\";\n}\n\n.icon-add:before {\n  content: \"\\e90d\";\n}\n\n.icon-back:before {\n  content: \"\\e90e\";\n}\n\n.icon-close:before {\n  content: \"\\e90f\";\n}\n\n.icon-hotLine:before {\n  content: \"\\e910\";\n}\n\n.icon-i:before {\n  content: \"\\e911\";\n}\n\n.icon-link:before {\n  content: \"\\e912\";\n}\n\n.icon-more:before {\n  content: \"\\e913\";\n}\n\n.icon-next_1:before {\n  content: \"\\e914\";\n}\n\n.icon-next:before {\n  content: \"\\e915\";\n}\n\n.icon-phone:before {\n  content: \"\\e916\";\n}\n\n.icon-pwd:before {\n  content: \"\\e917\";\n}\n\n.icon-reduce:before {\n  content: \"\\e918\";\n}\n\n.icon-tabs:before {\n  content: \"\\e919\";\n}\n\n.icon-tel:before {\n  content: \"\\e91a\";\n}\n\n.icon-time:before {\n  content: \"\\e91b\";\n}\n\n.icon-user:before {\n  content: \"\\e91c\";\n}\n\n.icon-verify:before {\n  content: \"\\e91d\";\n}\n\n.icon-mobile:before {\n  content: \"\\e91e\";\n}\n\n.icon-show:before {\n  content: \"\\e91f\";\n}\n\n.icon-site:before {\n  content: \"\\e920\";\n}\n\n.icon-triangle:before {\n  content: \"\\e921\";\n}\n\n.icon-hide:before {\n  content: \"\\e922\";\n}\n\n.icon-userData:before {\n  content: \"\\e923\";\n}\n\n.icon-header:before {\n  content: \"\\e924\";\n}\n\n.icon-feedback:before {\n  content: \"\\e925\";\n}\n\n.icon-learn:before {\n  content: \"\\e926\";\n}\n\n.icon-set:before {\n  content: \"\\e927\";\n}\n\n.icon-selected:before {\n  content: \"\\e928\";\n}\n\n.icon-notSelected:before {\n  content: \"\\e929\";\n}\n\n.icon-notice:before {\n  content: \"\\e92a\";\n}\n\n.icon-define:before {\n  content: \"\\e92b\";\n}\n\n.icon-lock:before {\n  content: \"\\e92c\";\n}\n\n.icon-unfinished:before {\n  content: \"\\e92d\";\n}\n\n.icon-closedEyes:before {\n  content: \"\\e92e\";\n}\n\n.icon-signOut:before {\n  content: \"\\e92f\";\n}\n\n.icon-closev2:before {\n  content: \"\\e930\";\n}\n\n.icon-photo:before {\n  content: \"\\e931\";\n}\n\n.icon-photograph:before {\n  content: \"\\e932\";\n}\n\n.icon-video:before {\n  content: \"\\e933\";\n}\n\n.icon-userDetails:before {\n  content: \"\\e934\";\n}\n\n.icon-index:before {\n  content: \"\\e935\";\n}\n\n.icon-phone02:before {\n  content: \"\\e936\";\n}\n\n.icon-eyes:before {\n  content: \"\\e937\";\n}\n\n.icon-pwd02:before {\n  content: \"\\e938\";\n}\n\n.icon-company:before {\n  content: \"\\e939\";\n}\n\n.icon-county:before {\n  content: \"\\e93a\";\n}\n\n.icon-search:before {\n  content: \"\\e93b\";\n}\n\n.icon-alipay:before {\n  content: \"\\e93c\";\n}\n\n.icon-WeChat:before {\n  content: \"\\e93d\";\n}\n\n.icon-right-arrow:before {\n  content: \"\\e93e\";\n}\n\n.icon-more2:before {\n  content: \"\\e93f\";\n}\n\n.icon-course:before {\n  content: \"\\e940\";\n}\n\n.icon-verified:before {\n  content: \"\\e941\";\n}\n\n.icon-home:before {\n  content: \"\\e942\";\n}\n\n.icon-home2:before {\n  content: \"\\e943\";\n}\n\n.icon-home3:before {\n  content: \"\\e944\";\n}\n\n.icon-office:before {\n  content: \"\\e945\";\n}\n\n.icon-newspaper:before {\n  content: \"\\e946\";\n}\n\n.icon-pencil:before {\n  content: \"\\e947\";\n}\n\n.icon-pencil2:before {\n  content: \"\\e948\";\n}\n\n.icon-quill:before {\n  content: \"\\e949\";\n}\n\n.icon-pen:before {\n  content: \"\\e94a\";\n}\n\n.icon-blog:before {\n  content: \"\\e94b\";\n}\n\n.icon-eyedropper:before {\n  content: \"\\e94c\";\n}\n\n.icon-droplet:before {\n  content: \"\\e94d\";\n}\n\n.icon-paint-format:before {\n  content: \"\\e94e\";\n}\n\n.icon-image:before {\n  content: \"\\e94f\";\n}\n\n.icon-images:before {\n  content: \"\\eb20\";\n}\n\n.icon-camera:before {\n  content: \"\\e950\";\n}\n\n.icon-headphones:before {\n  content: \"\\e951\";\n}\n\n.icon-music:before {\n  content: \"\\e952\";\n}\n\n.icon-play:before {\n  content: \"\\e953\";\n}\n\n.icon-film:before {\n  content: \"\\e954\";\n}\n\n.icon-video-camera:before {\n  content: \"\\e955\";\n}\n\n.icon-dice:before {\n  content: \"\\e956\";\n}\n\n.icon-pacman:before {\n  content: \"\\e957\";\n}\n\n.icon-spades:before {\n  content: \"\\e958\";\n}\n\n.icon-clubs:before {\n  content: \"\\e959\";\n}\n\n.icon-diamonds:before {\n  content: \"\\e95a\";\n}\n\n.icon-bullhorn:before {\n  content: \"\\e95b\";\n}\n\n.icon-connection:before {\n  content: \"\\e95c\";\n}\n\n.icon-podcast:before {\n  content: \"\\e95d\";\n}\n\n.icon-feed:before {\n  content: \"\\e95e\";\n}\n\n.icon-mic:before {\n  content: \"\\e95f\";\n}\n\n.icon-book:before {\n  content: \"\\e960\";\n}\n\n.icon-books:before {\n  content: \"\\e961\";\n}\n\n.icon-library:before {\n  content: \"\\e962\";\n}\n\n.icon-file-text:before {\n  content: \"\\e963\";\n}\n\n.icon-profile:before {\n  content: \"\\e964\";\n}\n\n.icon-file-empty:before {\n  content: \"\\e965\";\n}\n\n.icon-files-empty:before {\n  content: \"\\e966\";\n}\n\n.icon-file-text2:before {\n  content: \"\\e967\";\n}\n\n.icon-file-picture:before {\n  content: \"\\e968\";\n}\n\n.icon-file-music:before {\n  content: \"\\e969\";\n}\n\n.icon-file-play:before {\n  content: \"\\e96a\";\n}\n\n.icon-file-video:before {\n  content: \"\\e96b\";\n}\n\n.icon-file-zip:before {\n  content: \"\\e96c\";\n}\n\n.icon-copy:before {\n  content: \"\\e96d\";\n}\n\n.icon-paste:before {\n  content: \"\\e96e\";\n}\n\n.icon-stack:before {\n  content: \"\\e96f\";\n}\n\n.icon-folder:before {\n  content: \"\\e970\";\n}\n\n.icon-folder-open:before {\n  content: \"\\e971\";\n}\n\n.icon-folder-plus:before {\n  content: \"\\e972\";\n}\n\n.icon-folder-minus:before {\n  content: \"\\e973\";\n}\n\n.icon-folder-download:before {\n  content: \"\\e974\";\n}\n\n.icon-folder-upload:before {\n  content: \"\\e975\";\n}\n\n.icon-price-tag:before {\n  content: \"\\e976\";\n}\n\n.icon-price-tags:before {\n  content: \"\\e977\";\n}\n\n.icon-barcode:before {\n  content: \"\\e978\";\n}\n\n.icon-qrcode:before {\n  content: \"\\e979\";\n}\n\n.icon-ticket:before {\n  content: \"\\e97a\";\n}\n\n.icon-cart:before {\n  content: \"\\e97b\";\n}\n\n.icon-coin-dollar:before {\n  content: \"\\e97c\";\n}\n\n.icon-coin-euro:before {\n  content: \"\\e97d\";\n}\n\n.icon-coin-pound:before {\n  content: \"\\e97e\";\n}\n\n.icon-coin-yen:before {\n  content: \"\\e97f\";\n}\n\n.icon-credit-card:before {\n  content: \"\\e980\";\n}\n\n.icon-calculator:before {\n  content: \"\\e981\";\n}\n\n.icon-lifebuoy:before {\n  content: \"\\e982\";\n}\n\n.icon-phone1:before {\n  content: \"\\e983\";\n}\n\n.icon-phone-hang-up:before {\n  content: \"\\e984\";\n}\n\n.icon-address-book:before {\n  content: \"\\e985\";\n}\n\n.icon-envelop:before {\n  content: \"\\e986\";\n}\n\n.icon-pushpin:before {\n  content: \"\\e987\";\n}\n\n.icon-location:before {\n  content: \"\\e988\";\n}\n\n.icon-location2:before {\n  content: \"\\e989\";\n}\n\n.icon-compass:before {\n  content: \"\\e98a\";\n}\n\n.icon-compass2:before {\n  content: \"\\e98b\";\n}\n\n.icon-map:before {\n  content: \"\\e98c\";\n}\n\n.icon-map2:before {\n  content: \"\\e98d\";\n}\n\n.icon-history:before {\n  content: \"\\e98e\";\n}\n\n.icon-clock:before {\n  content: \"\\e98f\";\n}\n\n.icon-clock2:before {\n  content: \"\\e990\";\n}\n\n.icon-alarm:before {\n  content: \"\\e991\";\n}\n\n.icon-bell:before {\n  content: \"\\e992\";\n}\n\n.icon-stopwatch:before {\n  content: \"\\e993\";\n}\n\n.icon-calendar:before {\n  content: \"\\e994\";\n}\n\n.icon-printer:before {\n  content: \"\\e995\";\n}\n\n.icon-keyboard:before {\n  content: \"\\e996\";\n}\n\n.icon-display:before {\n  content: \"\\e997\";\n}\n\n.icon-laptop:before {\n  content: \"\\e998\";\n}\n\n.icon-mobile1:before {\n  content: \"\\e999\";\n}\n\n.icon-mobile2:before {\n  content: \"\\e99a\";\n}\n\n.icon-tablet:before {\n  content: \"\\e99b\";\n}\n\n.icon-tv:before {\n  content: \"\\e99c\";\n}\n\n.icon-drawer:before {\n  content: \"\\e99d\";\n}\n\n.icon-drawer2:before {\n  content: \"\\e99e\";\n}\n\n.icon-box-add:before {\n  content: \"\\e99f\";\n}\n\n.icon-box-remove:before {\n  content: \"\\e9a0\";\n}\n\n.icon-download:before {\n  content: \"\\e9a1\";\n}\n\n.icon-upload:before {\n  content: \"\\e9a2\";\n}\n\n.icon-floppy-disk:before {\n  content: \"\\e9a3\";\n}\n\n.icon-drive:before {\n  content: \"\\e9a4\";\n}\n\n.icon-database:before {\n  content: \"\\e9a5\";\n}\n\n.icon-undo:before {\n  content: \"\\e9a6\";\n}\n\n.icon-redo:before {\n  content: \"\\e9a7\";\n}\n\n.icon-undo2:before {\n  content: \"\\e9a8\";\n}\n\n.icon-redo2:before {\n  content: \"\\e9a9\";\n}\n\n.icon-forward:before {\n  content: \"\\e9aa\";\n}\n\n.icon-reply:before {\n  content: \"\\e9ab\";\n}\n\n.icon-bubble:before {\n  content: \"\\e9ac\";\n}\n\n.icon-bubbles:before {\n  content: \"\\e9ad\";\n}\n\n.icon-bubbles2:before {\n  content: \"\\e9ae\";\n}\n\n.icon-bubble2:before {\n  content: \"\\e9af\";\n}\n\n.icon-bubbles3:before {\n  content: \"\\e9b0\";\n}\n\n.icon-bubbles4:before {\n  content: \"\\e9b1\";\n}\n\n.icon-user1:before {\n  content: \"\\e9b2\";\n}\n\n.icon-users:before {\n  content: \"\\e9b3\";\n}\n\n.icon-user-plus:before {\n  content: \"\\e9b4\";\n}\n\n.icon-user-minus:before {\n  content: \"\\e9b5\";\n}\n\n.icon-user-check:before {\n  content: \"\\e9b6\";\n}\n\n.icon-user-tie:before {\n  content: \"\\e9b7\";\n}\n\n.icon-quotes-left:before {\n  content: \"\\e9b8\";\n}\n\n.icon-quotes-right:before {\n  content: \"\\e9b9\";\n}\n\n.icon-hour-glass:before {\n  content: \"\\e9ba\";\n}\n\n.icon-spinner:before {\n  content: \"\\e9bb\";\n}\n\n.icon-spinner2:before {\n  content: \"\\e9bc\";\n}\n\n.icon-spinner3:before {\n  content: \"\\e9bd\";\n}\n\n.icon-spinner4:before {\n  content: \"\\e9be\";\n}\n\n.icon-spinner5:before {\n  content: \"\\e9bf\";\n}\n\n.icon-spinner6:before {\n  content: \"\\eb1f\";\n}\n\n.icon-spinner7:before {\n  content: \"\\e9c0\";\n}\n\n.icon-spinner8:before {\n  content: \"\\e9c1\";\n}\n\n.icon-spinner9:before {\n  content: \"\\e9c2\";\n}\n\n.icon-spinner10:before {\n  content: \"\\e9c3\";\n}\n\n.icon-spinner11:before {\n  content: \"\\e9c4\";\n}\n\n.icon-binoculars:before {\n  content: \"\\e9c5\";\n}\n\n.icon-search1:before {\n  content: \"\\e9c6\";\n}\n\n.icon-zoom-in:before {\n  content: \"\\e9c7\";\n}\n\n.icon-zoom-out:before {\n  content: \"\\e9c8\";\n}\n\n.icon-enlarge:before {\n  content: \"\\e9c9\";\n}\n\n.icon-shrink:before {\n  content: \"\\e9ca\";\n}\n\n.icon-enlarge2:before {\n  content: \"\\e9cb\";\n}\n\n.icon-shrink2:before {\n  content: \"\\e9cc\";\n}\n\n.icon-key:before {\n  content: \"\\eb1e\";\n}\n\n.icon-key2:before {\n  content: \"\\e9cd\";\n}\n\n.icon-lock1:before {\n  content: \"\\e9ce\";\n}\n\n.icon-unlocked:before {\n  content: \"\\e9cf\";\n}\n\n.icon-wrench:before {\n  content: \"\\e9d0\";\n}\n\n.icon-equalizer:before {\n  content: \"\\e9d1\";\n}\n\n.icon-equalizer2:before {\n  content: \"\\e9d2\";\n}\n\n.icon-cog:before {\n  content: \"\\e9d3\";\n}\n\n.icon-cogs:before {\n  content: \"\\e9d4\";\n}\n\n.icon-hammer:before {\n  content: \"\\e9d5\";\n}\n\n.icon-magic-wand:before {\n  content: \"\\e9d6\";\n}\n\n.icon-aid-kit:before {\n  content: \"\\e9d7\";\n}\n\n.icon-bug:before {\n  content: \"\\e9d8\";\n}\n\n.icon-pie-chart:before {\n  content: \"\\e9d9\";\n}\n\n.icon-stats-dots:before {\n  content: \"\\e9da\";\n}\n\n.icon-stats-bars:before {\n  content: \"\\e9db\";\n}\n\n.icon-stats-bars2:before {\n  content: \"\\e9dc\";\n}\n\n.icon-trophy:before {\n  content: \"\\e9dd\";\n}\n\n.icon-gift:before {\n  content: \"\\e9de\";\n}\n\n.icon-glass:before {\n  content: \"\\e9df\";\n}\n\n.icon-glass2:before {\n  content: \"\\e9e0\";\n}\n\n.icon-mug:before {\n  content: \"\\e9e1\";\n}\n\n.icon-spoon-knife:before {\n  content: \"\\e9e2\";\n}\n\n.icon-leaf:before {\n  content: \"\\e9e3\";\n}\n\n.icon-rocket:before {\n  content: \"\\e9e4\";\n}\n\n.icon-meter:before {\n  content: \"\\e9e5\";\n}\n\n.icon-meter2:before {\n  content: \"\\e9e6\";\n}\n\n.icon-hammer2:before {\n  content: \"\\e9e7\";\n}\n\n.icon-fire:before {\n  content: \"\\e9e8\";\n}\n\n.icon-lab:before {\n  content: \"\\e9e9\";\n}\n\n.icon-magnet:before {\n  content: \"\\e9ea\";\n}\n\n.icon-bin:before {\n  content: \"\\e9eb\";\n}\n\n.icon-bin2:before {\n  content: \"\\e9ec\";\n}\n\n.icon-briefcase:before {\n  content: \"\\e9ed\";\n}\n\n.icon-airplane:before {\n  content: \"\\e9ee\";\n}\n\n.icon-truck:before {\n  content: \"\\e9ef\";\n}\n\n.icon-road:before {\n  content: \"\\e9f0\";\n}\n\n.icon-accessibility:before {\n  content: \"\\e9f1\";\n}\n\n.icon-target:before {\n  content: \"\\e9f2\";\n}\n\n.icon-shield:before {\n  content: \"\\e9f3\";\n}\n\n.icon-power:before {\n  content: \"\\e9f4\";\n}\n\n.icon-switch:before {\n  content: \"\\e9f5\";\n}\n\n.icon-power-cord:before {\n  content: \"\\e9f6\";\n}\n\n.icon-clipboard:before {\n  content: \"\\e9f7\";\n}\n\n.icon-list-numbered:before {\n  content: \"\\e9f8\";\n}\n\n.icon-list:before {\n  content: \"\\e9f9\";\n}\n\n.icon-list2:before {\n  content: \"\\e9fa\";\n}\n\n.icon-tree:before {\n  content: \"\\e9fb\";\n}\n\n.icon-menu:before {\n  content: \"\\e9fc\";\n}\n\n.icon-menu2:before {\n  content: \"\\e9fd\";\n}\n\n.icon-menu3:before {\n  content: \"\\e9fe\";\n}\n\n.icon-menu4:before {\n  content: \"\\e9ff\";\n}\n\n.icon-cloud:before {\n  content: \"\\ea00\";\n}\n\n.icon-cloud-download:before {\n  content: \"\\ea01\";\n}\n\n.icon-cloud-upload:before {\n  content: \"\\ea02\";\n}\n\n.icon-cloud-check:before {\n  content: \"\\ea03\";\n}\n\n.icon-download2:before {\n  content: \"\\ea04\";\n}\n\n.icon-upload2:before {\n  content: \"\\ea05\";\n}\n\n.icon-download3:before {\n  content: \"\\ea06\";\n}\n\n.icon-upload3:before {\n  content: \"\\ea07\";\n}\n\n.icon-sphere:before {\n  content: \"\\ea08\";\n}\n\n.icon-earth:before {\n  content: \"\\ea09\";\n}\n\n.icon-link1:before {\n  content: \"\\ea0a\";\n}\n\n.icon-flag:before {\n  content: \"\\ea0b\";\n}\n\n.icon-attachment:before {\n  content: \"\\ea0c\";\n}\n\n.icon-eye:before {\n  content: \"\\ea0d\";\n}\n\n.icon-eye-plus:before {\n  content: \"\\ea0e\";\n}\n\n.icon-eye-minus:before {\n  content: \"\\ea0f\";\n}\n\n.icon-eye-blocked:before {\n  content: \"\\ea10\";\n}\n\n.icon-bookmark:before {\n  content: \"\\ea11\";\n}\n\n.icon-bookmarks:before {\n  content: \"\\ea12\";\n}\n\n.icon-sun:before {\n  content: \"\\ea13\";\n}\n\n.icon-contrast:before {\n  content: \"\\ea14\";\n}\n\n.icon-brightness-contrast:before {\n  content: \"\\ea15\";\n}\n\n.icon-star-empty:before {\n  content: \"\\ea16\";\n}\n\n.icon-star-half:before {\n  content: \"\\ea17\";\n}\n\n.icon-star-full:before {\n  content: \"\\ea18\";\n}\n\n.icon-heart:before {\n  content: \"\\ea19\";\n}\n\n.icon-heart-broken:before {\n  content: \"\\ea1a\";\n}\n\n.icon-man:before {\n  content: \"\\ea1b\";\n}\n\n.icon-woman:before {\n  content: \"\\ea1c\";\n}\n\n.icon-man-woman:before {\n  content: \"\\ea1d\";\n}\n\n.icon-happy:before {\n  content: \"\\ea1e\";\n}\n\n.icon-happy2:before {\n  content: \"\\ea1f\";\n}\n\n.icon-smile:before {\n  content: \"\\ea20\";\n}\n\n.icon-smile2:before {\n  content: \"\\ea21\";\n}\n\n.icon-tongue:before {\n  content: \"\\ea22\";\n}\n\n.icon-tongue2:before {\n  content: \"\\ea23\";\n}\n\n.icon-sad:before {\n  content: \"\\ea24\";\n}\n\n.icon-sad2:before {\n  content: \"\\ea25\";\n}\n\n.icon-wink:before {\n  content: \"\\ea26\";\n}\n\n.icon-wink2:before {\n  content: \"\\ea27\";\n}\n\n.icon-grin:before {\n  content: \"\\ea28\";\n}\n\n.icon-grin2:before {\n  content: \"\\ea29\";\n}\n\n.icon-cool:before {\n  content: \"\\ea2a\";\n}\n\n.icon-cool2:before {\n  content: \"\\ea2b\";\n}\n\n.icon-angry:before {\n  content: \"\\ea2c\";\n}\n\n.icon-angry2:before {\n  content: \"\\ea2d\";\n}\n\n.icon-evil:before {\n  content: \"\\ea2e\";\n}\n\n.icon-evil2:before {\n  content: \"\\ea2f\";\n}\n\n.icon-shocked:before {\n  content: \"\\ea30\";\n}\n\n.icon-shocked2:before {\n  content: \"\\ea31\";\n}\n\n.icon-baffled:before {\n  content: \"\\ea32\";\n}\n\n.icon-baffled2:before {\n  content: \"\\ea33\";\n}\n\n.icon-confused:before {\n  content: \"\\ea34\";\n}\n\n.icon-confused2:before {\n  content: \"\\ea35\";\n}\n\n.icon-neutral:before {\n  content: \"\\ea36\";\n}\n\n.icon-neutral2:before {\n  content: \"\\ea37\";\n}\n\n.icon-hipster:before {\n  content: \"\\ea38\";\n}\n\n.icon-hipster2:before {\n  content: \"\\ea39\";\n}\n\n.icon-wondering:before {\n  content: \"\\ea3a\";\n}\n\n.icon-wondering2:before {\n  content: \"\\ea3b\";\n}\n\n.icon-sleepy:before {\n  content: \"\\ea3c\";\n}\n\n.icon-sleepy2:before {\n  content: \"\\ea3d\";\n}\n\n.icon-frustrated:before {\n  content: \"\\ea3e\";\n}\n\n.icon-frustrated2:before {\n  content: \"\\ea3f\";\n}\n\n.icon-crying:before {\n  content: \"\\ea40\";\n}\n\n.icon-crying2:before {\n  content: \"\\ea41\";\n}\n\n.icon-point-up:before {\n  content: \"\\ea42\";\n}\n\n.icon-point-right:before {\n  content: \"\\ea43\";\n}\n\n.icon-point-down:before {\n  content: \"\\ea44\";\n}\n\n.icon-point-left:before {\n  content: \"\\ea45\";\n}\n\n.icon-warning:before {\n  content: \"\\ea46\";\n}\n\n.icon-notification:before {\n  content: \"\\ea47\";\n}\n\n.icon-question:before {\n  content: \"\\ea48\";\n}\n\n.icon-plus:before {\n  content: \"\\ea49\";\n}\n\n.icon-minus:before {\n  content: \"\\ea4a\";\n}\n\n.icon-info:before {\n  content: \"\\ea4b\";\n}\n\n.icon-cancel-circle:before {\n  content: \"\\ea4c\";\n}\n\n.icon-blocked:before {\n  content: \"\\ea4d\";\n}\n\n.icon-cross:before {\n  content: \"\\ea4e\";\n}\n\n.icon-checkmark:before {\n  content: \"\\ea4f\";\n}\n\n.icon-checkmark2:before {\n  content: \"\\ea50\";\n}\n\n.icon-spell-check:before {\n  content: \"\\ea51\";\n}\n\n.icon-enter:before {\n  content: \"\\ea52\";\n}\n\n.icon-exit:before {\n  content: \"\\ea53\";\n}\n\n.icon-play2:before {\n  content: \"\\ea54\";\n}\n\n.icon-pause:before {\n  content: \"\\ea55\";\n}\n\n.icon-stop:before {\n  content: \"\\ea56\";\n}\n\n.icon-previous:before {\n  content: \"\\ea57\";\n}\n\n.icon-next1:before {\n  content: \"\\ea58\";\n}\n\n.icon-backward:before {\n  content: \"\\ea59\";\n}\n\n.icon-forward2:before {\n  content: \"\\ea5a\";\n}\n\n.icon-play3:before {\n  content: \"\\ea5b\";\n}\n\n.icon-pause2:before {\n  content: \"\\ea5c\";\n}\n\n.icon-stop2:before {\n  content: \"\\ea5d\";\n}\n\n.icon-backward2:before {\n  content: \"\\ea5e\";\n}\n\n.icon-forward3:before {\n  content: \"\\ea5f\";\n}\n\n.icon-first:before {\n  content: \"\\ea60\";\n}\n\n.icon-last:before {\n  content: \"\\ea61\";\n}\n\n.icon-previous2:before {\n  content: \"\\ea62\";\n}\n\n.icon-next2:before {\n  content: \"\\ea63\";\n}\n\n.icon-eject:before {\n  content: \"\\ea64\";\n}\n\n.icon-volume-high:before {\n  content: \"\\ea65\";\n}\n\n.icon-volume-medium:before {\n  content: \"\\ea66\";\n}\n\n.icon-volume-low:before {\n  content: \"\\ea67\";\n}\n\n.icon-volume-mute:before {\n  content: \"\\ea68\";\n}\n\n.icon-volume-mute2:before {\n  content: \"\\ea69\";\n}\n\n.icon-volume-increase:before {\n  content: \"\\ea6a\";\n}\n\n.icon-volume-decrease:before {\n  content: \"\\ea6b\";\n}\n\n.icon-loop:before {\n  content: \"\\ea6c\";\n}\n\n.icon-loop2:before {\n  content: \"\\ea6d\";\n}\n\n.icon-infinite:before {\n  content: \"\\ea6e\";\n}\n\n.icon-shuffle:before {\n  content: \"\\ea6f\";\n}\n\n.icon-arrow-up-left:before {\n  content: \"\\ea70\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\ea71\";\n}\n\n.icon-arrow-up-right:before {\n  content: \"\\ea72\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\ea73\";\n}\n\n.icon-arrow-down-right:before {\n  content: \"\\ea74\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\ea75\";\n}\n\n.icon-arrow-down-left:before {\n  content: \"\\ea76\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\ea77\";\n}\n\n.icon-arrow-up-left2:before {\n  content: \"\\ea78\";\n}\n\n.icon-arrow-up2:before {\n  content: \"\\ea79\";\n}\n\n.icon-arrow-up-right2:before {\n  content: \"\\ea7a\";\n}\n\n.icon-arrow-right2:before {\n  content: \"\\ea7b\";\n}\n\n.icon-arrow-down-right2:before {\n  content: \"\\ea7c\";\n}\n\n.icon-arrow-down2:before {\n  content: \"\\ea7d\";\n}\n\n.icon-arrow-down-left2:before {\n  content: \"\\ea7e\";\n}\n\n.icon-arrow-left2:before {\n  content: \"\\ea7f\";\n}\n\n.icon-circle-up:before {\n  content: \"\\ea80\";\n}\n\n.icon-circle-right:before {\n  content: \"\\ea81\";\n}\n\n.icon-circle-down:before {\n  content: \"\\ea82\";\n}\n\n.icon-circle-left:before {\n  content: \"\\ea83\";\n}\n\n.icon-tab:before {\n  content: \"\\ea84\";\n}\n\n.icon-move-up:before {\n  content: \"\\ea85\";\n}\n\n.icon-move-down:before {\n  content: \"\\ea86\";\n}\n\n.icon-sort-alpha-asc:before {\n  content: \"\\ea87\";\n}\n\n.icon-sort-alpha-desc:before {\n  content: \"\\ea88\";\n}\n\n.icon-sort-numeric-asc:before {\n  content: \"\\ea89\";\n}\n\n.icon-sort-numberic-desc:before {\n  content: \"\\ea8a\";\n}\n\n.icon-sort-amount-asc:before {\n  content: \"\\ea8b\";\n}\n\n.icon-sort-amount-desc:before {\n  content: \"\\ea8c\";\n}\n\n.icon-command:before {\n  content: \"\\ea8d\";\n}\n\n.icon-shift:before {\n  content: \"\\ea8e\";\n}\n\n.icon-ctrl:before {\n  content: \"\\ea8f\";\n}\n\n.icon-opt:before {\n  content: \"\\ea90\";\n}\n\n.icon-checkbox-checked:before {\n  content: \"\\ea91\";\n}\n\n.icon-checkbox-unchecked:before {\n  content: \"\\ea92\";\n}\n\n.icon-radio-checked:before {\n  content: \"\\ea93\";\n}\n\n.icon-radio-checked2:before {\n  content: \"\\ea94\";\n}\n\n.icon-radio-unchecked:before {\n  content: \"\\ea95\";\n}\n\n.icon-crop:before {\n  content: \"\\ea96\";\n}\n\n.icon-make-group:before {\n  content: \"\\ea97\";\n}\n\n.icon-ungroup:before {\n  content: \"\\ea98\";\n}\n\n.icon-scissors:before {\n  content: \"\\ea99\";\n}\n\n.icon-filter:before {\n  content: \"\\ea9a\";\n}\n\n.icon-font:before {\n  content: \"\\ea9b\";\n}\n\n.icon-ligature:before {\n  content: \"\\ea9c\";\n}\n\n.icon-ligature2:before {\n  content: \"\\ea9d\";\n}\n\n.icon-text-height:before {\n  content: \"\\ea9e\";\n}\n\n.icon-text-width:before {\n  content: \"\\ea9f\";\n}\n\n.icon-font-size:before {\n  content: \"\\eaa0\";\n}\n\n.icon-bold:before {\n  content: \"\\eaa1\";\n}\n\n.icon-underline:before {\n  content: \"\\eaa2\";\n}\n\n.icon-italic:before {\n  content: \"\\eaa3\";\n}\n\n.icon-strikethrough:before {\n  content: \"\\eaa4\";\n}\n\n.icon-omega:before {\n  content: \"\\eaa5\";\n}\n\n.icon-sigma:before {\n  content: \"\\eaa6\";\n}\n\n.icon-page-break:before {\n  content: \"\\eaa7\";\n}\n\n.icon-superscript:before {\n  content: \"\\eaa8\";\n}\n\n.icon-subscript:before {\n  content: \"\\eaa9\";\n}\n\n.icon-superscript2:before {\n  content: \"\\eaaa\";\n}\n\n.icon-subscript2:before {\n  content: \"\\eaab\";\n}\n\n.icon-text-color:before {\n  content: \"\\eaac\";\n}\n\n.icon-pagebreak:before {\n  content: \"\\eaad\";\n}\n\n.icon-clear-formatting:before {\n  content: \"\\eaae\";\n}\n\n.icon-table:before {\n  content: \"\\eaaf\";\n}\n\n.icon-table2:before {\n  content: \"\\eab0\";\n}\n\n.icon-insert-template:before {\n  content: \"\\eab1\";\n}\n\n.icon-pilcrow:before {\n  content: \"\\eab2\";\n}\n\n.icon-ltr:before {\n  content: \"\\eab3\";\n}\n\n.icon-rtl:before {\n  content: \"\\eab4\";\n}\n\n.icon-section:before {\n  content: \"\\eab5\";\n}\n\n.icon-paragraph-left:before {\n  content: \"\\eab6\";\n}\n\n.icon-paragraph-center:before {\n  content: \"\\eab7\";\n}\n\n.icon-paragraph-right:before {\n  content: \"\\eab8\";\n}\n\n.icon-paragraph-justify:before {\n  content: \"\\eab9\";\n}\n\n.icon-indent-increase:before {\n  content: \"\\eaba\";\n}\n\n.icon-indent-decrease:before {\n  content: \"\\eabb\";\n}\n\n.icon-share:before {\n  content: \"\\eabc\";\n}\n\n.icon-new-tab:before {\n  content: \"\\eabd\";\n}\n\n.icon-embed:before {\n  content: \"\\eabe\";\n}\n\n.icon-embed2:before {\n  content: \"\\eabf\";\n}\n\n.icon-terminal:before {\n  content: \"\\eac0\";\n}\n\n.icon-share2:before {\n  content: \"\\eac1\";\n}\n\n.icon-mail:before {\n  content: \"\\eac2\";\n}\n\n.icon-mail2:before {\n  content: \"\\eac3\";\n}\n\n.icon-mail3:before {\n  content: \"\\eac4\";\n}\n\n.icon-mail4:before {\n  content: \"\\eac5\";\n}\n\n.icon-amazon:before {\n  content: \"\\eac6\";\n}\n\n.icon-google:before {\n  content: \"\\eac7\";\n}\n\n.icon-google2:before {\n  content: \"\\eac8\";\n}\n\n.icon-google3:before {\n  content: \"\\eac9\";\n}\n\n.icon-google-plus:before {\n  content: \"\\eaca\";\n}\n\n.icon-google-plus2:before {\n  content: \"\\eacb\";\n}\n\n.icon-google-plus3:before {\n  content: \"\\eacc\";\n}\n\n.icon-hangouts:before {\n  content: \"\\eacd\";\n}\n\n.icon-google-drive:before {\n  content: \"\\eace\";\n}\n\n.icon-facebook:before {\n  content: \"\\eacf\";\n}\n\n.icon-facebook2:before {\n  content: \"\\ead0\";\n}\n\n.icon-instagram:before {\n  content: \"\\ead1\";\n}\n\n.icon-whatsapp:before {\n  content: \"\\ead2\";\n}\n\n.icon-spotify:before {\n  content: \"\\ead3\";\n}\n\n.icon-telegram:before {\n  content: \"\\ead4\";\n}\n\n.icon-twitter:before {\n  content: \"\\ead5\";\n}\n\n.icon-vine:before {\n  content: \"\\ead6\";\n}\n\n.icon-vk:before {\n  content: \"\\ead7\";\n}\n\n.icon-renren:before {\n  content: \"\\ead8\";\n}\n\n.icon-sina-weibo:before {\n  content: \"\\ead9\";\n}\n\n.icon-rss:before {\n  content: \"\\eada\";\n}\n\n.icon-rss2:before {\n  content: \"\\eadb\";\n}\n\n.icon-youtube:before {\n  content: \"\\eadc\";\n}\n\n.icon-youtube2:before {\n  content: \"\\eadd\";\n}\n\n.icon-twitch:before {\n  content: \"\\eade\";\n}\n\n.icon-vimeo:before {\n  content: \"\\eadf\";\n}\n\n.icon-vimeo2:before {\n  content: \"\\eae0\";\n}\n\n.icon-lanyrd:before {\n  content: \"\\eae1\";\n}\n\n.icon-flickr:before {\n  content: \"\\eae2\";\n}\n\n.icon-flickr2:before {\n  content: \"\\eae3\";\n}\n\n.icon-flickr3:before {\n  content: \"\\eae4\";\n}\n\n.icon-flickr4:before {\n  content: \"\\eae5\";\n}\n\n.icon-dribbble:before {\n  content: \"\\eae6\";\n}\n\n.icon-behance:before {\n  content: \"\\eae7\";\n}\n\n.icon-behance2:before {\n  content: \"\\eae8\";\n}\n\n.icon-deviantart:before {\n  content: \"\\eae9\";\n}\n\n.icon-500px:before {\n  content: \"\\eaea\";\n}\n\n.icon-steam:before {\n  content: \"\\eaeb\";\n}\n\n.icon-steam2:before {\n  content: \"\\eaec\";\n}\n\n.icon-dropbox:before {\n  content: \"\\eaed\";\n}\n\n.icon-onedrive:before {\n  content: \"\\eaee\";\n}\n\n.icon-github:before {\n  content: \"\\eaef\";\n}\n\n.icon-npm:before {\n  content: \"\\eaf0\";\n}\n\n.icon-basecamp:before {\n  content: \"\\eaf1\";\n}\n\n.icon-trello:before {\n  content: \"\\eaf2\";\n}\n\n.icon-wordpress:before {\n  content: \"\\eaf3\";\n}\n\n.icon-joomla:before {\n  content: \"\\eaf4\";\n}\n\n.icon-ello:before {\n  content: \"\\eaf5\";\n}\n\n.icon-blogger:before {\n  content: \"\\eaf6\";\n}\n\n.icon-blogger2:before {\n  content: \"\\eaf7\";\n}\n\n.icon-tumblr:before {\n  content: \"\\eaf8\";\n}\n\n.icon-tumblr2:before {\n  content: \"\\eaf9\";\n}\n\n.icon-yahoo:before {\n  content: \"\\eafa\";\n}\n\n.icon-yahoo2:before {\n  content: \"\\eafb\";\n}\n\n.icon-tux:before {\n  content: \"\\eafc\";\n}\n\n.icon-appleinc:before {\n  content: \"\\eafd\";\n}\n\n.icon-finder:before {\n  content: \"\\eafe\";\n}\n\n.icon-android1:before {\n  content: \"\\eaff\";\n}\n\n.icon-windows:before {\n  content: \"\\eb00\";\n}\n\n.icon-windows8:before {\n  content: \"\\eb01\";\n}\n\n.icon-soundcloud:before {\n  content: \"\\eb02\";\n}\n\n.icon-soundcloud2:before {\n  content: \"\\eb03\";\n}\n\n.icon-skype:before {\n  content: \"\\eb04\";\n}\n\n.icon-reddit:before {\n  content: \"\\eb05\";\n}\n\n.icon-hackernews:before {\n  content: \"\\eb06\";\n}\n\n.icon-wikipedia:before {\n  content: \"\\eb07\";\n}\n\n.icon-linkedin:before {\n  content: \"\\eb08\";\n}\n\n.icon-linkedin2:before {\n  content: \"\\eb09\";\n}\n\n.icon-lastfm:before {\n  content: \"\\eb0a\";\n}\n\n.icon-lastfm2:before {\n  content: \"\\eb0b\";\n}\n\n.icon-delicious:before {\n  content: \"\\eb0c\";\n}\n\n.icon-stumbleupon:before {\n  content: \"\\eb0d\";\n}\n\n.icon-stumbleupon2:before {\n  content: \"\\eb0e\";\n}\n\n.icon-stackoverflow:before {\n  content: \"\\eb0f\";\n}\n\n.icon-pinterest:before {\n  content: \"\\eb10\";\n}\n\n.icon-pinterest2:before {\n  content: \"\\eb11\";\n}\n\n.icon-xing:before {\n  content: \"\\eb12\";\n}\n\n.icon-xing2:before {\n  content: \"\\eb13\";\n}\n\n.icon-flattr:before {\n  content: \"\\eb14\";\n}\n\n.icon-foursquare:before {\n  content: \"\\eb15\";\n}\n\n.icon-yelp:before {\n  content: \"\\eb16\";\n}\n\n.icon-paypal:before {\n  content: \"\\eb17\";\n}\n\n.icon-chrome:before {\n  content: \"\\eb18\";\n}\n\n.icon-firefox:before {\n  content: \"\\eb19\";\n}\n\n.icon-IE:before {\n  content: \"\\eb1a\";\n}\n\n.icon-edge:before {\n  content: \"\\eb1b\";\n}\n\n.icon-safari:before {\n  content: \"\\eb1c\";\n}\n\n.icon-opera:before {\n  content: \"\\eb1d\";\n}\n\n.icon-file-pdf:before {\n  content: \"\\eb21\";\n}\n\n.icon-file-openoffice:before {\n  content: \"\\eb22\";\n}\n\n.icon-file-word:before {\n  content: \"\\eb23\";\n}\n\n.icon-file-excel:before {\n  content: \"\\eb24\";\n}\n\n.icon-libreoffice:before {\n  content: \"\\eb25\";\n}\n\n.icon-html-five:before {\n  content: \"\\eb26\";\n}\n\n.icon-html-five2:before {\n  content: \"\\eb27\";\n}\n\n.icon-css3:before {\n  content: \"\\eb28\";\n}\n\n.icon-git:before {\n  content: \"\\eb29\";\n}\n\n.icon-codepen:before {\n  content: \"\\eb2a\";\n}\n\n.icon-svg:before {\n  content: \"\\eb2b\";\n}\n\n.icon-IcoMoon:before {\n  content: \"\\eb2c\";\n}\n\nh2 {\n  padding: 20px 10%;\n  font-size: 20px;\n  line-height: 40px;\n  box-sizing: border-box;\n}\n\n.table {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.table .header {\n  background-color: rgba(16, 142, 233, 0.1);\n  height: 40px;\n}\n\n.table .header h4 {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.table .list {\n  width: 100%;\n  overflow: hidden;\n}\n\n.table .list li {\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(16, 142, 233, 0.1);\n}\n\n.table .list li p {\n  overflow: hidden;\n  float: left;\n  padding: 5px 10px;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/view/nav-top/nav-top.component.ts":
/*!***************************************************!*\
  !*** ./src/app/view/nav-top/nav-top.component.ts ***!
  \***************************************************/
/*! exports provided: NavTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTopComponent", function() { return NavTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavTopComponent = /** @class */ (function () {
    function NavTopComponent() {
        this.data = [
            {
                attr: '[type]',
                explain: "导航类型主要是颜色上的区分,分别是default primary dark red",
                type: "string",
                default: "default "
            },
            {
                attr: '[leftContent]',
                explain: "左边栏填充内容，可以标签，组件等",
                type: 'TemplateRef<any>',
                default: "没有默认值 "
            },
            {
                attr: '[rightContent]',
                explain: "右边栏填充内容，可以标签，组件等",
                type: 'TemplateRef<any>',
                default: "没有默认值 "
            },
            {
                attr: '（leftClick）',
                explain: "展开回调,即左边添加内容后的点击事件",
                type: 'EventEmitter<any>',
                default: "没有默认值 "
            },
            {
                attr: '（rightClick）',
                explain: "展开回调,即右边添加内容后的点击事件",
                type: 'EventEmitter<any>',
                default: "没有默认值 "
            },
        ];
        this.popLists = [
            {
                type: 'home',
                link: 'home',
                title: '首页'
            },
            {
                type: 'home2',
                link: 'home',
                title: '首页2'
            },
            {
                type: 'home3',
                link: 'home',
                title: '首页3'
            }
        ];
        this.showPopList = false;
    }
    NavTopComponent.prototype.ngOnInit = function () {
    };
    NavTopComponent.prototype.lookPop = function () {
        this.showPopList = true;
    };
    NavTopComponent.prototype.hidePopover = function (e) {
        e.stopPropagation();
        this.showPopList = false;
    };
    NavTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-top',
            template: __webpack_require__(/*! ./nav-top.component.html */ "./src/app/view/nav-top/nav-top.component.html"),
            styles: [__webpack_require__(/*! ./nav-top.component.less */ "./src/app/view/nav-top/nav-top.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NavTopComponent);
    return NavTopComponent;
}());



/***/ }),

/***/ "./src/app/view/page-reload/page-reload.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view/page-reload/page-reload.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-reload works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/page-reload/page-reload.component.less":
/*!*************************************************************!*\
  !*** ./src/app/view/page-reload/page-reload.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/page-reload/page-reload.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/page-reload/page-reload.component.ts ***!
  \***********************************************************/
/*! exports provided: PageReloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageReloadComponent", function() { return PageReloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageReloadComponent = /** @class */ (function () {
    function PageReloadComponent() {
    }
    PageReloadComponent.prototype.ngOnInit = function () {
    };
    PageReloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-reload',
            template: __webpack_require__(/*! ./page-reload.component.html */ "./src/app/view/page-reload/page-reload.component.html"),
            styles: [__webpack_require__(/*! ./page-reload.component.less */ "./src/app/view/page-reload/page-reload.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PageReloadComponent);
    return PageReloadComponent;
}());



/***/ }),

/***/ "./src/app/view/popover/popover.component.html":
/*!*****************************************************!*\
  !*** ./src/app/view/popover/popover.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>popover 气泡</h2>\n\n<div class=\"explain\">\n  <p>只能在导航中使用，并需要和nrs-pop-item配合使用</p>\n</div>\n<h3>popover 气泡</h3>\n<div class=\"table\">\n  <div class=\"clear header\">\n    <h4 class=\"win-10\">属性</h4>\n    <h4 class=\"win-60\">说明</h4>\n    <h4 class=\"win-20\">类型</h4>\n    <h4 class=\"win-10\">默认值</h4>\n  </div>\n  <ul class=\"list\">\n    <li class=\"clear\" *ngFor=\"let item of data\">\n      <p class=\"win-10\">{{item.attr}}</p>\n      <p class=\"win-60\">{{item.explain}}</p>\n      <p class=\"win-20\">{{item.type}}</p>\n      <p class=\"win-10\">{{item.default}}</p>\n    </li>\n  </ul>\n</div>\n<h3>pop-item 气泡列表</h3>\n<div class=\"table\">\n  <div class=\"clear header\">\n    <h4 class=\"win-10\">属性</h4>\n    <h4 class=\"win-60\">说明</h4>\n    <h4 class=\"win-20\">类型</h4>\n    <h4 class=\"win-10\">默认值</h4>\n  </div>\n  <ul class=\"list\">\n    <li class=\"clear\" *ngFor=\"let item of dataItem\">\n      <p class=\"win-10\">{{item.attr}}</p>\n      <p class=\"win-60\">{{item.explain}}</p>\n      <p class=\"win-20\">{{item.type}}</p>\n      <p class=\"win-10\">{{item.default}}</p>\n    </li>\n  </ul>\n</div>\n<app-mobile-view>\n  <nrs-nav-top [leftContent]=\"leftContent\" (leftClick)=\"backPrePage()\" [rightContent]=\"rightContent\" (rightClick)=\"lookPop()\">按钮展示</nrs-nav-top>\n  <nrs-white-space></nrs-white-space>\n  <nrs-nav-top [leftContent]=\"leftContent\" [type]=\"'dark'\" (leftClick)=\"backPrePage()\">按钮展示2</nrs-nav-top>\n  <nrs-white-space></nrs-white-space>\n  <nrs-nav-top [leftContent]=\"leftContent\" [type]=\"'primary'\" (leftClick)=\"backPrePage()\">按钮展示3</nrs-nav-top>\n  <nrs-white-space></nrs-white-space>\n  <nrs-nav-top [leftContent]=\"leftContent\" [type]=\"'red'\" (leftClick)=\"backPrePage()\">按钮展示4</nrs-nav-top>\n</app-mobile-view>\n\n\n<ng-template #leftContent>\n  <nrs-icon [type]=\" 'back'\" [size]=\"16\"></nrs-icon>\n</ng-template>\n\n<ng-template #rightContent>\n  <nrs-popover [showPop]=\"showPopList\" (closedPop)=\"hidePopover($event)\" [popList]=\"popList\"></nrs-popover>\n</ng-template>\n\n<ng-template #popList>\n  <ng-container *ngFor=\"let item of popLists\">\n    <nrs-pop-item [link]=\"item.link\" [iconType]=\"item.type\">{{item.title}}</nrs-pop-item>\n  </ng-container>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/view/popover/popover.component.less":
/*!*****************************************************!*\
  !*** ./src/app/view/popover/popover.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src:  url('icomoon.eot?8t91ih');\n  src:  url('icomoon.eot?8t91ih#iefix') format('embedded-opentype'),\n    url('icomoon.ttf?8t91ih') format('truetype'),\n    url('icomoon.woff?8t91ih') format('woff'),\n    url('icomoon.svg?8t91ih#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /*line-height: 1;*/\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-Loading:before {\n  content: \"\\e900\";\n}\n\n.icon-check:before {\n  content: \"\\e901\";\n}\n\n.icon-more3:before {\n  content: \"\\e902\";\n}\n\n.icon-certificate:before {\n  content: \"\\e903\";\n}\n\n.icon-news:before {\n  content: \"\\e904\";\n}\n\n.icon-keys01:before {\n  content: \"\\e905\";\n}\n\n.icon-user02:before {\n  content: \"\\e906\";\n}\n\n.icon-user03:before {\n  content: \"\\e907\";\n}\n\n.icon-keys02:before {\n  content: \"\\e908\";\n}\n\n.icon-android:before {\n  content: \"\\e909\";\n}\n\n.icon-help:before {\n  content: \"\\e90a\";\n}\n\n.icon-ios:before {\n  content: \"\\e90b\";\n}\n\n.icon-searchPage:before {\n  content: \"\\e90c\";\n}\n\n.icon-add:before {\n  content: \"\\e90d\";\n}\n\n.icon-back:before {\n  content: \"\\e90e\";\n}\n\n.icon-close:before {\n  content: \"\\e90f\";\n}\n\n.icon-hotLine:before {\n  content: \"\\e910\";\n}\n\n.icon-i:before {\n  content: \"\\e911\";\n}\n\n.icon-link:before {\n  content: \"\\e912\";\n}\n\n.icon-more:before {\n  content: \"\\e913\";\n}\n\n.icon-next_1:before {\n  content: \"\\e914\";\n}\n\n.icon-next:before {\n  content: \"\\e915\";\n}\n\n.icon-phone:before {\n  content: \"\\e916\";\n}\n\n.icon-pwd:before {\n  content: \"\\e917\";\n}\n\n.icon-reduce:before {\n  content: \"\\e918\";\n}\n\n.icon-tabs:before {\n  content: \"\\e919\";\n}\n\n.icon-tel:before {\n  content: \"\\e91a\";\n}\n\n.icon-time:before {\n  content: \"\\e91b\";\n}\n\n.icon-user:before {\n  content: \"\\e91c\";\n}\n\n.icon-verify:before {\n  content: \"\\e91d\";\n}\n\n.icon-mobile:before {\n  content: \"\\e91e\";\n}\n\n.icon-show:before {\n  content: \"\\e91f\";\n}\n\n.icon-site:before {\n  content: \"\\e920\";\n}\n\n.icon-triangle:before {\n  content: \"\\e921\";\n}\n\n.icon-hide:before {\n  content: \"\\e922\";\n}\n\n.icon-userData:before {\n  content: \"\\e923\";\n}\n\n.icon-header:before {\n  content: \"\\e924\";\n}\n\n.icon-feedback:before {\n  content: \"\\e925\";\n}\n\n.icon-learn:before {\n  content: \"\\e926\";\n}\n\n.icon-set:before {\n  content: \"\\e927\";\n}\n\n.icon-selected:before {\n  content: \"\\e928\";\n}\n\n.icon-notSelected:before {\n  content: \"\\e929\";\n}\n\n.icon-notice:before {\n  content: \"\\e92a\";\n}\n\n.icon-define:before {\n  content: \"\\e92b\";\n}\n\n.icon-lock:before {\n  content: \"\\e92c\";\n}\n\n.icon-unfinished:before {\n  content: \"\\e92d\";\n}\n\n.icon-closedEyes:before {\n  content: \"\\e92e\";\n}\n\n.icon-signOut:before {\n  content: \"\\e92f\";\n}\n\n.icon-closev2:before {\n  content: \"\\e930\";\n}\n\n.icon-photo:before {\n  content: \"\\e931\";\n}\n\n.icon-photograph:before {\n  content: \"\\e932\";\n}\n\n.icon-video:before {\n  content: \"\\e933\";\n}\n\n.icon-userDetails:before {\n  content: \"\\e934\";\n}\n\n.icon-index:before {\n  content: \"\\e935\";\n}\n\n.icon-phone02:before {\n  content: \"\\e936\";\n}\n\n.icon-eyes:before {\n  content: \"\\e937\";\n}\n\n.icon-pwd02:before {\n  content: \"\\e938\";\n}\n\n.icon-company:before {\n  content: \"\\e939\";\n}\n\n.icon-county:before {\n  content: \"\\e93a\";\n}\n\n.icon-search:before {\n  content: \"\\e93b\";\n}\n\n.icon-alipay:before {\n  content: \"\\e93c\";\n}\n\n.icon-WeChat:before {\n  content: \"\\e93d\";\n}\n\n.icon-right-arrow:before {\n  content: \"\\e93e\";\n}\n\n.icon-more2:before {\n  content: \"\\e93f\";\n}\n\n.icon-course:before {\n  content: \"\\e940\";\n}\n\n.icon-verified:before {\n  content: \"\\e941\";\n}\n\n.icon-home:before {\n  content: \"\\e942\";\n}\n\n.icon-home2:before {\n  content: \"\\e943\";\n}\n\n.icon-home3:before {\n  content: \"\\e944\";\n}\n\n.icon-office:before {\n  content: \"\\e945\";\n}\n\n.icon-newspaper:before {\n  content: \"\\e946\";\n}\n\n.icon-pencil:before {\n  content: \"\\e947\";\n}\n\n.icon-pencil2:before {\n  content: \"\\e948\";\n}\n\n.icon-quill:before {\n  content: \"\\e949\";\n}\n\n.icon-pen:before {\n  content: \"\\e94a\";\n}\n\n.icon-blog:before {\n  content: \"\\e94b\";\n}\n\n.icon-eyedropper:before {\n  content: \"\\e94c\";\n}\n\n.icon-droplet:before {\n  content: \"\\e94d\";\n}\n\n.icon-paint-format:before {\n  content: \"\\e94e\";\n}\n\n.icon-image:before {\n  content: \"\\e94f\";\n}\n\n.icon-images:before {\n  content: \"\\eb20\";\n}\n\n.icon-camera:before {\n  content: \"\\e950\";\n}\n\n.icon-headphones:before {\n  content: \"\\e951\";\n}\n\n.icon-music:before {\n  content: \"\\e952\";\n}\n\n.icon-play:before {\n  content: \"\\e953\";\n}\n\n.icon-film:before {\n  content: \"\\e954\";\n}\n\n.icon-video-camera:before {\n  content: \"\\e955\";\n}\n\n.icon-dice:before {\n  content: \"\\e956\";\n}\n\n.icon-pacman:before {\n  content: \"\\e957\";\n}\n\n.icon-spades:before {\n  content: \"\\e958\";\n}\n\n.icon-clubs:before {\n  content: \"\\e959\";\n}\n\n.icon-diamonds:before {\n  content: \"\\e95a\";\n}\n\n.icon-bullhorn:before {\n  content: \"\\e95b\";\n}\n\n.icon-connection:before {\n  content: \"\\e95c\";\n}\n\n.icon-podcast:before {\n  content: \"\\e95d\";\n}\n\n.icon-feed:before {\n  content: \"\\e95e\";\n}\n\n.icon-mic:before {\n  content: \"\\e95f\";\n}\n\n.icon-book:before {\n  content: \"\\e960\";\n}\n\n.icon-books:before {\n  content: \"\\e961\";\n}\n\n.icon-library:before {\n  content: \"\\e962\";\n}\n\n.icon-file-text:before {\n  content: \"\\e963\";\n}\n\n.icon-profile:before {\n  content: \"\\e964\";\n}\n\n.icon-file-empty:before {\n  content: \"\\e965\";\n}\n\n.icon-files-empty:before {\n  content: \"\\e966\";\n}\n\n.icon-file-text2:before {\n  content: \"\\e967\";\n}\n\n.icon-file-picture:before {\n  content: \"\\e968\";\n}\n\n.icon-file-music:before {\n  content: \"\\e969\";\n}\n\n.icon-file-play:before {\n  content: \"\\e96a\";\n}\n\n.icon-file-video:before {\n  content: \"\\e96b\";\n}\n\n.icon-file-zip:before {\n  content: \"\\e96c\";\n}\n\n.icon-copy:before {\n  content: \"\\e96d\";\n}\n\n.icon-paste:before {\n  content: \"\\e96e\";\n}\n\n.icon-stack:before {\n  content: \"\\e96f\";\n}\n\n.icon-folder:before {\n  content: \"\\e970\";\n}\n\n.icon-folder-open:before {\n  content: \"\\e971\";\n}\n\n.icon-folder-plus:before {\n  content: \"\\e972\";\n}\n\n.icon-folder-minus:before {\n  content: \"\\e973\";\n}\n\n.icon-folder-download:before {\n  content: \"\\e974\";\n}\n\n.icon-folder-upload:before {\n  content: \"\\e975\";\n}\n\n.icon-price-tag:before {\n  content: \"\\e976\";\n}\n\n.icon-price-tags:before {\n  content: \"\\e977\";\n}\n\n.icon-barcode:before {\n  content: \"\\e978\";\n}\n\n.icon-qrcode:before {\n  content: \"\\e979\";\n}\n\n.icon-ticket:before {\n  content: \"\\e97a\";\n}\n\n.icon-cart:before {\n  content: \"\\e97b\";\n}\n\n.icon-coin-dollar:before {\n  content: \"\\e97c\";\n}\n\n.icon-coin-euro:before {\n  content: \"\\e97d\";\n}\n\n.icon-coin-pound:before {\n  content: \"\\e97e\";\n}\n\n.icon-coin-yen:before {\n  content: \"\\e97f\";\n}\n\n.icon-credit-card:before {\n  content: \"\\e980\";\n}\n\n.icon-calculator:before {\n  content: \"\\e981\";\n}\n\n.icon-lifebuoy:before {\n  content: \"\\e982\";\n}\n\n.icon-phone1:before {\n  content: \"\\e983\";\n}\n\n.icon-phone-hang-up:before {\n  content: \"\\e984\";\n}\n\n.icon-address-book:before {\n  content: \"\\e985\";\n}\n\n.icon-envelop:before {\n  content: \"\\e986\";\n}\n\n.icon-pushpin:before {\n  content: \"\\e987\";\n}\n\n.icon-location:before {\n  content: \"\\e988\";\n}\n\n.icon-location2:before {\n  content: \"\\e989\";\n}\n\n.icon-compass:before {\n  content: \"\\e98a\";\n}\n\n.icon-compass2:before {\n  content: \"\\e98b\";\n}\n\n.icon-map:before {\n  content: \"\\e98c\";\n}\n\n.icon-map2:before {\n  content: \"\\e98d\";\n}\n\n.icon-history:before {\n  content: \"\\e98e\";\n}\n\n.icon-clock:before {\n  content: \"\\e98f\";\n}\n\n.icon-clock2:before {\n  content: \"\\e990\";\n}\n\n.icon-alarm:before {\n  content: \"\\e991\";\n}\n\n.icon-bell:before {\n  content: \"\\e992\";\n}\n\n.icon-stopwatch:before {\n  content: \"\\e993\";\n}\n\n.icon-calendar:before {\n  content: \"\\e994\";\n}\n\n.icon-printer:before {\n  content: \"\\e995\";\n}\n\n.icon-keyboard:before {\n  content: \"\\e996\";\n}\n\n.icon-display:before {\n  content: \"\\e997\";\n}\n\n.icon-laptop:before {\n  content: \"\\e998\";\n}\n\n.icon-mobile1:before {\n  content: \"\\e999\";\n}\n\n.icon-mobile2:before {\n  content: \"\\e99a\";\n}\n\n.icon-tablet:before {\n  content: \"\\e99b\";\n}\n\n.icon-tv:before {\n  content: \"\\e99c\";\n}\n\n.icon-drawer:before {\n  content: \"\\e99d\";\n}\n\n.icon-drawer2:before {\n  content: \"\\e99e\";\n}\n\n.icon-box-add:before {\n  content: \"\\e99f\";\n}\n\n.icon-box-remove:before {\n  content: \"\\e9a0\";\n}\n\n.icon-download:before {\n  content: \"\\e9a1\";\n}\n\n.icon-upload:before {\n  content: \"\\e9a2\";\n}\n\n.icon-floppy-disk:before {\n  content: \"\\e9a3\";\n}\n\n.icon-drive:before {\n  content: \"\\e9a4\";\n}\n\n.icon-database:before {\n  content: \"\\e9a5\";\n}\n\n.icon-undo:before {\n  content: \"\\e9a6\";\n}\n\n.icon-redo:before {\n  content: \"\\e9a7\";\n}\n\n.icon-undo2:before {\n  content: \"\\e9a8\";\n}\n\n.icon-redo2:before {\n  content: \"\\e9a9\";\n}\n\n.icon-forward:before {\n  content: \"\\e9aa\";\n}\n\n.icon-reply:before {\n  content: \"\\e9ab\";\n}\n\n.icon-bubble:before {\n  content: \"\\e9ac\";\n}\n\n.icon-bubbles:before {\n  content: \"\\e9ad\";\n}\n\n.icon-bubbles2:before {\n  content: \"\\e9ae\";\n}\n\n.icon-bubble2:before {\n  content: \"\\e9af\";\n}\n\n.icon-bubbles3:before {\n  content: \"\\e9b0\";\n}\n\n.icon-bubbles4:before {\n  content: \"\\e9b1\";\n}\n\n.icon-user1:before {\n  content: \"\\e9b2\";\n}\n\n.icon-users:before {\n  content: \"\\e9b3\";\n}\n\n.icon-user-plus:before {\n  content: \"\\e9b4\";\n}\n\n.icon-user-minus:before {\n  content: \"\\e9b5\";\n}\n\n.icon-user-check:before {\n  content: \"\\e9b6\";\n}\n\n.icon-user-tie:before {\n  content: \"\\e9b7\";\n}\n\n.icon-quotes-left:before {\n  content: \"\\e9b8\";\n}\n\n.icon-quotes-right:before {\n  content: \"\\e9b9\";\n}\n\n.icon-hour-glass:before {\n  content: \"\\e9ba\";\n}\n\n.icon-spinner:before {\n  content: \"\\e9bb\";\n}\n\n.icon-spinner2:before {\n  content: \"\\e9bc\";\n}\n\n.icon-spinner3:before {\n  content: \"\\e9bd\";\n}\n\n.icon-spinner4:before {\n  content: \"\\e9be\";\n}\n\n.icon-spinner5:before {\n  content: \"\\e9bf\";\n}\n\n.icon-spinner6:before {\n  content: \"\\eb1f\";\n}\n\n.icon-spinner7:before {\n  content: \"\\e9c0\";\n}\n\n.icon-spinner8:before {\n  content: \"\\e9c1\";\n}\n\n.icon-spinner9:before {\n  content: \"\\e9c2\";\n}\n\n.icon-spinner10:before {\n  content: \"\\e9c3\";\n}\n\n.icon-spinner11:before {\n  content: \"\\e9c4\";\n}\n\n.icon-binoculars:before {\n  content: \"\\e9c5\";\n}\n\n.icon-search1:before {\n  content: \"\\e9c6\";\n}\n\n.icon-zoom-in:before {\n  content: \"\\e9c7\";\n}\n\n.icon-zoom-out:before {\n  content: \"\\e9c8\";\n}\n\n.icon-enlarge:before {\n  content: \"\\e9c9\";\n}\n\n.icon-shrink:before {\n  content: \"\\e9ca\";\n}\n\n.icon-enlarge2:before {\n  content: \"\\e9cb\";\n}\n\n.icon-shrink2:before {\n  content: \"\\e9cc\";\n}\n\n.icon-key:before {\n  content: \"\\eb1e\";\n}\n\n.icon-key2:before {\n  content: \"\\e9cd\";\n}\n\n.icon-lock1:before {\n  content: \"\\e9ce\";\n}\n\n.icon-unlocked:before {\n  content: \"\\e9cf\";\n}\n\n.icon-wrench:before {\n  content: \"\\e9d0\";\n}\n\n.icon-equalizer:before {\n  content: \"\\e9d1\";\n}\n\n.icon-equalizer2:before {\n  content: \"\\e9d2\";\n}\n\n.icon-cog:before {\n  content: \"\\e9d3\";\n}\n\n.icon-cogs:before {\n  content: \"\\e9d4\";\n}\n\n.icon-hammer:before {\n  content: \"\\e9d5\";\n}\n\n.icon-magic-wand:before {\n  content: \"\\e9d6\";\n}\n\n.icon-aid-kit:before {\n  content: \"\\e9d7\";\n}\n\n.icon-bug:before {\n  content: \"\\e9d8\";\n}\n\n.icon-pie-chart:before {\n  content: \"\\e9d9\";\n}\n\n.icon-stats-dots:before {\n  content: \"\\e9da\";\n}\n\n.icon-stats-bars:before {\n  content: \"\\e9db\";\n}\n\n.icon-stats-bars2:before {\n  content: \"\\e9dc\";\n}\n\n.icon-trophy:before {\n  content: \"\\e9dd\";\n}\n\n.icon-gift:before {\n  content: \"\\e9de\";\n}\n\n.icon-glass:before {\n  content: \"\\e9df\";\n}\n\n.icon-glass2:before {\n  content: \"\\e9e0\";\n}\n\n.icon-mug:before {\n  content: \"\\e9e1\";\n}\n\n.icon-spoon-knife:before {\n  content: \"\\e9e2\";\n}\n\n.icon-leaf:before {\n  content: \"\\e9e3\";\n}\n\n.icon-rocket:before {\n  content: \"\\e9e4\";\n}\n\n.icon-meter:before {\n  content: \"\\e9e5\";\n}\n\n.icon-meter2:before {\n  content: \"\\e9e6\";\n}\n\n.icon-hammer2:before {\n  content: \"\\e9e7\";\n}\n\n.icon-fire:before {\n  content: \"\\e9e8\";\n}\n\n.icon-lab:before {\n  content: \"\\e9e9\";\n}\n\n.icon-magnet:before {\n  content: \"\\e9ea\";\n}\n\n.icon-bin:before {\n  content: \"\\e9eb\";\n}\n\n.icon-bin2:before {\n  content: \"\\e9ec\";\n}\n\n.icon-briefcase:before {\n  content: \"\\e9ed\";\n}\n\n.icon-airplane:before {\n  content: \"\\e9ee\";\n}\n\n.icon-truck:before {\n  content: \"\\e9ef\";\n}\n\n.icon-road:before {\n  content: \"\\e9f0\";\n}\n\n.icon-accessibility:before {\n  content: \"\\e9f1\";\n}\n\n.icon-target:before {\n  content: \"\\e9f2\";\n}\n\n.icon-shield:before {\n  content: \"\\e9f3\";\n}\n\n.icon-power:before {\n  content: \"\\e9f4\";\n}\n\n.icon-switch:before {\n  content: \"\\e9f5\";\n}\n\n.icon-power-cord:before {\n  content: \"\\e9f6\";\n}\n\n.icon-clipboard:before {\n  content: \"\\e9f7\";\n}\n\n.icon-list-numbered:before {\n  content: \"\\e9f8\";\n}\n\n.icon-list:before {\n  content: \"\\e9f9\";\n}\n\n.icon-list2:before {\n  content: \"\\e9fa\";\n}\n\n.icon-tree:before {\n  content: \"\\e9fb\";\n}\n\n.icon-menu:before {\n  content: \"\\e9fc\";\n}\n\n.icon-menu2:before {\n  content: \"\\e9fd\";\n}\n\n.icon-menu3:before {\n  content: \"\\e9fe\";\n}\n\n.icon-menu4:before {\n  content: \"\\e9ff\";\n}\n\n.icon-cloud:before {\n  content: \"\\ea00\";\n}\n\n.icon-cloud-download:before {\n  content: \"\\ea01\";\n}\n\n.icon-cloud-upload:before {\n  content: \"\\ea02\";\n}\n\n.icon-cloud-check:before {\n  content: \"\\ea03\";\n}\n\n.icon-download2:before {\n  content: \"\\ea04\";\n}\n\n.icon-upload2:before {\n  content: \"\\ea05\";\n}\n\n.icon-download3:before {\n  content: \"\\ea06\";\n}\n\n.icon-upload3:before {\n  content: \"\\ea07\";\n}\n\n.icon-sphere:before {\n  content: \"\\ea08\";\n}\n\n.icon-earth:before {\n  content: \"\\ea09\";\n}\n\n.icon-link1:before {\n  content: \"\\ea0a\";\n}\n\n.icon-flag:before {\n  content: \"\\ea0b\";\n}\n\n.icon-attachment:before {\n  content: \"\\ea0c\";\n}\n\n.icon-eye:before {\n  content: \"\\ea0d\";\n}\n\n.icon-eye-plus:before {\n  content: \"\\ea0e\";\n}\n\n.icon-eye-minus:before {\n  content: \"\\ea0f\";\n}\n\n.icon-eye-blocked:before {\n  content: \"\\ea10\";\n}\n\n.icon-bookmark:before {\n  content: \"\\ea11\";\n}\n\n.icon-bookmarks:before {\n  content: \"\\ea12\";\n}\n\n.icon-sun:before {\n  content: \"\\ea13\";\n}\n\n.icon-contrast:before {\n  content: \"\\ea14\";\n}\n\n.icon-brightness-contrast:before {\n  content: \"\\ea15\";\n}\n\n.icon-star-empty:before {\n  content: \"\\ea16\";\n}\n\n.icon-star-half:before {\n  content: \"\\ea17\";\n}\n\n.icon-star-full:before {\n  content: \"\\ea18\";\n}\n\n.icon-heart:before {\n  content: \"\\ea19\";\n}\n\n.icon-heart-broken:before {\n  content: \"\\ea1a\";\n}\n\n.icon-man:before {\n  content: \"\\ea1b\";\n}\n\n.icon-woman:before {\n  content: \"\\ea1c\";\n}\n\n.icon-man-woman:before {\n  content: \"\\ea1d\";\n}\n\n.icon-happy:before {\n  content: \"\\ea1e\";\n}\n\n.icon-happy2:before {\n  content: \"\\ea1f\";\n}\n\n.icon-smile:before {\n  content: \"\\ea20\";\n}\n\n.icon-smile2:before {\n  content: \"\\ea21\";\n}\n\n.icon-tongue:before {\n  content: \"\\ea22\";\n}\n\n.icon-tongue2:before {\n  content: \"\\ea23\";\n}\n\n.icon-sad:before {\n  content: \"\\ea24\";\n}\n\n.icon-sad2:before {\n  content: \"\\ea25\";\n}\n\n.icon-wink:before {\n  content: \"\\ea26\";\n}\n\n.icon-wink2:before {\n  content: \"\\ea27\";\n}\n\n.icon-grin:before {\n  content: \"\\ea28\";\n}\n\n.icon-grin2:before {\n  content: \"\\ea29\";\n}\n\n.icon-cool:before {\n  content: \"\\ea2a\";\n}\n\n.icon-cool2:before {\n  content: \"\\ea2b\";\n}\n\n.icon-angry:before {\n  content: \"\\ea2c\";\n}\n\n.icon-angry2:before {\n  content: \"\\ea2d\";\n}\n\n.icon-evil:before {\n  content: \"\\ea2e\";\n}\n\n.icon-evil2:before {\n  content: \"\\ea2f\";\n}\n\n.icon-shocked:before {\n  content: \"\\ea30\";\n}\n\n.icon-shocked2:before {\n  content: \"\\ea31\";\n}\n\n.icon-baffled:before {\n  content: \"\\ea32\";\n}\n\n.icon-baffled2:before {\n  content: \"\\ea33\";\n}\n\n.icon-confused:before {\n  content: \"\\ea34\";\n}\n\n.icon-confused2:before {\n  content: \"\\ea35\";\n}\n\n.icon-neutral:before {\n  content: \"\\ea36\";\n}\n\n.icon-neutral2:before {\n  content: \"\\ea37\";\n}\n\n.icon-hipster:before {\n  content: \"\\ea38\";\n}\n\n.icon-hipster2:before {\n  content: \"\\ea39\";\n}\n\n.icon-wondering:before {\n  content: \"\\ea3a\";\n}\n\n.icon-wondering2:before {\n  content: \"\\ea3b\";\n}\n\n.icon-sleepy:before {\n  content: \"\\ea3c\";\n}\n\n.icon-sleepy2:before {\n  content: \"\\ea3d\";\n}\n\n.icon-frustrated:before {\n  content: \"\\ea3e\";\n}\n\n.icon-frustrated2:before {\n  content: \"\\ea3f\";\n}\n\n.icon-crying:before {\n  content: \"\\ea40\";\n}\n\n.icon-crying2:before {\n  content: \"\\ea41\";\n}\n\n.icon-point-up:before {\n  content: \"\\ea42\";\n}\n\n.icon-point-right:before {\n  content: \"\\ea43\";\n}\n\n.icon-point-down:before {\n  content: \"\\ea44\";\n}\n\n.icon-point-left:before {\n  content: \"\\ea45\";\n}\n\n.icon-warning:before {\n  content: \"\\ea46\";\n}\n\n.icon-notification:before {\n  content: \"\\ea47\";\n}\n\n.icon-question:before {\n  content: \"\\ea48\";\n}\n\n.icon-plus:before {\n  content: \"\\ea49\";\n}\n\n.icon-minus:before {\n  content: \"\\ea4a\";\n}\n\n.icon-info:before {\n  content: \"\\ea4b\";\n}\n\n.icon-cancel-circle:before {\n  content: \"\\ea4c\";\n}\n\n.icon-blocked:before {\n  content: \"\\ea4d\";\n}\n\n.icon-cross:before {\n  content: \"\\ea4e\";\n}\n\n.icon-checkmark:before {\n  content: \"\\ea4f\";\n}\n\n.icon-checkmark2:before {\n  content: \"\\ea50\";\n}\n\n.icon-spell-check:before {\n  content: \"\\ea51\";\n}\n\n.icon-enter:before {\n  content: \"\\ea52\";\n}\n\n.icon-exit:before {\n  content: \"\\ea53\";\n}\n\n.icon-play2:before {\n  content: \"\\ea54\";\n}\n\n.icon-pause:before {\n  content: \"\\ea55\";\n}\n\n.icon-stop:before {\n  content: \"\\ea56\";\n}\n\n.icon-previous:before {\n  content: \"\\ea57\";\n}\n\n.icon-next1:before {\n  content: \"\\ea58\";\n}\n\n.icon-backward:before {\n  content: \"\\ea59\";\n}\n\n.icon-forward2:before {\n  content: \"\\ea5a\";\n}\n\n.icon-play3:before {\n  content: \"\\ea5b\";\n}\n\n.icon-pause2:before {\n  content: \"\\ea5c\";\n}\n\n.icon-stop2:before {\n  content: \"\\ea5d\";\n}\n\n.icon-backward2:before {\n  content: \"\\ea5e\";\n}\n\n.icon-forward3:before {\n  content: \"\\ea5f\";\n}\n\n.icon-first:before {\n  content: \"\\ea60\";\n}\n\n.icon-last:before {\n  content: \"\\ea61\";\n}\n\n.icon-previous2:before {\n  content: \"\\ea62\";\n}\n\n.icon-next2:before {\n  content: \"\\ea63\";\n}\n\n.icon-eject:before {\n  content: \"\\ea64\";\n}\n\n.icon-volume-high:before {\n  content: \"\\ea65\";\n}\n\n.icon-volume-medium:before {\n  content: \"\\ea66\";\n}\n\n.icon-volume-low:before {\n  content: \"\\ea67\";\n}\n\n.icon-volume-mute:before {\n  content: \"\\ea68\";\n}\n\n.icon-volume-mute2:before {\n  content: \"\\ea69\";\n}\n\n.icon-volume-increase:before {\n  content: \"\\ea6a\";\n}\n\n.icon-volume-decrease:before {\n  content: \"\\ea6b\";\n}\n\n.icon-loop:before {\n  content: \"\\ea6c\";\n}\n\n.icon-loop2:before {\n  content: \"\\ea6d\";\n}\n\n.icon-infinite:before {\n  content: \"\\ea6e\";\n}\n\n.icon-shuffle:before {\n  content: \"\\ea6f\";\n}\n\n.icon-arrow-up-left:before {\n  content: \"\\ea70\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\ea71\";\n}\n\n.icon-arrow-up-right:before {\n  content: \"\\ea72\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\ea73\";\n}\n\n.icon-arrow-down-right:before {\n  content: \"\\ea74\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\ea75\";\n}\n\n.icon-arrow-down-left:before {\n  content: \"\\ea76\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\ea77\";\n}\n\n.icon-arrow-up-left2:before {\n  content: \"\\ea78\";\n}\n\n.icon-arrow-up2:before {\n  content: \"\\ea79\";\n}\n\n.icon-arrow-up-right2:before {\n  content: \"\\ea7a\";\n}\n\n.icon-arrow-right2:before {\n  content: \"\\ea7b\";\n}\n\n.icon-arrow-down-right2:before {\n  content: \"\\ea7c\";\n}\n\n.icon-arrow-down2:before {\n  content: \"\\ea7d\";\n}\n\n.icon-arrow-down-left2:before {\n  content: \"\\ea7e\";\n}\n\n.icon-arrow-left2:before {\n  content: \"\\ea7f\";\n}\n\n.icon-circle-up:before {\n  content: \"\\ea80\";\n}\n\n.icon-circle-right:before {\n  content: \"\\ea81\";\n}\n\n.icon-circle-down:before {\n  content: \"\\ea82\";\n}\n\n.icon-circle-left:before {\n  content: \"\\ea83\";\n}\n\n.icon-tab:before {\n  content: \"\\ea84\";\n}\n\n.icon-move-up:before {\n  content: \"\\ea85\";\n}\n\n.icon-move-down:before {\n  content: \"\\ea86\";\n}\n\n.icon-sort-alpha-asc:before {\n  content: \"\\ea87\";\n}\n\n.icon-sort-alpha-desc:before {\n  content: \"\\ea88\";\n}\n\n.icon-sort-numeric-asc:before {\n  content: \"\\ea89\";\n}\n\n.icon-sort-numberic-desc:before {\n  content: \"\\ea8a\";\n}\n\n.icon-sort-amount-asc:before {\n  content: \"\\ea8b\";\n}\n\n.icon-sort-amount-desc:before {\n  content: \"\\ea8c\";\n}\n\n.icon-command:before {\n  content: \"\\ea8d\";\n}\n\n.icon-shift:before {\n  content: \"\\ea8e\";\n}\n\n.icon-ctrl:before {\n  content: \"\\ea8f\";\n}\n\n.icon-opt:before {\n  content: \"\\ea90\";\n}\n\n.icon-checkbox-checked:before {\n  content: \"\\ea91\";\n}\n\n.icon-checkbox-unchecked:before {\n  content: \"\\ea92\";\n}\n\n.icon-radio-checked:before {\n  content: \"\\ea93\";\n}\n\n.icon-radio-checked2:before {\n  content: \"\\ea94\";\n}\n\n.icon-radio-unchecked:before {\n  content: \"\\ea95\";\n}\n\n.icon-crop:before {\n  content: \"\\ea96\";\n}\n\n.icon-make-group:before {\n  content: \"\\ea97\";\n}\n\n.icon-ungroup:before {\n  content: \"\\ea98\";\n}\n\n.icon-scissors:before {\n  content: \"\\ea99\";\n}\n\n.icon-filter:before {\n  content: \"\\ea9a\";\n}\n\n.icon-font:before {\n  content: \"\\ea9b\";\n}\n\n.icon-ligature:before {\n  content: \"\\ea9c\";\n}\n\n.icon-ligature2:before {\n  content: \"\\ea9d\";\n}\n\n.icon-text-height:before {\n  content: \"\\ea9e\";\n}\n\n.icon-text-width:before {\n  content: \"\\ea9f\";\n}\n\n.icon-font-size:before {\n  content: \"\\eaa0\";\n}\n\n.icon-bold:before {\n  content: \"\\eaa1\";\n}\n\n.icon-underline:before {\n  content: \"\\eaa2\";\n}\n\n.icon-italic:before {\n  content: \"\\eaa3\";\n}\n\n.icon-strikethrough:before {\n  content: \"\\eaa4\";\n}\n\n.icon-omega:before {\n  content: \"\\eaa5\";\n}\n\n.icon-sigma:before {\n  content: \"\\eaa6\";\n}\n\n.icon-page-break:before {\n  content: \"\\eaa7\";\n}\n\n.icon-superscript:before {\n  content: \"\\eaa8\";\n}\n\n.icon-subscript:before {\n  content: \"\\eaa9\";\n}\n\n.icon-superscript2:before {\n  content: \"\\eaaa\";\n}\n\n.icon-subscript2:before {\n  content: \"\\eaab\";\n}\n\n.icon-text-color:before {\n  content: \"\\eaac\";\n}\n\n.icon-pagebreak:before {\n  content: \"\\eaad\";\n}\n\n.icon-clear-formatting:before {\n  content: \"\\eaae\";\n}\n\n.icon-table:before {\n  content: \"\\eaaf\";\n}\n\n.icon-table2:before {\n  content: \"\\eab0\";\n}\n\n.icon-insert-template:before {\n  content: \"\\eab1\";\n}\n\n.icon-pilcrow:before {\n  content: \"\\eab2\";\n}\n\n.icon-ltr:before {\n  content: \"\\eab3\";\n}\n\n.icon-rtl:before {\n  content: \"\\eab4\";\n}\n\n.icon-section:before {\n  content: \"\\eab5\";\n}\n\n.icon-paragraph-left:before {\n  content: \"\\eab6\";\n}\n\n.icon-paragraph-center:before {\n  content: \"\\eab7\";\n}\n\n.icon-paragraph-right:before {\n  content: \"\\eab8\";\n}\n\n.icon-paragraph-justify:before {\n  content: \"\\eab9\";\n}\n\n.icon-indent-increase:before {\n  content: \"\\eaba\";\n}\n\n.icon-indent-decrease:before {\n  content: \"\\eabb\";\n}\n\n.icon-share:before {\n  content: \"\\eabc\";\n}\n\n.icon-new-tab:before {\n  content: \"\\eabd\";\n}\n\n.icon-embed:before {\n  content: \"\\eabe\";\n}\n\n.icon-embed2:before {\n  content: \"\\eabf\";\n}\n\n.icon-terminal:before {\n  content: \"\\eac0\";\n}\n\n.icon-share2:before {\n  content: \"\\eac1\";\n}\n\n.icon-mail:before {\n  content: \"\\eac2\";\n}\n\n.icon-mail2:before {\n  content: \"\\eac3\";\n}\n\n.icon-mail3:before {\n  content: \"\\eac4\";\n}\n\n.icon-mail4:before {\n  content: \"\\eac5\";\n}\n\n.icon-amazon:before {\n  content: \"\\eac6\";\n}\n\n.icon-google:before {\n  content: \"\\eac7\";\n}\n\n.icon-google2:before {\n  content: \"\\eac8\";\n}\n\n.icon-google3:before {\n  content: \"\\eac9\";\n}\n\n.icon-google-plus:before {\n  content: \"\\eaca\";\n}\n\n.icon-google-plus2:before {\n  content: \"\\eacb\";\n}\n\n.icon-google-plus3:before {\n  content: \"\\eacc\";\n}\n\n.icon-hangouts:before {\n  content: \"\\eacd\";\n}\n\n.icon-google-drive:before {\n  content: \"\\eace\";\n}\n\n.icon-facebook:before {\n  content: \"\\eacf\";\n}\n\n.icon-facebook2:before {\n  content: \"\\ead0\";\n}\n\n.icon-instagram:before {\n  content: \"\\ead1\";\n}\n\n.icon-whatsapp:before {\n  content: \"\\ead2\";\n}\n\n.icon-spotify:before {\n  content: \"\\ead3\";\n}\n\n.icon-telegram:before {\n  content: \"\\ead4\";\n}\n\n.icon-twitter:before {\n  content: \"\\ead5\";\n}\n\n.icon-vine:before {\n  content: \"\\ead6\";\n}\n\n.icon-vk:before {\n  content: \"\\ead7\";\n}\n\n.icon-renren:before {\n  content: \"\\ead8\";\n}\n\n.icon-sina-weibo:before {\n  content: \"\\ead9\";\n}\n\n.icon-rss:before {\n  content: \"\\eada\";\n}\n\n.icon-rss2:before {\n  content: \"\\eadb\";\n}\n\n.icon-youtube:before {\n  content: \"\\eadc\";\n}\n\n.icon-youtube2:before {\n  content: \"\\eadd\";\n}\n\n.icon-twitch:before {\n  content: \"\\eade\";\n}\n\n.icon-vimeo:before {\n  content: \"\\eadf\";\n}\n\n.icon-vimeo2:before {\n  content: \"\\eae0\";\n}\n\n.icon-lanyrd:before {\n  content: \"\\eae1\";\n}\n\n.icon-flickr:before {\n  content: \"\\eae2\";\n}\n\n.icon-flickr2:before {\n  content: \"\\eae3\";\n}\n\n.icon-flickr3:before {\n  content: \"\\eae4\";\n}\n\n.icon-flickr4:before {\n  content: \"\\eae5\";\n}\n\n.icon-dribbble:before {\n  content: \"\\eae6\";\n}\n\n.icon-behance:before {\n  content: \"\\eae7\";\n}\n\n.icon-behance2:before {\n  content: \"\\eae8\";\n}\n\n.icon-deviantart:before {\n  content: \"\\eae9\";\n}\n\n.icon-500px:before {\n  content: \"\\eaea\";\n}\n\n.icon-steam:before {\n  content: \"\\eaeb\";\n}\n\n.icon-steam2:before {\n  content: \"\\eaec\";\n}\n\n.icon-dropbox:before {\n  content: \"\\eaed\";\n}\n\n.icon-onedrive:before {\n  content: \"\\eaee\";\n}\n\n.icon-github:before {\n  content: \"\\eaef\";\n}\n\n.icon-npm:before {\n  content: \"\\eaf0\";\n}\n\n.icon-basecamp:before {\n  content: \"\\eaf1\";\n}\n\n.icon-trello:before {\n  content: \"\\eaf2\";\n}\n\n.icon-wordpress:before {\n  content: \"\\eaf3\";\n}\n\n.icon-joomla:before {\n  content: \"\\eaf4\";\n}\n\n.icon-ello:before {\n  content: \"\\eaf5\";\n}\n\n.icon-blogger:before {\n  content: \"\\eaf6\";\n}\n\n.icon-blogger2:before {\n  content: \"\\eaf7\";\n}\n\n.icon-tumblr:before {\n  content: \"\\eaf8\";\n}\n\n.icon-tumblr2:before {\n  content: \"\\eaf9\";\n}\n\n.icon-yahoo:before {\n  content: \"\\eafa\";\n}\n\n.icon-yahoo2:before {\n  content: \"\\eafb\";\n}\n\n.icon-tux:before {\n  content: \"\\eafc\";\n}\n\n.icon-appleinc:before {\n  content: \"\\eafd\";\n}\n\n.icon-finder:before {\n  content: \"\\eafe\";\n}\n\n.icon-android1:before {\n  content: \"\\eaff\";\n}\n\n.icon-windows:before {\n  content: \"\\eb00\";\n}\n\n.icon-windows8:before {\n  content: \"\\eb01\";\n}\n\n.icon-soundcloud:before {\n  content: \"\\eb02\";\n}\n\n.icon-soundcloud2:before {\n  content: \"\\eb03\";\n}\n\n.icon-skype:before {\n  content: \"\\eb04\";\n}\n\n.icon-reddit:before {\n  content: \"\\eb05\";\n}\n\n.icon-hackernews:before {\n  content: \"\\eb06\";\n}\n\n.icon-wikipedia:before {\n  content: \"\\eb07\";\n}\n\n.icon-linkedin:before {\n  content: \"\\eb08\";\n}\n\n.icon-linkedin2:before {\n  content: \"\\eb09\";\n}\n\n.icon-lastfm:before {\n  content: \"\\eb0a\";\n}\n\n.icon-lastfm2:before {\n  content: \"\\eb0b\";\n}\n\n.icon-delicious:before {\n  content: \"\\eb0c\";\n}\n\n.icon-stumbleupon:before {\n  content: \"\\eb0d\";\n}\n\n.icon-stumbleupon2:before {\n  content: \"\\eb0e\";\n}\n\n.icon-stackoverflow:before {\n  content: \"\\eb0f\";\n}\n\n.icon-pinterest:before {\n  content: \"\\eb10\";\n}\n\n.icon-pinterest2:before {\n  content: \"\\eb11\";\n}\n\n.icon-xing:before {\n  content: \"\\eb12\";\n}\n\n.icon-xing2:before {\n  content: \"\\eb13\";\n}\n\n.icon-flattr:before {\n  content: \"\\eb14\";\n}\n\n.icon-foursquare:before {\n  content: \"\\eb15\";\n}\n\n.icon-yelp:before {\n  content: \"\\eb16\";\n}\n\n.icon-paypal:before {\n  content: \"\\eb17\";\n}\n\n.icon-chrome:before {\n  content: \"\\eb18\";\n}\n\n.icon-firefox:before {\n  content: \"\\eb19\";\n}\n\n.icon-IE:before {\n  content: \"\\eb1a\";\n}\n\n.icon-edge:before {\n  content: \"\\eb1b\";\n}\n\n.icon-safari:before {\n  content: \"\\eb1c\";\n}\n\n.icon-opera:before {\n  content: \"\\eb1d\";\n}\n\n.icon-file-pdf:before {\n  content: \"\\eb21\";\n}\n\n.icon-file-openoffice:before {\n  content: \"\\eb22\";\n}\n\n.icon-file-word:before {\n  content: \"\\eb23\";\n}\n\n.icon-file-excel:before {\n  content: \"\\eb24\";\n}\n\n.icon-libreoffice:before {\n  content: \"\\eb25\";\n}\n\n.icon-html-five:before {\n  content: \"\\eb26\";\n}\n\n.icon-html-five2:before {\n  content: \"\\eb27\";\n}\n\n.icon-css3:before {\n  content: \"\\eb28\";\n}\n\n.icon-git:before {\n  content: \"\\eb29\";\n}\n\n.icon-codepen:before {\n  content: \"\\eb2a\";\n}\n\n.icon-svg:before {\n  content: \"\\eb2b\";\n}\n\n.icon-IcoMoon:before {\n  content: \"\\eb2c\";\n}\n\nh2 {\n  padding: 20px 10%;\n  font-size: 20px;\n  line-height: 40px;\n  box-sizing: border-box;\n}\n\n.table {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.table .header {\n  background-color: rgba(16, 142, 233, 0.1);\n  height: 40px;\n}\n\n.table .header h4 {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.table .list {\n  width: 100%;\n  overflow: hidden;\n}\n\n.table .list li {\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(16, 142, 233, 0.1);\n}\n\n.table .list li p {\n  overflow: hidden;\n  float: left;\n  padding: 5px 10px;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-size: 12px;\n}\n\n.explain {\n  width: 80%;\n  margin: 20px auto;\n  overflow: hidden;\n  border: 6px solid rgba(16, 142, 233, 0.03);\n  background-color: rgba(16, 142, 233, 0.01);\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.explain p {\n  font-size: 14px;\n  line-height: 24px;\n  text-indent: 28px;\n}\n\nh3 {\n  font-size: 18px;\n  width: 80%;\n  margin: 20px auto;\n  color: rgba(51, 51, 51, 0.8);\n}\n"

/***/ }),

/***/ "./src/app/view/popover/popover.component.ts":
/*!***************************************************!*\
  !*** ./src/app/view/popover/popover.component.ts ***!
  \***************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        this.data = [
            {
                attr: '[showPop]',
                explain: "控制气泡的显示与否",
                type: "boolean",
                default: "false "
            },
            {
                attr: '[popIcon]',
                explain: "popover图标",
                type: 'string',
                default: "more2"
            },
            {
                attr: '[popList]',
                explain: "右边栏填充内容，可以标签，组件等",
                type: 'TemplateRef<any>',
                default: "没有默认值 "
            },
            {
                attr: '(closedPop)',
                explain: "回调函数，",
                type: 'EventEmitter<any>',
                default: "没有默认值 "
            }
        ];
        this.dataItem = [
            {
                attr: '[link]',
                explain: "路由导航",
                type: "string",
                default: "没有默认值 "
            },
            {
                attr: '[iconType]',
                explain: "popover图标",
                type: 'string',
                default: "没有默认值"
            }
        ];
        this.popLists = [
            {
                type: 'home',
                link: 'home',
                title: '首页'
            },
            {
                type: 'home2',
                link: 'home',
                title: '首页2'
            },
            {
                type: 'home3',
                link: 'home',
                title: '首页3'
            }
        ];
        this.showPopList = false;
    }
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent.prototype.lookPop = function () {
        this.showPopList = true;
    };
    PopoverComponent.prototype.hidePopover = function (e) {
        e.stopPropagation();
        this.showPopList = false;
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/view/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.less */ "./src/app/view/popover/popover.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/view/scroll/News.ts":
/*!*************************************!*\
  !*** ./src/app/view/scroll/News.ts ***!
  \*************************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
// @ts-ignore
var News = /** @class */ (function () {
    function News() {
    }
    return News;
}());



/***/ }),

/***/ "./src/app/view/scroll/scroll.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/scroll/scroll.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Scroll 数据加载</h2>\n\n<div class=\"table\">\n  <div class=\"clear header\">\n    <h4 class=\"win-10\">属性</h4>\n    <h4 class=\"win-70\">说明</h4>\n    <h4 class=\"win-10\">类型</h4>\n    <h4 class=\"win-10\">默认值</h4>\n  </div>\n  <ul class=\"list\">\n    <li class=\"clear\" *ngFor=\"let item of data\">\n      <p class=\"win-10\">{{item.attr}}</p>\n      <p class=\"win-70\">{{item.explain}}</p>\n      <p class=\"win-10\">{{item.type}}</p>\n      <p class=\"win-10\">{{item.default}}</p>\n    </li>\n  </ul>\n</div>\n\n<h2>数据加载示例</h2>\n\n<app-mobile-view>\n  <div style=\"height: 200px\">\n    <nrs-scroll [maxIndex]=\"5\" [pageIndex]=\"pageIndex\" (resultData)=\"resultData($event,scroll.pageIndex)\" #scroll >\n      <div class=\"new-list clear\" *ngFor=\"let item of newsList\">\n        <div class=\"pull-left news-img\">\n          <img [src]=\"item.newsMainPic\">\n        </div>\n        <div class=\"pull-right news-info\">\n          <h2>{{item.webNewsTitle}}</h2>\n          <p>{{item.newsBrief}}</p>\n          <div class=\"other-info clear\">\n            <time class=\"pull-left\">{{item.publishTime}}</time>\n            <a class=\"pull-right\" [routerLink]=\"'/newsDetails/'+item.webNewsId\">详情</a>\n          </div>\n        </div>\n      </div>\n    </nrs-scroll>\n  </div>\n</app-mobile-view>\n"

/***/ }),

/***/ "./src/app/view/scroll/scroll.component.less":
/*!***************************************************!*\
  !*** ./src/app/view/scroll/scroll.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src:  url('icomoon.eot?8t91ih');\n  src:  url('icomoon.eot?8t91ih#iefix') format('embedded-opentype'),\n    url('icomoon.ttf?8t91ih') format('truetype'),\n    url('icomoon.woff?8t91ih') format('woff'),\n    url('icomoon.svg?8t91ih#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /*line-height: 1;*/\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-Loading:before {\n  content: \"\\e900\";\n}\n\n.icon-check:before {\n  content: \"\\e901\";\n}\n\n.icon-more3:before {\n  content: \"\\e902\";\n}\n\n.icon-certificate:before {\n  content: \"\\e903\";\n}\n\n.icon-news:before {\n  content: \"\\e904\";\n}\n\n.icon-keys01:before {\n  content: \"\\e905\";\n}\n\n.icon-user02:before {\n  content: \"\\e906\";\n}\n\n.icon-user03:before {\n  content: \"\\e907\";\n}\n\n.icon-keys02:before {\n  content: \"\\e908\";\n}\n\n.icon-android:before {\n  content: \"\\e909\";\n}\n\n.icon-help:before {\n  content: \"\\e90a\";\n}\n\n.icon-ios:before {\n  content: \"\\e90b\";\n}\n\n.icon-searchPage:before {\n  content: \"\\e90c\";\n}\n\n.icon-add:before {\n  content: \"\\e90d\";\n}\n\n.icon-back:before {\n  content: \"\\e90e\";\n}\n\n.icon-close:before {\n  content: \"\\e90f\";\n}\n\n.icon-hotLine:before {\n  content: \"\\e910\";\n}\n\n.icon-i:before {\n  content: \"\\e911\";\n}\n\n.icon-link:before {\n  content: \"\\e912\";\n}\n\n.icon-more:before {\n  content: \"\\e913\";\n}\n\n.icon-next_1:before {\n  content: \"\\e914\";\n}\n\n.icon-next:before {\n  content: \"\\e915\";\n}\n\n.icon-phone:before {\n  content: \"\\e916\";\n}\n\n.icon-pwd:before {\n  content: \"\\e917\";\n}\n\n.icon-reduce:before {\n  content: \"\\e918\";\n}\n\n.icon-tabs:before {\n  content: \"\\e919\";\n}\n\n.icon-tel:before {\n  content: \"\\e91a\";\n}\n\n.icon-time:before {\n  content: \"\\e91b\";\n}\n\n.icon-user:before {\n  content: \"\\e91c\";\n}\n\n.icon-verify:before {\n  content: \"\\e91d\";\n}\n\n.icon-mobile:before {\n  content: \"\\e91e\";\n}\n\n.icon-show:before {\n  content: \"\\e91f\";\n}\n\n.icon-site:before {\n  content: \"\\e920\";\n}\n\n.icon-triangle:before {\n  content: \"\\e921\";\n}\n\n.icon-hide:before {\n  content: \"\\e922\";\n}\n\n.icon-userData:before {\n  content: \"\\e923\";\n}\n\n.icon-header:before {\n  content: \"\\e924\";\n}\n\n.icon-feedback:before {\n  content: \"\\e925\";\n}\n\n.icon-learn:before {\n  content: \"\\e926\";\n}\n\n.icon-set:before {\n  content: \"\\e927\";\n}\n\n.icon-selected:before {\n  content: \"\\e928\";\n}\n\n.icon-notSelected:before {\n  content: \"\\e929\";\n}\n\n.icon-notice:before {\n  content: \"\\e92a\";\n}\n\n.icon-define:before {\n  content: \"\\e92b\";\n}\n\n.icon-lock:before {\n  content: \"\\e92c\";\n}\n\n.icon-unfinished:before {\n  content: \"\\e92d\";\n}\n\n.icon-closedEyes:before {\n  content: \"\\e92e\";\n}\n\n.icon-signOut:before {\n  content: \"\\e92f\";\n}\n\n.icon-closev2:before {\n  content: \"\\e930\";\n}\n\n.icon-photo:before {\n  content: \"\\e931\";\n}\n\n.icon-photograph:before {\n  content: \"\\e932\";\n}\n\n.icon-video:before {\n  content: \"\\e933\";\n}\n\n.icon-userDetails:before {\n  content: \"\\e934\";\n}\n\n.icon-index:before {\n  content: \"\\e935\";\n}\n\n.icon-phone02:before {\n  content: \"\\e936\";\n}\n\n.icon-eyes:before {\n  content: \"\\e937\";\n}\n\n.icon-pwd02:before {\n  content: \"\\e938\";\n}\n\n.icon-company:before {\n  content: \"\\e939\";\n}\n\n.icon-county:before {\n  content: \"\\e93a\";\n}\n\n.icon-search:before {\n  content: \"\\e93b\";\n}\n\n.icon-alipay:before {\n  content: \"\\e93c\";\n}\n\n.icon-WeChat:before {\n  content: \"\\e93d\";\n}\n\n.icon-right-arrow:before {\n  content: \"\\e93e\";\n}\n\n.icon-more2:before {\n  content: \"\\e93f\";\n}\n\n.icon-course:before {\n  content: \"\\e940\";\n}\n\n.icon-verified:before {\n  content: \"\\e941\";\n}\n\n.icon-home:before {\n  content: \"\\e942\";\n}\n\n.icon-home2:before {\n  content: \"\\e943\";\n}\n\n.icon-home3:before {\n  content: \"\\e944\";\n}\n\n.icon-office:before {\n  content: \"\\e945\";\n}\n\n.icon-newspaper:before {\n  content: \"\\e946\";\n}\n\n.icon-pencil:before {\n  content: \"\\e947\";\n}\n\n.icon-pencil2:before {\n  content: \"\\e948\";\n}\n\n.icon-quill:before {\n  content: \"\\e949\";\n}\n\n.icon-pen:before {\n  content: \"\\e94a\";\n}\n\n.icon-blog:before {\n  content: \"\\e94b\";\n}\n\n.icon-eyedropper:before {\n  content: \"\\e94c\";\n}\n\n.icon-droplet:before {\n  content: \"\\e94d\";\n}\n\n.icon-paint-format:before {\n  content: \"\\e94e\";\n}\n\n.icon-image:before {\n  content: \"\\e94f\";\n}\n\n.icon-images:before {\n  content: \"\\eb20\";\n}\n\n.icon-camera:before {\n  content: \"\\e950\";\n}\n\n.icon-headphones:before {\n  content: \"\\e951\";\n}\n\n.icon-music:before {\n  content: \"\\e952\";\n}\n\n.icon-play:before {\n  content: \"\\e953\";\n}\n\n.icon-film:before {\n  content: \"\\e954\";\n}\n\n.icon-video-camera:before {\n  content: \"\\e955\";\n}\n\n.icon-dice:before {\n  content: \"\\e956\";\n}\n\n.icon-pacman:before {\n  content: \"\\e957\";\n}\n\n.icon-spades:before {\n  content: \"\\e958\";\n}\n\n.icon-clubs:before {\n  content: \"\\e959\";\n}\n\n.icon-diamonds:before {\n  content: \"\\e95a\";\n}\n\n.icon-bullhorn:before {\n  content: \"\\e95b\";\n}\n\n.icon-connection:before {\n  content: \"\\e95c\";\n}\n\n.icon-podcast:before {\n  content: \"\\e95d\";\n}\n\n.icon-feed:before {\n  content: \"\\e95e\";\n}\n\n.icon-mic:before {\n  content: \"\\e95f\";\n}\n\n.icon-book:before {\n  content: \"\\e960\";\n}\n\n.icon-books:before {\n  content: \"\\e961\";\n}\n\n.icon-library:before {\n  content: \"\\e962\";\n}\n\n.icon-file-text:before {\n  content: \"\\e963\";\n}\n\n.icon-profile:before {\n  content: \"\\e964\";\n}\n\n.icon-file-empty:before {\n  content: \"\\e965\";\n}\n\n.icon-files-empty:before {\n  content: \"\\e966\";\n}\n\n.icon-file-text2:before {\n  content: \"\\e967\";\n}\n\n.icon-file-picture:before {\n  content: \"\\e968\";\n}\n\n.icon-file-music:before {\n  content: \"\\e969\";\n}\n\n.icon-file-play:before {\n  content: \"\\e96a\";\n}\n\n.icon-file-video:before {\n  content: \"\\e96b\";\n}\n\n.icon-file-zip:before {\n  content: \"\\e96c\";\n}\n\n.icon-copy:before {\n  content: \"\\e96d\";\n}\n\n.icon-paste:before {\n  content: \"\\e96e\";\n}\n\n.icon-stack:before {\n  content: \"\\e96f\";\n}\n\n.icon-folder:before {\n  content: \"\\e970\";\n}\n\n.icon-folder-open:before {\n  content: \"\\e971\";\n}\n\n.icon-folder-plus:before {\n  content: \"\\e972\";\n}\n\n.icon-folder-minus:before {\n  content: \"\\e973\";\n}\n\n.icon-folder-download:before {\n  content: \"\\e974\";\n}\n\n.icon-folder-upload:before {\n  content: \"\\e975\";\n}\n\n.icon-price-tag:before {\n  content: \"\\e976\";\n}\n\n.icon-price-tags:before {\n  content: \"\\e977\";\n}\n\n.icon-barcode:before {\n  content: \"\\e978\";\n}\n\n.icon-qrcode:before {\n  content: \"\\e979\";\n}\n\n.icon-ticket:before {\n  content: \"\\e97a\";\n}\n\n.icon-cart:before {\n  content: \"\\e97b\";\n}\n\n.icon-coin-dollar:before {\n  content: \"\\e97c\";\n}\n\n.icon-coin-euro:before {\n  content: \"\\e97d\";\n}\n\n.icon-coin-pound:before {\n  content: \"\\e97e\";\n}\n\n.icon-coin-yen:before {\n  content: \"\\e97f\";\n}\n\n.icon-credit-card:before {\n  content: \"\\e980\";\n}\n\n.icon-calculator:before {\n  content: \"\\e981\";\n}\n\n.icon-lifebuoy:before {\n  content: \"\\e982\";\n}\n\n.icon-phone1:before {\n  content: \"\\e983\";\n}\n\n.icon-phone-hang-up:before {\n  content: \"\\e984\";\n}\n\n.icon-address-book:before {\n  content: \"\\e985\";\n}\n\n.icon-envelop:before {\n  content: \"\\e986\";\n}\n\n.icon-pushpin:before {\n  content: \"\\e987\";\n}\n\n.icon-location:before {\n  content: \"\\e988\";\n}\n\n.icon-location2:before {\n  content: \"\\e989\";\n}\n\n.icon-compass:before {\n  content: \"\\e98a\";\n}\n\n.icon-compass2:before {\n  content: \"\\e98b\";\n}\n\n.icon-map:before {\n  content: \"\\e98c\";\n}\n\n.icon-map2:before {\n  content: \"\\e98d\";\n}\n\n.icon-history:before {\n  content: \"\\e98e\";\n}\n\n.icon-clock:before {\n  content: \"\\e98f\";\n}\n\n.icon-clock2:before {\n  content: \"\\e990\";\n}\n\n.icon-alarm:before {\n  content: \"\\e991\";\n}\n\n.icon-bell:before {\n  content: \"\\e992\";\n}\n\n.icon-stopwatch:before {\n  content: \"\\e993\";\n}\n\n.icon-calendar:before {\n  content: \"\\e994\";\n}\n\n.icon-printer:before {\n  content: \"\\e995\";\n}\n\n.icon-keyboard:before {\n  content: \"\\e996\";\n}\n\n.icon-display:before {\n  content: \"\\e997\";\n}\n\n.icon-laptop:before {\n  content: \"\\e998\";\n}\n\n.icon-mobile1:before {\n  content: \"\\e999\";\n}\n\n.icon-mobile2:before {\n  content: \"\\e99a\";\n}\n\n.icon-tablet:before {\n  content: \"\\e99b\";\n}\n\n.icon-tv:before {\n  content: \"\\e99c\";\n}\n\n.icon-drawer:before {\n  content: \"\\e99d\";\n}\n\n.icon-drawer2:before {\n  content: \"\\e99e\";\n}\n\n.icon-box-add:before {\n  content: \"\\e99f\";\n}\n\n.icon-box-remove:before {\n  content: \"\\e9a0\";\n}\n\n.icon-download:before {\n  content: \"\\e9a1\";\n}\n\n.icon-upload:before {\n  content: \"\\e9a2\";\n}\n\n.icon-floppy-disk:before {\n  content: \"\\e9a3\";\n}\n\n.icon-drive:before {\n  content: \"\\e9a4\";\n}\n\n.icon-database:before {\n  content: \"\\e9a5\";\n}\n\n.icon-undo:before {\n  content: \"\\e9a6\";\n}\n\n.icon-redo:before {\n  content: \"\\e9a7\";\n}\n\n.icon-undo2:before {\n  content: \"\\e9a8\";\n}\n\n.icon-redo2:before {\n  content: \"\\e9a9\";\n}\n\n.icon-forward:before {\n  content: \"\\e9aa\";\n}\n\n.icon-reply:before {\n  content: \"\\e9ab\";\n}\n\n.icon-bubble:before {\n  content: \"\\e9ac\";\n}\n\n.icon-bubbles:before {\n  content: \"\\e9ad\";\n}\n\n.icon-bubbles2:before {\n  content: \"\\e9ae\";\n}\n\n.icon-bubble2:before {\n  content: \"\\e9af\";\n}\n\n.icon-bubbles3:before {\n  content: \"\\e9b0\";\n}\n\n.icon-bubbles4:before {\n  content: \"\\e9b1\";\n}\n\n.icon-user1:before {\n  content: \"\\e9b2\";\n}\n\n.icon-users:before {\n  content: \"\\e9b3\";\n}\n\n.icon-user-plus:before {\n  content: \"\\e9b4\";\n}\n\n.icon-user-minus:before {\n  content: \"\\e9b5\";\n}\n\n.icon-user-check:before {\n  content: \"\\e9b6\";\n}\n\n.icon-user-tie:before {\n  content: \"\\e9b7\";\n}\n\n.icon-quotes-left:before {\n  content: \"\\e9b8\";\n}\n\n.icon-quotes-right:before {\n  content: \"\\e9b9\";\n}\n\n.icon-hour-glass:before {\n  content: \"\\e9ba\";\n}\n\n.icon-spinner:before {\n  content: \"\\e9bb\";\n}\n\n.icon-spinner2:before {\n  content: \"\\e9bc\";\n}\n\n.icon-spinner3:before {\n  content: \"\\e9bd\";\n}\n\n.icon-spinner4:before {\n  content: \"\\e9be\";\n}\n\n.icon-spinner5:before {\n  content: \"\\e9bf\";\n}\n\n.icon-spinner6:before {\n  content: \"\\eb1f\";\n}\n\n.icon-spinner7:before {\n  content: \"\\e9c0\";\n}\n\n.icon-spinner8:before {\n  content: \"\\e9c1\";\n}\n\n.icon-spinner9:before {\n  content: \"\\e9c2\";\n}\n\n.icon-spinner10:before {\n  content: \"\\e9c3\";\n}\n\n.icon-spinner11:before {\n  content: \"\\e9c4\";\n}\n\n.icon-binoculars:before {\n  content: \"\\e9c5\";\n}\n\n.icon-search1:before {\n  content: \"\\e9c6\";\n}\n\n.icon-zoom-in:before {\n  content: \"\\e9c7\";\n}\n\n.icon-zoom-out:before {\n  content: \"\\e9c8\";\n}\n\n.icon-enlarge:before {\n  content: \"\\e9c9\";\n}\n\n.icon-shrink:before {\n  content: \"\\e9ca\";\n}\n\n.icon-enlarge2:before {\n  content: \"\\e9cb\";\n}\n\n.icon-shrink2:before {\n  content: \"\\e9cc\";\n}\n\n.icon-key:before {\n  content: \"\\eb1e\";\n}\n\n.icon-key2:before {\n  content: \"\\e9cd\";\n}\n\n.icon-lock1:before {\n  content: \"\\e9ce\";\n}\n\n.icon-unlocked:before {\n  content: \"\\e9cf\";\n}\n\n.icon-wrench:before {\n  content: \"\\e9d0\";\n}\n\n.icon-equalizer:before {\n  content: \"\\e9d1\";\n}\n\n.icon-equalizer2:before {\n  content: \"\\e9d2\";\n}\n\n.icon-cog:before {\n  content: \"\\e9d3\";\n}\n\n.icon-cogs:before {\n  content: \"\\e9d4\";\n}\n\n.icon-hammer:before {\n  content: \"\\e9d5\";\n}\n\n.icon-magic-wand:before {\n  content: \"\\e9d6\";\n}\n\n.icon-aid-kit:before {\n  content: \"\\e9d7\";\n}\n\n.icon-bug:before {\n  content: \"\\e9d8\";\n}\n\n.icon-pie-chart:before {\n  content: \"\\e9d9\";\n}\n\n.icon-stats-dots:before {\n  content: \"\\e9da\";\n}\n\n.icon-stats-bars:before {\n  content: \"\\e9db\";\n}\n\n.icon-stats-bars2:before {\n  content: \"\\e9dc\";\n}\n\n.icon-trophy:before {\n  content: \"\\e9dd\";\n}\n\n.icon-gift:before {\n  content: \"\\e9de\";\n}\n\n.icon-glass:before {\n  content: \"\\e9df\";\n}\n\n.icon-glass2:before {\n  content: \"\\e9e0\";\n}\n\n.icon-mug:before {\n  content: \"\\e9e1\";\n}\n\n.icon-spoon-knife:before {\n  content: \"\\e9e2\";\n}\n\n.icon-leaf:before {\n  content: \"\\e9e3\";\n}\n\n.icon-rocket:before {\n  content: \"\\e9e4\";\n}\n\n.icon-meter:before {\n  content: \"\\e9e5\";\n}\n\n.icon-meter2:before {\n  content: \"\\e9e6\";\n}\n\n.icon-hammer2:before {\n  content: \"\\e9e7\";\n}\n\n.icon-fire:before {\n  content: \"\\e9e8\";\n}\n\n.icon-lab:before {\n  content: \"\\e9e9\";\n}\n\n.icon-magnet:before {\n  content: \"\\e9ea\";\n}\n\n.icon-bin:before {\n  content: \"\\e9eb\";\n}\n\n.icon-bin2:before {\n  content: \"\\e9ec\";\n}\n\n.icon-briefcase:before {\n  content: \"\\e9ed\";\n}\n\n.icon-airplane:before {\n  content: \"\\e9ee\";\n}\n\n.icon-truck:before {\n  content: \"\\e9ef\";\n}\n\n.icon-road:before {\n  content: \"\\e9f0\";\n}\n\n.icon-accessibility:before {\n  content: \"\\e9f1\";\n}\n\n.icon-target:before {\n  content: \"\\e9f2\";\n}\n\n.icon-shield:before {\n  content: \"\\e9f3\";\n}\n\n.icon-power:before {\n  content: \"\\e9f4\";\n}\n\n.icon-switch:before {\n  content: \"\\e9f5\";\n}\n\n.icon-power-cord:before {\n  content: \"\\e9f6\";\n}\n\n.icon-clipboard:before {\n  content: \"\\e9f7\";\n}\n\n.icon-list-numbered:before {\n  content: \"\\e9f8\";\n}\n\n.icon-list:before {\n  content: \"\\e9f9\";\n}\n\n.icon-list2:before {\n  content: \"\\e9fa\";\n}\n\n.icon-tree:before {\n  content: \"\\e9fb\";\n}\n\n.icon-menu:before {\n  content: \"\\e9fc\";\n}\n\n.icon-menu2:before {\n  content: \"\\e9fd\";\n}\n\n.icon-menu3:before {\n  content: \"\\e9fe\";\n}\n\n.icon-menu4:before {\n  content: \"\\e9ff\";\n}\n\n.icon-cloud:before {\n  content: \"\\ea00\";\n}\n\n.icon-cloud-download:before {\n  content: \"\\ea01\";\n}\n\n.icon-cloud-upload:before {\n  content: \"\\ea02\";\n}\n\n.icon-cloud-check:before {\n  content: \"\\ea03\";\n}\n\n.icon-download2:before {\n  content: \"\\ea04\";\n}\n\n.icon-upload2:before {\n  content: \"\\ea05\";\n}\n\n.icon-download3:before {\n  content: \"\\ea06\";\n}\n\n.icon-upload3:before {\n  content: \"\\ea07\";\n}\n\n.icon-sphere:before {\n  content: \"\\ea08\";\n}\n\n.icon-earth:before {\n  content: \"\\ea09\";\n}\n\n.icon-link1:before {\n  content: \"\\ea0a\";\n}\n\n.icon-flag:before {\n  content: \"\\ea0b\";\n}\n\n.icon-attachment:before {\n  content: \"\\ea0c\";\n}\n\n.icon-eye:before {\n  content: \"\\ea0d\";\n}\n\n.icon-eye-plus:before {\n  content: \"\\ea0e\";\n}\n\n.icon-eye-minus:before {\n  content: \"\\ea0f\";\n}\n\n.icon-eye-blocked:before {\n  content: \"\\ea10\";\n}\n\n.icon-bookmark:before {\n  content: \"\\ea11\";\n}\n\n.icon-bookmarks:before {\n  content: \"\\ea12\";\n}\n\n.icon-sun:before {\n  content: \"\\ea13\";\n}\n\n.icon-contrast:before {\n  content: \"\\ea14\";\n}\n\n.icon-brightness-contrast:before {\n  content: \"\\ea15\";\n}\n\n.icon-star-empty:before {\n  content: \"\\ea16\";\n}\n\n.icon-star-half:before {\n  content: \"\\ea17\";\n}\n\n.icon-star-full:before {\n  content: \"\\ea18\";\n}\n\n.icon-heart:before {\n  content: \"\\ea19\";\n}\n\n.icon-heart-broken:before {\n  content: \"\\ea1a\";\n}\n\n.icon-man:before {\n  content: \"\\ea1b\";\n}\n\n.icon-woman:before {\n  content: \"\\ea1c\";\n}\n\n.icon-man-woman:before {\n  content: \"\\ea1d\";\n}\n\n.icon-happy:before {\n  content: \"\\ea1e\";\n}\n\n.icon-happy2:before {\n  content: \"\\ea1f\";\n}\n\n.icon-smile:before {\n  content: \"\\ea20\";\n}\n\n.icon-smile2:before {\n  content: \"\\ea21\";\n}\n\n.icon-tongue:before {\n  content: \"\\ea22\";\n}\n\n.icon-tongue2:before {\n  content: \"\\ea23\";\n}\n\n.icon-sad:before {\n  content: \"\\ea24\";\n}\n\n.icon-sad2:before {\n  content: \"\\ea25\";\n}\n\n.icon-wink:before {\n  content: \"\\ea26\";\n}\n\n.icon-wink2:before {\n  content: \"\\ea27\";\n}\n\n.icon-grin:before {\n  content: \"\\ea28\";\n}\n\n.icon-grin2:before {\n  content: \"\\ea29\";\n}\n\n.icon-cool:before {\n  content: \"\\ea2a\";\n}\n\n.icon-cool2:before {\n  content: \"\\ea2b\";\n}\n\n.icon-angry:before {\n  content: \"\\ea2c\";\n}\n\n.icon-angry2:before {\n  content: \"\\ea2d\";\n}\n\n.icon-evil:before {\n  content: \"\\ea2e\";\n}\n\n.icon-evil2:before {\n  content: \"\\ea2f\";\n}\n\n.icon-shocked:before {\n  content: \"\\ea30\";\n}\n\n.icon-shocked2:before {\n  content: \"\\ea31\";\n}\n\n.icon-baffled:before {\n  content: \"\\ea32\";\n}\n\n.icon-baffled2:before {\n  content: \"\\ea33\";\n}\n\n.icon-confused:before {\n  content: \"\\ea34\";\n}\n\n.icon-confused2:before {\n  content: \"\\ea35\";\n}\n\n.icon-neutral:before {\n  content: \"\\ea36\";\n}\n\n.icon-neutral2:before {\n  content: \"\\ea37\";\n}\n\n.icon-hipster:before {\n  content: \"\\ea38\";\n}\n\n.icon-hipster2:before {\n  content: \"\\ea39\";\n}\n\n.icon-wondering:before {\n  content: \"\\ea3a\";\n}\n\n.icon-wondering2:before {\n  content: \"\\ea3b\";\n}\n\n.icon-sleepy:before {\n  content: \"\\ea3c\";\n}\n\n.icon-sleepy2:before {\n  content: \"\\ea3d\";\n}\n\n.icon-frustrated:before {\n  content: \"\\ea3e\";\n}\n\n.icon-frustrated2:before {\n  content: \"\\ea3f\";\n}\n\n.icon-crying:before {\n  content: \"\\ea40\";\n}\n\n.icon-crying2:before {\n  content: \"\\ea41\";\n}\n\n.icon-point-up:before {\n  content: \"\\ea42\";\n}\n\n.icon-point-right:before {\n  content: \"\\ea43\";\n}\n\n.icon-point-down:before {\n  content: \"\\ea44\";\n}\n\n.icon-point-left:before {\n  content: \"\\ea45\";\n}\n\n.icon-warning:before {\n  content: \"\\ea46\";\n}\n\n.icon-notification:before {\n  content: \"\\ea47\";\n}\n\n.icon-question:before {\n  content: \"\\ea48\";\n}\n\n.icon-plus:before {\n  content: \"\\ea49\";\n}\n\n.icon-minus:before {\n  content: \"\\ea4a\";\n}\n\n.icon-info:before {\n  content: \"\\ea4b\";\n}\n\n.icon-cancel-circle:before {\n  content: \"\\ea4c\";\n}\n\n.icon-blocked:before {\n  content: \"\\ea4d\";\n}\n\n.icon-cross:before {\n  content: \"\\ea4e\";\n}\n\n.icon-checkmark:before {\n  content: \"\\ea4f\";\n}\n\n.icon-checkmark2:before {\n  content: \"\\ea50\";\n}\n\n.icon-spell-check:before {\n  content: \"\\ea51\";\n}\n\n.icon-enter:before {\n  content: \"\\ea52\";\n}\n\n.icon-exit:before {\n  content: \"\\ea53\";\n}\n\n.icon-play2:before {\n  content: \"\\ea54\";\n}\n\n.icon-pause:before {\n  content: \"\\ea55\";\n}\n\n.icon-stop:before {\n  content: \"\\ea56\";\n}\n\n.icon-previous:before {\n  content: \"\\ea57\";\n}\n\n.icon-next1:before {\n  content: \"\\ea58\";\n}\n\n.icon-backward:before {\n  content: \"\\ea59\";\n}\n\n.icon-forward2:before {\n  content: \"\\ea5a\";\n}\n\n.icon-play3:before {\n  content: \"\\ea5b\";\n}\n\n.icon-pause2:before {\n  content: \"\\ea5c\";\n}\n\n.icon-stop2:before {\n  content: \"\\ea5d\";\n}\n\n.icon-backward2:before {\n  content: \"\\ea5e\";\n}\n\n.icon-forward3:before {\n  content: \"\\ea5f\";\n}\n\n.icon-first:before {\n  content: \"\\ea60\";\n}\n\n.icon-last:before {\n  content: \"\\ea61\";\n}\n\n.icon-previous2:before {\n  content: \"\\ea62\";\n}\n\n.icon-next2:before {\n  content: \"\\ea63\";\n}\n\n.icon-eject:before {\n  content: \"\\ea64\";\n}\n\n.icon-volume-high:before {\n  content: \"\\ea65\";\n}\n\n.icon-volume-medium:before {\n  content: \"\\ea66\";\n}\n\n.icon-volume-low:before {\n  content: \"\\ea67\";\n}\n\n.icon-volume-mute:before {\n  content: \"\\ea68\";\n}\n\n.icon-volume-mute2:before {\n  content: \"\\ea69\";\n}\n\n.icon-volume-increase:before {\n  content: \"\\ea6a\";\n}\n\n.icon-volume-decrease:before {\n  content: \"\\ea6b\";\n}\n\n.icon-loop:before {\n  content: \"\\ea6c\";\n}\n\n.icon-loop2:before {\n  content: \"\\ea6d\";\n}\n\n.icon-infinite:before {\n  content: \"\\ea6e\";\n}\n\n.icon-shuffle:before {\n  content: \"\\ea6f\";\n}\n\n.icon-arrow-up-left:before {\n  content: \"\\ea70\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\ea71\";\n}\n\n.icon-arrow-up-right:before {\n  content: \"\\ea72\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\ea73\";\n}\n\n.icon-arrow-down-right:before {\n  content: \"\\ea74\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\ea75\";\n}\n\n.icon-arrow-down-left:before {\n  content: \"\\ea76\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\ea77\";\n}\n\n.icon-arrow-up-left2:before {\n  content: \"\\ea78\";\n}\n\n.icon-arrow-up2:before {\n  content: \"\\ea79\";\n}\n\n.icon-arrow-up-right2:before {\n  content: \"\\ea7a\";\n}\n\n.icon-arrow-right2:before {\n  content: \"\\ea7b\";\n}\n\n.icon-arrow-down-right2:before {\n  content: \"\\ea7c\";\n}\n\n.icon-arrow-down2:before {\n  content: \"\\ea7d\";\n}\n\n.icon-arrow-down-left2:before {\n  content: \"\\ea7e\";\n}\n\n.icon-arrow-left2:before {\n  content: \"\\ea7f\";\n}\n\n.icon-circle-up:before {\n  content: \"\\ea80\";\n}\n\n.icon-circle-right:before {\n  content: \"\\ea81\";\n}\n\n.icon-circle-down:before {\n  content: \"\\ea82\";\n}\n\n.icon-circle-left:before {\n  content: \"\\ea83\";\n}\n\n.icon-tab:before {\n  content: \"\\ea84\";\n}\n\n.icon-move-up:before {\n  content: \"\\ea85\";\n}\n\n.icon-move-down:before {\n  content: \"\\ea86\";\n}\n\n.icon-sort-alpha-asc:before {\n  content: \"\\ea87\";\n}\n\n.icon-sort-alpha-desc:before {\n  content: \"\\ea88\";\n}\n\n.icon-sort-numeric-asc:before {\n  content: \"\\ea89\";\n}\n\n.icon-sort-numberic-desc:before {\n  content: \"\\ea8a\";\n}\n\n.icon-sort-amount-asc:before {\n  content: \"\\ea8b\";\n}\n\n.icon-sort-amount-desc:before {\n  content: \"\\ea8c\";\n}\n\n.icon-command:before {\n  content: \"\\ea8d\";\n}\n\n.icon-shift:before {\n  content: \"\\ea8e\";\n}\n\n.icon-ctrl:before {\n  content: \"\\ea8f\";\n}\n\n.icon-opt:before {\n  content: \"\\ea90\";\n}\n\n.icon-checkbox-checked:before {\n  content: \"\\ea91\";\n}\n\n.icon-checkbox-unchecked:before {\n  content: \"\\ea92\";\n}\n\n.icon-radio-checked:before {\n  content: \"\\ea93\";\n}\n\n.icon-radio-checked2:before {\n  content: \"\\ea94\";\n}\n\n.icon-radio-unchecked:before {\n  content: \"\\ea95\";\n}\n\n.icon-crop:before {\n  content: \"\\ea96\";\n}\n\n.icon-make-group:before {\n  content: \"\\ea97\";\n}\n\n.icon-ungroup:before {\n  content: \"\\ea98\";\n}\n\n.icon-scissors:before {\n  content: \"\\ea99\";\n}\n\n.icon-filter:before {\n  content: \"\\ea9a\";\n}\n\n.icon-font:before {\n  content: \"\\ea9b\";\n}\n\n.icon-ligature:before {\n  content: \"\\ea9c\";\n}\n\n.icon-ligature2:before {\n  content: \"\\ea9d\";\n}\n\n.icon-text-height:before {\n  content: \"\\ea9e\";\n}\n\n.icon-text-width:before {\n  content: \"\\ea9f\";\n}\n\n.icon-font-size:before {\n  content: \"\\eaa0\";\n}\n\n.icon-bold:before {\n  content: \"\\eaa1\";\n}\n\n.icon-underline:before {\n  content: \"\\eaa2\";\n}\n\n.icon-italic:before {\n  content: \"\\eaa3\";\n}\n\n.icon-strikethrough:before {\n  content: \"\\eaa4\";\n}\n\n.icon-omega:before {\n  content: \"\\eaa5\";\n}\n\n.icon-sigma:before {\n  content: \"\\eaa6\";\n}\n\n.icon-page-break:before {\n  content: \"\\eaa7\";\n}\n\n.icon-superscript:before {\n  content: \"\\eaa8\";\n}\n\n.icon-subscript:before {\n  content: \"\\eaa9\";\n}\n\n.icon-superscript2:before {\n  content: \"\\eaaa\";\n}\n\n.icon-subscript2:before {\n  content: \"\\eaab\";\n}\n\n.icon-text-color:before {\n  content: \"\\eaac\";\n}\n\n.icon-pagebreak:before {\n  content: \"\\eaad\";\n}\n\n.icon-clear-formatting:before {\n  content: \"\\eaae\";\n}\n\n.icon-table:before {\n  content: \"\\eaaf\";\n}\n\n.icon-table2:before {\n  content: \"\\eab0\";\n}\n\n.icon-insert-template:before {\n  content: \"\\eab1\";\n}\n\n.icon-pilcrow:before {\n  content: \"\\eab2\";\n}\n\n.icon-ltr:before {\n  content: \"\\eab3\";\n}\n\n.icon-rtl:before {\n  content: \"\\eab4\";\n}\n\n.icon-section:before {\n  content: \"\\eab5\";\n}\n\n.icon-paragraph-left:before {\n  content: \"\\eab6\";\n}\n\n.icon-paragraph-center:before {\n  content: \"\\eab7\";\n}\n\n.icon-paragraph-right:before {\n  content: \"\\eab8\";\n}\n\n.icon-paragraph-justify:before {\n  content: \"\\eab9\";\n}\n\n.icon-indent-increase:before {\n  content: \"\\eaba\";\n}\n\n.icon-indent-decrease:before {\n  content: \"\\eabb\";\n}\n\n.icon-share:before {\n  content: \"\\eabc\";\n}\n\n.icon-new-tab:before {\n  content: \"\\eabd\";\n}\n\n.icon-embed:before {\n  content: \"\\eabe\";\n}\n\n.icon-embed2:before {\n  content: \"\\eabf\";\n}\n\n.icon-terminal:before {\n  content: \"\\eac0\";\n}\n\n.icon-share2:before {\n  content: \"\\eac1\";\n}\n\n.icon-mail:before {\n  content: \"\\eac2\";\n}\n\n.icon-mail2:before {\n  content: \"\\eac3\";\n}\n\n.icon-mail3:before {\n  content: \"\\eac4\";\n}\n\n.icon-mail4:before {\n  content: \"\\eac5\";\n}\n\n.icon-amazon:before {\n  content: \"\\eac6\";\n}\n\n.icon-google:before {\n  content: \"\\eac7\";\n}\n\n.icon-google2:before {\n  content: \"\\eac8\";\n}\n\n.icon-google3:before {\n  content: \"\\eac9\";\n}\n\n.icon-google-plus:before {\n  content: \"\\eaca\";\n}\n\n.icon-google-plus2:before {\n  content: \"\\eacb\";\n}\n\n.icon-google-plus3:before {\n  content: \"\\eacc\";\n}\n\n.icon-hangouts:before {\n  content: \"\\eacd\";\n}\n\n.icon-google-drive:before {\n  content: \"\\eace\";\n}\n\n.icon-facebook:before {\n  content: \"\\eacf\";\n}\n\n.icon-facebook2:before {\n  content: \"\\ead0\";\n}\n\n.icon-instagram:before {\n  content: \"\\ead1\";\n}\n\n.icon-whatsapp:before {\n  content: \"\\ead2\";\n}\n\n.icon-spotify:before {\n  content: \"\\ead3\";\n}\n\n.icon-telegram:before {\n  content: \"\\ead4\";\n}\n\n.icon-twitter:before {\n  content: \"\\ead5\";\n}\n\n.icon-vine:before {\n  content: \"\\ead6\";\n}\n\n.icon-vk:before {\n  content: \"\\ead7\";\n}\n\n.icon-renren:before {\n  content: \"\\ead8\";\n}\n\n.icon-sina-weibo:before {\n  content: \"\\ead9\";\n}\n\n.icon-rss:before {\n  content: \"\\eada\";\n}\n\n.icon-rss2:before {\n  content: \"\\eadb\";\n}\n\n.icon-youtube:before {\n  content: \"\\eadc\";\n}\n\n.icon-youtube2:before {\n  content: \"\\eadd\";\n}\n\n.icon-twitch:before {\n  content: \"\\eade\";\n}\n\n.icon-vimeo:before {\n  content: \"\\eadf\";\n}\n\n.icon-vimeo2:before {\n  content: \"\\eae0\";\n}\n\n.icon-lanyrd:before {\n  content: \"\\eae1\";\n}\n\n.icon-flickr:before {\n  content: \"\\eae2\";\n}\n\n.icon-flickr2:before {\n  content: \"\\eae3\";\n}\n\n.icon-flickr3:before {\n  content: \"\\eae4\";\n}\n\n.icon-flickr4:before {\n  content: \"\\eae5\";\n}\n\n.icon-dribbble:before {\n  content: \"\\eae6\";\n}\n\n.icon-behance:before {\n  content: \"\\eae7\";\n}\n\n.icon-behance2:before {\n  content: \"\\eae8\";\n}\n\n.icon-deviantart:before {\n  content: \"\\eae9\";\n}\n\n.icon-500px:before {\n  content: \"\\eaea\";\n}\n\n.icon-steam:before {\n  content: \"\\eaeb\";\n}\n\n.icon-steam2:before {\n  content: \"\\eaec\";\n}\n\n.icon-dropbox:before {\n  content: \"\\eaed\";\n}\n\n.icon-onedrive:before {\n  content: \"\\eaee\";\n}\n\n.icon-github:before {\n  content: \"\\eaef\";\n}\n\n.icon-npm:before {\n  content: \"\\eaf0\";\n}\n\n.icon-basecamp:before {\n  content: \"\\eaf1\";\n}\n\n.icon-trello:before {\n  content: \"\\eaf2\";\n}\n\n.icon-wordpress:before {\n  content: \"\\eaf3\";\n}\n\n.icon-joomla:before {\n  content: \"\\eaf4\";\n}\n\n.icon-ello:before {\n  content: \"\\eaf5\";\n}\n\n.icon-blogger:before {\n  content: \"\\eaf6\";\n}\n\n.icon-blogger2:before {\n  content: \"\\eaf7\";\n}\n\n.icon-tumblr:before {\n  content: \"\\eaf8\";\n}\n\n.icon-tumblr2:before {\n  content: \"\\eaf9\";\n}\n\n.icon-yahoo:before {\n  content: \"\\eafa\";\n}\n\n.icon-yahoo2:before {\n  content: \"\\eafb\";\n}\n\n.icon-tux:before {\n  content: \"\\eafc\";\n}\n\n.icon-appleinc:before {\n  content: \"\\eafd\";\n}\n\n.icon-finder:before {\n  content: \"\\eafe\";\n}\n\n.icon-android1:before {\n  content: \"\\eaff\";\n}\n\n.icon-windows:before {\n  content: \"\\eb00\";\n}\n\n.icon-windows8:before {\n  content: \"\\eb01\";\n}\n\n.icon-soundcloud:before {\n  content: \"\\eb02\";\n}\n\n.icon-soundcloud2:before {\n  content: \"\\eb03\";\n}\n\n.icon-skype:before {\n  content: \"\\eb04\";\n}\n\n.icon-reddit:before {\n  content: \"\\eb05\";\n}\n\n.icon-hackernews:before {\n  content: \"\\eb06\";\n}\n\n.icon-wikipedia:before {\n  content: \"\\eb07\";\n}\n\n.icon-linkedin:before {\n  content: \"\\eb08\";\n}\n\n.icon-linkedin2:before {\n  content: \"\\eb09\";\n}\n\n.icon-lastfm:before {\n  content: \"\\eb0a\";\n}\n\n.icon-lastfm2:before {\n  content: \"\\eb0b\";\n}\n\n.icon-delicious:before {\n  content: \"\\eb0c\";\n}\n\n.icon-stumbleupon:before {\n  content: \"\\eb0d\";\n}\n\n.icon-stumbleupon2:before {\n  content: \"\\eb0e\";\n}\n\n.icon-stackoverflow:before {\n  content: \"\\eb0f\";\n}\n\n.icon-pinterest:before {\n  content: \"\\eb10\";\n}\n\n.icon-pinterest2:before {\n  content: \"\\eb11\";\n}\n\n.icon-xing:before {\n  content: \"\\eb12\";\n}\n\n.icon-xing2:before {\n  content: \"\\eb13\";\n}\n\n.icon-flattr:before {\n  content: \"\\eb14\";\n}\n\n.icon-foursquare:before {\n  content: \"\\eb15\";\n}\n\n.icon-yelp:before {\n  content: \"\\eb16\";\n}\n\n.icon-paypal:before {\n  content: \"\\eb17\";\n}\n\n.icon-chrome:before {\n  content: \"\\eb18\";\n}\n\n.icon-firefox:before {\n  content: \"\\eb19\";\n}\n\n.icon-IE:before {\n  content: \"\\eb1a\";\n}\n\n.icon-edge:before {\n  content: \"\\eb1b\";\n}\n\n.icon-safari:before {\n  content: \"\\eb1c\";\n}\n\n.icon-opera:before {\n  content: \"\\eb1d\";\n}\n\n.icon-file-pdf:before {\n  content: \"\\eb21\";\n}\n\n.icon-file-openoffice:before {\n  content: \"\\eb22\";\n}\n\n.icon-file-word:before {\n  content: \"\\eb23\";\n}\n\n.icon-file-excel:before {\n  content: \"\\eb24\";\n}\n\n.icon-libreoffice:before {\n  content: \"\\eb25\";\n}\n\n.icon-html-five:before {\n  content: \"\\eb26\";\n}\n\n.icon-html-five2:before {\n  content: \"\\eb27\";\n}\n\n.icon-css3:before {\n  content: \"\\eb28\";\n}\n\n.icon-git:before {\n  content: \"\\eb29\";\n}\n\n.icon-codepen:before {\n  content: \"\\eb2a\";\n}\n\n.icon-svg:before {\n  content: \"\\eb2b\";\n}\n\n.icon-IcoMoon:before {\n  content: \"\\eb2c\";\n}\n\nh2 {\n  padding: 20px 10%;\n  font-size: 20px;\n  line-height: 40px;\n  box-sizing: border-box;\n}\n\n.table {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.table .header {\n  background-color: rgba(16, 142, 233, 0.1);\n  height: 40px;\n}\n\n.table .header h4 {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.table .list {\n  width: 100%;\n  overflow: hidden;\n}\n\n.table .list li {\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(16, 142, 233, 0.1);\n}\n\n.table .list li p {\n  overflow: hidden;\n  float: left;\n  padding: 5px 10px;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-size: 12px;\n}\n\n.example {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.new-list {\n  margin-bottom: 10px;\n  background-color: #fff;\n  width: 100%;\n  padding: 10px 0.2rem;\n  box-sizing: border-box;\n}\n\n.new-list .news-img {\n  width: 30%;\n  height: 1.8rem;\n  overflow: hidden;\n  position: relative;\n}\n\n.new-list .news-img img {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.new-list .news-info {\n  width: 68%;\n  overflow: hidden;\n}\n\n.new-list .news-info h2 {\n  font-size: 14px;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.new-list .news-info p {\n  text-overflow: -o-ellipsis-lastline;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  font-size: 12px;\n  line-height: 16px;\n  height: 32px;\n  margin-top: 6px;\n  color: #808080;\n}\n\n.new-list .news-info .other-info {\n  width: 100%;\n  height: 0.6rem;\n  margin-top: 0.1rem;\n}\n\n.new-list .news-info .other-info time {\n  line-height: 20px;\n  font-size: 12px;\n  color: #808080;\n}\n\n.new-list .news-info .other-info a {\n  height: 30px;\n  width: 64px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #108ee9;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 13px;\n}\n\n.new-list .news-info .other-info a:active {\n  background-color: #0b63a3;\n}\n"

/***/ }),

/***/ "./src/app/view/scroll/scroll.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/scroll/scroll.component.ts ***!
  \*************************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ "./src/app/view/scroll/News.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollComponent = /** @class */ (function () {
    function ScrollComponent() {
        this.data = [
            {
                attr: '[maxIndex]',
                explain: "首次加载数据后，确定列表页的最大页面数，必填",
                type: "number",
                default: "无 "
            },
            {
                attr: '[url]',
                explain: "请求数据加载的地址，必填",
                type: "string",
                default: "无 "
            },
            {
                attr: '[pageIndex]',
                explain: "最新加载的页面",
                type: "number",
                default: "0 "
            },
            {
                attr: "[params]",
                explain: "数据加载参数，其中pageIndex键不可修改",
                type: "dictionaries",
                default: "{pageIndex:0,\n pageSize:10}"
            },
            {
                attr: '(resultData)',
                explain: "数据加载的方法，通过$event可以获取到更新后的数据",
                type: "EventEmitter",
                default: "无默认值 "
            }
        ];
        this.newsList = [];
        this.pageIndex = 0;
        this.news = new _News__WEBPACK_IMPORTED_MODULE_1__["News"]();
    }
    ScrollComponent.prototype.ngOnInit = function () {
    };
    ScrollComponent.prototype.resultData = function (e, p) {
        console.log(e, p);
        if (p == 0) {
            //this.maxIndex=e.dataMap.maxIndex;
            this.newsList = [];
        }
        var data = e.newsList;
        // let dataLists:any = [];
        for (var i = 0; i < data.length; i++) {
            this.news.newsMainPic = data[i].newsMainPic;
            this.news.publishTime = data[i].publishTime;
            this.news.webNewsTitle = data[i].webNewsTitle;
            this.news.newsBrief = data[i].newsBrief;
            this.news.webNewsId = data[i].webNewsId;
            this.news.titleLink = data[i].titleLink;
            console.log("thisNews", this.news);
            this.newsList.push(this.news);
            //this.newsList.push(data[i])
        }
    };
    ScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scroll',
            template: __webpack_require__(/*! ./scroll.component.html */ "./src/app/view/scroll/scroll.component.html"),
            styles: [__webpack_require__(/*! ./scroll.component.less */ "./src/app/view/scroll/scroll.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollComponent);
    return ScrollComponent;
}());



/***/ }),

/***/ "./src/app/view/upload-img/upload-img.component.html":
/*!***********************************************************!*\
  !*** ./src/app/view/upload-img/upload-img.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  upload-img works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/upload-img/upload-img.component.less":
/*!***********************************************************!*\
  !*** ./src/app/view/upload-img/upload-img.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/upload-img/upload-img.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/upload-img/upload-img.component.ts ***!
  \*********************************************************/
/*! exports provided: UploadImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImgComponent", function() { return UploadImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadImgComponent = /** @class */ (function () {
    function UploadImgComponent() {
    }
    UploadImgComponent.prototype.ngOnInit = function () {
    };
    UploadImgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-img',
            template: __webpack_require__(/*! ./upload-img.component.html */ "./src/app/view/upload-img/upload-img.component.html"),
            styles: [__webpack_require__(/*! ./upload-img.component.less */ "./src/app/view/upload-img/upload-img.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadImgComponent);
    return UploadImgComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\git-work\angular-demo\yz-design\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map