import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
})

export function getDrinksByCategory(category) {
  return api.get(`/filter.php?c=${category}`)
}

export function getDrinkDetailsById(id) {
  return api.get(`/lookup.php?i=${id}`)
}

export function getCategories() {
  return api.get('/list.php?c=list')
}

export function getDrinksByLetter(letter) {
  return api.get(`/search.php?f=${letter}`)
}

export function searchDrinksByName(name) {
  return api.get(`/search.php?s=${name}`)
}
