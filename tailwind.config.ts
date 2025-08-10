import type { Config } from 'tailwindcss'

const colors = {
  black: '#000000',
  neonBlue: '#00f0ff',
  neonPink: '#ff00e6',
  neonPurple: '#a020f0',
}

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        inter: ['var(--font-inter)'],
        audiowide: ['var(--font-audiowide)'],
        poppins: ['var(--font-poppins)'],
        russo: ['var(--font-russo)'],
        montserrat: ['var(--font-montserrat)'],
        exo2: ['var(--font-exo2)'],
        rajdhani: ['var(--font-rajdhani)'],
      },
      boxShadow: {
        neon: `0 0 10px ${colors.neonBlue}, 0 0 20px ${colors.neonPink}, 0 0 30px ${colors.neonPurple}`,
        glow: `0 0 10px ${colors.neonBlue}`,
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: `0 0 8px ${colors.neonBlue}` },
          '50%': { boxShadow: `0 0 20px ${colors.neonPink}` },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        gradientMove: 'gradientMove 10s ease infinite',
        scanline: 'scanline 6s linear infinite',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle, rgba(0,240,255,0.15) 1px, rgba(0,0,0,0) 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
} satisfies Config
