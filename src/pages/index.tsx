import Image from "next/image";
import { Inter } from "next/font/google";
import { sourceSansPro } from "@/libs/font";
import { twMerge as tw } from "tailwind-merge";
import { DropdownIcon } from "../../public/svg";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
      <div className="flex justify-center py-10">
        <div className="container">
          <div className="text-[24px] font-semibold">
            Desain Lainnya oleh Studio SAe
          </div>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4 mt-6">
            {[1, 1, 1, 1, 1, 1, 1].map((_, key) => (
              <div key={key}>
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
            ))}
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 bg-[#012846] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[130px]">
            <div>
              <Image
                src="/img/Logo.png"
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
                  <Image
                    className="w-[50px] h-[50px] rounded-full"
                    src="/img/image-desain.png"
                    height={50}
                    width={50}
                    alt="message"
                  />{" "}
                  <Image
                    className="w-[50px] h-[50px] rounded-full"
                    src="/img/image-desain.png"
                    height={50}
                    width={50}
                    alt="message"
                  />{" "}
                  <Image
                    className="w-[50px] h-[50px] rounded-full"
                    src="/img/image-desain.png"
                    height={50}
                    width={50}
                    alt="message"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <div className="font-bold text-[20px]">Produk & Layanan</div>
                <div className="mt-6 flex flex-col gap-2">
                  {[1, 1, 1, 1].map((e, key) => (
                    <div key={key}>Renovasi</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-bold text-[20px]">Tentang Kami</div>
                <div className="mt-6 flex flex-col gap-2">
                  {[1, 1, 1, 1].map((e, key) => (
                    <div key={key}>Renovasi</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-[30px] mt-[30px] xl:grid-cols-4">
            {[1, 1, 1, 1].map((_, key) => (
              <div key={key}>
                <div>Kredit Bangun Rumah</div>
                <div className="mt-4 flex gap-2">
                  <Image
                    className="w-[30px] md:h-[50px] md:w-[50px] h-[30px] rounded-full"
                    src="/img/image-desain.png"
                    height={50}
                    width={50}
                    alt="message"
                  />
                  <Image
                    className="w-[30px] md:h-[50px] md:w-[50px] h-[30px] rounded-full"
                    src="/img/image-desain.png"
                    height={50}
                    width={50}
                    alt="message"
                  />{" "}
                  <Image
                    className="w-[30px] md:h-[50px] md:w-[50px] h-[30px] rounded-full"
                    src="/img/image-desain.png"
                    height={50}
                    width={50}
                    alt="message"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[50px] flex justify-between items-center">
            <div className="flex gap-4">
              <div>Powered by :</div>
              <Image
                className="w-[71px] h-[71px] rounded-full"
                src="/img/image-desain.png"
                height={71}
                width={71}
                alt="message"
              />
            </div>
            <div>Copyright © 2023 SobatBangun. All rights reserved.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
