import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import type { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Carousel = () => {

  const sliderRef = React.useRef<Slider | null>(null);

  const gotoNext = () => {
    sliderRef.current?.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className='relative'>
      <div className='w-full z-[99] top-0.5  h-full absolute px-3 flex justify-between'>
        <div className='flex h-full items-center'
          onClick={() => gotoPrev()}
        >
          <div className='md:p-4 p-2 bg-white border-[1px] border-[#F5333F]'>
            <Image
              alt='left'
              height={12}
              width={12}
              src='/svg/left.svg'
            />
          </div>
        </div>
        <div className='flex h-full items-center'
          onClick={() => gotoNext()}
        >
          <div className='md:p-4 p-2 bg-white border-[1px] border-[#F5333F]'><Image
            alt='left'
            height={12}
            width={12}
            src='/svg/right.svg'
          /></div>
        </div>

      </div>
      <Slider {...settings} ref={sliderRef}>
        <div className='max-h-[500px]'>
          <Image
            width={500}
            height={500}
            src='/img/scandinavia.png'
            className=' w-full'
            alt='carousel image'
          />
        </div>
        <div className='max-h-[500px]'>
          <Image
            width={500}
            height={500}
            src='/img/scandinavia.png'
            className='w-full'
            alt='carousel image'
          />
        </div>
        <div className='max-h-[500px]'>

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
  )
}

export default Carousel