class Pizza{
  constructor(pizzaType,pizzaSize,pizzaCrust,toppings){
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = pizzaCrust;
    this.toppings = [];

  }

  getCrust(){
    return this.crust;
  } 

  setCrust(newCrust){
    this.crust = newCrust;
  }
  
  getToppings(){
    return this.toppings;
  }

  setToppings(newToppings){
    this.toppings.push(newToppings);
  }

  bake(){
    console.log(`Baking a ${this.size} ${this.type} pizza with ${this.crust} crust.`);
  }

}

const myPizza = new Pizza("margerita","medium","thin");
myPizza.setCrust("thick");
myPizza.setToppings("cheese","onion","tomato");

myPizza.bake();