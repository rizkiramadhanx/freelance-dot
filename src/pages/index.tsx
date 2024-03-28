import CardOtherDesain from "@/components/page/main/CardOtherDesain";
import Carousel from "@/components/page/main/Carousel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { sourceSansPro } from "@/libs/font";
import Image from "next/image";
import { DropdownIcon } from "../../public/svg";
import CardViewHome, { TTypeCardViewHome } from "@/components/page/main/CardViewHome";
import Footer from "@/components/layout/Footer";
import CardDetail from "@/components/page/main/CardDetail";
import Navbar from "@/components/layout/Navbar";


const dataViewHome: TTypeCardViewHome[] = [{
  title: 'Ruang Keluarga',
  image: "/img/view/1.png",
  wide: "2.0 x 2.9"
},
{
  title: 'Kamar Tidur',
  image: "/img/view/2.png",
  wide: "4.0 x 3.9"
}, {
  title: 'Ruang Makan & Dapur',
  image: "/img/view/3.png",
  wide: "3.0 x 2.9"
}, {
  title: 'Ruang Kerja',
  image: "/img/view/1.png",
  wide: "2.0 x 2.9"
}, {
  title: 'Kamar Tidur',
  image: "/img/view/1.png",
  wide: "4.0 x 3.4"
}
]

export default function Home() {
  return (
    <main className={`${sourceSansPro.variable} font-sourcesans`}>
      <Navbar />
      <div className="pb-[25px] md:pt-[150px] pt-[100px] flex justify-center">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
              {dataViewHome.map((data, key) =>
                <CardViewHome
                  title={data.title}
                  wide={data.wide}
                  image={data.image} key={key} />
              )}
            </div>
            <div>
              <CardDetail />
              <div className="mt-8">
                <div className="text-[24px] text-[#1A1A1A] font-semibold">Testimoni</div>
                {Array(3).fill('').map((_, key) =>
                  <div key={key} className="mt-4">
                    <div className="flex items-start gap-5">
                      <Image
                        src='/svg/person.svg'
                        alt="person"
                        height={44}
                        width={44}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-[#1A1A1A]">Budi Setiadi</div>
                          <div className="flex items-center gap-1 border-l-[1px] pl-2 border-[#C5C7D0]">
                            <Image
                              src='/svg/stars.svg'
                              alt="starts"
                              height={12}
                              width={12}
                            />
                            <div className="text-[14px] mt-[2px] ">4.5</div>
                          </div>
                        </div>
                        <div className="text-[#666666]">Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun</div>
                      </div>
                    </div>
                  </div>)}

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
