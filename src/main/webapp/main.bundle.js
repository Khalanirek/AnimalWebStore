webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_center_view_center_component__ = __webpack_require__("../../../../../src/app/view-center/view-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_left_view_left_component__ = __webpack_require__("../../../../../src/app/view-left/view-left.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'center', component: __WEBPACK_IMPORTED_MODULE_2__view_center_view_center_component__["a" /* ViewCenterComponent */] },
    { path: 'left', component: __WEBPACK_IMPORTED_MODULE_3__view_left_view_left_component__["a" /* ViewLeftComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__view_center_view_center_component__["a" /* ViewCenterComponent */], __WEBPACK_IMPORTED_MODULE_3__view_left_view_left_component__["a" /* ViewLeftComponent */]];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <app-view-top></app-view-top>\r\n <app-view-left></app-view-left>\r\n <app-view-center></app-view-center>\r\n <app-view-right></app-view-right>\r\n <app-view-bottom></app-view-bottom>\r\n\r\n <nav>\r\n   <a routerLink=\"/center\" routerLinkActive=\"\">Center</a>\r\n   <a routerLink=\"/left\" routerLinkActive=\"\">Left</a>\r\n </nav>\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AnimalWebStore';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_top_view_top_component__ = __webpack_require__("../../../../../src/app/view-top/view-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_right_view_right_component__ = __webpack_require__("../../../../../src/app/view-right/view-right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_bottom_view_bottom_component__ = __webpack_require__("../../../../../src/app/view-bottom/view-bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__view_top_view_top_component__["a" /* ViewTopComponent */],
                __WEBPACK_IMPORTED_MODULE_6__view_right_view_right_component__["a" /* ViewRightComponent */],
                __WEBPACK_IMPORTED_MODULE_7__view_bottom_view_bottom_component__["a" /* ViewBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["b" /* routingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.getAllURL = 'http://localhost:8084/animalwebstore/rest/all';
        this.getAllSortedAlphabeticallyURL = 'http://localhost:8084/animalwebstore/rest/sA';
        this.getAllSortedReverseAlphabeticallyURL = 'http://localhost:8084/animalwebstore/rest/sRA';
        this.getAllSortedPriceAscendingURL = 'http://localhost:8084/animalwebstore/rest/sPA';
        this.getAllSortedPriceDescendingURL = 'http://localhost:8084/animalwebstore/rest/sRA';
        this.getAnimalsTypesURL = 'http://localhost:8084/animalwebstore/rest/aTypes';
    }
    DataService.prototype.getAnimals = function () {
        return this.http.get(this.getAllURL);
    };
    DataService.prototype.getAnimalsAlphabetically = function () {
        return this.http.get(this.getAllSortedAlphabeticallyURL);
    };
    DataService.prototype.getAnimalsReverseAlphabetically = function () {
        return this.http.get(this.getAllSortedReverseAlphabeticallyURL);
    };
    DataService.prototype.getAnimalsSortedPriceAscending = function () {
        return this.http.get(this.getAllSortedPriceAscendingURL);
    };
    DataService.prototype.getAnimalsSortedPriceDescending = function () {
        return this.http.get(this.getAllSortedPriceDescendingURL);
    };
    DataService.prototype.getAnimalsTypes = function () {
        return this.http.get(this.getAnimalsTypesURL);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/view-bottom/view-bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-bottom/view-bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"width: 100%; float: left; background: black\">\n<p>\n\n  It is learning project. Do not use it to any comercial production.\n\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-bottom/view-bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewBottomComponent = /** @class */ (function () {
    function ViewBottomComponent() {
    }
    ViewBottomComponent.prototype.ngOnInit = function () {
    };
    ViewBottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-bottom',
            template: __webpack_require__("../../../../../src/app/view-bottom/view-bottom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-bottom/view-bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewBottomComponent);
    return ViewBottomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-center/view-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-center/view-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"float: left; width: 60%\">\n\n  <div dropdown class=\"dropdown\" style=\"margin: 15px 15px\">\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\"  dropdownToggle>\n      Default Sort\n    </button>\n    <div *dropdownMenu class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" (click)=\"sortPriceAscending()\">Cena: od najniższej</a>\n      <a class=\"dropdown-item\" (click)=\"sortPriceDescending()\">Cena: od najwyższej</a>\n      <a class=\"dropdown-item\" (click)=\"sortAlphabetically()\">Typ: A-Z</a>\n      <a class=\"dropdown-item\" (click)=\"sortReverseAlphabetically()\">Typ: Z-A</a>\n    </div>\n  </div>\n\n\n  <div *ngFor=\"let animal of animals\">\n    <div class=\"card\" style=\"width: 200px; float: left; margin: 15px 15px\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{animal.type}}</h4>\n        <p class=\"card-text\">\n          {{animal.animalId}}<br>\n          {{animal.type}}<br>\n          {{animal.size}}<br>\n          {{animal.country}}<br>\n          {{animal.unitPrice}}\n        </p>\n        <a href=\"#\" class=\"btn btn-primary\">See Profile</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-center/view-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewCenterComponent = /** @class */ (function () {
    function ViewCenterComponent(dataService) {
        this.dataService = dataService;
        this.animals = [];
    }
    ViewCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.animals);
        this.dataService.getAnimals().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
        });
    };
    ViewCenterComponent.prototype.sortPriceAscending = function () {
        var _this = this;
        this.dataService.getAnimalsSortedPriceAscending().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
        });
    };
    ViewCenterComponent.prototype.sortPriceDescending = function () {
        var _this = this;
        this.dataService.getAnimalsSortedPriceDescending().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
        });
    };
    ViewCenterComponent.prototype.sortAlphabetically = function () {
        var _this = this;
        this.dataService.getAnimalsAlphabetically().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
        });
    };
    ViewCenterComponent.prototype.sortReverseAlphabetically = function () {
        var _this = this;
        this.dataService.getAnimalsReverseAlphabetically().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
        });
    };
    ViewCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-center',
            template: __webpack_require__("../../../../../src/app/view-center/view-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-center/view-center.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ViewCenterComponent);
    return ViewCenterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-left/view-left.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-left/view-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 25%; float: left;\" align=\"right\">\n  <button type=\"button\" class=\"btn btn-primary\" style=\"width: 200px; margin: 15px 20px 15px 15px;\">{{currentType}}</button>\n  <div *ngFor=\"let type of animalsTypes\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"currentType=type\" style=\"width: 200px; margin: 10px 15px;\">{{type}}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-left/view-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewLeftComponent = /** @class */ (function () {
    function ViewLeftComponent(dataService) {
        this.dataService = dataService;
        this.animalsTypes = [];
        this.currentType = 'All';
    }
    ViewLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAnimalsTypes().subscribe(function (res) {
            console.log(res);
            _this.animalsTypes = res;
        });
    };
    ViewLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-left',
            template: __webpack_require__("../../../../../src/app/view-left/view-left.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-left/view-left.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ViewLeftComponent);
    return ViewLeftComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-right/view-right.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-right/view-right.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 15%; float: left\">\n<p>\n  view-right works!\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-right/view-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewRightComponent = /** @class */ (function () {
    function ViewRightComponent() {
    }
    ViewRightComponent.prototype.ngOnInit = function () {
    };
    ViewRightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-right',
            template: __webpack_require__("../../../../../src/app/view-right/view-right.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-right/view-right.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewRightComponent);
    return ViewRightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-top/view-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-top/view-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" style=\"width: 100%\">\n<p>\n  view-top works!\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-top/view-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewTopComponent = /** @class */ (function () {
    function ViewTopComponent() {
    }
    ViewTopComponent.prototype.ngOnInit = function () {
    };
    ViewTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-top',
            template: __webpack_require__("../../../../../src/app/view-top/view-top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-top/view-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewTopComponent);
    return ViewTopComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map