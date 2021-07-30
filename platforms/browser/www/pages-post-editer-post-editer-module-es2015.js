(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-editer-post-editer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-editer/post-editer.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-editer/post-editer.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>post-editer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item >\n       <ion-input placeholder=\"Titel\" required type=\"text\" [(ngModel)]=\"title\" name=\"title\"> </ion-input>\n    </ion-item>\n </ion-card>\n \n<ion-card>\n     <ion-item >\n     <ion-textarea placeholder=\"Beitrag...\" rows=\"14\" cols=\"80\" required type=\"text\" [(ngModel)]=\"body\"  name=\"body\"> </ion-textarea>\n   </ion-item>\n</ion-card> \n\n\n <ion-button expand=\"block\" shape=\"round\" (click)=\"updatePost()\">Aktualisieren</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/post-editer/post-editer-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/post-editer/post-editer-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PostEditerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditerPageRoutingModule", function() { return PostEditerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_editer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-editer.page */ "./src/app/pages/post-editer/post-editer.page.ts");




const routes = [
    {
        path: '',
        component: _post_editer_page__WEBPACK_IMPORTED_MODULE_3__["PostEditerPage"]
    }
];
let PostEditerPageRoutingModule = class PostEditerPageRoutingModule {
};
PostEditerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostEditerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/post-editer/post-editer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/post-editer/post-editer.module.ts ***!
  \*********************************************************/
/*! exports provided: PostEditerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditerPageModule", function() { return PostEditerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _post_editer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-editer-routing.module */ "./src/app/pages/post-editer/post-editer-routing.module.ts");
/* harmony import */ var _post_editer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-editer.page */ "./src/app/pages/post-editer/post-editer.page.ts");







let PostEditerPageModule = class PostEditerPageModule {
};
PostEditerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_editer_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostEditerPageRoutingModule"]
        ],
        declarations: [_post_editer_page__WEBPACK_IMPORTED_MODULE_6__["PostEditerPage"]]
    })
], PostEditerPageModule);



/***/ }),

/***/ "./src/app/pages/post-editer/post-editer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/post-editer/post-editer.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QtZWRpdGVyL3Bvc3QtZWRpdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/post-editer/post-editer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/post-editer/post-editer.page.ts ***!
  \*******************************************************/
/*! exports provided: PostEditerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditerPage", function() { return PostEditerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/ */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/posts.service */ "./src/app/pages/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let PostEditerPage = class PostEditerPage {
    constructor(route, postService, afs, router, loadingCtrl, toastCtrl) {
        this.route = route;
        this.postService = postService;
        this.afs = afs;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.postId = this.route.snapshot.paramMap['postId'];
    }
    ionViewWillEnter() {
        this.loadPost();
    }
    loadPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Bitte Warten...',
                spinner: 'crescent',
                showBackdrop: true
            });
            loading.present();
            this.postService.getPost(this.postId).subscribe(post => {
                this.title = post.title;
                this.body = post.body;
                loading.dismiss();
            });
        });
    }
    toast(msg, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                position: "bottom",
                color: status,
                duration: 2000,
            });
            toast.present();
        });
    }
    updatePost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Post wird aktualisiert...',
                spinner: 'crescent',
                showBackdrop: true
            });
            loading.present();
            this.afs.collection("posts").doc(this.postId).set({
                'title': this.title,
                'body': this.body
            }, { merge: true })
                .then(() => {
                loading.dismiss();
                this.toast('Post wurde erfolgreich aktualisiert!', 'success');
                this.router.navigateByUrl('/schedule');
            });
        });
    }
};
PostEditerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
PostEditerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-post-editer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-editer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-editer/post-editer.page.html")).default,
        providers: [_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-editer.page.scss */ "./src/app/pages/post-editer/post-editer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
        _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
], PostEditerPage);



/***/ })

}]);
//# sourceMappingURL=pages-post-editer-post-editer-module-es2015.js.map