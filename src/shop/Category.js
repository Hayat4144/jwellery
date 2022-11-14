import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fetch_Category } from '../Context/action/Category_Action'

export default function Category(props) {
    const [categories, setcategories] = useState([])
    const dispatch = useDispatch()
    const { Category_details } = useSelector(state => state.Fetch_Category_reducer)
    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:8000/product/api/get_all_categories`)
                .then(async (res) => {
                    const data = await res.json();
                    dispatch(Fetch_Category(data))
                })
        }

        // call getData only when it is not in redux store
        if (Category_details.length < 1) {
            getData();
        }


    }, [])
    return (
        <div className={`category ${props.display} ${props.space} md:space-x-7`}>
            {
                Category_details.map((category_item,) => (
                    <ul className='item' key={category_item.id}>
                        <li className={`category_name my-3 list-none cursor-pointer`}
                            onClick={() => {
                            }}>{category_item.name}</li>
                    </ul>
                ))
            }

        </div>
    )
}
