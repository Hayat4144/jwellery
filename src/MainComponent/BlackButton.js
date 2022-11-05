import React from 'react'

export default function BlackButton(props) {
  return (
    <button className='bg-gray-900 text-gray-400 hover:text-gray-300 px-4 h-10  hover:bg-slate-900 rounded-[8px] '>{props.name}
    <h5 className='flex items-center text-sm font-bold'></h5>
      </button>
  )
}
