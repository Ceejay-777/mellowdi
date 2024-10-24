import { searchQuery } from '@/actions'
import { SearchResult } from '@/types'
import React from 'react'

const SearchResults = async ({ query }: { query: string }) => {
    const results: SearchResult[] = await searchQuery(query)

    if (query) console.log(query)
    else console.log("No query")

    return (
        <div className=''>
            {results.map((result) => {
                const { id, title, description } = result
                return (
                    <div key={id}>{description}</div>
                )
            })}
        </div>
    )
}

export default SearchResults