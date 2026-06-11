import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#120A2E',
          deep: '#0A0619',
        },
        navy: {
          DEFAULT: '#2B1060',
          mid: '#3A1878',
          light: '#4C2590',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#A6891E',
          muted: '#8B7233',
        },
        cream: {
          DEFAULT: '#F8F6F1',
          dark: '#EDE9E1',
        },
        muted: '#8A8F9E',
        'border-dark': '#3D1F6E',
        'border-light': '#E2DDD5',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem,5vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        h1: ['clamp(2.25rem,4vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem,3vw,2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.2rem,2vw,1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'fade-in': 'fade-in 0.6s ease forwards',
        'accordion-down': 'accordion-down 0.22s ease-out',
        'accordion-up': 'accordion-up 0.18s ease-in',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.65)', opacity: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
