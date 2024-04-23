"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_services_http-request_balance_service_ts-src_app_core_services_storage_s-650175"],{

/***/ 2783:
/*!***************************************************************!*\
  !*** ./src/app/core/services/http-request/balance.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceService": function() { return /* binding */ BalanceService; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);








var BalanceService = /*#__PURE__*/function () {
  function BalanceService(httpClient) {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BalanceService);

    this.httpClient = httpClient;
  } // La funcion fetch se encarga de hacer la solicitud de datos al api, esta recibe algunos otros datos
  // que son el target y el data que en principio se envia como valor nulo si no se recibe.


  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BalanceService, [{
    key: "fetch",
    value: function fetch(target) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api + '/balance', JSON.stringify({
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
    key: "getBalance",
    value: function getBalance(_ref) {
      var phone_number = _ref.phone_number;
      return this.fetch("get_balance", {
        "phone_number": phone_number
      });
    }
  }, {
    key: "getBalanceMifi",
    value: function getBalanceMifi(_ref2) {
      var phone_number = _ref2.phone_number;
      return this.fetch("get_balance_mifi", {
        "phone_number": phone_number
      });
    }
  }]);

  return BalanceService;
}();

BalanceService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};

BalanceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], BalanceService);


/***/ }),

/***/ 2323:
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator/index.js */ 7047);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);







var StorageService = /*#__PURE__*/function () {
  function StorageService(storage) {
    var _this = this;

    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StorageService);

    this.storage = storage;
    this._storage = null;
    this._ready = new Promise(function (resolve) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var storage;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.storage.create();

              case 2:
                storage = _context.sent;
                this._storage = storage;
                resolve();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    });
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StorageService, [{
    key: "setPNumber",
    value: function setPNumber(pn) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._ready;

              case 2:
                _context2.next = 4;
                return this._storage.set('phone_number', pn);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "delPNumber",
    value: function delPNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._ready;

              case 2:
                _context3.next = 4;
                return this._storage.remove('phone_number');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getPNumber",
    value: function getPNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var pn;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._ready;

              case 2:
                _context4.next = 4;
                return this._storage.get('phone_number');

              case 4:
                pn = _context4.sent;
                return _context4.abrupt("return", pn);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "setMNumber",
    value: function setMNumber(pn) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._ready;

              case 2:
                _context5.next = 4;
                return this._storage.set('mifi_number', pn);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "delMNumber",
    value: function delMNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._ready;

              case 2:
                _context6.next = 4;
                return this._storage.remove('mifi_number');

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "getMNumber",
    value: function getMNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var pn;
        return D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._ready;

              case 2:
                _context7.next = 4;
                return this._storage.get('mifi_number');

              case 4:
                pn = _context7.sent;
                return _context7.abrupt("return", pn);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }]);

  return StorageService;
}();

StorageService.ctorParameters = function () {
  return [{
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
  }];
};

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], StorageService);


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

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_http-request_balance_service_ts-src_app_core_services_storage_s-650175.js.map