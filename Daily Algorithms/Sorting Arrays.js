function swap(arr) {
for (var i  = 0; i < arr.length; i++) {
    for (var j  = 0; j < arr[i]; j++) {
        if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
      }
    }
    return arr;
}
console.log(swap([1,8,3,4,5,9]))