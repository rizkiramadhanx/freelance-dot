import React, { useEffect, useState } from 'react'
import { DropdownIcon } from '../../../public/svg'
import Image from 'next/image'
import { twJoin } from 'tailwind-merge'

const Navbar = () => {

  const [onTop, setOnTop] = useState(false)
  
  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={twJoin("md:py-10 flex justify-center fixed z-[100] bg-white py-5 w-full",!onTop && "shadow-md transition-all") }>
      <div className="container ">
        <div className="flex justify-between items-center">
          <Image
            src="/img/Logo.png"
            alt="Logo"
            height={42}
            width={100}
            className="h-[30px] md:h-[42px] w-auto"
          />
          <div className="font-semibold md:flex gap-8 items-center hidden">
            <div className="flex gap-[13px] items-center">
              <div>Tentang Kami</div>
              <DropdownIcon />
            </div>
            <div className="flex gap-[13px] items-center">
              <div>Produk & Layanan</div>
              <DropdownIcon />
            </div>
            <div>Blog</div>
            <div>FAQ</div>
          </div>
          <div className="md:flex hidden items-center gap-4 font-semibold">
            <button className="px-4 py-[10px] rounded-md">Daftar</button>
            <button className="px-4 py-[10px] rounded-md bg-red-brand text-white">
              Masuk
            </button>
          </div>
          <div className='md:hidden'>
            <Image
              alt="hamburger"
              src="/svg/menu-humberger.svg"
              height={42}
              width={100}
              className="h-[30px] md:h-[42px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar