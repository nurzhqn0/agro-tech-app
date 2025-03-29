<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 2000);
});
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-white z-50"
  >
    <img src="/logo.png" alt="Logo" class="w-32 h-32 animate-bounce" />
  </div>
</template>

<style scoped></style>
