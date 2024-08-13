import React from 'react'

type NavProps = {
    back: boolean,
    next: boolean,
    finish?: boolean
}

const NavButtons: React.FC<NavProps> = ({ back, next, finish }) => {
    return (
        <div className='flex flex-row mt-16'>
            {back && <button className='mx-2 my-4 py-3 px-3 bg-bluemCP text-white rounded-full font-bold text-base w-full'>Back</button>}
            {next && <button className='mx-2 my-4 py-3 px-3 bg-bluemCP text-white rounded-full font-bold text-base w-full'>Next</button>}

        </div>
    )
}

export default NavButtons