"use client"
import { Offer, useAppContext } from '@/context';
import React, { useState } from 'react'

const OfferCard: React.FC<Offer> = ({ benefits, cost, description, id, offerType, title, selected }) => {
    const NORMAL_STYLE = "mt-4 w-full block rounded border border-blackCP bg-transparent px-12 py-3 text-center text-sm font-medium text-blackCP hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6";
    const PREMIUM_STYLE = "mt-4 w-full block rounded border border-bluebCP bg-bluebCP px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-bluebCP focus:outline-none focus:ring active:text-indigo-500 sm:mt-6";
    const GOLD_STYLE = "mt-4 w-full block rounded border border-goldCP bg-goldCP px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-goldCP focus:outline-none focus:ring active:text-indigo-500 sm:mt-6";
    const SELECTED_STYLE = "ring-2 ring-offset-2 ring-blue-500";

    const { selectCard } = useAppContext();

    const onCardSelect = (id: number) => {
        selectCard(id);
    }
    return (
        <div className={`divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm ${selected && SELECTED_STYLE}`}>
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                    {title}
                    <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-700">{description}</p>

                <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> {cost}zł </strong>

                    <span className="text-sm font-medium text-gray-700">/month</span>
                </p>

                <button
                    className={offerType === "normal" ? NORMAL_STYLE : offerType === "premium" ? PREMIUM_STYLE : GOLD_STYLE} onClick={() => onCardSelect(id)}
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
    )
}

export default OfferCard