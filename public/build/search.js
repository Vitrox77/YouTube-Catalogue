"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["search"],{

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_search_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/search.css */ "./assets/styles/search.css");









var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // array of video id


var videosId = ["1", "2"]; // array of tag id

var tagsId = []; // Timeout pour la recherche des tags

var inputSearchTimeout; // Event listener for the search input

var inputSearch = $('#search-tag');
$(document).ready(function () {
  var elem = inputSearch; // Save current value of element

  elem.data('oldVal', elem.val()); // Look for changes in the value

  elem.bind("keyup input paste", function (event) {
    if (elem.data('oldVal') != elem.val()) {
      //set timeout of start finding tags
      clearTimeout(inputSearchTimeout);
      startSearchingTags(elem);
    }

    if (elem.val().length == 0) {
      resetAllTags();
      hideCreateTagButton();
    }
  });
  $(document).on("click", ".tag", function () {
    var elem = $(this);
    addTagRecap(elem.text(), elem.attr('id'));
  });
  $(document).on("click", ".tag-recap-selected", function () {
    var elem = $(this);
    removeTagRecap(elem.attr('id'));
  }); // when clicking on button submit tag, call the function submitTags

  $('#submit-tags').click(function () {
    // alert(videosId)
    // alert(tagsId)
    submitTags();
    resetTagRecap();
  }); // when clicking on button add tag, call the function addNewTag

  $('#create-tag').click(function () {
    // collect the string if the input called search-tag
    var tagName = $('#search-tag').val();
    var tagId = $('#search-tag').attr('id');
    alert(tagId); // alert(tagName);

    if (tagName.length > 0) {
      addNewTag(tagName);
    }
  });
});

function startSearchingTags(elem) {
  // alert("Searching tags");
  inputSearchTimeout = setTimeout(function () {
    // Updated stored value
    elem.data('oldVal', elem.val()); // do a set timeout of the rest of the function

    if (elem.val() != '') {
      // Do AJAX call to get the tag corresponding to the search
      $.ajax({
        url: '/search/get/' + elem.val(),
        type: 'GET',
        data: {
          'tagName': elem.val()
        },
        dataType: 'json',
        success: function success(data) {
          if (data.length == 2) {
            showCreateTagButton();
          } else {
            hideCreateTagButton();
          }

          var parsed_data = JSON.parse(data);
          resetAllTags();
          parsed_data.forEach(function (element) {
            if (element.isTagPerso) {
              addTagUser(element.name, element.id);
            } else {
              addTagVideo(element.name, element.id);
            }
          });
        },
        error: function error(data) {
          // alert();
          showCreateTagButton();
        }
      });
    }
  }, 400);
}

function addTagUser(tagName, tagId) {
  var div_data = $('#tag-user').html() + "<div class=\"col-4 tags-wrap\"><div class=\"tag ellipsis m-2\" id=\"" + tagId + "\" >" + tagName + "</div><div>";
  $('#tag-user').html(div_data);
}

function addTagVideo(tagName, tagId) {
  var div_data = $('#tag-video').html() + "<div class=\"col-4 tags-wrap\"><div class=\"tag ellipsis m-2\" id=\"" + tagId + "\">" + tagName + "</div><div>";
  $('#tag-video').html(div_data);
}

function addTagRecap(tagName, tagId) {
  if ($.inArray(tagId, tagsId) == -1) {
    var div_data = $('#tag-recap').html() + "<div class=\"col-12 tags-wrap\"><div class=\"tag-recap-selected ellipsis m-2\" id=\"recap-" + tagId + "\">" + tagName + "</div><div>";
    $('#tag-recap').html(div_data); // add the tag id to the array tagsId

    tagsId.push(tagId);
  } else {
    //Do not hide this alert
    alert("Tag already added");
  }
}

function removeTagRecap(tagId) {
  $("#" + tagId).remove();
  tagsId.splice($.inArray(tagId, tagsId), 1);
}

function resetTagRecap(tagId) {
  $('#tag-recap').html('');
}

function resetAllTags() {
  $('#tag-user').html('');
  $('#tag-video').html('');
}

function showCreateTagButton() {
  $('#create-tag').show();
}

function hideCreateTagButton() {
  $('#create-tag').hide();
}

function submitTags() {
  videosId.forEach(function (videoId) {
    tagsId.forEach(function (tagId) {
      $.ajax({
        url: 'search/insert/tag/' + videoId + '/' + tagId,
        type: 'GET',
        data: {
          'videoId': videoId,
          'tagId': tagId
        },
        dataType: 'json',
        success: function success(data) {// alert(data);
        }
      });
    });
  });
}

function addNewTag(tagName) {
  $.ajax({
    url: 'search/create/tag/' + tagName,
    type: 'POST',
    data: {
      'tagName': tagName
    },
    dataType: 'json',
    success: function success(data) {
      // alert(data);
      clearTimeout(inputSearchTimeout);
      startSearchingTags(inputSearch);
    }
  });
}

/***/ }),

/***/ "./assets/styles/search.css":
/*!**********************************!*\
  !*** ./assets/styles/search.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-244e52","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-a77685"], () => (__webpack_exec__("./assets/js/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YscUJBQVcrQyxPQURUO0FBRUYsbUJBQVM3QjtBQUZQLFNBSEg7QUFPSE8sUUFBQUEsUUFBUSxFQUFFLE1BUFA7QUFRSEMsUUFBQUEsT0FBTyxFQUFFLGlCQUFTMUIsSUFBVCxFQUFlLENBQ3BCO0FBQ0g7QUFWRSxPQUFQO0FBWUgsS0FiRDtBQWNILEdBZkQ7QUFnQkg7O0FBRUQsU0FBU29CLFNBQVQsQ0FBbUJILE9BQW5CLEVBQTRCO0FBQ3hCMUIsRUFBQUEsQ0FBQyxDQUFDK0IsSUFBRixDQUFPO0FBQ0hDLElBQUFBLEdBQUcsRUFBRSx1QkFBdUJOLE9BRHpCO0FBRUhPLElBQUFBLElBQUksRUFBRSxNQUZIO0FBR0h4QixJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBV2lCO0FBRFQsS0FISDtBQU1IUSxJQUFBQSxRQUFRLEVBQUUsTUFOUDtBQU9IQyxJQUFBQSxPQUFPLEVBQUUsaUJBQVMxQixJQUFULEVBQWU7QUFDcEI7QUFDQUksTUFBQUEsWUFBWSxDQUFDVCxrQkFBRCxDQUFaO0FBQ0FVLE1BQUFBLGtCQUFrQixDQUFDVCxXQUFELENBQWxCO0FBQ0g7QUFYRSxHQUFQO0FBYUg7Ozs7Ozs7Ozs7O0FDdkxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlYXJjaC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvc2VhcmNoLmNzcyc7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbi8vIGFycmF5IG9mIHZpZGVvIGlkXHJcbnZhciB2aWRlb3NJZCA9IFtcIjFcIixcIjJcIl07XHJcbi8vIGFycmF5IG9mIHRhZyBpZFxyXG52YXIgdGFnc0lkID0gW107XHJcbi8vIFRpbWVvdXQgcG91ciBsYSByZWNoZXJjaGUgZGVzIHRhZ3NcclxudmFyIGlucHV0U2VhcmNoVGltZW91dFxyXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgdGhlIHNlYXJjaCBpbnB1dFxyXG52YXIgaW5wdXRTZWFyY2ggPSAkKCcjc2VhcmNoLXRhZycpO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGVsZW0gPSBpbnB1dFNlYXJjaDtcclxuICAgIC8vIFNhdmUgY3VycmVudCB2YWx1ZSBvZiBlbGVtZW50XHJcbiAgICBlbGVtLmRhdGEoJ29sZFZhbCcsIGVsZW0udmFsKCkpO1xyXG5cclxuICAgIC8vIExvb2sgZm9yIGNoYW5nZXMgaW4gdGhlIHZhbHVlXHJcbiAgICBlbGVtLmJpbmQoXCJrZXl1cCBpbnB1dCBwYXN0ZVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChlbGVtLmRhdGEoJ29sZFZhbCcpICE9IGVsZW0udmFsKCkpIHtcclxuICAgICAgICAgICAgLy9zZXQgdGltZW91dCBvZiBzdGFydCBmaW5kaW5nIHRhZ3NcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlucHV0U2VhcmNoVGltZW91dCk7XHJcbiAgICAgICAgICAgIHN0YXJ0U2VhcmNoaW5nVGFncyhlbGVtKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoZWxlbS52YWwoKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXNldEFsbFRhZ3MoKTtcclxuICAgICAgICAgICAgaGlkZUNyZWF0ZVRhZ0J1dHRvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi50YWdcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgIGFkZFRhZ1JlY2FwKGVsZW0udGV4dCgpLCBlbGVtLmF0dHIoJ2lkJykpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnRhZy1yZWNhcC1zZWxlY3RlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgcmVtb3ZlVGFnUmVjYXAoZWxlbS5hdHRyKCdpZCcpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gYnV0dG9uIHN1Ym1pdCB0YWcsIGNhbGwgdGhlIGZ1bmN0aW9uIHN1Ym1pdFRhZ3NcclxuICAgICQoJyNzdWJtaXQtdGFncycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KHZpZGVvc0lkKVxyXG4gICAgICAgIC8vIGFsZXJ0KHRhZ3NJZClcclxuICAgICAgICBzdWJtaXRUYWdzKCk7XHJcbiAgICAgICAgcmVzZXRUYWdSZWNhcCgpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAvLyB3aGVuIGNsaWNraW5nIG9uIGJ1dHRvbiBhZGQgdGFnLCBjYWxsIHRoZSBmdW5jdGlvbiBhZGROZXdUYWdcclxuICAgICQoJyNjcmVhdGUtdGFnJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gY29sbGVjdCB0aGUgc3RyaW5nIGlmIHRoZSBpbnB1dCBjYWxsZWQgc2VhcmNoLXRhZ1xyXG4gICAgICAgIHZhciB0YWdOYW1lID0gJCgnI3NlYXJjaC10YWcnKS52YWwoKTtcclxuICAgICAgICB2YXIgdGFnSWQgPSAkKCcjc2VhcmNoLXRhZycpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgYWxlcnQodGFnSWQpO1xyXG4gICAgICAgIC8vIGFsZXJ0KHRhZ05hbWUpO1xyXG4gICAgICAgIGlmKHRhZ05hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhZGROZXdUYWcodGFnTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRTZWFyY2hpbmdUYWdzKGVsZW0pIHtcclxuICAgIC8vIGFsZXJ0KFwiU2VhcmNoaW5nIHRhZ3NcIik7XHJcbiAgICBpbnB1dFNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFVwZGF0ZWQgc3RvcmVkIHZhbHVlXHJcbiAgICBlbGVtLmRhdGEoJ29sZFZhbCcsIGVsZW0udmFsKCkpO1xyXG4gICAgLy8gZG8gYSBzZXQgdGltZW91dCBvZiB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgaWYoZWxlbS52YWwoKSAhPSAnJyl7XHJcbiAgICAgICAgLy8gRG8gQUpBWCBjYWxsIHRvIGdldCB0aGUgdGFnIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHNlYXJjaFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9zZWFyY2gvZ2V0LycgKyBlbGVtLnZhbCgpLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ3RhZ05hbWUnOiBlbGVtLnZhbCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NyZWF0ZVRhZ0J1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVDcmVhdGVUYWdCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRfZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc2V0QWxsVGFncygpO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkX2RhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc1RhZ1BlcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZ1VzZXIoZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWdWaWRlbyhlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoKTtcclxuICAgICAgICAgICAgICAgIHNob3dDcmVhdGVUYWdCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB9LCA0MDApO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFRhZ1VzZXIodGFnTmFtZSwgdGFnSWQpIHtcclxuICAgIHZhciBkaXZfZGF0YSA9ICQoJyN0YWctdXNlcicpLmh0bWwoKSArIFwiPGRpdiBjbGFzcz1cXFwiY29sLTQgdGFncy13cmFwXFxcIj48ZGl2IGNsYXNzPVxcXCJ0YWcgZWxsaXBzaXMgbS0yXFxcIiBpZD1cXFwiXCIrIHRhZ0lkICtcIlxcXCIgPlwiICsgdGFnTmFtZSArIFwiPC9kaXY+PGRpdj5cIjtcclxuICAgICQoJyN0YWctdXNlcicpLmh0bWwoZGl2X2RhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYWdWaWRlbyh0YWdOYW1lLCB0YWdJZCkge1xyXG4gICAgdmFyIGRpdl9kYXRhID0gJCgnI3RhZy12aWRlbycpLmh0bWwoKSArIFwiPGRpdiBjbGFzcz1cXFwiY29sLTQgdGFncy13cmFwXFxcIj48ZGl2IGNsYXNzPVxcXCJ0YWcgZWxsaXBzaXMgbS0yXFxcIiBpZD1cXFwiXCIrIHRhZ0lkICtcIlxcXCI+XCIgKyB0YWdOYW1lICsgXCI8L2Rpdj48ZGl2PlwiO1xyXG4gICAgJCgnI3RhZy12aWRlbycpLmh0bWwoZGl2X2RhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYWdSZWNhcCh0YWdOYW1lLCB0YWdJZCkge1xyXG4gICAgaWYoJC5pbkFycmF5KHRhZ0lkLCB0YWdzSWQpID09IC0xKXtcclxuICAgICAgICB2YXIgZGl2X2RhdGEgPSAkKCcjdGFnLXJlY2FwJykuaHRtbCgpICsgXCI8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGFncy13cmFwXFxcIj48ZGl2IGNsYXNzPVxcXCJ0YWctcmVjYXAtc2VsZWN0ZWQgZWxsaXBzaXMgbS0yXFxcIiBpZD1cXFwicmVjYXAtXCIrIHRhZ0lkICtcIlxcXCI+XCIgKyB0YWdOYW1lICsgXCI8L2Rpdj48ZGl2PlwiO1xyXG4gICAgICAgICQoJyN0YWctcmVjYXAnKS5odG1sKGRpdl9kYXRhKTtcclxuICAgICAgICAvLyBhZGQgdGhlIHRhZyBpZCB0byB0aGUgYXJyYXkgdGFnc0lkXHJcbiAgICAgICAgICAgIHRhZ3NJZC5wdXNoKHRhZ0lkKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy9EbyBub3QgaGlkZSB0aGlzIGFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVGFnIGFscmVhZHkgYWRkZWRcIilcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhZ1JlY2FwKHRhZ0lkKSB7XHJcbiAgICAkKFwiI1wiK3RhZ0lkKS5yZW1vdmUoKTtcclxuICAgIHRhZ3NJZC5zcGxpY2UoICQuaW5BcnJheSh0YWdJZCwgdGFnc0lkKSwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0VGFnUmVjYXAodGFnSWQpIHtcclxuICAgICQoJyN0YWctcmVjYXAnKS5odG1sKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRBbGxUYWdzKCkge1xyXG4gICAgJCgnI3RhZy11c2VyJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjdGFnLXZpZGVvJykuaHRtbCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDcmVhdGVUYWdCdXR0b24oKSB7XHJcbiAgICAkKCcjY3JlYXRlLXRhZycpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUNyZWF0ZVRhZ0J1dHRvbigpIHtcclxuICAgICQoJyNjcmVhdGUtdGFnJykuaGlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYWdzKCkge1xyXG4gICAgdmlkZW9zSWQuZm9yRWFjaCh2aWRlb0lkID0+IHtcclxuICAgICAgICB0YWdzSWQuZm9yRWFjaCh0YWdJZCA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFyY2gvaW5zZXJ0L3RhZy8nICsgdmlkZW9JZCArICcvJyArIHRhZ0lkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZpZGVvSWQnOiB2aWRlb0lkLFxyXG4gICAgICAgICAgICAgICAgICAgICd0YWdJZCc6IHRhZ0lkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1RhZyh0YWdOYW1lKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ3NlYXJjaC9jcmVhdGUvdGFnLycgKyB0YWdOYW1lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICd0YWdOYW1lJzogdGFnTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaW5wdXRTZWFyY2hUaW1lb3V0KTtcclxuICAgICAgICAgICAgc3RhcnRTZWFyY2hpbmdUYWdzKGlucHV0U2VhcmNoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsInZpZGVvc0lkIiwidGFnc0lkIiwiaW5wdXRTZWFyY2hUaW1lb3V0IiwiaW5wdXRTZWFyY2giLCJkb2N1bWVudCIsInJlYWR5IiwiZWxlbSIsImRhdGEiLCJ2YWwiLCJiaW5kIiwiZXZlbnQiLCJjbGVhclRpbWVvdXQiLCJzdGFydFNlYXJjaGluZ1RhZ3MiLCJsZW5ndGgiLCJyZXNldEFsbFRhZ3MiLCJoaWRlQ3JlYXRlVGFnQnV0dG9uIiwib24iLCJhZGRUYWdSZWNhcCIsInRleHQiLCJhdHRyIiwicmVtb3ZlVGFnUmVjYXAiLCJjbGljayIsInN1Ym1pdFRhZ3MiLCJyZXNldFRhZ1JlY2FwIiwidGFnTmFtZSIsInRhZ0lkIiwiYWxlcnQiLCJhZGROZXdUYWciLCJzZXRUaW1lb3V0IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJzaG93Q3JlYXRlVGFnQnV0dG9uIiwicGFyc2VkX2RhdGEiLCJKU09OIiwicGFyc2UiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlzVGFnUGVyc28iLCJhZGRUYWdVc2VyIiwibmFtZSIsImlkIiwiYWRkVGFnVmlkZW8iLCJlcnJvciIsImRpdl9kYXRhIiwiaHRtbCIsImluQXJyYXkiLCJwdXNoIiwicmVtb3ZlIiwic3BsaWNlIiwic2hvdyIsImhpZGUiLCJ2aWRlb0lkIl0sInNvdXJjZVJvb3QiOiIifQ==