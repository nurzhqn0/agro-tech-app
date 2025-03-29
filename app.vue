<script setup lang="ts">
const { $pwa } = useNuxtApp();

const userStore = useUserStore();

onMounted(() => {
  userStore.initUser();
});
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
</template>
