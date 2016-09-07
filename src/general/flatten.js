'use strict'

/**
 * Shallow flatten nested arrays.
 * @param  {Array} arr array to flatten
 * @return {Array}     flattened array
 */
module.exports = function flatten (arr) {
  return [].concat.apply([], arr)
}
