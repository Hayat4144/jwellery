import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '../../Component/Navbar'
import ShippingAddress from '../../shop/ShippingAddress'
import ChangeEmail from '../User/ChangeEmail'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function UserSettings() {
  const [message, setmessage] = useState('')
  const [CloseMessagebox, setCloseMessagebox] = useState(true)
  const [password, setoldPassword] = useState('')
  const [new_password, setnewpassword] = useState('')
  const [confirm_password, setconfirm_password] = useState('')
  const [oldpasswwordshow, setoldpasswwordshow] = useState(false)
  const [newpasswwordshow, setnewpasswwordshow] = useState(false)
  const [confirmpasswwordshow, setconfirmpasswwordshow] = useState(false)
  const [IsPasswordMatch, setIsPasswordMatch] = useState(true)
  const token = useSelector(state => state.Jwt_reducer.token)
  console.log(token)

  // close message box
  const CloseMessageboxFunc = () => {

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
        'Authorization': `Bearer ${token.access}`,
        'Content-type': "application/json"

      },

      body: JSON.stringify({
        password, new_password, confirm_password
      })
    })
      .then(async (res) => {

        const data = await res.json();
        const show_message = document.getElementById('message')
        const Success = () => {
          setconfirm_password('')
          setnewpassword('')
          setoldPassword('')
          setmessage(Object.values(data)[0]);
          show_message.style.display = 'flex';
          show_message.classList.add('text-green-700')
          show_message.classList.add('bg-green-200')
          setTimeout(() => {
            show_message.style.display = 'none'
            show_message.classList.remove('text-green-700')
            show_message.classList.remove('bg-green-200')

          }, 5000);
        }
        const Error = () => {
          setmessage(Object.values(data)[0]);
          show_message.style.display = 'flex'
          show_message.classList.add('text-red-700')
          show_message.classList.add('bg-red-200')
          // setCloseMessagebox(!CloseMessagebox)
          setTimeout(() => {
            show_message.style.display = 'none'
            show_message.classList.remove('text-red-700')
            show_message.classList.remove('bg-red-200')

          }, 5000);
        }
        res.status === 200 ? Success() : Error();

      })
      .catch((err) => {
        console.log(err)
      })
  }

  const Islogdin = useSelector((state) => state.Sign_in_reducer.IsLogdin);
  console.log(Islogdin)
  const navigate = useNavigate()
  useEffect(() => {

    if (!Islogdin) {
      navigate('/V2/auth/sign_in/')
    }

  }, [])
  return (
    <Fragment>
      <Helmet>
        <title>
          Taj Jwellery | Settings
        </title>
      </Helmet>
      <header className='settings-header'>
        <Navbar />
      </header>
      {/* change password section */}
      <section className='password-section  md:flex my-5 mx-5 border-b border-gray-300 pb-5'>
        <aside className='password-aside md:w-[40%]'>
          <h3 className='password-text-header text-xl'>Change Password</h3>
        </aside>
        <main className='bg-white rounded-md md:w-[80%] md:mr-10 my-2'>
          <form className='change-password form mx-5 pt-3' onSubmit={(e) => {
            e.preventDefault();
            PasswordChangeFunc();

          }}>
            <div id="message" className={`hidden messages  items-center py-2 px-2 text-[13px]  rounded-lg`}>
              <span className='message w-full '>{message}</span>
              {/* <IoIosCloseCircleOutline fontSize={'25px'} className='cursor-pointer' onClick={CloseMessageboxFunc} /> */}
            </div>
            <div className='larger-screen lg:flex lg:space-x-3 py-2 '>

              {/*  new password */}
              <div className='my-2 lg:w-[50%]'>
                <label htmlFor='Password' className='text-sm font-bold '>New Password</label>
                <div className='password mt-2 border flex  justify-between  items-center  border-gray-300 py-[2px] rounded-[4px]'>
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

              <div className='my-2 lg:w-[50%]'>
                <label htmlFor='Password' className='text-sm font-bold text-gray-700'>Re-enter Password</label>
                <div className='password mt-2  border flex  justify-between  items-center  border-gray-300 py-[2px] rounded-[4px]'>
                  <input type={confirmpasswwordshow ? 'text' : 'password'} required value={confirm_password} onChange={confirm_passwordChange} className=" px-2 py-[4px] bg-inherit outline-none  w-[15em]  placeholder-gray-700 
                        text-sm text-gray-700 border-none" placeholder='Re-enter your Password' />
                  <span className='text-sm mr-1 cursor-pointer' onClick={(e) => {
                    setconfirmpasswwordshow(!confirmpasswwordshow)
                  }}> {confirmpasswwordshow ? ' hide' : 'show'} </span>
                </div>
                <small className={` ${!IsPasswordMatch ? 'visible' : 'hidden'} password-not-match text-[13px] text-red-600`}>OOps Password doesn't match</small>
              </div>
            </div>


            {/* old password */}
            <div className='my-2 lg:w-[50%]'>
              <label htmlFor='Password' className='text-sm font-bold'>Old Password</label>
              <div className='password mt-2 border flex  justify-between  items-center  border-gray-300 py-[2px] rounded-[4px]'>
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

            <div className='sumbit-btn my-5 mb-5'>
              <button type='submit' className='w-24 h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-indigo-800 rounded-md hover:bg-indigo-900'>Submit</button>
            </div>
          </form>
        </main>
      </section>

      {/* change address sections */}
      <section className='address-section md:flex border-b border-gray-300 pb-5 mx-5 my-5 '>
        <aside className='address-aside md:w-[40%]'>
          <h3 className='address-text-header text-xl'>Change your Address</h3>
          <p className='text-sm my-2'>This address is used as dilivery address . Be carefull while changing your address.</p>
        </aside>
        <main className='md:w-[80%] md:mr-10 '>
          <ShippingAddress button_text="Save" />
        </main>
      </section>

      {/* Change email */}
      <section className='change-email-section md:flex border-b border-gray-300 pb-5 mx-5 my-5'>
        <aside className='change-email-aside md:w-[40%]'>
          <h3 className='change-email-aside-text text-xl'>Change your Email</h3>
          <p className='text-sm pr-5 my-2'>For security reasons,We will send a token to your previous email to verify your account.</p>
        </aside>
        <main className='md:w-[80%]  md:mr-10'>
          <ChangeEmail marginx="mx-0" md_width="w-full" button_width="w-full" button_background="bg-indigo-800" button_hover="bg-indigo-900" />
        </main>
      </section>
    </Fragment>
  )
}
