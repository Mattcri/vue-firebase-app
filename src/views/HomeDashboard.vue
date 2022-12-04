<script setup>
  import { useAuthStore } from '../stores/auth';

  const store = useAuthStore();

  const logOut = () => {
    store.signOutUser()
  };

</script>

<template>
  <div>
    <h1 class="text-center underline">Home Dashboard</h1>
    <p>Acceso a la vista protegida de la app</p>
    <button class="rounded-full mt-12" @click="logOut">Cerrar sesión</button>
  </div>
</template>

<style lang="scss" scoped>

</style>