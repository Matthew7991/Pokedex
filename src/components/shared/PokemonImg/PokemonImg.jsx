import React, { useContext } from 'react'
import { DarkMode } from '../../../App'

function PokemonImg({ pokemonDetails, roundedBottom }) {
	const darkMode = useContext(DarkMode)
	return (
		<>
			<div
				className={`flex-auto h-32 after:content-[''] after:bg-gradient-to-tr ${
					!darkMode
						? 'after:from-[#FFE1C6] after:to-[#FFCB05]'
						: 'after:from-[#BFDFFF] after:to-[#001224]'
				} relative after:absolute after:inset-0 after:top-1/3 after:rounded-t-[20px] ${
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
