const fs = require('fs');

path = process.cwd();

// readdir - is syscall. so C style convention
fs.readdir(path, (err, fileList) => {
  if (err) {
    console.error(err);
  }
  fileList.map((f) => console.log(f.toUpperCase()));
});
