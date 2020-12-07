const HiThere = name => {
  const message = "hi there, " + name

  // have access to inner scope
  return () => {
    console.log(message)
  }
}

const hiThereJohn = HiThere('john')
console.log(hiThereJohn)  // [Function (anonymous)]
hiThereJohn()             //hi there, john
