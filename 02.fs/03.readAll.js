const fs = require('fs');

const path = process.cwd();

fs.readdir(path, (err, fileList) => {
  if (err) {
    return console.log('err: ', err);
  }
  // readdir returns alfabet order, but files are not listed that way
  fileList.forEach(function (file) {
    fs.readFile(file, (err, fileData) => {
      if (err) return console.log(err);
      console.log(`${file}: ${fileData.length}`);
    });
  });

  console.log('done'); // goes first, before list all files
});
