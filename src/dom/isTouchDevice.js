'use strict'

/**
 * Determine if user device is a touch enabled device.
 * @return {Boolean} is a touch device
 */
export default function isTouchDevice () {
  return 'ontouchstart' in window || // works on most browsers
          navigator.maxTouchPoints   // works on IE10/11 and Surface
}
