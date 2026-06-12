'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Shield, Star, Clock } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/motion'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const trustItems = [
  { icon: Shield, text: 'Dados 100% seguros' },
  { icon: Star, text: 'Atendimento 5 estrelas' },
  { icon: Clock, text: 'Resposta em até 24h' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink"
      aria-label="Apresentação"
    >
      {/* Animated orbs */}
      <div
        aria-hidden="true"
        className="orb orb-1 w-[700px] h-[700px] bg-navy opacity-80 -top-48 -left-48"
      />
      <div
        aria-hidden="true"
        className="orb orb-2 w-[500px] h-[500px] bg-gold opacity-[0.07] -bottom-20 -right-20"
      />
      <div
        aria-hidden="true"
        className="orb orb-3 w-[400px] h-[400px] bg-navy-mid opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-texture" aria-hidden="true" />

      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 section-container py-36 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Pill badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-gold text-gold text-xs font-sans font-semibold tracking-widest uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0"
                aria-hidden="true"
              />
              Escritório Contábil · São Paulo · Desde 2015
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-display text-cream max-w-4xl mb-6 text-balance"
          >
            Contabilidade que impulsiona o{' '}
            <span className="gradient-text">crescimento</span>{' '}
            do seu negócio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-cream/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Soluções contábeis personalizadas para MEIs, startups e empresas em crescimento. Mais de 9 anos organizando o financeiro de quem empreende em São Paulo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WaIcon />
              Falar com especialista
            </a>
            <a href="#servicos" className="btn-ghost-light">
              Ver nossos serviços
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {trustItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-cream/30 text-xs font-sans"
              >
                <Icon className="w-3.5 h-3.5 text-gold/40" aria-hidden="true" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream/20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
