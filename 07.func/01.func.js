(function(){
  // return [2,2,2,2].map(parseInt); // useless

  [2,2,2,2].map((item, index) => {
    // (string, number)
    console.log(parseInt(item, index)) // 2 ,NaN, NaN, 2 - by index (0,1,2,3)
  })


})()