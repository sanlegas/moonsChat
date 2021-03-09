(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.page */ "laW7");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-routing.module */ "cC0O");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.component */ "eUAL");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"], _message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "GAOm":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-avatar [slot]=\"isUserMain? 'end':'start'\">\n    <img [src] = imgUsr>\n  </ion-avatar>\n  <ion-label [ngStyle]=\"{'text-align': isUserMain ? 'right':'left'}\">\n    <h2 [ngStyle]=\"{'text-align':isUserMain ? 'right':'left'}\">{{name}}</h2>\n    <p [ngStyle]=\"{'text-align':isUserMain ? 'right':'left'}\">{{message}}</p>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "SyIY":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "cC0O":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "laW7");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "dV/K":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "eUAL":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.component.html */ "GAOm");
/* harmony import */ var _message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component.scss */ "dV/K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() {
        if (this.isUserMain) {
            this.imgUsr = 'https://electronicssoftware.net/wp-content/uploads/user.png';
        }
        else {
            this.imgUsr = 'https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png';
        }
    }
};
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isUserMain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessageComponent);



/***/ }),

/***/ "laW7":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.page.html */ "n54z");
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.page.scss */ "SyIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/message */ "qZOq");
/* harmony import */ var _service_userManager_user_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/userManager/user-manager.service */ "8ccJ");
/* harmony import */ var _service_socketManager_socket_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/socketManager/socket-manager.service */ "zLvD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ChatPage = class ChatPage {
    constructor(userManagerService, socketManager, router) {
        this.userManagerService = userManagerService;
        this.socketManager = socketManager;
        this.router = router;
        this.mensajes = [];
    }
    validateEmptyString(stringToValidate) {
        return stringToValidate !== undefined && stringToValidate !== null && stringToValidate !== '';
    }
    validate() {
        if (!this.validateEmptyString(this.userManagerService.userName)) {
            this.router.navigate(['/tabs/config']);
        }
    }
    ngOnInit() {
        this.validate();
        this.socketManager.getMessages().subscribe((message) => {
            if (message.name !== this.userManagerService.userName) {
                message.isUserMain = false;
                this.mensajes.push(message);
            }
        });
    }
    mandaMensaje() {
        const mensaje = new _models_message__WEBPACK_IMPORTED_MODULE_4__["Message"]();
        mensaje.name = this.userManagerService.userName;
        mensaje.message = this.mensajeTxt;
        mensaje.isUserMain = true;
        this.mensajes.push(mensaje);
        this.socketManager.sendMessage(mensaje);
        this.mensajeTxt = '';
    }
};
ChatPage.ctorParameters = () => [
    { type: _service_userManager_user_manager_service__WEBPACK_IMPORTED_MODULE_5__["UserManagerService"] },
    { type: _service_socketManager_socket_manager_service__WEBPACK_IMPORTED_MODULE_6__["SocketManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatPage);



/***/ }),

/***/ "n54z":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Chat</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list lines=\"none\">\n\n    <app-message  *ngFor=\"let mensaje of mensajes\" [name] = mensaje.name [message]=\"mensaje.message\" [isUserMain]=\"mensaje.isUserMain\"></app-message>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-input (keyup.enter)=\"mandaMensaje()\" [(ngModel)]=\"mensajeTxt\" placeholder=\"Escribe algo en el chat...\"></ion-input>\n    <ion-button  size=\"medium\" (click)=\"mandaMensaje()\">Enviar</ion-button>\n\n  </ion-item>\n</ion-footer>\n");

/***/ }),

/***/ "qZOq":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
}


/***/ }),

/***/ "zLvD":
/*!*****************************************************************!*\
  !*** ./src/app/service/socketManager/socket-manager.service.ts ***!
  \*****************************************************************/
/*! exports provided: SocketManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketManagerService", function() { return SocketManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let SocketManagerService = class SocketManagerService {
    constructor(socket) {
        this.socket = socket;
        this.getMessages = () => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
                this.socket.on('message', (msg) => {
                    observer.next(msg);
                });
            });
        };
    }
    sendMessage(message) {
        this.socket.emit('message', message);
    }
};
SocketManagerService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
SocketManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketManagerService);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map