import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Store_Jwt_Succes } from '../Context/action/Token_Action'
import jwtDecode from 'jwt-decode'
import { User_Details } from '../Context/action/User_Action'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function Signin() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('')
    const [showPassword, setshowpassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const Islogdin = useSelector((state) => state.Sign_in_reducer.IsLogdin);
    const navigate = useNavigate()
    useEffect(() => {

        if (Islogdin) {
            navigate('/')
        }

    }, [])


    const EmailChange = (e) => {
        setemail(e.target.value)
    }

    const PasswordChange = (e) => {
        setpassword(e.target.value)
    }

    const dispatch = useDispatch();

    const decode_token = (token) => {
        try {
            const decoded_token = jwtDecode(token)
            console.log(decoded_token)
            delete decoded_token['token_type']
            delete decoded_token['exp']
            delete decoded_token['iat']
            delete decoded_token['jti']
            dispatch(User_Details(decoded_token))
        } catch (err) {
            console.log(err)
        }
    }

    const SigninFunc = async (e) => {
        setIsLoading(true)
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
                const messageShow = document.getElementById('message');
                const Success = () => {
                    setIsLoading(false)
                    // call signin action reducer 
                    decode_token(Object.values(result)[1])
                    dispatch({ type: "SIGNIN" })
                    // call Jwt_reducer to store the jwt token 
                    dispatch(Store_Jwt_Succes(result));
                    messageShow.style.display = 'visible'
                    messageShow.style.display = 'flex'
                    messageShow.classList.add('text-green-700')
                    messageShow.classList.add('bg-green-200')
                    setmessage("signin successfull.")
                    setTimeout(() => {
                        setmessage('')
                        messageShow.style.display = 'none'
                        messageShow.classList.remove('text-green-7000')
                        messageShow.classList.remove('bg-green-200')
                        navigate('/')
                    }, 3000)
                }
                const Error = () => {
                    setIsLoading(false)
                    setmessage('Invalid Email/Password')
                    messageShow.style.display = 'visible'
                    messageShow.style.display = 'flex'
                    messageShow.classList.add('bg-red-200')
                    messageShow.classList.add('text-red-700')
                    setTimeout(() => {
                        messageShow.classList.remove('text-red-700')
                        messageShow.classList.remove('bg-red-200')
                        messageShow.style.display = 'none'

                    }, 3000)
                }

                res.status === 200 ? Success() : Error();

            })

    }


    return (
        <div className='container mx-auto'>
            <div id="message" className=" md:w-[27%] hidden items-center space-x-3 py-3 my-4 mx-auto px-2 text-sm rounded-lg " role="alert">
                <span className='w-full'>{message} </span><IoIosCloseCircleOutline className='text-[20px] cursor-pointer' />
            </div>
            <div className='my-5 text-center header-text'>
                <h2 className='text-2xl font-bold logo'>Taj Jwellery</h2>
            </div>
            <div className='text-center page-text mb-5'>
                <h3 className='mx-4 py-1 text-3xl mt-3 font-[1000]'>Sign in to your account</h3>
            </div>

            {/* input field */}
            <form onSubmit={(e) => {
                e.preventDefault();
                SigninFunc()
            }}>
                <div className='sm:mx-auto sm:w-[50%] mt-4 xl:mx-auto xl:w-[30%]  lg:mx-auto lg:w-[25%] signin-form border md:w-[50%] md:m-auto border-gray-300 shadow-lg rounded-md bg-white mx-3 mb-2'>

                    <div className='mx-4 my-5 email-field '>
                        <label htmlFor='email-input' className='text-sm font-medium text-gray-700'>Email</label>
                        <div className='email-input border border-gray-300 rounded-md my-2 py-[2px]'>
                            <input type={'email'} placeholder="Enter you email" value={email} onChange={EmailChange} required className='active:border-indigo-600 bg-inherit focus:border w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                        </div>

                    </div>
                    {/* password field */}
                    <div className='mx-4 mb-8 password-field'>
                        <label htmlFor='password-input' className='text-sm font-medium text-gray-700'>password</label>
                        <div className='password-input border justify-between border-gray-300 flex items-center  rounded-md my-2 py-[2px]'>
                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={PasswordChange} placeholder="Enter you password" required className='bg-inherit w-[18em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                setshowpassword(!showPassword)
                            }}>{showPassword ? ' hide' : 'show'}</span>
                        </div>

                        <div className='float-right mb-4 forget-password'>
                            <span className='text-sm text-indigo-600 cursor-pointer forget-password-link hover:text-indigo-700 hover:underline'>Forget your password?</span>
                        </div>
                    </div>

                    <div className='sumbit-btn mx-2 lg:mx-4'>
                        {!isLoading ? <button type='submit' className='w-full h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-indigo-800 rounded-md hover:bg-indigo-700'>Sign in</button> : <button type="button" className="inline-flex items-center justify-center py-2 mb-5 leading-4 text-sm shadow rounded-md text-white bg-indigo-800 hover:bg-indigo-900 w-full text-center transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="pacity-25 text-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing ...
                        </button>
                        }
                    </div>
                </div>
            </form>

            <div className='create_new_account sm:mx-auto sm:w-[50%] mt-4 xl:mx-auto xl:w-[30%] lg:mx-auto lg:w-[25%] text-center mx-5'>
                <div className='m-8 border-b border-b-light-white'>
                    <span className='text-sm  dont-account-text  '>Don't have an account ?</span>
                </div>
                <div className='new_accoutn_btn'>
                    <button className='w-full bg-indigo-800 py-1 px-6 rounded-md mb-2 text-white hover:bg-indigo-900'><Link to="/V2/auth/sign_up">Create new account</Link></button>

                </div>
            </div>
        </div>
    )
}
