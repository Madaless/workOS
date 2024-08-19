import Cards from '@/components/add-offer/Cards'
import { StepProps } from '@/components/add-offer/Step'
import Steps from '@/components/add-offer/Steps'
import React from 'react'


const page = () => {
    const firstStep: StepProps = {
        children: <Cards />,
        next: true,
        back: false,
    }

    return (
        <main className="min-h-screen pt-10 max-w-[1180px] m-auto bg-white">
            <h1 className='font-bold text-4xl mx-4'>Dodaj ogłoszenie</h1>
            <section id="types_of_offers" className="max-w-screen-xl py-8 mx-4 sm:py-12  lg:py-16">
                <Steps />
            </section>
        </main>
    )
}

export default page