'use strict';

/**
 * Merges objects given as arguments into single object.
 * @param  {...Object} objs Objects to merge
 * @return {Object}         Merged object
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extend;
function extend() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return Object.assign.apply(this, [{}].concat(objs));
}