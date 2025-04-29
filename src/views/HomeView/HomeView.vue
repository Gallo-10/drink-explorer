<script setup>
import '../../assets/Styles/HomeView.scss'
import { ref } from 'vue'
import {
  getDrinksByLetter,
  searchDrinksByName,
  getCategories,
  getDrinksByCategory,
} from '../../api/drinks.js'
import AlphabetFilter from '../../components/AplhabetFilter/AlphabetFilter.vue'
import { debounce } from '../../utils/debounce.js'
import { onMounted } from 'vue'
import DrinkCard from '../../components/DrinkCard/DrinkCard.vue'
import { useFavoritesStore } from '../../stores/favorite.js'

const searchQuery = ref('')
const loading = ref(false)
const drinks = ref([])
const categories = ref([])
const favoritesStore = useFavoritesStore()
const showingFavorites = ref(false)

function showFavorites() {
  showingFavorites.value = true
  drinks.value = favoritesStore.favorites
}

async function fetchDrinksByLetter(letter) {
  loading.value = true
  try {
    const response = await getDrinksByLetter(letter)
    drinks.value = response.data.drinks || []
  } catch (error) {
    console.error('Erro ao buscar drinks:', error)
  } finally {
    loading.value = false
  }
}

async function fetchDrinksByName(name) {
  loading.value = true
  try {
    const response = await searchDrinksByName(name)
    drinks.value = response.data.drinks || []
  } catch (error) {
    console.error('Erro ao buscar drinks:', error)
  } finally {
    loading.value = false
  }
}
const debouncedFetchDrinksByName = debounce(fetchDrinksByName, 300)

async function fetchCategories() {
  loading.value = true
  try {
    const response = await getCategories()
    categories.value = response.data.drinks || []
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
  } finally {
    loading.value = false
  }
}

async function fetchDrinksByCategory(category) {
  loading.value = true
  try {
    const response = await getDrinksByCategory(category)
    drinks.value = response.data.drinks || []
  } catch (error) {
    console.error('Erro ao buscar drinks da categoria:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCategories()
})
</script>

<template>
  <div className="home_view">
    <div class="search_input">
      <input
        type="text"
        v-model="searchQuery"
        @input="debouncedFetchDrinksByName(searchQuery)"
        placeholder="Buscar drink pelo nome..."
      />
    </div>

    <div class="categories_container">
      <button class="category_button" @click="showFavorites">Favoritos</button>
      <button
        v-for="category in categories"
        :key="category.strCategory"
        @click="fetchDrinksByCategory(category.strCategory)"
        class="category_button"
      >
        {{ category.strCategory }}
      </button>
    </div>
    <AlphabetFilter @selectLetter="fetchDrinksByLetter" />
    <div v-if="loading">Carregando drinks...</div>

    <div className="drinks_container" v-else>
      <ul>
        <li v-for="drink in drinks" :key="drink.idDrink">
          <DrinkCard :id="drink.idDrink" :name="drink.strDrink" :image="drink.strDrinkThumb" />
        </li>
      </ul>
    </div>
  </div>
</template>
