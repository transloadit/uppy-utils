'use strict';

/**
 * A collection of small utility functions that help with dom manipulation, adding listeners,
 * promises and other good things.
 *
 * @module Utils
 */

module.exports = {
  // general
  extend: require('./general/extend'),
  flatten: require('./general/flatten'),
  getFnName: require('./general/getFnName'),
  groupBy: require('./general/groupBy'),
  secondsToTime: require('./general/secondsToTime'),
  toArray: require('./general/toArray'),
  truncateString: require('./general/truncateString'),

  // dom
  isTouchDevice: require('./dom/isTouchDevice'),
  $: require('./dom/querySelector'),
  $$: require('./dom/querySelectorAll'),

  // file
  dataURItoBlob: require('./file/dataURItoBlob'),
  dataURItoFile: require('./file/dataURItoFile'),
  generateFileID: require('./file/generateFileID'),
  getFileNameAndExtension: require('./file/getFileNameAndExtension'),
  getFileType: require('./file/getFileType'),
  readFileAsDataURI: require('./file/readFileAsDataURI'),

  // image
  createImageThumbnail: require('./image/createImageThumbnail'),
  getProportionalImageHeight: require('./image/getProportionalImageHeight')
};