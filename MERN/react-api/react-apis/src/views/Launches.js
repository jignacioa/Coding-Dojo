import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from '@reach/router'



function Launches() {
    const [launchesArray, setLaunchesArray] = useState(null)
    const [hasError, setHasError] = useState(false);
    useEffect(()=> {    //returns a promise object 
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(response => setLaunchesArray(response.data)) // response.data is the array inside the big object we get
        .catch(() => setHasError(true))
      
    }, []) /*[] = will only run when component first renders,
             [LaunchesArray]] = will run if launchesArray changes
             if you completely omit second argument, runs whenever ANYTHING CHANGES*/

    if(launchesArray === null) return 'Loading...'

    if (hasError) {
        return (
            <div>Something went wrong</div>
        )
    }

    return (
        <div>
            <h1>Launches</h1>
            {launchesArray.map((singleLaunch, i) => {
                return (
                <div key = {i}>
                    <h3>
                        <Link to = {"/launches/" + singleLaunch.flight_number}>
                        {singleLaunch.mission_name}
                        </Link>
                    </h3>
                    <p>Launch Date: {singleLaunch.launch_date_local}</p>
                </div>
                )
            })}
           {/*<button onClick={() => setLaunchesArray([])}>Click Me</button>*/} 
        </div>
    )
}

export default Launches 