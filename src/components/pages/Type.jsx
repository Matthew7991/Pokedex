import React, { useEffect, useState } from 'react'
import { getPokemonsByType } from '../utilities/getPokemons'
import { useLocation, useParams } from 'react-router-dom'
import PokemonList from '../shared/PokemonList/PokemonList'
import Header from '../shared/Header/Header'

function Type() {
	const typeId = useParams().typeId
	const [pokemons, setPokemons] = useState()
	console.log(useLocation())

	useEffect(() => {
		getPokemonsByType(typeId, setPokemons)
	}, [])

	if (!pokemons) {
		return <p>loading...</p>
	} else {
		console.log(pokemons)
	}

	return (
		<div>
			<Header />
			<PokemonList pokemons={pokemons} />
		</div>
	)
}

export default Type
