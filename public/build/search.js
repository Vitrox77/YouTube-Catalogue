(self["webpackChunk"] = self["webpackChunk"] || []).push([["search"],{

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_search_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/search.css */ "./assets/styles/search.css");







var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
  $('#search-tag').each(function () {
    var elem = $(this); // Save current value of element

    elem.data('oldVal', elem.val()); // Look for changes in the value

    elem.bind("keyup input paste", function (event) {
      if (elem.data('oldVal') != elem.val()) {
        // addTagUser(elem.val());
        // Updated stored value
        elem.data('oldVal', elem.val()); // Do AJAX call to get the tag corresponding to the search

        $.ajax({
          url: '/search/get/' + elem.val(),
          type: 'GET',
          data: {
            'tagName': elem.val()
          },
          dataType: 'json',
          success: function success(data) {
            alert(data);
            var parsed_data = JSON.parse(data); // alert(parsed_data[0].name);

            resetAllTags();
            parsed_data.forEach(function (element) {
              if (element.isTagPerso) {
                addTagUser(element.name, element.id);
              } else {
                addTagVideo(element.name, element.id);
              }
            });
          }
        });
      }

      if (elem.val().length == 0) {
        resetAllTags();
      }
    });
  });
  $(document).on("click", ".tag", function () {
    var elem = $(this);
    alert(elem.text());
  });
});

function addTagUser(tagName, tagId) {
  var div_data = $('#tag-user').html() + "<div class=\"col-4 tags-wrap\"><div class=\"tag m-2\">" + tagName + "</div><div>";
  $('#tag-user').html(div_data);
}

function resetAllTags() {
  $('#tag-user').html('');
  $('#tag-video').html('');
}

function addTagVideo(tagName, tagId) {
  var div_data = $('#tag-video').html() + "<div class=\"col-4 tags-wrap\"><div class=\"tag m-2\">" + tagName + "</div><div>";
  $('#tag-video').html(div_data);
}

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var Function = global.Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./assets/styles/search.css":
/*!**********************************!*\
  !*** ./assets/styles/search.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-55ee79"], () => (__webpack_exec__("./assets/js/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBRCxDQUFDLENBQUNFLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJILEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJJLElBQWpCLENBQXNCLFlBQVc7QUFDN0IsUUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFaLENBRDZCLENBRTdCOztBQUNBSyxJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVSxRQUFWLEVBQW9CRCxJQUFJLENBQUNFLEdBQUwsRUFBcEIsRUFINkIsQ0FLN0I7O0FBQ0FGLElBQUFBLElBQUksQ0FBQ0csSUFBTCxDQUFVLG1CQUFWLEVBQStCLFVBQVNDLEtBQVQsRUFBZ0I7QUFFM0MsVUFBSUosSUFBSSxDQUFDQyxJQUFMLENBQVUsUUFBVixLQUF1QkQsSUFBSSxDQUFDRSxHQUFMLEVBQTNCLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQUYsUUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVUsUUFBVixFQUFvQkQsSUFBSSxDQUFDRSxHQUFMLEVBQXBCLEVBSG1DLENBS25DOztBQUNBUCxRQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNIQyxVQUFBQSxHQUFHLEVBQUUsaUJBQWlCTixJQUFJLENBQUNFLEdBQUwsRUFEbkI7QUFFSEssVUFBQUEsSUFBSSxFQUFFLEtBRkg7QUFHSE4sVUFBQUEsSUFBSSxFQUFFO0FBQ0YsdUJBQVdELElBQUksQ0FBQ0UsR0FBTDtBQURULFdBSEg7QUFNSE0sVUFBQUEsUUFBUSxFQUFFLE1BTlA7QUFPSEMsVUFBQUEsT0FBTyxFQUFFLGlCQUFTUixJQUFULEVBQWU7QUFDcEJTLFlBQUFBLEtBQUssQ0FBQ1QsSUFBRCxDQUFMO0FBQ0EsZ0JBQUlVLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdaLElBQVgsQ0FBbEIsQ0FGb0IsQ0FHcEI7O0FBRUFhLFlBQUFBLFlBQVk7QUFDWkgsWUFBQUEsV0FBVyxDQUFDSSxPQUFaLENBQW9CLFVBQUFDLE9BQU8sRUFBSTtBQUMzQixrQkFBSUEsT0FBTyxDQUFDQyxVQUFaLEVBQXdCO0FBQ3BCQyxnQkFBQUEsVUFBVSxDQUFDRixPQUFPLENBQUNHLElBQVQsRUFBZUgsT0FBTyxDQUFDSSxFQUF2QixDQUFWO0FBQ0gsZUFGRCxNQUVPO0FBQ0hDLGdCQUFBQSxXQUFXLENBQUNMLE9BQU8sQ0FBQ0csSUFBVCxFQUFlSCxPQUFPLENBQUNJLEVBQXZCLENBQVg7QUFDSDtBQUNKLGFBTkQ7QUFPSDtBQXBCRSxTQUFQO0FBc0JIOztBQUNELFVBQUlwQixJQUFJLENBQUNFLEdBQUwsR0FBV29CLE1BQVgsSUFBcUIsQ0FBekIsRUFBNEI7QUFDeEJSLFFBQUFBLFlBQVk7QUFDZjtBQUNKLEtBbENEO0FBcUNILEdBM0NEO0FBNkNBbkIsRUFBQUEsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWTBCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFDdkMsUUFBSXZCLElBQUksR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBWjtBQUNBZSxJQUFBQSxLQUFLLENBQUNWLElBQUksQ0FBQ3dCLElBQUwsRUFBRCxDQUFMO0FBQ0gsR0FIRDtBQUlILENBbEREOztBQW9EQSxTQUFTTixVQUFULENBQW9CTyxPQUFwQixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDaEMsTUFBSUMsUUFBUSxHQUFHaEMsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlaUMsSUFBZixLQUF3Qix3REFBeEIsR0FBbUZILE9BQW5GLEdBQTZGLGFBQTVHO0FBQ0E5QixFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVpQyxJQUFmLENBQW9CRCxRQUFwQjtBQUNIOztBQUVELFNBQVNiLFlBQVQsR0FBd0I7QUFDcEJuQixFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVpQyxJQUFmLENBQW9CLEVBQXBCO0FBQ0FqQyxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCaUMsSUFBaEIsQ0FBcUIsRUFBckI7QUFDSDs7QUFFRCxTQUFTUCxXQUFULENBQXFCSSxPQUFyQixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDakMsTUFBSUMsUUFBUSxHQUFHaEMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmlDLElBQWhCLEtBQXlCLHdEQUF6QixHQUFvRkgsT0FBcEYsR0FBOEYsYUFBN0c7QUFDQTlCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JpQyxJQUFoQixDQUFxQkQsUUFBckI7QUFDSDs7Ozs7Ozs7Ozs7QUNwRVk7QUFDYixlQUFlLHdIQUErQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7OztBQ1hXO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7QUFDM0QsR0FBRztBQUNIOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0EsNEJBQTRCLG1CQUFPLENBQUMseUdBQXNDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjtBQUNwRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsa0JBQWtCLG1CQUFPLENBQUMsbUdBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBNkQ7QUFDakU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1RELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFpRTtBQUNyRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDUEQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtSEFBNEM7QUFDdkUsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELHFCQUFxQixnSUFBZ0Q7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUN4QkEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlYXJjaC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvc2VhcmNoLmNzcyc7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3NlYXJjaC10YWcnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgdmFsdWUgb2YgZWxlbWVudFxyXG4gICAgICAgIGVsZW0uZGF0YSgnb2xkVmFsJywgZWxlbS52YWwoKSk7XHJcblxyXG4gICAgICAgIC8vIExvb2sgZm9yIGNoYW5nZXMgaW4gdGhlIHZhbHVlXHJcbiAgICAgICAgZWxlbS5iaW5kKFwia2V5dXAgaW5wdXQgcGFzdGVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtLmRhdGEoJ29sZFZhbCcpICE9IGVsZW0udmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkZFRhZ1VzZXIoZWxlbS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGVkIHN0b3JlZCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZWxlbS5kYXRhKCdvbGRWYWwnLCBlbGVtLnZhbCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEbyBBSkFYIGNhbGwgdG8gZ2V0IHRoZSB0YWcgY29ycmVzcG9uZGluZyB0byB0aGUgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9zZWFyY2gvZ2V0LycgKyBlbGVtLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhZ05hbWUnOiBlbGVtLnZhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJzZWRfZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHBhcnNlZF9kYXRhWzBdLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRBbGxUYWdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZF9kYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc1RhZ1BlcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnVXNlcihlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWdWaWRlbyhlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbS52YWwoKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRBbGxUYWdzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi50YWdcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgIGFsZXJ0KGVsZW0udGV4dCgpKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRhZ1VzZXIodGFnTmFtZSwgdGFnSWQpIHtcclxuICAgIHZhciBkaXZfZGF0YSA9ICQoJyN0YWctdXNlcicpLmh0bWwoKSArIFwiPGRpdiBjbGFzcz1cXFwiY29sLTQgdGFncy13cmFwXFxcIj48ZGl2IGNsYXNzPVxcXCJ0YWcgbS0yXFxcIj5cIiArIHRhZ05hbWUgKyBcIjwvZGl2PjxkaXY+XCI7XHJcbiAgICAkKCcjdGFnLXVzZXInKS5odG1sKGRpdl9kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRBbGxUYWdzKCkge1xyXG4gICAgJCgnI3RhZy11c2VyJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjdGFnLXZpZGVvJykuaHRtbCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhZ1ZpZGVvKHRhZ05hbWUsIHRhZ0lkKSB7XHJcbiAgICB2YXIgZGl2X2RhdGEgPSAkKCcjdGFnLXZpZGVvJykuaHRtbCgpICsgXCI8ZGl2IGNsYXNzPVxcXCJjb2wtNCB0YWdzLXdyYXBcXFwiPjxkaXYgY2xhc3M9XFxcInRhZyBtLTJcXFwiPlwiICsgdGFnTmFtZSArIFwiPC9kaXY+PGRpdj5cIjtcclxuICAgICQoJyN0YWctdmlkZW8nKS5odG1sKGRpdl9kYXRhKTtcclxufSIsIid1c2Ugc3RyaWN0JztcclxudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XHJcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcclxuXHJcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXHJcbn0gOiBbXS5mb3JFYWNoO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XHJcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcclxuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xyXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xyXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIENTU1J1bGVMaXN0OiAwLFxyXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXHJcbiAgQ1NTVmFsdWVMaXN0OiAwLFxyXG4gIENsaWVudFJlY3RMaXN0OiAwLFxyXG4gIERPTVJlY3RMaXN0OiAwLFxyXG4gIERPTVN0cmluZ0xpc3Q6IDAsXHJcbiAgRE9NVG9rZW5MaXN0OiAxLFxyXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxyXG4gIEZpbGVMaXN0OiAwLFxyXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxyXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxyXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcclxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcclxuICBNZWRpYUxpc3Q6IDAsXHJcbiAgTWltZVR5cGVBcnJheTogMCxcclxuICBOYW1lZE5vZGVNYXA6IDAsXHJcbiAgTm9kZUxpc3Q6IDEsXHJcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcclxuICBQbHVnaW46IDAsXHJcbiAgUGx1Z2luQXJyYXk6IDAsXHJcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcclxuICBTVkdOdW1iZXJMaXN0OiAwLFxyXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxyXG4gIFNWR1BvaW50TGlzdDogMCxcclxuICBTVkdTdHJpbmdMaXN0OiAwLFxyXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXHJcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcclxuICBTdHlsZVNoZWV0TGlzdDogMCxcclxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxyXG4gIFRleHRUcmFja0xpc3Q6IDAsXHJcbiAgVG91Y2hMaXN0OiAwXHJcbn07XHJcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxyXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XHJcblxyXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xyXG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xyXG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcclxudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcclxudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XHJcblxyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xyXG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xyXG52YXIgZmFjdG9yaWVzID0ge307XHJcblxyXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcclxuICBpZiAoIWhhc093bihmYWN0b3JpZXMsIGFyZ3NMZW5ndGgpKSB7XHJcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XHJcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgam9pbihsaXN0LCAnLCcpICsgJyknKTtcclxuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XHJcbn07XHJcblxyXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXHJcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBGdW5jdGlvbi5iaW5kIDogZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xyXG4gIHZhciBGID0gYUNhbGxhYmxlKHRoaXMpO1xyXG4gIHZhciBQcm90b3R5cGUgPSBGLnByb3RvdHlwZTtcclxuICB2YXIgcGFydEFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cywgMSk7XHJcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XHJcbiAgICB2YXIgYXJncyA9IGNvbmNhdChwYXJ0QXJncywgYXJyYXlTbGljZShhcmd1bWVudHMpKTtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChGLCBhcmdzLmxlbmd0aCwgYXJncykgOiBGLmFwcGx5KHRoYXQsIGFyZ3MpO1xyXG4gIH07XHJcbiAgaWYgKGlzT2JqZWN0KFByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gUHJvdG90eXBlO1xyXG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xyXG4gIGZvckVhY2g6IGZvckVhY2hcclxufSk7XHJcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XHJcblxyXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXHJcbiQoeyB0YXJnZXQ6ICdGdW5jdGlvbicsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZ1bmN0aW9uLmJpbmQgIT09IGJpbmQgfSwge1xyXG4gIGJpbmQ6IGJpbmRcclxufSk7XHJcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xyXG52YXIgRlVOQ1RJT05fTkFNRV9FWElTVFMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkVYSVNUUztcclxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xyXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XHJcblxyXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xyXG52YXIgbmFtZVJFID0gL2Z1bmN0aW9uXFxiKD86XFxzfFxcL1xcKltcXFNcXHNdKj9cXCpcXC98XFwvXFwvW15cXG5cXHJdKltcXG5cXHJdKykqKFteXFxzKC9dKikvO1xyXG52YXIgcmVnRXhwRXhlYyA9IHVuY3VycnlUaGlzKG5hbWVSRS5leGVjKTtcclxudmFyIE5BTUUgPSAnbmFtZSc7XHJcblxyXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXHJcbmlmIChERVNDUklQVE9SUyAmJiAhRlVOQ1RJT05fTkFNRV9FWElTVFMpIHtcclxuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcclxudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcclxuXHJcbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xyXG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxyXG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcclxuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xyXG4gIH1cclxufTtcclxuXHJcbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcclxuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcclxuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xyXG4gIH1cclxufVxyXG5cclxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiZWxlbSIsImRhdGEiLCJ2YWwiLCJiaW5kIiwiZXZlbnQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImFsZXJ0IiwicGFyc2VkX2RhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNldEFsbFRhZ3MiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlzVGFnUGVyc28iLCJhZGRUYWdVc2VyIiwibmFtZSIsImlkIiwiYWRkVGFnVmlkZW8iLCJsZW5ndGgiLCJvbiIsInRleHQiLCJ0YWdOYW1lIiwidGFnSWQiLCJkaXZfZGF0YSIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9