'use strict'

/**
 * Merges objects given as arguments into single object.
 * @param  {...Object} objs Objects to merge
 * @return {Object}         Merged object
 */
module.exports = function extend (...objs) {
  return Object.assign.apply(this, [{}].concat(objs))
}
