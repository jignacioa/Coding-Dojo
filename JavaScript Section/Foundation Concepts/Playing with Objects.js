var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// John's age
console.log(users[1]['age']) 

//Name of the first object
console.log(users[0]['name'])

//Using a for loop
function infoObject(arr) {
  for(var i = 0; i < arr.length; i++) {
      console.log(arr[i]['name'], arr[i]['age'])
  }
}
infoObject(users)
