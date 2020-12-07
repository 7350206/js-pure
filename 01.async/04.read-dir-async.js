const fs = require('fs');

const dirPath = './'

/**
 * fs.readdir() is capitalized differently,
 * it’s because readdir is a system call,
 * and fs.readdir() follows its C naming convention.
 */


fs.readdir(dirPath, (err, fileList) => {
  if (err)  return console.error(err.message)
  console.log(fileList)
})