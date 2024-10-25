import SearchModalWrapper from '@/components/search/searchModalWrapper'
import React, { Suspense } from 'react'

const Search = ({searchParams} : {searchParams?: {query?: string}}) => {
    return (
        <div>
            <SearchModalWrapper query={searchParams?.query || ''}/>
        </div>
    )
}

export default Search