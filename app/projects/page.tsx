"use client"
import { motion } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'
import { PROJECTS, DATASETS } from '../../lib/projects'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-10">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-orbitron neon-text">
          Projects & Research
        </motion.h1>
        <p className="text-gray-400 mt-2">AI, Agentic Systems, and Beyond — turning ideas into impact.</p>
        <div className="h-px w-full bg-gradient-to-r from-neonBlue/40 via-neonPink/30 to-neonPurple/30 mt-4" />
        <div className="mt-4">
          <Link href="/" className="text-neonBlue underline">← Back to Home</Link>
        </div>
      </header>

      <section>
        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}>
              <ProjectCard title={p.title} description={p.description} tools={p.tech} features={p.features} link={p.link} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl font-orbitron text-white">
          Custom Datasets
        </motion.h2>
        <p className="text-gray-300 mt-2">I often build my own datasets for niche and underrepresented AI applications:
          <br />— Motivation: public datasets rarely match specific goals
          <br />— Method: Agentic Systems to generate, collect, and refine
          <br />— Potential: enables high-accuracy, domain-specific models (including NLP for 2 Indic languages and a rural personas questionnaire with explainable answers). See my Hugging Face profiles for more.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {DATASETS.map((d) => (
            <div key={d.title} className="rounded-xl border border-neonBlue/30 p-4 bg-black/50">
              <h3 className="text-xl font-orbitron text-neonBlue">{d.title}</h3>
              <p className="text-gray-300 mt-1">{d.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
