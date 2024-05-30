"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/" },
        { title: "Works", path: "/works" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" }
    ]

    return (
        <nav className="w-full pt-4 md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex justify-end items-center gap-3 py-3 md:py-5 md:block">
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md"
                            onClick={() => setState(!state)}
                        >
                            <Menu className="size-12" />
                        </button>
                    </div>
                    <div className="md:hidden"><ModeToggle /></div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}
                >
                    <ul className="justify-end items-center gap-5 space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-black font-bold dark:text-white text-xl hover:text-[#8695A4] dark:hover:text-[#272829]">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                        <div><ModeToggle /></div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}