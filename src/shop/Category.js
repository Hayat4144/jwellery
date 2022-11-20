import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FetureSkeleton from './FetureSkeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Category(props) {
    const [categories, setcategories] = useState([])
    const [category_name, setcategory_name] = useState('')
    const [categry_data, setcategry_data] = useState([])
    const [proudct_data, setproduct_data] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate();

    const yourdata = async () => {
        const lt = await fetch(`http://localhost:8000/product/api/get_all_categories`).then(res => res.json())
        const mt = await fetch(`http://localhost:8000/product/api/get_product_by_category/${lt[0].name}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        setcategories(lt)
        setproduct_data(mt.slice(0, 4))
    }
    useEffect(() => {
        yourdata();
    }, [])

    // fetch data after page load when user clicked on category
    const fetch_product = async (category_name) => {
        const lt = await fetch(`http://localhost:8000/product/api/get_product_by_category/${category_name}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
        console.log(lt)
        setproduct_data(lt.slice(0, 4))

    }

    return (
        <Fragment>
            {/* all category */}
            <div className={`category ${props.display} ${props.space}  md:space-x-7 lg:space-x-28 ${props.text}`}>
                {
                    categories.map((category_item,) => (
                        <ul className='item' key={category_item.id}>
                            <li className={`category_name my-3 list-none cursor-pointer`}
                                onClick={() => {
                                    console.log('clicked')
                                    fetch_product(category_item.name)
                                }}>{category_item.name}</li>
                        </ul>
                    ))
                }

            </div>

            {/* category product */}
            <div className='category-product'>
                <div className='flex flex-wrap my-5 lg:ml-10  card-container'>
                    {!isLoading ? proudct_data.map((product_item) => (
                        <div key={product_item.id} onClick={() => {
                            navigate(`V2/Shop/product/${product_item.id}`)
                        }} className='bg-white rounded-lg w-[9rem] mx-2 mb-5 shadow-lg cursor-pointer sm:w-[18em] sm:mx-auto md:w-[18em] lg:w-64 card '>
                            <figure className='rounded-lg'>
                                <img
                                    className='rounded-md h-[10em]'
                                    height={'10em'}
                                    width={'100%'}
                                    alt={'prodct-pic'}
                                    effect="blur"
                                    // placeholderSrc={`https://res.cloudinary.com/dwwequxd2/${product_item.image}`}
                                    src={`https://res.cloudinary.com/dwwequxd2/${product_item.image}`}
                                />
                            </figure>
                            <div className='mx-3 my-3 product-details'>
                                <span className='block text-[15px] product-name mb-2'>{product_item.name.length > 35 ? product_item.name.slice(0, 30) : product_item.name}{product_item.name.length > 35 ? '.....' : ''}</span>
                                <div className='add-cart-price flex-wrap justify-between items-center flex'>
                                    <h3 className='price'><span className='price-symbol'>Rs </span>{product_item.regular_price}</h3>
                                    <button className='bg-indigo-800 hover:bg-indigo-900 rounded-md text-sm text-white px-2 h-9'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )) : [1, 2, 3].map((loading) => (
                        <FetureSkeleton key={loading} />
                    ))}
                </div>
            </div>
        </Fragment>



    )
}
