import React, { useEffect, useState } from 'react'
import { getPokemonDetailsByID } from '../utilities/getPokemons'
import { useParams } from 'react-router-dom'
import TypeItem from '../shared/TypeItem/TypeItem'
import Header from '../shared/Header/Header'
import PokemonImg from '../shared/PokemonImg/PokemonImg'

function Details() {
	const pokemonId = useParams().pokemonId
	const [pokemonDetails, setPokemonDetails] = useState(null)
	useEffect(() => {
		getPokemonDetailsByID(pokemonId, setPokemonDetails)
	}, [])

	if (!pokemonDetails) {
		return <p>loading...</p>
	}

	return (
		<>
			<Header />
			<section>
				<PokemonImg
					pokemonDetails={pokemonDetails}
					roundedBottom={true}
				/>
				<p className="text-[#FFCB05] text-4xl font-black text-center text-shadow my-[30px]">
					{`${
						pokemonDetails &&
						'#' + pokemonDetails.id.toString().padStart(4, '0')
					} ${pokemonDetails.name}`}
				</p>
				<div className="flex gap-8 justify-between">
					{pokemonDetails.types.map((type) => (
						<TypeItem
							key={type.type.name}
							type={type.type.name}
							hideBorder={true}
						/>
					))}
				</div>
			</section>
		</>
	)
}

export default Details
