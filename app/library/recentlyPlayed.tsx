import TrackList from '@/components/musicSections/trackList'
import React from 'react'

const RecentlyPlayed = () => {
    {/* Pass list of tracks */ }
    return (
        <div>
            <h2 className='text-xl my-6'>Recently Played</h2>
            <TrackList />
        </div>
    )
}

export default RecentlyPlayed