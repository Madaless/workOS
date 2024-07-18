import React from 'react';
import { ScaleIcon, AcademicCapIcon, CurrencyDollarIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Filter = () => {
    const selectStyles = "font-medium cursor-pointer block w-full py-2 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm";

    return (
        <div className="p-4 flex flex-wrap gap-4 justify-center">
            {/* Category Select */}
            <div className="relative flex items-center">
                <AcademicCapIcon className="h-5 w-5 text-black absolute left-3" aria-hidden="true" />
                <select id="category" name="category" className={selectStyles}>
                    <option value="" disabled selected hidden>Category</option>
                    {/* Options for categories */}
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>
            </div>

            {/* Salary Select */}
            <div className="relative flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-black absolute left-3" aria-hidden="true" />
                <select id="salary" name="salary" className={selectStyles}>
                    <option value="" disabled selected hidden>Salary</option>
                    {/* Options for salary */}
                    <option value="salary1">Salary 1</option>
                    <option value="salary2">Salary 2</option>
                    <option value="salary3">Salary 3</option>
                </select>
            </div>

            {/* Type of Work Select */}
            <div className="relative flex items-center">
                <GlobeAltIcon className="h-5 w-5 text-black absolute left-3" aria-hidden="true" />
                <select id="workType" name="workType" className={selectStyles}>
                    <option value="" disabled selected hidden>Type of Work</option>
                    {/* Options for type of work */}
                    <option value="hybrid">Hybrid</option>
                    <option value="stationary">Stationary</option>
                    <option value="remote">Remote</option>
                </select>
            </div>

            {/* Type of Agreement Select */}
            <div className="relative flex items-center">
                <ScaleIcon className="h-5 w-5 text-black absolute left-3" aria-hidden="true" />
                <select id="agreement" name="agreement" className={selectStyles}>
                    <option value="" disabled selected hidden>Type of Agreement</option>
                    {/* Options for type of agreement */}
                    <option value="workContract">Work Contract</option>
                    <option value="b2b">B2B</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Localization Select */}
            <div className="relative flex items-center">
                <MapPinIcon className="h-5 w-5 text-black absolute left-3" aria-hidden="true" />
                <select id="localization" name="localization" className={selectStyles}>
                    <option value="" disabled selected hidden>Localization</option>
                    {/* Options for localization */}
                    <option value="localization1">Localization 1</option>
                    <option value="localization2">Localization 2</option>
                    <option value="localization3">Localization 3</option>
                </select>
            </div>

            {/* Additional filters can be added here */}
        </div>
    );
}

export default Filter;
