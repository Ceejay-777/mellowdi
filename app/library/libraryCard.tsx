import { LibrayCard } from '@/types'
import React from 'react'

const LibraryCard = ({title, content, children}: LibrayCard) => {
    return (
        <div className='p-6 border bg-gradient-to-tr from-zinc-400 t0-zinc-300 dark:from-zinc-900 dark:to-zinc-800 w-4/5 grow'>
            {children}
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}

export default LibraryCard