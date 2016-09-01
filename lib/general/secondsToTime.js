'use strict';

/**
 * Convert seconds to hours, minutes, seconds.
 * @param  {number} rawSeconds seconds to convert
 * @return {Object}            time in hours, minutes, seconds
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = secondsToTime;
function secondsToTime(rawSeconds) {
  // TODO: error handling
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);

  return { hours: hours, minutes: minutes, seconds: seconds };
}