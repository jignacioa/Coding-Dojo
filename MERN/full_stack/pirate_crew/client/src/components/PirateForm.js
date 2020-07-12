import React, {useState}from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'


export default function Form() {
    const [name, setName] = useState('')
    const [imageurl, setImage] = useState('')
    const [chests, setChests] = useState('')
    const [phrase, setPhrase] = useState('')
    const [position, setPosition] = useState('')
    const [peg, setPeg] = useState(true)
    const [patch, setPatch] = useState(true)
    const [hook, setHook] = useState(true)
    const [errors, setErrors] = useState([])
    
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirates', {
            name, 
            imageurl, 
            chests,
            phrase,
            position,
            peg,
            patch,
            hook
        })
        .then(response => navigate(`/pirate/${response.data._id}`))
        .catch(err => {
          const errs = [];
          const innerErrorsObject = err.response.data.errors;

          for (const key in innerErrorsObject) {
              errs.push(innerErrorsObject[key].message)
          }
          setErrors(errs)
      })
    }
  
    return (
        <div>
             <h1>Add Pirate</h1>
             <button onClick = {e => navigate('/pirates')}>Crewboard</button>
          <hr/>
          {errors.map((error, index) => {
                return (
                    <p key = {index} style={{color:'red'}}>{error}</p>
                )
            })}
          <form onSubmit = {handleSubmit}>
              <div>
                <label>Pirate Name:</label>
                <input
                  name="name"
                  value ={name}
                  onChange ={ e => setName(e.target.value)}/>
              </div>
              <div>
                <label>Image:</label>
                <input
                  name ='population'
                  value={imageurl}
                  type="text"
                  onChange = {e => setImage(e.target.value)}/>
              </div>
              <div>
                <label>Number of Treasure Chests:</label>
                <input
                  name="chest"
                  value={chests}
                  type = "number"
                  onChange={ e => setChests(e.target.value)}/>
              </div>
              <div>
                <label>Catchphrase</label>
                <input
                  name="phrase"
                  value={phrase}
                  type ="text"
                  onChange={ e => setPhrase(e.target.value)}/>
              </div>
              <div>
              <label>Position</label>
                <select name ="position" onChange ={e => setPosition(e.target.value)}>
                <option value ="empty">-Select-</option>
                    <option value ="Captain">Captain</option>
                    <option value = "First Matee">First Mate</option>
                    <option value = "Quarter Master">Quarter Master</option>
                    <option value = "Boatswain">Boatswain</option>
                    <option value = "Powder Monkey">Powder Monkey</option>
                </select>
              </div>
              <div>
                <label>Peg Leg</label>
                <input
                  type="checkbox"
                  value={peg}
                  checked = {peg}
                  onChange={ e => setPeg(e.target.checked)}/>
              </div>
              <div>
                <label>Eye Patch</label>
                <input
                  type="checkbox"
                  value={patch}
                  checked = {patch}
                  onChange={ e => setPatch(e.target.checked)}/>
              </div>
              <div>
                <label>Hook Hand</label>
                <input
                  type="checkbox"
                  value={hook}
                  checked = {hook}
                  onChange={ e => setHook(e.target.checked)}/>
              </div>
              <button type='submit'>Add Pirate</button>
          </form>
        </div>
    )
}