import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonApi = () => {
    const [pokemonList, setPokemon] = useState([])
    const [render, setRender] = useState(false)


    useEffect(() => {
        axios.get(' https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => setPokemon(response.data.results))
    }, [])
    
    console.log(pokemonList)

    return (
        <>
        <div>
        <button onClick = {() => setRender(true)}>Fetch Pokemon</button>
            {pokemonList.map(pokemonObj => {
            
                  return render? 
                  <div key={pokemonObj.url}>{pokemonObj.name}</div>:''
            })}
        </div>

        </>
    )

}

export default PokemonApi