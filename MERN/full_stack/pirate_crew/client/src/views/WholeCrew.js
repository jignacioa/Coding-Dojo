import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

export default function WholeCrew() {
  const [pirates, setPirates] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pirates') 
      .then(response => setPirates(response.data))
      .catch(err => console.log(err))
    }, [])
  const handleDelete = id => {
      console.log(id)
      axios.delete('http://localhost:8000/api/pirates/' + id) 
        .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
        .catch(err => console.log(err))
  }
    if (pirates === null) return 'Loading...'
    console.log(pirates)
    return (
        <div>
        <h1>Pirate Crew</h1>
        <button onClick = {e => navigate('/pirate/new')}>Add a Pirate</button>
        <hr/>
         {pirates.map(pirate => {
             return (
                 <div key = {pirate._id}>
                 <h3 >{pirate.name}</h3>
                 <img src = {pirate.imageurl} width={"128"}/>
                 <button onClick = {() => navigate(`/pirate/${pirate._id}`)}>View Pirate</button>{' '}
                 <button onClick = {() => {handleDelete(pirate._id)}}>Walk the Plank</button>
                 </div>
             )
         })}
         </div>
    )



}