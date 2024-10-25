import React from 'react'
import SingleMusicDisplay from './singleMusicDisplay'

const Category = ({ category }: { category: string }) => {
    return (
        <div className='ml-6 bg-primary-light dark:bg-primary-dark p-6 my-4 md:my-6 md:mr-8 rounded-xl'>
            <h1 className='font-semibold text-lg'>{category}</h1>
            <div className='flex w-full overflow-x-auto gap-y-6 md:gap-y-12 scrollbar-thin gap-4 mb-4 min-w-0'>
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
                <SingleMusicDisplay title='My song is cool' artist='Ceejay' />
            </div>
        </div>
    )
}

export default Category