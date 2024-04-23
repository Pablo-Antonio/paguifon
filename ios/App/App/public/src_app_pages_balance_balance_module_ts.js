"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_balance_balance_module_ts"],{

/***/ 3234:
/*!*********************************************************!*\
  !*** ./src/app/pages/balance/balance-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalancePageRoutingModule": function() { return /* binding */ BalancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance.page */ 3581);






var routes = [{
  path: '',
  component: _balance_page__WEBPACK_IMPORTED_MODULE_2__.BalancePage
}];

var BalancePageRoutingModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function BalancePageRoutingModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BalancePageRoutingModule);
});

BalancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], BalancePageRoutingModule);


/***/ }),

/***/ 4991:
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalancePageModule": function() { return /* binding */ BalancePageModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _balance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-routing.module */ 3234);
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.page */ 3581);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);











var BalancePageModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function BalancePageModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BalancePageModule);
});

BalancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _balance_routing_module__WEBPACK_IMPORTED_MODULE_2__.BalancePageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_3__.BalancePage]
})], BalancePageModule);


/***/ }),

/***/ 3581:
/*!***********************************************!*\
  !*** ./src/app/pages/balance/balance.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalancePage": function() { return /* binding */ BalancePage; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _balance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.page.html?ngResource */ 9187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _core_services_http_request_balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/http-request/balance.service */ 2783);
/* harmony import */ var _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/custom-validators */ 28);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/storage.service */ 2323);












var BalancePage = /*#__PURE__*/function () {
  function BalancePage(balanceServ, formBuilder, loadingCtrl, alertCtrl, storageServ) {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BalancePage);

    this.balanceServ = balanceServ;
    this.formBuilder = formBuilder;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.storageServ = storageServ;
    this.title = 'Consulta de saldo';
    this.selfConsul = null;
    this.data = false;
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BalancePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.formBuil();
      this.storageServ.getPNumber().then(function (pn) {
        if (!!pn) {
          _this.selfConsul = pn;

          _this.submit({
            phone_number: pn
          });
        }
      });
    }
  }, {
    key: "formBuil",
    value: function formBuil() {
      this.numberForm = this.formBuilder.group({
        phone_number: ['', _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__.Validators.phoneNumber]
      });
    }
  }, {
    key: "processRejected",
    value: function processRejected(status) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var msj, alert;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                msj = '';
                _context.t0 = status;
                _context.next = _context.t0 === 'Active' ? 4 : _context.t0 === 'Suspend' ? 6 : _context.t0 === 'Barring' ? 8 : _context.t0 === 'Idle' ? 10 : _context.t0 === 'Unanswered' ? 12 : 14;
                break;

              case 4:
                msj = 'No cuentas con un paquete activo, por favor realiza una recarga';
                return _context.abrupt("break", 15);

              case 6:
                msj = 'La linea ha sido suspendida, favor de comunicarse con su distribuidor';
                return _context.abrupt("break", 15);

              case 8:
                msj = 'Estimado usuario favor de insertar su sim en un equipo compatible con nuestra red';
                return _context.abrupt("break", 15);

              case 10:
                msj = 'No se ha activado ningun plan, favor de comunicarse con su distribuidor';
                return _context.abrupt("break", 15);

              case 12:
                msj = 'La linea no ha sido registrada, favor de comunicarse con su distribuidor';
                return _context.abrupt("break", 15);

              case 14:
                msj = 'Error de comunicación, favor de intentarlo mas tarde';

              case 15:
                _context.next = 17;
                return this.alertCtrl.create({
                  header: 'Alerta',
                  message: msj,
                  buttons: [{
                    text: 'Cerrar',
                    role: 'cancel'
                  }]
                });

              case 17:
                alert = _context.sent;
                _context.next = 20;
                return alert.present();

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "submit",
    value: function submit() {
      var auto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this2 = this;

        var value, loading;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.numberForm.valid || auto)) {
                  _context4.next = 8;
                  break;
                }

                value = auto ? auto : this.numberForm.value;
                _context4.next = 4;
                return this.loadingCtrl.create({
                  message: 'Un momento'
                });

              case 4:
                loading = _context4.sent;
                _context4.next = 7;
                return loading.present();

              case 7:
                this.balanceServ.getBalance(value).then(function (res) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                    return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            loading.dismiss();

                            if (res.status == 'Active' && res.expire_date != 0) {
                              this.renderReport(res, value.phone_number);
                              this.numberForm.reset();
                            } else {
                              this.processRejected(res.status);
                            }

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
                    var _this3 = this;

                    var alert;
                    return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            loading.dismiss();
                            _context3.next = 3;
                            return this.alertCtrl.create({
                              header: 'Alerta',
                              message: 'Ocurrio un error al conectar con el servidor',
                              buttons: [{
                                text: 'Reintentar',
                                handler: function handler() {
                                  return _this3.submit();
                                }
                              }, {
                                text: 'Ok',
                                role: 'cancel'
                              }]
                            });

                          case 3:
                            alert = _context3.sent;
                            _context3.next = 6;
                            return alert.present();

                          case 6:
                            console.log(err);

                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      return "".concat(date.substring(0, 4), "-").concat(date.substring(4, 6), "-").concat(date.substring(6, 8));
    }
  }, {
    key: "getPercent",
    value: function getPercent(total, unused) {
      return total ? ((total - unused) / total).toFixed(2) : 1;
    }
  }, {
    key: "getDaysLeft",
    value: function getDaysLeft(dateEnd) {
      var ini = new Date().getTime();
      var end = new Date(dateEnd).getTime();
      var diff = end - ini;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
  }, {
    key: "renderReport",
    value: function renderReport(data, pn) {
      data.percentData = this.getPercent(data.data.total, data.data.unused);
      data.percentDataThr = this.getPercent(data.data_thr.total, data.data_thr.unused);
      data.percentDataFree = this.getPercent(data.data_free.total, data.data_free.unused);
      data.percentMin = this.getPercent(data.min.total, data.min.unused);
      data.percentSms = this.getPercent(data.sms.total, data.sms.unused);
      data.daysLeft = this.getDaysLeft(this.formatDate(data.expire_date));
      data.phone_number = pn;
      this.data = data;
    }
  }, {
    key: "savePNumber",
    value: function savePNumber(pn) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this4 = this;

        var alert;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.alertCtrl.create({
                  header: 'Alerta',
                  message: '¿Quieres guardar este número? si existe alguno este lo reemplazara ',
                  buttons: [{
                    text: 'Confirmar',
                    handler: function handler() {
                      _this4.storageServ.setPNumber(pn);

                      _this4.selfConsul = pn;
                    }
                  }, {
                    text: 'Cancelar',
                    role: 'cancel'
                  }]
                });

              case 2:
                alert = _context5.sent;
                _context5.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "delePNumber",
    value: function delePNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this5 = this;

        var alert;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.alertCtrl.create({
                  header: 'Alerta',
                  message: '¿Quieres eliminar este número?',
                  buttons: [{
                    text: 'Confirmar',
                    handler: function handler() {
                      _this5.storageServ.delPNumber();

                      _this5.selfConsul = null;
                    }
                  }, {
                    text: 'Cancelar',
                    role: 'cancel'
                  }]
                });

              case 2:
                alert = _context6.sent;
                _context6.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }]);

  return BalancePage;
}();

BalancePage.ctorParameters = function () {
  return [{
    type: _core_services_http_request_balance_service__WEBPACK_IMPORTED_MODULE_4__.BalanceService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
  }, {
    type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
  }];
};

BalancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-balance',
  template: _balance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__
})], BalancePage);


/***/ }),

/***/ 9187:
/*!************************************************************!*\
  !*** ./src/app/pages/balance/balance.page.html?ngResource ***!
  \************************************************************/
/***/ (function(module) {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <app-page-title [title]=\"title\"></app-page-title>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>CONSULTA DE SALDO</ion-card-title>\r\n    </ion-card-header>\r\n    <form [formGroup]=\"numberForm\" (submit)=\"submit()\">\r\n      <ion-item class=\"item_before\">\r\n        <ion-input type=\"number\" placeholder=\"Número telefónico\" formControlName=\"phone_number\" maxlength=\"32\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-button type=\"submit\" [disabled]=\"!numberForm.valid\">ENVIAR</ion-button>\r\n    </form>\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"data\">\r\n    <ion-card-header class=\"ion-no-padding ion-padding-horizontal ion-padding-top\">\r\n      <ion-card-title class=\"title_after\">Consumo de: <ion-label [innerHTML]=\"data.phone_number\"></ion-label>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <br>\r\n    <h2>Disponibles:</h2>\r\n    <hr>\r\n    <br>\r\n    <ion-list>\r\n      <ion-item lines=\"none\" id=\"days-left\">\r\n        <img slot=\"start\" style=\"width: 20px;\" src=\"../../../assets/img/vigencia.png\">\r\n        Vigencia\r\n        <div slot=\"end\">\r\n          {{formatDate(data.effective_date) | date: 'shortDate'}} - {{formatDate(data.expire_date) | date: 'shortDate'}}\r\n        </div>\r\n      </ion-item>\r\n      <ion-popover trigger=\"days-left\" side=\"bottom\" size=\"cover\">\r\n        <ng-template>\r\n          <ion-item lines=\"none\">\r\n            <ion-label id=\"pop_left_days\">Te quedan {{data.daysLeft}} días de beneficios</ion-label>\r\n          </ion-item>\r\n        </ng-template>\r\n      </ion-popover>\r\n\r\n      <ion-item lines=\"none\" class=\"ion-margin-top\">\r\n        <img slot=\"start\" style=\"width: 20px;\" src=\"../../../assets/img/datos.png\">\r\n        Datos\r\n        <span slot=\"end\">{{data.data.unused / 1000 | number:'.0-2'}} / {{data.data.total / 1000 | number:'.0-2'}}\r\n          GB</span>\r\n      </ion-item>\r\n      <ng-container *ngIf=\"data.data_thr.total\">\r\n        <ion-item lines=\"none\">\r\n          <ion-icon slot=\"start\" src=\"../../../assets/icon/puj.svg\" color=\"primary\"></ion-icon>\r\n          Uso Justo\r\n          <span slot=\"end\">{{data.data_thr.unused / 1000 | number:'.0-2'}} / {{data.data_thr.total / 1000 |\r\n            number:'.0-2'}} GB</span>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"data.data_free.total\">\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" style=\"width: 20px;\" src=\"../../../assets/img/promo.png\">\r\n          Promociones\r\n          <span slot=\"end\">{{data.data_free.unused / 1000 | number:'.0-2'}} / {{data.data_free.total / 1000 |\r\n            number:'.0-2'}} GB</span>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      <ion-item lines=\"none\" class=\"ion-margin-top\">\r\n        <img slot=\"start\" style=\"width: 20px;\" src=\"../../../assets/img/minutos.png\">\r\n        Minutos\r\n        <span slot=\"end\">{{data.min.unused}} de {{data.min.total}} Min</span>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <img slot=\"start\" style=\"width: 20px;\" src=\"../../../assets/img/sms.png\">\r\n        Mensajes\r\n        <span slot=\"end\">{{data.sms.unused}} de {{data.sms.total}} SMS</span>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ng-container *ngIf=\"selfConsul == data.phone_number; else self\">\r\n      <ion-button expand=\"block\" fill=\"clear\" (click)=\"delePNumber()\" color=\"danger\">Remover número</ion-button>\r\n    </ng-container>\r\n    <ng-template #self>\r\n      <ion-button expand=\"block\" fill=\"clear\" (click)=\"savePNumber(data.phone_number)\">Guardar número</ion-button>\r\n    </ng-template>\r\n  </ion-card>\r\n</ion-content>\r\n<style>\r\n  @font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url(\"../../../assets/fonts/Montserrat-Medium.ttf\");\r\n  }\r\n\r\n  * {\r\n    font-family: \"Montserrat\";\r\n    font-weight: 600;\r\n  }\r\n\r\n  ion-button {\r\n    --background: #500771 !important;\r\n    border-radius: 5px;\r\n    --color: #fff;\r\n    --height: 50px;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n  }\r\n\r\n  ion-button[disabled] {\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  ion-card {\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n  }\r\n\r\n  ion-card-header {\r\n    padding-top: 0;\r\n  }\r\n\r\n  ion-item {\r\n    --height: 50px;\r\n    font-size: small;\r\n    color: #000;\r\n    margin: -10px;\r\n    padding: 0;\r\n  }\r\n\r\n  ion-card-title {\r\n    font-size: medium;\r\n    color: #000;\r\n    margin-left: -16px;\r\n    font-weight: 800 !important;\r\n  }\r\n\r\n  ion-input {\r\n    border: 1px solid #000;\r\n    border-radius: 10px;\r\n    --padding-start: 10px !important;\r\n  }\r\n\r\n  .item_before {\r\n    color: #000;\r\n    font-size: medium;\r\n    margin-left: -16px;\r\n  }\r\n\r\n  .title_after {\r\n    color: #000;\r\n    font-size: medium;\r\n  }\r\n\r\n  ion-label {\r\n    font-size: medium;\r\n    color: #FF0054;\r\n    font-weight: 800;\r\n  }\r\n\r\n  ion-list {\r\n    background-color: transparent;\r\n  }\r\n\r\n  h2 {\r\n    color: #000;\r\n    font-size: medium;\r\n    margin-left: 33.33%;\r\n  }\r\n\r\n  hr {\r\n    border-bottom: 1px solid #fff;\r\n    width: 95%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  #pop_left_days {\r\n    color: #000;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\ns</style>\r\n<app-footer></app-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_balance_balance_module_ts.js.map