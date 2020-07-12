import React, {useState} from 'react';
import axis from 'axios'
import {navigate} from '@reach/router'

export default function NewCity({city, method, url}) {
  const [name, setName] = useState(city.name);
  const [population, setPopulation] = useState(city.population);
  const [imageUrl, setImageUrl] = useState(city.imageUrl);
  const [nice, setNice] = useState(city.nice);
  const [errors, setErrors] = useState([])
  function handleSubmit(event) {
    event.preventDefault();

    axios[method](url, {
       name,
       population,
       imageUrl,
       nice 
    })
    .then(()=> navigate('/cities'))
    .catch(err => {
        const errs =[];
        const innerErrorsObject = err.response.data.errors;

        for(const key in innerErrorsObject) {
            errs.push(innerErrorObject[key].message)
        }
        setErrors(errs)
    })
  }
  
  return (
      <div>
          <h1>New City</h1>
          <form onSubmit = {handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value ={name}
                  onChange ={ e => setName(e.target.value)}/>
              </div>
              <div>
                <label>Population</label>
                <input
                  name ='population'
                  value={population}
                  type="number"
                  onChange = {e => setPopulation(e.target.value)}/>
              </div>
              <div>
                <label>Image URL</label>
                <input
                  name="imageUrl"
                  value={imageUrl}
                  onChange={ e => setImageUrl(e.target.value)}/>
              </div>
              <div>
                <label>Is it nice?</label>
                <input
                  type="checkbox"
                  value={nice}
                  onChange={ e => setNice(e.target.checked)}/>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
  )

}