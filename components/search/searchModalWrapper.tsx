import React from 'react'
import SearchResults from './searchResults'

const SearchModalWrapper = ({query, searchActive}: {query: string, searchActive: boolean}) => {
  return (
    <div className='absolute -top-4 right-8 bg-zinc-200/80 dark:bg-zinc-900/80 p-6 rounded-xl hidden md:block'>
      <SearchResults query={query}/>
    </div>
  )
}

export default SearchModalWrapper