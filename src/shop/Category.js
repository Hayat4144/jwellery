import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Fetch_Category } from '../Context/action/Category_Action'

export default function Category(props) {
    const [categories, setcategories] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:8000/product/api/get_all_categories`)
                .then(async (res) => {
                    const data = await res.json();
                    const l = dispatch(Fetch_Category(data))
                    console.log(l)
                    setcategories(data)
                })
        }
        getData();
    }, [])
    return (
        <div className='category flex mx-5 space-x-5 md:space-x-7'>
            {
                categories.map((category_item) => (
                    <ul className='item' key={category_item.id}>
                        <li className='category_name my-3 text-[18px]  hover:text-indigo-900 text-indigo-700 hover:underline list-none cursor-pointer'
                            onClick={() => {
                            }}>{category_item.name}</li>
                    </ul>
                ))
            }

        </div>
    )
}
