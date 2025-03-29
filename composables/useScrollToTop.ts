export function useScrollToTop() {
  try {
    document.querySelector("main")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {}
}
