function decode(str) {
    var newStr = "";
    var char = str[0];
    var counter = "";
    for (var i =0; i<str.length;i++){
        if (str[i]!== char && isNaN(str[i])==true){
            for (var j =0;j<parseInt(counter);j++){
                newStr+=char;
            }
            counter = ""
            char = str[i]
        }
        else if (isNaN(str[i])==false){
            counter += str[i]
        }
    }
    for (var j =0;j<parseInt(counter);j++){
        newStr+=char;
    }
    return newStr;
}
  
console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a1b10')); // should log 'abbbbbbbbbb'
console.log(decode('a1b10c3'));
console.log(decode('a10b1'));


function encode(str) {
    var newStr = "";
    var char = str[0];
    var counter = 1;
    for (var i =1;i<str.length;i++){
        if (str[i] !== char){
            newStr+=char+counter;
            char = str[i];
            counter = 1;
        }
        else{
            counter++;
        }
    }
    newStr+=char+counter;
    if (newStr.length<str.length){
        return newStr;
    }
    else{
        return str;
    }
}
  
console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('aaaaaaaaaa'));
console.log(encode('abc')); // should log 'abc'


