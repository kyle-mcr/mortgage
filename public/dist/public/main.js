(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div id=\"container\">\n    <!-- News jumbotron -->\n    <div id=\"jumbo\" class=\"jumbotron text-center hoverable p-4\">\n      <!-- Grid row -->\n      <div class=\"row\">\n        <!-- Grid column -->\n        <div class=\"col-md-4 offset-md-1 mx-3 my-3\">\n          <!-- Featured image -->\n          <div class=\"view overlay\">\n            <img src=\"../../assets/img/house.png\" class=\"img-fluid\"\n              alt=\"Sample image for first version of blog listing\" />\n            <a>\n              <div class=\"mask rgba-white-slight\"></div>\n            </a>\n          </div>\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-7 text-md-left ml-3 mt-3\">\n          <h4 class=\"h4 mb-4\">Welcome to the Home Mortgage Estimator!</h4>\n\n          <p id=\"par\" class=\"font-weight-normal\">\n              Here at Home Mortgage Estimator we make the proccess of finding\n            the perfect home easier. This is intended for first time home buyers.\n            You will be asked a series of questions regarding your monthly\n            expenses and your monthly income. Don't worry, no data is stored\n            or viewed by anyone but you. If you are planning on buying a home\n            with a spouse, then repsond to each question with you and your\n            spouses responses added together.\n          </p>\n\n          <button class=\"button btn-success\" id=\"fadeButton\">\n            Let's get started!\n          </button>\n        </div>\n        <!-- Grid column -->\n      </div>\n      <!-- Grid row -->\n    </div>\n        <form id=\"form\" *ngIf=\"count!=18\" #checkForm=\"ngForm\" (ngSubmit)=\"getClicked(checkForm); counting()\" class=\"login-container\">\n          <div class=\"count\" id=\"_count\">\n            <h3 id=\"count\">{{ count + 1 }}/18</h3>\n          </div>\n\n          <label>\n            <div id=\"formcontainer\">\n            <h1 class=\"description\">{{ cards[count].description }}</h1>\n          </div>\n          </label>\n          <label id=\"inputField\"><i id=\"dollar\" class=\"fas fa-dollar-sign\"></i><i id=\"dollar\"\n              class=\"fas fa-dollar-sign\"></i><i id=\"dollar\" class=\"fas fa-dollar-sign\"></i><input type=\"number\"\n              name=\"numbersInForm[cards[count].description]\" [(ngModel)]=\"numbersInForm[cards[count].description]\" id=\"input\"\n              class=\"form-input\" placeholder=\"Ex: $100 or $0 if none\" /></label>\n          <button id=\"back\" type=\"button\" (click)=\"back()\"><i class=\"fas fa-hand-point-left\"></i>\n          </button>\n          <button id=\"bigbutton\" type=\"button\" type=\"submit\">\n            Next\n          </button>\n        </form>\n    <div id=\"cardContainer\" *ngIf=\"count==18 && finalAnswer>0\">\n\n      <div class=\"card border-light mb-3\" id=\"endCards\">\n        <div class=\"card-header\">Your results are in!</div>\n        <div class=\"card-body\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Monthly Income(${{income}}) - Monthly Expenses(${{expenses}}) = ${{calculate}} <i class=\"fas fa-hand-point-left\"></i>&ensp;This is your *Net Income.</li>\n            <li class=\"list-group-item\">Your maximum downpayment: ${{downPayment}} Interest rate found: 3%</li>\n            <li class=\"list-group-item\">Interest rate found: 3%</li>\n            <li class=\"list-group-item\">Below are various home prices you could afford from highest to lowest.</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"card border-light mb-3\" id=\"endCards\">\n        <div class=\"progress\" style=\"width:100%\"></div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">${{ commas }}</h5>\n          <p class=\"card-text\">This is what you could afford if you were to spend 100% of your *Net Income on a monthly house payment. \n            This would leave you with <span style=\"color:red; font-weight: bold; font-size:22px;\">$0</span> leftover.\n          </p>\n          <hr>\n          <p class=\"card-text\" id=\"body\"><i class=\"far fa-star\"></i>Your downpayment percentage for this house is {{ dpPercent }}%.<span *ngIf=\"dpPercent< 20\"> A downpayment less than 20% will require you to pay PMI(private mortgage insurance) that will cost you <i id=\"dollar\" class=\"fas fa-dollar-sign\"></i>{{ pmiMonthly }} per month.\n          Consider saving up more money to reduce your monthly payment or go for a cheaper house for now!</span></p>\n            <hr>\n            <p> <i class=\"fas fa-exclamation-circle\"></i>This is including an estimated\n              Property Tax and Home insurance based on home value. </p>\n        </div>\n      \n      </div>\n\n      <div class=\"card border-light mb-3\" id=\"endCards\">\n        <div class=\"progress\" style=\"width:50%\"></div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">${{ fiftyCommas }}</h5>\n          <p class=\"card-text\">This is what you could afford if you were to spend 50% of your *Net Income on a monthly house payment. \n            This would leave you with <span style=\"color:#d9ff00; font-weight: bold; font-size:22px;\">${{ fiftyLeft }}</span> leftover.\n          </p>\n          <hr>\n          <p class=\"card-text\" id=\"body\"><i class=\"far fa-star\"></i>Your downpayment percentage for this house is {{ dpPercent5 }}%.<span *ngIf=\"dpPercent5< 20\"> A downpayment less than 20% will require you to pay PMI(private mortgage insurance) that will cost you <i id=\"dollar\" class=\"fas fa-dollar-sign\"></i>{{ pmiMonthly5 }} per month.\n          Consider saving up more money to reduce your monthly payment or go for a cheaper house for now!</span></p>\n            <hr>\n            <p> <i class=\"fas fa-exclamation-circle\"></i>This is including an estimated\n              Property Tax and Home insurance based on home value. </p>\n        </div>\n      </div>\n\n      <div class=\"card border-light mb-3\" id=\"endCards\">\n        <div class=\"progress\" style=\"width:30%\"></div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">${{ thirtyCommas }}</h5>\n          <p class=\"card-text\">This is what you could afford if you were to spend 30% of your *Net Income on a monthly house payment. \n            This would leave you with <span style=\"color:green; font-weight: bold; font-size:22px;\">${{ thirtyLeft }}</span>  leftover.\n             \n          </p>\n          <hr>\n          <p class=\"card-text\" id=\"body\"><i class=\"far fa-star\"></i>Your downpayment percentage for this house is {{ dpPercent3 }}%.<span *ngIf=\"dpPercent3< 20\"> A downpayment less than 20% will require you to pay PMI(private mortgage insurance) that will cost you <i id=\"dollar\" class=\"fas fa-dollar-sign\"></i>{{ pmiMonthly3 }} per month.\n          Consider saving up more money to reduce your monthly payment or go for a cheaper house for now!</span></p> \n            <hr>\n            <p> <i class=\"fas fa-exclamation-circle\"></i>This is including an estimated\n              Property Tax and Home insurance based on home value. </p>\n        </div>\n      </div>\n    </div>\n    <div id=\"nohouse\" *ngIf=\"count==18 && finalAnswer<0\" class=\"card border-light mb-3\" style=\"max-width: 18rem;\">\n      <div class=\"card-header\">Uh-Oh!</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">It looks like you cant afford a house quite yet.</h5>\n        <p class=\"card-text\">Keep saving and check back later!</p>\n      </div>\n      </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [{ path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



 // <-- import FormsModule.





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto|Sriracha&display=swap\");\n#container {\n  padding-top: 1.3%;\n  padding-bottom: 3%;\n  background-size: cover;\n  min-height: 900px;\n  min-width: 100%;\n  background-image: url('desrt.jpg');\n}\n#jumbo {\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 10%;\n  background-color: rgba(192, 192, 192, 0.747);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n}\n#nohouse {\n  width: 80%;\n  margin: 10% 10% 10% 10%;\n}\n#par {\n  font-size: large;\n}\n#fadeButton {\n  color: white !important;\n  text-transform: uppercase;\n  background: #d5c188;\n  background: linear-gradient(47deg, #d5c188 0%, #d5c188 0%, #637155 83%);\n  padding: 20px;\n  width: 100%;\n  border: 4px solid #637155 !important;\n  border-radius: 6px;\n  display: inline-block;\n  transition: all 0.3s ease 0s;\n  margin-top: 5%;\n}\n#fadeButton:hover {\n  color: #494949 !important;\n  border-radius: 50px;\n  background: #637155;\n  background: linear-gradient(47deg, #637155 4%, #d5c188 80%, #d5c188 100%);\n  border-color: #d5c188 !important;\n  transition: all 0.3s ease 0s;\n}\n#back {\n  width: 10%;\n  height: 80px;\n  display: inline-block;\n  font-size: 2rem;\n  color: #fffffb;\n  border: none;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  background: #020024;\n  background: linear-gradient(32deg, #020024 0%, #b84e02 35%, #ffe19b 100%);\n  background-size: 300% 300%;\n  outline: none;\n  transition: all 200ms ease-in-out;\n}\n#back:hover {\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  transform: translateY(2px);\n  -webkit-animation: gradientBG 1.5s ease-in-out forwards;\n  animation: gradientBG 1.5s ease-in-out forwards;\n  cursor: pointer;\n}\n#back:active {\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  transform: translateY(4px);\n}\n.login-container {\n  height: 40%;\n  width: 50%;\n  padding: 3%;\n  margin-left: 25%;\n  margin-top: 10%;\n  display: none;\n  border-radius: 5px;\n  background: #fffffb;\n  position: relative;\n  background-color: rgba(192, 192, 192, 0.842);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n}\n.login-container #count {\n  -webkit-animation: glow 0.7s infinite alternate;\n          animation: glow 0.7s infinite alternate;\n}\n@-webkit-keyframes glow {\n  to {\n    text-shadow: 0 0 12px #ffa600;\n  }\n}\n@keyframes glow {\n  to {\n    text-shadow: 0 0 12px #ffa600;\n  }\n}\n.login-container .count {\n  height: 90px;\n  width: 90px;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  background-color: #87B0F9;\n  top: -35px;\n  left: -35px;\n  border-radius: 50%;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n}\n.login-container h3 {\n  font-family: \"Sriracha\", arial, sans-serif;\n  text-align: center;\n  color: white;\n  margin-top: 33%;\n}\n.login-container h1 {\n  font-family: \"Sriracha\", arial, sans-serif;\n  text-align: center;\n  width: 100%;\n  color: #637255;\n}\n.login-container #input {\n  width: 60%;\n  height: 100%;\n}\n.login-container #inputField {\n  margin-left: 23%;\n  width: 70%;\n  height: 10%;\n  margin-top: 8%;\n  font-size: 22px;\n  font-family: \"Sriracha\", arial, sans-serif;\n}\n.login-container #dollar {\n  color: #00c200;\n  font-size: 2.2vh;\n  margin-right: 4px;\n  padding: 0px;\n  line-height: 100%;\n}\n.login-container #bigbutton {\n  width: 87%;\n  margin-left: 3%;\n  margin-top: 15px;\n  height: 80px;\n  font-size: 2rem;\n  color: #fffffb;\n  display: inline-block;\n  border: none;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  background: linear-gradient(45deg, #FFDF9A, #637255, #637255, #FFDF9A);\n  background-size: 300% 300%;\n  outline: none;\n  transition: all 200ms ease-in-out;\n}\n.login-container #bigbutton:hover {\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  transform: translateY(2px);\n  -webkit-animation: gradientBG 1.5s ease-in-out forwards;\n  animation: gradientBG 1.5s ease-in-out forwards;\n  cursor: pointer;\n}\n.login-container #bigbutton:active {\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  transform: translateY(4px);\n}\n@-webkit-keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n}\n#finalA {\n  width: 100%;\n  max-width: 300px;\n  border-radius: 5px;\n  margin-left: 30%;\n  margin-top: 10%;\n  height: 100%;\n  background-color: rgba(128, 128, 128, 0.726);\n  padding: 5%;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n}\n#answer {\n  margin-left: 14%;\n  margin-top: 16%;\n}\n#cardContainer {\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 2%;\n}\n.list-group-item {\n  font-size: 20px;\n}\n.card-title {\n  color: #000000;\n  font-size: 26px;\n  text-shadow: 0 0 3vw #00c53b;\n}\n.card-title {\n  animation: card-title 1.2s ease-in-out;\n  -moz-animation: card-title 1.2s ease-in-out;\n  -webkit-animation: card-title 1.2s ease-in-out;\n}\n@-webkit-keyframes card-title {\n  0%, 100% {\n    text-shadow: 0 0 1vw #00c53b, 0 0 1vw #00c53b;\n  }\n  50% {\n    text-shadow: 0 0 0.5vw #0f800b, 0 0 1.5vw #2cbb00;\n  }\n}\n@keyframes card-title {\n  0%, 100% {\n    text-shadow: 0 0 1vw #00c53b, 0 0 1vw #00c53b;\n  }\n  50% {\n    text-shadow: 0 0 0.5vw #0f800b, 0 0 1.5vw #2cbb00;\n  }\n}\n#endCards {\n  width: 100%;\n  margin: 3%;\n  background-color: rgba(233, 233, 233, 0.815);\n}\n.progress {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n.card-text {\n  font-size: 20px;\n}\n.card-header {\n  font-size: 24px;\n}\n#body {\n  font-size: 20px;\n}\n.progress:before {\n  -webkit-animation: slideIn 2s ease-out;\n          animation: slideIn 2s ease-out;\n  background-color: #00c41a;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.content {\n  position: relative;\n}\n.percentage {\n  text-align: right;\n}\n@-webkit-keyframes slideIn {\n  0% {\n    background-color: #00db30;\n    width: 0;\n  }\n  100% {\n    background-color: #00c41a;\n    width: 100%;\n  }\n}\n@keyframes slideIn {\n  0% {\n    background-color: #00db30;\n    width: 0;\n  }\n  100% {\n    background-color: #00c41a;\n    width: 100%;\n  }\n}\n.outcome, .descript {\n  display: inline-block;\n}\n.outcome {\n  color: #00ce3e;\n}\n@media only screen and (max-width: 480px) {\n  .description {\n    margin-top: 18%;\n  }\n\n  #endCards {\n    min-width: 90%;\n  }\n\n  #form {\n    width: 80%;\n    height: 100%;\n    margin: 30% 5% 0% 10%;\n  }\n\n  #bigbutton {\n    max-width: 70%;\n  }\n\n  #back {\n    width: 20%;\n  }\n\n  #inputField {\n    margin-left: 10%;\n  }\n\n  #cardContainer {\n    width: 90%;\n    margin-top: 2%;\n    margin-left: 3%;\n  }\n\n  #jumbo {\n    width: 90%;\n    margin-left: 5%;\n  }\n\n  #par {\n    font-size: 22px;\n  }\n\n  #input {\n    min-width: 100%;\n    margin-left: -10%;\n  }\n\n  label {\n    width: 100%;\n  }\n\n  #dollar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWxlbWNyZXlub2xkcy9EZXNrdG9wL21vcnRnYWdlL3B1YmxpYy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EUSxtRkFBQTtBQWxEUjtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQ0Y7QURHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUdBLCtDQUFBO0FDQUY7QURHQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtBQ0FGO0FERUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQ0VGO0FET0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBVlc7RUFXWCxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FES0U7RUFDRSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdURBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7QUNISjtBREtFO0VBQ0UsMENBQUE7RUFDQSwwQkFBQTtBQ0hKO0FET0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkF4Q1c7RUF5Q1gsa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDJDQUFBO0FDSkY7QURNRTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNKSjtBRE9BO0VBQ0k7SUFDSSw2QkFBQTtFQ0xOO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksNkJBQUE7RUNMTjtBQUNGO0FET0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDTEo7QURPRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xKO0FET0U7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBMUVVO0FDcUVkO0FET0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0xKO0FET0U7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQ0xOO0FET0U7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xOO0FEUUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQXhHUztFQXlHVCxxQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFPQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQ1pKO0FEYUk7RUFDRSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdURBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7QUNYTjtBRGFJO0VBQ0UsMENBQUE7RUFDQSwwQkFBQTtBQ1hOO0FEZUE7RUFDRTtJQUNFLDJCQUFBO0VDYkY7RURlQTtJQUNFLDZCQUFBO0VDYkY7QUFDRjtBRGtCQTtFQUNFO0lBQ0UsMkJBQUE7RUNoQkY7RURrQkE7SUFDRSw2QkFBQTtFQ2hCRjtBQUNGO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBR0EsK0NBQUE7QUNuQkY7QURzQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNuQkY7QURzQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZUFBQTtBQ25CRjtBRHNCQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNuQkE7QURxQkE7RUFDQSxzQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7QUNsQkE7QURvQkE7RUFDQTtJQUVFLDZDQUFBO0VDbEJBO0VEb0JGO0lBQ0UsaURBQUE7RUNsQkE7QUFDRjtBRFdBO0VBQ0E7SUFFRSw2Q0FBQTtFQ2xCQTtFRG9CRjtJQUNFLGlEQUFBO0VDbEJBO0FBQ0Y7QURxQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUNuQkY7QURxQkE7RUFDRSxlQUFBO0FDbEJGO0FEb0JBO0VBQ0UsZUFBQTtBQ2pCRjtBRG9CQTtFQUNFLGVBQUE7QUNqQkY7QURtQkE7RUFDRSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDaEJGO0FEbUJBO0VBQ0Usa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtBQ2hCRjtBRG1CQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxRQUFBO0VDaEJGO0VEa0JBO0lBQ0UseUJBQUE7SUFDQSxXQUFBO0VDaEJGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxRQUFBO0VDaEJGO0VEa0JBO0lBQ0UseUJBQUE7SUFDQSxXQUFBO0VDaEJGO0FBQ0Y7QURtQkE7RUFDRSxxQkFBQTtBQ2pCRjtBRG1CQTtFQUNFLGNBQUE7QUNoQkY7QURrQkE7RUFDQTtJQUNFLGVBQUE7RUNmQTs7RURrQkY7SUFDRSxjQUFBO0VDZkE7O0VEaUJGO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQ2RBOztFRGdCRjtJQUNFLGNBQUE7RUNiQTs7RURlRjtJQUNFLFVBQUE7RUNaQTs7RURjRjtJQUNFLGdCQUFBO0VDWEE7O0VEY0Y7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUNYQTs7RURhRjtJQUNFLFVBQUE7SUFDQSxlQUFBO0VDVkE7O0VEWUY7SUFDRSxlQUFBO0VDVEE7O0VEV0Y7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNSQTs7RURZRjtJQUNFLFdBQUE7RUNUQTs7RURXRjtJQUNFLGFBQUE7RUNSQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jY29udGFpbmVye1xuICBwYWRkaW5nLXRvcDogMS4zJTtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiA5MDBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZGVzcnQuanBnJyk7XG59XG5cblxuI2p1bWJvIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNzQ3KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNub2hvdXNle1xuICB3aWR0aDo4MCU7XG4gIG1hcmdpbjogMTAlIDEwJSAxMCUgMTAlO1xufVxuXG4jcGFye1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuI2ZhZGVCdXR0b24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogcmdiKDIxMywxOTMsMTM2KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCByZ2JhKDIxMywxOTMsMTM2LDEpIDAlLCByZ2JhKDIxMywxOTMsMTM2LDEpIDAlLCByZ2JhKDk5LDExMyw4NSwxKSA4MyUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDoxMDAlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjNjM3MTU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICBtYXJnaW4tdG9wOjUlO1xufVxuI2ZhZGVCdXR0b246aG92ZXIge1xuICBjb2xvcjogIzQ5NDk0OSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoOTksMTEzLDg1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCByZ2JhKDk5LDExMyw4NSwxKSA0JSwgcmdiYSgyMTMsMTkzLDEzNiwxKSA4MCUsIHJnYmEoMjEzLDE5MywxMzYsMSkgMTAwJSk7XG4gIGJvcmRlci1jb2xvcjogI2Q1YzE4OCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98U3JpcmFjaGEmZGlzcGxheT1zd2FwXCIpO1xuJGJhY2tncm91bmQ6ICNmZmZmZmI7XG4kYWNjZW50OiAjRkZERjlBO1xuJG90aGVyQWNjZW50OiAjNjM3MjU1O1xuJGRhcmtCYWNrZ3JvdW5kOiAjNWI1Zjk3O1xuXG4jYmFjayB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMmRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMTg0LDc4LDIsMSkgMzUlLCByZ2JhKDI1NSwyMjUsMTU1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdyYWRpZW50QkcgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGdyYWRpZW50QkcgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMlO1xuICBtYXJnaW4tbGVmdDoyNSU7XG4gIG1hcmdpbi10b3A6MTAlO1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC44NDIpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBcbiAgI2NvdW50IHtcbiAgICBhbmltYXRpb246IGdsb3cgLjdzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBnbG93IHtcbiAgICB0byB7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTJweCByZ2IoMjU1LCAxNjYsIDApO1xuICAgIH1cbn1cbiAgLmNvdW50IHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6Izg3QjBGOTtcbiAgICB0b3A6IC0zNXB4O1xuICAgIGxlZnQ6IC0zNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIGgze1xuICAgIGZvbnQtZmFtaWx5OiBcIlNyaXJhY2hhXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMzMlO1xuICB9XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJTcmlyYWNoYVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBjb2xvcjogJG90aGVyQWNjZW50O1xuICB9XG4gICNpbnB1dCB7XG4gICAgd2lkdGg6NjAlO1xuICAgIGhlaWdodDoxMDAlO1xuICB9XG4gICNpbnB1dEZpZWxke1xuICAgICAgbWFyZ2luLWxlZnQ6MjMlO1xuICAgICAgd2lkdGg6NzAlO1xuICAgICAgaGVpZ2h0OjEwJTtcbiAgICAgIG1hcmdpbi10b3A6IDglO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiU3JpcmFjaGFcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgI2RvbGxhcntcbiAgICAgIGNvbG9yOnJnYigwLCAxOTQsIDApO1xuICAgICAgZm9udC1zaXplOjIuMnZoO1xuICAgICAgbWFyZ2luLXJpZ2h0OjRweDtcbiAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAjYmlnYnV0dG9uIHtcbiAgICB3aWR0aDogODclO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICAkYWNjZW50LFxuICAgICAgJG90aGVyQWNjZW50LFxuICAgICAgJG90aGVyQWNjZW50LFxuICAgICAgJGFjY2VudFxuICAgICk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDMwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBncmFkaWVudEJHIDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgICBhbmltYXRpb246IGdyYWRpZW50QkcgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gICAgfVxuICB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBncmFkaWVudEJHIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAvLyAxMDAlIHtcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIC8vIH1cbn1cbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgLy8gMTAwJSB7XG4gIC8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAvLyB9XG59XG59XG4jZmluYWxBe1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOjMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OjMwJTtcbiAgbWFyZ2luLXRvcDoxMCU7XG4gIGhlaWdodDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzI2KTtcbiAgcGFkZGluZzogNSU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBcbn1cbiNhbnN3ZXJ7XG4gIG1hcmdpbi1sZWZ0OiAxNCU7XG4gIG1hcmdpbi10b3A6IDE2JTtcbn1cblxuI2NhcmRDb250YWluZXJ7XG4gIHdpZHRoOjUwJTtcbiAgbWFyZ2luLWxlZnQ6MjUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbXtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZC10aXRsZXsgXG5jb2xvcjogIzAwMDAwMDtcbmZvbnQtc2l6ZTogMjZweDtcbnRleHQtc2hhZG93OiAwIDAgM3Z3ICMwMGM1M2I7XG59XG4uY2FyZC10aXRsZSB7XG5hbmltYXRpb246IGNhcmQtdGl0bGUgMS4ycyBlYXNlLWluLW91dDtcbi1tb3otYW5pbWF0aW9uOiBjYXJkLXRpdGxlIDEuMnMgZWFzZS1pbi1vdXQ7XG4td2Via2l0LWFuaW1hdGlvbjogY2FyZC10aXRsZSAxLjJzIGVhc2UtaW4tb3V0O1xufVxuQGtleWZyYW1lcyBjYXJkLXRpdGxlIHtcbjAlLFxuMTAwJSB7XG4gIHRleHQtc2hhZG93OiAwIDAgMXZ3ICMwMGM1M2IsIDAgMCAxdncgIzAwYzUzYjtcbn1cbjUwJSB7XG4gIHRleHQtc2hhZG93OiAwIDAgLjV2dyAjMGY4MDBiLCAwIDAgMS41dncgIzJjYmIwMDtcbn1cbn1cblxuI2VuZENhcmRze1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjgxNSk7XG59XG5cbi5wcm9ncmVzcyB7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbn1cbi5jYXJkLXRleHR7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXJkLWhlYWRlcntcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jYm9keXtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2dyZXNzOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjpzbGlkZUluIDJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxOTYsIDI2KTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgY29udGVudDpcIlwiO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5wZXJjZW50YWdlIHtcbiAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDIxOSwgNDgpO1xuICAgIHdpZHRoOjA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwgMTk2LCAyNik7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxufVxuXG4ub3V0Y29tZSwgLmRlc2NyaXB0e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ub3V0Y29tZXtcbiAgY29sb3I6cmdiKDAsIDIwNiwgNjIpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuLmRlc2NyaXB0aW9ue1xuICBtYXJnaW4tdG9wOjE4JTtcblxufVxuI2VuZENhcmRze1xuICBtaW4td2lkdGg6OTAlO1xufVxuI2Zvcm17XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDoxMDAlO1xuICBtYXJnaW46IDMwJSA1JSAwJSAxMCU7XG59XG4jYmlnYnV0dG9ue1xuICBtYXgtd2lkdGg6NzAlO1xufVxuI2JhY2t7XG4gIHdpZHRoOiAyMCU7XG59XG4jaW5wdXRGaWVsZHtcbiAgbWFyZ2luLWxlZnQ6MTAlO1xuXG59XG4jY2FyZENvbnRhaW5lcntcbiAgd2lkdGg6OTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuI2p1bWJve1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4jcGFye1xuICBmb250LXNpemU6IDIycHg7XG59XG4jaW5wdXR7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6LTEwJTtcbiAgXG59XG5cbmxhYmVse1xuICB3aWR0aDogMTAwJTtcbn1cbiNkb2xsYXJ7XG4gIGRpc3BsYXk6bm9uZTtcbn1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xuXG5cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG98U3JpcmFjaGEmZGlzcGxheT1zd2FwXCIpO1xuI2NvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxLjMlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDkwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZGVzcnQuanBnXCIpO1xufVxuXG4janVtYm8ge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC43NDcpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuI25vaG91c2Uge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDEwJSAxMCUgMTAlIDEwJTtcbn1cblxuI3BhciB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbiNmYWRlQnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6ICNkNWMxODg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0N2RlZywgI2Q1YzE4OCAwJSwgI2Q1YzE4OCAwJSwgIzYzNzE1NSA4MyUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiA0cHggc29saWQgIzYzNzE1NSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbiNmYWRlQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM0OTQ5NDkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogIzYzNzE1NTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ3ZGVnLCAjNjM3MTU1IDQlLCAjZDVjMTg4IDgwJSwgI2Q1YzE4OCAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjZDVjMTg4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbiNiYWNrIHtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNmZmZmZmI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDIwMDI0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzJkZWcsICMwMjAwMjQgMCUsICNiODRlMDIgMzUlLCAjZmZlMTliIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuI2JhY2s6aG92ZXIge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZ3JhZGllbnRCRyAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICBhbmltYXRpb246IGdyYWRpZW50QkcgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2JhY2s6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjg0Mik7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ubG9naW4tY29udGFpbmVyICNjb3VudCB7XG4gIGFuaW1hdGlvbjogZ2xvdyAwLjdzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbkBrZXlmcmFtZXMgZ2xvdyB7XG4gIHRvIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEycHggI2ZmYTYwMDtcbiAgfVxufVxuLmxvZ2luLWNvbnRhaW5lciAuY291bnQge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3QjBGOTtcbiAgdG9wOiAtMzVweDtcbiAgbGVmdDogLTM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5sb2dpbi1jb250YWluZXIgaDMge1xuICBmb250LWZhbWlseTogXCJTcmlyYWNoYVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDMzJTtcbn1cbi5sb2dpbi1jb250YWluZXIgaDEge1xuICBmb250LWZhbWlseTogXCJTcmlyYWNoYVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM2MzcyNTU7XG59XG4ubG9naW4tY29udGFpbmVyICNpbnB1dCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dpbi1jb250YWluZXIgI2lucHV0RmllbGQge1xuICBtYXJnaW4tbGVmdDogMjMlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogOCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiU3JpcmFjaGFcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG59XG4ubG9naW4tY29udGFpbmVyICNkb2xsYXIge1xuICBjb2xvcjogIzAwYzIwMDtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tY29udGFpbmVyICNiaWdidXR0b24ge1xuICB3aWR0aDogODclO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogODBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2ZmZmZmYjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkZERjlBLCAjNjM3MjU1LCAjNjM3MjU1LCAjRkZERjlBKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDMwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5sb2dpbi1jb250YWluZXIgI2JpZ2J1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBncmFkaWVudEJHIDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnRCRyAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW4tY29udGFpbmVyICNiaWdidXR0b246YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBncmFkaWVudEJHIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBncmFkaWVudEJHIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxufVxuXG4jZmluYWxBIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43MjYpO1xuICBwYWRkaW5nOiA1JTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNhbnN3ZXIge1xuICBtYXJnaW4tbGVmdDogMTQlO1xuICBtYXJnaW4tdG9wOiAxNiU7XG59XG5cbiNjYXJkQ29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzdncgIzAwYzUzYjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBhbmltYXRpb246IGNhcmQtdGl0bGUgMS4ycyBlYXNlLWluLW91dDtcbiAgLW1vei1hbmltYXRpb246IGNhcmQtdGl0bGUgMS4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcmQtdGl0bGUgMS4ycyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBjYXJkLXRpdGxlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMXZ3ICMwMGM1M2IsIDAgMCAxdncgIzAwYzUzYjtcbiAgfVxuICA1MCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMC41dncgIzBmODAwYiwgMCAwIDEuNXZ3ICMyY2JiMDA7XG4gIH1cbn1cbiNlbmRDYXJkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjMzLCAyMzMsIDAuODE1KTtcbn1cblxuLnByb2dyZXNzIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jYm9keSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2dyZXNzOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAycyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzQxYTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGVyY2VudGFnZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZGIzMDtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNDFhO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ub3V0Y29tZSwgLmRlc2NyaXB0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub3V0Y29tZSB7XG4gIGNvbG9yOiAjMDBjZTNlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTglO1xuICB9XG5cbiAgI2VuZENhcmRzIHtcbiAgICBtaW4td2lkdGg6IDkwJTtcbiAgfVxuXG4gICNmb3JtIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDMwJSA1JSAwJSAxMCU7XG4gIH1cblxuICAjYmlnYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgfVxuXG4gICNiYWNrIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbiAgI2lucHV0RmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cblxuICAjY2FyZENvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gIH1cblxuICAjanVtYm8ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG5cbiAgI3BhciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgI2lucHV0IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAjZG9sbGFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.cards = [
            {
                description: "Do you have a monthly student loan payment?",
            },
            {
                description: "Do you have a monthly car loan payment?",
            },
            {
                description: "Do you have a monthly car insurance payment?",
            },
            {
                description: "How much do you estimate you spend on gas for your car monthly?",
            },
            {
                description: "How much do you estimate you spend on car maintenance and repair per month?",
            },
            {
                description: "Do you have any monthly health/dental expenses (i.e. health insurance, medical bills, prescription drugs) ?",
            },
            {
                description: "How much do you estimate you spend on groceries and essential supplies per month?",
            },
            {
                description: "Do you pay for a monthly fitness membership?",
            },
            {
                description: "Do you pay for any monthly streaming services?",
            },
            {
                description: "Do you pay for a monthly phone bill?",
            },
            {
                description: "How much do you estimate you spend on dining out per month?",
            },
            {
                description: "Estimated monthly cost for reacreation and entertainment?",
            },
            {
                description: "Do you pay for child care or child support?",
            },
            {
                description: "Any other monthly expenses that weren't accounted for please add them here(other than rent, electricity, and internet/cable).",
            },
            {
                description: "What is your total household monthly income after taxes?",
            },
            {
                description: "Do you recieve any other monthly benefits(social security benefits, disability income, etc) ?",
            },
            {
                description: "Do you have any other sources of perpetual monthly income?",
            },
            {
                description: "How much money do you have saved that you can put towards a downpayment on a house?",
            },
        ];
        this.numbersInForm = {};
        this.hideme = [];
        this.allNumbs = [];
        this.newObj = {};
        this.newArry = [];
        this.count = 0;
        this.isNaN = Number.isNaN;
        this.newString = "";
        this.visibleIndex = 0;
    }
    ngOnInit() {
        (function ($) {
            $(document).ready(function () {
                $("button").click(function () {
                    $("#jumbo, #fadeButton").hide(200, "linear");
                    $("form").show(200, "linear");
                });
            });
        })(jQuery);
    }
    getClicked() {
        this.newObj = {};
        const newObj = Object.assign({}, ...Object.values(this.numbersInForm).map((v, i) => ({ [i + 1]: v })));
        let allNumbs = Object.values(newObj);
        console.log(allNumbs);
        this.downPayment = allNumbs[allNumbs.length - 1];
        this.calculate = 0;
        this.house = 0;
        this.expenses = allNumbs[0];
        this.income = allNumbs[14];
        if ((allNumbs.length = 18)) {
            for (var j = 1; j <= 16; j++) {
                if (j < 14) {
                    this.expenses += allNumbs[j];
                }
                if (j >= 15) {
                    this.income += allNumbs[j];
                }
                this.calculate = this.income - this.expenses;
            }
        }
        console.log("expenses", this.expenses);
        console.log("income", this.income);
        console.log("income-expenses", this.calculate);
        console.log("downpayment", this.downPayment);
        this.calculateHouse();
    }
    counting() {
        this.count++;
        console.log("count is", this.count);
    }
    back() {
        if (this.count >= 0) {
            this.count--;
        }
    }
    calculateHouse() {
        // 100% of net income calculation //
        this.mortgageRateFound = 0.0025;
        this.leftSide = Math.pow(1 + this.mortgageRateFound, 360);
        this.rightSide = Math.pow(1 + this.mortgageRateFound, 360) - 1;
        this.brackets = (this.mortgageRateFound * this.leftSide) / (this.rightSide);
        console.log("brackets", this.brackets);
        this.formula = (this.downPayment * this.brackets) + this.calculate;
        console.log("formula", this.formula);
        this.finalFormula = (this.formula / this.brackets);
        console.log("finalformula,", this.finalFormula);
        // 100% of net income calculation - estimated property tax//
        this.propTax = (this.finalFormula / 30 / 12) * .22;
        this.propTax = (this.propTax * 30 * 12);
        this.pmi = (this.finalFormula * .08);
        this.pmiMonthly = Math.trunc(this.pmi / 30 / 12);
        console.log("PMI", this.pmi);
        this.finalFormula = (this.finalFormula - this.propTax);
        this.dpPercent = Math.trunc((this.downPayment / this.finalFormula) * 100);
        console.log("down payment percentage", this.dpPercent);
        console.log("final formula", this.finalFormula);
        console.log("100", this.finalFormula);
        if (this.dpPercent < 20) {
            this.finalFormula = (this.finalFormula - this.pmi);
        }
        console.log("down payment percent", this.dpPercent);
        console.log("proptx", this.propTax);
        console.log("100", this.finalFormula);
        // 50% of net income calculation - estimated property tax//
        this.fifty = Math.trunc((this.calculate / 2) / this.brackets + this.downPayment);
        this.propTax50 = (this.fifty / 30 / 12) * .22;
        this.propTax50m = this.propTax50;
        this.propTax50 = (this.propTax50 * 30 * 12);
        this.pmi5 = (this.fifty * .08);
        this.pmiMonthly5 = Math.trunc(this.pmi5 / 30 / 12);
        console.log("proptax50", this.propTax50);
        console.log("PMI50", this.pmi5);
        console.log("50 down payment and fifty ", this.downPayment, this.fifty);
        this.fifty = (this.fifty - this.propTax50);
        this.dpPercent5 = Math.trunc((this.downPayment / this.fifty) * 100);
        console.log("doen payment percent 50%", this.dpPercent5);
        console.log("fifty", this.fifty);
        if (this.dpPercent5 < 20) {
            this.fifty = (this.fifty - this.pmi);
        }
        console.log("fifty", this.fifty);
        this.fiftyCommas = Math.trunc(this.fiftyCommas);
        this.fiftyCommas = this.fifty.toLocaleString();
        // 30% of net income calculation - estimated property tax//
        this.thirty = Math.trunc((this.calculate * .3) / this.brackets + this.downPayment);
        this.propTax30 = (this.thirty / 30 / 12) * .22;
        this.propTax30m = this.propTax30;
        this.propTax30 = (this.propTax30 * 30 * 12);
        this.pmi3 = (this.thirty * .08);
        this.pmiMonthly3 = Math.trunc(this.pmi3 / 30 / 12);
        console.log("proptax30", this.propTax30);
        console.log("PMI30", this.pmi3);
        console.log("30 down payment and thirty ", this.downPayment, this.thirty);
        this.thirty = (this.thirty - this.propTax30);
        this.dpPercent3 = Math.trunc((this.downPayment / this.thirty) * 100);
        console.log("doen payment percent 30%", this.dpPercent3);
        console.log("thirty", this.thirty);
        if (this.dpPercent3 < 20) {
            this.thirty = (this.thirty - this.pmi);
        }
        console.log("thirty", this.thirty);
        this.thirtyCommas = Math.trunc(this.thirtyCommas);
        this.thirtyCommas = this.thirty.toLocaleString();
        // Calculation of left over amount after mortgage payment for 30% & 50%//
        this.thirtyLeftover = Math.trunc(this.calculate - (this.calculate * .3) - this.propTax30m);
        this.thirtyLeft = this.thirtyLeftover.toLocaleString();
        this.FiftyLeftover = Math.trunc(this.calculate - (this.calculate / 2) - this.propTax50m);
        this.fiftyLeft = this.FiftyLeftover.toLocaleString();
        console.log("100%", this.formula);
        console.log("50%", this.fifty);
        console.log("30%", this.thirty);
        console.log("30 left", this.thirtyLeft);
        console.log("50 left", this.fiftyLeft);
        // final calculations of 100% mortgage and other data for display //
        this.finalAnswer = Math.trunc(this.finalFormula);
        this.commas = this.finalAnswer.toLocaleString();
        console.log("yoou can afford", this.commas);
        this.expenses = this.expenses.toLocaleString();
        this.income = this.income.toLocaleString();
        this.calculate = this.calculate.toLocaleString();
        this.downPayment = this.downPayment.toLocaleString();
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HttpService = class HttpService {
    constructor() { }
};
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kylemcreynolds/Desktop/mortgage/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map