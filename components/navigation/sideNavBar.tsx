'use client'
import React from 'react'
import ThemeSelector from '../themeSelector'
import Logo from '../logo'
import NavLinks from './sideNavLinks'

const SideNavBar = () => {

  return (
    <div className='dark:bg-primary-dark rounded-none bg-primary-light border w-fit p-6  flex-col gap-12 rounded-r-xl letf-0 top-0 fixed hidden md:flex'>
      <Logo />
      <ul className="w-56 rounded-none h-screen flex flex-col gap-6">
        <h2 className='font-semibold'>MENU</h2>
        <NavLinks />
      </ul>
      <ThemeSelector />
    </div>
  )
}



export default SideNavBar