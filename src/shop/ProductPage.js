import React, { Fragment, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../Context/action/CartActions'
import { useSelector } from 'react-redux'

export default function ProductPage() {
    const data = useSelector(state => state.Cart_reducer)
    // console.log(data)
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
    const { product_id } = useParams();
    const [product_data, setproduct_data] = useState([])
    const [quanity, setquantity] = useState(10)
    const [product_details, setproductsdetails] = useState([])
    const [sizevalue, setsizevalue] = useState('')
    const [colourvalue, setColourvalue] = useState('')
    const [image_value, setimage_value] = useState(0)
    const { imagetumbnail } = Product_image[image_value]
    const [slideindex, setslidindex] = useState(1)
    const [product_item_id, setProduct_item_id] = useState('')
    const dispatch = useDispatch();

    const get_product = async () => {
        await fetch(`http://localhost:8000/product/api/get_product/${product_id}/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_id
            })
        })
            .then(async (res) => {
                const result = await res.json();
                setproduct_data(result)
            })

    }


    const Product_details = async () => {
        await fetch(`http://localhost:8000/product/api/get_product/details/${product_id}/`, {
            method: 'GET',

        })
            .then(async (res) => {
                const result = await res.json()
                console.log(result[0].colour_name)
                setproductsdetails(result)

            })
    }
    useEffect(() => {
        get_product();
        Product_details();

    }, [])

    const ColourChange = (e) => {
        setColourvalue(e.target.value)

    }
    const SizeChange = (e) => {
        setsizevalue(e.target.value)

    }

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

    const IncreaseQuantity = () => {
        setquantity(quanity + 1)
    }

    const DicreaseQuantity = () => {
        setquantity(quanity - 1)
    }

    const ManualQuantityChange = (e) => {
        setquantity(Number(e.target.value))
    }

    console.log(product_data)
    const Add_TO_CART_FUNC = () => {
        const item_data = {
            'product_item_id': '27',
            'product_image': Product_image[0].imagetumbnail,
            'size': sizevalue,
            'colour': colourvalue,
            'quantity': quanity,
            'product_name': product_data[0].name,
            "price": product_data[0].regular_price

        }
        const l = dispatch(ADD_TO_CART(item_data))
        console.log(l)
    }

    return (
        <Fragment>
            <Navbar />
            <section className='proudct-parent mx-auto lg:w-[90%] mt-5 mb-10 md:grid-cols-2 max-w-7xl grid grid-cols-1 lg:grid-cols-2 '>
                {product_data.map((data) => (
                    <article className='product-image-container my-10 mx-5 lg:w-[70%]' key={data.id}>
                        {
                            Product_image.map((item, index) => (
                                <figure className={`${slideindex === index + 1 ? 'relative' : 'hidden'} md:hidden `} key={item.id} >
                                    <img alt='product-img' src={item.imagetumbnail} className='w-full rounded-2xl h-[20em] lg:h-[38em] ' />

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
                ))}
                {
                    product_data.map((data) => (
                        <article className='proudct-info mx-5 lg:absolute lg:top-[20%] lg:w-[45%] lg:left-[40%]' key={data.id}>
                            {/* proudct-price and name */}
                            <div className='prouduct-name-price font-semibold '>
                                <h3 className='Proudct-name capitalize lg:text-4xl text-xl'>{data.name}</h3>
                                <span className='text-indigo-800  hover:text-indigo-700 text-sm'>Special price</span>
                                <h5 className='product-price font-[800] text-2xl'>Rs {data.regular_price}<span className='discount-price mx-3 text-sm text-slate-600 line-through font-[600]'>8903</span>
                                    <span className='text-indigo-700 text-sm'> 45 % off</span></h5>
                                <p className='product-description text-sm text-gray-800 pb-4'>
                                    {data.descriptions}
                                </p>
                            </div>

                            <div className='colour flex items-center space-x-5 mb-5'>
                                <h2 className='colour-text text-xl font-medium'>Colour</h2>
                                <ul className='colour-value flex items-center   space-x-3'>

                                    {
                                        product_details.map((item, index) => (
                                            <li key={item.id} onClick={() => {
                                                console.log(item.id)
                                            }} className="radio-colour-btn">
                                                <input type={'radio'} checked={colourvalue === item.colour_name} onChange={ColourChange} name='colour' id={item.colour_name} value={item.colour_name} />
                                                <label htmlFor={item.colour_name} className="hover:bg-indigo-700 hover:text-white hover:border-none">{item.colour_name}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* product-size */}
                            <div className='product-size flex items-center space-x-10'>
                                <h2 className='text-size text-xl font-medium'>Size</h2>
                                <ul className='size-value flex space-x-3'>
                                    {
                                        product_details.map((item, index) => (
                                            <li key={item.id} onClick={() => {
                                                console.log(item.id)
                                            }} className='size-radio-btn'>
                                                <input type={'radio'}
                                                    name={'size'} checked={sizevalue === item.size_name} onChange={SizeChange} id={item.size_name} value={item.size_name} />
                                                <label className='size-label checked:shadow-lg hover:bg-indigo-700 hover:text-white hover:border-none' htmlFor={item.size_name}>
                                                    {item.size_name}
                                                </label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Quantity */}
                            <div className='product-quantity my-4 lg:w-[55%]'>
                                <div className='quanity-value flex lg:mx-0 bg-gray-200 py-1 rounded-md items-center lg:justify-between space-x-24 lg:space-x-20 px-5'>
                                    <button className='decrease-btn bg-indigo-900 text-white rounded-full igo-700 focus:border-none' disabled={quanity == 10 || quanity < 10 ? true : false}><AiOutlineMinus fontSize={'20px'} onClick={DicreaseQuantity} /></button>
                                    <input type={'text'} className='focus:outline-none focus:border focus:border-indigo-600 focus:shadow-lg focus:bg-indigo-700 focus:text-white w-10 border rounded-md border-indigo-800 outline-none bg-transparent text-black  text-center' value={quanity} onChange={(e) => {
                                        e.preventDefault();
                                        ManualQuantityChange(e);
                                    }} />
                                    <button className='plus-icon bg-indigo-900 focus:outline-none focus:shadow-lg focus:bg-indigo-700 focus:border-none text-white rounded-full '>
                                        <BiPlus fontSize={'20px'} onClick={IncreaseQuantity} />
                                    </button>

                                </div>
                                <span id='quantity-limit' className={`text-sm text-red-700 ${quanity < 10 ? 'block' : 'hidden'}`}>You should have to buy at least 10 pcs.</span>
                            </div>

                            <div className='group-btn lg:flex lg:items-center'>
                                <button className='focus:outline-none focus:shadow-lg w-full lg:w-[9.5rem] lg:py-3 lg:mr-3 bg-slate-800 text-white px-3 rounded-lg  hover:bg-slate-900 cursor-pointer py-2'>Buy Now</button>
                                <button onClick={Add_TO_CART_FUNC} className='focus:outline-none focus:shadow-lg w-full lg:w-[9.5rem] lg:py-3  my-2 bg-indigo-900 text-white px-3 rounded-lg  hover:bg-indigo-800 cursor-pointer py-2'> Add to Cart</button>
                            </div>
                        </article>
                    ))
                }
            </section>
            <Footer />
        </Fragment>
    )
}
