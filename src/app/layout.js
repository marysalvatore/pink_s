import { Inter } from "next/font/google";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Head from 'next/head';

export const metadata = {
  title: "PinkSale - ",
  description: "The Launchpad Protocol for Everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="./icon.ico" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
