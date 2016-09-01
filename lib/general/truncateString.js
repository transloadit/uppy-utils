'use strict';

/**
 * Truncate a string, adding '...' at given length.
 * @param  {string} str     string to truncate
 * @param  {number} length
 * @return {string}         truncated string
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = truncateString;
function truncateString(str, length) {
  if ((typeof str === 'undefined' ? 'undefined' : _typeof(str)) !== string) {
    throw new Error('truncateString: str is not a string');
  }

  if ((typeof length === 'undefined' ? 'undefined' : _typeof(length)) !== number) {
    throw new Error('truncateString: length is not a number');
  }

  // check for number errors here

  if (str.length > length) {
    return str.substr(0, length / 2) + '...' + str.substr(str.length - length / 4, str.length);
  }
  return str;

  // more precise version if needed
  // http://stackoverflow.com/a/831583
}