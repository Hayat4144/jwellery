import React from 'react'

export default function Category_Product() {
    const categories_name = [
        {
            "nname": "Earings",
            "id": "1"
        },
        {
            "nname": "Bali",
            "id": "2"
        },
        {
            "nname": "Necklace",
            "id": "3"
        },
        {
            "nname": "Ring",
            "id": "4"
        },
    ]
    return (
        <div className='categories flex my-2  space-x-9'>
            {
                categories_name.map((category_item) => (
                    <div className='item ' key={category_item.id}>
                        <h3 className='category_name cursor-pointer underline text-indigo-700 hover:text-slate-800'>{category_item.nname}</h3>
                    </div>
                ))
            }
        </div>
    )
}
