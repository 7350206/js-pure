const fs = require('fs');

const fileName = '03.read-file-async.js'

fs.readFile(fileName, (err,fileData) =>{
  //the error (or null if no error occurred) is the first argument when executing a provided callback.
  if (err) return console.error(err.message)

  console.log(fileName, fileData.length)
})