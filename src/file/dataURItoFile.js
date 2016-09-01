'use strict'

import dataURItoBlob from './dataURItoBlob'

/**
 * Helper function that calls dataURItoBlob
 * to convert data URI to File object.
 * @param  {String} dataURI
 * @param  {Object} opts    Conversion options.
 * @return {File}
 */
export default function dataURItoFile (dataURI, opts) {
  return dataURItoBlob(dataURI, opts, true)
}
