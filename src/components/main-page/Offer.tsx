import React from 'react'
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, GlobeAltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { format, formatDistanceToNow, subDays, isAfter, parseISO } from 'date-fns';

interface JobOfferProps {
    image: string;
    title: string;
    company: string;
    location: string;
    employmentType: string;
    salary: string;
    date: string;
    employmentTypeTag: string; // Full-Time or Part-Time
    locationTypeTag: string;   // Stationary or Remote
    remoteRecruitmentTag: string; // Remote Recruitment (Yes or No)
}

const Offer: React.FC<JobOfferProps> = ({ image, remoteRecruitmentTag, title, company, location, employmentType, salary, date, employmentTypeTag, locationTypeTag }) => {
    const formatDate = (date: string) => {
        console.log("s")
        const jobDate = parseISO(date);
        const now = new Date();

        if (isAfter(jobDate, subDays(now, 1))) {
            return 'Today';
        } else if (isAfter(jobDate, subDays(now, 2))) {
            return 'Yesterday';
        } else if (isAfter(jobDate, subDays(now, 30))) {
            return formatDistanceToNow(jobDate, { addSuffix: true });
        } else {
            return date;
        }
    };
    return (
        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg max-w-[1140px] mx-auto hover:shadow-2xl mb-5 cursor-pointer">
            <div className="flex items-center">
                <div className="w-20 h-20">
                    <img src={image} alt="Company Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <div className="flex items-center text-gray-800">
                        <BuildingOffice2Icon className="h-5 w-5 mr-2" />
                        <p>{company}</p>
                    </div>
                    <div className="flex items-center text-gray-800">
                        <MapPinIcon className="h-5 w-5 mr-2" />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center text-gray-800">
                        <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                        <p>{salary}</p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <span className="flex items-center border border-gray-300 text-gray-800 text-sm font-semibold px-3 py-1 rounded">
                            <BriefcaseIcon className="h-5 w-5 mr-2" />
                            {employmentTypeTag}
                        </span>
                        <span className="flex items-center border border-gray-300 text-gray-800 text-sm font-semibold px-3 py-1 rounded">
                            <GlobeAltIcon className="h-5 w-5 mr-2" />
                            {locationTypeTag}
                        </span>
                        {remoteRecruitmentTag === 'Yes' && (
                            <span className="flex items-center border border-gray-300 text-gray-800 text-sm font-semibold px-3 py-1 rounded">
                                <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
                                Remote Recruitment
                            </span>
                        )}

                    </div>
                </div>
            </div>
            <div className="text-right text-gray-600">
                <p>{formatDate(date)}</p>
            </div>
        </div >)
}

export default Offer