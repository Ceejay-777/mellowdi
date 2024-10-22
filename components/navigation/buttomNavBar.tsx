import React from 'react'
import { House, Search, SquareLibrary, Code, Gamepad2 } from "lucide-react"
import Link from 'next/link'
import ButtomNavLinks from "./bottomNavLinks"

const ButtomNavBar = () => {
    return (
        <div>
            <div className="btm-nav md:hidden bg-secondary-light/75 dark:bg-secondary-dark/75">
                <ButtomNavLinks />
            </div>
        </div>
    )
}

export default ButtomNavBar