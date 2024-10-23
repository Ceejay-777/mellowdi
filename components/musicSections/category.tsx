import React from 'react'
import SingleMusicDisplay from './singleMusicDisplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Category = ({ category }: { category: string }) => {
    return (
        <div className='bg-primary-light dark:bg-primary-dark p-6 my-4 md:my-6 rounded-xl min-w-screen'>
            <h1 className='font-semibold text-lg'>{category}</h1>
            {/* <div className='w-fit border overflow-x-auto'> */}
            <div className='flex w-full overflow-x-auto gap-y-6 md:gap-y-8 scrollbar-thin gap-4 mb-4 min-w-0'>
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
            </div>
            {/* </div> */}
        </div>
    )
}

export default Category