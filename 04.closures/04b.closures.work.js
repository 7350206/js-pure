const fwManager = () => {
  const fw = ["angular", "react"]

  return {
    print: function(){
      console.log(fw)
    },
    add: function(framework){
      fw.push(framework)
    }
  }
}

/**
 * !! fw is PRIVATE for manager, it is inaccessible from outside
 */


console.log(fwManager)  //[Function: fwManager]
const manager = fwManager()
console.log(manager)    //{ print: [Function: print], add: [Function: add] }
manager.add("vue")
manager.print()         //[ 'angular', 'react', 'vue' ]