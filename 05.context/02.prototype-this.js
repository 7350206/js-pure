function f(){
  this.name = 'john'
}

// using "new"
// 1) make a new object, make it "this"
// 2) implicitly returns (return this)
// 3) set prototype

new f

// const o= {
//   fn: f
// }

console.log(this)   // {}
console.log(f.name) // f




// it is own fn method
// methods can be hosted in {prototype} to optimize memory
/*prototype, this is a special property that every JS object has to delegate common behavior.
For example, the prototype for array objects has the functions: map, forEach, find, etc.
The prototype for strings has functions replace, substr, etc.

prototype methods are read only!!

*/

console.log('prototype:', f.prototype) //prototype: {}