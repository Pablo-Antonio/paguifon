"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notice-privacy_notice-privacy_module_ts"],{

/***/ 7568:
/*!***********************************************************************!*\
  !*** ./src/app/pages/notice-privacy/notice-privacy-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticePrivacyPageRoutingModule": function() { return /* binding */ NoticePrivacyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _notice_privacy_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-privacy.page */ 8109);






var routes = [{
  path: '',
  component: _notice_privacy_page__WEBPACK_IMPORTED_MODULE_2__.NoticePrivacyPage
}];

var NoticePrivacyPageRoutingModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NoticePrivacyPageRoutingModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NoticePrivacyPageRoutingModule);
});

NoticePrivacyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], NoticePrivacyPageRoutingModule);


/***/ }),

/***/ 4775:
/*!***************************************************************!*\
  !*** ./src/app/pages/notice-privacy/notice-privacy.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticePrivacyPageModule": function() { return /* binding */ NoticePrivacyPageModule; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notice_privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-privacy-routing.module */ 7568);
/* harmony import */ var _notice_privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-privacy.page */ 8109);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);











var NoticePrivacyPageModule = /*#__PURE__*/(0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NoticePrivacyPageModule() {
  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NoticePrivacyPageModule);
});

NoticePrivacyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _notice_privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__.NoticePrivacyPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  declarations: [_notice_privacy_page__WEBPACK_IMPORTED_MODULE_3__.NoticePrivacyPage]
})], NoticePrivacyPageModule);


/***/ }),

/***/ 8109:
/*!*************************************************************!*\
  !*** ./src/app/pages/notice-privacy/notice-privacy.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticePrivacyPage": function() { return /* binding */ NoticePrivacyPage; }
/* harmony export */ });
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 9117);
/* harmony import */ var D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass.js */ 1884);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notice_privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-privacy.page.html?ngResource */ 7558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var NoticePrivacyPage = /*#__PURE__*/function () {
  function NoticePrivacyPage() {
    (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NoticePrivacyPage);

    this.title = 'Aviso de privacidad';
  }

  (0,D_Desktop_PROYECTOS_frontend_modifications_appbyplus_Paguifon_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NoticePrivacyPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return NoticePrivacyPage;
}();

NoticePrivacyPage.ctorParameters = function () {
  return [];
};

NoticePrivacyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-notice-privacy',
  template: _notice_privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], NoticePrivacyPage);


/***/ }),

/***/ 7558:
/*!**************************************************************************!*\
  !*** ./src/app/pages/notice-privacy/notice-privacy.page.html?ngResource ***!
  \**************************************************************************/
/***/ (function(module) {

module.exports = "<app-header></app-header>\r\n<ion-content>\r\n  <app-page-title [title]=\"title\" ></app-page-title>\r\n  <ion-card class=\"ion-padding ion-text-justify\">\r\n    <ion-card-header class=\"ion-text-center\">\r\n      <ion-card-title>Aviso de Privacidad</ion-card-title>\r\n    </ion-card-header>\r\n    <p>De conformidad con lo establecido en la Ley Federal de Protección de datos Personales en Posesión\r\n      de los Particulares, (LFPDPPP) <b>AGREGADORA DE INTELIGENCIA EN NEGOCIOS TECNOLÓGICOS S.A. DE\r\n      C.V</b> en adelante <b>ADDINTELI</b>, con domicilio en Laguna de Términos 221, Centro de Negocios Polanco,\r\n      Piso 11 oficina 1104, Colonia Anáhuac, C.P 11320, CDMX, pone a su disposición el siguiente Aviso de\r\n      Privacidad.\r\n    </p>\r\n    <p>\r\n      <b>ADDINTELI</b>, es responsable del uso y protección de sus datos personales, en este sentido y atendiendo\r\n      las obligaciones legales establecidas en la Ley Federal de Protección de datos Personales en Posesión\r\n      de los Particulares (LFPDPPP), a través de este instrumento se informa a los titulares de los datos, la\r\n      información que de ellos se recaba y los fines que se le dará a dicha información.\r\n    </p>\r\n    <p>\r\n      Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades, las\r\n      cuales son necesarias para concretar nuestra relación con usted, así como atender los servicios que\r\n      solicite.\r\n    </p>\r\n    <p>\r\n      Para las finalidades establecidas en este Aviso de Privacidad, podemos obtener los datos personales\r\n      que se mencionan a continuación:\r\n    </p>\r\n    <ul>\r\n      <li>Nombre completo, fecha de nacimiento, domicilio, dirección de correo electrónico,\r\n        número de teléfono, RFC para facturación, CURP y NIP (portabilidad). </li>\r\n      <li>Datos de facturación: Razón social, correo electrónico, dirección de facturación\r\n        (Referencia, Número exterior, número interior, código postal, municipio y ciudad).</li>\r\n    </ul>\r\n    <p>\r\n      Con base en lo anterior, le señalamos que sus datos personales serán tratados de manera confidencial\r\n      y utilizados, en su caso, para:\r\n    </p>\r\n    <ul>\r\n      <li>Contactarlo.</li>\r\n      <li>Gestión de contrataciones: altas, renovaciones y bajas.</li>\r\n      <li>Registrarlo en el sistema de <b>ADDINTELI</b>, así como confirmar a través de su cuenta de\r\n        correo electrónico que usted se encuentra registrado en nuestro sistema.</li>\r\n      <li>Identificarlo para permitir su acceso como usuario del sistema.</li>\r\n      <li>Cumplir con el objeto de la relación que ha dado origen al tratamiento de los datos\r\n        personales, incluyendo sin limitar el prestarle los servicios que contratará con <b>ADDINTELI</b>.</li>\r\n      <li>Hacerle saber, de acuerdo con este Aviso de Privacidad y categorías de información,\r\n        sobre cambios que se realicen en los servicios que haya contratado, status de su cuenta,\r\n        solicitudes de servicios y cualquier otro asunto relevante al sitio.</li>\r\n      <li>Evaluar la calidad del servicio que se le brinda, a través de encuestas de satisfacción o\r\n        cualquier otra actividad con fines promocionales.</li>\r\n      <li>Informarle sobre cualquier cambio que se efectúe al presente Aviso; o para enviarle\r\n        información relacionada con la prestación de nuestros servicios.</li>\r\n      <li>Para realizar el servicio de portabilidad de número telefónico (SIM).</li>\r\n    </ul>\r\n    <p>\r\n      En el caso de Datos Personales Sensibles los datos que se recabaran son:\r\n    </p>\r\n    <ul>\r\n      <li>Datos bancarios para medios de pago: nombre del titular, número de tarjeta, fecha de\r\n        expiración y código de seguridad.</li>\r\n    </ul>\r\n    <p>\r\n      Con base en lo anterior, le señalamos que sus datos personales serán tratados de manera confidencial\r\n      y utilizados, en su caso, para:\r\n    </p>\r\n    <ul>\r\n      <li> Aclararles a nuestros clientes que los datos bancarios para pagos o medios de pago serán\r\n        transferidos a un sitio web tercero, sin ningún tipo de retención de información del cliente. \r\n        </li>\r\n    </ul>\r\n    <p>\r\n      <b>ADDINTELI</b> no recopila información personal de los usuarios excepto cuando éstos dan dicha\r\n      información voluntariamente al contratar o modificar sus servicios, o bien, registrándose dentro del\r\n      sitio o enviando un correo electrónico o cualquier otro medio que <b>ADDINTELI</b> designe. \r\n    </p>\r\n    <p>\r\n      La información obtenida acerca de usted será usada de acuerdo con los estándares establecidos por\r\n      la Procuraduría Federal del Consumidor. Le pediremos únicamente la información que nos servirá\r\n      para poder otorgarle el servicio solicitado. Su información personal no será almacenada por nosotros\r\n      por más tiempo que el necesario para proveer el servicio o por más tiempo del que establece la ley.\r\n      La confidencialidad y efectiva protección de dicha información es primordial para <b>ADDINTELI</b>, quien\r\n      mantendrá una protección adecuada, de conformidad con los principios y obligaciones previstos por\r\n      la LFPDPPP y demás normativa aplicable, a efecto de asegurar la seguridad, integridad y privacidad\r\n      de la información de los usuarios; así mismo, <b>ADDINTELI</b> podrá transferir, sin requerir de su\r\n      consentimiento, los datos personales necesarios a autoridades competentes en los casos legalmente\r\n      previstos.\r\n    </p>\r\n    <p>\r\n      Por otro parte, según lo previsto por la LFPDPPP usted tiene en todo momento el derecho a conocer\r\n      que datos personales tenemos de usted, para que los utilizamos y las condiciones del uso que le\r\n      damos (Acceso). Así mismo, es su derecho solicitar la corrección de su información personal en caso\r\n      de que esté desactualizada, sea inexacta o incompleta (Rectificación); de igual manera, tiene derecho\r\n      a que su información se elimine de nuestros registros o base de datos, cuando considere que la misma\r\n      no está siendo utilizada adecuadamente (Cancelación); así como también a oponerse al uso de sus\r\n      datos personales para fines específicos (Oposición). Estos derechos se conocen como Derechos\r\n      ARCO. Para facilitarle el ejercicio de cualquiera de estos derechos, ponemos a su disposición nuestro\r\n      correo electrónico legales@addinteli.mx en donde deberá presentar la solicitud respectiva y la misma\r\n      deberá contener:\r\n    </p>\r\n    <ul>\r\n      <li>Nombre y apellido del suscriptor</li>\r\n      <li>Dirección completa</li>\r\n      <li>Teléfono</li>\r\n      <li>Correo Electrónico</li>\r\n    </ul>\r\n    <p>\r\n      El tiempo de respuesta a su solicitud será de 15 días y se le comunicará a través del correo electrónico\r\n      detallado en la solicitud.\r\n    </p>\r\n    <p>\r\n      Cabe mencionar que en cualquier momento usted puede revocar su consentimiento para el uso de\r\n      sus datos personales, pero deberá considerar que, para ciertos fines, la revocación de su\r\n      consentimiento implicará que no podamos seguir prestando el servicio que nos solicitó, o la\r\n      conclusión de su relación con nosotros.\r\n    </p>\r\n    <p>\r\n      <b>ADDINTELI</b> se reserva el derecho de efectuar en cualquier momento, modificaciones o\r\n      actualizaciones al presente Aviso de Privacidad. Cualquier cambio le será notificado a través del sitio\r\n      web. Así mismo, usted podrá oponerse a los nuevos términos, previa modificación al tratamiento u\r\n      obtención de su información enviando un correo electrónico a legales@addinteli.mx manifestándolo.\r\n      En caso de que no manifieste su inconformidad en un plazo de 30 días una vez publicados los cambios,\r\n      queda explícito que está de acuerdo en que sigamos utilizando tus datos personales. \r\n    </p>\r\n    <p>\r\n      Usted acepta que ha leído los términos antes expuestos y acepta que utilicemos sus datos para los\r\n      fines señalados en el presente documento.\r\n    </p>\r\n    <p>\r\n      Última actualización: Mayo 2020.\r\n    </p>\r\n  </ion-card>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notice-privacy_notice-privacy_module_ts.js.map