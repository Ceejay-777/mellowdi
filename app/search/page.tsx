import SearchModalWrapper from '@/components/search/searchModalWrapper'
import React from 'react'
import SearchCategories from './searchCategories'

const Search = ({searchParams} : {searchParams?: {query?: string}}) => {
    return (
        <div>
            <SearchModalWrapper query={searchParams?.query || ''}/>
            <SearchCategories />
        </div>
    )
}

export default Search