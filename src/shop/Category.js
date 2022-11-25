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
                            <li className={`category_name my-3 list-none hover:text-indigo-800 text-indigo-800 cursor-pointer`}
                                onClick={() => {
                                    console.log('clicked')
                                    fetch_product(category_item.name)
                                }}>{category_item.name}</li>
                        </ul>
                    ))
                }

            </div>
            <section className='feature-product-category grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 mx-5 mb-24'>
                {
                    proudct_data.map((item) => (
                        <main className='feature-product-main-container w-full cursor-pointer  mb-5 ' key={item.id} onClick={() => {
                            navigate(`V2/Shop/product/${item.id}`)
                        }}>
                            <figure className='product-image-container shadow-lg rounded-lg my-5 overflow-hidden'>
                                <img
                                    src={`https://res.cloudinary.com/dwwequxd2/${item.image}`}
                                    className='rounded-lg object-cover object-center h-80 w-full hover:scale-125 transition ease-in-out duration-500 ' />
                            </figure>
                            <article className='product-details'>
                                <div className='product-name&price flex items-center justify-between'>
                                    <h2 className='product-name text-xl sm:text-xl tracking-tight  font-bold capitalize leading-4 '>{item.name.length > 20 ? item.name.slice(0, 20) : item.name}{item.name.length > 20 ? '.....' : ''}</h2>
                                    <h2 className='prouduct-price  leading-4 text-xl tracking-tight'> Rs {item.regular_price}</h2>
                                </div>
                            </article>

                        </main>
                    ))
                }
            </section>
        </Fragment>



    )
}
