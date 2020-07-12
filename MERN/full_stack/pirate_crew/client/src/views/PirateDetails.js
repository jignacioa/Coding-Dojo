import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'


export default function PirateDetails({id}) {
  const[pirate, setPirate] = useState(null)
  const [peg, setPeg] = useState(false)
  const [patch, setPatch] = useState(false)
  const [hook, setHook] = useState(false)
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/pirates/' + id)
      .then(res => {
        setPirate(res.data)
        setPeg(res.data.peg)
        setPatch(res.data.patch)
        setHook(res.data.hook)
       }
      )
      .catch(err => console.log(err))
    }, [])


  if (pirate === null) return "Loading..."
  console.log(pirate)
  console.log(peg)
    return (
        <>
        <div>
        <h1>{pirate.name}</h1>
        <button onClick = {e => navigate('/')}>Back to All Crew</button>
        </div>
        <div>
          <h3>About</h3>
          <p>Position: {pirate.position}</p>
          <p>Treasures: {pirate.chests}</p>
          {peg? 
          <p>Leg Peg: Yes</p>:<p>Leg Peg: No</p>
           }
          {patch? 
          <p>Eye Patch: Yes</p>: <p>Eye Patch: No</p>
          }
          {hook? 
          <p>Hook Hand: Yes</p>: <p>Hook Hand: No</p>
          }
        </div>
        <div>
          <img src = {pirate.imageurl} width={"128"}/>
          <h3>"{pirate.phrase}"</h3>
        </div>
        </>
    )
}