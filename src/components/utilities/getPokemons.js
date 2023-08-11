import fetchResponseHandler from "./fetchResponseHandler";

export default function getPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(fetchResponseHandler)
}

export function getPokemonDetails(link, setData) {
  return fetch(link)
    .then(fetchResponseHandler)
    .then((data) => setData(data))
    .catch((error) => console.error(error.message))
}

export function getPokemonDetailsByID(id, setData) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(fetchResponseHandler)
    .then((data) => setData(data))
    .catch((error) => console.error(error.message))
}

