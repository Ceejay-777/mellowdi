import LibraryHeader from '@/components/library/libraryHeader'
import ArtistsShelf from '@/components/musicSections/artistsShelf'
import React from 'react'

const Page = () => {
  return (
    <div className='p-6'>
        <LibraryHeader header="Ceejay's Fav Artists" amount="You love 3 artists"/>
        <ArtistsShelf />
    </div>
  )
}

export default Page