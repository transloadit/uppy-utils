'use strict'

/**
 * Convert seconds to hours, minutes, seconds.
 * @param  {number} rawSeconds seconds to convert
 * @return {Object}            time in hours, minutes, seconds
 */
module.exports = function secondsToTime (rawSeconds) {
  // TODO: error handling
  const hours = Math.floor(rawSeconds / 3600) % 24
  const minutes = Math.floor(rawSeconds / 60) % 60
  const seconds = Math.floor(rawSeconds % 60)

  return { hours, minutes, seconds }
}
