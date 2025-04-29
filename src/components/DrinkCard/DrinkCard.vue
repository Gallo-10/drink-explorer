<script setup>
import '../../assets/Styles/DrinkCard.scss'
import { useFavoritesStore } from '../../stores/favorite.js'
import { Star, StarOff } from 'lucide-vue-next'

const favoritesStore = useFavoritesStore()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})

function handleFavorite() {
  favoritesStore.toggleFavorite({
    idDrink: props.id,
    strDrink: name,
    strDrinkThumb: props.image,
  })
}
</script>

<template>
  <div class="drink_card">
    <RouterLink :to="`/drink/${id}`" class="drink_link">
      <img :src="image" :alt="name" class="drink_image" />
      <p class="drink_name">{{ name }}</p>
    </RouterLink>

    <button @click.stop="handleFavorite" class="favorite_button">
      <component :is="favoritesStore.isFavorite(props.id) ? StarOff : Star" size="24" />
    </button>
  </div>
</template>
