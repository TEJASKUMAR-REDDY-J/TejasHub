"use client"
import { motion } from 'framer-motion'

type Entry = {
  period: string
  title: string
  org?: string
  bullets?: string[]
}

export default function Experience() {
  const education: Entry[] = [
    {
      period: '2023 – 2027',
      title: 'B.Tech in Electronics & Communication Engineering',
      org: 'PES University, Bengaluru',
      bullets: ['Minor in Computer Science Engineering (CSE) alongside core ECE coursework.'],
    },
  ]

  const professional: Entry[] = [
    {
      period: 'June, 2025 – July, 2025',
      title: 'Research Intern — Centre for Health Care',
      org: 'PES University, Bengaluru',
      bullets: [
        'Developed a cancer diagnosis system using Volatile Organic Compound (VOC) analysis.',
        'Identified 15 key biomarkers from 49 features while maintaining 91.7% diagnostic accuracy.',
        'Built multi-class models (Random Forest, LightGBM, XGBoost) with SMOTE balancing.',
      ],
    },
    {
      period: 'Nov, 2024 – Jan, 2025',
      title: 'Freelance Contributor — Broadstack (Remote)',
      bullets: [
        'Built AI knowledge assistants using LLMs, Agentic AI, and RAG frameworks.',
        'PDF-to-JSON pipeline using VLMs and CrewAI.',
        'Scalable data pipelines using LangGraph, ChromaDB, and Groq.',
      ],
    },
    {
      period: 'Oct, 2023 – Jan, 2024',
      title: 'App Developer Intern — Cisco ThingQbator, Cohort-6 (Remote)',
      bullets: [
        'Flutter-based mobile app for neurodivergent users with accessibility-first design.',
        'Responsive UI from Figma designs; ranked Top 10 teams nationwide among 200+.',
      ],
    },
  ]

  const por: Entry[] = [
    { period: 'Jan 2025 – Present', title: 'Secretary (Club Head)', org: 'IEEE Computer Society, PESU' },
    { period: 'Jan 2025 – Present', title: 'Treasurer (Club Head)', org: 'IEEE Robotics and Automation Society, PESU' },
    { period: 'Feb 2024 – Jan 2025', title: 'Events & Logistics Lead', org: 'IEEE RAS PESU' },
    { period: 'Jan 2024 – Jan 2025', title: 'Sponsorship Team Member', org: 'IEEE CS PESU' },
  ]

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-orbitron mb-6 text-white">
        Experience & Education
      </motion.h2>

      <TimelineBlock title="Education" entries={education} />
      <TimelineBlock title="Professional Experience" entries={professional} />
      <TimelineBlock title="Positions of Responsibility" entries={por} />

  <AchievementsBlock />
    </section>
  )
}

function TimelineBlock({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-orbitron text-white mb-4">{title}</h3>
      <div className="relative pl-6">
        <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonBlue/35 via-neonPink/25 to-neonPurple/25" aria-hidden />
        <ul className="space-y-5">
          {entries.map((e, idx) => (
            <motion.li key={idx} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.03 }}
              className="relative group">
              <span className="absolute left-[-6px] top-2 inline-block h-3 w-3 rounded-full bg-neonBlue shadow-[0_0_10px_#00f0ff] group-hover:scale-110 transition-transform" />
              <div className="rounded-lg border border-neonBlue/25 bg-black/60 p-4 hover:shadow-[0_0_14px_#00f0ff,0_0_24px_#ff00e6] transition-shadow">
                <div className="text-sm text-neonBlue">{e.period}</div>
                <div className="text-white font-semibold mt-1">{e.title}</div>
                {e.org && <div className="text-gray-400">{e.org}</div>}
                {e.bullets && e.bullets.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-gray-300 space-y-1">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AchievementsBlock() {
  const items = [
    {
      title: 'SAP Hackfest 2025 — Top 100',
      meta: '5000+ teams | Grand Finale: Aug 7, PSG iTech, Coimbatore',
      desc: 'Built GramSetuAI; recognized among the top 100 teams nationwide.',
    },
    {
      title: 'Terrathon 4.0 — Top 5',
      meta: '30 shortlisted from 150+ applications | PES University',
      desc: 'Project: GeoGenesis — selected among the top 5 teams.',
    },
  ]

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-orbitron text-white mb-4">Achievements</h3>
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="relative rounded-xl border border-neonBlue/30 bg-black/60 p-5 shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:shadow-[0_0_16px_#00f0ff,0_0_28px_#ff00e6] transition-shadow"
          >
            <div className="absolute -inset-px rounded-xl bg-gradient-to-tr from-neonBlue/10 via-neonPink/5 to-neonPurple/10 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-neonPink shadow-[0_0_10px_#ff00e6] animate-pulse" aria-hidden />
                <h4 className="text-white text-xl font-semibold font-orbitron">{a.title}</h4>
              </div>
              <div className="text-neonBlue mt-1 text-sm">{a.meta}</div>
              <p className="text-gray-300 mt-2">{a.desc}</p>
              <div className="mt-3 text-xs text-gray-400">Celebrating impact with a neon glow — always pushing the frontier.</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
