function addUp(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > target) {
            arr.splice(arr[i],1))
        }
    }
   
    for (var i = 0; i < arr.length; i++) {
        var num1 = arr[0];
        var num2 = arr[i+1];
            if((num1 + num2) === target) {
             //return [num1, num2];

        }
        
    }
}
//console.log(addUp([2,1,8,12,3,6,4], 4))

/*function addUp(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                var num1 = arr[i];
                var num2 = arr[j];
                return [num1, num2];
            }
        }
    }
}
console.log(addUp([2,1,8,12,3,6,4], 4))*/






