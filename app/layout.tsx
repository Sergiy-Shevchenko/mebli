import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "А меблі",
  description: "Меблі на замовлення кухня шафа вітальня київ передмістя",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
        <Footer/>    
      </body>
    </html>
  );
}
