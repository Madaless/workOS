import React from 'react'
import Offer, { JobOffer, PromotionType } from './Offer'
import offersJSON from '../../constains/offers.json'
const Offers = () => {
    const offers: JobOffer[] = offersJSON as JobOffer[];
    return (
        <section id='offers' className='m-4'>
            {/* <Offer
                image="https://via.placeholder.com/80"
                title="Frontend Developer"
                company="Tech Solutions Inc."
                location="San Francisco, CA"
                employmentType="Full-Time"
                salary="$100,000 - $120,000 / year"
                date="13.07.2024"
                employmentTypeTag="Full-Time"
                locationTypeTag="Remote"
                remoteRecruitmentTag="Yes"
                promotionType={PromotionType.Normal}

            /> */}
            {offers.sort((a, b) => {
                const priority = {
                    [PromotionType.Premium]: 1,
                    [PromotionType.Highlighted]: 2,
                    [PromotionType.Normal]: 3
                };
                return priority[a.promotionType] - priority[b.promotionType];
            }).map((offer, index) => (
                <Offer
                    key={index}
                    title={offer.title}
                    company={offer.company}
                    location={offer.location}
                    employmentType={offer.employmentType}
                    salary={offer.salary}
                    date={offer.date}
                    employmentTypeTag={offer.employmentTypeTag}
                    locationTypeTag={offer.locationTypeTag}
                    remoteRecruitmentTag={offer.remoteRecruitmentTag}
                    image={offer.image}
                    promotionType={offer.promotionType}
                />
            ))}
        </section>
    )
}

export default Offers