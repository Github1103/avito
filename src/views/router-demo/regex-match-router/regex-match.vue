<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

onMounted(() => {
  setInterval(() => {
    dynamicStr.value = dynamicStringOrNumber()
  }, 5000)
})

const isNumber = ref(false)
const dynamicStr = ref('')
const dynamicStringOrNumber = () => {
  isNumber.value = Math.random() * 10 > 5;
  return isNumber.value
    ? (Math.random() * 100).toFixed(0)
    : Math.random().toString(36).substring(7);
}


const routerList = computed(() => {
  return [
    {name: "Home", path: "/rd/home"},
    {name: "Dynamic Route", path: "/rd/dynamic"},
    {name: "Regex Match", path: "/rd/regex-match"},
  ]
})
</script>

<template>
  <h1>Regex Match Router</h1>
  <main>
    <ul>
      <li v-for="router of routerList">
        <router-link :to="router.path">{{ router.name }}</router-link>
      </li>
    </ul>
    <section class="view">
      <router-view/>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 50vw;
  display: flex;
  gap: 10px;
}

ul {
  text-decoration: none;
}

.view {
  flex: 1;
  border-radius: 10px;
  border: 1px solid #ffffff;
}
</style>
