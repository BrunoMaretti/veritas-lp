'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Search, TrendingUp } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion'
import { WA_LINK } from '@/lib/constants'

const steps = [
  {
    icon: MessageSquare,
    title: 'Fale Conosco',
    desc: 'Entre em contato pelo WhatsApp. Sem compromisso — é só uma conversa para entendermos o que você precisa.',
  },
  {
    icon: Search,
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seu regime tributário, pendências e oportunidades para reduzir custos de forma legal.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento com Segurança',
    desc: 'Com tudo organizado, você recebe relatórios mensais claros e pode focar 100% no seu negócio.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="bg-cream py-section"
      aria-label="Como funciona"
      ref={ref}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="eyebrow text-navy/60 mb-3">
            Processo simples
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-h2 text-ink text-balance max-w-xl mx-auto"
          >
            Como funciona a parceria com a Veritas Exacta
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.15, 0.2)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative"
        >
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px hidden md:block"
            style={{
              background: 'linear-gradient(90deg, transparent, #E2DDD5 20%, #E2DDD5 80%, transparent)',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="flex flex-col items-center text-center relative"
              >
                {/* Icon badge */}
                <div className="relative mb-7 z-10">
                  <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shadow-lg shadow-navy/20">
                    <Icon className="w-8 h-8 text-gold" aria-hidden="true" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-ink-deep text-xs font-bold font-sans flex items-center justify-center shadow"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-ink text-h3 mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Começar agora — é grátis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
