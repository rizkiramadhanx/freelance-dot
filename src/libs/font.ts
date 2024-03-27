import localFont from "next/font/local";

export const sourceSansPro = localFont({
  variable: "--font-sans-local-pro",
  src: [
    {
      path: "./../styles/font/SourceSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../styles/font/SourceSansPro-Semibold.ttf",
      weight: "500",
      style: "semibold",
    },
  ],
});
