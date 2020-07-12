import React, {useState} from 'react';
import {navigate} from '@reach/router'




function Search() {
  const[resource, setResource] = useState('')
  const[id, setID] = useState('')

  
  const handleForm = (e) => {
  e.preventDefault()
    navigate('/'+ resource+ '/' +id)
  }


  return (
    <div>
      <form onSubmit ={handleForm}>
        <label>Search For:</label>
        <select name ="resource" onChange ={e => setResource(e.target.value)}>
        <option value ="empty">-Select-</option>
            <option value ="people">People</option>
            <option value = "planets">Planets</option>
            <option value = "starships">Starships</option>
        </select>
        <input onChange = {e => setID(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search 