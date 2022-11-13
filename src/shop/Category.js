import React, { useEffect, useState } from 'react'

export default function Category() {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:8000/product/api/get_all_categories`)
                .then(async (res) => {
                    const data = await res.json();
                    setcategories(data)
                })
        }
        getData();
    }, [])
    return (
        <div className='category md:flex space md:space-x-7'>
            {
                    categories.map((category_item) => (
                        <div className='item' key={category_item.id}>
                            <li className='category_name my-3 cursor-pointer'
                                onClick={() => {
                                }}>{category_item.name}</li>
                        </div>
                    ))
                }
        </div>
    )
}
