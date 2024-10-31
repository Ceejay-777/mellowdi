import { Playlist } from '@/types'
import React from 'react'
import Image from 'next/image'
import Cee from "@/app/favicon.png"
import { Dot } from 'lucide-react'

const SinglePlaylistDisplay = ({ art, title, myself }: Playlist) => {
    if (!art) {
        art = Cee
    }

    return (
        <div className='aspect-square w-full rounded-xl min-w-[120px] flex-grow'>
            <div className='bg-zinc-300 dark:bg-zinc-900 rounded-xl p-2 mb-2'>
                <Image src={art} alt='music art' className='rounded-xl' />
            </div>
            <div className='ml-2 text-sm md:text-base'>
                <p className='text-black dark:text-white text-sm font-semibold'>{title}</p>
                <div className='text-zinc-700 dark:text-zinc-500 flex items-center text-sm truncate'>
                    <p>Playlist</p>
                    {
                        myself && <span>
                            <Dot className='inline' strokeWidth={4}/>
                            Myself
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePlaylistDisplay