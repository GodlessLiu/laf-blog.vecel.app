"use client"
import { Logo } from "@/components/Logo";
import { ToggleTheme } from "@/components/ToggleTheme";
import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { RiRssLine } from "react-icons/ri";

const blogNavs = [
    {
        name: '首页',
        href: '/blog'
    },
    {
        name: '归档',
        href: '/blog/archives'
    }
]

export const Header: FC = () => {
    const pathname = usePathname()
    return <div className="flex flex-row justify-between items-center h-10 mt-2 gap-2 pr-4">
        <Logo />
        <div className="flex justify-center items-center gap-4">
            {
                _.map(blogNavs, (n) => (
                    <Link key={n.href} href={n.href} className={`btn ${pathname === n.href ? 'border-foreground' : ''}`}>
                        {n.name}
                    </Link>
                ))
            }
            <ToggleTheme />
            <Link href={'/blog/feed.xml'} target="_blank" className="leading-[0px]"><RiRssLine /></Link>
        </div>
    </div>
}