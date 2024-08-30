import React from 'react'
import { JobOferDetails } from '../main-page/Offer';

const OffferDetails: React.FC<JobOferDetails> = (offer) => {

    return (
        <div className="bg-white p-6 shadow-md rounded-md min-h-screen ">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold">{offer.title}</h1>
                    <p className="text-gray-500">{offer.company}</p>
                </div>
                <div className="text-xl font-semibold text-blue-600">
                    {offer.salary}
                </div>
            </div>

            {/* Job Description Section */}
            <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">Job Description</h2>
                <p className="text-gray-700">{offer.description}</p>
            </div>
        </div>
    );
}



export default OffferDetails