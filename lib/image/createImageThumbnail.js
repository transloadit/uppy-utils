'use strict';

/**
 * Resizes an image to specified width and height, using canvas
 * See https://davidwalsh.name/resize-image-canvas,
 * http://babalan.com/resizing-images-with-javascript/
 * @TODO see if we need https://github.com/stomita/ios-imagefile-megapixel for iOS
 *
 * @param  {Object} img element
 * @param  {String} width of the resulting image
 * @param  {String} height of the resulting image
 * @return {String} dataURL of the resized image
 */

module.exports = function createImageThumbnail(imgURL) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.addEventListener('load', function () {
      var newImageWidth = 200;
      var newImageHeight = getProportionalImageHeight(img, newImageWidth);

      // create an off-screen canvas
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      // set its dimension to target size
      canvas.width = newImageWidth;
      canvas.height = newImageHeight;

      // draw source image into the off-screen canvas:
      // ctx.clearRect(0, 0, width, height)
      ctx.drawImage(img, 0, 0, newImageWidth, newImageHeight);

      // encode image to data-uri with base64 version of compressed image
      // canvas.toDataURL('image/jpeg', quality);  // quality = [0.0, 1.0]
      var thumbnail = canvas.toDataURL('image/png');
      return resolve(thumbnail);
    });
    img.src = imgURL;
  });
};