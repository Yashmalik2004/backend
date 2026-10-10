class Pizza{
  constructor(pizzaType,pizzaSize,pizzaCrust){
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = pizzaCrust;
  }
  get pizzaCrust(){
    return this.crust;
  }
  set pizzaCrust(newCrust){
    this.crust = newCrust;
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.type} pizza with ${this.crust} crust.`);
  }
}

const myPizza = new Pizza("margerita","medium","thin");
myPizza.pizzaCrust = "thick";

myPizza.bake();