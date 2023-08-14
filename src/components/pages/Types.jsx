import React, { useEffect, useState } from 'react'
import pokemonLogo from '../../assets/imgs/pokemon.svg'
import closeButtonImg from '../../assets/imgs/closeButton.svg'
import { getPokemonTypes } from '../utilities/getPokemons'
import TypeItem from '../shared/TypeItem/TypeItem'
import { useNavigate } from 'react-router-dom'

function Types() {
	const [types, setTypes] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		getPokemonTypes(setTypes)
	}, [])

	return (
		<section>
			<div className="flex justify-between px-4">
				<img
					className="w-1/3"
					src={pokemonLogo}
					alt="pokemon Logo"
				/>
				<button onClick={() => navigate('/')}>
					<img
						src={closeButtonImg}
						alt=""
					/>
				</button>
			</div>
			<article>
				<h2 className="text-[#FFCB05] md:text-8xl text-4xl font-black text-center my-[30px] [-webkit-text-stroke-width:0.06em] [-webkit-text-stroke-color:#2c72b8]">
					Type
				</h2>
				<div className="grid justify-center grid-cols-2 gap-4">
					{types.map((type) => (
						<button
							key={type.name}
							onClick={() => navigate(`/types/${type.name}`)}>
							<TypeItem
								// key={type.name}
								type={type.name}
							/>
						</button>
					))}
				</div>
			</article>
		</section>
	)
}

export default Types
