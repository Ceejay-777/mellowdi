import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ButtomNavBar from "@/components/navigation/buttomNavBar";
import SideNavBar from "@/components/navigation/sideNavBar";
import Welcome from "@/components/welcome";
import SearchProvider from "@/context/searchContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sfPro = localFont({
  src: './fonts/SF-Pro.ttf',
  variable: '--font-sfpro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MellowDi - Music streaming web app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="myLight">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfPro.variable} antialiased bg-secondary-light dark:bg-secondary-dark font-sans scrollbar-track-transparent scrollbar-thumb-zinc-500 scrollbar-track-rounded-full`}
      >
        <SearchProvider>
          <div className="max-w-screen h-full min-h-0 overflow-x-hidden overflow-y-auto ">
            <SideNavBar />
            <div className="h-screen bg-secondary-light dark:bg-secondary-dark pl-6 py-6 min-w-0 md:ml-56">
              <Welcome />
              {children}
            </div>
            <ButtomNavBar />
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
