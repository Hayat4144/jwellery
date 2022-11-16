import React, { Fragment, useState } from 'react'
import { MdSort } from 'react-icons/md'
import { FiFilter } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import Footer from '../Component/Footer'

export default function SearchProduct() {
  const [isSortOpen, setisSortOpen] = useState(false)
  const [isFilterOpen, setisFilterOpen] = useState(false)
  const [categoryOpen, setcategoryOpen] = useState(false)
  const [ColourOpen, setColourOpen] = useState(false)
  const [SizeOpen, setSizeOpen] = useState(false)
  const [filterOpne, setfilterOpen] = useState(false)
  const [PriceOpne, setPriceOpen] = useState(false)


  return (
    <Fragment>
      <div className='searchpage grid grid-rows-2 md:grid-cols-2'>
        {/* for mobile only */}
        <section className=' md:hidden filter-sort-for-mobile-only h-10 py-2 grid grid-cols-2 px-5'>
          <article className='sort'>
            <h3 className='flex items-center font-[500]'>Sort {isSortOpen ? <AiOutlineClose className='mx-2' onClick={() => { setisSortOpen(!setisSortOpen) }} fontSize={'20px'} /> : <MdSort onClick={() => { setisSortOpen(!isSortOpen) }} className='mx-2' fontSize={'22px'} />}</h3>
            <aside className={` ${isSortOpen ? 'visible' : 'hidden'} side-sort-menu z-2 bg-white absolute left-0  w-[15em] px-5`}>
              <form className='sort-form my-3 space-y-3'>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='relevance'>Relevance</label>
                  <input type={'checkbox'} id='relevance' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='low-to-high'>Price low-to-high</label>
                  <input type={'checkbox'} id='low-to-high' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='high-to-low'>Price high-to-low</label>
                  <input type={'checkbox'} id='high-to-low' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='new-arrivals'>New Arrivals</label>
                  <input type={'checkbox'} id='new-arrivals' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='discount'>Discount</label>
                  <input type={'checkbox'} id='discount' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='tranding'>Tranding</label>
                  <input type={'checkbox'} id='tranding' className='' />
                </div>
              </form>
            </aside>
          </article>

          <article className='filter'>
            <h3 className='flex items-center md:hidden  md:float-left float-right font-[500]'> Filter <FiFilter className='mx-2' fontSize={'20px'} onClick={() => {
              setfilterOpen(!isFilterOpen)
            }} /></h3>
            <aside className={` ${filterOpne ? 'visible' : 'hidden'} md:block bg-white px-5 z-2 filter-aside absolute left-36 w-56  top-14  h-screen`}>
              <h3 className='filter-text flex  border-b pb-3 border-gray-400 font-[500] text-xl justify-between items-center'><span className='pr-2'> Filter</span><AiOutlineClose className='md:hidden ' onClick={() => { setfilterOpen(!filterOpne) }} fontSize={'20px'} /></h3>
              <form className='filter-form my-4'>
                <div className='category border-b border-gray-400 pb-2'>
                  <h3 className='Category-text flex w-full  justify-between items-center'><span> Category</span>{!categoryOpen ? < BsPlus fontSize={'22px'} onClick={() => { setcategoryOpen(!categoryOpen) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setcategoryOpen(!categoryOpen) }} />} </h3>
                  <ul className={`${categoryOpen ? 'block' : 'hidden'} category-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Jhumka</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Bali</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Necklace</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Tops</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
                <div className='Colour my-3 border-b border-gray-400 pb-2'>
                  <h3 className='Colour-text flex w-full  justify-between items-center'><span> Colour</span> {!ColourOpen ? < BsPlus fontSize={'22px'} onClick={() => { setColourOpen(!ColourOpen) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setColourOpen(!ColourOpen) }} />}</h3>
                  <ul className={`${ColourOpen ? 'block' : 'hidden'} Colour-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Rani</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Silver</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Black</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>orange</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Pink</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Mahroon</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
                <div className='Size my-3 border-b border-gray-400 pb-2'>
                  <h3 className='Size-text flex w-full  justify-between items-center'><span>Size</span> {!SizeOpen ? <BsPlus fontSize={'22px'} onClick={() => { setSizeOpen(!SizeOpen) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setSizeOpen(!SizeOpen) }} />} </h3>
                  <ul className={`${SizeOpen ? 'block' : 'hidden'} Size-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Small</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Medium</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Large</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
                <div className='Price my-3 border-b border-gray-400 pb-2'>
                  <h3 className='Price-text flex w-full  justify-between items-center'><span>Price</span> {!PriceOpne ? <BsPlus fontSize={'22px'} onClick={() => { setPriceOpen(!PriceOpne) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setPriceOpen(!setPriceOpen) }} />} </h3>
                  <ul className={`${PriceOpne ? 'block' : 'hidden'} Price-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='Price-list-item'>15 - 20</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='Price-list-item'>20 - 40</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='Price-list-item'>40 -60</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
              </form>
            </aside>
          </article>
        </section>

        {/* for medium and large screen */}
        <section className='filter&sort-medium-large-screen  hidden md:block md:mx-5 lg:mx-14  md:my-5 md:w-[50%]'>
          <article className='sort rounded-md bg-white lg:w-[80%] '>
            <h3 className='flex  font-[500] justify-between items-center py-3 rounded-md mx-3 bg-white '>Sort By {isSortOpen ? <AiOutlineMinus className='mx-2' onClick={() => { setisSortOpen(!setisSortOpen) }} fontSize={'20px'} /> : <BsPlus onClick={() => { setisSortOpen(!isSortOpen) }} className='mx-2' fontSize={'22px'} />}</h3>
            <aside className={` ${isSortOpen ? 'visible' : 'hidden'} side-sort-menu z-2 bg-white px-5`}>
              <form className='sort-form my-3 space-y-3'>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='relevance'>Relevance</label>
                  <input type={'checkbox'} id='relevance' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='low-to-high'>Price low-to-high</label>
                  <input type={'checkbox'} id='low-to-high' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='high-to-low'>Price high-to-low</label>
                  <input type={'checkbox'} id='high-to-low' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='new-arrivals'>New Arrivals</label>
                  <input type={'checkbox'} id='new-arrivals' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='discount'>Discount</label>
                  <input type={'checkbox'} id='discount' className='' />
                </div>
                <div className='input-field flex items-center justify-between text-center'>
                  <label htmlFor='tranding'>Tranding</label>
                  <input type={'checkbox'} id='tranding' className='' />
                </div>
              </form>
            </aside>
          </article>

          {/* for filter */}
          <article className='filter my-5 rounded-md bg-white lg:w-[80%]'>
            <h3 className='flex items-center md:hidden  md:float-left float-right font-[500]'> Filter <FiFilter className='mx-2' fontSize={'20px'} onClick={() => {
              setfilterOpen(!isFilterOpen)
            }} /></h3>
            <aside className={` bg-white px-5 z-2 filter-aside rounded-md pb-5 `}>
              <h3 className='filter-text flex  border-b pb-3 border-gray-400 font-[500] text-xl justify-between items-center'><span className='pr-2'> Filter</span><AiOutlineClose className='md:hidden ' onClick={() => { setfilterOpen(!filterOpne) }} fontSize={'20px'} /></h3>
              <form className='filter-form my-4'>
                <div className='category border-b border-gray-400 pb-2'>
                  <h3 className='Category-text flex w-full  justify-between items-center'><span> Category</span>{!categoryOpen ? < BsPlus fontSize={'22px'} onClick={() => { setcategoryOpen(!categoryOpen) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setcategoryOpen(!categoryOpen) }} />} </h3>
                  <ul className={`${categoryOpen ? 'block' : 'hidden'} category-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Jhumka</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Bali</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Necklace</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Tops</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
                <div className='Colour my-3 border-b border-gray-400 pb-2'>
                  <h3 className='Colour-text flex w-full  justify-between items-center'><span> Colour</span> {!ColourOpen ? < BsPlus fontSize={'22px'} onClick={() => { setColourOpen(!ColourOpen) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setColourOpen(!ColourOpen) }} />}</h3>
                  <ul className={`${ColourOpen ? 'block' : 'hidden'} Colour-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Rani</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Silver</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Black</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>orange</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Pink</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Mahroon</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
                <div className='Size my-3 border-b border-gray-400 pb-2'>
                  <h3 className='Size-text flex w-full  justify-between items-center'><span>Size</span> {!SizeOpen ? <BsPlus fontSize={'22px'} onClick={() => { setSizeOpen(!SizeOpen) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setSizeOpen(!SizeOpen) }} />} </h3>
                  <ul className={`${SizeOpen ? 'block' : 'hidden'} Size-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Small</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Medium</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='category-list-item'>Large</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
                <div className='Price my-3 border-b border-gray-400 pb-2'>
                  <h3 className='Price-text flex w-full  justify-between items-center'><span>Price</span> {!PriceOpne ? <BsPlus fontSize={'22px'} onClick={() => { setPriceOpen(!PriceOpne) }} /> : <AiOutlineMinus fontSize={'22px'} onClick={() => { setPriceOpen(!setPriceOpen) }} />} </h3>
                  <ul className={`${PriceOpne ? 'block' : 'hidden'} Price-list-filter px-3 my-2`}>
                    <li className='text-sm flex items-center justify-between'><span className='Price-list-item'>15 - 20</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='Price-list-item'>20 - 40</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                    <li className='text-sm flex items-center justify-between'><span className='Price-list-item'>40 -60</span> <input type={'checkbox'} className="accent-indigo-800 w-6 h-4" /></li>
                  </ul>
                </div>
              </form>
            </aside>
          </article>
        </section>

        <section className='product-show  md:absolute md:left-[33%] md:w-[65%] bg-white'>
          product
        </section>

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Fragment>
  )
}
