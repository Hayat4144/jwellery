import React from 'react'
import { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sign_in_reducer from '../Context/reducer/Sign_in_reducer'

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false)
    const Islogdin = useSelector((state) => state.Sign_in_reducer.IsLogdin);
    console.log(Islogdin)
    return (
        <nav className='flex items-center h-14 bg-white justify-between'>
            <div className='hamburger mx-3 md:order-2 md:hidden' onClick={() => {
                setisOpen(!isOpen)
            }}>
                <div className={`w-5 m-1 h-[1px]  transform transition duration-500 ease-in-out ${isOpen ? ' translate-y-1 -rotate-45' : ''} bg-black`} ></div>
                <div className={`w-5 m-1 h-[1px] bg-black transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 m-1 h-[1px] bg-black transform transition duration-500 ease-in-out ${isOpen ? ' rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>

            <div className='logo md:order-1 lg:mx-20 md:mx-5 md:flex items-center'>
                <h2 className='text-black'>Taj Jwellery</h2>

                <ul className='main-menu md:mx-10 lg:mx-20 hidden md:visible md:flex space-x-5'>
                    <li className='cursor-pointer  text-sm'>Home</li>
                    <li className='cursor-pointer  text-sm'>Tops</li>
                    <li className=' cursor-pointer text-sm'>Jhumka</li>
                    <li className=' cursor-pointer text-sm '>Bali</li>
                </ul>

                <div className={`md:hidden ${!isOpen ? 'hidden' : 'visible'} text-black bg-white w-72 h-screen absolute top-6 left-0  bg:white my-8`}>

                    <ul className='auth-header mb-4 bg-slate-800 md:hidden text-white h-12 py-2'>
                        <div className='aut-text-link-&-avtar flex mx-5 font-bold items-center justify-around'><FaUserCircle fontSize={'28px'} className="cursor-pointer" /><span className='cursor-pointer'>Hello , Sign in</span></div>
                    </ul>

                    <ul className='main-menu md:flex'>
                        <h2 className='accounts-settings mx-5 font-2xl font-bold md:hidden'>Earings and Necklace</h2>
                        <li className='cursor-pointer px-5 my-4 text-sm'>Home</li>
                        <li className='cursor-pointer px-5 my-4 text-sm'>Tops</li>
                        <li className='px-5 my-4 cursor-pointer text-sm'>Jhumka</li>
                        <li className='px-5 my-4 cursor-pointer text-sm '>Bali</li>
                    </ul>

                    <ul className=' md:hidden text-black border-b-[1px]  border-gray-300 '>
                        <h2 className='accounts-settings mx-5 font-2xl font-bold'>Account and Settings</h2>
                        <li className='cursor-pointer text-sm px-5 my-4'>Your Account</li>
                        <li className='cursor-pointer text-sm px-5 my-4'>Settings</li>
                        <Link to="/V2/auth/sign_up" className='cursor-pointer text-sm px-5 my-4 bg-indigo-800 mx-4 w-30 rounded-md text-white py-2 text-center outline-none hover:bg-indigo-900'>Sign up</Link>
                        <Link to="/V2/auth/sign_in" className='cursor-pointer text-sm px-5 my-4 bg-indigo-800 mx-4 w-30 rounded-md text-white py-2 text-center outline-none  hover:bg-indigo-900'>Sign in</Link>
                    </ul>
                </div>
            </div>

            <div className='cart mx-4 md:order-3 md:mx-4 lg:mx-10 md:flex space-x-4'>
                {/* <FaUserCircle fontSize={'28px'} className="cursor-pointer hidden md:block" /> */}
                {/* <div className='serch hidden md:block  border border-gray-200 py-[2px] rounded-[4px]'>
                    <input type={'text'} required className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 text-sm text-gray-700 border-none" placeholder='Search the website' />
                </div> */}
                {Islogdin ? <Link to='/V2/auth/sign_in' className='bg-slate-800 py-1 rounded-md text-center h-8 px-8 text-white cursor-pointer hover:bg-slate-900 outline-none hover:text-gray-200 hidden md:block' type="button">Sign in</Link>: ''}
                <BsCart3 fontSize={'22px'} className='cursor-pointer outline-none hover:text-slate-500' /></div>
        </nav>
    )
}
