//Business Logic

//General Pricing
const small = ["Small", 10];
const medium = ["Medium", 15];
const large = ["Large", 20];
const none = ["none", 0];

//Meat
const sausage = ["Sausage", 1];
const chicken = ["Chicken", 1];
const deer = ["Deer", 3];

//Vegi
const onion = ["Onion", .5]
const carrots = ["Carrots", .5]
const turnips = ["Turnips", 1]

let pizzaOrder = new PizzaOrder();

function PizzaOrder(pizzas) {
  this.pizzas = [];
}
console.log(pizzaOrder);
  
let pizza = new Pizza();

function Pizza(size,meat,vegi) {
    this.size = size;
    this.meat = meat;
    this.vegi = vegi;
  }
console.log(pizza);

PizzaOrder.prototype.AddPizza = function(pizza) {
  this.pizzas.push(pizza);
}


PizzaOrder.prototype.PizzaCalcPrice = function() {
  let pizzaPrice = this.pizzas[0].size[1] + this.pizzas[0].meat[1] + this.pizzas[0].vegi[1];
  return pizzaPrice;
}

let pizza1 = new Pizza(small, sausage, onion);
pizzaOrder.AddPizza(pizza1);
console.log(pizzaOrder.pizzas);

pizzaOrder.PizzaCalcPrice()







//User Interface Logic
$(document).ready(function() {
  //user input code here (event)
  event.preventDefault();

};)