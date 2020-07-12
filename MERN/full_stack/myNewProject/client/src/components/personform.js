//will be the functional componenet to render the form
// this whole form will go in Main.js 

import React, { useState  } from "react";
import axios from 'axios'

function Form() {
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')

  const handleOnSubmit = e => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/people', {
          firstName,
          lastName 
      })
      .then(res => console.log('Response: ', res))
      .catch(err => console.log('Error: ', err))


  }


  return (
      <form onSubmit = {handleOnSubmit}>
          <p>
              <label>First Name</label>
              <input type="text" onChange ={e => setFirstName(e.target.value)}/>
          </p>
          <p>
              <label>Last Name</label>
              <input type="text" onChange ={e => setLastName(e.target.value)}/>
          </p>
          <input type="submit"/>
      </form>
  )

}

export default Form 