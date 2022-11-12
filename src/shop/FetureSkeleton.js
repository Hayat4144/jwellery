import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'




export default function FetureSkeleton() {
    return (
        <div className='mx-2 my-3 mb-4 bg-white rounded-lg shadow-lg cursor-pointer sm:w-44 sm:mx-3 md:w-56 lg:w-64 card w-36 '>
            <div className='image'>
                <Skeleton width={'100%'} height={140} />
            </div>
            <div className='mx-3 my-3 product-details'>
                <span className='block text-sm font-bold product-name'><Skeleton /></span>
                <span className='text-sm break-words product-description'><Skeleton /></span>
                <h3 className='pb-3 font-bold price'><span className='price-symbol'><Skeleton /></span><Skeleton width={80} /></h3>
            </div>
        </div>

    )
}
