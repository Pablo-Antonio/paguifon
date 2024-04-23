"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 678);






var routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage
}];

var HomePageRoutingModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomePageRoutingModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomePageRoutingModule);
});

HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);











var HomePageModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomePageModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomePageModule);
});

HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage]
})], HomePageModule);


/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _assets_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/data */ 1384);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);









var HomePage = /*#__PURE__*/function () {
  function HomePage(iab) {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    this.iab = iab;
    this.title = '';
    this.pages = _assets_data__WEBPACK_IMPORTED_MODULE_4__.routes;
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "errorImg",
    value: function errorImg(ev) {}
  }, {
    key: "openFb",
    value: function openFb() {
      var browser = this.iab.create('https://www.facebook.com/paguifon/ ');
      browser.show();
    }
  }, {
    key: "openIg",
    value: function openIg() {
      var browser = this.iab.create(' https://www.instagram.com/paguifonmexico/?hl=es-la');
      browser.show();
    }
  }, {
    key: "openTT",
    value: function openTT() {
      var browser = this.iab.create('https://www.tiktok.com/@paguifonmexico');
      browser.show();
    }
  }, {
    key: "openAdd",
    value: function openAdd() {
      var browser = this.iab.create('https://addinteli.com.mx/');
      browser.show();
    }
  }, {
    key: "openTopup",
    value: function openTopup() {
      var browser = this.iab.create('https://byplus.io/paguifon');
      browser.show();
    }
  }, {
    key: "openPagui",
    value: function openPagui() {
      var browser = this.iab.create('https://paguifon.com.mx/');
      browser.show();
    }
  }]);

  return HomePage;
}();

HomePage.ctorParameters = function () {
  return [{
    type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
  }];
};

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__
})], HomePage);


/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "<ion-content>\r\n  <div class=\"text_end\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <img src=\"../../../assets/img/FB.png\" (click)=\"openFb()\" width=\"30px\" />\r\n        <img src=\"../../../assets/img/IG.png\" (click)=\"openIg()\" width=\"30px\" />\r\n        <img src=\"../../../assets/img/TT.png\" (click)=\"openTT()\" width=\"30px\" />\r\n      </div>\r\n      <br />\r\n      <a (click)=\"openPagui()\">paguifon.com.mx</a>\r\n      <br><br>\r\n      <a [routerLink]=\"['/notice-privacy']\">Aviso de privacidad</a>\r\n      <a [routerLink]=\"['/terms-conditions']\">Términos y condiciones</a>\r\n    </div>\r\n    <p (click)=\"openAdd()\">Powered by Addinteli 2022</p>\r\n  </div>\r\n  <div style=\"margin: 50px 0px; text-align: center\">\r\n    <img src=\"../../../assets/img/logoPaguifon.png\" width=\"55%\" />\r\n    <br />\r\n    <br />\r\n    <h1>Menú principal</h1>\r\n  </div>\r\n  <app-page-title [title]=\"title\"></app-page-title>\r\n  <ion-button [routerLink]=\"['/balance']\" expand=\"block\" color=\"white\">\r\n    <div class=\"text_left\">\r\n      <ion-icon slot=\"start\" name=\"square\"></ion-icon>\r\n      Consulta tu saldo\r\n    </div>\r\n  </ion-button>\r\n  <ion-button (click)=\"openTopup()\" expand=\"block\" color=\"white\">\r\n    <div class=\"text_left\">\r\n      <ion-icon slot=\"start\" name=\"square\"></ion-icon>\r\n      Recargar plan\r\n    </div>\r\n  </ion-button>\r\n  <ion-button [routerLink]=\"['/info']\" expand=\"block\" color=\"white\">\r\n    <div class=\"text_left\">\r\n      <ion-icon slot=\"start\" name=\"square\"></ion-icon>\r\n      Contacto\r\n    </div>\r\n  </ion-button>\r\n</ion-content>\r\n\r\n<style>\r\n  ion-content {\r\n    --background: #fff;\r\n    border-bottom: 10px solid #FF0054;\r\n    border-top: 20px solid #FF0054;\r\n  }\r\n\r\n  @font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../../../assets/fonts/Montserrat-Medium.ttf\");\r\n  }\r\n\r\n  * {\r\n    font-family: \"Montserrat\";\r\n    color: #000;\r\n  }\r\n\r\n  ion-button {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: auto;\r\n    box-shadow: none;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .text_left {\r\n    width: 80%;\r\n    padding: 8px;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    text-align: left;\r\n    border-bottom: 1px solid #FF0054;\r\n  }\r\n\r\n  .text_left ion-icon {\r\n    margin-right: 8px;\r\n    font-size: small;\r\n    color: #FF0054;\r\n  }\r\n\r\n  .text_end {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 83%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    font-weight: 300;\r\n    font-size: small;\r\n  }\r\n\r\n  .text_end p {\r\n    color: #000;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    font-size: small;\r\n  }\r\n\r\n  .row a {\r\n    text-decoration: none;\r\n    font-size: small;\r\n    margin-right: 10px;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .row img {\r\n    margin-right: 10px;\r\n  }\r\n</style>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map