console.log('server request')




/* bad approach, too more embedded callbacks
   use promise instead

   setTimeout(() => {

  console.log('preparing data')

  const data = {
    server: 'aws',
    port:5000,
    status:"ok"
  }
    setTimeout(() => {
      console.log('data is ready', data)
    }, 1500);
}, 1500); */

// resolve, reject are both functions
// resolve is called when async code is successfully done
const p = new Promise((resolve, reject) => {
  // async code inside
  setTimeout(() => {
    console.log('preparing data')
    const data = {
      server: 'aws',
      port:5000,
      status:"ok"
    }

    // pass data to next processing
    resolve(data)

  }, 1500);
})

// when 1st async is over and resolve() was called
// !"p" could be passed between someones, useful

p.then((data) => {

  // const p2 = new Promise((res, rej) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      data.modified = "true"
      res(data)
    }, 1500);
  })

  // p2 inside p promise, its bad, use "return"
  // p2.then((clientData) => {
  //   console.log('data received:', clientData)
  // })

}).then(clientData => {
  console.log('data received:', clientData)
})
