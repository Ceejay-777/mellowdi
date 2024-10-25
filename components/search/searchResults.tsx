import { searchQuery } from '@/actions'
import { SearchResult } from '@/types'
import React, { useEffect, useState } from 'react'

const SearchResults = ({ query }: { query: string }) => {
    const [searchResults, setSearchResults] = useState<SearchResult[] | undefined>()

    const search = async (query: string) => {
        const results: SearchResult[] = await searchQuery(query)
        if (results) {
            setSearchResults(results)
        }
        else setSearchResults(undefined)
    }

    useEffect(() => {
        if (query) {
            search(query)
        }
        else setSearchResults(undefined)
    }, [query])

    return (
        <div className='text-sm'>
            <p className='mb-2 text-base'>Results for {query}</p>
            {searchResults ? searchResults.map((result) => {
                const { id, description } = result
                return (
                    <div key={id} className='p-2'>{description}</div>
                )
            }) : <p>No results for your search</p>}
        </div>
    )
}

export default SearchResults