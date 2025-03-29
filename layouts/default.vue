<script setup lang="ts">
const showSplash = useState("splash", () => true);

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 2000);
});
</script>

<template>
  <SplashScreen v-if="showSplash" />
  <NuxtPage v-else />
</template>

<style></style>
