"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Header />
      <Section title="Who I Am">
        <p>
          I’m <strong>Tejaskumar Reddy J</strong>, an AI/ML enthusiast currently pursuing my
          <strong> B.Tech in Electronics & Communication Engineering</strong> with a Minor in CSE at PES University, Bengaluru.
        </p>
        <p className="mt-3">
          I didn’t start off knowing I’d end up here — I joined ECE thinking it was the “safe” choice in a future where AI might replace jobs. But once I stepped into college, I discovered a whole new world through short-term courses led by seniors.
        </p>
        <p className="mt-3">
          From <strong>Flutter app development</strong> to <strong>TensorFlow</strong> to <strong>Agentic Systems</strong>, every course became more than just a skill — it was a gateway to projects, deep understanding, and mentorship.
        </p>
      </Section>

      <Divider />

      <Section title="What I Do Best">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Agentic Systems</strong> — designing autonomous, multi-step AI agents for complex workflows.</li>
          <li><strong>Classification in ML/DL</strong> — from data preprocessing to model optimization.</li>
          <li><strong>Unique Implementations</strong> — if I don’t know it, I’ll learn it.</li>
        </ul>
      </Section>

      <Divider />

      <Section title="Why I Stand Out">
        <p>I’m always looking for <strong>the twist</strong> — the unique way of implementing something that not everyone tries. I thrive on collaboration and building connections that lead to bigger, better ideas.</p>
      </Section>

      <Divider />

      <Section title="How I Fell for Agentic AI">
        <p>In my 3rd semester I thought Agentic AI was just “fancy chatbot tech.” Digging in showed it’s far more — systems that can <strong>act</strong>, <strong>decide</strong>, and <strong>adapt</strong>. That curiosity became a core strength.</p>
      </Section>

      <Divider />

      <Section title="My Dataset Obsession">
        <p>The moment I struggled to find datasets, I started making my own — often using Agentic concepts to collect and build them for specific, niche use cases.</p>
      </Section>

      <Divider />

      <Section title="Favourite Project">
        <p><strong>GramSetuAI</strong> is my proudest work — a fully Agentic Systems-based platform with integrated ML models and multiple use cases. It reflects my love for combining AI theory with real-world functionality.</p>
      </Section>

      <Divider />

      <Section title="Work Style">
        <p>I’m <strong>experimental</strong> and <strong>research-focused</strong>, starting with clean, minimal prototypes and iterating into refined, detailed implementations.</p>
      </Section>

      <Divider />

      <Section title="Future Goals">
        <p>In the next few years, I’ll be pushing boundaries in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Agentic AI</strong> — in academia, startups, or personal ventures.</p>
      </Section>

      <Divider />

      <Section title="Outside the Screen">
        <p>When I’m not in front of a terminal, I’m chasing my love for nature and bikes. Dream: greenery, hydroponics, aquaponics, rewilding architecture… while building the next generation of intelligent systems.</p>
      </Section>

      <Divider />

      <Section title="Mini Bio (Landing Page)">
        <blockquote className="border-l-2 pl-4 text-gray-300">
          <strong>AI/ML Engineer & Agentic AI Specialist</strong> | Builder of datasets, dreamer of futures.
          Passionate about creating autonomous systems, solving unique problems, and riding towards a greener, tech-powered tomorrow.
        </blockquote>
      </Section>
    </main>
  )
}

function Header() {
  return (
    <div className="mb-8">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-orbitron neon-text"
      >
        About Me
      </motion.h1>
      <p className="text-gray-400 mt-2">A clean, cyberpunk-flavored profile of who I am and what I love to build.</p>
      <div className="mt-3">
        <Link href="/" className="text-neonBlue underline">← Back to Home</Link>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-orbitron text-white"
      >
        {title}
      </motion.h2>
      <div className="mt-3 text-gray-300 font-inter leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function Divider() {
  return <div className="h-px w-full bg-gradient-to-r from-neonBlue/40 via-neonPink/30 to-neonPurple/30 my-6" />
}
