import Image from 'next/image'
import React from 'react'


const dataProduct = ["Renovasi", "Bangun Rumah", "Layanan Desain", "Teknologi Tambahan", "Beli Material"]
const dataAbout = ["Tentang SobatBangun", "Kebijakan Dan Privasi", "Syarat Dan Ketentuan", "FAQ", "Daftar Menjadi Mitra"]
const dataPayment = [{
  title: "Kredit Bangun Rumah",
  bank: ["mandiri", "btn", "bni"]
},
{
  title: "Tunai Via Bank Transfer",
  bank: ["mandiri", "bri", "bni", "permata"]
}, {
  title: "Kartu Kredit",
  bank: ["visa", "mastercard", "jcb"]
},
{
  title: "Rekan Teknologi Tambahan",
  bank: ["asco", "ineco", "adidaya", "agra"]
}
]

const Footer = () => {
  return (
    <div className="flex justify-center py-10 bg-[#012846] text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[130px]">
          <div>
            <Image
              src="/img/Logo-white.png"
              alt="Logo"
              height={42}
              width={100}
              className="h-[42px] w-auto"
            />
            <div className="mt-6">
              SobatBangun adalah platform digital dari SIG yang bergerak
              dengan misi mengembangkan proses pembangunan dan renovasi rumah
              secara lebih baik serta berkelanjutan.
            </div>
            <div className="flex mt-4 gap-2">
              <Image
                className="w-[24px] h-[24px] rounded-[4px]"
                src="/img/image-desain.png"
                height={50}
                width={50}
                alt="message"
              />
              <div className="underline">sobat@sobatbangum.com</div>
            </div>
            <div className="mt-4">
              <div>Sosial Media :</div>
              <div className="flex gap-[26px] mt-4">
                <div className='p-[18px] rounded-full bg-slate-600'>
                  <Image
                    className="w-[18px] h-[18px]"
                    src="/svg/instagram.svg"
                    height={18}
                    width={18}
                    alt="instagram"
                  />
                </div>
                <div className='p-[18px] rounded-full bg-white'>

                  <Image
                    className="w-[18px] h-[18px]"
                    src="/svg/facebook.svg"
                    height={18}
                    width={18}
                    alt="facebook"
                  /></div>
                <div className='p-[18px] rounded-full bg-white'>
                  <Image
                    className="w-[18px] h-[18px]"
                    src="/svg/youtube.svg"
                    height={18}
                    width={18}
                    alt="yt"
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="font-bold text-[20px]">Produk & Layanan</div>
              <div className="mt-6 flex flex-col gap-2">
                {dataProduct.map((e, key) => (
                  <div key={key}>{e}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-[20px]">Tentang Kami</div>
              <div className="mt-6 flex flex-col gap-2">
                {dataAbout.map((e, key) => (
                  <div key={key}>{e}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-[30px] mt-[30px] xl:grid-cols-4">
          {dataPayment.map((data, key) => (
            <div key={key}>
              <div className='font-semibold'>{data.title}</div>
              <div className="mt-3 flex gap-2">
                {data.bank.map((payment, key_bank) =>
                  <Image
                    key={key_bank}
                    className="w-[30px] md:h-[50px] md:w-[50px] h-[30px] rounded-full"
                    src={`/svg/bank/${payment}.svg`}
                    height={50}
                    width={50}
                    alt="message"
                  />
                )
                }
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[50px] flex justify-between items-center">
          <div className="flex gap-4">
            <div>Powered by :</div>
            <Image
              className="w-[71px] h-[71px] rounded-full"
              src="/svg/sig.svg"
              height={71}
              width={71}
              alt="message"
            />
          </div>
          <div>Copyright © 2023 SobatBangun. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer