'use strict';

/**
 * Get a file's filename and extension.
 * @param  {String}         fullFileName File's full filename
 * @return {Array<String>}  contains file name and extension
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFileNameAndExtension;
function getFileNameAndExtension(fullFileName) {
  var re = /(?:\.([^.]+))?$/;
  var fileExt = re.exec(fullFileName)[1];
  var fileName = fullFileName.replace('.' + fileExt, '');
  return [fileName, fileExt];
}