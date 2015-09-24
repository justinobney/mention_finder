(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getCapture;
var alpha = /\w/;
var alphaEnd = /\w\s/;

var defaultIdentifiers = ['@', '#'];

function getCapture(text, right) {
  var identifiers = arguments.length <= 2 || arguments[2] === undefined ? defaultIdentifiers : arguments[2];

  var regexMap = identifiers.map(function (key) {
    return [new RegExp('^' + key), new RegExp('\\s' + key)];
  });

  var regexTests = [].concat.apply([], regexMap);
  var left = right - 1;
  var lastWasAlpha = alpha.test(text.substring(left, right));

  while (lastWasAlpha) {
    left--;
    lastWasAlpha = alpha.test(text.substring(left, left + 1));
  }

  var matchesIdentifier = regexTests.some(function (identifier) {
    return identifier.test(text.substring(left - 1, left + 1));
  });
  var capture = text.substring(left, right);
  var isValidPoint = right === text.length || alphaEnd.test(text.substring(right - 1, right + 1));

  if (matchesIdentifier && isValidPoint) {
    return { left: left, right: right, capture: capture };
  }

  return null;
}

module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = run;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

function run() {
  describe('getCapture(text, rightBounds)', function () {
    var text1 = '@this is for #channel m#nti@ns';
    // ranges:
    //    1 -  5 == @this
    //   14 - 21 == #channel

    // custom identifier "!"
    var text2 = 'is @this is for !channel  m#nti@ns';
    // ranges:
    //   17 - 24 == !channel

    it('should return null given empty string', function () {
      expect((0, _lib2['default'])('', 0)).toBe(null);
    });

    it('should return info about word when cursor at end of word', function () {
      expect((0, _lib2['default'])(text1, 5)).toEqual({
        left: 0,
        right: 5,
        capture: '@this'
      });

      expect((0, _lib2['default'])(text1, 21)).toEqual({
        left: 13,
        right: 21,
        capture: '#channel'
      });
    });

    it('should skip identifiers in middle of words', function () {
      expect((0, _lib2['default'])(text1, 30)).toEqual(null);
    });

    it('should allow passing in custom identifiers', function () {
      expect((0, _lib2['default'])(text2, 8, ['!'])).toEqual(null);

      expect((0, _lib2['default'])(text2, 24, ['!'])).toEqual({
        left: 16,
        right: 24,
        capture: '!channel'
      });
    });
  });
}

module.exports = exports['default'];

},{"./lib":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lib_specJs = require('./lib_spec.js');

var _lib_specJs2 = _interopRequireDefault(_lib_specJs);

(0, _lib_specJs2['default'])();

},{"./lib_spec.js":2}]},{},[3]);
