import React from 'react'
import LibraryHeader from '../../../components/library/libraryHeader'
import Likedsongs from '../../../components/library/likedsongs'

const Page = () => {
  return (
    <div className='p-6'>
      <LibraryHeader header='Albums Ceejay Saved' amount='You liked 210 albums' />
      <Likedsongs />
    </div>
  )
}

export default Page