import React from 'react'
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, GlobeAltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { formatDistanceToNow, subDays, isAfter, parse } from 'date-fns';

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
    console.log("xd")
    const formatDate = (date: string) => {
        const jobDate = parse(date, 'dd.MM.yyyy', new Date());
        const now = new Date();
        console.log(title)
        console.log('jobDate:', jobDate);
        console.log('now:', now);

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

    const bgColor = promotionType === PromotionType.Premium ? 'bg-orange-100' :
        promotionType === PromotionType.Highlighted ? 'bg-blue-100' :
            'bg-white';
    const borderColor = promotionType === PromotionType.Premium ? 'border-orange-200' :
        promotionType === PromotionType.Highlighted ? 'border-blue-100' :
            'border-gray-200';

    const textColor = promotionType === PromotionType.Premium ? 'text-gray-800' :
        promotionType === PromotionType.Highlighted ? 'text-gray-800' :
            'text-gray-800';

    const tagBorderColor = promotionType === PromotionType.Premium ? 'border-transparent' :
        promotionType === PromotionType.Highlighted ? 'text-gray-900' :
            'text-gray-900';


    //const textColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'text-white' : 'text-gray-900';
    // const borderColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'border-orangeCP' : 'border-transparent';
    const tagBgColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'bg-white' : 'bg-transparent';

    return (
        <div className={`flex items-center justify-between p-6 rounded-lg shadow-sm max-w-[1140px] mx-auto hover:shadow-md mb-5 border cursor-pointer ${bgColor} ${borderColor}`}>
            <div className="flex items-center">
                <div className="w-20 h-20">
                    <img src={image} alt="Company Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="ml-7">
                    <div className='flex items-center mb-2'>
                        <h2 className={`text-xl font-bold ${textColor}`}>{title}</h2>
                        {/* <div className="ml-2 bg-orangeCP rounded text-white text-xs font-bold px-2 py-1 ">
                            SUPEROFETA
                        </div> */}
                    </div>
                    <div className={`flex items-center ${textColor}`}>
                        <BuildingOffice2Icon className="h-5 w-5 mr-2" />
                        <p className='font-semibold'>{company}</p>
                    </div>
                    <div className={`flex items-center ${textColor}`}>
                        <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                        <p className='font-semibold'>{salary}</p>
                    </div>

                    <div className="flex space-x-2 mt-2">
                        <span className={`flex items-center border  text-sm font-medium px-3 py-1 rounded-lg ${tagBorderColor} ${tagBgColor}`}>
                            <MapPinIcon className="h-5 w-5 mr-2" />
                            <p>{location}</p>
                        </span>
                        <span className={`flex items-center border  text-sm font-medium px-3 py-1 rounded-lg ${tagBorderColor} ${tagBgColor}`}>
                            <BriefcaseIcon className="h-5 w-5 mr-2" />
                            {employmentTypeTag}
                        </span>
                        <span className={`flex items-center border  text-sm font-medium px-3 py-1 rounded-lg ${tagBorderColor} ${tagBgColor}`}>
                            <GlobeAltIcon className="h-5 w-5 mr-2" />
                            {locationTypeTag}
                        </span>
                        {remoteRecruitmentTag === 'Yes' && (
                            <span className={`flex items-center border text-sm font-medium px-3 py-1 rounded-lg ${tagBorderColor} ${tagBgColor}`}>
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
