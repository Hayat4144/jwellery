import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function ForgetPassword() {
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [CloseMessagebox, setCloseMessagebox] = useState(true)

    const emailChange = (e) => {
        setemail(e.target.value)
    }

    // close message box
    const CloseMessageboxFunc = () => {
        setCloseMessagebox(!CloseMessagebox)
    }

    const ForgetPasswordFunc = async () => {
        await fetch('http://localhost:8000/forget/password', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(async (res) => {
                const data = await res.json();
                console.log(data)
                const show_message = document.getElementById('message')
                const Success = () => {
                    show_message.style.display = 'flex';
                    show_message.classList.add('text-green-700')
                    show_message.classList.add('bg-green-200')
                    setTimeout(() => {
                        show_message.style.display = 'none'
                        show_message.classList.remove('text-green-700')
                        show_message.classList.remove('bg-green-200')
                    }, 3000);
                }
                const Error = () => {
                    show_message.style.display = 'flex';
                    show_message.classList.add('text-red-700')
                    show_message.classList.add('bg-red-200')
                    setTimeout(() => {
                        show_message.style.display = 'none'
                        show_message.classList.remove('text-red-700')
                        show_message.classList.remove('bg-red-200')
                    }, 3000);
                }
                res.status === 200 ? Success() : Error();
            })
    }

    return (
        <Fragment>
            <div className='mb-10 mx-2'>
                <div className='mt-5 text-center header-text'>
                    <h1 className='text-4xl font-bold'>Taj jwellery</h1>
                    <h3 className='px-5 my-4 text-2xl font-semibold'>forgot Your Password</h3>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    ForgetPasswordFunc();
                }}>
                    <div className={`sm:mx-auto sm:w-[50%] md:w-[30%] signin-form border md  border-light-white rounded-md bg-white md: mb-6`}>
                        <div id="message" className={`${CloseMessagebox ? 'hidden' : 'visible'} messages flex  bg-green-200 items-center py-2 px-2 mx-4  text-green-700 text-[13px] mt-3 rounded-lg`}>
                            <span className='message '>Hello This is Hayat ilyas from iqra public school.</span>
                            <IoIosCloseCircleOutline fontSize={'25px'} className='cursor-pointer' onClick={CloseMessageboxFunc} />
                        </div>
                        <div className='py-4 mx-4 email-field '>
                            <label htmlFor='email-input' className='text-sm'>Email</label>
                            <div className='email-input border border-gray-300 rounded-md my-2 py-[2px]'>
                                <input type={'email'} placeholder="Enter you email" value={email} onChange={emailChange} required className='bg-inherit w-[18.8em] px-2 py-[4px] placeholder-gray-700 outline-none text-sm border-none' />
                            </div>
                        </div>

                        <div className='sumbit-btn mx-4 mb-5'>
                            <button type='submit' className={`w-full bg-indigo-800 hover:bg-indigo-900 h-8 px-6 mb-8 text-center text-white outline-none text-bold cursor-pointer  rounded-md `}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
