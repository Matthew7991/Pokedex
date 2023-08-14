import React from 'react'
import PokemonItem from '../PokemonItem/PokemonItem'

function PokemonList(props) {
	return (
		<section className="grid grid-cols-2 items-end justify-items-center gap-x-5 gap-y-2.5 mb-10">
			{props.pokemons.map((pokemon) => {
				return (
					<PokemonItem
						key={pokemon.url || pokemon.pokemon.url}
						pokemon={pokemon.pokemon || pokemon}
					/>
				)
			})}
		</section>
	)
}

export default PokemonList
