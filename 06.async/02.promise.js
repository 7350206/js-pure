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
      // rej("big error")
    }, 1500);
  })

  // p2 inside p promise, its bad, use "return"
  // p2.then((clientData) => {
  //   console.log('data received:', clientData)
  // })

})
.then(clientData => {
  // console.log('data received:', clientData)
  clientData.fromPromise = true
  return clientData
})
.then((data) => {
  console.log('modified:', data)
})
.catch((err) => console.log('Error: ', err))
.finally(() => console.log('finally done'))


const sleep = ms => {
  return new Promise(res => {
    setTimeout(() => {
      res() // resolve promise here
    }, ms);
  })
}

sleep(2000).then(console.log('2 sec'))
sleep(5000).then(console.log('5 sec'))

Promise.all([sleep(2000), sleep(5000)])
.then(() => console.log('all done'))

Promise.race([sleep(2000), sleep(5000)])
.then(() => console.log('race done'))