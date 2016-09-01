'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFileType;

var _mimeTypes = require('mime-types');

var _mimeTypes2 = _interopRequireDefault(_mimeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolve a file's type.  
 * Lookup mime-type if file has no explicit type.
 * @param  {Object} file File
 * @return {String}      File type
 */
function getFileType(file) {
  if (file.type) {
    return file.type;
  }
  return _mimeTypes2.default.lookup(file.name);
}