import React from 'react'
import dance from "@/assets/dance.jpg"
import Image from 'next/image'

const SingleCategory = ({ category }: { category: string }) => {
    return (
        <div className={`rounded-2xl grow md:w-48 md:h-28 w-36 h-24 lg:w-52 lg:h-32 justify-self-center relative hover:scale-105`}>
            <Image src={dance} alt={category} className='rounded-xl h-full w-full' />
            <Overlay>{category}</Overlay>
        </div>
    )
}

const Overlay = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-full bg-zinc-500/20 absolute top-0 rounded-xl flex uppercase font-semibold items-end justify-center pb-3 md:pb-4 text-lg text-white '>
            {children}
        </div>
    )
}

export default SingleCategory