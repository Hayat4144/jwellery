import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Component/Navbar'
import { Helmet } from 'react-helmet'
import { BiShoppingBag } from 'react-icons/bi'

export default function Cart() {
    const Cartdata = useSelector(state => state.Cart_reducer.productItems)
    const [minimumquantity, setminimumquantity] = useState(10)
    const [quantityalert, setQuantityalert] = useState(false)
    const [shippingestimate, setShippingestimate] = useState(200)
    const [tax_percentage, settax_percentage] = useState(0.5)

    const dispatch = useDispatch()

    // getting total price of product in cart
    const subtotal = Cartdata.reduce((a, b) => {
        return a.price * a.quantity + b.price * b.quantity;

    })

    // tax applied according to the total price of shopping
    const tax_amount = Math.trunc(tax_percentage / 100 * subtotal);

    const total_amount = tax_amount + subtotal + shippingestimate;

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
            dispatch({ type: 'INCREASE_QUANTITY', payload: { 'product_item_id': id, 'quantity': newquantity } })

        }
    }

    const DescreaseQuantity = (id, quantity) => {
        const newquantity = quantity - 1
        if (newquantity < 10) {
            setQuantityalert(true)
        }
        else {
            dispatch({ type: 'DECREASE_QUANTITY', payload: { 'product_item_id': id, 'quantity': newquantity } })

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
            <Helmet>
                <title>Taj Jwellery | Cart</title>
            </Helmet>
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
                    <h1
                        className='page-indicator flex 
                        justify-center my-5 space-x-5 cursor-pointer tracking-tight'>
                        <BiShoppingBag fontSize={'30px'} className='hover:text-indigo-700' />
                        <span className='Page-title font-semibold
                        text-2xl hover:text-indigo-800'>My Cart</span>
                    </h1>
                    <main className='grid grid-cols-1 md:grid-cols-3 mx-2 gap-10 md:gap-5'>
                        <section className='product-items-details md:col-span-2 rounded-lg'>
                            <div className='product-top-banner flex text-white bg-indigo-700 h-10 items-center px-2 justify-between'>
                                <h1 className='product-item cursor-pointer'>Product</h1>
                                <h1 className='proudct-banner-quantity hidden md:block cursor-pointer ml-24'>Quantity</h1>
                                <h1 className='proudct-banner-price cursor-pointer'>Each Price</h1>

                            </div>
                            {
                                Cartdata.map((item) => (
                                    <div className='product-image&detailst px-2 my-5' key={item.product_item_id}>
                                        <div className='product-details flex space-x-2'>
                                            <figure className='product-imaga-contianer overflow-hidden w-[20%] rounded-md'>
                                                <img src="/images/thumbnail-1.jpg" className='h-28 object-center object-cover w-full hover:scale-125 rounded-md ' />
                                            </figure>
                                            <div className='product-name&quantity px-2 w-[60%] grid grid-cols-1 md:grid-cols-2 '>
                                                <div className='product-info'>
                                                    <div className='name-info-container lg:px-5'>
                                                        <h2 className='product-name '>{item.product_name}</h2>
                                                        <h2 className='Colour'> Colour<span className='mx-2 text-sm text-gray-700'>{item.colour}</span></h2>
                                                        <h2 className='size'> Size<span className='mx-2 text-sm text-gray-700'>{item.size}</span></h2>
                                                    </div>
                                                </div>
                                                <div className='product-quantity-show my-2 bg-gray-100 flex items-center justify-between px-2 h-8 rounded-md'>
                                                    <button className='decrease-btn bg-indigo-800 rounded-full text-white' disabled={item.quanity == 10 || item.quanity < 10 ? true : false} onClick={() => { DescreaseQuantity(item.product_item_id, item.quantity) }} ><AiOutlineMinus fontSize={'22px'} onClick={() => { }} /></button>
                                                    <input type={'text'} className='w-10 border border-indigo-800 outline-none bg-transparent text-black px-1 text-center' value={item.quantity} onChange={(e) => {
                                                    }} />
                                                    <button className='increase-button text-white bg-indigo-800 rounded-full'>
                                                        <BiPlus fontSize={'22px'} onClick={() => { IncreaseQuantity(item.product_item_id, item.quantity) }} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='each-price text-end ml-32 sm:w-[23%]'>
                                                <h2 className='price'>Rs <span className='price-vlaue'>{item.price}</span></h2>
                                            </div>
                                        </div>
                                        <div className='total-price-of-individual-product flex items-center my-2 border-b borde-gray-300 pb-5 justify-between'>
                                            <h2 className='product-subtotal-text text-xl'>Total</h2>
                                            <h2 className='product-total-price'> Rs <span className='total-price-value'>{item.price * item.quantity}</span></h2>
                                        </div>
                                    </div>
                                ))
                            }

                        </section>
                        <section className='subtotal mx-4 shadow-lg md:h-[60%] px-2 bg-gray-100 rounded-md my-5 md:my-0 '>
                            <h3 className='order-summary-text py-2 text-xl text-indigo-700'>Order Summary</h3>
                            <div className='subtotal flex items-center border-b border-slate-300 pb-3 my-2 justify-between'>
                                <h3 className='subtotaltext'>Subtotal</h3>
                                <span className='amount'>Rs {subtotal}</span>
                            </div>
                            <div className='shiping-estimate  my-2 border-b border-slate-300 pb-3 items-center justify-between flex'>
                                <h3 className='shipingtext'>Shipping estimate</h3>
                                <span className='amount'>Rs 200</span>
                            </div>
                            <div className='tax-estimate items-center border-b border-slate-300 pb-3 my-2 justify-between flex'>
                                <h3 className='tax-text '>Tax estimate</h3>
                                <span className='amount'>Rs {tax_amount}</span>
                            </div>
                            <div className='total flex items-center pb-2 justify-between mb-5'>
                                <h3 className='order-total'>Total</h3>
                                <span className='amount'>Rs {total_amount}</span>
                            </div>
                        </section>
                    </main>


                </Fragment>
            }

        </Fragment>
    )
}
