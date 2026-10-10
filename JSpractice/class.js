class Pizza{
  constructor(pizzaType,pizzaSize,pizzaCrust){
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = pizzaCrust;
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.type} pizza with ${this.crust} crust.`);
  }
}

const myPizza = new Pizza("margerita","medium","thin");

myPizza.bake();