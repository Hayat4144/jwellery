import React, { Fragment, useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

export default function HomeSlider() {
    const [slideindex, setslideindex] = useState(0)
    const Product_image = [
        {
            "imagetumbnail": "/images/thumbnail-1.jpg",
            "id": "1"
        },
        {
            "imagetumbnail": "/images/thumbnail_2.jpg",
            "id": "2"
        },
        {
            "imagetumbnail": "/images/thumbnail_3.jpg",
            "id": "3"
        },
        {
            "imagetumbnail": "/images/thumbnail_4.jpg",
            "id": "4"
        },
    ]


    // next slide
    const nextSlide = () => {
        if (slideindex !== Product_image.length - 1) {
            setslideindex(slideindex + 1)
        }
        else if (slideindex === Product_image.length - 1) {
            setslideindex(0)
        }

    }

    // back slide
    const backslide = () => {
        if (slideindex === 0) {
            setslideindex(Product_image.length - 1)
        }
        else if (slideindex != Product_image.length - 1 || slideindex === Product_image.length - 1) {
            setslideindex(slideindex - 1)
        }
    }

    return (
        <Fragment>
            <section>
                <figure>
                    <img src={Product_image[slideindex].imagetumbnail} alt='pic' className='w-full h-80 lg:h-96' />
                </figure>
                {/* slider button */}
                <div className='w-full px-5 justify-between relative bottom-48 text-white font-bold text-2xl flex'>
                    <h3 className='cursor-pointer' onClick={() => {
                        backslide();
                    }}><BsArrowLeftCircle /></h3>
                    <h3 className='cursor-pointer' onClick={() => {
                        nextSlide();
                    }}><BsArrowRightCircle /></h3>
                </div>

            </section>

        </Fragment>
    )
}
