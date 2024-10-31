import LibraryHeader from '@/components/library/libraryHeader'
import PlaylistShelf from '@/components/musicSections/playlistShelf'
import React from 'react'

const Page = () => {
    return (
        <div className='p-6'>
            <LibraryHeader header="Ceejay's Playlists" amount='You have 12 playlists' />
            <PlaylistShelf />
        </div>
    )
}

export default Page