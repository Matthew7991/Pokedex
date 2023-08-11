import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Details from './components/pages/Details'

function App() {
	return (
		<div className="bg-[#CCDADD] p-5">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/pokemon/:pokemonId"
					element={<Details />}
				/>
			</Routes>
		</div>
	)
}

export default App
