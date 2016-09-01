'use strict';

/**
 * Takes a fileName and turns it into fileID, by converting to lowercase,
 * removing extra characters and adding unix timestamp
 * @param  {String} fileName  name of file
 * @return {String}           generated file ID
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateFileID;
function generateFileID(fileName) {
  var fileID = fileName.toLowerCase();
  fileID = fileID.replace(/[^A-Z0-9]/ig, '');
  fileID = fileID + Date.now();
  return fileID;
}