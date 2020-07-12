/**
 * takes in a string
 * returns out an object
 * with characters as keys
 * and the number of occurrences as values
 * 
 * how to determine if property is in object:
 * var obj = { someProp: 'some val' }
 * obj.hasOwnProperty('someProp') returns true
 */

function freqTable(str) {
  
  var mydict={};
  for (var i=0; i<str.length; i++){
      if (mydict.hasOwnProperty(str[i]) === false) {
        mydict[str[i]] = 1;
      } else {
        mydict[str[i]]++
      }
  }
  return mydict;
}

console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }


/**
 * takes in a string
 * returns a string
 * with the "words" reversed
 */

/*function reverseWordOrder(str) {
  var revstr='';
  for(var i =str.length; i>=0, i--){
    revstr += str[i]
  }
  return revstr;
  // your code here
}

console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
// should log 'test a is This'*/