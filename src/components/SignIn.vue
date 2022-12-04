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
  <div>
    <h4>Ingresar</h4>
    <div>
      <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="ingresar email" v-model.trim = "email">
        <input type="password" placeholder="ingresar password" v-model.trim = "password">
        <div class="mb-4">
          <button type="submit" class="rounded-full">Ingresar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>