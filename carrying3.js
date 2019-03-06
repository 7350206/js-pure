const f = (a) => {
  // 1st return
  return (b) => {
    // 2nd return
    console.log(a + b);
  }
}

f(1)(2) //3