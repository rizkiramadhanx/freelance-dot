import Image from "next/image";
import { Inter } from "next/font/google";
import { sourceSansPro } from "@/libs/font";

export default function Home() {
  return <main
  className={`${sourceSansPro.variable} font-sourcesans`}
  >

    Halo
  </main>;
}
