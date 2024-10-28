import React from 'react'
import { Track } from '@/types'
import Cee from "@/app/favicon.png"
import Image from 'next/image'
import { Clock, MoreVertical, Play } from 'lucide-react'

const SingleTrackDisplay = ({ art, title, artist, album, length }: Track) => {
    if (!art) {
        art = Cee
    }

    return (
        <div className="flex justify-between group mmd:grid grid-cols-[auto_1fr_1fr_auto] items-center gap-4 px-4 py-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-lg">
            <div className="w-8 text-center hidden mmd:block">
                <span className="group-hover:hidden text-sm text-gray-400">{1}</span>
                <Play className="hidden group-hover:block w-4 h-4" />
            </div>

            <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 md:w-16 md:h-16 flex-shrink-0">
                    <Image
                        src={Cee}
                        alt={title}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
                <div className="min-w-0">
                    <div className="text-sm font-medium truncate">{title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{artist}</div>
                </div>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 truncate px-2 hidden mmd:block">
                {album}
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400 w-12 hidden mmd:block">{length}</span>
                <MoreVertical className="w-4 h-4 mmd:opacity-0 mmd:group-hover:opacity-100" />
            </div>
        </div>
    )
}

export const TableHead = () => {
    return (
        <div className="grid-cols-[auto_1fr_1fr_auto] items-center gap-4 px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 hidden mmd:grid">
            <div className="w-8 text-center">#</div>
            <div>Title</div>
            <div>Album</div>
            <div className="pr-14">
                <Clock className="w-4 h-4" />
            </div>
        </div>
    )
}

export default SingleTrackDisplay