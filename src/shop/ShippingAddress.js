import React, { Fragment, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function ShippingAddress() {
    const [message, setmessage] = useState('')
    const [CloseMessagebox, setCloseMessagebox] = useState(true)
    const [Street_line, setStreet_line] = useState('')
    const [Area, setArea] = useState('')
    const [Mobile_No, setMobile_No] = useState('')
    const [State, setState] = useState('')
    const [City, setCity] = useState('')
    const [Country, setCountry] = useState('')
    const [postalcode, setpostalcode] = useState('')

    let number_pattern = /[^0-9]/g;
    let is_number = /[0-9]/g;


    const IsValidMobile_No = () => {
        const Ismobile = number_pattern.test(Mobile_No)
        if (Ismobile) {
            alert('Mobile number only contains number')
        }
        if (Mobile_No.length < 10 || Mobile_No.length > 10) {
            alert('Invalid mobile no.')
        }

    }
    const IsValidPostalCode = () => {
        if (number_pattern.test(postalcode)) {
            alert('Postal code only contains number')
        }
        if (postalcode.length < 6) {
            alert('invalid postal code')
        }
    }

    const IsNumberContains = (value, field) => {
        console.log(is_number.test(value))
        if (is_number.test(value)) {
            alert(`${field} does not contain any number`)
        }
    }

    const Street_lineChange = (e) => {
        setStreet_line(e.target.value)
        IsNumberContains(e.target.value,Street_line)
    }
    const AreaChange = (e) => {
        setArea(e.target.value)
    }

    const CityChange = (e) => {
        setCity(e.target.value)
        IsNumberContains(e.target.value,'City')
    }

    const StateChange = (e) => {
        setState(e.target.value)
        IsNumberContains(e.target.value,'State')
    }

    const CountryChange = (e) => {
        setCountry(e.target.value)
        IsNumberContains(e.target.value,'Country')
    }
    const MobileNoChange = (e) => {
        setMobile_No(e.target.value)
    }
    const PostalCodeChange = (e) => {
        setpostalcode(e.target.value)
    }






    // close message box
    const CloseMessageboxFunc = () => {
        setCloseMessagebox(!CloseMessagebox)
    }
    return (
        <Fragment>
            <div className='my-5 shipping-address-container px-3'>
                <h3 className='text-xl text-center my-2'>Shipping Address</h3>
                <form className='my-5' onSubmit={(e) => {
                    e.preventDefault();
                    IsValidMobile_No();
                    IsValidPostalCode();
                }}>
                    <div className='sm:mx-auto sm:w-[50%]  xl:mx-auto xl:w-[25%]  lg:mx-auto lg:w-[30%] shipping-form border md:w-[40%] md:m-auto border-light-white rounded-md bg-white mx-3 mb-6'>
                        <div id="message" className={`${CloseMessagebox ? 'hidden' : 'visible'} messages flex  bg-green-200 items-center py-2 px-2 mx-4  text-green-700 text-[13px] mt-3 rounded-lg`}>
                            <span className='message '>Hello This is Hayat ilyas from iqra public school.</span>
                            <IoIosCloseCircleOutline fontSize={'25px'} className='cursor-pointer' onClick={CloseMessageboxFunc} />
                        </div>
                        <div className='mx-4 my-2 Street-line1-field '>
                            <label htmlFor='Street-line1-input' className='text-sm font-medium text-gray-700'>Street line</label>
                            <div className='Streetline1-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} placeholder="Enter you Street line" required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>
                        <div className='mx-4 Street-line2-field '>
                            <label htmlFor='Street-line2-input' className='text-sm font-medium text-gray-700'>Area or Colony</label>
                            <div className='Streetline2-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} value={Area} onChange={AreaChange} placeholder="Enter Area or Colony" required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>
                        <div className='mx-4 mobile-field '>
                            <label htmlFor='mobile-input' className='text-sm font-medium text-gray-700'>Mobile No.</label>
                            <div className='mobile-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} value={Mobile_No} onChange={MobileNoChange} placeholder="Enter you Mobile no." required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>
                        <div className='mx-4 Postal-field '>
                            <label htmlFor='Postal-input' className='text-sm font-medium text-gray-700'>Postal code</label>
                            <div className='Postal-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} value={postalcode} onChange={PostalCodeChange} placeholder="Enter your Postal code" required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>
                        <div className='mx-4 City-field '>
                            <label htmlFor='City-input' className='text-sm font-medium text-gray-700'>City</label>
                            <div className='City-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} value={City} onChange={CityChange} placeholder="Enter you City" required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>
                        <div className='mx-4 State-field '>
                            <label htmlFor='State-input' className='text-sm font-medium text-gray-700'>State</label>
                            <div className='State-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} value={State} onChange={StateChange} placeholder="Enter your State" required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>
                        <div className='mx-4 Country-field '>
                            <label htmlFor='Country-input' className='text-sm font-medium text-gray-700'>Country</label>
                            <div className='Country-input border border-gray-200 rounded-md my-2 py-[2px]'>
                                <input type={'text'} value={Country} onChange={CountryChange} placeholder="Enter your Country" required className='bg-inherit w-[18.8em] px-2 py-[4px] outline-none text-sm text-gray-700 border-none' />
                            </div>
                        </div>

                        <div className='sumbit-btn my-5 mx-4 '>
                            <button type='submit' className='w-full h-8 px-6 mb-8 text-center text-white outline-none text-bold bg-slate-800 rounded-md hover:bg-slate-900'>Continue Shopping</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
