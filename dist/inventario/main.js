(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ALEX\3D Objects\Nueva carpeta\inventarioFront\src\main.ts */"zUnb");


/***/ }),

/***/ "4X49":
/*!*************************************!*\
  !*** ./src/app/producto.service.ts ***!
  \*************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "OdHV");







class ProductoService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.productoUrl = 'http://localhost:8080/Products';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getProductos() {
        return this.http.get(this.productoUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched heroes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProductos', [])));
    }
    getProducto(id) {
        const url = `${this.productoUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched productos id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getProducto id=${id}`)));
    }
    searchProductos(term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(`${this.productoUrl}/?name=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => x.length ?
            this.log(`found productos matching "${term}"`) :
            this.log(`no productos matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchProductos', [])));
    }
    addProducto(producto) {
        return this.http.post(this.productoUrl, producto, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((newProducto) => console.log(`added producto w/ id=${newProducto.productoid}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProducto')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    log(message) {
        this.messageService.add(`ProductoService: ${message}`);
    }
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "OdHV":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "SQ6e":
/*!**************************************************************!*\
  !*** ./src/app/detalleproducto/detalleproducto.component.ts ***!
  \**************************************************************/
/*! exports provided: DetalleproductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleproductoComponent", function() { return DetalleproductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../producto.service */ "4X49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function DetalleproductoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleproductoComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.producto.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleproductoComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "atras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.producto.name, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.producto.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.producto.name);
} }
class DetalleproductoComponent {
    constructor(route, productoService, location) {
        this.route = route;
        this.productoService = productoService;
        this.location = location;
    }
    ngOnInit() {
        this.getProducto;
    }
    getProducto() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productoService.getProducto(id)
            .subscribe(producto => this.producto = producto);
        this.producto;
    }
    goBack() {
        this.location.back();
    }
}
DetalleproductoComponent.ɵfac = function DetalleproductoComponent_Factory(t) { return new (t || DetalleproductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
DetalleproductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleproductoComponent, selectors: [["app-detalleproducto"]], inputs: { producto: "producto" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["placeholder", "name", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function DetalleproductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetalleproductoComponent_div_0_Template, 13, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.producto);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".detalle-producto[_ngcontent-%COMP%] {\r\n  background-color: #336699;\r\n  \r\n  color: white;\r\n  \r\n  padding: 20px;\r\n  \r\n  border-radius: 5px;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZXByb2R1Y3RvL2RldGFsbGVwcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGVwcm9kdWN0by9kZXRhbGxlcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhbGxlLXByb2R1Y3RvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM2Njk5O1xyXG4gIC8qIENvbG9yIGRlIGZvbmRvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qIENvbG9yIGRlbCB0ZXh0byBkZW50cm8gZGVsIGNvbnRlbmVkb3IgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC8qIEVzcGFjaWFkbyBpbnRlcm5vICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC8qIFJhZGlvIGRlbCBib3JkZSAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleproductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalleproducto',
                templateUrl: './detalleproducto.component.html',
                styleUrls: ['./detalleproducto.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'INVENTARIO DE PRODUCTOS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "container"], ["routerLink", "/buscar"], ["routerLink", "/nuevoproducto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buscar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Crear Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  \n  margin: 0 auto;\n  \n  padding: 20px;\n  \n  background-color: #f0f0f0;\n  \n  border-radius: 8px;\n  \n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  \n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  \n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #336699;\n  border-radius: 4px;\n}\n\n.container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  \n  text-decoration: none;\n  \n  color: white;\n  \n}\n\n.container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #336699;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaURBQWlEO0VBQ2pELGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgLyogQWp1c3RhIGVsIGFuY2hvIG3DoXhpbW8gc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgLyogQ2VudHJhIGVsIGNvbnRlbmVkb3IgaG9yaXpvbnRhbG1lbnRlICovXG4gIHBhZGRpbmc6IDIwcHg7XG4gIC8qIEVzcGFjaWFkbyBpbnRlcm5vIGRlbCBjb250ZW5lZG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIC8qIENvbG9yIGRlIGZvbmRvIGRlbCBjb250ZW5lZG9yICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogUmFkaW8gZGUgYm9yZGUgZGVsIGNvbnRlbmVkb3IgKi9cbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvKiBTb21icmEgZGVsIGNvbnRlbmVkb3IgKi9cbn1cblxuLmNvbnRhaW5lciBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8qIEVzcGFjaWFkbyBpbmZlcmlvciBwYXJhIGVsIHTDrXR1bG8gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIG5hdiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNjY5OTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY29udGFpbmVyIG5hdiBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAvKiBFc3BhY2lhZG8gZGVyZWNobyBlbnRyZSBsb3MgZW5sYWNlcyAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIFF1aXRhciBzdWJyYXlhZG8gZGUgbG9zIGVubGFjZXMgKi9cbiAgY29sb3I6IHdoaXRlO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gZGUgbG9zIGVubGFjZXMgKi9cbn1cblxuLmNvbnRhaW5lciBuYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzY2OTk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W8R3":
/*!************************************************!*\
  !*** ./src/app/producto/producto.component.ts ***!
  \************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../producto.service */ "4X49");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProductoComponent_table_10_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductoComponent_table_10_tr_20_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const producto_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onSelect(producto_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", producto_r4 === ctx_r3.selectedProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r4.productoid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r4.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r4.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 10, producto_r4.preciounitario, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 13, producto_r4.preciomasiva, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r4.codigoventa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r4.stockactual);
} }
function ProductoComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Categoria Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Precio IVA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Codigo Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductoComponent_table_10_tr_20_Template, 20, 16, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productosFiltrados);
} }
function ProductoComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No hay productos disponibles.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductoComponent_table_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DETALLES DEL PRODUCTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Producto ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Categoria Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Precio mas Iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Codigo Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.productoid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.preciounitario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.preciomasiva);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.codigoventa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedProducto.stockactual);
} }
class ProductoComponent {
    constructor(productoService) {
        this.productoService = productoService;
        this.filtro = '';
        this.productosFiltrados = [];
    }
    ngOnInit() {
        this.getProductos();
    }
    getProductos() {
        this.productoService.getProductos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            // Manejo del error aquí
            console.error('Error al obtener productos:', error);
            if (error.status === 500) {
                this.mostrarMensajeError('Se ha producido un error en el servidor. Por favor, inténtelo de nuevo más tarde.');
            }
            else {
                this.mostrarMensajeError('Error al obtener productos. Por favor, inténtelo de nuevo más tarde.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); // Lanza el error para que el componente lo maneje si es necesario
        }))
            .subscribe(productos => this.producto = productos.slice(0, productos.length));
    }
    mostrarMensajeError(mensaje) {
        this.errorMsg = mensaje;
    }
    filtrarProductos() {
        this.productosFiltrados = this.producto.filter(producto => {
            const idMatches = producto.productoid.toString().includes(this.filtro.toLowerCase());
            const nombreMatches = producto.nombre.toLowerCase().includes(this.filtro.toLowerCase());
            return idMatches || nombreMatches;
        });
    }
    onSelect(producto) {
        this.selectedProducto = producto;
    }
}
ProductoComponent.ɵfac = function ProductoComponent_Factory(t) { return new (t || ProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"])); };
ProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoComponent, selectors: [["app-producto"]], decls: 15, vars: 4, consts: [["type", "text", "placeholder", "Escribir el nombre del producto o codigo del producto", 3, "ngModel", "ngModelChange", "input"], [4, "ngIf"], ["class", "mensaje-exito", "class", "alert alert-success", 4, "ngIf"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "badge"], [1, "alert", "alert-success"]], template: function ProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MIS PRODUCTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductoComponent_Template_input_ngModelChange_7_listener($event) { return ctx.filtro = $event; })("input", function ProductoComponent_Template_input_input_7_listener() { return ctx.filtrarProductos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductoComponent_table_10_Template, 21, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductoComponent_div_11_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductoComponent_table_14_Template, 55, 8, "table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filtro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productosFiltrados && ctx.productosFiltrados.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productosFiltrados || ctx.productosFiltrados.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProducto);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["tr.selected[_ngcontent-%COMP%] {\r\n  background-color: lightblue;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #336699;\r\n  \r\n  color: white;\r\n  \r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2f2f2;\r\n  \r\n}\r\n\r\n\r\n\r\n.mensaje-exito[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  background-color: #dff0d8;\r\n  \r\n  color: #3c763d;\r\n  \r\n  border: 1px solid #d6e9c6;\r\n  \r\n  border-radius: 4px;\r\n  \r\n  margin-top: 10px;\r\n  \r\n}\r\n\r\n.detalle-producto[_ngcontent-%COMP%] {\r\n  background-color: #f2f2f2;\r\n  \r\n  color: black;\r\n  \r\n  padding: 20px;\r\n  \r\n  border-radius: 5px;\r\n  \r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  \r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvREFBb0Q7QUFDdEQ7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHIuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIGxhIHRhYmxhICovXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aCxcclxudGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNjY5OTtcclxuICAvKiBDb2xvciBkZSBmb25kbyBkZSBsYXMgY2VsZGFzIGRlIGVuY2FiZXphZG8gKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLyogQ29sb3IgZGVsIHRleHRvIGRlIGxhcyBjZWxkYXMgZGUgZW5jYWJlemFkbyAqL1xyXG59XHJcblxyXG50cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAvKiBDb2xvciBkZSBmb25kbyBhbCBwYXNhciBlbCByYXTDs24gc29icmUgdW5hIGZpbGEgKi9cclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIGVsIG1lbnNhamUgZGUgw6l4aXRvICovXHJcbi5tZW5zYWplLWV4aXRvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgLyogQ29sb3IgZGUgZm9uZG8gZGUgw6l4aXRvICovXHJcbiAgY29sb3I6ICMzYzc2M2Q7XHJcbiAgLyogQ29sb3IgZGVsIHRleHRvIGRlIMOpeGl0byAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmU5YzY7XHJcbiAgLyogQm9yZGUgZGUgw6l4aXRvICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIFJhZGlvIGRlbCBib3JkZSBkZSDDqXhpdG8gKi9cclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8qIEVzcGFjaWFkbyBzdXBlcmlvciAqL1xyXG59XHJcblxyXG4uZGV0YWxsZS1wcm9kdWN0byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAvKiBDb2xvciBkZSBmb25kbyBkZWwgY29udGVuZWRvciAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAvKiBDb2xvciBkZWwgdGV4dG8gZGVudHJvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvKiBFc3BhY2lhZG8gaW50ZXJubyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBSYWRpbyBkZWwgYm9yZGUgKi9cclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLyogRXNwYWNpYWRvIGluZmVyaW9yIHBhcmEgZWwgdMOtdHVsbyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto',
                templateUrl: './producto.component.html',
                styleUrls: ['./producto.component.css']
            }]
    }], function () { return [{ type: _producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto/producto.component */ "W8R3");
/* harmony import */ var _listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listaproducto/listaproducto.component */ "n+1Z");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _buscarproducto_buscarproducto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buscarproducto/buscarproducto.component */ "c2Qw");
/* harmony import */ var _detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detalleproducto/detalleproducto.component */ "SQ6e");
/* harmony import */ var _crearproducto_crearproducto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crearproducto/crearproducto.component */ "lm/g");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _producto_producto_component__WEBPACK_IMPORTED_MODULE_5__["ProductoComponent"],
        _listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_6__["ListaproductoComponent"],
        _buscarproducto_buscarproducto_component__WEBPACK_IMPORTED_MODULE_8__["BuscarproductoComponent"],
        _detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_9__["DetalleproductoComponent"],
        _crearproducto_crearproducto_component__WEBPACK_IMPORTED_MODULE_10__["CrearproductoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _producto_producto_component__WEBPACK_IMPORTED_MODULE_5__["ProductoComponent"],
                    _listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_6__["ListaproductoComponent"],
                    _buscarproducto_buscarproducto_component__WEBPACK_IMPORTED_MODULE_8__["BuscarproductoComponent"],
                    _detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_9__["DetalleproductoComponent"],
                    _crearproducto_crearproducto_component__WEBPACK_IMPORTED_MODULE_10__["CrearproductoComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c2Qw":
/*!************************************************************!*\
  !*** ./src/app/buscarproducto/buscarproducto.component.ts ***!
  \************************************************************/
/*! exports provided: BuscarproductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarproductoComponent", function() { return BuscarproductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../producto.service */ "4X49");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../producto/producto.component */ "W8R3");






class BuscarproductoComponent {
    constructor(productoService) {
        this.productoService = productoService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.productos$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.productoService.searchProductos(term)));
    }
}
BuscarproductoComponent.ɵfac = function BuscarproductoComponent_Factory(t) { return new (t || BuscarproductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"])); };
BuscarproductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscarproductoComponent, selectors: [["app-buscarproducto"]], decls: 1, vars: 0, template: function BuscarproductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-producto");
    } }, directives: [_producto_producto_component__WEBPACK_IMPORTED_MODULE_4__["ProductoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2NhcnByb2R1Y3RvL2J1c2NhcnByb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscarproductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buscarproducto',
                templateUrl: './buscarproducto.component.html',
                styleUrls: ['./buscarproducto.component.css']
            }]
    }], function () { return [{ type: _producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] }]; }, null); })();


/***/ }),

/***/ "lm/g":
/*!**********************************************************!*\
  !*** ./src/app/crearproducto/crearproducto.component.ts ***!
  \**********************************************************/
/*! exports provided: CrearproductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearproductoComponent", function() { return CrearproductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../producto.service */ "4X49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["nombre"];
const _c1 = ["descripcion"];
const _c2 = ["categoria"];
const _c3 = ["precioUni"];
const _c4 = ["precioIva"];
const _c5 = ["codVenta"];
const _c6 = ["cantidad"];
function CrearproductoComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El campo debe tener al menos 10 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El campo debe tener como m\u00E1ximo 20 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CrearproductoComponent_div_6_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CrearproductoComponent_div_6_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CrearproductoComponent_div_6_div_3_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nombreControl.errors == null ? null : ctx_r1.nombreControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nombreControl.errors == null ? null : ctx_r1.nombreControl.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nombreControl.errors == null ? null : ctx_r1.nombreControl.errors.maxlength);
} }
function CrearproductoComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El campo debe tener al menos 10 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El campo debe tener como m\u00E1ximo 30 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CrearproductoComponent_div_12_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CrearproductoComponent_div_12_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CrearproductoComponent_div_12_div_3_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.descripcionControl.errors == null ? null : ctx_r3.descripcionControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.descripcionControl.errors == null ? null : ctx_r3.descripcionControl.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.descripcionControl.errors == null ? null : ctx_r3.descripcionControl.errors.maxlength);
} }
function CrearproductoComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categoria_r20)("selected", i_r21 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoria_r20);
} }
function CrearproductoComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El precio unitario no debe ser valores negativos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El valor m\u00EDnimo permitido es 200,000 pesos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El valor m\u00E1ximo permitido es 30,000,000 pesos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CrearproductoComponent_div_24_Template_div_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.checkFields(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CrearproductoComponent_div_24_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CrearproductoComponent_div_24_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CrearproductoComponent_div_24_div_3_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CrearproductoComponent_div_24_div_4_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.precioUniControl.errors == null ? null : ctx_r7.precioUniControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.precioUniControl.errors == null ? null : ctx_r7.precioUniControl.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.precioUniControl.errors == null ? null : ctx_r7.precioUniControl.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.precioUniControl.errors == null ? null : ctx_r7.precioUniControl.errors.max);
} }
function CrearproductoComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El codigo de venta no debe ser valores negativos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CrearproductoComponent_div_35_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CrearproductoComponent_div_35_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.codigoVentaControl.errors == null ? null : ctx_r10.codigoVentaControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.codigoVentaControl.errors == null ? null : ctx_r10.codigoVentaControl.errors.pattern);
} }
function CrearproductoComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La cantidad no debe ser valores negativos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CrearproductoComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CrearproductoComponent_div_41_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CrearproductoComponent_div_41_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cantidadControl.errors == null ? null : ctx_r12.cantidadControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cantidadControl.errors == null ? null : ctx_r12.cantidadControl.errors.pattern);
} }
function CrearproductoComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.mensajeRespuesta, " ");
} }
class CrearproductoComponent {
    constructor(productoService) {
        this.productoService = productoService;
        this.productos = [];
        this.categorias = ['otros', 'Televisores', 'Computadores', 'Celulares'];
        this.mostrarBoton = true;
        this.camposCompletos = false;
        this.precioConIva = 0;
        this.iva = 0.19;
        this.nombreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
        ]);
        this.descripcionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)
        ]);
        this.precioUniControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(200000),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(30000000)
        ]);
        this.codigoVentaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')
        ]);
        this.cantidadControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$'),
        ]);
    }
    sumarIva() {
        const precioSinIva = parseFloat(this.precioUniControl.value);
        this.precioConIva = precioSinIva * (1 + this.iva);
    }
    ngOnInit() {
        this.generarCodigoProducto();
    }
    generarCodigoProducto() {
        const codigoAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        this.codigoVentaControl.setValue(codigoAleatorio);
    }
    checkFields() {
        if ((this.nombreControl.errors || this.descripcionControl.errors || this.precioUniControl.errors || this.cantidadControl.errors)) {
            this.camposCompletos = false;
        }
        else {
            this.camposCompletos = true;
        }
    }
    add(nombre, descripcion, categoria, preciounitario, preciomasiva, codigoventa, stockactual) {
        nombre = nombre.trim();
        if (!nombre) {
            this.mostrarMensajeExito(false);
            return;
        }
        this.productoService.addProducto({ nombre, descripcion, categoria, preciounitario, preciomasiva, codigoventa, stockactual })
            .subscribe(productos => {
            this.productos.push(productos);
        });
        this.mostrarMensajeExito(true);
        this.clearFields();
    }
    clearFields() {
        // Limpiar los valores de todos los campos
        this.nombreInput.nativeElement.value = '';
        this.descripcionInput.nativeElement.value = '';
        this.categoriaInput.nativeElement.value = '';
        this.precioUniInput.nativeElement.value = '';
        this.precioIvaInput.nativeElement.value = '';
        this.codVentaInput.nativeElement.value = '';
        this.cantidadInput.nativeElement.value = '';
        this.camposCompletos = false;
    }
    // Ocultar el mensaje después de 3 segundos
    mostrarMensajeExito(p0) {
        this.mostrarMensaje = true;
        if (p0 == true) {
            this.mensajeRespuesta = 'Guardado exitoso';
        }
        else {
            this.mensajeRespuesta = 'Error Guardando Informacion';
        }
        this.mensajeRespuesta = 'Guardado exitoso';
        setTimeout(() => {
            this.mostrarMensaje = false;
        }, 3000);
    }
}
CrearproductoComponent.ɵfac = function CrearproductoComponent_Factory(t) { return new (t || CrearproductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"])); };
CrearproductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrearproductoComponent, selectors: [["app-crearproducto"]], viewQuery: function CrearproductoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nombreInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.descripcionInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.categoriaInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.precioUniInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.precioIvaInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codVentaInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cantidadInput = _t.first);
    } }, decls: 45, vars: 15, consts: [[1, "formulario-producto"], ["type", "text", "oninput", "this.value = this.value.replace(/[^a-zA-Z0-9\\s]/g,)", 3, "formControl", "input"], ["nombre", ""], ["class", "alert alert-danger", 4, "ngIf"], ["type", "text", "oninput", "this.value = this.value.replace(/[^a-zA-Z0-9\\s]/g, '')", 3, "formControl", "input"], ["descripcion", ""], ["categoria", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["type", "number", 3, "formControl", "input"], ["precioUni", ""], ["class", "alert alert-danger", 3, "input", 4, "ngIf"], ["type", "number", "placeholder", "Precio con IVA", "readonly", "", 3, "value"], ["precioIva", ""], ["type", "number", "readonly", "", 3, "formControl", "input"], ["codVenta", ""], ["cantidad", ""], [3, "click"], ["class", "mensaje-exito", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value", "selected"], [1, "alert", "alert-danger", 3, "input"], [1, "mensaje-exito"]], template: function CrearproductoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nombre Producto: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CrearproductoComponent_Template_input_input_4_listener() { return ctx.checkFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CrearproductoComponent_div_6_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripci\u00F3n Producto: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CrearproductoComponent_Template_input_input_10_listener() { return ctx.checkFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CrearproductoComponent_div_12_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Categoria Producto: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CrearproductoComponent_option_18_Template, 2, 3, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Precio Unitario $: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CrearproductoComponent_Template_input_input_22_listener() { return ctx.sumarIva(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CrearproductoComponent_div_24_Template, 5, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Precio mas Iva $: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Codigo Venta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CrearproductoComponent_Template_input_input_33_listener() { return ctx.checkFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CrearproductoComponent_div_35_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cantidad: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 8, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CrearproductoComponent_Template_input_input_39_listener() { return ctx.checkFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CrearproductoComponent_div_41_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrearproductoComponent_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return ctx.add(_r0.value, _r2.value, _r4.value, _r6.value, _r8.value, _r9.value, _r11.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CrearproductoComponent_div_44_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.nombreControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreControl.invalid && (ctx.nombreControl.dirty || ctx.nombreControl.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.descripcionControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.descripcionControl.invalid && (ctx.descripcionControl.dirty || ctx.descripcionControl.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.precioUniControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.precioUniControl.invalid && (ctx.precioUniControl.dirty || ctx.precioUniControl.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.precioConIva.toFixed(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.codigoVentaControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.codigoVentaControl.invalid && (ctx.codigoVentaControl.dirty || ctx.codigoVentaControl.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.cantidadControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cantidadControl.invalid && (ctx.cantidadControl.dirty || ctx.cantidadControl.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.camposCompletos ? "btn-success" : "btn-disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarMensaje);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".formulario-producto[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  \r\n  color: black;\r\n  \r\n  padding: 20px;\r\n  \r\n  border-radius: 5px;\r\n  \r\n}\r\n\r\n.formulario-producto[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  \r\n  margin-bottom: 10px;\r\n  \r\n}\r\n\r\n.formulario-producto[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .formulario-producto[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%], .formulario-producto[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  \r\n  padding: 8px;\r\n  \r\n  margin-bottom: 10px;\r\n  \r\n  border-radius: 4px;\r\n  \r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n  background-color: #336699;\r\n  \r\n  color: white;\r\n  \r\n  padding: 10px 20px;\r\n  \r\n  border-radius: 4px;\r\n  \r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]:hover {\r\n  background-color: #336699;\r\n  \r\n}\r\n\r\n.btn-disabled[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  \r\n  color: black;\r\n  \r\n  padding: 10px 20px;\r\n  \r\n  border-radius: 4px;\r\n  \r\n  cursor: not-allowed;\r\n  \r\n  pointer-events: none;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n  color: white;\r\n  \r\n  background-color: #dc3545;\r\n  \r\n  padding: 5px 10px;\r\n  \r\n  border-radius: 4px;\r\n  \r\n  margin-top: 5px;\r\n  \r\n}\r\n\r\n.mensaje-exito[_ngcontent-%COMP%] {\r\n  background-color: #d4edda;\r\n  \r\n  border-color: #c3e6cb;\r\n  \r\n  color: #155724;\r\n  \r\n  padding: 10px;\r\n  \r\n  border-radius: 5px;\r\n  \r\n  margin-top: 10px;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXJwcm9kdWN0by9jcmVhcnByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NyZWFycHJvZHVjdG8vY3JlYXJwcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm11bGFyaW8tcHJvZHVjdG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgLyogQ29sb3IgZGUgZm9uZG8gKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogQ29sb3IgZGVsIHRleHRvICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvKiBFc3BhY2lhZG8gaW50ZXJubyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBCb3JkZSByZWRvbmRlYWRvICovXHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvLXByb2R1Y3RvIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBNb3N0cmFyIGV0aXF1ZXRhcyBjb21vIGJsb3F1ZXMgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8qIEVzcGFjaWFkbyBpbmZlcmlvciAqL1xyXG59XHJcblxyXG4uZm9ybXVsYXJpby1wcm9kdWN0byBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmZvcm11bGFyaW8tcHJvZHVjdG8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuLmZvcm11bGFyaW8tcHJvZHVjdG8gc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBBbmNobyBjb21wbGV0byAqL1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICAvKiBFc3BhY2lhZG8gaW50ZXJubyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLyogRXNwYWNpYWRvIGluZmVyaW9yICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIEJvcmRlIHJlZG9uZGVhZG8gKi9cclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM2Njk5O1xyXG4gIC8qIENvbG9yIGRlIGZvbmRvIGRlbCBib3TDs24gZGUgw6l4aXRvICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qIENvbG9yIGRlbCB0ZXh0byBkZWwgYm90w7NuIGRlIMOpeGl0byAqL1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAvKiBFc3BhY2lhZG8gaW50ZXJubyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvKiBCb3JkZSByZWRvbmRlYWRvICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIENhbWJpYXIgZWwgY3Vyc29yIGFsIHBhc2FyIGVsIHJhdMOzbiAqL1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzY2OTk7XHJcbiAgLyogQ2FtYmlhciBjb2xvciBhbCBwYXNhciBlbCByYXTDs24gc29icmUgZWwgYm90w7NuIGRlIMOpeGl0byAqL1xyXG59XHJcblxyXG4uYnRuLWRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIC8qIENvbG9yIGRlIGZvbmRvIGRlbCBib3TDs24gZGVzaGFiaWxpdGFkbyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAvKiBDb2xvciBkZWwgdGV4dG8gZGVsIGJvdMOzbiBkZXNoYWJpbGl0YWRvICovXHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIC8qIEVzcGFjaWFkbyBpbnRlcm5vICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIEJvcmRlIHJlZG9uZGVhZG8gKi9cclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIC8qIENhbWJpYXIgZWwgY3Vyc29yIGEgbm8gcGVybWl0aWRvICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLyogQ29sb3IgZGVsIHRleHRvICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAvKiBDb2xvciBkZSBmb25kbyAqL1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIC8qIEVzcGFjaWFkbyBpbnRlcm5vICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIEJvcmRlIHJlZG9uZGVhZG8gKi9cclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLyogRXNwYWNpYWRvIHN1cGVyaW9yICovXHJcbn1cclxuXHJcbi5tZW5zYWplLWV4aXRvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gIC8qIENvbG9yIGRlIGZvbmRvIHZlcmRlIGNsYXJvICovXHJcbiAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xyXG4gIC8qIENvbG9yIGRlbCBib3JkZSB2ZXJkZSBjbGFybyAqL1xyXG4gIGNvbG9yOiAjMTU1NzI0O1xyXG4gIC8qIENvbG9yIGRlbCB0ZXh0byB2ZXJkZSBvc2N1cm8gKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIEVzcGFjaW8gYWxyZWRlZG9yIGRlbCBjb250ZW5pZG8gZGVsIG1lbnNhamUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLyogQm9yZGVzIHJlZG9uZGVhZG9zICovXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvKiBFc3BhY2lvIHN1cGVyaW9yICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrearproductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crearproducto',
                templateUrl: './crearproducto.component.html',
                styleUrls: ['./crearproducto.component.css']
            }]
    }], function () { return [{ type: _producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] }]; }, { nombreInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nombre']
        }], descripcionInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['descripcion']
        }], categoriaInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['categoria']
        }], precioUniInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['precioUni']
        }], precioIvaInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['precioIva']
        }], codVentaInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['codVenta']
        }], cantidadInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cantidad']
        }] }); })();


/***/ }),

/***/ "n+1Z":
/*!**********************************************************!*\
  !*** ./src/app/listaproducto/listaproducto.component.ts ***!
  \**********************************************************/
/*! exports provided: ListaproductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaproductoComponent", function() { return ListaproductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../producto.service */ "4X49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ListaproductoComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r1.name);
} }
class ListaproductoComponent {
    constructor(productoService) {
        this.productoService = productoService;
        this.productos = [];
    }
    ngOnInit() {
        this.getProductos();
    }
    getProductos() {
        this.productoService.getProductos()
            .subscribe(productos => this.productos = productos.slice(0, productos.length));
    }
}
ListaproductoComponent.ɵfac = function ListaproductoComponent_Factory(t) { return new (t || ListaproductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"])); };
ListaproductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaproductoComponent, selectors: [["app-listaproducto"]], decls: 4, vars: 1, consts: [[1, "grid", "grid-pad"], ["class", "col-1-4", 4, "ngFor", "ngForOf"], [1, "col-1-4"], [1, "module", "producto"]], template: function ListaproductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lista Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListaproductoComponent_a_3_Template, 4, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhcHJvZHVjdG8vbGlzdGFwcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaproductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listaproducto',
                templateUrl: './listaproducto.component.html',
                styleUrls: ['./listaproducto.component.css']
            }]
    }], function () { return [{ type: _producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buscarproducto_buscarproducto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscarproducto/buscarproducto.component */ "c2Qw");
/* harmony import */ var _detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalleproducto/detalleproducto.component */ "SQ6e");
/* harmony import */ var _listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listaproducto/listaproducto.component */ "n+1Z");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto/producto.component */ "W8R3");
/* harmony import */ var _crearproducto_crearproducto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crearproducto/crearproducto.component */ "lm/g");









const routes = [
    { path: '', redirectTo: '/buscar', pathMatch: 'full' },
    { path: 'buscartodos', component: _listaproducto_listaproducto_component__WEBPACK_IMPORTED_MODULE_4__["ListaproductoComponent"] },
    { path: 'crear', component: _producto_producto_component__WEBPACK_IMPORTED_MODULE_5__["ProductoComponent"] },
    { path: 'buscar', component: _buscarproducto_buscarproducto_component__WEBPACK_IMPORTED_MODULE_2__["BuscarproductoComponent"] },
    { path: 'nuevoproducto', component: _crearproducto_crearproducto_component__WEBPACK_IMPORTED_MODULE_6__["CrearproductoComponent"] },
    { path: 'detalle/:id', component: _detalleproducto_detalleproducto_component__WEBPACK_IMPORTED_MODULE_3__["DetalleproductoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map