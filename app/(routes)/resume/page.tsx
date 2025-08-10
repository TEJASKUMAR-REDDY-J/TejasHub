export default function ResumePage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-neonBlue/60 text-neonBlue hover:text-black hover:bg-neonBlue transition-colors rounded px-5 py-3 font-medium neon-border">
        Open Resume PDF
      </a>
    </div>
  )
}
