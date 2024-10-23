'use client'
import React from 'react'
import ThemeSelector from '../themeSelector'
import Logo from '../logo'
import NavLinks from './sideNavLinks'
import { Thermometer, UserRound } from 'lucide-react'

const SideNavBar = () => {

  return (
    <div className='dark:bg-primary-dark rounded-none bg-primary-light p-6 flex-col gap-12 rounded-r-2xl h-screen hidden fixed md:flex w-56'>
      <Logo />

      <div className='p-4 rounded-full bg-secondary-light dark:bg-secondary-dark w-fit'>
        <UserRound />
      </div>

      <ul className=" rounded-none h-screen flex flex-col gap-6">
        <h2 className='font-semibold'>MENU</h2>
        <NavLinks />
      </ul>
      <ThemeSelector />
    </div>
  )
}



export default SideNavBar