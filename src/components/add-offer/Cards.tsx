import React from 'react'
import OfferCard from './OfferCard';
import { useAppContext } from '@/context';



const Cards = () => {
    const { offers } = useAppContext()

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            {offers.map(offer => <OfferCard {...offer} />)}
        </div>
    )
}

export default Cards