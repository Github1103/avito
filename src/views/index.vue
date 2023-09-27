<script setup lang="ts">
import {ref} from "vue";

const routers = ref([
  {name: "Hello Vite+Vue3", path: "/hello-world"},
  {name: "Router Demo", path: "/rd"},
])
</script>

<template>
  <h1>Guide</h1>
  <main class="board">
    <router-link
      v-for="route of routers"
      :key="route.path"
      :to="route.path"
      class="card"
    >
      {{ route.name }}
    </router-link>
  </main>
</template>

<style lang="scss" scoped>
.board {
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .card {
    text-decoration: none;
    color: #ffffff;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
}
</style>
