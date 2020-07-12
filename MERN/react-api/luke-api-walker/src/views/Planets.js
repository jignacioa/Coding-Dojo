import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'
//import Obi from '../Obi.jpeg'


function Planets({id}) {
    const [response, setResponse] = useState(null)
    //const [error, setError] = useState(false)
    useEffect(()=> {
        axios.get('https://swapi.dev/api/planets/' + id)
         .then(response => setResponse(response.data))
         .catch(() => navigate('/error'))/*setError(true)*/
    }, [id])
   
    if (response === null) return 'Loading...'

    /*if (error) {
        return ( 
         <>   
        <h1>These aren't the droids you're looking for</h1> 
        <img src ={Obi} alt="Obi"/>
        </>
        
        )
        
    }*/
    
    return (
        <div>
        <h1>{response.name}</h1>
        <h3>Climate: {response.climate} </h3>
        <h3>Terrain: {response.terrain} </h3>
        <h3>Surface Water: {response.surface_water}</h3>
        <h3>Population: {response.population}</h3>
        </div>
    )
}

export default Planets