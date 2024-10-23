'use client'
import { navlinks } from '@/data'
import { NavLink } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const BottomNavLinks = () => {
    const pathname = usePathname()
    return (
        navlinks.map((navlink: NavLink) => {
            const { label, href, Icon } = navlink

            return (
                <Link className={`${pathname === href && "active border-t-4"} border-accent hover:border-t-4`} key={href} href={href}>
                    <Icon />
                    <span className="btm-nav-label text-xs">{label}</span>
                </Link>
            )
        })
    )
}

export default BottomNavLinks 