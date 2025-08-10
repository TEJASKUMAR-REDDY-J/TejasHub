"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiHuggingface } from 'react-icons/si'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* animated background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #00f0ff55, transparent 60%)'}} />
        <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #ff00e655, transparent 60%)'}} />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight neon-text font-orbitron">
            Tejaskumar Reddy J
          </h1>
          <p className="mt-4 text-lg text-gray-300 font-inter">
            AI/ML | Computer Vision | Agentic Systems
          </p>
          <p className="mt-6 text-gray-400 max-w-xl font-inter">
            I build intelligent systems, craft datasets, and explore real-world applications of AI that create impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <IconLink href="https://www.linkedin.com/in/tejaskumar-reddy-j-635624290/" label="LinkedIn"><FaLinkedin /></IconLink>
            <IconLink href="https://github.com/TEJASKUMAR-REDDY-J" label="GitHub"><FaGithub /></IconLink>
            <IconLink href="https://huggingface.co/Tejaskumar" label="Hugging Face"><SiHuggingface /></IconLink>
            <IconLink href="https://medium.com/@tejaskumar.jaikrishnan" label="Medium"><FaMedium /></IconLink>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-neonBlue/60 text-neonBlue hover:text-black hover:bg-neonBlue transition-colors rounded px-4 py-2 font-medium neon-border">
              Download Resume
            </a>
          </div>
        </div>
        <div className="relative">
          <motion.div whileHover={{ scale: 1.03 }} className="relative w-60 h-60 mx-auto rounded-full p-1 neon-border">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-neonBlue/20 via-neonPink/10 to-neonPurple/20 blur-2xl" />
            <div className="relative rounded-full overflow-hidden border border-neonBlue/60">
              {/* Placeholder profile image circle; user can replace public/profile.(jpg|png|svg) */}
              <Image src="/profile.svg" alt="Profile" width={512} height={512} className="object-cover w-60 h-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ scale: 1.06 }} className="text-gray-300 hover:text-neonBlue transition-colors p-2 rounded-md border border-transparent hover:border-neonBlue/40">
      {children}
    </motion.a>
  )
}
