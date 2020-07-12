/**
 * takes in an object
 * returns an object
 * with the keys as values and values as keys
 * 
 * to iterate through an object's keys: for(var key in obj)
 * to get the value: obj[key]
 */

function invertHash(obj) {
    newObj = {};
    for (var key in obj) {
      newObj[obj[key]] = key;
    }
    return newObj;
  }
  
  console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
  console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
  })); // should log { val1: 'key1', val2: 'key2' }
  
  
  /**
   * takes in two equal-length arrays
   * returns an object
   * with the elements from the first as keys
   * and the elements from the second as values
   */
  
  function zipArraysIntoMap(arr1, arr2) {
    var obj={};
    for (var i=0; i<arr1.length;i++) {
        obj[arr1[i]]=arr2[i];
    }
    return obj;
  }
  
  console.log(zipArraysIntoMap(['some', 'thing'], ['other', 'stuff']));
  // should log { some: 'other', thing: 'stuff' }
