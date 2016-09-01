'use strict'

/**
 * Shorter and fast way to select multiple nodes in the DOM
 * @param   { String|Array } selector - DOM selector or nodes list
 * @param   { Object } ctx - DOM node where the targets of our search will is located
 * @returns { Object } dom nodes found
 */
export function $$ (selector, ctx) {
  var els
  if (typeof selector === 'string') {
    els = (ctx || document).querySelectorAll(selector)
  } else {
    els = selector
    return Array.prototype.slice.call(els)
  }
}
