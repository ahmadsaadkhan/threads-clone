import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import BottomBar from '@/components/shared/Bottombar';

export const metadata = {
  title: "Thresds",
  description: "A Next.Js 13 meta app threads application."
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
