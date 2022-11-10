
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


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


    const SingupFunc = async () => {
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
                console.log(res)
                const result = await res.json();
                const Success = () => {
                    console.log('ok');
                    setemail('')
                    setpassword('')
                    setmobile_no('')
                    setfull_name('')
                    setconfpassword('');
                    //debug
                    console.log(result)
                    const message_show = document.getElementById('message');
                    message_show.style.display = 'block'
                    setmessage(Object.values(result)[0]);

                    setTimeout(() => {
                        message_show.style.display = 'none';
                        setmessage('');
                    }, 2000)
                }
                const Error = () => {
                    console.log('bad')
                    console.log(result)
                    const message_show = document.getElementById('message');
                    message_show.style.display = 'block';
                    setmessage(Object.values(result)[0]);
                    setTimeout(() => {
                        message_show.style.display = 'none';
                        setmessage('')
                    }, 2000)
                }
                res.status === 200 ? Success() : Error();
            })
    }
    return (
        <div className='container mx-auto mb-10'>
            <div className='mt-3 mb-10 text-2xl font-bold text-center logo'><h2>Taj Jwellery</h2></div>

            {/* forms */}
            <div className='forms lg:m-auto  sm:m-auto sm:w-[60%] lg:w-[28%] bg-white mx-8 border-2 border-gray-200 rounded-md md:m-auto md:w-[50%]'>

                <div className='mx-5 mt-3 text-2xl font-bold create-account'>
                    <h2>Create an account</h2>
                </div>
                <div id="message" className=' hidden messages text-center items-center py-2 w-[20em]  text-green-100 h-10 bg-green-300 mx-5 mt-3 rounded-md'>
                    {messages}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    SingupFunc();
                }}>
                    {/* Name field */}
                    <div className='mx-5 mt-[1em]'>
                        <label htmlFor='Name' className='text-sm font-bold text-gray-700'>Name</label>
                        <div className='Name my-2 border border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={'text'} required value={full_name} onChange={(e) => { setfull_name(e.target.value) }} className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your First and Last name' />
                        </div>
                    </div>

                    {/* email field */}
                    <div className='mx-5'>
                        <label htmlFor='email' className='text-sm font-bold text-gray-700'>Email</label>
                        <div className='email my-2 border border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={'email'} required value={email} onChange={(e) => { setemail(e.target.value) }} className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your email' />
                        </div>
                    </div>

                    {/* mobile no field */}
                    <div className='mx-5'>
                        <label htmlFor='Mobile' className='text-sm font-bold text-gray-700'>Mobile No.</label>
                        <div className='Mobile my-2 border border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={'text'} required value={mobile_no} onChange={(e) => { setmobile_no(e.target.value) }} className="px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your Mobile no.' />
                        </div>
                    </div>

                    {/* password field */}
                    <div className='mx-5'>
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
                    <div className='mx-5'>
                        <label htmlFor='Password' className='text-sm font-bold text-gray-700'>Re-enter Password</label>
                        <div className='password my-2 border flex justify-between items-center border-gray-200 py-[2px] rounded-[4px]'>
                            <input type={showPassword2 ? 'text' : 'password'} required value={confirm_password} onChange={(e) => { setconfpassword(e.target.value) }} className=" px-2 py-[4px] bg-inherit outline-none placeholder-gray-700 w-[15em]
                        text-sm text-gray-700 border-none " placeholder='Re-enter your password' /> <span className='text-sm cursor-pointer mr-1' onClick={(e) => {
                                setshowpassword2(!showPassword2)
                            }}> {showPassword2 ? ' hide' : 'show'} </span>
                        </div>
                    </div>

                    {/* submit button */}
                    <div className='mx-5 W-[20em]'>
                        <button type='Submit' className='
                focus:outline-none md:w-[19em]  lg:w-full w-full mt-4 mb-8 text-center  px-6 bg-slate-800 hover:bg-slate-900 h-8 text-white rounded-md'>Submit</button>
                    </div>

                </form>


                <div className='mx-5 w-[20em] mb-4 break-words'>
                    <span className='text-xs'>By creating an account, you agree to Taj's <a className='text-blue-700 underline hover:text-[15px] cursor-pointer'>Conditions</a> of Use and Privacy Notice. </span>
                </div>
                <div className='mx-5 mb-5'>
                    <h2 className='text-sm'>Already have an account?<span className='px-3 hover:text-[15px] cursor-pointer text-blue-700 underline'><Link style={{ color: "inherit" }} to="/V2/auth/sign_in" >Sign in</Link></span></h2>
                </div>

            </div>
        </div>
    )
}
