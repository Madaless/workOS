import React from 'react'
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, GlobeAltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { formatDistanceToNow, subDays, isAfter, parseISO } from 'date-fns';

export enum PromotionType {
    Normal = "Normal",
    Highlighted = "Highlighted",
    Premium = "Premium"
}

export type JobOffer = {
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
    promotionType: PromotionType;
}

const Offer: React.FC<JobOffer> = ({ image, remoteRecruitmentTag, title, company, location, employmentType, salary, date, employmentTypeTag, locationTypeTag, promotionType }) => {
    const formatDate = (date: string) => {
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

    const bgColor = promotionType === PromotionType.Premium ? 'bg-orange-300' :
        promotionType === PromotionType.Highlighted ? 'bg-blue-100' :
            'bg-white';
    const borderColor = promotionType === PromotionType.Premium ? 'border-orange-300' :
        promotionType === PromotionType.Highlighted ? 'border-blue-100' :
            'border-transparent';

    const textColor = promotionType === PromotionType.Premium ? 'text-gray-900' :
        promotionType === PromotionType.Highlighted ? 'text-gray-900' :
            'text-gray-900';

    const tagBorderColor = promotionType === PromotionType.Premium ? 'border-transparent' :
        promotionType === PromotionType.Highlighted ? 'text-gray-900' :
            'text-gray-900';


    //const textColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'text-white' : 'text-gray-900';
    // const borderColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'border-orangeCP' : 'border-transparent';
    const tagBgColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'bg-white' : 'bg-transparent';

    return (
        <div className={`flex items-center justify-between p-6 rounded-lg shadow-lg max-w-[1140px] mx-auto hover:shadow-xl mb-5 border cursor-pointer ${bgColor} ${borderColor}`}>
            <div className="flex items-center">
                <div className="w-20 h-20">
                    <img src={image} alt="Company Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="ml-6">
                    <h2 className={`text-xl font-semibold ${textColor}`}>{title}</h2>
                    <div className={`flex items-center ${textColor}`}>
                        <BuildingOffice2Icon className="h-5 w-5 mr-2" />
                        <p>{company}</p>
                    </div>
                    <div className={`flex items-center ${textColor}`}>
                        <MapPinIcon className="h-5 w-5 mr-2" />
                        <p>{location}</p>
                    </div>
                    <div className={`flex items-center ${textColor}`}>
                        <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                        <p>{salary}</p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <span className={`flex items-center border  text-sm font-semibold px-3 py-1 rounded ${tagBorderColor} ${tagBgColor}`}>
                            <BriefcaseIcon className="h-5 w-5 mr-2" />
                            {employmentTypeTag}
                        </span>
                        <span className={`flex items-center border  text-sm font-semibold px-3 py-1 rounded ${tagBorderColor} ${tagBgColor}`}>
                            <GlobeAltIcon className="h-5 w-5 mr-2" />
                            {locationTypeTag}
                        </span>
                        {remoteRecruitmentTag === 'Yes' && (
                            <span className={`flex items-center border text-sm font-semibold px-3 py-1 rounded ${tagBorderColor} ${tagBgColor}`}>
                                <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
                                Remote Recruitment
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className={`text-right ${textColor}`}>
                <p>{formatDate(date)}</p>
            </div>
        </div>
    );
}

export default Offer;
