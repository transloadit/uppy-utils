'use strict';

/**
 * Converts list into array
 * @param  {list} list
 * @return {Array}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;
function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
}