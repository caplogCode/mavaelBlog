(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>privacy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content onshow=\"openExternalUrl()\">\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/privacy/privacy-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/privacy/privacy-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PrivacyPageRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPageRoutingModule", function () {
      return PrivacyPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy.page */
    "./src/app/privacy/privacy.page.ts");

    const routes = [{
      path: '',
      component: _privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"]
    }];
    let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {};
    PrivacyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/privacy/privacy.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/privacy/privacy.module.ts ***!
    \*******************************************/

  /*! exports provided: PrivacyPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function () {
      return PrivacyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacy-routing.module */
    "./src/app/privacy/privacy-routing.module.ts");
    /* harmony import */


    var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy.page */
    "./src/app/privacy/privacy.page.ts");

    let PrivacyPageModule = class PrivacyPageModule {};
    PrivacyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPageRoutingModule"]],
      declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
    })], PrivacyPageModule);
    /***/
  },

  /***/
  "./src/app/privacy/privacy.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/privacy/privacy.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/privacy/privacy.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/privacy/privacy.page.ts ***!
    \*****************************************/

  /*! exports provided: PrivacyPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPage", function () {
      return PrivacyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let PrivacyPage = class PrivacyPage {
      constructor(inAppBrowser, menu) {
        this.inAppBrowser = inAppBrowser;
        this.menu = menu;
      }

      ngOnInit() {
        this.menu.enable(false);
        this.openExternalUrl();
      }

      openExternalUrl() {
        this.inAppBrowser.create("https://www.dummies.com/privacy-policy/", '_blank');
      }

    };

    PrivacyPage.ctorParameters = () => [{
      type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
    }];

    PrivacyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.page.scss */
      "./src/app/privacy/privacy.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], PrivacyPage);
    /***/
  }
}]);
//# sourceMappingURL=privacy-privacy-module-es5.js.map