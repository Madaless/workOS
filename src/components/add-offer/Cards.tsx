import React from 'react'
import OfferCard from './OfferCard';

export type OfferType = "normal" | "premium" | "gold"
export type BenefitType = "Logo firmy" | "Funkcja email" | "Pomoc i wsparcie email" | "2x Wiecej wyswietleń" | "Ogłoszenie na samej górze" | "Wsparcie telefoniczne"

export type Offer = {
    id: number;
    offerType: OfferType;
    title: string;
    description: string;
    cost: number;
    benefits: Map<BenefitType, boolean>
};

const benefits: Map<BenefitType, boolean> = new Map([
    ["Logo firmy", false],
    ["Funkcja email", false],
    ["Pomoc i wsparcie email", false],
    ["2x Wiecej wyswietleń", false],
    ["Ogłoszenie na samej górze", false],
    ["Wsparcie telefoniczne", false],
])

const Cards = () => {
    const offers: Offer[] = [{
        id: 1,
        offerType: "normal",
        title: "Podstawowa",
        description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
        cost: 30.00,
        benefits: new Map([...benefits, ["Logo firmy" as BenefitType, true], ["Funkcja email" as BenefitType, true]])
    },
    {
        id: 2,
        offerType: "premium",
        title: "Premium",
        description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
        cost: 60.00,
        benefits: new Map([["Pomoc i wsparcie email", true], ["2x Wiecej wyswietleń", true]])
    },
    {
        id: 3,
        offerType: "gold",
        title: "Złota",
        description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
        cost: 300.00,
        benefits: new Map([["Ogłoszenie na samej górze", true], ["Wsparcie telefoniczne", true],])
    },

    ]
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            {offers.map(offer => <OfferCard {...offer} />)}
        </div>
    )
}

export default Cards