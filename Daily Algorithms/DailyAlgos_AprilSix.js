function caseInsensitiveStringCompare(s1, s2) {
    if (s1.toLowerCase() === s2.toLowerCase()) {
      return true
    } else {
        return false
    }
  }
  //console.log(caseInsensitiveStringCompare("Two", "one"));


  /* eg. ' there's no free lunch - gotta pay yer way. '
  * returns 'TNFL-GPYW'
  *
  * eg. 'Live from New York, it's Saturday Night!'
  * returns 'LFNYISN'
  */
 

 function acronyms(str) {}


  function stringReverse(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  //console.log(stringReverse('creature'));