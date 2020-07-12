import { useEffect } from "react";
import axios from 'axios'
import {navigate} from '@reach/router'




export default function EditCity({id}) {
  const[isLoading, setLoading] = useState(true)
  const[name, setName] = useState('')
  const[population, setPopulation] = useState('')
  const[imageUrl, setUrl] = useState('')
  const[nice, setLoading] = useState(false)

useEffect(() => {
  axios.get('http://localhost:8000/api/cities' + id)
  .then(res => {
    setCity(res.data.name)


    setIsLoading(false) //used for message if it is 'Loading...'

  })
}, [id]); /*if this id ever changes we would rerun the callback function, 
in this app it does not really matter we added it because dependency "error"*/
  
  function handleSubmit(event) {
      event.preventDefault();
      
      axios.put('http://localhost:8000/api/cities/' + id, {
          name,
          population,  //this is our req.body if our key name is same value then we don't need to to name: name 
          imageUrl,
          nice
      })
      .then(( => navigate('/cities/' + id)))
      .catch(console.log)
  }

  if (isLoading) return 'Loading...'

  return (yo
    <div>
        <form>
            <div>
              <label></label>
              <input/>
            </div>
            <div>
              <label>Is it nice?</label>
              <input
                type="checkbox"
                checked={nice}
                onChange = {e => setNice(e.target.checked)}/>
            </div>
        </form>
    </div>
  )

}

