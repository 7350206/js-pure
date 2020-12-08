const fib = [1,2,3,5,8,13]

/**
 * 2 stacks: call stack + event stack
 * 'for' is on call stack
 * set timeout goes to event stack and wait call stack is done
 * so 'timeout' starts after 'for' ends
 *
 *
 * "let" - block variable, always new
 */


// var dont work, let works fine
// for (let i = 0; i < fib.length; i++) {
//   setTimeout(() => {
//     console.log(`fib[${i}] = ${fib[i]}`)
//   }, 2500);

for (let i = 0; i < fib.length; i++) {

  (function(j){

    setTimeout(() => {
      console.log(`fib[${i}] = ${fib[i]}`)
    }, 2500);

  })(i)


}