import { Sparkle, UserRound } from 'lucide-react'
import React from 'react'
import ThemeSelector from './themeSelector'
import SearchBar from './search/searchBar'

const Welcome = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <div className='flex gap-2 text-sm'>
                    <div className='rotate-[12]'>
                        <Sparkle />
                    </div>
                    <p>Hi Ceejay,</p>
                </div>
                <p className='text-xl font-semibold'>Good Evening</p>
            </div>
            <div className='self-end mr-6 md:hidden md:mb-8 flex items-center gap-2'>
                <ThemeSelector />
                <div className='p-4 rounded-full bg-primary-light dark:bg-primary-dark'>
                    <UserRound />
                </div>
            </div>
            <div className='hidden md:block'>
                <SearchBar />
            </div>
        </div>
    )
}

export default Welcome