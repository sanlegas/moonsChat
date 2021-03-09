(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "MRBM":
/*!***************************************!*\
  !*** ./src/app/config/config.page.ts ***!
  \***************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./config.page.html */ "TGsn");
/* harmony import */ var _config_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.page.scss */ "p26P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_userManager_user_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/userManager/user-manager.service */ "8ccJ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ConfigPage = class ConfigPage {
    constructor(userManagerService, toastController, router) {
        this.userManagerService = userManagerService;
        this.toastController = toastController;
        this.router = router;
        this.nombre = '';
        this.nombre = this.userManagerService.userName;
    }
    validateEmptyString(stringToValidate) {
        return stringToValidate !== undefined && stringToValidate !== null && stringToValidate !== '';
    }
    saveNombre() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.validateEmptyString(this.nombre)) {
                this.userManagerService.userName = this.nombre;
                const toast = yield this.toastController.create({
                    message: 'Nombre Guardado Correctamente',
                    duration: 2000
                });
                toast.present();
                this.router.navigate(['/tabs/chat']);
            }
        });
    }
};
ConfigPage.ctorParameters = () => [
    { type: _service_userManager_user_manager_service__WEBPACK_IMPORTED_MODULE_4__["UserManagerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_config_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfigPage);



/***/ }),

/***/ "TGsn":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Config\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <br/>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Nombre</ion-label>\n    <ion-input (keyup.enter)=\"saveNombre()\"  [(ngModel)]=\"nombre\" ></ion-input>\n  </ion-item>\n  <br/>\n  <ion-button expand=\"block\" (click)=\"saveNombre()\" >Guardar</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "WSrY":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.page */ "MRBM");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-routing.module */ "mjki");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _config_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]
        ],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_5__["ConfigPage"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "mjki":
/*!*************************************************!*\
  !*** ./src/app/config/config-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.page */ "MRBM");




const routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_3__["ConfigPage"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "p26P":
/*!*****************************************!*\
  !*** ./src/app/config/config.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=config-config-module.js.map