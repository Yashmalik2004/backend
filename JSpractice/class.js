class Pizza{
  constructor(pizzaType,pizzaSize,pizzaCrust){
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = pizzaCrust;
    
  }
  getCrust(){
    return this.crust;
  }
  setCrust(newCrust){
    this.crust = newCrust;
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.type} pizza with ${this.crust} crust.`);
  }
}

const myPizza = new Pizza("margerita","medium","thin");
myPizza.setCrust("thick");

myPizza.bake();