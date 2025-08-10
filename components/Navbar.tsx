"use client"
import Link from 'next/link'
import type { Route } from 'next'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

export default function Navbar() {
  const navItems: { href: string | Route; label: string }[] = [
    { href: '/' as Route, label: 'Home' },
    { href: '/about' as Route, label: 'About' },
    { href: '/projects' as Route, label: 'Projects' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-cyan-500/20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-orbitron text-neonBlue text-lg tracking-widest neon-text">
          <motion.span whileHover={{ scale: 1.05 }}>TRJ</motion.span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isInternal = typeof item.href === 'string' && item.href.startsWith('/')
            if (isInternal) {
              return (
                <Link key={String(item.href)} href={item.href as Route} className="text-gray-300 hover:text-white transition-colors">
                  <motion.span whileHover={{ y: -2 }}>{item.label}</motion.span>
                </Link>
              )
            }
            return (
              <motion.a key={String(item.href)} href={String(item.href)} whileHover={{ y: -2 }} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </motion.a>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <IconLink href="https://github.com/TEJASKUMAR-REDDY-J" ariaLabel="GitHub"><FaGithub /></IconLink>
          <IconLink href="https://www.linkedin.com/in/tejaskumar-reddy-j-635624290/" ariaLabel="LinkedIn"><FaLinkedin /></IconLink>
          <IconLink href="https://huggingface.co/Tejaskumar" ariaLabel="Hugging Face Profile"><SiHuggingface /></IconLink>
          <IconLink href="https://huggingface.co/Raw-Pulse" ariaLabel="Hugging Face Org"><SiHuggingface /></IconLink>
          <IconLink href="https://medium.com/@tejaskumar.jaikrishnan" ariaLabel="Medium"><FaMedium /></IconLink>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 border border-neonBlue/60 text-neonBlue hover:text-black hover:bg-neonBlue transition-colors rounded px-3 py-1 text-sm font-medium neon-border">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  )
}

function IconLink({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} whileHover={{ scale: 1.12 }} className="text-gray-300 hover:text-neonBlue transition-colors p-2 rounded-md border border-transparent hover:border-neonBlue/40">
      {children}
    </motion.a>
  )
}
