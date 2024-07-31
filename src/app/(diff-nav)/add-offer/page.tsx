import React from 'react'


const page = () => {
    return (
        <main className="min-h-screen pt-20 max-w-[1180px] m-auto bg-white">
            <h1 className='font-bold text-4xl mx-4'>Dodaj ogłoszenie</h1>

            <div id='steps' className='my-8 mx-4'>
                <h2 className="sr-only ">Steps</h2>

                <div>
                    <div className="overflow-hidden rounded-full bg-gray-200">
                        <div className="h-2 w-1/2 rounded-full bg-blue-500"></div>
                    </div>

                    <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                        <li className="flex items-center justify-start text-blue-600 sm:gap-1.5">
                            <span className="hidden sm:inline"> Details </span>

                            <svg
                                className="size-6 sm:size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                />
                            </svg>
                        </li>

                        <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">
                            <span className="hidden sm:inline"> Address </span>

                            <svg
                                className="size-6 sm:size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </li>

                        <li className="flex items-center justify-end sm:gap-1.5">
                            <span className="hidden sm:inline"> Payment </span>

                            <svg
                                className="size-6 sm:size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </li>
                    </ol>
                </div>
            </div>

            <section id="types_of_offers" className="max-w-screen-xl py-8 mx-4 sm:py-12  lg:py-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Starter
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 10 users </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 2GB of storage </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Pro
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 20 users </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 5GB of storage </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Enterprise
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 100$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 50 users </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 20GB of storage </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page