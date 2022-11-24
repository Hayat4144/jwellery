
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    // all my states
    const [full_name, setfull_name] = useState('')
    const [mobile_no, setmobile_no] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirm_password, setconfpassword] = useState('')
    const [messages, setmessage] = useState('')
    const [showPassword1, setshowpassword1] = useState(false)
    const [showPassword2, setshowpassword2] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const navigate = useNavigate();


    const SingupFunc = async () => {
        setisLoading(true)
        await fetch('http://localhost:8000/auth/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name, mobile_no, email, confirm_password, password
            })
        })
            .then(async (res) => {
                setisLoading(false)
                const result = await res.json();
                const Success = () => {
                    const message_show = document.getElementById('message');
                    message_show.style.display = 'visible'
                    message_show.style.display = 'flex'
                    message_show.classList.add('text-green-700')
                    message_show.classList.add('bg-green-200')
                    setmessage(Object.values(result)[0]);
                    setTimeout(() => {
                        message_show.style.display = 'none';
                        message_show.classList.remove('text-greeen-700')
                        message_show.classList.remove('bg-green-200')
                        navigate('/V2/auth/sign_in')
                        setmessage('');
                    }, 2000)
                }
                const Error = () => {
                    const message_show = document.getElementById('message');
                    message_show.style.display = 'visible'
                    message_show.style.display = 'flex'
                    message_show.classList.add('text-red-700')
                    message_show.classList.add('bg-red-200')
                    setmessage(Object.values(result)[0]);
                    setTimeout(() => {
                        message_show.style.display = 'none';
                        message_show.classList.remove('text-red-700')
                        message_show.classList.remove('bg-red-200')
                        setmessage('')
                    }, 2000)
                }
                res.status === 200 ? Success() : Error();
            })
    }
    return (
        <div className='container mx-auto mb-10'>
            <div id="message" className=" md:w-[27%] hidden items-center space-x-3 py-3 my-4 mx-auto w-[90%] px-2 text-sm rounded-lg " role="alert">
                <span className='w-full'>{messages} </span><IoIosCloseCircleOutline className='text-[20px] cursor-pointer' />
            </div>
            <div className='mt-3 mb-2 text-2xl font-bold text-center logo'><h2>Taj Jwellery</h2></div>
            {/* forms */}
            <div className='forms lg:m-auto  sm:m-auto sm:w-[60%] lg:w-[30%] xl:w-[30%] bg-white mx-3 border-2 border-gray-200 rounded-md md:m-auto md:w-[50%]'>

                <div className='mx-5 mt-2 text-2xl font-bold create-account'>
                    <h2>Create an account</h2>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    SingupFunc();
                }}>
                    {/* Name field */}
                    <div className='mx-5 lg:mx-4 mt-[1em]'>
                        <label htmlFor='Name' className='text-sm font-bold text-gray-700'>Name</label>
                        <div className='Name my-2 border  border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={'text'} required value={full_name} onChange={(e) => { setfull_name(e.target.value) }} className=" px-2 py-[4px] bg-inherit w-full outline-none placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your full name' />
                        </div>
                    </div>

                    {/* email field */}
                    <div className='mx-5 lg:mx-4'>
                        <label htmlFor='email' className='text-sm font-bold text-gray-700'>Email</label>
                        <div className='email my-2 border border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={'email'} required value={email} onChange={(e) => { setemail(e.target.value) }} className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your email' />
                        </div>
                    </div>

                    {/* mobile no field */}
                    <div className='mx-5 lg:mx-4'>
                        <label htmlFor='Mobile' className='text-sm font-bold text-gray-700'>Mobile No.</label>
                        <div className='Mobile my-2 border border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={'text'} required value={mobile_no} onChange={(e) => { setmobile_no(e.target.value) }} className="px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your Mobile no.' />
                        </div>
                    </div>

                    {/* password field */}
                    <div className='mx-5 lg:mx-4'>
                        <label htmlFor='Password' className='text-sm font-bold text-gray-700'>Password</label>
                        <div className='password my-2 border flex  justify-between  items-center  border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={showPassword1 ? 'text' : 'password'} required value={password} onChange={(e) => { setpassword(e.target.value) }} className=" px-2 py-[4px] bg-inherit outline-none  w-[15em]  placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your Password' />
                            <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                setshowpassword1(!showPassword1)
                            }}> {showPassword1 ? ' hide' : 'show'} </span>
                        </div>
                    </div>

                    {/* confirm passowrd field */}
                    <div className='mx-5 lg:mx-4'>
                        <label htmlFor='Password' className='text-sm font-bold text-gray-700'>Re-enter Password</label>
                        <div className='password my-2 border flex justify-between items-center border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={showPassword2 ? 'text' : 'password'} required value={confirm_password} onChange={(e) => { setconfpassword(e.target.value) }} className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 w-[15em]
                        text-sm text-gray-700 border-none " placeholder='Re-enter your password' /> <span className='text-sm cursor-pointer mr-1' onClick={(e) => {
                                setshowpassword2(!showPassword2)
                            }}> {showPassword2 ? ' hide' : 'show'} </span>
                        </div>
                    </div>

                    {/* submit button */}
                    <div className='mx-5 mb-0 mt-5 lg:mx-4 W-[20em]'>
                        {!isLoading ? <button type='submit' className='w-full  px-6 py-1  mb-5 text-center text-white outline-none text-bold bg-indigo-800 rounded-md hover:bg-indigo-700'>Create an account</button> : <button type="button" className="inline-flex items-center justify-center py-2 mb-5 leading-4 text-sm shadow rounded-md text-white bg-indigo-800 hover:bg-indigo-900 w-full text-center transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="pacity-25 text-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing ...
                        </button>
                        }
                    </div>

                </form>


                <div className='mx-5 lg:mx-4 w-[20em] mb-4 break-words'>
                    <span className='text-xs'>By creating an account, you agree to Taj's <a className='text-blue-700 underline hover:text-[15px] cursor-pointer'>Conditions</a> of Use and Privacy Notice. </span>
                </div>
                <div className='mx-5 mb-5 lg:mx-4'>
                    <h2 className='text-sm'>Already have an account?<span className='px-3 hover:text-[15px] cursor-pointer text-blue-700 underline'><Link style={{ color: "inherit" }} to="/V2/auth/sign_in" >Sign in</Link></span></h2>
                </div>

            </div>
        </div>
    )
}
