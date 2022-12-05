<script setup>
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';

  const store = useAuthStore();
  const router = useRouter();

  const redirectToLogin = () => {
    router.push('/login')
  };
  const redirectToDashboard = () => {
    router.push('/dashboard')
  };

</script>

<template>
  <div class="container px-4 2xl:px-14 mx-auto">
    <div v-if="!store.isLogged">
      <h1 class="text-center mb-3">Bienvenido a Neumáticos <br> a tu Medida</h1>
      <p class="text-center text-lg mb-6">Ingresa a tu perfil dando click en el botón de "Login" o en el botón "Ingresar a mi Perfil"</p>
      <div class="text-center">
        <button @click="redirectToLogin" class="px-4 py-3 bg-button rounded-lg duration-500 hover:bg-indigo-500">Ingresar a mi Perfil</button>
      </div>
    </div>
    <div v-else>
      <h1 class="text-center mb-3">¡Que gusto tenerte de vuelta!</h1>
      <p class="text-center text-lg mb-6">Revisa todas las novedades de tu negocio, visitando la pestaña de "Dashboard" o dando click en "Ir a mi Dashboard"</p>
      <div class="text-center">
        <button @click="redirectToDashboard" class="px-4 py-3 bg-button rounded-lg duration-500 hover:bg-indigo-500">Ir a mi Dashboard</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>