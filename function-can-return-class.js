// function can return class
// named and anonymous
const f1 = () => {
  return class {

  }
}

console.log(typeof f1); //function
f1()

const f2 = () => {
  return class {

  }
}

console.log(typeof f2); //function

// export default f2()  cant be done