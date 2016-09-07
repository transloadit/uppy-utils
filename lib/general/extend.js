'use strict';

/**
 * Merges objects given as arguments into single object.
 * @param  {...Object} objs Objects to merge
 * @return {Object}         Merged object
 */

module.exports = function extend() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return Object.assign.apply(this, [{}].concat(objs));
};