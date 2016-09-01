'use strict';

/**
 * Gets new image height based on aspect ratio
 * of original image and new image width.
 * @param  {Object} img      Image
 * @param  {Number} newWidth New image width
 * @return {Number}          New image height
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProportionalImageHeight;
function getProportionalImageHeight(img, newWidth) {
  var aspect = img.width / img.height;
  var newHeight = Math.round(newWidth / aspect);
  return newHeight;
}