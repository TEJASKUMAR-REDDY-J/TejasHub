"use client"
import { motion } from 'framer-motion'

export type TimelineItem = { title: string; period?: string }

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neonBlue/40 to-neonPink/40" />
      <div className="space-y-8">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="relative md:grid md:grid-cols-2 md:gap-10"
          >
            <div className="md:text-right md:pr-10">
              <h3 className="text-xl font-semibold text-white font-orbitron">{item.title}</h3>
            </div>
            <div className="md:pl-10 text-neonBlue">
              {item.period}
            </div>
            </motion.div>
        ))}
      </div>
    </div>
  )
}
