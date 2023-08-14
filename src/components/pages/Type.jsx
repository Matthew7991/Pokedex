import React, { useEffect, useState } from 'react'
import { getPokemonsByType } from '../utilities/fetchPokemonApi'
import { useParams } from 'react-router-dom'
import PokemonList from '../shared/PokemonList/PokemonList'

function Type() {
	const typeId = useParams().typeId
	const [pokemons, setPokemons] = useState()

	useEffect(() => {
		getPokemonsByType(typeId, setPokemons)
	}, [])

	if (!pokemons) {
		return <p>loading...</p>
	}

	return (
		<div>
			<PokemonList pokemons={pokemons} />
		</div>
	)
}

export default Type
