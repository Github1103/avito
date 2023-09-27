<script setup lang="ts">
import {ref} from "vue";

const routerLinks = ref([
  {
    path: '/home',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  }
])
</script>

<template>
  <h1 class="title">Welcome to Vue-Router</h1>
  <p>
    <router-link v-for="link in routerLinks"
                 :key="link.name"
                 :to="link.path"
                 replace
    >
      {{ link.name }}
    </router-link>
  </p>
  <router-view class="window"/>
</template>

<style lang="scss" scoped>
.title {
  background: linear-gradient(to right,red, blue, green, white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.window {
  width: 100%;
  height: 620px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  > a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
  }
  > a:hover {
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
  }
}
</style>
