import CardOtherDesain from "@/components/page/main/CardOtherDesain";
import Carousel from "@/components/page/main/Carousel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { sourceSansPro } from "@/libs/font";
import Image from "next/image";
import { DropdownIcon } from "../../public/svg";
import CardViewHome from "@/components/page/main/CardViewHome";
import Footer from "@/components/layout/Footer";



export default function Home() {
  return (
    <main className={`${sourceSansPro.variable} font-sourcesans`}>
      <div className="py-10 flex justify-center">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image
              src="/img/Logo.png"
              alt="Logo"
              height={42}
              width={100}
              className="h-[42px] w-auto"
            />
            <div className="font-semibold flex gap-8 items-center">
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
            <div className="flex items-center gap-4 font-semibold">
              <button className="px-4 py-[10px] rounded-md">Daftar</button>
              <button className="px-4 py-[10px] rounded-md bg-red-brand text-white">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[25px] flex justify-center">
        <div className="container">
          <Breadcrumbs />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className="flex justify-center py-[24px]">
        <div className="container">
          <div className='text-[#1A1A1A] text-[24px] font-bold'>Tampilan Rumah</div>
          <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-preview-home gap-x-9">
            <div className="grid grid-cols-3 mt-4 gap-4">
              {[1, 1, 1].map((data, key) =>
                <CardViewHome key={key} />
              )}
            </div>
            <div className="p-4 border-[#E6E6E6] border-[1px] rounded-2xl">
              <div className="font-semibold text-[24px]">Omah Apik 3</div>
              <div className="flex gap-1 mt-2 items-center">
                <Image
                  className="w-[28px] h-[28px] rounded-full"
                  src="/svg/logo-omah.svg"
                  height={28}
                  width={28}
                  alt="logo studio SAe"
                />
                <div className="text-[14px]">Studio SAe</div>
              </div>
              <div className="mt-4 text-[14px]">
                <div className="flex gap-6">
                  <div className="text-[#4D4D4D]">Jenis Rumah</div>
                  <div>Scandinavian</div>
                </div>
                <div className="flex gap-6 mt-2 items-center">
                  <div className="text-[#4D4D4D]">Tipe Desain</div>
                  <div className="text-red-brand flex gap-1 items-center">
                    <Image
                      className="w-[15px] h-[15px]"
                      src="/svg/check.svg"
                      height={15}
                      width={15}
                      alt="logo studio SAe"
                    />
                    <div>Dapat Dimodifikasi</div>
                  </div>
                </div>
              </div>
              <div className="grid mt-4 grid-cols-4 gap-5 py-4 border-t-[1px] border-b-[1px] border-[#E6E6E6]">
                <div className="flex flex-col items-center justify-center">
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
                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="w-auto h-[8px]"
                    src="/svg/dimension.svg"
                    height={18}
                    width={18}
                    alt="dimension"
                  />
                  <div className="text-[12px] text-center text-[#808080] mt-2">Luas Bangunan</div>
                  <div className="text-[14px]">112m²</div>
                </div><div className="flex flex-col items-center justify-center">
                  <Image
                    className="w-auto h-[8px]"
                    src="/svg/dimension.svg"
                    height={18}
                    width={18}
                    alt="dimension"
                  />
                  <div className="text-[12px] text-center text-[#808080] mt-2">Lantai</div>
                  <div className="text-[14px]"> 2</div>
                </div><div className="flex flex-col items-center justify-center">
                  <Image
                    className="w-auto h-[8px]"
                    src="/svg/dimension.svg"
                    height={18}
                    width={18}
                    alt="dimension"
                  />
                  <div className="text-[12px] text-center text-[#808080] mt-2">Kamar Tidur</div>
                  <div className="text-[14px]"> 4</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-4">
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
      <div className="flex justify-center py-10">
        <div className="container">
          <div className="text-[24px] font-semibold">
            Desain Lainnya oleh Studio SAe
          </div>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4 mt-6">
            {Array(4).fill('data').map((_, key) => (
              <CardOtherDesain key={key} />
            ))}
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
