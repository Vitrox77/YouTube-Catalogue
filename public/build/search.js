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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_search_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/search.css */ "./assets/styles/search.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_10__);












var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // array of video id


var videosId = []; // array of tag id

var tagsId = []; // Timeout pour la recherche des tags

var inputSearchTimeout; // Event listener for the search input

var inputSearch = $('#search-tag');
var tooltipTriggerList = [];
$(document).ready(function () {
  toggleAllTooltips();
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
  $(document).on("click", ".tag-js", function () {
    var elem = $(this);
    addTagRecap(elem.text(), elem.attr('id'));
  });
  $(document).on("click", ".tag-recap-selected", function () {
    var elem = $(this);
    removeTagRecap(elem.attr('id'));
  }); // when clicking on button add tag, we add all the video to the video list 

  $('#addTagButton').click(function () {
    videosId = [];
    $('.form-check-video-res:checkbox:checked').each(function () {
      //check if the id is not in videosId already
      var videoId = $(this).attr('id');

      if ($.inArray(videoId, videosId) == -1) {
        videosId.push($(this).attr('id'));
      }
    });

    if (videosId.length <= 0) {
      alert("Pas de vidéos sélectionnées !"); //hide submit tag button

      $('#submit-tags').attr('disabled', true);
    } else {
      $('#submit-tags').attr('disabled', false);
    }
  }); // When clicking the select all checkbox, make all checbox to checked

  $('#CheckBoxSelectAll').change(function () {
    var videosCheckbox = $('.form-check-video-res:checkbox');

    if (this.checked) {
      videosCheckbox.each(function () {
        $(this).prop('checked', true);
      });
    } else {
      videosCheckbox.each(function () {
        $(this).prop('checked', false);
      });
    }
  }); // when clicking on button submit tag, call the function submitTags

  $('#submit-tags').click(function () {
    submitTags(); //empty array of tags

    tagsId = [];
    resetTagRecap();
  }); // when clicking on button add tag, call the function addNewTag

  $('#create-tag').click(function () {
    // collect the string if the input called search-tag
    var tagName = $('#search-tag').val();
    var tagId = $('#search-tag').attr('id');

    if (tagName.length > 0) {
      addNewTag(tagName);
    }
  });
});

function startSearchingTags(elem) {
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
          toggleAllTooltips();
        },
        error: function error(data) {
          showCreateTagButton();
        }
      });
    }
  }, 400);
}

function toggleAllTooltips() {
  console.log("Toggle all tooltips");
  tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new (bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_10___default().Tooltip)(tooltipTriggerEl);
  });
}

function hideAllTooltips() {
  console.log("hidding all tooltips");
  $(".bs-tooltip-top").remove();
  tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new (bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_10___default().Tooltip)(tooltipTriggerEl).hide();
  });
}

function addTagUser(tagName, tagId) {
  var div_data = $('#tag-user').html() + "<div class=\"col-4 tags-wrap\" data-bs-toggle='tooltip' data-bs-placement='top' title='" + tagName + "'><div class=\"tag-js ellipsis m-2\" id=\"" + tagId + "\" >" + tagName + "</div><div>";
  $('#tag-user').html(div_data);
}

function addTagVideo(tagName, tagId) {
  var div_data = $('#tag-video').html() + "<div class=\"col-4 tags-wrap\" data-bs-toggle='tooltip' data-bs-placement='top' title='" + tagName + "'><div class=\"tag-js ellipsis m-2\" id=\"" + tagId + "\">" + tagName + "</div><div>";
  $('#tag-video').html(div_data);
}

function addTagRecap(tagName, tagId) {
  if ($.inArray(tagId, tagsId) == -1) {
    var div_data = $('#tag-recap').html() + "<div class=\"col-12 tags-wrap\" data-bs-toggle='tooltip' data-bs-placement='top' title='" + tagName + "'><div class=\"tag-recap-selected ellipsis m-2\" id=\"recap-" + tagId + "\">" + tagName + "</div><div>";
    $('#tag-recap').html(div_data); // add the tag id to the array tagsId

    tagsId.push(tagId);
    hideAllTooltips();
    toggleAllTooltips();
  } else {
    //Do not hide this alert
    alert("Tag already added");
  }
}

function removeTagRecap(tagId) {
  $("#" + tagId).remove();
  tagsId.splice($.inArray(tagId, tagsId), 1);
  hideAllTooltips();
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
        success: function success(data) {
          console.log(data);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-244e52","vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_core-js_modules_e-2a7396"], () => (__webpack_exec__("./assets/js/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFGLENBQU87QUFDSEMsUUFBQUEsR0FBRyxFQUFFLHVCQUF1QmYsT0FBdkIsR0FBaUMsR0FBakMsR0FBdUNXLEtBRHpDO0FBRUhLLFFBQUFBLElBQUksRUFBRSxLQUZIO0FBR0hFLFFBQUFBLE9BQU8sRUFBRSxpQkFBU2xDLElBQVQsRUFBZTtBQUNwQitDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEQsSUFBWjtBQUNIO0FBTEUsT0FBUDtBQU9ILEtBUkQ7QUFTSCxHQVZEO0FBV0g7O0FBRUQsU0FBUzRCLFNBQVQsQ0FBbUJGLE9BQW5CLEVBQTRCO0FBQ3hCckMsRUFBQUEsQ0FBQyxDQUFDeUMsSUFBRixDQUFPO0FBQ0hDLElBQUFBLEdBQUcsRUFBRSx1QkFBdUJMLE9BRHpCO0FBRUhNLElBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBVzBCO0FBRFQsS0FISDtBQU1ITyxJQUFBQSxRQUFRLEVBQUUsTUFOUDtBQU9IQyxJQUFBQSxPQUFPLEVBQUUsaUJBQVNsQyxJQUFULEVBQWU7QUFDcEI7QUFDQUksTUFBQUEsWUFBWSxDQUFDWCxrQkFBRCxDQUFaO0FBQ0FZLE1BQUFBLGtCQUFrQixDQUFDWCxXQUFELENBQWxCO0FBQ0g7QUFYRSxHQUFQO0FBYUg7Ozs7Ozs7Ozs7O0FDcE9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NlYXJjaC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvc2VhcmNoLmNzcyc7XHJcbmltcG9ydCBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanMnO1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4vLyBhcnJheSBvZiB2aWRlbyBpZFxyXG52YXIgdmlkZW9zSWQgPSBbXTtcclxuLy8gYXJyYXkgb2YgdGFnIGlkXHJcbnZhciB0YWdzSWQgPSBbXTtcclxuLy8gVGltZW91dCBwb3VyIGxhIHJlY2hlcmNoZSBkZXMgdGFnc1xyXG52YXIgaW5wdXRTZWFyY2hUaW1lb3V0XHJcbi8vIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc2VhcmNoIGlucHV0XHJcbnZhciBpbnB1dFNlYXJjaCA9ICQoJyNzZWFyY2gtdGFnJyk7XHJcblxyXG52YXIgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW11cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgdG9nZ2xlQWxsVG9vbHRpcHMoKTtcclxuICAgIHZhciBlbGVtID0gaW5wdXRTZWFyY2g7XHJcbiAgICAvLyBTYXZlIGN1cnJlbnQgdmFsdWUgb2YgZWxlbWVudFxyXG4gICAgZWxlbS5kYXRhKCdvbGRWYWwnLCBlbGVtLnZhbCgpKTtcclxuXHJcbiAgICAvLyBMb29rIGZvciBjaGFuZ2VzIGluIHRoZSB2YWx1ZVxyXG4gICAgZWxlbS5iaW5kKFwia2V5dXAgaW5wdXQgcGFzdGVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZWxlbS5kYXRhKCdvbGRWYWwnKSAhPSBlbGVtLnZhbCgpKSB7XHJcbiAgICAgICAgICAgIC8vc2V0IHRpbWVvdXQgb2Ygc3RhcnQgZmluZGluZyB0YWdzXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnB1dFNlYXJjaFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBzdGFydFNlYXJjaGluZ1RhZ3MoZWxlbSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGVsZW0udmFsKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmVzZXRBbGxUYWdzKCk7XHJcbiAgICAgICAgICAgIGhpZGVDcmVhdGVUYWdCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIudGFnLWpzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICBhZGRUYWdSZWNhcChlbGVtLnRleHQoKSwgZWxlbS5hdHRyKCdpZCcpKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi50YWctcmVjYXAtc2VsZWN0ZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgIHJlbW92ZVRhZ1JlY2FwKGVsZW0uYXR0cignaWQnKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB3aGVuIGNsaWNraW5nIG9uIGJ1dHRvbiBhZGQgdGFnLCB3ZSBhZGQgYWxsIHRoZSB2aWRlbyB0byB0aGUgdmlkZW8gbGlzdCBcclxuICAgICQoJyNhZGRUYWdCdXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2aWRlb3NJZCA9IFtdXHJcbiAgICAgICAgJCgnLmZvcm0tY2hlY2stdmlkZW8tcmVzOmNoZWNrYm94OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGUgaWQgaXMgbm90IGluIHZpZGVvc0lkIGFscmVhZHlcclxuICAgICAgICAgICAgdmFyIHZpZGVvSWQgPSAkKHRoaXMpLmF0dHIoJ2lkJylcclxuICAgICAgICAgICAgaWYgKCQuaW5BcnJheSh2aWRlb0lkLCB2aWRlb3NJZCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvc0lkLnB1c2goJCh0aGlzKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgaWYodmlkZW9zSWQubGVuZ3RoIDw9IDApe1xyXG4gICAgICAgICAgICBhbGVydChcIlBhcyBkZSB2aWTDqW9zIHPDqWxlY3Rpb25uw6llcyAhXCIpO1xyXG4gICAgICAgICAgICAvL2hpZGUgc3VibWl0IHRhZyBidXR0b25cclxuICAgICAgICAgICAgJCgnI3N1Ym1pdC10YWdzJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnI3N1Ym1pdC10YWdzJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXaGVuIGNsaWNraW5nIHRoZSBzZWxlY3QgYWxsIGNoZWNrYm94LCBtYWtlIGFsbCBjaGVjYm94IHRvIGNoZWNrZWRcclxuICAgICQoJyNDaGVja0JveFNlbGVjdEFsbCcpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdmlkZW9zQ2hlY2tib3ggPSAkKCcuZm9ybS1jaGVjay12aWRlby1yZXM6Y2hlY2tib3gnKVxyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB2aWRlb3NDaGVja2JveC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmlkZW9zQ2hlY2tib3guZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gYnV0dG9uIHN1Ym1pdCB0YWcsIGNhbGwgdGhlIGZ1bmN0aW9uIHN1Ym1pdFRhZ3NcclxuICAgICQoJyNzdWJtaXQtdGFncycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN1Ym1pdFRhZ3MoKTtcclxuICAgICAgICAvL2VtcHR5IGFycmF5IG9mIHRhZ3NcclxuICAgICAgICB0YWdzSWQgPSBbXTtcclxuICAgICAgICByZXNldFRhZ1JlY2FwKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gYnV0dG9uIGFkZCB0YWcsIGNhbGwgdGhlIGZ1bmN0aW9uIGFkZE5ld1RhZ1xyXG4gICAgJCgnI2NyZWF0ZS10YWcnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBjb2xsZWN0IHRoZSBzdHJpbmcgaWYgdGhlIGlucHV0IGNhbGxlZCBzZWFyY2gtdGFnXHJcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAkKCcjc2VhcmNoLXRhZycpLnZhbCgpO1xyXG4gICAgICAgIHZhciB0YWdJZCA9ICQoJyNzZWFyY2gtdGFnJykuYXR0cignaWQnKTtcclxuICAgICAgICBpZih0YWdOYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYWRkTmV3VGFnKHRhZ05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U2VhcmNoaW5nVGFncyhlbGVtKSB7XHJcbiAgICBpbnB1dFNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFVwZGF0ZWQgc3RvcmVkIHZhbHVlXHJcbiAgICBlbGVtLmRhdGEoJ29sZFZhbCcsIGVsZW0udmFsKCkpO1xyXG4gICAgLy8gZG8gYSBzZXQgdGltZW91dCBvZiB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgaWYoZWxlbS52YWwoKSAhPSAnJyl7XHJcbiAgICAgICAgLy8gRG8gQUpBWCBjYWxsIHRvIGdldCB0aGUgdGFnIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHNlYXJjaFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9zZWFyY2gvZ2V0LycgKyBlbGVtLnZhbCgpLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ3RhZ05hbWUnOiBlbGVtLnZhbCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NyZWF0ZVRhZ0J1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVDcmVhdGVUYWdCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRfZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc2V0QWxsVGFncygpO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkX2RhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc1RhZ1BlcnNvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZ1VzZXIoZWxlbWVudC5uYW1lLCBlbGVtZW50LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWdWaWRlbyhlbGVtZW50Lm5hbWUsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQWxsVG9vbHRpcHMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNob3dDcmVhdGVUYWdCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB9LCA0MDApO1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZUFsbFRvb2x0aXBzKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRvZ2dsZSBhbGwgdG9vbHRpcHNcIik7XHJcbiAgICB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSlcclxuICAgIHZhciB0b29sdGlwTGlzdCA9IHRvb2x0aXBUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHRvb2x0aXBUcmlnZ2VyRWwpIHtcclxuICAgICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBoaWRlQWxsVG9vbHRpcHMoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlkZGluZyBhbGwgdG9vbHRpcHNcIik7XHJcbiAgICAkKFwiLmJzLXRvb2x0aXAtdG9wXCIpLnJlbW92ZSgpO1xyXG4gICAgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykpXHJcbiAgICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XHJcbiAgICAgIHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCkuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhZ1VzZXIodGFnTmFtZSwgdGFnSWQpIHtcclxuICAgIHZhciBkaXZfZGF0YSA9ICQoJyN0YWctdXNlcicpLmh0bWwoKSArIFwiPGRpdiBjbGFzcz1cXFwiY29sLTQgdGFncy13cmFwXFxcIiBkYXRhLWJzLXRvZ2dsZT0ndG9vbHRpcCcgZGF0YS1icy1wbGFjZW1lbnQ9J3RvcCcgdGl0bGU9J1wiK3RhZ05hbWUrXCInPjxkaXYgY2xhc3M9XFxcInRhZy1qcyBlbGxpcHNpcyBtLTJcXFwiIGlkPVxcXCJcIisgdGFnSWQgK1wiXFxcIiA+XCIgKyB0YWdOYW1lICsgXCI8L2Rpdj48ZGl2PlwiO1xyXG4gICAgJCgnI3RhZy11c2VyJykuaHRtbChkaXZfZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhZ1ZpZGVvKHRhZ05hbWUsIHRhZ0lkKSB7XHJcbiAgICB2YXIgZGl2X2RhdGEgPSAkKCcjdGFnLXZpZGVvJykuaHRtbCgpICsgXCI8ZGl2IGNsYXNzPVxcXCJjb2wtNCB0YWdzLXdyYXBcXFwiIGRhdGEtYnMtdG9nZ2xlPSd0b29sdGlwJyBkYXRhLWJzLXBsYWNlbWVudD0ndG9wJyB0aXRsZT0nXCIrdGFnTmFtZStcIic+PGRpdiBjbGFzcz1cXFwidGFnLWpzIGVsbGlwc2lzIG0tMlxcXCIgaWQ9XFxcIlwiKyB0YWdJZCArXCJcXFwiPlwiICsgdGFnTmFtZSArIFwiPC9kaXY+PGRpdj5cIjtcclxuICAgICQoJyN0YWctdmlkZW8nKS5odG1sKGRpdl9kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFnUmVjYXAodGFnTmFtZSwgdGFnSWQpIHtcclxuICAgIGlmKCQuaW5BcnJheSh0YWdJZCwgdGFnc0lkKSA9PSAtMSl7XHJcbiAgICAgICAgdmFyIGRpdl9kYXRhID0gJCgnI3RhZy1yZWNhcCcpLmh0bWwoKSArIFwiPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRhZ3Mtd3JhcFxcXCIgZGF0YS1icy10b2dnbGU9J3Rvb2x0aXAnIGRhdGEtYnMtcGxhY2VtZW50PSd0b3AnIHRpdGxlPSdcIit0YWdOYW1lK1wiJz48ZGl2IGNsYXNzPVxcXCJ0YWctcmVjYXAtc2VsZWN0ZWQgZWxsaXBzaXMgbS0yXFxcIiBpZD1cXFwicmVjYXAtXCIrIHRhZ0lkICtcIlxcXCI+XCIgKyB0YWdOYW1lICsgXCI8L2Rpdj48ZGl2PlwiO1xyXG4gICAgICAgICQoJyN0YWctcmVjYXAnKS5odG1sKGRpdl9kYXRhKTtcclxuICAgICAgICAvLyBhZGQgdGhlIHRhZyBpZCB0byB0aGUgYXJyYXkgdGFnc0lkXHJcbiAgICAgICAgdGFnc0lkLnB1c2godGFnSWQpO1xyXG4gICAgICAgIGhpZGVBbGxUb29sdGlwcygpO1xyXG4gICAgICAgIHRvZ2dsZUFsbFRvb2x0aXBzKCk7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgLy9EbyBub3QgaGlkZSB0aGlzIGFsZXJ0XHJcbiAgICAgICAgYWxlcnQoXCJUYWcgYWxyZWFkeSBhZGRlZFwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYWdSZWNhcCh0YWdJZCkge1xyXG4gICAgJChcIiNcIit0YWdJZCkucmVtb3ZlKCk7XHJcbiAgICB0YWdzSWQuc3BsaWNlKCAkLmluQXJyYXkodGFnSWQsIHRhZ3NJZCksIDEpO1xyXG4gICAgaGlkZUFsbFRvb2x0aXBzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0VGFnUmVjYXAodGFnSWQpIHtcclxuICAgICQoJyN0YWctcmVjYXAnKS5odG1sKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRBbGxUYWdzKCkge1xyXG4gICAgJCgnI3RhZy11c2VyJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjdGFnLXZpZGVvJykuaHRtbCgnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDcmVhdGVUYWdCdXR0b24oKSB7XHJcbiAgICAkKCcjY3JlYXRlLXRhZycpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUNyZWF0ZVRhZ0J1dHRvbigpIHtcclxuICAgICQoJyNjcmVhdGUtdGFnJykuaGlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYWdzKCkge1xyXG4gICAgdmlkZW9zSWQuZm9yRWFjaCh2aWRlb0lkID0+IHtcclxuICAgICAgICB0YWdzSWQuZm9yRWFjaCh0YWdJZCA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFyY2gvaW5zZXJ0L3RhZy8nICsgdmlkZW9JZCArICcvJyArIHRhZ0lkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1RhZyh0YWdOYW1lKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ3NlYXJjaC9jcmVhdGUvdGFnLycgKyB0YWdOYW1lLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICd0YWdOYW1lJzogdGFnTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaW5wdXRTZWFyY2hUaW1lb3V0KTtcclxuICAgICAgICAgICAgc3RhcnRTZWFyY2hpbmdUYWdzKGlucHV0U2VhcmNoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJib290c3RyYXAiLCIkIiwicmVxdWlyZSIsInZpZGVvc0lkIiwidGFnc0lkIiwiaW5wdXRTZWFyY2hUaW1lb3V0IiwiaW5wdXRTZWFyY2giLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJkb2N1bWVudCIsInJlYWR5IiwidG9nZ2xlQWxsVG9vbHRpcHMiLCJlbGVtIiwiZGF0YSIsInZhbCIsImJpbmQiLCJldmVudCIsImNsZWFyVGltZW91dCIsInN0YXJ0U2VhcmNoaW5nVGFncyIsImxlbmd0aCIsInJlc2V0QWxsVGFncyIsImhpZGVDcmVhdGVUYWdCdXR0b24iLCJvbiIsImFkZFRhZ1JlY2FwIiwidGV4dCIsImF0dHIiLCJyZW1vdmVUYWdSZWNhcCIsImNsaWNrIiwiZWFjaCIsInZpZGVvSWQiLCJpbkFycmF5IiwicHVzaCIsImFsZXJ0IiwiY2hhbmdlIiwidmlkZW9zQ2hlY2tib3giLCJjaGVja2VkIiwicHJvcCIsInN1Ym1pdFRhZ3MiLCJyZXNldFRhZ1JlY2FwIiwidGFnTmFtZSIsInRhZ0lkIiwiYWRkTmV3VGFnIiwic2V0VGltZW91dCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwic2hvd0NyZWF0ZVRhZ0J1dHRvbiIsInBhcnNlZF9kYXRhIiwiSlNPTiIsInBhcnNlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpc1RhZ1BlcnNvIiwiYWRkVGFnVXNlciIsIm5hbWUiLCJpZCIsImFkZFRhZ1ZpZGVvIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsInRvb2x0aXBMaXN0IiwibWFwIiwidG9vbHRpcFRyaWdnZXJFbCIsIlRvb2x0aXAiLCJoaWRlQWxsVG9vbHRpcHMiLCJyZW1vdmUiLCJoaWRlIiwiZGl2X2RhdGEiLCJodG1sIiwic3BsaWNlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=