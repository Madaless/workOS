import React from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline';
const Nav = () => {
    return (
        <header className='bg-transparent absolute w-full z-10 h-[70px]'>
            <div className='absolute flex flex-col items-center justify-center text-center top-0  mt-2 '>
                <div className='bg-slate-100 bg-opacity-95 rounded-full'>
                    <img src='untitled.svg' className=" w-64 py-2 px-4 object-cover"></img>
                </div>
            </div>
            <div className='absolute right-4 top-0 block'>
                <Link href={"/login"} passHref legacyBehavior>
                    <button className='mx-2 my-4 py-2 px-4 bg-orangeCP text-white rounded-lg font-bold  text-base'><span>Add offer</span><span><PlusIcon className='fill-black' /></span></button>
                </Link>

                <Link href={"/login"} passHref legacyBehavior>
                    <button className='mx-2 my-4 py-2 px-4 bg-black text-white rounded-lg font-bold text-base'>Log in</button>
                </Link>
                <Link href={"/login"} passHref legacyBehavior>

                    <button className='mx-2 my-4 py-2 px-4 bg-white text-black rounded-lg font-bold text-base'>For employee</button>
                </Link>

            </div>
        </header>
    )
}

export default Nav