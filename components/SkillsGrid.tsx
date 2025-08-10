"use client"
import { motion } from 'framer-motion'
import { FaPython, FaGit, FaDatabase, FaCuttlefish, FaFigma } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiDart, SiLangchain, SiApache } from 'react-icons/si'

const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C', icon: <FaCuttlefish /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  { name: 'CrewAI', icon: <SiLangchain /> },
  { name: 'LangGraph', icon: <SiLangchain /> },
  { name: 'ChromaDB', icon: <SiApache /> },
  { name: 'Groq', icon: <SiApache /> },
  { name: 'SLAM', icon: <SiApache /> },
  { name: 'NLP', icon: <SiApache /> },
  { name: 'Computer Vision', icon: <SiOpencv /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGit /> },
]

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((s) => (
        <motion.div
          key={s.name}
          whileHover={{ y: -4, boxShadow: '0 0 12px #00f0ff, 0 0 24px #ff00e6' }}
          className="flex items-center gap-2 p-3 rounded border border-neonBlue/30 bg-black/40 card-glow"
        >
          <span className="text-neonBlue text-xl">{s.icon}</span>
          <span className="text-gray-300 font-inter">{s.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
