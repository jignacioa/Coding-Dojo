//function bookIndex(arr) {
  // your code here
}
//make a loop and check if the values are consecutive
//if the numbers are consecutive keep going 
/* arr[i]= arr[0] = 1 
   arr[i+1] = arr[1] = 2 
   if arr[i] + 1 === arr[i+1]
  if arr[1] + 1 === arr[i+1]
*/
/*if not add a comma to the string
arr[2] = 3
arr[3] = 5
arr[2] + 1 = 4 is not equal to arr[3] = 5
*/

console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
// should log '1-3, 5-7, 10-11'
console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'

/**

//takes in an array and a separator string
//returns a string connecting all the array
//elements with the given separator */
//function join(arr, separator) {
  // your code here
}

console.log(join(['a', 'b', 'c'], '|')); // should log 'a|b|c'
console.log(join(['a', 'b', 'c'], '? ')); // should log 'a? b? c'
console.log(join(['a', 'b', 'c'], ',,')); // should log 'a,,b,,c'