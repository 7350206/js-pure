// context - how fn was invoked, not a scope - where is seen
function Cat(color){
  this.color = color
  console.log('this:', this); // <- ; needed

  // not create own context
  // will equal Cat context
  (() => console.log('arrow.this', this))()


}

Cat('black')