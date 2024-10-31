import React from 'react'
import LibraryHeader from '../../../components/library/libraryHeader'
import LibraryContent from '@/components/library/librarycontent'

const Page = () => {
    return (
        <div className='p-6'>
            <LibraryHeader header='Songs Ceejay Liked' amount='You liked 120 songs' />
            <LibraryContent />
        </div>
    )
}

export default Page