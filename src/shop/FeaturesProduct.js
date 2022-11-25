import React from 'react'
import Category from './Category'

export default function FeaturesProduct() {
    return (
        <main className="feature-product px-3">
            <header className='py-4 text-center uppercase font-extrabold text-2xl hover:text-indigo-800'>Features Product </header>
            <div className="flex md:text-2xl space-x-10 w-7/12 mx-auto ">
            </div>
            <Category display='flex' space='md:space-x-20 space-x-5' text='justify-evenly' />
        </main >
    )
}
