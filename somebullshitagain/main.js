
//  /* Adding a Menu from an Array */
// let menuItems = ['home', 'blog', 'contact', 'about'];
// let nav = document.querySelector('ul');

// for(arrContent of menuItems) {
//  const newLi = document.createElement('li');
//  newLi.textContent = arrContent;
//  nav.appendChild(newLi);
// }

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]
console.log(numbers.length);

console.log(numbers[12]);

console.log(numbers[parseInt(numbers.length / 2)]);

console.log(numbers);

let result = numbers.map(x => x*x);
console.log(result);

const getNegativeNumbers = (array) => {
    return array.filter(value => value < 0);
  }
console.log(getNegativeNumbers(numbers));

console.log(Math.abs(numbers[2]));
