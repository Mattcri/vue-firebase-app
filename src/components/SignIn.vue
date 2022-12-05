<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';

  const email = ref('');
  const password = ref('');
  const store = useAuthStore()

  const handleSubmit = () => {
    !email.value || !password.value
      ? alert('Completar campos')
      : store.signInUser(email.value, password.value)
  };

</script>

<template>
  <div class="sm:w-4/5 lg:w-3/6 2xl:w-2/5 sm:border-4 sm:border-indigo-600 sm:mx-auto sm:py-8 sm:px-6 lg:px-8 lg:py-10 rounded-2xl ">
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tu correo</label>
        <input type="email" id="email"
          class="bg-gray-50 shadow border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ejemplo@dominio.cl" required v-model.trim = "email">
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Contraseña</label>
        <input type="password" id="password"
          class="bg-gray-50 shadow border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required v-model.trim = "password">
      </div>
      
      <button type="submit"
        class="text-white bg-button hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-buttons dark:hover:bg-indigo-500 dark:focus:ring-blue-800">Ingresar</button>
    </form>
  </div>
</template>

<style scoped>

</style>