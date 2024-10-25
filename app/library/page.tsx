import React from 'react'
import LibraryCard from './libraryCard'
import { GalleryHorizontalEnd, Heart, ListMusic, UserRoundPlus } from 'lucide-react'

const Library = () => {
    return (
        <div className='p-6'>
            <h1 className='font-bold text-2xl mb-4'>Ceejay's Space</h1>
            <div className='flex'>
                <LibraryCard title='Liked Songs' content='120 songs'>
                    <Heart />
                </LibraryCard>
                <LibraryCard title='Albums' content='210 albums'>
                    <GalleryHorizontalEnd />
                </LibraryCard>
                <LibraryCard title='Playlists' content='12 playlists'>
                    <ListMusic />
                </LibraryCard>
                <LibraryCard title='Artists' content='3 Artists'>
                    <UserRoundPlus />
                </LibraryCard>
            </div>
        </div>
    )
}

export default Library