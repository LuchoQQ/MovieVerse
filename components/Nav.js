import requests from '../utils/requests';
import router, {useRouter} from 'next/router';
import { useState } from 'react';

function Nav() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex p-5 sm:px-20 text-3xl whitespace-nowrap space-x-20 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 key={key} 
                        onClick={() => router.push(`/?genre=${key}&page=1`)}
                        className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
                        style={{ color: router.query.genre === key ? 'red' : '#ababab' }}
                    >
                    
                            {title}
                    </h2>
                    
                ))} 
            </div>
        </nav>
    )
}

export default Nav;
