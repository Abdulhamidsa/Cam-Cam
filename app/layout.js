import "../styles/global.css";
import Navbar from "../componetns/Navigation/Navbar";
import Footer from "../componetns/Footer/Footer";
import Head from "next/head";
import { Nanum_Myeongjo, Poppins } from "next/font/google";

const nanum_Myeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  variable: "--font-Nanum",
  weight: ["400"],
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nanum_Myeongjo.variable} ${poppins.variable}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
