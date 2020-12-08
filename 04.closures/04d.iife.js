// iife
let result = []

// var dont work here
// for (let i = 0; i < 5; i++) {

//   result.push(function(){
//     // return i
//     console.log(i)
//   })

// }

for (var i = 0; i < 5; i++) {

  (function(){
    var j = i
    result.push(function(){
      console.log(j)
    })

  })()

}




// console.log('result:', result)
  //  result: [
  // [Function (anonymous)],
  // [Function (anonymous)],
  // [Function (anonymous)],
  // [Function (anonymous)],
  // [Function (anonymous)]]

  result[2]() // 2