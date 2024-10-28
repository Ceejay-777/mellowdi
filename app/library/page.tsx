import React from 'react'
import LibraryCard from '../../components/library/libraryCard'
import { GalleryHorizontalEnd, Heart, ListMusic, UserRoundPlus } from 'lucide-react'
import RecentlyPlayed from './recentlyPlayed'
import SearchModalWrapper from '@/components/search/searchModalWrapper'

const Library = ({ searchParams }: { searchParams?: { query?: string } }) => {
    return (
        <div className='p-6'>
            <SearchModalWrapper query={searchParams?.query || ''} />
            <h1 className='font-bold text-2xl mb-4'>Ceejay's Space</h1>
            <div className='grid flex-col gap-4 items-center grid-cols-[repeat(2,_minmax(0,_350px))] mmd:grid'>
                <LibraryCard title="Liked Songs" content="120 songs" href='likedsongs'>
                    <Heart className='size-5 mmd:size-6' />
                </LibraryCard>
                <LibraryCard title="Albums" content="210 albums" href='savedalbums'>
                    <GalleryHorizontalEnd />
                </LibraryCard>
                <LibraryCard title="Playlists" content="12 playlists" href='savedplaylists'>
                    <ListMusic />
                </LibraryCard>
                <LibraryCard title="Artists" content="3 Artists" href='artists'>
                    <UserRoundPlus />
                </LibraryCard>
            </div>
            <RecentlyPlayed />
        </div>
    )
}

export default Library