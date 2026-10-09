import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
// 1. استدعي مكتبة التوستر هنا
import { Toaster } from "react-hot-toast";
import MyProvider from "./_components/Provider/MyProvider";
import AOSProvider from "./AOS/AOSProvider";
import Footer from '../Footer/page';
import Providers from "./_components/TanStackProvider/TanStackProvider";
// استدعاء مزود AOS الذي قمنا بإنشائه

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karevo",
  description: "Karevo - clothing and accessories delivered to your door",
  icons: {
    icon: "/karevo-icon.svg", 
    apple: "/apple-icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning={true}
        className={`${poppins.className} font-sans min-h-full flex flex-col`}
      >
      
        <Providers>
          <MyProvider>
            {/* تم تغليف التطبيق بـ AOSProvider لتعمل الحركات في كل الصفحات */}
            <AOSProvider>
              <Navbar />
              {/* 2. حط التوستر هنا عشان يشتغل على مستوى المشروع كله */}
              <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                  // هنا بنحدد المدة بالمللي ثانية (5000 مللي ثانية = 5 ثواني)
                  duration: 5000,
                }}
              />
              {children}
            </AOSProvider>
          </MyProvider>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
