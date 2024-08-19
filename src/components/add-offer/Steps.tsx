"use client"
import React from 'react'
import Step, { StepProps } from './Step'
import Cards from './Cards'
import { useAppContext } from '@/context'


const Steps = () => {

    const stepList: StepProps[] = [
        {
            children: <Cards />,
            next: true,
            back: false,
        },
        {
            children: <div>asd</div>,
            next: true,
            back: false,
        }
    ]

    const { steps, currentStepIndex } = useAppContext();
    const currentStep = steps[currentStepIndex];
    return (
        <Step {...currentStep} />
    )
}

export default Steps