'use strict';

/**
 * Truncate a string, adding '...' at given length.
 * @param  {string} str     string to truncate
 * @param  {number} length
 * @return {string}         truncated string
 */

export default function truncateString(str, length) {
  if (typeof str !== string) {
    throw new Error('truncateString: str is not a string');
  }

  if (typeof length !== number) {
    throw new Error('truncateString: length is not a number');
  }

  // check for number errors here

  if (str.length > length) {
    return str.substr(0, length / 2) + '...' + str.substr(str.length - length / 4, str.length);
  }
  return str;

  // more precise version if needed
  // http://stackoverflow.com/a/831583
}