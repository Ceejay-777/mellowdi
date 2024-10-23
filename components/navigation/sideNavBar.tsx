'use client'
import React from 'react'
import ThemeSelector from '../themeSelector'
import Logo from '../logo'
import NavLinks from './sideNavLinks'
import { UserRound } from 'lucide-react'

const SideNavBar = () => {

  return (
    <div className='dark:bg-primary-dark rounded-none bg-primary-light p-6 flex-col gap-12 rounded-r-2xl h-screen hidden fixed md:flex w-56'>
      <Logo />

      <div className='mr-6 flex gap-2 justify-around items-center w-full'>
        <div className='p-4 rounded-full bg-secondary-light dark:bg-secondary-dark w-fit'>
          <UserRound size={36}/>
        </div>
        <ThemeSelector />
      </div>

      <ul className=" rounded-none h-screen flex flex-col gap-6">
        <h2 className='font-semibold'>MENU</h2>
        <NavLinks />
      </ul>
    </div>
  )
}



export default SideNavBar