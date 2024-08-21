"use client"
import React from 'react'
import Step from './Step'
import { useAppContext } from '@/context'


const Steps = () => {

    const { steps, currentStepIndex } = useAppContext();
    const currentStep = steps[currentStepIndex];
    return (
        <Step {...currentStep} />
    )
}

export default Steps