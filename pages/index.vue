<script setup lang="ts">
const { $pwa } = useNuxtApp();

definePageMeta({
  layout: "lms",
});
</script>

<template>
  <div>
    <h1>Nuxt Vite PWA</h1>
    <p>PWA Installed: {{ $pwa?.isPWAInstalled }}</p>
    <p>
      <NuxtLink to="/"> Home </NuxtLink>
    </p>
  </div>
</template>

<style></style>
