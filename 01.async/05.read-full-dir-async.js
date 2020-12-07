const fs = require('fs');

// fileList is array
fs.readdir('./', (err, fileList) => {
  if(err) return console.error(err.message)

  fileList.forEach(file => {
    fs.readFile(file, (err, fileData) => {
      if(err) return console.error(err.message)

      console.log(file, fileData.length)
    })
  })

})