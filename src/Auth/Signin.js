import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Signin() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('')
    const [showPassword,setshowpassword]  = useState(false)

    const EmailChange = (e) => {
        setemail(e.target.value)
    }

    const PasswordChange = (e) => {
        setpassword(e.target.value)
    }

    const dispatch = useDispatch() ;

    const SigninFunc = async (e) => {
        await fetch('http://localhost:8000/api/token/signin/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
            .then(async (res) => {
                const result = await res.json();
                console.log(result)
                const messageShow = document.getElementById('message');
                console.log(result[0])
                const Success = () => {
                    console.log('ok')
                    setemail('')
                    setpassword('')
                    dispatch({type:"SIGNIN"})
                    messageShow.classList.add('text-green-700')
                    messageShow.classList.add('bg-green-100')
                    messageShow.style.display = 'block'
                    setmessage("signin successfull.")
                    setTimeout(() => {
                        setmessage('')
                        messageShow.style.display = 'none'
                        messageShow.classList.remove('text-green-7000')
                        messageShow.classList.remove('bg-green-100')
                    }, 3000)
                }
                const Error = () => {
                    console.log('bad')
                    setmessage(Object.values(result)[0])
                    messageShow.style.display = 'block'
                    messageShow.classList.add('bg-red-100')
                    messageShow.classList.add('text-red-700')
                    setTimeout(() => {
                        messageShow.style.display = 'none'
                        messageShow.classList.remove('text-red-700')
                        messageShow.classList.remove('bg-red-100')
                    }, 3000)
                }

                res.status === 200 ? Success() : Error();

            })

    }


    return (
        <div className='container mx-auto mb-10'>
            <div className='mt-5 text-center header-text'>
                <h2 className='text-2xl font-bold logo'>Taj Jwellery</h2>
                <h3 className='px-5 my-4 text-2xl font-semibold'>Sign in to your account</h3>
            </div>
            {/* input field */}
            <form onSubmit={(e) => {
                e.preventDefault();
                SigninFunc()
            }}>
                <div className='sm:mx-auto sm:w-[50%]  xl:mx-auto xl:w-[30%]  lg:mx-auto lg:w-[40%] signin-form border md:w-[50%] md:m-auto border-light-white rounded-md bg-white mx-10 mb-7'>

                    <div id="message" className='hidden messages text-center items-center py-2 w-[22em] h-10  mx-4  text-sm mt-3 rounded-lg'>
                        {message}</div>
                    <div className='py-4 mx-4 email-field '>
                        <label htmlFor='email-input' className='text-sm font-medium text-gray-700'>Email</label>
                        <div className='email-input border border-gray-200 rounded-md my-2 py-[2px]'>
                            <input type={'email'} placeholder="Enter you email" value={email} onChange={EmailChange} required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                        </div>

                    </div>


                    {/* password field */}
                    <div className='mx-4 mb-8 password-field'>
                        <label htmlFor='password-input' className='text-sm font-medium text-gray-700'>password</label>
                        <div className='email-input border border-light-white    rounded-md my-2 py-[2px]'>
                            <input type={showPassword ? 'text' :'password'} value={password} onChange={PasswordChange} placeholder="Enter you password" required className='bg-inherit w-[22em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            <span className='text-sm cursor-pointer' onClick={(e)=>{
                                setshowpassword(!showPassword)
                            }}>Show</span>
                        </div>

                        <div className='float-right mb-4 forget-password'>
                            <span className='text-sm text-indigo-600 cursor-pointer forget-password-link hover:text-indigo-700 hover:underline'>Forget your password?</span>
                        </div>
                    </div>

                    <div className='sumbit-btn mx-4 w-[20em]mb-5'>
                        <button type='submit' className='w-full h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-slate-800 rounded-md hover:bg-slate-900'>Sign in</button>
                    </div>
                </div>
            </form>

            <div className='create_new_account sm:mx-auto sm:w-[72%] md:m-auto md:w-[60%] xl: mx-auto xl:w-[35%] lg:m-auto  lg:w-[48%] text-center'>
                <div className='m-10 border-b border-b-light-white'>
                    <span className='text-sm  dont-account-text  text-[#767676]'>Don't have an account ?</span>
                </div>
                <div className='mx-10 new_accoutn_btn'>
                    <button to='/V2/auth/sign_up' className='w-full h-8 px-6 text-white account-btn hover:bg-slate-900 rounded-md bg-slate-800'>
                        <Link to="/V2/auth/sign_up">create new account</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
