import React, { useEffect, useState } from 'react'
import PokemonList from '../shared/PokemonList/PokemonList'
import { getPokemons } from '../utilities/fetchPokemonApi'

function Home() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		getPokemons(setPokemons)
	}, [])

	return (
		<div>
			<PokemonList pokemons={pokemons} />
		</div>
	)
}

export default Home
