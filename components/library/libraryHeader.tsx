import { ChevronLeft, Dot } from 'lucide-react'
import React from 'react'

const LibraryHeader = ({ header, amount }: { header: string, amount: string }) => {
    return (
        <div className='pb-4 flex justify-between items-center max-w-[560px] md:px-12'>
            <div>
                <h1 className='text-2xl font-semibold'>{header}</h1>
                <div className='flex'>
                    <Dot />
                    <p className='text-zinc-600 dark:text-zinc-500 text-sm md:text-base'>{amount}</p>
                </div>
            </div>
            <ChevronLeft className='ml-6' />
        </div>
    )
}

export default LibraryHeader