import React, { useEffect, useState } from 'react'
import PokemonList from '../shared/PokemonList/PokemonList'
import getPokemons from '../utilities/getPokemons'
import Header from '../shared/Header/Header'

function Home() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		getPokemons()
			.then((data) => setPokemons(data.results))
			.catch((error) => console.error(error.message))
	}, [])

	return (
		<div>
			<Header />
			<PokemonList pokemons={pokemons} />
		</div>
	)
}

export default Home
