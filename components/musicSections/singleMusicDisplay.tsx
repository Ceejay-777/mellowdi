import { ShelfTrack, Track } from '@/types'
import React from 'react'
import Cee from "@/app/favicon.png"
import Image from 'next/image'

const SingleMusicDisplay = ({ art, title, artist }: ShelfTrack) => {
    if (!art) {
        art = Cee
    }
    return (
        <div className='max-w-[150px] border border-accent p-2 rounded-xl my-4 min-w-[120px] flex-grow'>
            <div className='bg-zinc-300 dark:bg-zinc-900 rounded-xl p-2 mb-2'>
                <Image src={art} alt='music art' className='rounded-xl'/>
            </div>
            <div className='ml-2'>
                <p className='text-black dark:text-white text-sm'>{title}</p>
                <p className='dark:text-gray-300 text-xs text-gray-600 font-light'>{artist}</p>
            </div>
        </div>
    )
}

export default SingleMusicDisplay