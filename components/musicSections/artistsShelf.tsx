import React from 'react'
import SingleArtistDisplay from './singleArtistDisplay'
import { Plus } from 'lucide-react'

const ArtistsShelf = () => {
    return (
        <div className='grid grid-cols-3 gap-6 mmd:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />
            <SingleArtistDisplay artist='CeeJay' />

            <div className='aspect-square w-full rounded-xl min-w-[90px] flex-grow'>
                <div className='bg-zinc-300 dark:bg-zinc-900 rounded-xl p-2 mb-2'>
                    <Plus className='w-full h-full bg-primary-light rounded-full dark:bg-primary-dark' />
                </div>
                <p className='text-sm md:text-base text-black dark:text-white text-center '>Add More</p>
            </div>
        </div>
    )
}

export default ArtistsShelf