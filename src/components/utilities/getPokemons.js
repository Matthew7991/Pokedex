import fetchResponseHandler from "./fetchResponseHandler";

export default function getPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(fetchResponseHandler)
}

export function getPokemonDetails(link, setData) {
  return fetch(link)
    .then(fetchResponseHandler)
    .then((data) => { console.log(data); setData(data) })
    .catch((error) => console.error(error.message))
}

export function getPokemonDetailsByID(id, setData) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(fetchResponseHandler)
    .then((data) => setData(data))
    .catch((error) => console.error(error.message))
}

export function getPokemonTypes(setData) {
  return fetch(`https://pokeapi.co/api/v2/type`)
    .then(fetchResponseHandler)
    .then((data) => setData(data.results))
    .catch((error) => console.error(error.message))
}

export function getPokemonsByType(type, setData) {
  console.log(`https://pokeapi.co/api/v2/type/${type}`)
  return fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then(fetchResponseHandler)
    .then((data) => setData(data.pokemon))
    .catch((error) => console.error(error.message))
}
