/**
 * returns a boolean
 * is the word a palindrome?
 * palindromes are spelled the same when characters are reversed
 */

function isPalindrome(str) {
    var reversedstring =''
    for (var i = str.length-1; i >= 0; i--) {
      reversedstring += str[i]
    }
   return reversedstring === str 
  }

  //create a reverse string and compare to the original string
  console.log(isPalindrome('mom')); // should log true
  console.log(isPalindrome('Mom')); // should log false
  console.log(isPalindrome('this')); // should log false
  console.log(isPalindrome('mooom')); // should log true
  
  
  /**
   * returns a string
   * should be the longest palindrome in the string
   */
  
  function longestPalindrome(str) {
    for ( var i = 0; i < str.length; i++) {
      for (var j = str.length-1; j >=0; j--) {
        if (str[i] == str[j]) {
          for (var k = i)
        }
      }
    }
  }
  
  
  /*console.log(longestPalindrom('bobe')); // should log 'bob'
  console.log(longestPalindrom('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrom('Yikes! my favorite racecar erupted!'));*/
  // should log 'e racecar e'