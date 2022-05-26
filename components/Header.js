import {
    HomeIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import SearchBar from './SearchBar'
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Link from 'next/link'

import { useState } from "react";
function Header() {

    return (
        <>
        <header className='flex items-center justify-center from-black to-secondary relative z-10 bg-gradient-to-b py-10'>
            <div className="flex">
                <Link href={"/?genre=fetchTrending&page=1/"}>
                    <a >
                        <HeaderItem title="HOME" Icon={HomeIcon} />
                    </a>
                </Link>
                
            </div>
            <SearchBar title="SEARCH" Icon={SearchIcon} />
            
        </header>
        </>
    )
}

export default Header
