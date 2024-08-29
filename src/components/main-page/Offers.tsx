import React from 'react'
import Offer, { JobOffer, OfferTypeE } from './Offer'
import offersJSON from '../../constains/offers.json'
const Offers = () => {
    const offers: JobOffer[] = offersJSON as JobOffer[];
    return (
        <section id='offers' className='m-4'>
            {offers.sort((a, b) => {
                const priority = {
                    [OfferTypeE.Premium]: 1,
                    [OfferTypeE.Highlighted]: 2,
                    [OfferTypeE.Normal]: 3
                };
                return priority[a.offerType as OfferTypeE] - priority[b.offerType as OfferTypeE];
            }).map((offer, index) => (
                <Offer
                    key={index}
                    title={offer.title}
                    company={offer.company}
                    location={offer.location}
                    employmentType={offer.employmentType}
                    salary={offer.salary}
                    date={offer.date}
                    image={offer.image}
                    offerType={offer.offerType}
                    remoteRecruitment={offer.remoteRecruitment}
                    remoteWork={offer.remoteWork}
                    workModel={offer.workModel}
                    category=''
                />
            ))}
        </section>
    )
}

export default Offers