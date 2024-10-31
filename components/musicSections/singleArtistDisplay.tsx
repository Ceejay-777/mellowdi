import React from 'react'
import { Artist } from '@/types'
import Image from 'next/image'
import Cee from "@/app/favicon.png"

const SingleArtistDisplay = ({ art, artist }: Artist) => {
    if (!art) {
        art = Cee
    }

    return (
        <div className='aspect-square w-full rounded-xl min-w-[90px] flex-grow'>
            <div className='bg-zinc-300 dark:bg-zinc-900 rounded-xl p-2 mb-2'>
                <Image src={art} alt='music art' className='rounded-full' />
            </div>
            <p className='text-black dark:text-white text-sm md:text-base text-center'>{artist}</p>
        </div>
    )
}

export default SingleArtistDisplay



