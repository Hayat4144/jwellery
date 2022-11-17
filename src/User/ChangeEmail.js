import React, { Fragment, useState } from 'react'
import {IoIosCloseCircleOutline} from 'react-icons/io'

export default function ChangeEmail() {
  const [newemail, setnewemail] = useState('')
  const [message, setmessage] = useState('')
  const [CloseMessagebox, setCloseMessagebox] = useState(true)

  const newemailChange = (e) => {
    setnewemail(e.target.value)
  }

  // close message box
  const CloseMessageboxFunc = ()=>{
    setCloseMessagebox(!CloseMessagebox)
  }

  // email change function
  const EmailChangeFunc = async () => {
    await fetch('http://localhost:8000/user/api/change/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newemailChange })
    })
      .then(async (res) => {
        console('ok')
      })
      .catch((err) => {
        console.log('bad')
      })
  }

  

  return (
    <Fragment>
      <div className='container mx-auto mb-10'>
        <div className='mt-5 text-center header-text'>

          <h3 className='px-5 my-4 text-2xl font-semibold'>Change your Email</h3>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          // SigninFunc()
        }}>
          <div className='sm:mx-auto sm:w-[50%]  xl:mx-auto xl:w-[25%]  lg:mx-auto lg:w-[30%] signin-form border md:w-[40%] md:m-auto border-light-white rounded-md bg-white mx-8 mb-6'>
            <div id="message" className={`${CloseMessagebox ?'hidden' :'visible'} messages flex  bg-green-200 items-center py-2 px-2 mx-4  text-green-700 text-[13px] mt-3 rounded-lg`}>
              <span className='message '>Hello This is Hayat ilyas from iqra public school.</span>
              <IoIosCloseCircleOutline fontSize={'25px'} className='cursor-pointer' onClick={CloseMessageboxFunc} />
            </div>
            <div className='py-4 mx-4 email-field '>
              <label htmlFor='email-input' className='text-sm font-medium text-gray-700'>Email</label>
              <div className='email-input border border-gray-200 rounded-md my-2 py-[2px]'>
                <input type={'email'} placeholder="Enter you email" value={newemail} onChange={newemailChange} required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
              </div>
            </div>

            <div className='sumbit-btn mx-4 w-[20em]mb-5'>
              <button type='submit' className='w-full h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-slate-800 rounded-md hover:bg-slate-900'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}
