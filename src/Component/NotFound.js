import React from 'react'

export default function NotFound() {
    return (
        <div className='Not-found-page lg:flex  md:justify-center lg:items-center h-screen w-screen'>
            
            {/* Not found image */}
            <div className='not-found-image md:w-[60%] sm:w-80 w-3/4 mx-auto  my-10'>
                <figure className=''>
                    <img src='/images/oops-404.webp' alt='Not found pic' />
                </figure>
            </div>

            {/* Not Found text and buttons */}
            <div className='Not-found-page-text mx-10 md:mx-auto md:w-4/6 md:pr-16'>
                <h3 className='text-xl text-justify pb-5'><span className='font-bold text-2xl text-slate-700'>Oops! </span>
                    This is awkward.... You are looking for something that doesn't actually exist.</h3>
                <p className='pb-9 text-justify font-sans'>You're either misspelling the url or requesting a page that's no longer her.</p>

                {/* buttons */}
                <div className='buttons'>
                    <a href="/" className='404-btn w-6 h-10 px-3 py-3 text-center cursor-pointer mr-3 hover:bg-slate-900 shadow-lg rounded-lg bg-slate-800 text-white'>Go Home</a>
                    <a href="/" onClick={(e)=>{
                        e.preventDefault();
                        window.history.back();
                    }} className='404-btn w-6 h-10 px-3 py-3 text-center cursor-pointer hover:bg-slate-900 shadow-lg rounded-lg border border-gray-400 hover:text-white'>Go Back</a>

                </div>


            </div>
        </div>
    )
}
