<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

onMounted(() => {
  generateDynamicUserId()
  setInterval(() => {
    generateDynamicUserId()
  }, 5000)
})

const helloCatalog = ref([
  {name: "Hello Vite+Vue3", path: "/hello-world"},
])

const generateDynamicUserId = () => {
  const dynamicUserId = Math.floor(Math.random() * 100).toString()
  routerCatalog.value.splice(1, 1,{
    name: `Dynamic Route: UserId = "${dynamicUserId}"`,
    path: `/dynamic/${dynamicUserId}`
  })
}
const routerCatalog = ref([
  {name: "Router Link & View", path: "/rd/home"},
  {name: "Router Dynamic Route", path: "/dynamic/"},
  {name: "Router Regex Match", path: "/regex-match/"},
])

const sectionList = computed(() => [
  {
    name: "Hello Vite+Vue3", catalog: helloCatalog.value
  },
  {
    name: "Router", catalog: routerCatalog.value
  },
])
</script>

<template>
  <h1>Guide</h1>
  <template v-for="section of sectionList">
    <h2>{{ section.name }}</h2>
    <section class="board">
      <router-link
        v-for="route of section.catalog"
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
