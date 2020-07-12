/**
 * takes in an array of numbers
 * returns a boolean
 * Is there a point between indices
 * where the summed values on each side are equal?
 */

function balancePoint(arr) {
  // your code here
}

console.log(balancePoint([1, 2, 3, 4])); // should log false
console.log(balancePoint([3, 4, 2, 5]));
// should log true (between indices 1 and 2)


/**
 * takes in an array of numbers
 * returns an integer
 * if there is an index in which the summed values
 * on each side are equal, return it
 * otherwise, return -1
 */

function balanceIndex(arr) {
  // your code here
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // should log 2
console.log(balanceIndex([9, 9])); // should log -1