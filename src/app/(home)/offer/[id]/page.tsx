import OffferDetails from '@/components/detail-page/OffferDetails'
import { JobOfferDetails } from '@/components/main-page/Offer';
import offersJSON from '../../../../constains/offers.json'
import React from 'react'

const page = () => {
    const offers: JobOfferDetails[] = offersJSON as JobOfferDetails[];

    return (
        <main className="min-h-screen mx-auto pt-[75px] max-w-[1180px]">
            <section className=""><OffferDetails offer={offers[1]} /></section>
        </main>
    )
}

export default page