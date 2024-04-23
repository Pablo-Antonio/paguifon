"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_info_info_module_ts"],{

/***/ 5655:
/*!***************************************************************!*\
  !*** ./src/app/core/services/http-request/comment.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": function() { return /* binding */ CommentService; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);








var CommentService = /*#__PURE__*/function () {
  function CommentService(httpClient) {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentService);

    this.httpClient = httpClient;
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentService, [{
    key: "fetch",
    value: function fetch(target) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api + '/comments', JSON.stringify({
                  target: target,
                  input: data
                })).toPromise());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "setComment",
    value: function setComment(_ref) {
      var subject = _ref.subject,
          comment = _ref.comment,
          email = _ref.email;
      return this.fetch('set_comment', {
        subject: subject,
        comment: comment,
        email: email
      });
    }
  }]);

  return CommentService;
}();

CommentService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};

CommentService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], CommentService);


/***/ }),

/***/ 8900:
/*!***************************************************!*\
  !*** ./src/app/pages/info/info-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageRoutingModule": function() { return /* binding */ InfoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.page */ 7429);






var routes = [{
  path: '',
  component: _info_page__WEBPACK_IMPORTED_MODULE_2__.InfoPage
}];

var InfoPageRoutingModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InfoPageRoutingModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InfoPageRoutingModule);
});

InfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], InfoPageRoutingModule);


/***/ }),

/***/ 9455:
/*!*******************************************!*\
  !*** ./src/app/pages/info/info.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": function() { return /* binding */ InfoPageModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-routing.module */ 8900);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ 7429);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);











var InfoPageModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function InfoPageModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InfoPageModule);
});

InfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _info_routing_module__WEBPACK_IMPORTED_MODULE_2__.InfoPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  declarations: [_info_page__WEBPACK_IMPORTED_MODULE_3__.InfoPage]
})], InfoPageModule);


/***/ }),

/***/ 7429:
/*!*****************************************!*\
  !*** ./src/app/pages/info/info.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": function() { return /* binding */ InfoPage; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page.html?ngResource */ 5006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _core_services_http_request_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/http-request/comment.service */ 5655);
/* harmony import */ var _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/custom-validators */ 28);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);












var InfoPage = /*#__PURE__*/function () {
  function InfoPage(commentServ, formBuilder, loadingCtrl, alertCtrl, iab) {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfoPage);

    this.commentServ = commentServ;
    this.formBuilder = formBuilder;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.iab = iab;
    this.title = 'Más información';
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.formBuil();
    }
  }, {
    key: "formBuil",
    value: function formBuil() {
      this.commentForm = this.formBuilder.group({
        comment: ['', _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__.Validators.require],
        subject: ['', _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__.Validators.require],
        email: ['', _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__.Validators.email]
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this = this;

        var loading;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.commentForm.valid) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 3;
                return this.loadingCtrl.create({
                  message: 'Un momento'
                });

              case 3:
                loading = _context3.sent;
                _context3.next = 6;
                return loading.present();

              case 6:
                this.commentServ.setComment(this.commentForm.value).then(function (res) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
                    var alert, _alert;

                    return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            loading.dismiss();

                            if (!res.status) {
                              _context.next = 10;
                              break;
                            }

                            _context.next = 4;
                            return this.alertCtrl.create({
                              header: 'Exito',
                              message: 'Los datos se han guardado correctamente',
                              buttons: [{
                                text: 'Ok',
                                role: 'cancel'
                              }]
                            });

                          case 4:
                            alert = _context.sent;
                            _context.next = 7;
                            return alert.present();

                          case 7:
                            this.commentForm.reset();
                            _context.next = 15;
                            break;

                          case 10:
                            _context.next = 12;
                            return this.alertCtrl.create({
                              header: 'Error',
                              message: 'Ha ocurrido un error al grabar los datos',
                              buttons: [{
                                text: 'Ok',
                                role: 'cancel'
                              }]
                            });

                          case 12:
                            _alert = _context.sent;
                            _context.next = 15;
                            return _alert.present();

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                    var _this2 = this;

                    var alert;
                    return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            loading.dismiss();
                            _context2.next = 3;
                            return this.alertCtrl.create({
                              header: 'Alerta',
                              message: 'Ocurrio un error al conectar con el servidor',
                              buttons: [{
                                text: 'Reintentar',
                                handler: function handler() {
                                  return _this2.submit();
                                }
                              }, {
                                text: 'Ok',
                                role: 'cancel'
                              }]
                            });

                          case 3:
                            alert = _context2.sent;
                            _context2.next = 6;
                            return alert.present();

                          case 6:
                            console.log(err);

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "openAdd",
    value: function openAdd() {
      var browser = this.iab.create('https://addinteli.com.mx/');
      browser.show();
    }
  }]);

  return InfoPage;
}();

InfoPage.ctorParameters = function () {
  return [{
    type: _core_services_http_request_comment_service__WEBPACK_IMPORTED_MODULE_4__.CommentService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
  }, {
    type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
  }];
};

InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-info',
  template: _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder]
})], InfoPage);


/***/ }),

/***/ 28:
/*!****************************************!*\
  !*** ./src/utils/custom-validators.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validators": function() { return /* binding */ Validators; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);


var Validators = /*#__PURE__*/function () {
  function Validators() {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Validators);
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Validators, null, [{
    key: "user",
    value: function user(control) {
      if (control.value != null) {
        var value = control.value;

        if (value.match(/^[0-9a-zñ.]{5,64}$/)) {
          return null;
        }
      }

      return {
        Correo: false
      };
    }
  }, {
    key: "pass",
    value: function pass(control) {
      if (control.value != null) {
        var value = control.value;

        if (value.match(/^.{5,64}$/)) {
          return null;
        }
      }

      return {
        Correo: false
      };
    }
  }, {
    key: "fullName",
    value: function fullName(control) {
      if (control.value != null) {
        var value = control.value;

        if (value.match(/^(?=.{10,128}$)([A-ZÁÉÍÓÚ][a-zñáéíóú]{2,} )+([A-ZÁÉÍÓÚ][a-zñáéíóú]{2,})$/)) {
          return null;
        }
      }

      return {
        Correo: false
      };
    }
  }, {
    key: "phoneNumber",
    value: function phoneNumber(control) {
      if (control.value != null) {
        var value = String(control.value);

        if (value.match(/^[0-9]{10}$/)) {
          return null;
        }
      }

      return {
        Correo: false
      };
    }
  }, {
    key: "email",
    value: function email(control) {
      if (control.value != null) {
        var value = control.value;

        if (value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
          return null;
        }
      }

      return {
        Correo: false
      };
    }
  }, {
    key: "require",
    value: function require(control) {
      if (control.value != null) {
        var value = String(control.value);

        if (value.match(/^.{1,}$/)) {
          return null;
        }
      }

      return {
        Correo: false
      };
    }
  }]);

  return Validators;
}();

/***/ }),

/***/ 5006:
/*!******************************************************!*\
  !*** ./src/app/pages/info/info.page.html?ngResource ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <app-page-title [title]=\"title\" ></app-page-title>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>CONTACTO</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      Esta app móvil ha sido diseñada y desarrollada por Addinteli. En este espacio podrás compartirnos tus dudas, solicitudes o comentarios referente al servicio Paguifon.\r\n      <br><br>\r\n      Correo de contacto: <span>soporte@paguifon.com.mx</span> o puedes llamar al <span>55 8854 6014</span>.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <form [formGroup]=\"commentForm\" (submit)=\"submit()\">\r\n        <p>Correo:</p>\r\n        <ion-item>\r\n          <ion-input formControlName=\"email\" maxlength=\"128\"></ion-input>\r\n        </ion-item>\r\n        <p>Asunto:</p>\r\n        <ion-item>\r\n          <ion-input formControlName=\"subject\" maxlength=\"32\"></ion-input>\r\n        </ion-item>\r\n        <p>Escribe tu mensaje:</p>\r\n        <ion-item>\r\n          <ion-textarea formControlName=\"comment\" maxlength=\"250\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-button type=\"submit\" [disabled]=\"!commentForm.valid\">Enviar</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<style>\r\n  @font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../../../assets/fonts/Montserrat-Medium.ttf\");\r\n  }\r\n\r\n  * {\r\n      font-family: \"Montserrat\";\r\n  }\r\n\r\n  ion-button {\r\n    --background: #500771 !important;\r\n    --border-radius: 5px;\r\n    --color: #fff;\r\n    --height: 50px;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n  }\r\n\r\n  ion-button[disabled] {\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  ion-card {\r\n    background-color: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n    ion-item {\r\n      --height: 50px;\r\n      border-radius: 10px !important;\r\n      border: 1px solid #000;\r\n    }\r\n\r\n  ion-card-title {\r\n    font-size: medium;\r\n    font-weight: 600;\r\n    color: #FF0054;\r\n    margin-left: -10px;\r\n  }\r\n\r\n  ion-card-content {\r\n    font-weight: 600;\r\n    color: #000;\r\n    margin-left: -10px;\r\n    text-align: justify;\r\n    font-size: small;\r\n    padding-top: 0;\r\n  }\r\n\r\n  span {\r\n    color: #FF0054;\r\n    font-weight: 400;\r\n  }\r\n\r\n  p {\r\n    color: #000;\r\n    font-weight: 800;\r\n    font-size: medium;\r\n    margin: 5px 0;\r\n  }\r\n\r\n</style>\r\n\r\n<app-footer></app-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_info_info_module_ts.js.map