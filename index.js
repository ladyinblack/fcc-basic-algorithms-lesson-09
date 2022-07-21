// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Finders Keepers</h1>`;

/** TODO:
 * Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'.  This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`.  If no element passes the test, return `undefined`.
 * 
 
 function findElement(arr, func) {
   let num = 0;
   return num;
 }
 
 findElement([1, 2, 3, 4], num => num % 2 === 0);
 */

function findElement(arr, func) {
  let num = 0;
  // console.log(func(num));
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num))
      // console.log(num);
      return num;
    // console.log(arr[i]);
  }
  // return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);
