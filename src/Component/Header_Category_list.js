import React, { Fragment } from 'react'

export default function Header_Category_list() {
  return (
    <Fragment>
      <div className='category-list bg-white flex items-center space-x-5 lg:space-x-12 w-full h-full px-5'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <div className='category-item text-center my-2'>
              <figure className='category-image'>
                <img src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' alt='pic' className='w-10 h-10 lg:w-20 lg:h-16' />
              </figure>
              <small className='category-name md:font-bold'>Jhumka</small>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}
