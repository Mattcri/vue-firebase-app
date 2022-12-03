<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <h1 class="text-4xl font-bold underline" >{{ msg }}</h1>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>

</template>

<style scoped>

</style>
// color: #888;
