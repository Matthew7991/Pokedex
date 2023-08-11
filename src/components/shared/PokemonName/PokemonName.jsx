import React from 'react'

function PokemonName({ pokemonDetails }) {
	return (
		<div className="bg-white flex justify-between py-1 px-2 text-sm rounded-b-[20px]">
			<span>
				{pokemonDetails && `#${pokemonDetails.id.toString().padStart(4, '0')}`}
			</span>
			<span>
				{pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.slice(1)}
			</span>
		</div>
	)
}

export default PokemonName
