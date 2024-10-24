import { SearchResult } from "./types";

export const searchQuery = (query: string): Promise<SearchResult[]> => {
  // Mock search results
  const fakeResults: SearchResult[] = [
    { id: 1, title: "Result 1", description: "Description for result 1" },
    { id: 2, title: "Result 2", description: "Description for result 2" },
    { id: 3, title: "Result 3", description: "Description for result 3" },
  ];

  return new Promise((resolve) => {
    // Simulate a delay for async behavior
    setTimeout(() => {
      resolve(
        // fakeResults.filter((result) =>
        //   result.title.toLowerCase().includes(query.toLowerCase())
        // )
        fakeResults
      );
    }, 1000); // 1 second delay to mimic an API call
  });
}
