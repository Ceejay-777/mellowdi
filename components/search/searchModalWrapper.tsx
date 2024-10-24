'use client'
import React from 'react'
import SearchResults from './searchResults'
import { useSearchContext } from '@/context/searchContext'
import RecentSearches from './recentSearches'

const SearchModalWrapper = ({ query }: { query: string }) => {
  const { searchActive } = useSearchContext()

  return (
    searchActive ? <div className='absolute -top-4 right-8 rounded-xl hidden md:block'>
      { !query && <RecentSearches />}
      { query && <SearchResults query={query} />}
    </div > : <div>
    </div>


  )
}

export default SearchModalWrapper