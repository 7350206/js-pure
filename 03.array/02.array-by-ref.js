let arr1 = [1,2,3,4,5]
let arr2 = arr1 // <-- ref copy
arr2.push(10)
console.log('arr2:', arr2) //arr2: [ 1, 2, 3, 4, 5, 10 ]
console.log('arr1:', arr1) //arr1: [ 1, 2, 3, 4, 5, 10 ]

let arr3 = [...arr1] // <-- make a new
arr3.push(20)
console.log('arr3:', arr3) // arr3: [1,2,3,4,5,10,20]
console.log('arr1:', arr1) // arr1: [1,2,3,4,5,10] !!