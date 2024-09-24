import React from 'react';
import Editor from 'react-simple-wysiwyg';
import { useFormik } from 'formik';

const OfferForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            company: '',
            category: '',
            employmentType: '',
            workModel: 'Stacjonarna',  // Default work model (radio)
            location: '',
            remoteRecruitment: false,  // Checkbox for remote recruitment
            content: '',  // WYSIWYG editor
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3 className="mb-4 p-2 font-semibold text-gray-900 dark:text-white">Szczegóły oferty</h3>

            <div className="grid gap-6 mb-6 md:grid-cols-2 w-full p-2">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700"> Tytuł </label>
                    <input
                        id="title"
                        name="title"
                        className="p-2 mt-1 w-full rounded-md bg-gray-50 border-gray-300 border text-sm text-gray-700 shadow-sm h-9"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700"> Kategoria </label>
                    <select
                        id="category"
                        name="category"
                        className="p-2 mt-1 w-full rounded-md bg-gray-50 border-gray-300 border text-sm text-gray-700 shadow-sm h-9"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                    >
                        <option value="">Select Category</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700"> Nazwa firmy </label>
                    <input
                        id="company"
                        name="company"
                        className="p-2 mt-1 w-full rounded-md bg-gray-50 border-gray-300 border text-sm text-gray-700 shadow-sm h-9"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                    />
                </div>

                <div>
                    <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700"> Rodzaj zatrudnienia </label>
                    <select
                        id="employmentType"
                        name="employmentType"
                        className="p-2 mt-1 w-full rounded-md bg-gray-50 border-gray-300 border text-sm text-gray-700 shadow-sm h-9"
                        onChange={formik.handleChange}
                        value={formik.values.employmentType}
                    >
                        <option value="">Select Employment Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700"> Lokalizacja</label>
                    <input
                        id="location"
                        name="location"
                        className="p-2 mt-1 w-full rounded-md bg-gray-50 border-gray-300 border text-sm text-gray-700 shadow-sm h-9"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                    />
                </div>
            </div>

            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Typ pracy</h3>

            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {['Stacjonarna', 'Hybrydowa', 'Zdalna'].map((model) => (
                    <li key={model} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input
                                type="radio"
                                id={model}
                                name="workModel"
                                value={model}
                                checked={formik.values.workModel === model}
                                onChange={formik.handleChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label htmlFor={model} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{model}</label>
                        </div>
                    </li>
                ))}
            </ul>

            <div className='my-6'>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Rekrutacja</h3>

                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" name="remoteRecruitment"
                        checked={formik.values.remoteRecruitment}
                        onChange={formik.handleChange} />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Zdalny proces rekrutacyjny</span>
                </label>
            </div>

            <h3 className="mb-4 mt-6 font-semibold text-gray-900 dark:text-white">Treść ogłoszenia</h3>

            <Editor
                value={formik.values.content}
                onChange={(e: any) => formik.setFieldValue('content', e.target.value)}
                containerProps={{
                    style: {
                        height: "300px",
                        overflow: "auto"
                    }
                }}
            />

            <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
        </form>
    );
};

export default OfferForm;
