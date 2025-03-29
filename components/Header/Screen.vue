<script lang="ts" setup>
const imgError = ref(false);
const userStore = useUserStore();
const router = useRouter();

const toggleButton = () => {
  router.push("/profile");
};

const goBack = () => {
  window.history.length > 1 ? window.history.back() : navigateTo("/");
};
</script>

<template>
  <div
    class="fixed left-0 top-0 z-[47] flex h-14 w-screen items-center justify-between rounded-t-2xl bg-white px-5 md:hidden"
  >
    <UButton
      icon="i-heroicons-chevron-left"
      variant="ghost"
      class="text-green-500"
      @click="goBack()"
    />

    <!-- <UButton
      icon="i-heroicons-arrow-right-start-on-rectangle"
      variant="ghost"
      class="text-green-500"
      @click="userStore.logout"
    /> -->
  </div>
</template>
