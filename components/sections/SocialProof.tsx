'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motion'

const stats = [
  { value: 9, suffix: '+', label: 'Anos de Mercado', description: 'Desde 2015 em São Paulo' },
  { value: 8, suffix: '', label: 'Serviços Especializados', description: 'Do MEI à empresa grande' },
  { value: 100, suffix: '%', label: 'Foco no Cliente', description: 'Atendimento personalizado' },
  { value: 1, suffix: '', label: 'Parceiro de confiança', description: 'Para cada etapa do seu negócio', isText: true },
]

function Counter({ target, suffix, isText }: { target: number; suffix: string; isText?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || isText) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return controls.stop
  }, [inView, target, isText])

  return (
    <span ref={ref} className="font-serif text-h1 text-navy font-bold leading-none">
      {isText ? target : count}
      {suffix}
    </span>
  )
}

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-section-sm" aria-label="Números e resultados" ref={ref}>
      <div className="section-container">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.12)}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="eyebrow text-navy/60">
            Veritas Exacta em números
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.12, 0.1)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-border-light"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center text-center px-6 py-8"
            >
              <Counter target={stat.value} suffix={stat.suffix} isText={stat.isText} />
              <p className="font-sans font-semibold text-ink text-sm mt-2 mb-1">{stat.label}</p>
              <p className="font-sans text-muted text-xs leading-snug">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-muted text-sm font-sans mt-10 max-w-xl mx-auto"
        >
          Empresas que confiam na Veritas Exacta têm mais tempo para crescer —{' '}
          <strong className="text-ink font-medium">nós cuidamos da parte burocrática.</strong>
        </motion.p>
      </div>
    </section>
  )
}
