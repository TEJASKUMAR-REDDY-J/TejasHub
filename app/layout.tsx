import type { Metadata } from 'next'
import './globals.css'
import { cn } from '../lib/cn'
import { Inter, Orbitron, Audiowide, Poppins, Russo_One, Montserrat, Exo_2, Rajdhani } from 'next/font/google'
import Providers from '../components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const audiowide = Audiowide({ weight: '400', subsets: ['latin'], variable: '--font-audiowide' })
const poppins = Poppins({ weight: ['300','400','600'], subsets: ['latin'], variable: '--font-poppins' })
const russo = Russo_One({ weight: '400', subsets: ['latin'], variable: '--font-russo' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const exo2 = Exo_2({ weight: ['400','600'], subsets: ['latin'], variable: '--font-exo2' })
const rajdhani = Rajdhani({ weight: ['400','600'], subsets: ['latin'], variable: '--font-rajdhani' })

export const metadata: Metadata = {
  title: 'Tejaskumar Reddy J — Portfolio',
  description: 'AI/ML | Computer Vision | Agentic Systems',
  icons: {
  icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, orbitron.variable, audiowide.variable, poppins.variable, russo.variable, montserrat.variable, exo2.variable, rajdhani.variable, 'bg-black text-gray-200 relative overflow-x-hidden') }>
        <div className="body-bg" />
        <div className="grid-overlay" />
        <div className="scanline" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
