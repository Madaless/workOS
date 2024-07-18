import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <header className='bg-transparent absolute w-full z-10 h-[70px]'>
            <div className='absolute flex flex-col items-center justify-center text-center top-0  rounded-3xl mt-2'>
                <img src='svgtest.svg' className="w-44 py-2 px-4 object-cover"></img>

            </div>
            <div className='absolute right-4 top-0 block'>
                <button className='mx-2 my-4 py-2 px-4 bg-orangeCP text-white rounded-lg font-semibold text-sm'>Add offer</button>
                <Link href={"/login"} className='mx-2 my-4 py-2 px-4 bg-black text-white rounded-lg font-semibold text-sm'>Log in</Link>
                <button className='mx-2 my-4 py-2 px-4 bg-white text-black rounded-lg font-semibold text-sm'>For employee</button>
            </div>
        </header>
    )
}

export default Nav