import Image from 'next/image'
import React from 'react'

const CardViewHome = () => {
  return (
    <div className="p-4 border-[1px] border-[#E6E6E6] rounded-lg" >
      <Image
        height={50}
        width={50}
        src='/img/image-desain.png'
        alt='Ruang Keluarga'
        className="w-full rounded"
      />
      <div className="flex flex-col mt-6 gap-2">
        <div className="text-[#1A202C] text-[20px] font-bold">Ruang Keluarga</div>
        <div className="text-[14px]">2.0 x 2.9</div>
      </div>
    </div>
  )
}

export default CardViewHome