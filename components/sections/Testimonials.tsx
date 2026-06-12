'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion'

const testimonials = [
  {
    quote:
      'Reduzimos mais de 25% na carga tributária depois de contratar a Veritas Exacta. O planejamento foi cirúrgico e totalmente legal. Recomendo sem hesitar.',
    name: 'Carlos Eduardo',
    role: 'CEO · Startup de Tecnologia',
    initials: 'CE',
    bg: 'bg-navy-mid',
  },
  {
    quote:
      'Finalmente encontrei um contador que explica tudo em português claro. Sem jargão, sem enrolação. O atendimento é impecável e sempre disponível quando preciso.',
    name: 'Ana Paula Souza',
    role: 'Fundadora · E-commerce de Moda',
    initials: 'AP',
    bg: 'bg-navy',
  },
  {
    quote:
      'Abri minha empresa em menos de 15 dias. Cuidaram de tudo: CNPJ, enquadramento no Simples, alvará. Zero dor de cabeça da minha parte.',
    name: 'Ricardo Lima',
    role: 'Sócio · Construtora Lima',
    initials: 'RL',
    bg: 'bg-navy-light',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="relative bg-ink overflow-hidden py-section"
      aria-label="Depoimentos de clientes"
      ref={ref}
    >
      <div className="absolute inset-0 dot-texture opacity-40" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="orb orb-1 w-[500px] h-[500px] bg-navy opacity-70 -bottom-40 -left-20"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">
            Depoimentos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-h2 text-cream text-balance max-w-lg"
          >
            O que nossos clientes dizem sobre nós
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.12, 0.2)}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="glass rounded-xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/12"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="Avaliação 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-cream/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-white/5" aria-hidden="true" />

              {/* Author */}
              <figcaption className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center text-cream text-xs font-bold font-sans flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-cream text-sm font-sans font-semibold leading-tight">
                    {t.name}
                  </p>
                  <p className="text-muted text-xs mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-muted/50 text-xs font-sans text-center mt-10"
        >
          * Nomes adaptados para preservar a privacidade dos clientes.
        </motion.p>
      </div>
    </section>
  )
}
