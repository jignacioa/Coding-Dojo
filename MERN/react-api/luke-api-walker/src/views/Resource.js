import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'
//import Obi from '../Obi.jpeg'

function Resource({id}) {
    const [response, setResponse] = useState(null)
    //const [error, setError] = useState(false)
    useEffect(()=> {
        axios.get('https://swapi.dev/api/people/' + id)
         .then(response => setResponse(response.data))
         .catch(() => navigate('/error')) /*setError(true)*/
    }, [id])
  
    
    if (response === null) return 'Loading...'
    /* if (error) {
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
        <h3>Height: {response.height} </h3>
        <h3>Hair Color: {response.hair_color} </h3>
        <h3>Eye Color: {response.eye_color}</h3>
        <h3>Skin Color: {response.skin_color}</h3>
        </div>
    )
}

export default Resource
