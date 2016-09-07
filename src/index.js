'use strict'

/**
 * A collection of small utility functions that help with dom manipulation, adding listeners,
 * promises and other good things.
 *
 * @module Utils
 */

// general
import extend from './general/extend'
import flatten from './general/flatten'
import getFnName from './general/getFnName'
import groupBy from './general/groupBy'
import secondsToTime from './general/secondsToTime'
import toArray from './general/toArray'
import truncateString from './general/truncateString'

// dom
import isTouchDevice from './dom/isTouchDevice'
import $ from './dom/querySelector'
import $$ from './dom/querySelectorAll'

// file
import dataURItoBlob from './file/dataURItoBlob'
import dataURItoFile from './file/dataURItoFile'
import generateFileID from './file/generateFileID'
import getFileNameAndExtension from './file/getFileNameAndExtension'
import getFileType from './file/getFileType'
import readFileAsDataURI from './file/readFileAsDataURI'

// image
import createImageThumbnail from './image/createImageThumbnail'
import getProportionalImageHeight from './image/getProportionalImageHeight'

export {
  extend,
  flatten,
  getFnName,
  groupBy,
  secondsToTime,
  toArray,
  truncateString,
  isTouchDevice,
  $,
  $$,
  dataURItoBlob,
  dataURItoFile,
  generateFileID,
  getFileNameAndExtension,
  getFileType,
  readFileAsDataURI,
  createImageThumbnail,
  getProportionalImageHeight
}

export default {
  extend,
  flatten,
  getFnName,
  groupBy,
  secondsToTime,
  toArray,
  truncateString,
  isTouchDevice,
  $,
  $$,
  dataURItoBlob,
  dataURItoFile,
  generateFileID,
  getFileNameAndExtension,
  getFileType,
  readFileAsDataURI,
  createImageThumbnail,
  getProportionalImageHeight
}
