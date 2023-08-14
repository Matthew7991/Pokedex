import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Details from './components/pages/Details'
import Types from './components/pages/Types'
import { createContext, useContext, useState } from 'react'
import Type from './components/pages/Type'
const Pokemons = createContext()

function App() {
	// const [pokemons, setPokemons] = useState([])
	// useContext(Pokemons)

	return (
		// <Pokemons.Provider value={pokemons}>
		<div className="bg-[#CCDADD] p-5 font-sans min-h-screen">
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
		// </Pokemons.Provider>
	)
}

export default App
