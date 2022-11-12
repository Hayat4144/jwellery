import React from 'react'
import { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false)
    const Islogdin = useSelector((state) => state.Sign_in_reducer.IsLogdin);
    console.log(Islogdin)
    const user_name = useSelector((state)=> state.User_Details_reducer.details.name);
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
                <h2 className=''>Taj Jwellery</h2>

                <ul className='hidden main-menu md:mx-10 lg:mx-20 md:visible md:flex space-x-5'>
                    <li className='text-sm cursor-pointer'>Home</li>
                    <li className='text-sm cursor-pointer'>Tops</li>
                    <li className='text-sm cursor-pointer '>Jhumka</li>
                    <li className='text-sm cursor-pointer '>Bali</li>
                </ul>

                <div className={`md:hidden ${!isOpen ? 'hidden' : 'visible'} text-black bg-white z-10 w-72 h-screen absolute top-6 left-0  bg:white my-8`}>

                    <ul className='h-12 py-2 mb-4 mx-5  text-black auth-header items-center flex bg-white md:hidden'>
                        <div className='aut-text-link-&-avtar flex  font-bold  '><FaUserCircle fontSize={'28px'} className="cursor-pointer" /><span className='capitalize cursor-pointer ml-10'>Hello , {Islogdin? user_name: 'signin'}</span></div>
                    </ul>

                    <ul className='main-menu md:flex'>
                        <h2 className='mx-5 font-bold accounts-settings font-2xl md:hidden'>Earings and Necklace</h2>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Home</li>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Tops</li>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Jhumka</li>
                        <li className='px-5 my-4 text-sm cursor-pointer '>Bali</li>
                    </ul>

                    <ul className=' md:hidden text-black'>
                        <h2 className='mx-5 font-bold accounts-settings font-2xl'>Account and Settings</h2>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Your Account</li>
                        <li className='px-5 my-4 text-sm cursor-pointer'>Settings</li>
                        <Link to="/V2/auth/sign_up" className='px-5 py-2 mx-4 my-4 text-sm text-center text-white bg-indigo-800 outline-none cursor-pointer w-30 rounded-md hover:bg-indigo-900'>Sign up</Link>
                        <Link to="/V2/auth/sign_in" className='px-5 py-2 mx-4 my-4 text-sm text-center text-white bg-indigo-800 outline-none cursor-pointer w-30 rounded-md hover:bg-indigo-900'>Sign in</Link>
                    </ul>
                </div>
            </div>

            <div className='mx-4 cart md:order-3 md:mx-4 lg:mx-10 md:flex space-x-4'>
                {/* <FaUserCircle fontSize={'28px'} className="hidden cursor-pointer md:block" /> */}
                {/* <div className='serch hidden md:block  border border-gray-200 py-[2px] rounded-[4px]'>
                    <input type={'text'} required className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 text-sm text-gray-700 border-none" placeholder='Search the website' />
                </div> */}
                {Islogdin ? <Link to='/V2/auth/sign_in' className='hidden h-8 px-8 py-1 text-center text-white outline-none cursor-pointer bg-slate-800 rounded-md hover:bg-slate-900 hover:text-gray-200 md:block' type="button">Sign in</Link>: ''}
                <BsCart3 fontSize={'22px'} className='outline-none cursor-pointer hover:text-slate-500' /></div>
        </nav>
    )
}
