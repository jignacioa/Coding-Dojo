const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto'
];
// promises: potential future value that may not necessarily happen, it;s a special object 
function getPlanetById(id) {
    //return planets[id]; but this can take time so make a promise
  //promise
  //promises take a callback func!
  return new Promise((resolve, reject) => {
      if(id < planets.length) {
          resolve(planets[id]) //resolve the promise 
      } else {
          reject('That planet does not exist')
      }
  })

}

//.then and .catch take callback functions
getPlanetById(1) // calling this returns a Promise object {'Venus'}
  // so to get 'Venus' we call .then on the promise if resolved
  .then(planet => {
      console.log{'the planet name is ' + planet)
    })
  .catch(console.log)