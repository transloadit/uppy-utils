'use strict'

/**
 * Reads file as data URI from file object,
 * the one you get from input[type=file] or drag & drop.
 * @param  {Object}   fileObj File object
 * @return {Promise}          Resolves to dataURI of file
 */
module.exports = function readFileAsDataURI (fileObj) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', function (ev) {
      return resolve(ev.target.result)
    })
    reader.readAsDataURL(fileObj)
  })
}
