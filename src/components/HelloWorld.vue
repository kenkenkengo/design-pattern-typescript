<script setup lang="ts">
import { ref } from "vue";
const title = ref<string>("title");
</script>

<template>
  <div>{{ title }}</div>
</template>

<style scoped></style>
