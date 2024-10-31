import { ArrowLeft, Dot } from 'lucide-react'
import React from 'react'

const LibraryHeader = ({ header, amount }: { header: string, amount: string }) => {
    return (
        <div className='pb-4 flex md:gap-12 gap-6 items-center md:ml-4'>
            <ArrowLeft/>
            <div>
                <h1 className='text-2xl font-semibold'>{header}</h1>
                <div className='flex'>
                    <Dot />
                    <p className='text-zinc-600 dark:text-zinc-500 text-sm md:text-base'>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default LibraryHeader