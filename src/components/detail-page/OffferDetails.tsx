import React from 'react'
import { JobOferDetails } from '../main-page/Offer';
import { HomeIcon, BriefcaseIcon, DevicePhoneMobileIcon, CalendarIcon, UserIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const OffferDetails: React.FC<JobOferDetails> = (offer) => {

    offer = {
        image: "https://example.com/image1.jpg",
        title: "Frontend Developer",
        company: "Tech Innovations",
        location: "New York, NY",
        employmentType: "Full-Time",
        workModel: "Hybrid",
        salary: "$80,000 - $100,000",
        date: "2024-08-25",
        remoteRecruitment: true,
        remoteWork: false,
        offerType: "normal",
        description:
            "Join Tech Innovations as a Frontend Developer to create cutting-edge web applications using the latest technologies. Work in a dynamic, collaborative environment with a focus on modern frontend frameworks like React and Angular. Responsibilities include building responsive user interfaces, collaborating with backend developers, and optimizing performance for web applications.",
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-md min-h-screen w-full">
            {/* Header Section */}
            <div className="flex items-center justify-between gap-4 py-2">
                <div className="flex items-center gap-4">
                    <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-16 h-16 object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-gray-800">{offer.title}</h1>
                        <p className="text-gray-600">{offer.company}</p>
                    </div>
                </div>
                <div className="flex items-center ml-auto bg-gray-100 text-black p-2 rounded-md">
                    <CurrencyDollarIcon className="w-5 h-5 mr-1" />
                    <p className="text-lg">{offer.salary}</p>
                </div>
            </div>


            <div className="max-w-screen-xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-4 bg-white text-gray-900">
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                            <MapPinIcon className="w-6 h-6 text-orangeCP" />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Location</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                New York, NY
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                            <BriefcaseIcon className="w-6 h-6  text-orangeCP" />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Employment Type</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Full-Time
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                            <DevicePhoneMobileIcon className="w-6 h-6  text-orangeCP" />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Work Model</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Hybrid
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                            <CalendarIcon className="w-6 h-6  text-orangeCP" />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Date</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                2024-08-25
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                            <UserIcon className="w-6 h-6  text-orangeCP" />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Remote Recruitment</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Yes
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                            <HomeIcon className="w-6 h-6  text-orangeCP" />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Remote Work</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                No
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Description Section */}
            <section className="my-12">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Opis stanowiska</h2>
                <p className="text-gray-700">{offer.description}</p>
            </section>

            {/* Apply Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-200">
                <div className="container mx-auto text-center">
                    <a href="#apply" className="inline-block px-32 py-3 bg-orangeCP rounded-xl text-white font-semibold shadow-md hover:bg-blue-700 transition duration-200">
                        Apply Now
                    </a>
                </div>
            </div>

        </div>
    );
}



export default OffferDetails