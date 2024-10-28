import React from 'react'
import SingleCategory from './singleCategory'

const Category = ({ category }: { category: string }) => {
    return (
        <div className='ml-6 bg-primary-light dark:bg-primary-dark p-6 m-4 md:my-6 md:mr-8 rounded-xl'>
            <h1 className='font-semibold text-lg mb-4'>{category}</h1>
            <div className='grid auto-grid gap-6 flex-wrap justify-center items-center'>
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
                <SingleCategory category='Hip-Hop' />
            </div>
        </div>
    )
}

export default Category