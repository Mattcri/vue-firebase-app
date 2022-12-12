<script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  

  const store = useAuthStore();
  const router = useRouter();

  const logOut = () => {
    store.signOutUser()
  };
</script>

<template>
  <header class="bg-indigo-100 py-4 relative shadow-md">
    <nav class="md:flex md:justify-between md:items-center container px-4 2xl:px-14 mx-auto">
      <div class="logo">
        <img src="../assets/logo-neumaticos-tr.png" alt="Logo Neumaticos a tu medida">
      </div>
      <!-- <span id="btn-menu" class="cursor-pointer lg:hidden"><img src="src/assets/menu.svg" alt="Menú mobile"></span> -->
      <ul id="navigation-menu" class="pt-5 pb-3 md:pt-0 md:pb-0 md:flex md:items-center transition-all ease-in duration-500">
        <li class="mx-2 mb-2 md:mx-1 md:mb-0 md:inline-flex"><RouterLink to="/" class="md:p-3 hover:bg-indigo-500 hover:text-white duration-500 rounded-lg">Home</RouterLink> </li>
        <li v-if="!store.isLogged" class="mx-2 mb-2 md:mx-1 md:mb-0 md:inline-flex"><RouterLink to="/login" class="md:p-3 hover:bg-indigo-500 hover:text-white duration-500 rounded-lg">Login</RouterLink> </li>
        <li class="mx-2 mb-4 md:mx-1 md:mb-0 md:inline-flex"><RouterLink to="/dashboard" class="md:p-3 hover:bg-indigo-500 hover:text-white duration-500 rounded-lg">Dashboard</RouterLink></li>
        
        <li v-if="store.isLogged" class="mx-2 md:mx-0 md:ml-2">
          <button @click="router.push('/register')" class="px-4 py-3 bg-button rounded-lg duration-500 hover:bg-indigo-500">Crear Usuario</button>
        </li>
        <li v-if="store.isLogged" class="mx-2 md:mx-0 md:ml-5">
          <button @click="logOut" class="px-4 py-3 bg-button rounded-lg duration-500 hover:bg-indigo-500">Cerrar Sesión</button>
        </li>
      </ul>
      
    </nav>
  </header>
</template>

<style scoped>
.logo img {
    width: 250px;
    border-radius: 20px;
  }
</style>