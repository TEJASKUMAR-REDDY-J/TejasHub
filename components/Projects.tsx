"use client"
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Space-Grown: AI Agricultural Tool',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/Space-Grown-Empowering-Farmers-to-Grow-Exotic-Fruits-with-Geographic-Insights',
    description: 'An end-to-end ML pipeline leveraging satellite imagery (Sentinel/Landsat) and weather APIs to provide actionable recommendations for farmers. Includes CV algorithms for soil and crop suitability mapping, temporal analysis for growth stages, and interactive dashboards for insights.',
    tools: ['Python', 'OpenCV', 'TensorFlow', 'APIs', 'GeoTIFF', 'Plotly Dash'],
  },
  {
    title: 'GeoGenesis',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/GeoGenesis',
    description: 'SLAM-based large-area mapping from drone footage. Fuses hyperspectral bands with visual odometry to improve loop-closure robustness and site mapping precision.',
    tools: ['SLAM', 'OpenCV', 'ORB-SLAM', 'Python', 'Hyperspectral'],
  },
  {
    title: 'GramSetuAI',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/GramSetuAI',
    description: 'AI-powered rural connectivity and service platform that bridges data gaps, offers agentic task flows, and connects citizens to services with or without stable internet.',
    tools: ['AI', 'Flutter', 'Python', 'On-device ML'],
  },
  {
    title: 'Comparative Leukemia Classification',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/comparative-analysis-of-Leukemia-classification-based-on-activation-function',
    description: 'Comparative analysis of CNN activation functions (ReLU, LeakyReLU, ELU, GELU) for leukemia cell classification, yielding improved precision and calibration.',
    tools: ['CNN', 'TensorFlow', 'Python', 'Metrics'],
  },
  {
    title: 'VOC-Based Cancer Detection (Research)',
    link: undefined,
    description: 'Urinary VOC signature analysis for bladder/prostate cancer. Achieved 91.7% accuracy while reducing biomarkers from 49 to 15 without performance loss via feature selection.',
    tools: ['ML', 'Feature Selection', 'Healthcare AI', 'GC-MS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-orbitron mb-6 text-white">
        Projects
      </motion.h2>
      <div className="max-w-3xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
            className="mb-6"
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
