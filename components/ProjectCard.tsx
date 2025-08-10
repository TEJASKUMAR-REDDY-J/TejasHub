"use client"
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  tools: string[]
  features?: string[]
  link?: string
}

export default function ProjectCard({ title, description, tools, features, link }: Props) {
  return (
    <motion.div whileHover={{ y: -6, boxShadow: '0 0 18px #00f0ff, 0 0 36px #ff00e6' }} transition={{ type: 'spring', stiffness: 200, damping: 18 }} className="rounded-2xl border border-neonBlue/40 bg-black/50 p-6 md:p-8 transition-shadow">
      <h3 className="text-2xl md:text-3xl font-semibold text-white font-orbitron">{title}</h3>
      <p className="mt-3 text-base md:text-lg text-gray-300 font-inter leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-4 list-disc pl-6 space-y-1 text-gray-300" aria-label="Key features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="text-xs md:text-sm text-neonBlue border border-neonBlue/50 px-2.5 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-neonPink hover:text-white transition-colors underline"
        >
          View Repo / Paper
        </a>
      )}
    </motion.div>
  )
}
