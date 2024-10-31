import React from 'react'
import LibraryHeader from '../../../components/library/libraryHeader'
import LibraryContent from '@/components/library/librarycontent'

const Page = () => {
  return (
    <div className='p-6'>
      <LibraryHeader header='Albums Ceejay Saved' amount='You liked 210 albums' />
      <LibraryContent />
    </div>
  )
}

export default Page