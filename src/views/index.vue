<script setup lang="ts">
import {ref} from "vue";

const helloCatalog = [
  {name: "Hello Vite+Vue3", path: "/hello-world"},
]

const routerCatalog = [
  {name: "Router Link & View", path: "/home"},
]

const sectionList = ref([
  {
    name: "Hello Vite+Vue3", catalog: helloCatalog
  },
  {
    name: "Router", catalog: routerCatalog
  },
])
</script>

<template>
  <h1>Guide</h1>
  <template v-for="section of sectionList"
    :key="section.name"
  >
    <h2>{{ section.name }}</h2>
    <section class="board">
      <router-link
        v-for="route of section.catalog"
        :key="route.path"
        :to="route.path"
        class="card"
      >
        {{ route.name }}
      </router-link>
    </section>
  </template>

</template>

<style lang="scss" scoped>
h2 {
  text-align: left;
}
.board {
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-bottom: 30px;

  .card {
    text-decoration: none;
    color: #ffffff;
    height: 200px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
}
</style>
