<script lang="ts" setup>
const route = useRoute();

const isOpen = ref(false);
const indexOpenned = ref(0);
const labelOpened = ref("");
const router = useRouter();

const links = [
  {
    label: "Главная",
    icon: "i-gravity-ui-house",
    to: "/dashboard",
  },
  {
    label: "Плантации",
    icon: "i-ph-kanban",
    to: "/plant",
  },
  {
    label: "Чат",
    icon: "i-heroicons-map",
    to: "/chat",
  },
];

const activeRoute = (link: string) => {
  return route.fullPath.includes(link);
};

const toggleClick = (index: number) => {
  if (links[index].isRedirect === false) {
    indexOpenned.value = index;
    isOpen.value = true;
    labelOpened.value = links[index].label;
  } else {
    router.push(links[index].to);
  }
};
</script>

<template>
  <div
    class="fixed bottom-0 left-0 z-[40] flex h-20 w-screen justify-between rounded-t-2xl bg-white px-5 py-3 shadow-[0_-2px_16px_0_rgba(0,0,0,0.08)] md:hidden"
  >
    <!-- navigation -->
    <button
      v-for="(link, index) in links"
      :key="index"
      @click="toggleClick(index)"
      class="group flex h-10 min-w-14 flex-col items-center justify-between text-center font-semibold"
      :class="{
        'text-black': activeRoute(link.to),
        'text-gray-700': !activeRoute(link.to),
      }"
      :href="link.to"
    >
      <UIcon
        :name="link.icon"
        class="size-6 shrink-0"
        :class="{
          'bg-green-500': activeRoute(link.to),
          'bg-gray-700': !activeRoute(link.to),
        }"
      />
      <span class="text-xs font-normal text-gray-500 group-hover:text-gray-700">
        {{ link.label }}
      </span>
    </button>
  </div>
</template>
