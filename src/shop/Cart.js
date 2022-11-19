import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'

export default function Cart() {
    const [quanity, setquantity] = useState(10)
    
    // increase the quanity 
    const IncreaseQuantity = () => {
        setquantity(quanity + 1)
    }

    const DicreaseQuantity = () => {
        setquantity(quanity - 1)
    }

    const ManualQuantityChange = (e) => {
        setquantity(Number(e.target.value))
    }

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
    return (
        <Fragment>
            <main className='cart-page-container grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-5'>
                <section className='product-list-cart mx-3 my-3 rounded-lg bg-white px-3 lg:ml-24 lg:w-full'>
                    <h3 className='page-title text-xl font-[500] my-2 cursor-pointer'> Your Cart</h3>
                    {
                        Product_image.map((item, index) => (
                            <article className='product&details py-2 flex space-x-2'>
                                <figure className={` `} key={item.id} >
                                    <img alt='product-img' src={item.imagetumbnail} className='max-w-[100%] rounded-xl h-20 w-32  ' />
                                </figure>
                                <div className='detailas w-full pl-3'>
                                    <h2 className='product-name flex items-center'>
                                        <p className='remove-product-icon w-full font-medium pr-2'>Black coottons shirt</p>
                                        <IoIosCloseCircleOutline className='cursor-pointer' fontSize={'22px'} />
                                    </h2>
                                    <div className='size&colour flex space-x-10 items-center'>
                                        <h3 className='size flex space-x-3 items-center  '>
                                            <small className='value text-sm text-gray-600'>Large</small>
                                        </h3>
                                        <h3 className='colour flex space-x-3 items-center'>
                                            <small className='value text-sm text-gray-600'>Pink</small>
                                        </h3>
                                    </div>
                                    <h3 className='price text-[15px] flex space-x-10  items-center my-2'>
                                        <span>Rs 345</span>
                                        <div className='quanity-value flex lg:mx-0  items-center space-x-2'>
                                            <button className='decrease-btn' disabled={quanity == 10 || quanity < 10 ? true : false}><AiOutlineMinus fontSize={'22px'} color={'black'} onClick={DicreaseQuantity} /></button>
                                            <input type={'text'} className='w-10 border border-gray-300 outline-none bg-transparent text-black px-1 text-center' value={quanity} onChange={(e) => {
                                                e.preventDefault();
                                                ManualQuantityChange(e);
                                            }} />  <BiPlus fontSize={'22px'} color={'black'} onClick={IncreaseQuantity} /> <span id='quantity-limit' className={`text-sm ${quanity < 10 ? 'block' : 'hidden'} text-red-800 mx-2`}>You should have to buy at least 10 pcs.</span>
                                        </div>
                                    </h3>

                                </div>
                            </article>


                        ))
                    }
                </section>
                <section className='subtotal md:h-[60%] lg:w-[70%]  rounded-lg shadow-lg lg:ml-36 bg-white my-2  px-3 mx-5'>
                    <h3 className='order-summary-text text-xl my-4'>Order Summary</h3>
                    <div className='subtotal flex items-center border-b border-slate-300 pb-3 my-2 justify-between'>
                        <h3 className='subtotaltext text-xl text-gray-600'>Subtotal</h3>
                        <span className='amount'>Rs 4034</span>
                    </div>
                    <div className='shiping-estimate  my-2 border-b border-slate-300 pb-3 items-center justify-between flex'>
                        <h3 className='shipingtext text-xl text-gray-600 '>Shipping estimate</h3>
                        <span className='amount'>Rs 200</span>
                    </div>
                    <div className='tax-estimate items-center border-b border-slate-300 pb-3 my-2 justify-between flex'>
                        <h3 className='tax-text text-xl text-gray-600'>Tax estimate</h3>
                        <span className='amount'>Rs 200</span>
                    </div>
                    <div className='total flex items-center pb-2 justify-between'>
                        <h3 className='order-total text-xl text-gray-600 '>Total</h3>
                        <span className='amount'>Rs 5600</span>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}
