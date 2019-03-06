// const mult1 = (a, b) => a * b
const mult2 = a => b => a * b

const double = mult2(2)
console.log(double(2)); //4