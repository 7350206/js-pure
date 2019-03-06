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

const doPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res([1, 2, 3, 4, 5])
    rej('err happened')
  }, 2000);
})

doPromise
  .then(value => console.log('resolve:', value))
  .catch(e => console.log('error: ', e))