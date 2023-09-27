<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <h1>Dynamic Route</h1>
  <h2>UserName: {{route.params.userId}}</h2>
</template>

<style scoped lang="scss">

</style>
