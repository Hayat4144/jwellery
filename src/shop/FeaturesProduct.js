import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function FeaturesProduct() {
    const [product, setproduct] = useState([])
    const [isLoading,setisLoding] = useState(false)


    const people = [
        {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            image:
                'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            image:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            image:
                'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            image:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]


    const fetch_product = async () => {
        setisLoding(true)
        await fetch('http://localhost:8000/product/api/get_all_product', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(async (res) => {
                const result = await res.json();
                console.log(result)
                console.log('ok')
                //  console.log(product)
                setproduct(result)
                console.log(product[0])


            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetch_product();
    }, [])
    return (
        <main className="mx-5 feature-product">
            <header className='py-4 font-bold text-center uppercase'>Features Product</header>
            <p className='text-sm text-justify proudct-demo md:text-center md:mx-32'>These products are in high demand by our customers. They love it . These are finished product and you can use at any ocassion ,party , festival and function. </p>

            {/* card container */}
            <div className='flex flex-wrap my-5 lg:ml-10 card-container'>
                {isLoading ?'loading........' : product.map((product_item) => (
                    <div key={product_item.id} className='mx-2 mb-4 bg-white rounded-lg shadow-lg cursor-pointer sm:w-44 sm:mx-3 md:w-56 lg:w-64 card w-36 '>
                        <figure className='rounded-lg'>
                            <LazyLoadImage
                                className='rounded-md h-[10em]'
                                height={'10em'}
                                width={'100%'}
                                alt={'prodct-pic'}
                                effect="blur"
                                placeholderSrc={`https://res.cloudinary.com/dwwequxd2/${product_item.image}`}
                                 src={`https://res.cloudinary.com/dwwequxd2/${product_item.image}`}
                                 />
                        </figure>
                        <div className='mx-3 my-3 product-details'>
                            <span className='block text-sm font-bold product-name'>{product_item.name}</span>
                            <span className='text-sm break-words product-description'>{product_item.descriptions}</span>
                            <h3 className='pb-3 font-bold price'><span className='price-symbol'>Rs</span>{product_item.regular_price}</h3>
                    
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
