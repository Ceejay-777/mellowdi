import SingleTrackDisplay, { TableHead } from '@/components/musicSections/singleTrackDisplay'
import { ChevronLeft, Dot } from 'lucide-react'
import React from 'react'
import Likedsongs from '../../../components/library/likedsongs'
import LibraryHeader from '../../../components/library/libraryHeader'

const Page = () => {
    return (
        <div className='p-6'>
            <LibraryHeader header='Songs Ceejay Liked' amount='You liked 120 songs' />
            <Likedsongs />
        </div>
    )
}

export default Page