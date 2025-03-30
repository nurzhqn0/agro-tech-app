<script setup lang="ts">
const showSplash = useState("splash", () => true);
const { $pwa } = useNuxtApp();
const userStore = useUserStore();

onMounted(() => {
  userStore.initUser();
  setTimeout(() => {
    showSplash.value = false;
  }, 2000);
});
</script>

<template>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  />

  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
