import { useState } from "react";
import React from "react";

export default function Password_change() {
    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [confirmpassword, setconfirmpassowrd] = useState('')
    const [shownewPassword, setshownewpassword] = useState(false)
    const [showconfirmpassword, setshowconfirmpassowrd] = useState(false)
    const [showoldPassword, setshowoldpassword] = useState(false)
    const [message, setmessage] = useState('')


    const oldpasswordchange = (e) => {
        setoldpassword(e.target.value)
    }

    const newpasswordchange = (e) => {
        setnewpassword(e.target.value)
    }

    const confirmpasswordpassowrdchange = (e) => {
        setconfirmpassowrd(e.target.value)
    }



    return (
        <div className='container mx-auto mb-10'>
            <div className='mt-5 text-center header-text'>
                <h3 className='px-5 my-4 text-2xl font-semibold'>Change Password</h3>
            </div>
            {/* input field */}
            <form onSubmit={(e) => {
                e.preventDefault();

            }}>
                <div className='signin-form border border-light-white rounded-md bg-white mx-8 mb-7'>
                    {/* message field */}
                    <div id="message" className='hidden messages text-center items-center py-2 w-[22em] h-10  mx-4  text-sm mt-3 rounded-lg'>
                        {message}
                    </div>

                    {/* old password field */}
                    <div className='py-4 mx-4 password-field '>
                        <label htmlFor='password-input' className='text-sm font-medium text-gray-700'>Old password</label>
                        <div className='password-input  border border-gray-200 flex justify-between rounded-md my-1 py-[2px]'>
                            <input type={showoldPassword ? 'text' : 'password'} placeholder="Enter your old password" value={oldpassword} onChange={oldpasswordchange} required className='bg-inherit w-[18em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                setshowoldpassword(!showoldPassword)
                            }}>{showoldPassword ? ' hide' : 'show'}</span>
                        </div>

                        <div className='float-right -translate-y-2 forget-password'>
                            <span className='text-sm text-indigo-600 cursor-pointer forget-password-link hover:text-indigo-700 hover:underline'>Forget your password?</span>
                        </div>
                    </div>


                    {/* new password field */}
                    <div className='mx-4 mb-3 password-field'>
                        <label htmlFor='password-input' className='text-sm font-medium text-gray-700'>New password</label>
                        <div className='password-input border border-light-white flex items-center justify-between rounded-md my-2 py-[2px]'>
                            <input type={shownewPassword ? 'text' : 'password'} value={newpassword} onChange={newpasswordchange} placeholder="Enter you password" required className='bg-inherit w-[18em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                setshownewpassword(!shownewPassword)
                            }}>{shownewPassword ? ' hide' : 'show'}</span>
                        </div>
                    </div>

                    {/* Re-Enter password */}
                    <div className='mx-4 mb-8 password-field'>
                        <label htmlFor='password-input' className='text-sm font-medium text-gray-700'>Re-Enter password</label>
                        <div className='password-input border border-light-white flex justify-between items-center  rounded-md my-2 py-[2px]'>
                            <input type={showconfirmpassword ? 'text' : 'password'} value={confirmpassword} onChange={confirmpasswordpassowrdchange} placeholder="Re-enter your password" required className='bg-inherit w-[14.5em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            <span className='text-sm  mr-1 cursor-pointer' onClick={(e) => {
                                setshowconfirmpassowrd(!showconfirmpassword)
                            }}>{showconfirmpassword ? ' hide' : 'show'}</span>
                        </div>
                    </div>

                    <div className='sumbit-btn mx-4 w-[20em]mb-5'>
                        <button type='submit' className='w-full h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-slate-800 rounded-md hover:bg-slate-900'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
