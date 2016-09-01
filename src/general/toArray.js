'use strict'

/**
 * Converts list into array
 * @param  {list} list
 * @return {Array}
 */
export default function toArray (list) {
  return Array.prototype.slice.call(list || [], 0)
}
