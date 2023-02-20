/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };

  this.division = function (a, b) {
    return a / b;
  };
}

var calculator = new Calculator();

console.log(calculator.sum(2, 3)); // spausdins 5
console.log(calculator.subtraction(5, 3)); // spausdins 2
console.log(calculator.multiplication(2, 4)); // spausdins 8
console.log(calculator.division(10, 2)); // spausdins 5
