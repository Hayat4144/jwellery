import React, { Fragment, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

export default function ProductPage() {
    const Product_image = [
        {
            "imagetumbnail": "/images/thumbnail-1.jpg",
            "id": "1"
        },
        {
            "imagetumbnail": "/images/thumbnail_2.jpg",
            "id": "2"
        },
        {
            "imagetumbnail": "/images/thumbnail_3.jpg",
            "id": "3"
        },
        {
            "imagetumbnail": "/images/thumbnail_4.jpg",
            "id": "4"
        },
    ]


    const proudct_size = [
        {
            "nname": "M",
            "id": "1"
        },
        {
            "nname": "S",
            "id": "2"
        },
        {
            "nname": "L",
            "id": "3"
        },
        {
            "nname": "XL",
            "id": "4"
        },
    ]

    const [image_value, setimage_value] = useState(0)
    const { imagetumbnail } = Product_image[image_value]
    const [slideindex, setslidindex] = useState(1)

    // next slide
    const nextSlide = () => {
        if (slideindex !== Product_image.length) {
            setslidindex(slideindex + 1)
        }
        else if (slideindex === Product_image.length) {
            setslidindex(1)
        }
    }

    // back slide
    const backslide = () => {
        if (slideindex !== 1) {
            setslidindex(slideindex - 1)
        }
        else if (slideindex === 1) {
            setslidindex(Product_image.length)
        }
    }
    return (
        <Fragment>
            <section className='proudct-parent  md:grid-cols-2 max-w-7xl grid grid-cols-1 lg:grid-cols-2 '>
                <article className='product-image-container lg:w-[30em] my-5 px-5 '>
                    {
                        Product_image.map((item, index) => (
                            <figure className={`${slideindex === index + 1 ? 'relative' : 'hidden'} md:hidden`} key={item.id} >
                                <img alt='product-img' src={item.imagetumbnail} className=' max-w-[100%] w-full lg:w-[85em] rounded-2xl h-[20em] ' />

                                {/* slider button */}
                                <div className='md:hidden w-[90%] justify-between  absolute top-40 text-white font-bold text-2xl flex mx-2'>
                                    <h3 className='mx-2 cursor-pointer' onClick={() => {
                                        backslide();
                                    }}><BsArrowLeftCircle /></h3>
                                    <h3 className='mx-5 cursor-pointer' onClick={() => {
                                        nextSlide();
                                    }}><BsArrowRightCircle /></h3>
                                </div>

                            </figure>
                        ))
                    }

                    {/* Switch image with thumbnail only for large screeen */}
                    <figure className='hidden md:block'>
                        <img src={imagetumbnail} alt={'product-image'} className='max-w-[100%] w-full lg:w-[85em] rounded-2xl h-[20em] ' />.
                    </figure>

                    {/* end of switch image for large screen */}

                    {/* image thumbnail for large screen */}
                    <figure className='my-3 hidden md:block'>
                        <ul className='flex'>
                            {
                                Product_image.map((item, key) => (
                                    <li className='mx-3 cursor-pointer' key={item.id} onClick={(e) => {
                                        e.preventDefault();
                                        setimage_value(key);
                                    }}><img src={item.imagetumbnail} alt="proudct-image" className={` ${image_value === key ? 'border-4 shadow-lg  outline-indigo-500 border-indigo-700' : ''} w-20 h-12 rounded-lg `} /></li>
                                ))
                            }
                        </ul>
                    </figure>

                </article>
                <article className='proudct-info my-5 lg:w-[42em] px-5 lg:absolute lg:right-32'>
                    {/* proudct-price and name */}
                    <div className='prouduct-name-price text-3xl font-semibold '>
                        <h3 className='Proudct-name capitalize lg:text-4xl '>black cotton Shirt</h3>
                        <span className='text-indigo-800  hover:text-indigo-700 text-[15px] lg:text-xl'>Special price</span>
                        <h5 className='product-price font-[500]'>Rs 3045 <span className='discount-price mx-3 text-xl text-slate-500 line-through font-[300]'>8903</span>
                            <span className='text-indigo-700 text-[20px]'> 45 % off</span></h5>
                    </div>
                    {/* product-reviews */}
                    <div className='proudct-reviews flex my-2 items-center justify-between'>
                        <div className='review-icons flex'>
                            {[1, 2, 3, 4].map((review) => (
                                <AiFillStar fontSize={'20px'} key={review} className="text-yellow-500" />
                            ))}
                        </div>
                        <span className='preview-all-reviews text-indigo-800'> See all 52 reviews</span>
                    </div>


                    {/* product-size */}
                    <div className='product-size'>
                        <h2 className='text-size'>size</h2>
                        <ul className='size-value flex lg:mx-0 flex-wrap '>
                            {
                                proudct_size.map((size) => (
                                    <li key={size.id} className='text-center my-1 mr-3 rounded-md  h-9 py-1 w-[5em] hover:bg-indigo-700 cursor-pointer bg-indigo-800 text-white'>{size.nname}</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* button group */}
                    <div className='shop-button-group space-x-5 my-10'>
                        <a className='bg-gray-800 hover:bg-gray-900 text-white rounded-md h-8 shadow-md px-5 py-3 outline-none' href='/'>Buy Now</a>
                        <a className='border border-gray-300 px-4 py-3 hover:border-none outline-none shadow-md  hover:text-white hover:bg-indigo-800 text-slate-800 rounded-md' href='/'>Add to Cart</a>
                    </div>

                    {/* Description feature */}
                    <div className='description border-b-[1px]  border-gray-300'>
                        <h3 className='description-text text-slate-800 my-3'>Description</h3>
                        <p className='text-sm text-justify text-slate-700'>The Basic tee is on hones new tak on a classic.The tee uses super soft,pre-shrunk cotton for true comfort and dependable fit . They are hand cut gives each tee it's own look. </p>
                        <p className='text-sm text-justify text-slate-700 my-2'>The Basic tee is on hones new tak on a classic.The tee uses super soft,pre-shrunk cotton for true comfort and dependable fit .  </p>

                    </div>

                    {/* features */}

                    <div className='my-3'>
                        <h3 className='feature text-slate-800 md:w-[35em]'>Feature</h3>
                        <ul className='list-disc  feature-list'>
                            <li className='text-sm mx-5 text-slate-800'>Only the best materials</li>
                            <li className='text-sm mx-5 text-slate-800'>Only the best materials</li>
                            <li className='text-sm mx-5 text-slate-800'>Only the best materials</li>
                            <li className='text-sm mx-5 text-slate-800'>Only the best materials</li>
                        </ul>
                    </div>

                </article>
            </section>
        </Fragment>
    )
}
