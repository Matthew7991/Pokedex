import React from 'react'
import pokemonImg from '../../../assets/imgs/pokemon.svg'
import burgerMenu from '../../../assets/imgs/burgerMenu.svg'
import lightDarkButton from '../../../assets/imgs/lightDarkButton.svg'

function Header() {
	return (
		<header>
			<img
				className="mb-5 mx-auto w-2/3"
				src={pokemonImg}
				alt=""
			/>
			<nav className="flex gap-5 justify-between mb-5">
				<button>
					<img
						src={burgerMenu}
						alt=""
					/>
				</button>
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
