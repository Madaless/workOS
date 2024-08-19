"use client"
import { useAppContext } from '@/context'
import React from 'react'

type NavProps = {
    back: boolean,
    next: boolean,
    finish?: boolean
}

const NavButtons: React.FC<NavProps> = ({ back, next, finish }) => {

    const { incrementCurrentStepIndex, decrementCurrentStepIndex } = useAppContext();

    const nextOnClick = () => {
        incrementCurrentStepIndex();
    }

    const backOnCLick = () => {
        decrementCurrentStepIndex();
    }

    return (
        <div className='flex flex-row mt-16'>
            {back && <button onClick={backOnCLick} className='mx-2 my-4 py-3 px-3 bg-bluemCP text-white rounded-full font-bold text-base w-full'>Back</button>}
            {next && <button onClick={nextOnClick} className='mx-2 my-4 py-3 px-3 bg-bluemCP text-white rounded-full font-bold text-base w-full'>Next</button>}

        </div>
    )
}

export default NavButtons