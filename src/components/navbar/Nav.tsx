import React from 'react'

const Nav = () => {
    return (
        <header className='bg-transparent absolute w-full z-10 h-[70px]'>
            <div className='absolute right-4 top-0 block'>
                <button className='m-4 py-2 px-4 bg-orange text-white rounded-lg font-semibold'>Add offer</button>
                <button className='m-4 py-2 px-4 bg-blue text-white rounded-lg font-semibold'>Log in</button>
                <button className='m-4 py-2 px-4 bg-white text-black rounded-lg font-semibold'>For employee</button>

            </div>
        </header>
    )
}

export default Nav