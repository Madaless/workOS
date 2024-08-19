import React from 'react'

type OfferType = "normal" | "premium" | "gold"

export type Offer = {
    id: number;
    offerType: OfferType;
    title: string;
    description: string;
    cost: number;
    benefits: Map<string, boolean>
};

const Cards = () => {
    const offers: Offer[] = [{
        id: 1,
        offerType: "normal",
        title: "Podstawowa",
        description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
        cost: 30.00,
        benefits: new Map([["Amen", true]])
    },
    {
        id: 2,
        offerType: "normal",
        title: "Premium",
        description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
        cost: 60.00,
        benefits: new Map([["Amen", true]])
    },
    {
        id: 3,
        offerType: "normal",
        title: "Złota",
        description: 'Ważne przez 30 dni, wyróżnione zieloną ramką.',
        cost: 300.00,
        benefits: new Map([["Amen", true]])
    },
    ]
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                <div className="p-6 sm:px-8">
                    <h2 className="text-lg font-medium text-gray-900">
                        Podstawowe
                        <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 text-gray-700">Ważne przez 30 dni, wyróżnione zieloną ramką</p>

                    <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>

                        <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>

                    <button
                        className="mt-4 w-full block rounded border border-blackCP bg-transparent px-12 py-3 text-center text-sm font-medium text-blackCP hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6" onClick={() => console.log(1)}
                    >
                        Wybieram
                    </button>
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
                        <span className="sr-only">Premium</span>
                    </h2>

                    <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

                        <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>

                    <button
                        className="mt-4 w-full block rounded border border-bluebCP bg-bluebCP px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-bluebCP focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"

                    >
                        Wybieram
                    </button>
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

                    <button
                        className="mt-4 w-full block rounded border border-goldCP bg-goldCP px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-goldCP focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"

                    >
                        Wybieram
                    </button>
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
    )
}

export default Cards