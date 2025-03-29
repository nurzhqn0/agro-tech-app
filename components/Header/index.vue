<script lang="ts" setup>
const imgError = ref(false);
const userStore = useUserStore();
const router = useRouter();

const toggleClick = () => {
  router.push("/profile");
};
</script>

<template>
  <div
    class="fixed left-0 top-0 z-[47] flex h-14 w-screen items-center justify-between rounded-t-2xl bg-white px-5 md:hidden"
  >
    <!-- <NuxtImg
      v-if="userStore.userData.image"
      :src="userStore.userData.image"
      class="size-6 rounded-full bg-slate-400 object-cover"
    /> -->
    <button
      class="flex size-10 shrink-0 items-center justify-center self-center rounded-full bg-green-100 font-bold uppercase tracking-tighter text-green-500"
      @click="toggleClick()"
    >
      {{
        (userStore.userData.name?.[0] ?? "") +
        (userStore.userData.surname?.[0] ?? "")
      }}12
    </button>

    <UButton
      icon="i-heroicons-arrow-right-start-on-rectangle"
      variant="ghost"
      class="text-green-500"
      @click="userStore.logout"
    />
  </div>
</template>
