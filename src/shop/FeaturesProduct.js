import React from 'react'
import Category from './Category'

export default function FeaturesProduct() {
    return (
        <main className="feature-product px-3">
            <header className='py-4 font-bold text-center uppercase'>Features Product </header>
            <p className='text-sm text-justify proudct-demo md:text-center md:mx-32'>These products are in high demand by our customers. They love it . These are finished product and you can use at any ocassion ,party , festival and function. </p>
            <div className="flex md:text-2xl space-x-10 w-7/12 mx-auto">
            </div>
            <Category display='flex' space='space-x-20' text='justify-center' />
        </main >
    )
}
