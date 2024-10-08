import React from 'react'
import { BuildingOffice2Icon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, GlobeAltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { formatDistanceToNow, subDays, isAfter, parse } from 'date-fns';
import { OfferType } from '@/context';

export enum OfferTypeE {
    Normal = "normal",
    Highlighted = "premium",
    Premium = "gold"
}
export enum EmploymentType {
    FullTime = "Full-Time",
    PartTime = "Part-Time",
}

export enum WorkModel {
    Remote = "Remote",
    Hybrid = "Hybrid",
    Stationary = "Stationary",
}

export type JobOffer = {
    image: string;
    title: string;
    company: string;
    location: string;
    category: string;
    employmentType: EmploymentType;
    offerType: OfferType;
    workModel: WorkModel;
    salary: string;
    date: string;
    remoteRecruitment: boolean;
    remoteWork: boolean;
}

export type JobOfferDetails = JobOffer & {
    description: string;
}

const Offer: React.FC<JobOffer> = ({ image, title, company, location, employmentType, salary, date, offerType, remoteRecruitment, workModel }) => {
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

    const bgColor = offerType === OfferTypeE.Premium ? 'bg-orange-100' :
        offerType === OfferTypeE.Highlighted ? 'bg-blue-100' :
            'bg-white';
    const borderColor = offerType === OfferTypeE.Premium ? 'border-orange-200' :
        offerType === OfferTypeE.Highlighted ? 'border-blue-100' :
            'border-gray-200';

    const textColor = offerType === OfferTypeE.Premium ? 'text-gray-800' :
        offerType === OfferTypeE.Highlighted ? 'text-gray-800' :
            'text-gray-800';

    const tagBorderColor = offerType === OfferTypeE.Premium ? 'border-transparent' :
        offerType === OfferTypeE.Highlighted ? 'text-gray-900' :
            'text-gray-900';


    //const textColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'text-white' : 'text-gray-900';
    // const borderColor = promotionType === PromotionType.Premium || promotionType === PromotionType.Highlighted ? 'border-orangeCP' : 'border-transparent';
    const tagBgColor = offerType === OfferTypeE.Premium || offerType === OfferTypeE.Highlighted ? 'bg-white' : 'bg-transparent';

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
                            {employmentType}
                        </span>
                        <span className={`flex items-center border  text-sm font-medium px-3 py-1 rounded-lg ${tagBorderColor} ${tagBgColor}`}>
                            <GlobeAltIcon className="h-5 w-5 mr-2" />
                            {workModel}
                        </span>
                        {remoteRecruitment && (
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
