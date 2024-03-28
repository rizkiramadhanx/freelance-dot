import Image from 'next/image'
import React from 'react'

const CardOtherDesain = () => {
  return (
    <div>
      <div className="p-4 border-[#E6E6E6] border-[1px]  rounded-[8px]">
        <Image
          className="w-full rounded-[4px]"
          src="/img/image-desain.png"
          height={50}
          width={50}
          alt="image desain"
        />
        <div className="mt-6">
          <div className="flex gap-2 items-center">
            <div className="text-[#1A202C] leading-6 text-[20px] font-bold">
              Omah Apik
            </div>
            <div className="text-[14px] leading-[20px] py-1 px-3 rounded-2xl bg-[#F1F1F1]">
              Scandinavian
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Image
              className="w-[28px] h-[28px] rounded-full"
              src="/img/image-desain.png"
              height={28}
              width={28}
              alt="image desain"
            />
            <div>Studio SAe</div>
          </div>
          <div className="grid mt-4 grid-cols-4 gap-2 py-4 border-t-[1px] border-b-[1px] border-[#E6E6E6]">
            <div className="flex flex-col items-center justify-start">
              <Image
                className="w-auto h-[8px]"
                src="/svg/dimension.svg"
                height={18}
                width={18}
                alt="dimension"
              />
              <div className="text-[12px] text-center text-[#808080] mt-2">Dimensi Tanah</div>
              <div className="text-[14px]"> 15 x 8m</div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Image
                className="w-auto h-[15px]"

                src="/svg/luas.svg"
                height={18}
                width={18}
                alt="dimension"
              />
              <div className="text-[12px] text-center text-[#808080] mt-2">Luas Bangunan</div>
              <div className="text-[14px]">112m²</div>
            </div><div className="flex flex-col items-center justify-start">
              <Image
                className="w-auto h-[15px]"
                src="/svg/lantai.svg"
                height={18}
                width={18}
                alt="dimension"
              />
              <div className="text-[12px] text-center text-[#808080] mt-2">Lantai</div>
              <div className="text-[14px]"> 2</div>
            </div><div className="flex flex-col items-center justify-start">
              <Image
                className="w-auto h-[15px]"

                src="/svg/kamar.svg"
                height={18}
                width={18}
                alt="dimension"
              />
              <div className="text-[12px] text-center text-[#808080] mt-2">Kamar Tidur</div>
              <div className="text-[14px]"> 4</div>
            </div>
          </div>
          <div className="pt-4">
            <div className="flex flex-col gap-1">
              <div className="text-[14px]">Harga Desain</div>
              <div className="text-[24px] font-semibold">
                Rp. 32.500.000
              </div>
              <div className="text-[#808080] text-[14px]">
                Harga konstruksi mulai dari Rp 560.000.000
              </div>
            </div>
            <div className="mt-4 cursor-pointer hover:bg-red-brand hover:text-white text-red-brand border-red-brand border-[1px] py-2 px-4 rounded-md font-semibold flex justify-center">
              Lihat Detail
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardOtherDesain