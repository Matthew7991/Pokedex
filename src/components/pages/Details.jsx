import React, { useEffect, useState } from 'react'
import { getPokemonDetailsByID } from '../utilities/fetchPokemonApi'
import { useParams } from 'react-router-dom'
import TypeItem from '../shared/TypeItem/TypeItem'
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
			<section>
				<PokemonImg
					pokemonDetails={pokemonDetails}
					roundedBottom={true}
				/>
				<p className="text-[#FFCB05] md:text-8xl text-4xl font-black text-center my-[30px] [-webkit-text-stroke-width:0.06em] [-webkit-text-stroke-color:#2c72b8]">
					{`${
						pokemonDetails &&
						'#' + pokemonDetails.id.toString().padStart(4, '0')
					} ${pokemonDetails.name}`}
				</p>
				<div className="flex justify-between gap-8">
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
