'use strict';

/**
 * Reads file as data URI from file object,
 * the one you get from input[type=file] or drag & drop.
 * @param  {Object}   fileObj File object
 * @return {Promise}          Resolves to dataURI of file
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readFileAsDataURI;
function readFileAsDataURI(fileObj) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.addEventListener('load', function (ev) {
      return resolve(ev.target.result);
    });
    reader.readAsDataURL(fileObj);
  });
}