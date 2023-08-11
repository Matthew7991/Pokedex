import React from 'react'

function PokemonImg({ pokemonDetails, roundedBottom }) {
	return (
		<>
			<div
				className={`flex-auto h-32 after:content-[''] after:bg-gradient-to-tr after:from-[#FFE1C6] after:to-[#FFCB05] relative after:absolute after:inset-0 after:top-1/3 after:rounded-t-[20px] ${
					roundedBottom && 'after:rounded-b-[20px]'
				} flex items-end justify-center`}>
				<img
					className="h-full relative z-10 p-2.5"
					src={pokemonDetails.sprites.other.dream_world.front_default}
					alt={pokemonDetails.name}
				/>
			</div>
		</>
	)
}

export default PokemonImg
