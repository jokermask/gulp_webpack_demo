webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _cat2 = __webpack_require__(2);

	var _cat3 = _interopRequireDefault(_cat2);

	var _animal = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by 天俊sama on 2016/5/26.
	 */


	$(function () {
	  init();
	});

	function init() {
	  initClick();
	}

	function initClick() {
	  console.log(_cat3.default);
	  $(".d1").click(function () {
	    $(this).animate({ height: "300px" }, 2000);
	  });
	  $('<h1>Cats</h1>').appendTo('body');
	  var ul = $('<ul></ul>').appendTo('body');
	  console.log(_animal.myname);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = _cat3.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _cat = _step.value;

	      $('<li></li>').text(_cat).appendTo(ul);
	      var _cat = new _animal.animal(_cat);
	      _cat.sayhi();
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by 天俊sama on 2016/7/7.
	 */
	var cats = ['daval', 'henryel', 'martha'];
	exports.default = cats;

/***/ }
]);