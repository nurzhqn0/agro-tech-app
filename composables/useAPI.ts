import type { UseFetchOptions } from "nuxt/app";
import type { $Fetch, NitroFetchRequest } from "nitropack";

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
  watchParams?: any[],
) {
  return useFetch(url, {
    lazy: true,
    ...options,
    $fetch: useNuxtApp().$api as $Fetch<unknown, NitroFetchRequest>,
    watch: watchParams,
  });
}
