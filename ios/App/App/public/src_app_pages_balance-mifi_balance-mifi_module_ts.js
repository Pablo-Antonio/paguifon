"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_balance-mifi_balance-mifi_module_ts"],{

/***/ 6811:
/*!*******************************************************************!*\
  !*** ./src/app/pages/balance-mifi/balance-mifi-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceMifiPageRoutingModule": function() { return /* binding */ BalanceMifiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _balance_mifi_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-mifi.page */ 3476);






var routes = [{
  path: '',
  component: _balance_mifi_page__WEBPACK_IMPORTED_MODULE_2__.BalanceMifiPage
}];

var BalanceMifiPageRoutingModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function BalanceMifiPageRoutingModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BalanceMifiPageRoutingModule);
});

BalanceMifiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], BalanceMifiPageRoutingModule);


/***/ }),

/***/ 3738:
/*!***********************************************************!*\
  !*** ./src/app/pages/balance-mifi/balance-mifi.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceMifiPageModule": function() { return /* binding */ BalanceMifiPageModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _balance_mifi_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-mifi-routing.module */ 6811);
/* harmony import */ var _balance_mifi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance-mifi.page */ 3476);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);











var BalanceMifiPageModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function BalanceMifiPageModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BalanceMifiPageModule);
});

BalanceMifiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _balance_mifi_routing_module__WEBPACK_IMPORTED_MODULE_2__.BalanceMifiPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_balance_mifi_page__WEBPACK_IMPORTED_MODULE_3__.BalanceMifiPage]
})], BalanceMifiPageModule);


/***/ }),

/***/ 3476:
/*!*********************************************************!*\
  !*** ./src/app/pages/balance-mifi/balance-mifi.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceMifiPage": function() { return /* binding */ BalanceMifiPage; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _balance_mifi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance-mifi.page.html?ngResource */ 9934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _core_services_http_request_balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/http-request/balance.service */ 2783);
/* harmony import */ var _utils_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/custom-validators */ 28);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/storage.service */ 2323);












var BalanceMifiPage = /*#__PURE__*/function () {
  function BalanceMifiPage(balanceServ, formBuilder, loadingCtrl, alertCtrl, storageServ) {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BalanceMifiPage);

    this.balanceServ = balanceServ;
    this.formBuilder = formBuilder;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.storageServ = storageServ;
    this.title = 'Consumo MIFI';
    this.selfConsul = null;
    this.data = false;
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BalanceMifiPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.formBuil();
      this.storageServ.getMNumber().then(function (pn) {
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
                this.balanceServ.getBalanceMifi(value).then(function (res) {
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
      data.daysLeft = this.getDaysLeft(this.formatDate(data.expire_date));
      data.phone_number = pn;
      this.data = data;
    }
  }, {
    key: "saveMNumber",
    value: function saveMNumber(pn) {
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
                      _this4.storageServ.setMNumber(pn);

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
    key: "deleMNumber",
    value: function deleMNumber() {
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
                      _this5.storageServ.delMNumber();

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

  return BalanceMifiPage;
}();

BalanceMifiPage.ctorParameters = function () {
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

BalanceMifiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-balance-mifi',
  template: _balance_mifi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__
})], BalanceMifiPage);


/***/ }),

/***/ 9934:
/*!**********************************************************************!*\
  !*** ./src/app/pages/balance-mifi/balance-mifi.page.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-page-title [title]=\"title\" ></app-page-title>\r\n  <ion-card>\r\n    <form [formGroup]=\"numberForm\" (submit)=\"submit()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Número</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"phone_number\" maxlength=\"32\"></ion-input>\r\n      </ion-item>\r\n      <ion-button type=\"submit\" expand=\"block\" fill=\"clear\" [disabled]=\"!numberForm.valid\">Enviar</ion-button>\r\n    </form>\r\n  </ion-card>\r\n  \r\n  <ion-card *ngIf=\"data\">\r\n    <ion-card-header class=\"ion-no-padding ion-padding-horizontal ion-padding-top\">\r\n      <ion-card-title>Consumo de: <ion-label [innerHTML]=\"data.phone_number\" color=\"primary\"></ion-label></ion-card-title>\r\n    </ion-card-header>\r\n    <ion-list>\r\n      <ion-item id=\"days-left\">\r\n        <ion-icon slot=\"start\" src=\"../../../assets/icon/calendario.svg\" color=\"tertiary\"></ion-icon>\r\n        Vigencia\r\n        <div slot=\"end\">\r\n          {{formatDate(data.effective_date) | date: 'shortDate'}} - {{formatDate(data.expire_date) | date: 'shortDate'}}\r\n        </div>\r\n      </ion-item>\r\n      <ion-popover trigger=\"days-left\" side=\"bottom\" size=\"cover\">\r\n        <ng-template>\r\n          <ion-item>\r\n            <ion-label>Te quedan {{data.daysLeft}} días de beneficios</ion-label>\r\n          </ion-item>\r\n        </ng-template>\r\n      </ion-popover>\r\n\r\n      <ion-item class=\"ion-margin-top\">\r\n        <ion-icon slot=\"start\" src=\"../../../assets/icon/datos.svg\" color=\"primary\"></ion-icon>\r\n        Datos\r\n        <span slot=\"end\">{{data.data.unused / 1000 | number:'.0-2'}} / {{data.data.total / 1000 | number:'.0-2'}} GB</span>\r\n      </ion-item>      \r\n      <ion-progress-bar color=\"primary\" [value]=\"1 - data.percentData\"></ion-progress-bar>\r\n    </ion-list>\r\n    <ng-container *ngIf=\"selfConsul == data.phone_number; else self\">\r\n      <ion-button expand=\"block\" fill=\"clear\" (click)=\"deleMNumber()\"color=\"danger\">Remover número</ion-button>\r\n    </ng-container>\r\n    <ng-template #self>\r\n      <ion-button expand=\"block\" fill=\"clear\" (click)=\"saveMNumber(data.phone_number)\">Guardar número</ion-button>\r\n    </ng-template>\r\n  </ion-card>\r\n</ion-content>\r\n<app-footer></app-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_balance-mifi_balance-mifi_module_ts.js.map