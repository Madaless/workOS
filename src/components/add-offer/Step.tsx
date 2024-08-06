import React, { ReactNode } from 'react'
import NavButtons from "./NavButtons"


type StepProps = {
    children: ReactNode
    back: string
    next: string
    home?: boolean
}


const Step = ({ children, back, next, home }: StepProps) => {
    return (
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
            {children}
            <NavButtons />
        </div>
    )
}

export default Step