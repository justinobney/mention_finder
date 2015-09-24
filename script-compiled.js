(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lib = {
  val: true
};

exports["default"] = lib;
module.exports = exports["default"];

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
  describe('lib.val', function () {
    it('should be true...', function () {
      expect(_lib2['default'].val).toBe(true);
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
