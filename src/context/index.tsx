"use client"
import Cards from "@/components/add-offer/Cards";
import OfferForm from "@/components/add-offer/OfferForm";
import { StepProps } from "@/components/add-offer/Step";
import { createContext, useState, useContext } from "react";

export type ContextType = {
    steps: StepProps[];
    currentStepIndex: number;
    decrementCurrentStepIndex: () => void;
    incrementCurrentStepIndex: () => void;
};

const AppContext = createContext<ContextType>({} as ContextType);

const stepList: StepProps[] = [
    {
        children: <Cards />,
        next: true,
        back: false,
    },
    {
        children: <OfferForm />,
        next: true,
        back: true,
    }
]

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    let [steps, setSteps] = useState(stepList);
    let [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [typeOfOffer, setTypeOfOffer] = useState()

    const incrementCurrentStepIndex = () => {
        setCurrentStepIndex(id => id + 1);
    }

    const decrementCurrentStepIndex = () => {
        setCurrentStepIndex(id => id - 1);
    }

    return <AppContext.Provider value={{ steps, currentStepIndex, incrementCurrentStepIndex, decrementCurrentStepIndex }}>
        {children}
    </AppContext.Provider >
}
export function useAppContext() {
    return useContext(AppContext)
}