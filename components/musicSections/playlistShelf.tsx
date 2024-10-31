import React from 'react'
import SinglePlaylistDisplay from './singlePlaylistDisplay'

const PlaylistShelf = () => {
  return (
    <div className='grid grid-cols-2 gap-6 mmd:grid-cols-3 lg:grid-cols-4'>
        <SinglePlaylistDisplay title="Maroon 5 Songs" myself/>
        <SinglePlaylistDisplay title="Maroon 5 Songs" />
        <SinglePlaylistDisplay title="Maroon 5 Songs" myself/>
        <SinglePlaylistDisplay title="Maroon 5 Songs" />
        <SinglePlaylistDisplay title="Maroon 5 Songs" myself/>
        <SinglePlaylistDisplay title="Maroon 5 Songs" myself/>
        <SinglePlaylistDisplay title="Maroon 5 Songs" />
        <SinglePlaylistDisplay title="Maroon 5 Songs" myself/>
    </div>
  )
}

export default PlaylistShelf