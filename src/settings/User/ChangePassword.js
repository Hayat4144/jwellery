import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
export default function ChangePassword() {
    const [message, setmessage] = useState('')
    const [CloseMessagebox, setCloseMessagebox] = useState(true)
    const [password, setoldPassword] = useState('')
    const [new_password, setnewpassword] = useState('')
    const [confirm_password, setconfirm_password] = useState('')
    const [oldpasswwordshow, setoldpasswwordshow] = useState(false)
    const [newpasswwordshow, setnewpasswwordshow] = useState(false)
    const [confirmpasswwordshow, setconfirmpasswwordshow] = useState(false)
    const [IsPasswordMatch, setIsPasswordMatch] = useState(true)

    // close message box
    const CloseMessageboxFunc = () => {
        setCloseMessagebox(!CloseMessagebox)
    }

    // oldpasswordChange
    const oldpasswordChange = (e) => {
        setoldPassword(e.target.value)
    }

    // newPasswordChange
    const newpasswordChange = (e) => {
        setnewpassword(e.target.value)
    }

    // confirm_passwordChange
    const confirm_passwordChange = (e) => {
        setconfirm_password(e.target.value)
        if (new_password != confirm_password) {
            setIsPasswordMatch(!IsPasswordMatch)
        }

    }

    // Change Password Function
    const PasswordChangeFunc = async () => {
        await fetch('http://localhost:8000/auth/api/Change/password', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                password, new_password, confirm_password
            })
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
            .catch(err => {
                console.log('bad');
                console.log(err)
            })
    }

    return (
        <Fragment>
            <div className='container mx-auto mb-10'>
                <div className='mt-5 text-center header-text'>

                    <h3 className='px-5 my-4 text-2xl font-semibold'>Change your Password</h3>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    PasswordChangeFunc();
                }}>
                    <div className='sm:mx-auto sm:w-[50%]  xl:mx-auto xl:w-[25%]  lg:mx-auto lg:w-[30%] signin-form border md:w-[40%] md:m-auto border-light-white rounded-md bg-white mx-8 mb-6'>
                        <div id="message" className={`${CloseMessagebox ? 'hidden' : 'visible'} messages flex  bg-green-200 items-center py-2 px-2 mx-4  text-green-700 text-[13px] mt-3 rounded-lg`}>
                            <span className='message '>{message}</span>
                            <IoIosCloseCircleOutline fontSize={'25px'} className='cursor-pointer' onClick={CloseMessageboxFunc} />
                        </div>
                        <div className='mx-5 my-2'>
                            <label htmlFor='Password' className='text-sm font-bold text-gray-700'>Old Password</label>
                            <div className='password mt-2 border flex  justify-between  items-center  border-gray-200 py-[2px] rounded-[4px]'>
                                <input type={oldpasswwordshow ? 'text' : 'password'} required value={password} onChange={oldpasswordChange} className=" px-2 py-[4px] bg-inherit outline-none  w-[15em]  placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your old Password' />
                                <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                    setoldpasswwordshow(!oldpasswwordshow)
                                }}> {oldpasswwordshow ? ' hide' : 'show'} </span>
                            </div>
                            <small className='forget-password float-right text-[12px] text-blue-800 cursor-pointer hover:text-[13px] hover:underline'>
                                Forgot Password ?
                            </small>

                        </div>
                        <div className='mx-5 my-2'>
                            <label htmlFor='Password' className='text-sm font-bold text-gray-700'>New Password</label>
                            <div className='password mt-2 border flex  justify-between  items-center  border-gray-200 py-[2px] rounded-[4px]'>
                                <input type={newpasswwordshow ? 'text' : 'password'} required value={new_password} onChange={newpasswordChange} className=" px-2 py-[4px] bg-inherit outline-none  w-[15em]  placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Enter your new password' />
                                <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                    setnewpasswwordshow(!newpasswwordshow)
                                }}> {newpasswwordshow ? ' hide' : 'show'} </span>
                            </div>
                            <small className='help-text text-[12px] text-gray-700'>
                                Your password must be 8-20 characters long.
                            </small>
                        </div>
                        <div className='mx-5 my-2'>
                            <label htmlFor='Password' className='text-sm font-bold text-gray-700'>Re-enter Password</label>
                            <div className='password mt-2  border flex  justify-between  items-center  border-gray-200 py-[2px] rounded-[4px]'>
                                <input type={confirmpasswwordshow ? 'text' : 'password'} required value={confirm_password} onChange={confirm_passwordChange} className=" px-2 py-[4px] bg-inherit outline-none  w-[15em]  placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Re-enter your Password' />
                                <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                                    setconfirmpasswwordshow(!confirmpasswwordshow)
                                }}> {confirmpasswwordshow ? ' hide' : 'show'} </span>
                            </div>
                            <small className={` ${!IsPasswordMatch ? 'visible' : 'hidden'} password-not-match text-[13px] text-red-600`}>OOps Password doesn't match</small>
                        </div>
                        <div className='sumbit-btn mx-4 my-5 mb-5'>
                            <button type='submit' className='w-full h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-slate-800 rounded-md hover:bg-slate-900'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
