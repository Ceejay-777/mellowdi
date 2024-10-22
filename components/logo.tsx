import { Music } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <Music size={48}/>
        <p className='text-2xl font-semibold'>MellowDi</p>
    </div>
  )
}

export default Logo