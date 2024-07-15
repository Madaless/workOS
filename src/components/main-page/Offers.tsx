import React from 'react'
import Offer from './Offer'

const Offers = () => {
    return (
        <section id='offers'>
            <Offer
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

            />
            <Offer
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

            />
        </section>
    )
}

export default Offers