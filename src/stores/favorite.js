import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  function toggleFavorite(drink) {
    const index = favorites.value.findIndex((fav) => fav.idDrink === drink.idDrink)
    if (index === -1) {
      favorites.value.push(drink)
    } else {
      favorites.value.splice(index, 1)
    }
    console.log(favorites.value)
  }

  function isFavorite(idDrink) {
    return favorites.value.some((fav) => fav.idDrink === idDrink)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
})
