"use client"
import { useAppContext } from '@/context'
import React from 'react'

type NavProps = {
    back: boolean,
    next: boolean,
    finish?: boolean,
    isNextDisabled: boolean,
    nextCallback?: () => true
}

const NavButtons: React.FC<NavProps> = ({ back, next, finish, isNextDisabled, nextCallback }) => {

    const { incrementCurrentStepIndex, decrementCurrentStepIndex } = useAppContext();

    const nextOnClick = () => {
        console.log("sad")
        if (nextCallback)
            if (!nextCallback())
                return;

        incrementCurrentStepIndex();
    }

    const backOnCLick = () => {
        decrementCurrentStepIndex();
    }

    return (
        <div className='flex flex-row mt-16'>
            {back && <button onClick={backOnCLick} className='mx-2 my-4 py-3 px-3 bg-bluemCP text-white rounded-full font-bold text-base w-full'>Back</button>}
            {next && <button disabled={isNextDisabled} onClick={nextOnClick} className='mx-2 my-4 py-3 px-3 bg-bluemCP text-white rounded-full font-bold text-base w-full disabled:bg-gray-400 disabled:cursor-not-allowed'>Next</button>}

        </div>
    )
}

export default NavButtons