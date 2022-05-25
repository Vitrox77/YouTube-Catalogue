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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--57e942"], () => (__webpack_exec__("./assets/js/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7OztBQ3hCQSxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlYXJjaC5jc3M/NThkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9zZWFyY2guY3NzJztcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJyNzZWFyY2gtdGFnJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IHZhbHVlIG9mIGVsZW1lbnRcclxuICAgICAgICBlbGVtLmRhdGEoJ29sZFZhbCcsIGVsZW0udmFsKCkpO1xyXG4gICAgIFxyXG4gICAgICAgIC8vIExvb2sgZm9yIGNoYW5nZXMgaW4gdGhlIHZhbHVlXHJcbiAgICAgICAgZWxlbS5iaW5kKFwia2V5dXAgaW5wdXQgcGFzdGVcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW0uZGF0YSgnb2xkVmFsJykgIT0gZWxlbS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkVGFnVXNlcihlbGVtLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZWQgc3RvcmVkIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBlbGVtLmRhdGEoJ29sZFZhbCcsIGVsZW0udmFsKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERvIEFKQVggY2FsbCB0byBnZXQgdGhlIHRhZyBjb3JyZXNwb25kaW5nIHRvIHRoZSBzZWFyY2hcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3NlYXJjaC9nZXQvJyArIGVsZW0udmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFnTmFtZSc6IGVsZW0udmFsKClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnNlZF9kYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQocGFyc2VkX2RhdGFbMF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0QWxsVGFncygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRfZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pc1RhZ1BlcnNvKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWdVc2VyKGVsZW1lbnQubmFtZSwgZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWdWaWRlbyhlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihlbGVtLnZhbCgpLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHJlc2V0QWxsVGFncygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIudGFnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICBhbGVydChlbGVtLnRleHQoKSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUYWdVc2VyKHRhZ05hbWUsIHRhZ0lkKSB7XHJcbiAgICB2YXIgZGl2X2RhdGEgPSAkKCcjdGFnLXVzZXInKS5odG1sKCkrXCI8ZGl2IGNsYXNzPVxcXCJjb2wtNCB0YWdzLXdyYXBcXFwiPjxkaXYgY2xhc3M9XFxcInRhZyBtLTJcXFwiPlwiICsgdGFnTmFtZSArIFwiPC9kaXY+PGRpdj5cIjtcclxuICAgICQoJyN0YWctdXNlcicpLmh0bWwoZGl2X2RhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIHJlc2V0QWxsVGFncygpe1xyXG4gICAgJCgnI3RhZy11c2VyJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjdGFnLXZpZGVvJykuaHRtbCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhZ1ZpZGVvKHRhZ05hbWUsIHRhZ0lkKSB7XHJcbiAgICB2YXIgZGl2X2RhdGEgPSAkKCcjdGFnLXZpZGVvJykuaHRtbCgpK1wiPGRpdiBjbGFzcz1cXFwiY29sLTQgdGFncy13cmFwXFxcIj48ZGl2IGNsYXNzPVxcXCJ0YWcgbS0yXFxcIj5cIiArIHRhZ05hbWUgKyBcIjwvZGl2PjxkaXY+XCI7XHJcbiAgICAkKCcjdGFnLXZpZGVvJykuaHRtbChkaXZfZGF0YSk7XHJcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGdW5jdGlvbi5iaW5kICE9PSBiaW5kIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGVU5DVElPTl9OQU1FX0VYSVNUUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuRVhJU1RTO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nKTtcbnZhciBuYW1lUkUgPSAvZnVuY3Rpb25cXGIoPzpcXHN8XFwvXFwqW1xcU1xcc10qP1xcKlxcL3xcXC9cXC9bXlxcblxccl0qW1xcblxccl0rKSooW15cXHMoL10qKS87XG52YXIgcmVnRXhwRXhlYyA9IHVuY3VycnlUaGlzKG5hbWVSRS5leGVjKTtcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICFGVU5DVElPTl9OQU1FX0VYSVNUUykge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZWdFeHBFeGVjKG5hbWVSRSwgZnVuY3Rpb25Ub1N0cmluZyh0aGlzKSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiZWxlbSIsImRhdGEiLCJ2YWwiLCJiaW5kIiwiZXZlbnQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImFsZXJ0IiwicGFyc2VkX2RhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNldEFsbFRhZ3MiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlzVGFnUGVyc28iLCJhZGRUYWdVc2VyIiwibmFtZSIsImlkIiwiYWRkVGFnVmlkZW8iLCJsZW5ndGgiLCJvbiIsInRleHQiLCJ0YWdOYW1lIiwidGFnSWQiLCJkaXZfZGF0YSIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9