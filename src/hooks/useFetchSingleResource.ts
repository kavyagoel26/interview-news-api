import { useQuery } from "@tanstack/react-query";
import { fetchSingleSource } from "../api/newsApi";
import { useAppStore } from "../store/app.store";

export const useFetchSingleResource = (resourceId: string) => {
  const apiKey = useAppStore.getState().apiKey;

  return useQuery(
    ["singleResource", resourceId],
    () => fetchSingleSource(apiKey, resourceId), // Use fetchSingleSource from newsApi.ts
    {
      enabled: !!apiKey && !!resourceId,
      retry: 1,
      staleTime: 60000,
    }
  );
};