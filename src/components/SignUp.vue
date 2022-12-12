<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';

  const email = ref('');
  const password1 = ref('');
  const password2 = ref('');
  const store = useAuthStore()

  const handleSubmit = () => {
    if (!email.value || !password1.value || !password2.value) {
      alert('Completar campos')
    } else {
      password1.value == password2.value
        ? store.signUpUser(email.value, password1.value)
        : alert('Las contraseñas no coinciden')
    }
  };

</script>

<template>
  <div class="sm:w-4/5 lg:w-3/6 2xl:w-2/5 sm:border-4 sm:border-indigo-600 sm:mx-auto sm:py-8 sm:px-6 lg:px-8 lg:py-10 rounded-2xl ">
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-base font-medium ">Tu correo</label>
        <input type="email" id="email"
          class="bg-indigo-50  border-2 border-blue-500  text-lg rounded-lg placeholder-slate-800 focus:outline-none focus:ring focus:border-blue-500 focus:border-1 block w-full p-2.5 cursor-pointer"
          placeholder="correo@dominio.cl" required v-model.trim="email">
      </div>
      <div class="mb-6">
        <label for="password1" class="block mb-2 text-base font-medium ">Contraseña</label>
        <input type="password" id="password1"
          class="bg-indigo-50  border-2 border-blue-500  text-lg rounded-lg placeholder-slate-800 focus:outline-none focus:ring focus:border-blue-500 focus:border-1  w-full p-2.5 cursor-pointer"
          required v-model.trim="password1">
      </div>
      <div class="mb-6">
        <label for="password2" class="block mb-2 text-base font-medium ">Repetir Contraseña</label>
        <input type="password" id="password2"
          class="bg-indigo-50  border-2 border-blue-500  text-lg rounded-lg placeholder-slate-800 focus:outline-none focus:ring focus:border-blue-500 focus:border-1  w-full p-2.5 cursor-pointer"
          required v-model.trim="password2">
      </div>
    
      <button type="submit"
        class="text-white bg-button hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-buttons dark:hover:bg-indigo-500 dark:focus:ring-blue-800">Registrar Usuario</button>
    </form>

  </div>
</template>

<style scoped>

</style>