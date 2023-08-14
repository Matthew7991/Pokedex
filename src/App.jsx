import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Details from './components/pages/Details'
import Types from './components/pages/Types'
import { createContext, useContext, useState } from 'react'
import Type from './components/pages/Type'
export const Pokemons = createContext(null)
export const DarkMode = createContext(false)
export const DarkModeSwitch = createContext(null)

function App() {
	// const [pokemons, setPokemons] = useState([])
	// useContext(Pokemons)
	const [darkMode, setDarkMode] = useState(useContext(DarkMode))

	const darkModeSwitch = () => {
		setDarkMode(!darkMode)
	}

	return (
		// <Pokemons.Provider value={pokemons}>
		<DarkModeSwitch.Provider value={darkModeSwitch}>
			<DarkMode.Provider value={darkMode}>
				<div
					className={`${
						!darkMode ? 'bg-[#CCDADD]' : 'bg-black'
					} p-5 font-sans min-h-screen`}>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/pokemon/:pokemonId"
							element={<Details />}
						/>
						<Route
							path="/types"
							element={<Types />}
						/>
						<Route
							path="/types/:typeId"
							element={<Type />}
						/>
					</Routes>
				</div>
			</DarkMode.Provider>
		</DarkModeSwitch.Provider>
		// </Pokemons.Provider>
	)
}

export default App
