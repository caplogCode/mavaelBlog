(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-edit-post-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-edit/post-edit.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-edit/post-edit.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>post-edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/post-edit/post-edit-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/post-edit/post-edit-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PostEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditPageRoutingModule", function() { return PostEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-edit.page */ "./src/app/post-edit/post-edit.page.ts");




const routes = [
    {
        path: '',
        component: _post_edit_page__WEBPACK_IMPORTED_MODULE_3__["PostEditPage"]
    }
];
let PostEditPageRoutingModule = class PostEditPageRoutingModule {
};
PostEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostEditPageRoutingModule);



/***/ }),

/***/ "./src/app/post-edit/post-edit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/post-edit/post-edit.module.ts ***!
  \***********************************************/
/*! exports provided: PostEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditPageModule", function() { return PostEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _post_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-edit-routing.module */ "./src/app/post-edit/post-edit-routing.module.ts");
/* harmony import */ var _post_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-edit.page */ "./src/app/post-edit/post-edit.page.ts");







let PostEditPageModule = class PostEditPageModule {
};
PostEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostEditPageRoutingModule"]
        ],
        declarations: [_post_edit_page__WEBPACK_IMPORTED_MODULE_6__["PostEditPage"]]
    })
], PostEditPageModule);



/***/ }),

/***/ "./src/app/post-edit/post-edit.page.scss":
/*!***********************************************!*\
  !*** ./src/app/post-edit/post-edit.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZWRpdC9wb3N0LWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/post-edit/post-edit.page.ts":
/*!*********************************************!*\
  !*** ./src/app/post-edit/post-edit.page.ts ***!
  \*********************************************/
/*! exports provided: PostEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditPage", function() { return PostEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostEditPage = class PostEditPage {
    constructor() { }
    ngOnInit() {
    }
};
PostEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-edit/post-edit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-edit.page.scss */ "./src/app/post-edit/post-edit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PostEditPage);



/***/ })

}]);
//# sourceMappingURL=post-edit-post-edit-module-es2015.js.map