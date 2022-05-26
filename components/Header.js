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
        <header className='flex flex-row items-center  from-black to-secondary relative z-10 bg-gradient-to-b'>
            <div className="flex ml-12">
                <Link href={"/?genre=fetchTrending&page=1/"}>
                    <a >
                        <HeaderItem title="HOME" Icon={HomeIcon} />
                    </a>
                </Link>
                <SearchBar title="SEARCH" Icon={SearchIcon} />
            </div>
            <div className="ml-auto mr-10">
                <Link href={"/?genre=fetchTrending&page=1/"}>
                    <a>
                        <Image alt={"logo"} className='object-contain' src='https://links.papareact.com/ua6/' width={200} height={100} />
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
