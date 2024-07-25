import Link from 'next/link'
import React from 'react'

const Login = () => {
    // return (
    //     <section className="relative h-[100vh] w-full">
    //         <img
    //             src="/kurpie.jpg"
    //             alt="Hero"
    //             className="absolute inset-0 w-full h-full object-cover filter"
    //         />
    //     </section >
    // )

    return (
        <section>
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 max-sm:hidden">
                    <img
                        alt=""
                        src="./kurpie.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">


                        <h1 className="mt-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Log in to Employer Panel

                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Welcome to PracaOstrolenka - Your Gateway to Top Talent and #1 work platform!


                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm  h-9"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm  h-9"
                                />
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blackCP focus:outline-none focus:ring active:text-blue"
                                >
                                    Log in
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don't have an account? &nbsp;
                                    <Link href="/register" className="text-gray-700 underline">Register</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>)

}


export default Login
