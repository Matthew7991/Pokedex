import fetchResponseHandler from "./fetchResponseHandler";
const apiLink = "https://pokeapi.co/api/v2"

export function getPokemons(setData) {
  return fetch(`${apiLink}/pokemon?limit=150`)
    .then(fetchResponseHandler)
    .then((data) => setData(data.results))
    .catch((error) => console.error(error.message))
}

export function getPokemonDetails(link, setData) {
  return fetch(link)
    .then(fetchResponseHandler)
    .then((data) => setData(data))
    .catch((error) => console.error(error.message))
}

export function getPokemonDetailsByID(id, setData) {
  return fetch(`${apiLink}/pokemon/${id}`)
    .then(fetchResponseHandler)
    .then((data) => setData(data))
    .catch((error) => console.error(error.message))
}

export function getPokemonTypes(setData) {
  return fetch(`${apiLink}/type`)
    .then(fetchResponseHandler)
    .then((data) => setData(data.results))
    .catch((error) => console.error(error.message))
}

export function getPokemonsByType(type, setData) {
  return fetch(`${apiLink}/type/${type}`)
    .then(fetchResponseHandler)
    .then((data) => setData(data.pokemon))
    .catch((error) => console.error(error.message))
}
