<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDrinkDetailsById } from '@/api/drinks'
import '../../assets/Styles/DrinkDetailsView.scss'
import { computed } from 'vue'

const route = useRoute()
const drink = ref(null)
const loading = ref(false)

async function fetchDrinkDetails() {
  loading.value = true
  try {
    const response = await getDrinkDetailsById(route.params.id)
    console.log(response.data)
    drink.value = response.data.drinks[0]
  } catch (error) {
    console.error('Erro ao buscar detalhes do drink:', error)
  } finally {
    loading.value = false
  }
}

const ingredients = computed(() => {
  if (!drink.value) return []
  const list = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink.value[`strIngredient${i}`]
    const measure = drink.value[`strMeasure${i}`]
    if (ingredient) {
      list.push({ ingredient, measure })
    }
  }
  return list
})

onMounted(() => {
  fetchDrinkDetails()
})
</script>

<template>
  <div v-if="loading">Carregando detalhes...</div>

  <div v-else-if="drink" class="drink-detail">
    <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="drink-image" />
    <h1>{{ drink.strDrink }}</h1>

    <h2>Ingredientes</h2>
    <ul>
      <li v-for="(item, index) in ingredients" :key="index">
        {{ item.ingredient }} - {{ item.measure || '' }}
      </li>
    </ul>

    <h2>Instruções</h2>
    <p>{{ drink.strInstructions }}</p>
  </div>

  <div v-else>
    <p>Drink não encontrado.</p>
  </div>
</template>

<style scoped lang="scss"></style>
