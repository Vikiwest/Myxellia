import type { Metadata } from "next";
// import { Nunito_Sans } from "next/font/google"; 
import "./globals.css";
import Link from "next/link";
import Head from "next/head";


// const nunitoSans = Nunito_Sans({
//   subsets: ["latin"],
//   variable: "--font-nunito-sans",
// });

export const metadata: Metadata = {
  title: "Myxellia",
  description: "Myxellia Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
