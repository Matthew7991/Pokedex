import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPokemonDetails } from '../../utilities/getPokemons'
import PokemonImg from '../PokemonImg/PokemonImg'
import PokemonName from '../PokemonName/PokemonName'

function PokemonItem({ pokemon }) {
	const [pokemonDetails, setPokemonDetails] = useState(null)

	useEffect(() => {
		getPokemonDetails(pokemon.url, setPokemonDetails)
	}, [])

	if (!pokemonDetails) {
		return <p>loading...</p>
	}

	return (
		<article className="flex flex-col justify-end w-full h-full">
			<Link to={`/pokemon/${pokemonDetails.id}`}>
				<PokemonImg pokemonDetails={pokemonDetails} />
			</Link>
			<PokemonName pokemonDetails={pokemonDetails} />
		</article>
	)
}

export default PokemonItem
