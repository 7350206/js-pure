let count = 0;

setInterval(() => {
  console.log(`${++count} qweeqwee`);
  if (count == 3) {
    process.exit();
  }
}, 1000);

setTimeoutSync(3500);
console.log('block end');

// custom blocking setinterval
// blocks e-loop for `ms` millisec, so will prevent other of being performed
function setTimeoutSync(ms) {
  console.log('block begin');
  const t = Date.now();
  while (Date.now() - t < ms) {}
}
