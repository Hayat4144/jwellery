import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function ChangeEmail(props) {
  const [newemail, setnewemail] = useState('')
  const [message, setmessage] = useState('')
  const [CloseMessagebox, setCloseMessagebox] = useState(true)

  const newemailChange = (e) => {
    setnewemail(e.target.value)
  }

  // close message box
  const CloseMessageboxFunc = () => {
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
      <div className='mb-10'>
        <div className='mt-5 text-center header-text'>

          {/* <h3 className='px-5 my-4 text-2xl font-semibold'>Change your Email</h3> */}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          // SigninFunc()
        }}>
          <div className={`sm:mx-auto sm:w-[50%]  signin-form border md:${props.md_width}  border-light-white rounded-md bg-white md:${props.marginx} mb-6`}>
            <div id="message" className={`${CloseMessagebox ? 'hidden' : 'visible'} messages flex  bg-green-200 items-center py-2 px-2 mx-4  text-green-700 text-[13px] mt-3 rounded-lg`}>
              <span className='message '>Hello This is Hayat ilyas from iqra public school.</span>
              <IoIosCloseCircleOutline fontSize={'25px'} className='cursor-pointer' onClick={CloseMessageboxFunc} />
            </div>
            <div className='py-4 mx-4 email-field '>
              <label htmlFor='email-input' className='text-sm'>Email</label>
              <div className='email-input border border-gray-300 rounded-md my-2 py-[2px]'>
                <input type={'email'} placeholder="Enter you email" value={newemail} onChange={newemailChange} required className='bg-inherit w-[18.8em] px-2 py-[4px] placeholder-gray-700 outline-none text-sm border-none' />
              </div>
            </div>

            <div className='sumbit-btn mx-4 mb-5'>
              <button type='submit' className={`md:w-24 ${props.button_width} h-8 px-6 mb-8 text-center text-white outline-none text-bold ${props.button_background} rounded-md hover:${props.button_hover}`}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}
