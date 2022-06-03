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
function Footer() {

    return (
        <>
            <footer className='flex items-center justify-center from-secondary to-black relative z-10 bg-gradient-to-b py-10'>
                <div className="pt-4">
                    <div className="justify-center text-center pb-4">

                        <span className="text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a className="text-blue-600/75" href="https://github.com/LuchoQQ/movieverse" target="_blank" rel="noreferrer">Uluh</a>. All rights reserved.
                        </span>
                    </div>

                    <ul className="flex flex-wrap items-center mt-3 pb-4 text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                    <ul className="text-gray-500 sm:text-center dark:text-gray-400">
                        Developed by <a className="text-blue-600/75" href="https://arrecode.com" target="_blank" rel="noreferrer">&nbsp;arre[code]&nbsp;</a> y <a className="text-blue-600/75" href="https://github.com/LuchoQQ" target="_blank" rel="noreferrer">&nbsp;LuchoQQ</a>.
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
