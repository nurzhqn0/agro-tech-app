const scrollStateSymbol = Symbol();

export function useProvideScrollState() {
  const isScrolled = ref(false);

  const checkScroll = () => {
    isScrolled.value = window.scrollY > 0;
  };

  onMounted(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case the user is already scrolled
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
  });

  provide(scrollStateSymbol, isScrolled);
  return { isScrolled };
}

export function useScrollState() {
  const isScrolled = inject(scrollStateSymbol);
  if (!isScrolled) {
    throw new Error("useScrollState must be used within a ScrollStateProvider");
  }
  return { isScrolled };
}
