'use strict';

/**
 * Converts a data URI to Blob object.
 * If `toFile` is true, converts to File object instead.
 * @param  {String}  dataURI
 * @param  {Object}  opts    Options for conversion
 * @param  {Boolean} toFile  Convert to File instead of Blob
 * @return {Blob}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dataURItoBlob;
function dataURItoBlob(dataURI, opts, toFile) {
  // get the base64 data
  var data = dataURI.split(',')[1];

  // user may provide mime type, if not get it from data URI
  var mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];

  // default to plain/text if data URI has no mimeType
  if (mimeType == null) {
    mimeType = 'plain/text';
  }

  var binary = atob(data);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  // Convert to a File?
  if (toFile) {
    return new File([new Uint8Array(array)], opts.name || '', { type: mimeType });
  }

  return new Blob([new Uint8Array(array)], { type: mimeType });
}