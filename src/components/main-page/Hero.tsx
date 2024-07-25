import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <div className="relative h-[70vh] w-full">
            <img
                src="/kurpie1.jpg"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover filter"
            />
            <div className="absolute inset-0 bg-zinc-800 bg-opacity-0 bg-gradient-to-tl"></div>  Increased opacity

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-5xl text-stroke-black mb-4 p-2 bg-orangeCP bg-opacity-0" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 1)' }}><span className=''>Find a</span> <span className='font-bold'>job</span></h1>
                <p className="text-white text-5xl mb-4 text-stroke-black bg-orangeCP bg-opacity-0" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 1)' }}><span className=''>you</span> <span className='font-bold'>dream of</span></p>
                <div className="cursor-pointer bg-white rounded-full w-3/4 sm:w-1/2 px-4 py-2 flex items-center focus:ring-1 focus:ring-orange">
                    <MagnifyingGlassIcon className="h-7 w-7 text-black font-bold mr-4" />
                    <input
                        type="text"
                        placeholder=""
                        className="w-full outline-none placeholder-gray-500 bg-white font-bold "
                    />

                </div>
            </div>
        </div>)
}

export default Hero