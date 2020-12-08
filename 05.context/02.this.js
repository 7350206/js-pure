function f(){
  this.name = 'john'
}

new f // can be invoke by "new"

// const o= {
//   fn: f
// }

console.log(this)   // {}
console.log(f.name) // f