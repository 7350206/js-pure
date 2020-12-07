/**
 * partly args passing
 *
 */
const sum = (a, b ,c) => {
  return a + b + c
}
const res1 = sum(1,2,3)
console.log('res1:',res1); //6
// ---------------------------------
function sum2 (a){
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}
console.log('sum2:', sum2(1,2,3)); /**
                                      sum2: function(b){
                                          return function(c){
                                            return a + b + c
                                          }
                                        }
                                      */
console.log('sum2:', sum2(1)(2)(3)); //sum2: 6
// ----------------------------------------------
const sum3 = a => b => c => a + b + c
console.log('sum3:', sum3(1)(2)(3)); //sum3: 6


