import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Details from './components/pages/Details'
import Types from './components/pages/Types'
import { createContext, useContext, useState } from 'react'
import Type from './components/pages/Type'
import Header from './components/shared/Header/Header'
export const DarkMode = createContext(false)
export const DarkModeSwitch = createContext(null)

function App() {
	const [darkMode, setDarkMode] = useState(useContext(DarkMode))

	const darkModeSwitch = () => {
		setDarkMode(!darkMode)
	}

	return (
		<DarkModeSwitch.Provider value={darkModeSwitch}>
			<DarkMode.Provider value={darkMode}>
				<div
					className={`${
						!darkMode ? 'bg-[#CCDADD]' : 'bg-black'
					} p-5 font-sans min-h-screen`}>
					<Routes>
						<Route element={<Header />}>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/pokemon/:pokemonId"
								element={<Details />}
							/>
							<Route
								path="/types/:typeId"
								element={<Type />}
							/>
						</Route>
						<Route
							path="/types"
							element={<Types />}
						/>
					</Routes>
				</div>
			</DarkMode.Provider>
		</DarkModeSwitch.Provider>
	)
}

export default App
