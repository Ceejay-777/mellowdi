import { RecentSearchResult, SearchResult } from "./types";

export const searchQuery = (query: string): Promise<SearchResult[]> => {
  const fakeResults: SearchResult[] = [
    { id: 1, title: "Result 1", description: "Description for result 1" },
    { id: 2, title: "Result 2", description: "Description for result 2" },
    { id: 3, title: "Result 3", description: "Description for result 3" },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        // fakeResults.filter((result) =>
        //   result.title.toLowerCase().includes(query.toLowerCase())
        // )
        fakeResults
      );
    }, 1000);
  });
};

export const getRecentSearches = (): Promise<RecentSearchResult[]> => {
  const fakeResults: RecentSearchResult[] = [
    { id: 1, description: "Recent Search 1" },
    { id: 2, description: "Recent Search 2" },
    { id: 3, description: "Recent Search 3" },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        // fakeResults.filter((result) =>
        //   result.title.toLowerCase().includes(query.toLowerCase())
        // )
        fakeResults[0]
          ? fakeResults
          : [{ id: 0, description: "No recent searches" }]
      );
    }, 1000);
  });
};
