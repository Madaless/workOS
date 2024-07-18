import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <div className="relative h-[70vh] w-full">
            <img
                src="/kurpie.jpg"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover filter"
            />
            {/* <div className="absolute inset-0 bg-stone-800 bg-opacity-10"></div>  Increased opacity */}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-5xl text-stroke-black font-bold mb-4  p-2 font-sans" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 1)' }}>Find a job </h1>
                <p className="text-white text-4xl mb-4 text-stroke-black " style={{ textShadow: '4px 2px 4px rgba(0, 0, 0, 1)' }}>you dream of</p>
                <div className="cursor-pointer bg-white rounded-full w-3/4 sm:w-1/2 px-4 py-2 flex items-center focus:ring-1 focus:ring-orange">
                    <input
                        type="text"
                        placeholder="Search for jobs..."
                        className="w-full outline-none placeholder-gray-400 bg-white font-bold "
                    />
                    <MagnifyingGlassIcon className="h-7 w-7 text-black font-bold" />

                </div>
            </div>
        </div>)
}

export default Hero