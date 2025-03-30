<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const tabs = computed(() => [
  {
    title: "Never Kill a Plant Again!",
    content: "We will send you reminders for everything related to plant care",
    img: "/imgs/hero.png",
  },
  {
    title: "Scan to know your Plants",
    content:
      "Scan your plants and or browse through plant library to create you digital garden",
    img: "/imgs/hero.png",
  },
  {
    title: "Learn more about Plants",
    content: "Learn more about plants health and care guide.",
    img: "/imgs/hero.png",
  },
]);

const currTab = ref(0);

const handleNext = () => {
  if (currTab.value < tabs.value.length - 1) {
    currTab.value++;
  } else {
    navigateTo("/auth");
  }
};
</script>

<template>
  <div class="h-screen px-4">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      v-show="currTab === index"
      class="flex flex-col items-center justify-center pt-10"
    >
      <NuxtImg
        class="absolute -z-10 left-0 w-full h-full -top-64"
        src="/imgs/1.svg"
      />

      <NuxtImg
        src="/imgs/hero.png"
        alt="Logo"
        width="400px"
        height="400px"
        class="object-cover rounded-full"
      />
      <div class="text-start items-start w-full mt-10">
        <h1 class="text-2xl font-bold">{{ tab.title }}</h1>
        <p class="mt-6 text-lg">{{ tab.content }}</p>
      </div>

      <div class="mt-40 flex justify-between items-center w-full">
        <div class="flex space-x-2">
          <span
            v-for="i in tabs.length"
            :key="i"
            @click="currTab = i - 1"
            :class="currTab === i - 1 ? 'bg-green-500' : ''"
            class="w-4 h-4 bg-green-300 rounded-full cursor-pointer duration-200"
          ></span>
        </div>

        <UButton
          label="Next"
          size="lg"
          rounded="lg"
          @click="handleNext()"
          trailing-icon="i-heroicons-arrow-small-right-solid"
        />
      </div>
    </div>

    <div
      v-if="currTab === tabs.length"
      class="flex flex-col items-center justify-center pt-10"
    >
      <h1>Welcome</h1>

      <div class="flex flex-col">
        <p>We’re glad that you are here!</p>

        <NuxtImg
          class="absolute -z-10 left-0 w-full top-20"
          src="/imgs/plant.svg"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
