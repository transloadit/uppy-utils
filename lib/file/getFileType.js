'use strict';

import mime from 'mime-types';

/**
 * Resolve a file's type.  
 * Lookup mime-type if file has no explicit type.
 * @param  {Object} file File
 * @return {String}      File type
 */
export default function getFileType(file) {
  if (file.type) {
    return file.type;
  }
  return mime.lookup(file.name);
}