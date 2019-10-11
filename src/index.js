module.exports = function zeros(expression) {
  let counterTwo = 0;
  let counterFive = 0;
  let expressionArray = [];
  let baseArray = [];
  let degreeArray = [];

  function countMultiplicity(number, multiplier) {
    let counter = 0;
    while (number % multiplier == 0) {
      counter++;
      number /= multiplier;
    }
    return counter;
  }

  function factorial (base, degree) {
    if (base <= 0) base = 1;
    counterTwo += countMultiplicity(base,2);
    counterFive += countMultiplicity(base,5);
    return (base != 1) ? base * factorial(base-degree, degree) : base;
  }

  expressionArray = expression.split("*");

  expressionArray.forEach(element => {
    degreeArray.push((element.match(/!/g)).length);
    element = element.replace(/!/g, "");
    baseArray.push(element);
  })

  baseArray.forEach((element, i) => {
    factorial(element, degreeArray[i]);
  })

  return counterFive > counterTwo ? counterTwo: counterFive;
}
