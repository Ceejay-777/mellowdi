'use client'
import Category from '@/components/musicSections/category'
import Shelf from '@/components/musicSections/shelf'
import { useSearchContext } from '@/context/searchContext'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const SearchCategories = () => {
    const { searchActive } = useSearchContext()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        (isMobile && !searchActive) || !isMobile ?
            <div>
                <Shelf shelf='Featured Playlists' />
                <Category category='Genres To Explore' />
            </div>
            :
            <div></div>
    )
}

export default SearchCategories