// Returning values

// const speak = function(name = 'luigi', time = 'day') {
//     console.log(`Good ${time} ${name}`);
// }

const calcArea = function(radius) {
  return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);