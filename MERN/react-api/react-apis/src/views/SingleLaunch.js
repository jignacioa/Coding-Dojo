import React, {useEffect, useState} from 'react'
import axios from 'axios';


function SingleLaunch({id}) { // can be destructured { id } 
  const [launch, setLaunch] = useState(null)
  
  useEffect(()=> {
    //the id will always come in as a string
    //parseInt(id) return integer
    // +id // also returns an integer 
    axios.get('https://api.spacexdata.com/v3/launches/' + id)
    .then(response => setLaunch(response.data))
    .catch(console.log)
  }, []);


  if(launch === null) return 'Loading...';
  return (
    <div>
      <h1>{launch.mission_name}</h1>
      <h3>{launch.rocket.rocket_name}</h3>
      <p>{launch.details}</p>
    </div>
  )

}

export default SingleLaunch