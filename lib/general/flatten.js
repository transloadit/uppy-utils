'use strict';

/**
 * Shallow flatten nested arrays.
 * @param  {Array} arr array to flatten
 * @return {Array}     flattened array
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;
function flatten(arr) {
  return [].concat.apply([], arr);
}