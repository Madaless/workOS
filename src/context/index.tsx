"use client"
import Cards from "@/components/add-offer/Cards";
import OfferForm from "@/components/add-offer/OfferForm";
import { StepProps } from "@/components/add-offer/Step";
import { JobOffer } from "@/components/main-page/Offer";
import { createContext, useState, useContext } from "react";

export type ContextType = {
    steps: StepProps[];
    currentStepIndex: number;
    creatorJobOffer: JobOffer
    decrementCurrentStepIndex: () => void;
    incrementCurrentStepIndex: () => void;
    offers: Offer[];
    selectCard: (id: number) => void;

};

export type OfferType = "normal" | "premium" | "gold"
export type BenefitType = "Logo firmy" | "Funkcja email" | "Pomoc i wsparcie email" | "2x Wiecej wyswietleń" | "Ogłoszenie na samej górze" | "Wsparcie telefoniczne"

export type Offer = {
    id: number;
    offerType: OfferType;
    title: string;
    description: string;
    cost: number;
    benefits: Map<BenefitType, boolean>;
    selected: boolean
};

const benefits: Map<BenefitType, boolean> = new Map([
    ["Logo firmy", false],
    ["Funkcja email", false],
    ["Pomoc i wsparcie email", false],
    ["2x Wiecej wyswietleń", false],
    ["Ogłoszenie na samej górze", false],
    ["Wsparcie telefoniczne", false],
])

const AppContext = createContext<ContextType>({} as ContextType);

const stepList: StepProps[] = [
    {
        children: <Cards />,
        next: true,
        back: false,
        stepNumber: 1,
        isNextDisabled: true,
        isFinished: false,
    },
    {
        children: <OfferForm />,
        next: true,
        back: true,
        stepNumber: 2,
        isNextDisabled: false,
        isFinished: false,
        nextCallback: () => { return true }
    },
    {
        children: <div />,
        next: false,
        back: true,
        stepNumber: 3,
        isNextDisabled: true,
        isFinished: false,
    }
]

const offersList: Offer[] = [{
    id: 1,
    offerType: "normal",
    title: "Podstawowa",
    description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
    cost: 30.00,
    benefits: new Map([...benefits, ["Logo firmy" as BenefitType, true], ["Funkcja email" as BenefitType, true]]),
    selected: false
},
{
    id: 2,
    offerType: "premium",
    title: "Premium",
    description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
    cost: 60.00,
    benefits: new Map([...benefits, ["Logo firmy" as BenefitType, true], ["Funkcja email" as BenefitType, true], ["Pomoc i wsparcie email", true], ["2x Wiecej wyswietleń", true]]),
    selected: false
},
{
    id: 3,
    offerType: "gold",
    title: "Złota",
    description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
    cost: 300.00,
    benefits: new Map([...benefits, ["Logo firmy" as BenefitType, true], ["Funkcja email" as BenefitType, true], ["Pomoc i wsparcie email", true], ["2x Wiecej wyswietleń", true], ["Ogłoszenie na samej górze", true], ["Wsparcie telefoniczne", true],]),
    selected: false
},
]

const creatorJobOffer = {} as JobOffer

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    let [steps, setSteps] = useState(stepList);
    let [offers, setOffers] = useState(offersList);
    let [currentStepIndex, setCurrentStepIndex] = useState(0);

    const incrementCurrentStepIndex = () => {
        setCurrentStepIndex(id => id + 1);
    }

    const decrementCurrentStepIndex = () => {
        setCurrentStepIndex(id => id - 1);
    }

    const selectCard = (id: number) => {
        setOffers(offers.map(offer => offer.id === id ? { ...offer, selected: true } : { ...offer, selected: false }))
        creatorJobOffer.offerType = offers.find(i => i.offerType);
        const step = stepList[0];
        step.isFinished = true;
        step.isNextDisabled = false;
        setSteps([...steps, step])
    }


    return <AppContext.Provider value={{ steps, currentStepIndex, incrementCurrentStepIndex, decrementCurrentStepIndex, creatorJobOffer, offers, selectCard }}>
        {children}
    </AppContext.Provider >
}
export function useAppContext() {
    return useContext(AppContext)
}