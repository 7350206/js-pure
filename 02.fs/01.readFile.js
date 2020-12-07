const fs = require('fs');

const fileName = 'test.txt';

fs.readFile(fileName, (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(`${fileName} length: ${data.length}`);
});
