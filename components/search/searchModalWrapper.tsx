'use client'
import React from 'react'
import SearchResults from './searchResults'
import { useSearchContext } from '@/context/searchContext'
import RecentSearches from './recentSearches'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'

const SearchModalWrapper = ({ query }: { query: string }) => {
  const { searchActive } = useSearchContext()
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const pathname = usePathname()
  const isSearchPage = pathname === '/search'


  return (
    (isMobile || searchActive) && isSearchPage  ? <div className='md:absolute md:top-20 md:right-8 block md:bg-zinc-200/80 md:dark:bg-zinc-900/80 p-6 md:rounded-xl'>
      {!query && <RecentSearches />}
      {query && <SearchResults query={query} />}
    </div > : <div>
    </div>


  )
}

export default SearchModalWrapper