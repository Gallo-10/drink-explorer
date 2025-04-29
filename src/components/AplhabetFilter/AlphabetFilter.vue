<script setup>
import '../../assets/Styles/AlphabetFilter.scss'
import { defineEmits } from 'vue'

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const emit = defineEmits(['selectLetter'])
</script>

<template>
  <div class="alphabet-filter">
    <button v-for="letter in alphabet" :key="letter" @click="emit('selectLetter', letter)">
      {{ letter }}
    </button>
  </div>
</template>
