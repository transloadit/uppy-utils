'use strict';

/**
 * Partition array by a grouping function.
 * @param  {Array<any>} array       Input array
 * @param  {fn}         groupingFn  Function to determine grouping
 * @return {Array}                  Array of groups
 */

module.exports = function groupBy(array, groupingFn) {
  // TODO: figure out whats up w Map() object
  return array.reduce(function (result, item) {
    var key = groupingFn(item);
    var xs = result.get(key) || [];
    xs.push(item);
    result.set(key, xs);
    return result;
  }, new Map());
};