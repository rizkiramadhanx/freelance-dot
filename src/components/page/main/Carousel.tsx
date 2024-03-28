import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import type { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Carousel = () => {
  return (
    <div className='flex justify-center'>
      <div className='container'>
        <Slider {...settings}>
          <div className='bg-red-500 max-h-[500px]'>
            <Image
              width={500}
              height={500}
              src='/img/scandinavia.png'
              className=' w-full'
              alt='carousel image'
            />
          </div>
          <div className='bg-red-500 max-h-[500px]'>
            <Image
              width={500}
              height={500}
              src='/img/scandinavia.png'
              className='w-full'
              alt='carousel image'
            />
          </div>
          <div className='bg-red-500 max-h-[500px]'>

            <Image
              width={500}
              src='/img/scandinavia.png'
              height={500}
              className=' w-full'
              alt='carousel image'
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Carousel