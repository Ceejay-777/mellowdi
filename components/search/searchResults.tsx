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

    if (query) console.log(query)
    else console.log("No query")

    return (
        <div className='bg-zinc-200/80 dark:bg-zinc-900/80 p-6 rounded-xl'>
            {searchResults ? searchResults.map((result) => {
                const { id, title, description } = result
                return (
                    <div key={id}>{description}</div>
                )
            }) : <p>No results for your search</p>}
        </div>
    )
}

export default SearchResults