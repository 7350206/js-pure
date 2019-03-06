const doCallback = callback => {
  setTimeout(() => {
    // callback('my error', null)
    callback(null, 'my result')
  }, 1000);
}

doCallback((err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
})