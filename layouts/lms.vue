<script lang="ts" setup></script>

<template>
  <NuxtLoadingIndicator class="!bg-green-500" :color="false" />

  <main
    class="w-full justify-between overflow-hidden overflow-x-scroll bg-gray-50 px-3 pb-24 pt-16 font-openSans md:flex md:min-h-dvh md:overflow-auto md:bg-gray-100 md:py-3 md:pl-[276px] dark:bg-gray-800"
    style="scrollbar-gutter: stable"
  >
    <Header />

    <Suspense>
      <slot />
    </Suspense>

    <Footer />
  </main>
</template>

<style></style>
