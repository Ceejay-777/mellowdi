import React from 'react'
import SingleMusicDisplay from './singleMusicDisplay'

const Category = ({ category }: { category: string }) => {
    category = "Daily Mixes"
    return (
        <div className='bg-primary-light dark:bg-primary-dark p-6 my-4 rounded-l-xl'>
            <h1 className='font-semibold'>{category}</h1>
            <div className='flex w-full overflow-x-auto gap-y-6'>
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