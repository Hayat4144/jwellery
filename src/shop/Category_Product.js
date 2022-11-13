import React, { useState ,useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillStar } from 'react-icons/ai'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import FetureSkeleton from './FetureSkeleton';

export default function Category_Product({ data }) {
  const [categry_data, setcategry_data] = useState([])
  const [proudct_data,setproduct_data] = useState([])
  const [isLoading,setisLoading] = useState(false)
  // getting product by category
  const Proudct_By_Category = async () => {
    await fetch(`http://localhost:8000/product/api/get_all_product`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (res) => {
        const result = await res.json();
        setproduct_data(result);
      })
  }

  useEffect(() => {
    Proudct_By_Category();
  }, [])


  return (
    <div className='mx-2'>
         {/* card container */}
         <div className='flex flex-wrap my-5 lg:ml-10 card-container'>
                {!isLoading ? proudct_data.map((product_item) => (

                    <div key={product_item.id} className='mx-2  mb-4 bg-white rounded-lg shadow-lg cursor-pointer sm:w-[18em] sm:mx-auto md:w-[18em] lg:w-64 card w-[20em] '>
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
                            <span className='block text-sm text-gray-700 product-name'>{product_item.name}</span>
                            <span className='text-sm flex my-3  break-words product-reviews text-yellow-500'><AiFillStar fontSize={'20px'} /><AiFillStar fontSize={'20px'} /><AiFillStar fontSize={'20px'} /><AiFillStar fontSize={'20px'} /></span>
                            <div className='add-cart-price justify-between items-center flex'>
                                <h3 className='price'><span className='price-symbol px-1'>Rs</span>{product_item.regular_price}</h3>
                                <button className='bg-indigo-800 hover:bg-indigo-900   rounded-md text-sm text-white px-2 h-9'>Add to cart</button>
                            </div>


                        </div>
                    </div>
                )) : [1, 2, 3].map((loading) => (
                    <FetureSkeleton key={loading} />
                ))}
            </div>
    </div>
  )
}
