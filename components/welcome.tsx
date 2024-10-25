import { Sparkles, UserRound } from 'lucide-react'
import React, { Suspense } from 'react'
import ThemeSelector from './themeSelector'
import SearchBar from './search/searchBar'

const Welcome = () => {
    return (
        <div className='flex justify-between flex-col md:flex-row'>
            <div className='flex justify-between mx-6'>
                <div>
                    <div className='flex gap-2 text-sm'>
                        <Sparkles />
                        <p className='text-sm md:text-base'>Hi Ceejay,</p>
                    </div>
                    <p className='text-base md:text-xl font-semibold'>Good Evening</p>
                </div>
                <div className='self-end md:hidden md:mb-8 flex items-center gap-2 relative'>
                    <ThemeSelector />
                    <div className='p-3 rounded-full bg-primary-light dark:bg-primary-dark'>
                        <UserRound size={18} />
                    </div>
                </div>
            </div>
            <div className='yu'>
                <Suspense fallback={<div className="skeleton w-48 h-12"></div>}>
                    <SearchBar />
                </Suspense>
            </div>
        </div>
    )
}

export default Welcome