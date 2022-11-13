import React from 'react'
import { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Category from '../shop/Category'
import { MdArrowDropDown } from 'react-icons/md'


export default function Navbar() {
    const [isOpen, setisOpen] = useState(false)
    const [isDropDownOpen, setisDropDownOpen] = useState(false)
    const Islogdin = useSelector((state) => state.Sign_in_reducer.IsLogdin);
    console.log(Islogdin)
    const user_name = useSelector((state) => state.User_Details_reducer.details.name);
    console.log(user_name)
    return (
        <nav className='flex items-center justify-between bg-slate-800 text-white h-14'>
            <div className='mx-3 hamburger md:order-2 md:hidden' onClick={() => {
                setisOpen(!isOpen)
            }}>
                <div className={`w-5 m-1 h-[1px]  transform transition duration-500 ease-in-out ${isOpen ? ' translate-y-1 -rotate-45' : ''} bg-white`} ></div>
                <div className={`w-5 m-1 h-[1px] bg-white transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 m-1 h-[1px] bg-white transform transition duration-500 ease-in-out ${isOpen ? ' rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>

            <div className='items-center logo md:order-1 lg:mx-20 md:mx-5 md:flex'>
                <h2 className='md:text-2xl'>Taj Jwellery</h2>

                <ul className='hidden main-menu md:mx-10 lg:mx-20 md:visible md:items-center md:flex space-x-5'>
                    <li className=' cursor-pointer'>Home</li>
                    <li className=' cursor-pointer'>About</li>
                    <li className=' cursor-pointer'>Contact</li>
                    <Category />
                </ul>

                <div className={`md:hidden ${!isOpen ? 'hidden' : 'visible'} text-black bg-white z-10 w-72 h-screen absolute top-6 left-0  bg:white my-8`}>

                    <ul className='h-12 py-2 mb-4 mx-5  text-black auth-header items-center flex bg-white md:hidden'>
                        <div className='aut-text-link-&-avtar flex  font-bold  '><FaUserCircle fontSize={'28px'} className="cursor-pointer" /><span className='capitalize cursor-pointer ml-10'>Hello , {Islogdin ? user_name : 'signin'}</span></div>
                    </ul>

                    <ul className='main-menu md:flex px-5 '>
                        <h2 className='font-bold accounts-settings font-2xl md:hidden'>Category</h2>
                        <Category />
                    </ul>

                    <ul className=' md:hidden text-black py-3'>
                        <h2 className='mx-5 font-bold accounts-settings font-2xl'>Account and Settings</h2>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Your Account</li>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Settings</li>
                        <Link to="/V2/auth/sign_up" className='px-5 py-2 mx-4 my-4 text-sm text-center text-white bg-indigo-800 outline-none cursor-pointer w-30 rounded-md hover:bg-indigo-900'>Sign up</Link>
                        <Link to="/V2/auth/sign_in" className='px-5 py-2 mx-4 my-4 text-sm text-center text-white bg-indigo-800 outline-none cursor-pointer w-30 rounded-md hover:bg-indigo-900'>Sign in</Link>
                    </ul>
                </div>
            </div>

            <div className='mx-4 cart md:order-3 md:mx-4 md:items-center lg:mx-10 md:flex space-x-4'>
                {/* accounts & list */}
                <div className='accounts-whishlist hidden md:block'>
                    <span className='signin text-[13px]'>Hello, Sign in</span>
                    <h3 className='text-[15px] translate -translate-y-1 font-bold md:flex' onMouseEnter={() => {
                        setisDropDownOpen(true)
                    }} >Accounts & List <MdArrowDropDown fontSize={'20px'} className="cursor-pointer translate-y-1" /> </h3>

                    {/* drop down list */}
                    <article className={`${isDropDownOpen ? 'md:block' : 'hidden'} absolute w-[25em] top-14 h-2/4 bg-white right-10`} onMouseLeave={() => {
                        setisDropDownOpen(false)
                    }}>
                        <div className='accounts text-black mx-10 w-3/4 text-center py-5 border-b border-gray-300'>
                            <button className='border-2 border-indigo-800 rounded-md shadow-md bg-indigo-800 px-11 w-3/5 py-1 text-white'><Link to="/V2/auth/sign_in">Sign in</Link></button>
                            <h3 className='new-account text-sm'>New customer ? <span className='text-blue-700 px-1 hover:text-blue-900 cursor-pointer'> <Link to='/V2/auth/sign_up'> Start here</Link></span></h3>
                        </div>
                        <section className='grid grid-cols-2 mx-10 my-5'>
                            <div className='list text-black'>
                                <h3 className='font-bold '>Your List</h3>
                                <ul className='space-y-1 my-3 text-slate-800'>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Create a list</li>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Find a list</li>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Share a list</li>
                                </ul>
                            </div>
                            <div className='account-details text-black'>
                                <h3 className='font-bold '>Account Details</h3>
                                <ul className='space-y-1 my-3 text-slate-800'>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Account</li>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Order & order history</li>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Purchase</li>
                                    <li className='text-sm hover:text-indigo-800 cursor-pointer hover:underline'>Settings</li>

                                </ul>
                            </div>
                        </section>
                    </article>
                    {/* end of drop downlist */}

                </div>
                <FaUserCircle fontSize={'28px'} className="hidden cursor-pointer md:block" />
                {Islogdin ? <Link to='/V2/auth/sign_in' className='hidden h-8 px-8 py-1 text-center text-white outline-none cursor-pointer bg-slate-800 rounded-md hover:bg-slate-900 hover:text-gray-200 md:block' type="button">Sign in</Link> : ''}
                <BsCart3 fontSize={'25px'} className='outline-none cursor-pointer hover:text-slate-500' /></div>
        </nav>
    )
}
