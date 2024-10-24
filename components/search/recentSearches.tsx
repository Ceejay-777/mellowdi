import { getRecentSearches } from '@/actions'
import { RecentSearchResult } from '@/types'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const RecentSearches = () => {
    const [recentSearches, setRecentSearches] = useState<RecentSearchResult[]>()

    const searchRecent = async () => {
        const results: RecentSearchResult[] = await getRecentSearches()
        setRecentSearches(results)
    }

    useEffect(() => {
        searchRecent()
    }, [])

    return (
        <div className='bg-zinc-200/80 dark:bg-zinc-900/80 p-6 rounded-xl'>
            <p className='text-lg mb-4'>Recent searches</p>
            <div className='flex flex-col gap-4'>
                {recentSearches ? recentSearches.map((recent) => {
                    const { id, description } = recent
                    return (
                        <div className='flex gap-6' key={id}>
                            <div key={id}>{description}</div>
                            <X className='self-end'/>
                        </div>
                    )
                }) : <div>No recent searches</div>}
            </div>
        </div>
    )
}

export default RecentSearches