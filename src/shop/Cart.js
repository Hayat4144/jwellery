import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Component/Navbar'

export default function Cart() {

    const Cartdata = useSelector(state => state.Cart_reducer.productItems)
    const [minimumquantity, setminimumquantity] = useState(10)
    const [quantityalert, setQuantityalert] = useState(false)

    const dispatch = useDispatch()
    console.log(Cartdata)


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

    const IncreaseQuantity = (id, quantity) => {
        const newquantity = quantity + 1
        if (newquantity < 10) {
            setQuantityalert(true)
        }
        else {
            const l = dispatch({ type: 'INCREASE_QUANTITY', payload: { 'product_item_id': id, 'quantity': newquantity } })
            console.log(l)
        }
    }

    const DescreaseQuantity = (id, quantity) => {
        const newquantity = quantity - 1
        if (newquantity < 10) {
            setQuantityalert(true)
        }
        else {
            const l = dispatch({ type: 'DECREASE_QUANTITY', payload: { 'product_item_id': id, 'quantity': newquantity } })
            console.log(l)
        }
    }
    const RemoveCartItem = (id) => {

        dispatch({
            type: "REMOVE_ITEM_FROM_CART", payload: {
                "product_item_id": id
            }
        })
    }
    return (
        <Fragment>
            <Navbar />
            {
                Cartdata.length == 0 ? <Fragment>
                    <div className='empty-cart md:mx-auto lg:flex md:justify-center lg:items-center md:mt-24'>
                        <figure className='empty-cart-image mt-32 md:mt-3'>
                            <img src='/images/EmptyCart.webp' alt='empty-cart-image' className='w-full h-full' />
                        </figure>
                        <section className='info-area px-5'>
                            <h3 className='text-xl my-5'>It's seems like you haven't added any product to your cart.</h3>
                            <p className='my-3'>Explore our website to purchase your favaourite product and enjoy. </p>
                            <article className='my-5 px-5 md:px-0 '>
                                <a className='bg-orange-500 px-3 py-2 w-6 rounded-md text-white cursor-pointer shadow-2xl hover:text-black hover:border hover:border-orange-400 hover:bg-transparent'>Explore the site</a>
                                <a className='ml-10 bg-orange-500 px-3 py-2 w-6 rounded-md text-white cursor-pointer shadow-2xl hover:text-black hover:border hover:border-orange-400 hover:bg-transparent'>Add items to cart</a>
                            </article>
                        </section>


                    </div>
                </Fragment> : <Fragment>
                    <main className='cart-page-container grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-5'>
                        <section className='product-list-cart mx-3 my-3 rounded-lg bg-white px-3 lg:ml-24 lg:w-full'>
                            <h3 className='page-title text-xl font-[500] my-2 cursor-pointer'> Your Cart</h3>
                            {
                                Cartdata.map((item, index) => (
                                    <article className='product&details py-2 flex space-x-2' key={item.product_item_id}>

                                        <figure className={`image`} key={item.product_item_id} >
                                            <img alt='product-img' src={item.product_image} className='max-w-[100%] rounded-xl h-20 w-32  ' />
                                        </figure>
                                        <div className='detailas w-full pl-3'>
                                            <h2 className='product-name flex items-center'>
                                                <p className='remove-product-icon w-full font-medium pr-2'>{item.product_name}</p>
                                                <IoIosCloseCircleOutline className='cursor-pointer' fontSize={'22px'} onClick={() => RemoveCartItem(item.product_item_id)} />
                                            </h2>
                                            <div className='size&colour flex space-x-10 items-center'>
                                                <h3 className='size flex space-x-3 items-center  '>
                                                    <small className='value text-sm text-gray-600'>{item.size}</small>
                                                </h3>
                                                <h3 className='colour flex space-x-3 items-center'>
                                                    <small className='value text-sm text-gray-600'>{item.colour}</small>
                                                </h3>
                                            </div>
                                            <h3 className='price text-[15px] flex space-x-10  items-center my-2'>
                                                <span className='font-bold'>{item.price}</span>
                                                <div className='quanity-value flex lg:mx-0  w-full  items-center space-x-2'>
                                                    <button className='decrease-btn' disabled={item.quanity == 10 || item.quanity < 10 ? true : false} onClick={() => { DescreaseQuantity(item.product_item_id, item.quantity) }} ><AiOutlineMinus fontSize={'22px'} color={'black'} onClick={() => { }} /></button>
                                                    <input type={'text'} className='w-10 border border-gray-300 outline-none bg-transparent text-black px-1 text-center' value={item.quantity} onChange={(e) => {

                                                    }} />
                                                    <BiPlus fontSize={'22px'} color={'black'} onClick={() => { IncreaseQuantity(item.product_item_id, item.quantity) }} />
                                                </div>
                                                <span className='text-xl'>{item.price * item.quantity}</span>
                                            </h3>
                                            <span id='quantity-limit' className={`text-sm text-red-700 ${item.quanity < 10 ? 'block' : 'hidden'}`}>You should have to buy at least 10 pcs.</span>


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
            }

        </Fragment>
    )
}
