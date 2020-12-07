let count = 0
setInterval(() => {
  console.log(`${++count} time`)
}, 1000);


setTimeout(() => {
  console.log('the end')
  process.exit()
}, 5500);


const seconds = [5, 2]
seconds.forEach(s => {
  setTimeout(() => console.log(`Waited ${s} seconds`), 1000 * s) })
console.log('done!')

/**
 * dont block execution, so done is the first
 * done!
1 time
Waited 2 seconds
2 time
3 time
4 time
Waited 5 seconds
5 time
the end
 */
