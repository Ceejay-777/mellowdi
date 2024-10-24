import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavLink } from "@/types"
import { navlinks } from '@/data'

const NavLinks = () => {
    const pathname = usePathname()
    return (
        navlinks.map((navlink: NavLink) => {
            const { label, href, Icon } = navlink

            return (
                <Link className={`hover:border-r-4 border-accent flex gap-4 items-center ${pathname === href && "border-r-4"}`} href={href} key={href}>
                    <Icon />
                    <span className="font-semibold">{label}</span>
                </Link>
            )
        })
    )

}

export default NavLinks