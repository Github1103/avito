<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
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

onMounted(() => {
  router.push('/home')
});
</script>

<template>
  <h1>Welcome to Vue-Router</h1>
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
.window {
  width: 80vw;
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
  color: #42b983;
}
</style>
