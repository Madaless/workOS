import React, { ReactNode } from 'react'
import NavButtons from "./NavButtons"
import ProgressBar from './ProgressBar'


export type StepProps = {
    children: ReactNode
    back: boolean
    next: boolean
    isNextDisabled: boolean;
    finish?: boolean
    stepNumber: number
    isFinished: false
}


const Step = ({ children, back, next, finish, stepNumber, isNextDisabled }: StepProps) => {
    return (
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
            <ProgressBar stepProgress={stepNumber} />
            {children}
            <NavButtons back={back} next={next} finish={finish} isNextDisabled={isNextDisabled} />
        </div>
    )
}

export default Step