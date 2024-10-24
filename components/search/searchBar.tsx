'use client'
import { useSearchContext } from '@/context/searchContext'
import { Search } from 'lucide-react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { setSearchActive } = useSearchContext()

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {

            params.set('query', term)
        } else {
            params.delete('query')
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <label className="input input-bordered flex items-center gap-2 w-fit rounded-full mr-4">
                <input type="text" className="grow" placeholder="Search" onChange={(event) => handleSearch(event.target.value)} onFocus={() => { setSearchActive(true) }} onBlur={(event) => {if(!event.target.value){setSearchActive(false)}}} />
                <Search size={20} strokeWidth={3} />
            </label>
        </div>
    )
}

export default SearchBar