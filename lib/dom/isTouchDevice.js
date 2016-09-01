'use strict';

/**
 * Determine if user device is a touch enabled device.
 * @return {Boolean} is a touch device
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTouchDevice;
function isTouchDevice() {
  return 'ontouchstart' in window || // works on most browsers
  navigator.maxTouchPoints; // works on IE10/11 and Surface
}