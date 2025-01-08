import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";

export const fetchSources = async (apiKey: string, queryParams: { country?: string; category?: string } = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines/sources`, {
      params: {
        apiKey,
        ...queryParams, // Pass dynamic query parameters like country and category
      },
    });
    return response.data.sources; // Return the list of sources
  } catch (error: any) {
    console.error("Error fetching sources:", error?.response?.data || error.message);
    throw error;
  }
};

export const fetchSingleSource = async (apiKey: string, resourceId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines/sources`, {
      params: {
        apiKey,
      },
    });

    // Simulate fetching a specific resource by filtering from the sources list
    const resource = response.data.sources.find((src: any) => src.id === resourceId);

    if (!resource) {
      throw new Error("Resource not found");
    }
    return resource; // Return the specific resource
  } catch (error: any) {
    console.error("Error fetching single source:", error?.response?.data || error.message);
    throw error;
  }
};

export const fetchArticles = async (apiKey: string, sourceId: string) => {
  if (!apiKey) throw new Error("API key is required.");
  if (!sourceId) throw new Error("Source ID is required.");

  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      apiKey,
      sources: sourceId, // Fetch articles for a specific source
    },
  });

  return response.data.articles; // Return articles from the API response
};


