import React from 'react'
import { Track } from '@/types'
import Cee from "@/app/favicon.png"
import Image from 'next/image'
import { Clock, EllipsisVertical } from 'lucide-react'

const SingleTrackDisplay = ({ art, title, artist, album, length }: Track) => {
    if (!art) {
        art = Cee
    }

    return (
        <tr className='border flex w-full justify-between'>
            <td className='flex gap-4'>
                <div className='w-16'>
                    <Image src={art} alt={title} className='w-full h-full' />
                </div>
                <div className='flex flex-col justify-center gap-1'>
                    <p className='text-black dark:text-white text-sm font-semibold'>{title}</p>
                    <p className='dark:text-gray-300 text-xs text-gray-600 font-light'>{artist}</p>
                </div>
            </td>
            <td className='border flex items-center'>{album}</td>
            <td className='flex items-center justify-between gap-6 border px-4'>
                <p>{length}</p>
                <EllipsisVertical />
            </td>
        </tr>
    )
}

export const TableHead = () => {
    return (
        <thead className=''>
            <tr className='  '>
                <th className='border border-red-500 '>Title</th>
                <th>Album</th>
                <th className=''>
                    <Clock />
                </th>
            </tr>
        </thead>
    )
}

export default SingleTrackDisplay