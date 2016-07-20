webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	var _animal = __webpack_require__(3);

	$(function () {
	  init();
	}); /**
	     * Created by 天俊sama on 2016/7/9.
	     */

	function init() {
	  initClick();
	}

	function initClick() {
	  $(".d1").click(function () {
	    $(this).animate({ height: "300px" }, 2000);
	  });
	  var tiger = new _animal.animal("tiger");
	  tiger.sayhi();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);