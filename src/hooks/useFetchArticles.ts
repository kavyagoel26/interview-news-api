import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../api/newsApi";
import { useAppStore } from "../store/app.store";

export const useFetchArticles = (sourceId: string) => {
  const apiKey = useAppStore.getState().apiKey;

  return useQuery(
    ["articles", sourceId], // Unique query key
    () => fetchArticles(apiKey, sourceId), // Fetch articles with the source ID
    {
      enabled: !!apiKey && !!sourceId, // Only fetch if API key and source ID are available
      retry: 2, // Retry the API call twice on failure
      staleTime: 60000, // Cache the data for 1 minute
      refetchOnWindowFocus: false, // Prevent refetching on window focus
      onError: (error) => {
        console.error("Error fetching articles:", error);
      },
    }
  );
};