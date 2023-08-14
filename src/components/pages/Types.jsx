import React, { useEffect, useState } from 'react'
import pokemonLogo from '../../assets/imgs/pokemon.svg'
import closeButtonImg from '../../assets/imgs/closeButton.svg'
import { getPokemonTypes } from '../utilities/fetchPokemonApi'
import TypeItem from '../shared/TypeItem/TypeItem'
import { Link } from 'react-router-dom'

function Types() {
	const [types, setTypes] = useState([])

	useEffect(() => {
		getPokemonTypes(setTypes)
	}, [])

	return (
		<section>
			<div className="flex justify-between px-4">
				<Link to={'/'}>
					<img
						className="w-1/3"
						src={pokemonLogo}
						alt="pokemon Logo"
					/>
				</Link>
				<Link to={'/'}>
					<img
						src={closeButtonImg}
						alt=""
					/>
				</Link>
			</div>
			<article>
				<h2 className="text-[#FFCB05] md:text-8xl text-4xl font-black text-center my-[30px] [-webkit-text-stroke-width:0.06em] [-webkit-text-stroke-color:#2c72b8]">
					Type
				</h2>
				<div className="grid justify-center grid-cols-2 gap-4">
					{types.map((type) => (
						<Link
							key={type.name}
							to={`/types/${type.name}`}>
							<TypeItem type={type.name} />
						</Link>
					))}
				</div>
			</article>
		</section>
	)
}

export default Types
