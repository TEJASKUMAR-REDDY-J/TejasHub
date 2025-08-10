"use client"
import { motion } from 'framer-motion'
import SkillsGrid from './SkillsGrid'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-orbitron mb-6 text-white">
        About Me
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-300 leading-relaxed font-inter">
        I’m passionate about Machine Learning, Deep Learning, and building Agentic AI systems. I love creating my own datasets and experimenting with computer vision, NLP, and robotics—always with an eye on impactful, real-world applications.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 mt-4 font-inter">
        Based in Bengaluru, but my WiFi is global.
      </motion.p>

      <div className="mt-10">
        <SkillsGrid />
      </div>
    </section>
  )
}
