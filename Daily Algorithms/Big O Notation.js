function notation(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
        arr.splice(i, 1);
        } 
        
    } 
    return arr;
}
console.log(notation([0,1,0,11,0,4,3]))

//[0,1,0,11,2,0,4,3]
//ouput [1,11,2,4,3,0,0,0]*/