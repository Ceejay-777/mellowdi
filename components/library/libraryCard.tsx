import { LibrayCard } from '@/types'
import Link from 'next/link'
import React from 'react'

const LibraryCard = ({title, content, href, children}: LibrayCard) => {
    return (
        <Link href={`/library/${href}`}>
            <div className='p-4 mmd:p-6 bg-gradient-to-tr hover:bg-gradient-to-bl from-zinc-400 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 shadow-md rounded-2xl max-w-[350px] w-full'>
                {children}
                <p className='font-bold'>{title}</p>
                <p>{content}</p>
            </div>
        </Link>
    )
}

export default LibraryCard