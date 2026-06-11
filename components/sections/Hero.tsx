'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'
import { staggerContainer, fadeUp, fadeLeft, ease } from '@/lib/motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-navy overflow-hidden"
      aria-label="Apresentação"
    >
      {/* Dot texture overlay */}
      <div className="absolute inset-0 dot-texture opacity-40" aria-hidden="true" />

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_50%,rgba(30,56,112,0.4),transparent)]"
        aria-hidden="true"
      />

      <div className="section-container flex-1 flex items-center pt-28 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-6 w-full min-h-[60vh] items-center">

          {/* Left: content */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="eyebrow mb-6 flex items-center gap-3">
              <span className="gold-rule" aria-hidden="true" />
              Escritório Contábil · São Paulo · Desde 2015
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-display text-cream text-balance leading-[1.06] mb-6"
            >
              Contabilidade que trabalha pelo{' '}
              <em className="not-italic text-gold">crescimento</em> do seu negócio
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed max-w-lg mb-10"
            >
              Soluções contábeis personalizadas para MEIs, startups e empresas em crescimento. Mais
              de 9 anos de experiência organizando o financeiro de quem empreende.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com especialista
              </a>
              <a href="#servicos" className="btn-ghost-light text-sm">
                Nossos serviços
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Social proof micro */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-cream/40 text-xs font-sans"
            >
              <span className="flex items-center gap-2">
                <span className="text-gold font-semibold text-sm">9+</span> anos de mercado
              </span>
              <span aria-hidden="true" className="text-cream/20">·</span>
              <span className="flex items-center gap-2">
                <span className="text-gold font-semibold text-sm">8</span> áreas de atuação
              </span>
              <span aria-hidden="true" className="text-cream/20">·</span>
              <span>São Paulo — Tatuapé</span>
            </motion.div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="relative hidden lg:block"
          >
            {/* Gold vertical accent */}
            <div
              className="absolute -left-6 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
              aria-hidden="true"
            />

            {/* Image container */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85"
                alt="Arquitetura corporativa — prédios modernos simbolizando solidez e crescimento"
                fill
                className="object-cover grayscale-[30%]"
                priority
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
              {/* Navy overlay for color cohesion */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/20 to-transparent mix-blend-multiply"
                aria-hidden="true"
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-8 bg-ink border border-border-dark rounded-sm px-5 py-4 shadow-xl"
            >
              <p className="font-serif text-3xl text-gold font-bold leading-none">9+</p>
              <p className="text-cream/60 text-xs mt-1 font-sans">anos de mercado</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
        aria-hidden="true"
      >
        <span className="text-[10px] font-sans tracking-widest uppercase">Role</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
