import Image from 'next/image'
import React from 'react'

export type TTypeCardViewHome = {
  image: string;
  title: string;
  wide: string
}

const CardViewHome = ({ image, title, wide }: TTypeCardViewHome) => {
  return (
    <div className="p-4 border-[1px] border-[#E6E6E6] rounded-lg" >
      <Image
        height={200}
        width={200}
        src={image}
        alt='Ruang Keluarga'
        className="w-full rounded"
      />
      <div className="flex flex-col mt-6 gap-2">
        <div className="text-[#1A202C] text-[20px] font-bold">{title}</div>
        <div className="text-[14px]">{wide}</div>
      </div>
    </div>
  )
}

export default CardViewHome