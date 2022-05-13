import { useState } from "react";
import router, {useRouter} from 'next/router';
function SearchItem({Icon, title}) {
    const [search, setSearch] = useState(false);
    return (
        <div className="grid grid-flow-col items-center cursor-pointer  w-12 sm:w-20 ml-4 hover:text-white">
            <div className="justify-center group">
                <Icon className='h-8 mb-1 group-hover:animate-bounce' onClick={() => {
                    router.push(`/?search=${search}`)
                }}/>
            </div>
            <input 
                className="rounded-2xl ml-10 p-1"
                style={{
                    color: 'black',
                    outline: 'none',
                    textAlign: "center"
                }}
                type="text"
                placeholder={title}
                onChange={(e) => setSearch(e.target.value)}
            />           
        </div>
    )
}

export default SearchItem