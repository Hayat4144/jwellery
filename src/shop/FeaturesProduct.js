import React, { useEffect, useState } from 'react'

export default function FeaturesProduct() {
    const [product, setproduct] = useState([])


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
            <div className='lg:ml-10 card-container my-5 flex flex-wrap'>
                {product.map((product_item) => (
                    <div key={product_item.id} className='sm:w-44 sm:mx-3 md:w-56 lg:w-64 card bg-white rounded-lg shadow-lg w-36 mx-2 cursor-pointer mb-4 '>
                        <figure className='rounded-lg'>
                            <img src={`https://res.cloudinary.com/dwwequxd2/${product_item.image}`}
                                className='rounded-lg w-full h-44' />
                        </figure>
                        <div className='product-details mx-3 my-3'>
                            <span className='product-name block text-sm font-bold'>{product_item.name}</span>
                            <span className='product-description text-sm break-words'>{product_item.descriptions}</span>
                            <h3 className='price font-bold pb-3'><span className='price-symbol'>Rs</span>{product_item.regular_price}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
