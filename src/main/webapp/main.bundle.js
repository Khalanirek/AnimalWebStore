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

/***/ "../../../../../src/app/animal-list/animal-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/animal-list/animal-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div dropdown class=\"dropdown\" style=\"margin: 15px 15px\">\n  <button type=\"button\" class=\"btn btn-primary dropdown-toggle\"  dropdownToggle>\n    {{currentSort}}\n  </button>\n  <div *dropdownMenu class=\"dropdown-menu\">\n    <a class=\"dropdown-item\" (click)=\"sortPriceAscending()\">Price: Ascending</a>\n    <a class=\"dropdown-item\" (click)=\"sortPriceDescending()\">Price: Descending</a>\n    <a class=\"dropdown-item\" (click)=\"sortAlphabetically()\">Type: A-Z</a>\n    <a class=\"dropdown-item\" (click)=\"sortReverseAlphabetically()\">Type: Z-A</a>\n  </div>\n</div>\n<div *ngFor=\"let animal of animals\">\n  <div *ngIf=\"animal.type + 's' === currentType || currentType === 'All'\">\n    <div class=\"card\" style=\"width: 200px; float: left; margin: 15px 15px\">\n      <img class=\"card-img-top\" src=\"./images/{{animal.type}}.jpg\" alt=\"Card image\" style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{animal.type}}</h4>\n        <p class=\"card-text\">\n        Id: {{animal.animalId}}<br>\n        Type: {{animal.type}}<br>\n        Size: {{animal.size}}<br>\n        Country: {{animal.country}}<br>\n        Unit Price: {{animal.unitPrice}}\n        </p>\n        <button class=\"btn btn-success\" (click)=\"addToCart(animal)\">Add to cart</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/animal-list/animal-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimalListComponent = /** @class */ (function () {
    function AnimalListComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.currentSort = 'Default Sort';
        this.animals = [];
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    AnimalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.animals);
        this.dataService.getAnimals().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
            _this.currentType = _this.route.snapshot.paramMap.get('currentType');
        });
    };
    AnimalListComponent.prototype.sortPriceAscending = function () {
        var _this = this;
        this.dataService.getAnimalsSortedPriceAscending().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
            _this.currentSort = 'Price: Ascending';
        });
    };
    AnimalListComponent.prototype.sortPriceDescending = function () {
        var _this = this;
        this.dataService.getAnimalsSortedPriceDescending().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
            _this.currentSort = 'Price: Descending';
        });
    };
    AnimalListComponent.prototype.sortAlphabetically = function () {
        var _this = this;
        this.dataService.getAnimalsAlphabetically().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
            _this.currentSort = 'Type: A-Z';
        });
    };
    AnimalListComponent.prototype.sortReverseAlphabetically = function () {
        var _this = this;
        this.dataService.getAnimalsReverseAlphabetically().subscribe(function (res) {
            console.log(res);
            _this.animals = res;
            console.log(_this.animals);
            _this.currentSort = 'Type: Z-A';
        });
    };
    AnimalListComponent.prototype.addToCart = function (animal) {
        var _this = this;
        console.log(animal);
        this.dataService.addToCart(animal).subscribe(function (res) {
            _this.test = res;
            if (res !== animal) {
                _this.dataService.addToCart(animal);
            }
        });
    };
    AnimalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-animal-list',
            template: __webpack_require__("../../../../../src/app/animal-list/animal-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/animal-list/animal-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AnimalListComponent);
    return AnimalListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animal_list_animal_list_component__ = __webpack_require__("../../../../../src/app/animal-list/animal-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__animal_list_animal_list_component__["a" /* AnimalListComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_5__detail_detail_component__["a" /* DetailComponent */] },
    { path: 'animalList/:currentType', component: __WEBPACK_IMPORTED_MODULE_3__animal_list_animal_list_component__["a" /* AnimalListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_7__cart_cart_component__["a" /* CartComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */], __WEBPACK_IMPORTED_MODULE_3__animal_list_animal_list_component__["a" /* AnimalListComponent */], __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_5__detail_detail_component__["a" /* DetailComponent */], __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]];


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

module.exports = "<div style=\"width:1440px; margin:0 auto\">\r\n<app-view-top></app-view-top>\r\n<app-view-left></app-view-left>\r\n<app-view-center></app-view-center>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__animal_list_animal_list_component__ = __webpack_require__("../../../../../src/app/animal-list/animal-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_left_view_left_component__ = __webpack_require__("../../../../../src/app/view-left/view-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_center_view_center_component__ = __webpack_require__("../../../../../src/app/view-center/view-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cart_section_cart_section_component__ = __webpack_require__("../../../../../src/app/cart-section/cart-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__view_top_view_top_component__["a" /* ViewTopComponent */],
                __WEBPACK_IMPORTED_MODULE_6__view_right_view_right_component__["a" /* ViewRightComponent */],
                __WEBPACK_IMPORTED_MODULE_14__view_left_view_left_component__["a" /* ViewLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_15__view_center_view_center_component__["a" /* ViewCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__view_bottom_view_bottom_component__["a" /* ViewBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__animal_list_animal_list_component__["a" /* AnimalListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__cart_section_cart_section_component__["a" /* CartSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cart-section/cart-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart-section/cart-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 22%; height: 200px; float: left;\">\n\n  <div style=\"float: left\">\n    <ul style=\"list-style-type: none\">\n      <li>\n        <a href=\"http://localhost:8084/animalwebstore/#/login\"  class=\"btn\"  style=\"width:100px; height: 100px; background-color: white\">\n          <i class=\"fa fa-user\" style=\"font-size: 60px; margin-top: 15px; color: black\"></i>\n        </a>\n\n        <button type=\"button\" disabled class=\"btn\"  style=\"width:150px; height: 100px; background-color: white\">\n          <a href=\"http://localhost:8084/animalwebstore/#/login\" style=\"color: black\">\n            Sign in<br>\n            Create account</a>\n        </button>\n      </li>\n\n      <li>\n        <a href=\"http://localhost:8084/animalwebstore/#/cart\" class=\"btn\" style=\"width: 100px; height: 100px; background-color: white\">\n          <i class=\"fa fa-shopping-cart\" style=\"font-size: 60px; margin-top: 10px; color: black\"></i>\n        </a>\n\n        <button type=\"button\" disabled class=\"btn\"  style=\"width:150px; height: 100px; background-color: white;\">\n          <a href=\"http://localhost:8084/animalwebstore/#/cart\" style=\"color: black\">Total: {{totalPrice}},00$</a>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/cart-section/cart-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartSectionComponent; });
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


var CartSectionComponent = /** @class */ (function () {
    function CartSectionComponent(dataService) {
        this.dataService = dataService;
    }
    CartSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentTotalPrice.subscribe(function (totalPrice) { return _this.totalPrice = totalPrice; });
        this.getCart();
    };
    CartSectionComponent.prototype.getCart = function () {
        var _this = this;
        this.dataService.getCart().subscribe(function (res) {
            console.log(res);
            _this.cart = res;
            _this.totalPrice = _this.cart.totalPrice;
        });
    };
    CartSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart-section',
            template: __webpack_require__("../../../../../src/app/cart-section/cart-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart-section/cart-section.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], CartSectionComponent);
    return CartSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Type</th>\n    <th>Id</th>\n    <th>Country</th>\n    <th>Unit Price</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let cartItem of cartList; let i = index\" class=\"table-striped\">\n    <td>{{cartItem.animal.type}}</td>\n    <td>{{cartItem.animal.animalId}}</td>\n    <td>{{cartItem.animal.country}}</td>\n    <td>{{cartItem.animal.unitPrice}}</td>\n    <button class=\"btn btn-danger\"(click)=\"remove(i); getCart()\" style=\"margin-left: 50px\">Remove from Cart</button>\n  </tr>\n  <tr>\n    <td><b>Total Price:</b>{{'   ' + totalPrice + ',00$'}}</td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n  </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.cartList = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCart().subscribe(function (response) {
            _this.cart = response;
            _this.cartList = _this.cart.cartList;
            console.log(response);
            _this.dataService.currentTotalPrice.subscribe(function (totalPrice) { return _this.totalPrice = totalPrice; });
        });
        this.dataService.currentTotalPrice.subscribe(function (totalPrice) { return _this.totalPrice = totalPrice; });
    };
    CartComponent.prototype.getCart = function () {
        var _this = this;
        this.dataService.getCart().subscribe(function (res) {
            _this.cart = res;
            _this.cart.cartList = _this.cart.cartList;
        });
    };
    CartComponent.prototype.remove = function (index) {
        var _this = this;
        this.dataService.removeFromCart(index).subscribe(function (res) {
            _this.done = res;
            console.log(res);
            _this.dataService.getCart().subscribe(function (response) {
                _this.cart = response;
                _this.cart.cartList = _this.cart.cartList;
                console.log(response);
                _this.router.navigate(['/cart']);
                _this.dataService.currentTotalPrice.subscribe(function (totalPrice) { return _this.totalPrice = totalPrice; });
            });
        });
        this.dataService.currentTotalPrice.subscribe(function (totalPrice) { return _this.totalPrice = totalPrice; });
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], CartComponent);
    return CartComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
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
        this.totalPrice = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.currentTotalprice = this.totalPrice.asObservable();
        this.currentTotalPrice = this.totalPrice.asObservable();
        this.getAllURL = 'http://localhost:8084/animalwebstore/rest/all';
        this.getAllSortedAlphabeticallyURL = 'http://localhost:8084/animalwebstore/rest/sA';
        this.getAllSortedReverseAlphabeticallyURL = 'http://localhost:8084/animalwebstore/rest/sRA';
        this.getAllSortedPriceAscendingURL = 'http://localhost:8084/animalwebstore/rest/sPA';
        this.getAllSortedPriceDescendingURL = 'http://localhost:8084/animalwebstore/rest/sRA';
        this.getAnimalsTypesURL = 'http://localhost:8084/animalwebstore/rest/aTypes';
        this.getAnimalsByTypesURL = 'http://localhost:8084/animalwebstore/rest/aTypes';
        this.getCartURL = 'http://localhost:8084/animalwebstore/rest/cart';
        this.addToCartURL = 'http://localhost:8084/animalwebstore/rest/cart';
        this.removeItemFromCartURL = 'http://localhost:8084/animalwebstore/rest/cart/';
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
    DataService.prototype.getAnimalsByType = function () {
        return this.http.get(this.getAnimalsByTypesURL);
    };
    DataService.prototype.getCart = function () {
        return this.http.get(this.getCartURL);
    };
    // Function doesn't work properly because requests are sending too fast.
    // Read something about promises.(Send second Request after complet first Request)
    DataService.prototype.addToCart = function (animal) {
        var _this = this;
        this.getCart().subscribe(function (res) {
            _this.cart = res;
            _this.totalPrice.next(_this.cart.totalPrice);
        });
        return this.http.post(this.addToCartURL, animal);
    };
    DataService.prototype.totalPriceUpdate = function () {
        this.totalPrice.next(this.cart.totalPrice);
    };
    DataService.prototype.removeFromCart = function (index) {
        var _this = this;
        this.getCart().subscribe(function (res) {
            _this.cart = res;
            _this.totalPrice.next(_this.cart.totalPrice);
        });
        var url = this.removeItemFromCartURL + index;
        return this.http.delete(url);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
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

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" align=\"center\">\n  <p>\n    Page not found!\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
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

module.exports = "<div align=\"center\" style=\"width: 1440px; float: left; background: black; margin: 0 auto\">\n<p>\n\n  It is learning project. Do not use it to any comercial production.\n\n</p>\n\n</div>\n"

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

module.exports = "<div style=\"float: left; width: 67%\">\n\n  <router-outlet></router-outlet>\n\n\n</div>\n"

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

module.exports = "<div style=\"width: 25%; float: left;\" align=\"right\">\n  <button type=\"button\" disabled=\"true\" class=\"btn btn-primary\" style=\"width: 200px; margin: 15px 15px 25px 15px;\">{{currentType}}</button>\n  <a href=\"http://localhost:8084/animalwebstore/#/animalList/All\" class=\"btn btn-secondary\" (click)=\"currentType='All'\" style=\"width: 200px; margin: 5px 15px;\">All</a>\n  <div *ngFor=\"let type of animalsTypes\">\n    <a href=\"http://localhost:8084/animalwebstore/#/animalList/{{currentType}}\" class=\"btn btn-secondary\" (click)=\"currentType=type + 's'\" style=\"width: 200px; margin: 5px 15px;\">{{type +\"s\"}}</a>\n  </div>\n</div>\n"

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
            _this.animalsTypes = res.sort(function (first, second) {
                if (first > second)
                    return 1;
                if (first < second)
                    return -1;
                return 0;
            });
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

module.exports = "<div style=\"width: 10%; float: left\">\n</div>\n"

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

module.exports = "<div style=\"width: 100%; height: 210px; float: top; margin-top: 30px\">\n  <div style=\"width: 25%; float: left\" align=\"right\">\n     <img src=\"./images/AnimalWebStoreIcon.jpg\" width=\"200px\" height=\"200px\"style=\"margin: 0px 15px\">\n</div>\n\n  <div style=\"width: 610px; float: left;\">\n    <ngb-carousel style=\"width: 609px;  margin: 0px 15px\">\n      <ng-template ngbSlide>\n        <img src=\"./images/Tiger.jpg\" alt=\"Random first slide\">\n        <img src=\"./images/Lemur.jpg\"  alt=\"Random second slide\">\n        <img src=\"./images/Fox.jpg\" alt=\"Random third slide\">\n        <div class=\"carousel-caption\">\n          <h3>It is time to take your own animal!</h3>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"./images/Lemur.jpg\"  alt=\"Random second slide\">\n        <img src=\"./images/Fox.jpg\" alt=\"Random third slide\">\n        <img src=\"./images/Flamingo.jpg\" alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <h3>It is time to take your own animal!</h3>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"./images/Fox.jpg\" alt=\"Random third slide\">\n        <img src=\"./images/Flamingo.jpg\" alt=\"Random first slide\">\n        <img src=\"./images/Anaconda.jpg\"  alt=\"Random second slide\">\n        <div class=\"carousel-caption\">\n          <h3>It is time to take your own animal!</h3>\n        </div>\n      </ng-template>\n    </ngb-carousel>\n  </div>\n  <app-cart-section></app-cart-section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/view-top/view-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function ViewTopComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = true;
        config.keyboard = false;
    }
    ViewTopComponent.prototype.ngOnInit = function () {
    };
    ViewTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-top',
            template: __webpack_require__("../../../../../src/app/view-top/view-top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-top/view-top.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]])
    ], ViewTopComponent);
    return ViewTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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