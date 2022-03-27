(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _node_modules_bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_modules/bootstrap-icons/font/bootstrap-icons.css */ "./node_modules/bootstrap-icons/font/bootstrap-icons.css");






/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application




__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var submit_button = $('#import_csv_submit');
var import_scv_reset = $('#import_csv_reset');
var before_submit_div = $('#before-submit-div');
var modal_btn_csv = $('.modal-btn-CSV');
var after_submit_logo = $('#after-submit-logo');
var post_submit_div = $('#post-submit-div');
$(document).ready(function () {
  $('#import_csv_CSV_file').on('change', function () {
    //get the file name
    var fileName = $(this).val();
    fileName = $(this).val().split('/').pop().split('\\').pop(); // Bouton de validation du formulaire

    submit_button.removeClass('d-none'); //replace the "Choose a file" label

    modal_btn_csv.html(fileName);
    modal_btn_csv.removeClass("btn btn-danger"); // Bouton de reset de l'input file

    import_scv_reset.removeClass('d-none');
    import_scv_reset.html('<i class="bi bi-x-circle"></i>'); //Changement du texte affiché sur la fenêtre

    before_submit_div.addClass('d-none');
    post_submit_div.removeClass('d-none');
    after_submit_logo.removeClass('d-none');
  });
}); //event listener on click bouton reset

import_scv_reset.on('click', function () {
  //Gestion du bouton de reset et du bouton d'upload
  $('#import_csv_CSV_file').val(''); //$('#import_csv__token').val('');

  import_scv_reset.addClass('d-none');
  modal_btn_csv.html("Browse files");
  modal_btn_csv.addClass("btn btn-danger");
  submit_button.addClass('d-none');
  before_submit_div.removeClass('d-none');
  post_submit_div.addClass('d-none');
  after_submit_logo.addClass('d-none');
}); // Show the dropzone when dragging files (not folders or page
// elements). The dropzone is hidden after a timer to prevent 
// flickering to occur as `dragleave` is fired constantly.

var dragTimer;
$(document).on('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var dt = e.originalEvent.dataTransfer;

  if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files'))) {
    $("#dropzone").show();
    before_submit_div.addClass("d-none");
    window.clearTimeout(dragTimer);
  }
});
$(document).on('dragleave dragend dragstop', function (e) {
  e.preventDefault();
  e.stopPropagation();
  window.clearTimeout(dragTimer);
  dragTimer = window.setTimeout(function () {
    alert();
    $("#dropzone").hide();
    before_submit_div.removeClass("d-none");
  }, 85);
});
$(document).on('drop', function (e) {
  $("#dropzone").hide();
  before_submit_div.removeClass("d-none");
  e.preventDefault();
  e.stopPropagation(); //read drag and drop filename

  var fileName = e.originalEvent.dataTransfer.files[0];
  alert(fileName.name);
  $('#import_csv_CSV_file').files = fileName;
  alert($('#import_csv_CSV_file').files[0]); //$('#import_csv__token').val(e);
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-d9be8a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBQSxFQUFBQSxTQUFTLEdBQUdXLE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixZQUFXO0FBQzNDQyxJQUFBQSxLQUFLO0FBRUMvQixJQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVnQyxJQUFmO0FBQ043QixJQUFBQSxpQkFBaUIsQ0FBQ1csV0FBbEIsQ0FBOEIsUUFBOUI7QUFDRyxHQUxXLEVBS1QsRUFMUyxDQUFaO0FBTUgsQ0FWRDtBQVdBZCxDQUFDLENBQUNPLFFBQUQsQ0FBRCxDQUFZRSxFQUFaLENBQWUsTUFBZixFQUF1QixVQUFTUyxDQUFULEVBQVk7QUFDbENsQixFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVnQyxJQUFmO0FBQ0E3QixFQUFBQSxpQkFBaUIsQ0FBQ1csV0FBbEIsQ0FBOEIsUUFBOUI7QUFDQUksRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FELEVBQUFBLENBQUMsQ0FBQ0UsZUFBRixHQUprQyxDQUtsQzs7QUFDQSxNQUFJVixRQUFRLEdBQUdRLENBQUMsQ0FBQ0ksYUFBRixDQUFnQkMsWUFBaEIsQ0FBNkJVLEtBQTdCLENBQW1DLENBQW5DLENBQWY7QUFDQUYsRUFBQUEsS0FBSyxDQUFDckIsUUFBUSxDQUFDd0IsSUFBVixDQUFMO0FBQ0FsQyxFQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmlDLEtBQTFCLEdBQWtDdkIsUUFBbEM7QUFDQXFCLEVBQUFBLEtBQUssQ0FBQy9CLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCaUMsS0FBMUIsQ0FBZ0MsQ0FBaEMsQ0FBRCxDQUFMLENBVGtDLENBVWxDO0FBQ0EsQ0FYRDs7Ozs7Ozs7Ozs7Ozs7OztDQzVGQTs7QUFDTyxJQUFNRyxHQUFHLEdBQUdELDBFQUFnQixDQUFDcEMseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnO1xyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbnZhciBzdWJtaXRfYnV0dG9uID0gJCgnI2ltcG9ydF9jc3Zfc3VibWl0Jyk7XHJcbnZhciBpbXBvcnRfc2N2X3Jlc2V0PSAkKCcjaW1wb3J0X2Nzdl9yZXNldCcpO1xyXG52YXIgYmVmb3JlX3N1Ym1pdF9kaXYgPSAkKCcjYmVmb3JlLXN1Ym1pdC1kaXYnKTtcclxudmFyIG1vZGFsX2J0bl9jc3YgPSAkKCcubW9kYWwtYnRuLUNTVicpO1xyXG52YXIgYWZ0ZXJfc3VibWl0X2xvZ28gPSAkKCcjYWZ0ZXItc3VibWl0LWxvZ28nKTtcclxudmFyIHBvc3Rfc3VibWl0X2RpdiA9ICQoJyNwb3N0LXN1Ym1pdC1kaXYnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJyNpbXBvcnRfY3N2X0NTVl9maWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly9nZXQgdGhlIGZpbGUgbmFtZVxyXG5cdFx0dmFyIGZpbGVOYW1lID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdGZpbGVOYW1lID0gJCh0aGlzKS52YWwoKS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCdcXFxcJykucG9wKCk7XHJcblx0XHRcclxuXHRcdC8vIEJvdXRvbiBkZSB2YWxpZGF0aW9uIGR1IGZvcm11bGFpcmVcclxuXHRcdHN1Ym1pdF9idXR0b24ucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cclxuXHRcdC8vcmVwbGFjZSB0aGUgXCJDaG9vc2UgYSBmaWxlXCIgbGFiZWxcclxuXHRcdG1vZGFsX2J0bl9jc3YuaHRtbChmaWxlTmFtZSk7XHJcblx0XHRtb2RhbF9idG5fY3N2LnJlbW92ZUNsYXNzKFwiYnRuIGJ0bi1kYW5nZXJcIik7XHJcblxyXG5cdFx0Ly8gQm91dG9uIGRlIHJlc2V0IGRlIGwnaW5wdXQgZmlsZVxyXG5cdFx0aW1wb3J0X3Njdl9yZXNldC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0XHRpbXBvcnRfc2N2X3Jlc2V0Lmh0bWwoJzxpIGNsYXNzPVwiYmkgYmkteC1jaXJjbGVcIj48L2k+Jyk7XHJcblxyXG5cdFx0Ly9DaGFuZ2VtZW50IGR1IHRleHRlIGFmZmljaMOpIHN1ciBsYSBmZW7DqnRyZVxyXG5cdFx0YmVmb3JlX3N1Ym1pdF9kaXYuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cdFx0cG9zdF9zdWJtaXRfZGl2LnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHRcdGFmdGVyX3N1Ym1pdF9sb2dvLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy9ldmVudCBsaXN0ZW5lciBvbiBjbGljayBib3V0b24gcmVzZXRcclxuaW1wb3J0X3Njdl9yZXNldC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQvL0dlc3Rpb24gZHUgYm91dG9uIGRlIHJlc2V0IGV0IGR1IGJvdXRvbiBkJ3VwbG9hZFxyXG5cdCQoJyNpbXBvcnRfY3N2X0NTVl9maWxlJykudmFsKCcnKTtcclxuXHQvLyQoJyNpbXBvcnRfY3N2X190b2tlbicpLnZhbCgnJyk7XHJcblx0aW1wb3J0X3Njdl9yZXNldC5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0bW9kYWxfYnRuX2Nzdi5odG1sKFwiQnJvd3NlIGZpbGVzXCIpOyBcclxuXHRtb2RhbF9idG5fY3N2LmFkZENsYXNzKFwiYnRuIGJ0bi1kYW5nZXJcIik7XHJcblxyXG5cdHN1Ym1pdF9idXR0b24uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cclxuXHRiZWZvcmVfc3VibWl0X2Rpdi5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0cG9zdF9zdWJtaXRfZGl2LmFkZENsYXNzKCdkLW5vbmUnKTtcclxuXHRhZnRlcl9zdWJtaXRfbG9nby5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBTaG93IHRoZSBkcm9wem9uZSB3aGVuIGRyYWdnaW5nIGZpbGVzIChub3QgZm9sZGVycyBvciBwYWdlXHJcbi8vIGVsZW1lbnRzKS4gVGhlIGRyb3B6b25lIGlzIGhpZGRlbiBhZnRlciBhIHRpbWVyIHRvIHByZXZlbnQgXHJcbi8vIGZsaWNrZXJpbmcgdG8gb2NjdXIgYXMgYGRyYWdsZWF2ZWAgaXMgZmlyZWQgY29uc3RhbnRseS5cclxudmFyIGRyYWdUaW1lcjtcclxuJChkb2N1bWVudCkub24oJ2RyYWdvdmVyJywgZnVuY3Rpb24oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKVxyXG5cdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICB2YXIgZHQgPSBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyO1xyXG4gIGlmIChkdC50eXBlcyAmJiAoZHQudHlwZXMuaW5kZXhPZiA/IGR0LnR5cGVzLmluZGV4T2YoJ0ZpbGVzJykgIT0gLTEgOiBkdC50eXBlcy5jb250YWlucygnRmlsZXMnKSkpIHtcclxuICAgICQoXCIjZHJvcHpvbmVcIikuc2hvdygpO1xyXG5cdGJlZm9yZV9zdWJtaXRfZGl2LmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dChkcmFnVGltZXIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbignZHJhZ2xlYXZlIGRyYWdlbmQgZHJhZ3N0b3AnLCBmdW5jdGlvbihlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgd2luZG93LmNsZWFyVGltZW91dChkcmFnVGltZXIpO1xyXG4gICAgZHJhZ1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRhbGVydCgpO1xyXG5cclxuICAgICAgICAkKFwiI2Ryb3B6b25lXCIpLmhpZGUoKTtcclxuXHRcdGJlZm9yZV9zdWJtaXRfZGl2LnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgfSwgODUpO1xyXG59KTtcclxuJChkb2N1bWVudCkub24oJ2Ryb3AnLCBmdW5jdGlvbihlKSB7XHJcblx0JChcIiNkcm9wem9uZVwiKS5oaWRlKCk7XHJcblx0YmVmb3JlX3N1Ym1pdF9kaXYucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdC8vcmVhZCBkcmFnIGFuZCBkcm9wIGZpbGVuYW1lXHJcblx0dmFyIGZpbGVOYW1lID0gZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuXHRhbGVydChmaWxlTmFtZS5uYW1lKTtcclxuXHQkKCcjaW1wb3J0X2Nzdl9DU1ZfZmlsZScpLmZpbGVzID0gZmlsZU5hbWU7XHJcblx0YWxlcnQoJCgnI2ltcG9ydF9jc3ZfQ1NWX2ZpbGUnKS5maWxlc1swXSk7XHJcblx0Ly8kKCcjaW1wb3J0X2Nzdl9fdG9rZW4nKS52YWwoZSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlcXVpcmUiLCIkIiwic3VibWl0X2J1dHRvbiIsImltcG9ydF9zY3ZfcmVzZXQiLCJiZWZvcmVfc3VibWl0X2RpdiIsIm1vZGFsX2J0bl9jc3YiLCJhZnRlcl9zdWJtaXRfbG9nbyIsInBvc3Rfc3VibWl0X2RpdiIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImZpbGVOYW1lIiwidmFsIiwic3BsaXQiLCJwb3AiLCJyZW1vdmVDbGFzcyIsImh0bWwiLCJhZGRDbGFzcyIsImRyYWdUaW1lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImR0Iiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsInR5cGVzIiwiaW5kZXhPZiIsImNvbnRhaW5zIiwic2hvdyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhbGVydCIsImhpZGUiLCJmaWxlcyIsIm5hbWUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=