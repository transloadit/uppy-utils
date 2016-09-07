'use strict';

var _dataURItoBlob = require('./dataURItoBlob');

var _dataURItoBlob2 = _interopRequireDefault(_dataURItoBlob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper function that calls dataURItoBlob
 * to convert data URI to File object.
 * @param  {String} dataURI
 * @param  {Object} opts    Conversion options.
 * @return {File}
 */
module.exports = function dataURItoFile(dataURI, opts) {
  return (0, _dataURItoBlob2.default)(dataURI, opts, true);
};