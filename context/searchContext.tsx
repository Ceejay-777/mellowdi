'use client'
import { SearchVal } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
const SearchContext = createContext<SearchVal>({
  searchActive: false,
  setSearchActive: () => { },
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  useEffect(() => {
    console.log(searchActive)
  }, [searchActive])

  const value: SearchVal = {
    searchActive,
    setSearchActive,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
export const useSearchContext = () => useContext(SearchContext)
