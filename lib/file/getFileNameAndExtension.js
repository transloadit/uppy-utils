'use strict';

/**
 * Get a file's filename and extension.
 * @param  {String}         fullFileName File's full filename
 * @return {Array<String>}  contains file name and extension
 */

module.exports = function getFileNameAndExtension(fullFileName) {
  var re = /(?:\.([^.]+))?$/;
  var fileExt = re.exec(fullFileName)[1];
  var fileName = fullFileName.replace('.' + fileExt, '');
  return [fileName, fileExt];
};