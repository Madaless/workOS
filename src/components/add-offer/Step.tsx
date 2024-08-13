import React, { ReactNode } from 'react'
import NavButtons from "./NavButtons"
import ProgressBar from './ProgressBar'


export type StepProps = {
    children: ReactNode
    back: boolean
    next: boolean
    finish?: boolean
}


const Step = ({ children, back, next, finish }: StepProps) => {
    return (
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
            <ProgressBar />
            {children}
            <NavButtons back={back} next={next} finish={finish} />
        </div>
    )
}

export default Step