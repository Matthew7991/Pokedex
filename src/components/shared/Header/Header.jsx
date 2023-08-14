import React from 'react'
import pokemonImg from '../../../assets/imgs/pokemon.svg'
import burgerMenu from '../../../assets/imgs/burgerMenu.svg'
import lightDarkButton from '../../../assets/imgs/lightDarkButton.svg'
import backButtonImg from '../../../assets/imgs/backButton.svg'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
	const path = useLocation().pathname
	const navigate = useNavigate()
	return (
		<header>
			<img
				className="w-2/3 mx-auto mb-5"
				src={pokemonImg}
				alt=""
			/>
			<nav className="flex justify-between gap-5 mb-5">
				{path === '/' ? (
					<button onClick={() => navigate('/types')}>
						<img
							src={burgerMenu}
							alt=""
						/>
					</button>
				) : (
					<button onClick={() => navigate(-1)}>
						<img
							src={backButtonImg}
							alt=""
						/>
					</button>
				)}
				<input
					type="text"
					placeholder="Search Pokemon"
					className="bg-[#EBEBEB] py-3 px-4 text-[#909090] rounded-full flex-1"
				/>
				<button>
					<img
						src={lightDarkButton}
						alt=""
					/>
				</button>
			</nav>
		</header>
	)
}

export default Header
