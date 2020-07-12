import React, {useState, useEffect} from 'react'

const PokemonApi = () => {
    const [pokemonList, setPokemon] = useState([])
    const [render, setRender] = useState(false)


    useEffect(() => {
        fetch(' https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, [])
    
    console.log(pokemonList)
    return (
        <>
        <div>
        <button onClick = {() => setRender(true)}>Fetch Pokemon</button>
            {pokemonList.map(pokemonObj => {
            
                  return render? 
                  <div key = {pokemonObj.name}>{pokemonObj.name}</div>:''
            })}
        </div>

        </>
    )

}

export default PokemonApi