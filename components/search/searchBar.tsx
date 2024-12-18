'use client'
import { useSearchContext } from '@/context/searchContext'
import { Search } from 'lucide-react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const SearchBar = () => {
    const [mobile, setMobile] = useState<boolean | undefined>()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const { setSearchActive } = useSearchContext()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isSearchPage = pathname === '/search'
    console.log(isMobile && isSearchPage)


    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])

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
        <div className={`md:block justify-center md:w-fit w-full px-4 md:px-0 md:mr-6 ${(mobile && !isSearchPage) ? 'hidden' : 'flex'}`}>
            <label className="input input-bordered flex items-center gap-2 w-full md:my-0 my-2 rounded-full md:mr-4 max-w-[540px] border-zinc-800 dark:border-zinc-200">
                <input type="text" className="grow " placeholder="Search" onChange={(event) => handleSearch(event.target.value)} onFocus={() => { setSearchActive(true) }} onBlur={(event) => { if (!event.target.value) { setSearchActive(false) } }} defaultValue={searchParams.get("query")?.toString()} />
                <Search strokeWidth={3} className='size-4 md:size-5' />
            </label>
        </div>
    )
}

export default SearchBar