import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function SingleCity(props) {
    const [city, setCity] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/cities' + props.id)
        .then(response)
        .catch(err => console.log(err))
    })

    if(city === null) return 'Loading...'

    return (
        <h1></h1>
        <p>Population: {city.population}</p>
    )
})
