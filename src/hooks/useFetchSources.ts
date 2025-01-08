import { useQuery } from "@tanstack/react-query";
import { fetchSources } from "../api/newsApi";
import { useAppStore } from "../store/app.store";

export const useFetchSources = (queryParams: { country?: string; category?: string } = {}) => {
  const apiKey = useAppStore.getState().apiKey;

  return useQuery(
    ["sources", queryParams],
    () => fetchSources(apiKey, queryParams), // Use fetchSources from newsApi.ts
    {
      enabled: !!apiKey,
      retry: 1,
      staleTime: 60000,
    }
  );
};