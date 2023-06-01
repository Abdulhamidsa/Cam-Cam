import "../styles/global.css";
import Navbar from "../componetns/Navigation/Navbar";
import Footer from "../componetns/Footer/Footer";
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
export const metadata = {
  title: "Cam Cam Copenhagen",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nanum_Myeongjo.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
