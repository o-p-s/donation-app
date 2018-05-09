webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__donation_page_donation_page_component__ = __webpack_require__("./src/app/donation-page/donation-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_share_core__ = __webpack_require__("./node_modules/@ngx-share/core/esm5/ngx-share-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fortawesome_angular_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/angular-fontawesome/@fortawesome/angular-fontawesome.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__donation_page_donation_page_component__["a" /* DonationPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_share_core__["b" /* ShareModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__fortawesome_angular_fontawesome__["a" /* FontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: "", component: __WEBPACK_IMPORTED_MODULE_3__donation_page_donation_page_component__["a" /* DonationPageComponent */], pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/donation-page/donation-page.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody {\n    padding-top: 50px;\n\tpadding-bottom: 50px;\n}\n\n.price-box {\n\tmargin: 0 auto;\n\tbackground: #E9E9E9;\n\tpadding: 40px 15px;\n\twidth: 500px;\n}\n\n/* h4.great {\n\tbackground: #00ac98;\n\tmargin: 0 0 55px -60px;\n\tpadding: 7px 15px;\n\tcolor: #ffffff;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\tborder-radius: 5px;\n\tdisplay: inline-block;\n\t-moz-box-shadow:    2px 4px 5px 0 #ccc;\n  \t-webkit-box-shadow: 2px 4px 5px 0 #ccc;\n  \tbox-shadow:         2px 4px 5px 0 #ccc;\n} */\n\n.price-label{\n\tmargin:0;\n}\n\n.label-bar{\n\tbackground-color: #393a40;\n\tcolor: #eeeeee;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding: 20px;\n\tmargin:0;\n\tfont-size: 1.2em;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\n}\n\n.ui-slider-label-inner {\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid #393a40;\n    margin-left: -10px;\n\tposition: relative;\n\tmargin-top:0;\n}\n\n::ng-deep .progress{\n\tmargin-bottom: 0;\n}\n\n::ng-deep .progress-bar{\n\tbackground-color: orangered;\n}\n\n.donationContainer{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tpadding: 10px 0 10px 0;\n}\n\n.fields{\n\tmargin:0;\n\twidth: 48%;\n}\n\n.inputAmount{\n\tborder: 1px solid #d7d6d6;\n\tcolor:black;\n\tmargin:0;\n\t-webkit-appearance:textfield;\n\t   -moz-appearance:textfield;\n\t        appearance:textfield;\n\tpadding: 12px;\n\tpadding-left: 25px;\n\tfont-size: 1.1em;\n\tfont-weight: 600;\n}\n\n.unit { \n\tposition: absolute; \n\tdisplay: -webkit-box; \n\tdisplay: -ms-flexbox; \n\tdisplay: flex; \n\tz-index: 9;\n\ttop: 62%;\n\tpadding-left: 10px;\n\tpadding-top: 1px;\n\tfont-size: 1.2em;\n\tfont-weight: 600;\n\tcolor: #757575;\n}\n\n.form-pricing {\n\tbackground: #ffffff;\n\tpadding: 20px;\n}\n\n.price-form {\n\tbackground: #ffffff;\n\tmargin-bottom: 10px;\n\tpadding: 20px;\n\tborder:none;\n\tborder-bottom: 1px solid #eeeeee;\n\tborder-right: 1px solid #eeeeee;\n\tborder-left: 1px solid #eeeeee;\n\tfont-size: 1.3em;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n\n.give{\n\tbackground-color:  \t#00FF41;\n\tcolor: white;\n\tfont-size: 1.2em;\n\tfont-weight: 700;\n}\n\n.btn-share, .btn-save{\n\tbackground-color:#eee;\n\tborder:#d7d6d6;\n\t-webkit-box-shadow: 0 2px #d7d6d6;\n\t        box-shadow: 0 2px #d7d6d6;\n\tpadding: 10px;\n\tfont-size: 1.2em;\n\tfont-weight: 600;\n\tcolor: #656565;\n}\n\na{\n\tfont-style: italic;\n}\n\n.saveAndShare{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n}\n\n.shareContainer{\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tpadding: 17px 15px 17px 45px;\n\tfont-size: 1.2em;\n}\n\n.shareButtons{\n    padding: 10px;\n    width: 45%;\n    border-radius: 5px;\n    color:white;\n}"

/***/ }),

/***/ "./src/app/donation-page/donation-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div class=\"price-box\">\n       <form #donationBox=\"ngForm\" (ngSubmit)=\"update()\" class=\"form-horizontal form-pricing\">\n\n           <div class=\"price-label\">\n              <label class =\"label-bar\">${{amt}} still needed for this project</label>\n           </div>   \n           \n           <div clas=\"col-sm-12\" style=\"overflow:hidden\"> \n                   <label [ngStyle]=\"{'left':progressLabel}\" class=\"form-group ui-slider-label-inner\"></label>                    \n           </div>\n           \n           <progressbar name=\"progressBar\" class=\"label-pointer\" [value]=\"progressValue\" [max]=\"1000\" [animate]=\"true\"></progressbar>\n          \n           <div class=\"price-form\">\n               <div class=\"form-group col-sm-12 \">\n                   <p>\n                       <span style=\"color:orangered\">Only 3 days left</span> to fund this project.<br>\n                       <br>\n                       Join the 42 other donors who have already supported this project. Every dollar helps.\n                       <br>\n                   </p>\n                   <div class= \"donationContainer\">\n                       <div class=\"unit\"><p>$</p></div>\n                       <input type=\"number\" class=\"col-sm-6 inputAmount fields\" name=\"donateAmount\" [(ngModel)]=\"donateAmount\" #amount=\"ngModel\" >\n                       <button type =\"submit\" class='fields col-sm-6 btn give'>Give Now</button>\n                   </div>\n                   <a href=\"#\">Why give $50?</a>\n               </div>\n           </div>\n\n            <div class=\"form-group \">\n                <div class=\"col-sm-12\">\n                    <div class= \"shareContainer\" [hidden]=\"accessSocialShare\">\n                        \n                        <button type=\"button\" class=\"shareButtons\" shareButton=\"facebook\" [style.backgroundColor]=\"share.prop.facebook.color\"><fa-icon [icon]=\"['fab', 'facebook']\" size=\"lg\"></fa-icon> Share</button>\n                        <button type=\"button\" class=\"shareButtons\" shareButton=\"twitter\" [style.backgroundColor]=\"share.prop.twitter.color\"><fa-icon [icon]=\"['fab', 'twitter']\" size=\"lg\"></fa-icon> Tweet</button>\n                    </div>\n                    <div class=\"saveAndShare\">\n                        <button type=\"button\" class=\"col-sm-6 btn btn-save fields\" (click)=\"saved()\" >Save for later</button>                      \n                        <button type=\"button\" class=\"col-sm-6 btn btn-share fields\" (click)=\"openDialog()\">Tell your friends</button>\n                    </div>\n                </div>\n            </div>\n       \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/donation-page/donation-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_share_core__ = __webpack_require__("./node_modules/@ngx-share/core/esm5/ngx-share-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_free_brands_svg_icons__ = __webpack_require__("./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_svg_core__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonationPageComponent = /** @class */ (function () {
    function DonationPageComponent(toastr, vcr, share) {
        this.toastr = toastr;
        this.vcr = vcr;
        this.share = share;
        this.donateAmount = 50;
        this.progressValue = 833;
        this.accessSocialShare = true;
        __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_svg_core__["d" /* library */].add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_free_brands_svg_icons__["k" /* faTwitter */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_free_brands_svg_icons__["a" /* faFacebook */]);
        this.toastr.setRootViewContainerRef(vcr);
        this.amt = 1000 - this.progressValue;
        this.progressLabel = (100 - (this.amt / 20)) + '%';
    }
    DonationPageComponent.prototype.openDialog = function () {
        this.accessSocialShare = (this.accessSocialShare == true) ? false : true;
    };
    DonationPageComponent.prototype.saved = function () {
        this.toastr.success('Saved!');
    };
    DonationPageComponent.prototype.update = function () {
        if ((this.progressValue + this.donateAmount) < 1000) {
            this.progressValue += this.donateAmount;
        }
        this.amt = 1000 - this.progressValue;
        this.progressLabel = (100 - (this.amt / 20)) + '%';
    };
    DonationPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-donation-page',
            template: __webpack_require__("./src/app/donation-page/donation-page.component.html"),
            styles: [__webpack_require__("./src/app/donation-page/donation-page.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2__ngx_share_core__["a" /* ShareButtons */]])
    ], DonationPageComponent);
    return DonationPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map