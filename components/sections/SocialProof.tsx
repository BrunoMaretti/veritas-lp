'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motion'

const stats = [
  {
    value: 9,
    suffix: '+',
    label: 'Anos de Mercado',
    description: 'Atuando em São Paulo desde 2015',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Empresas Atendidas',
    description: 'De MEIs a médias empresas',
  },
  {
    value: 8,
    suffix: '',
    label: 'Áreas de Atuação',
    description: 'Cobertura contábil completa',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Digital e Remoto',
    description: 'Sem filas, sem deslocamento',
    isText: true,
  },
]

function Counter({
  target,
  suffix,
  isText,
}: {
  target: number
  suffix: string
  isText?: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || isText) return
    const controls = animate(0, target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, isText])

  return (
    <span
      ref={ref}
      className="font-serif text-[2.75rem] font-bold leading-none text-navy"
    >
      {isText ? target : count}
      {suffix}
    </span>
  )
}

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="bg-cream py-section-sm"
      aria-label="Números e resultados"
      ref={ref}
    >
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="eyebrow text-navy/50 text-center mb-12"
        >
          Veritas Exacta em números
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.1, 0.1)}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center text-center px-6 py-10 border-r border-border-light last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              <Counter target={stat.value} suffix={stat.suffix} isText={stat.isText} />
              <p className="font-sans font-semibold text-ink text-sm mt-3 mb-1 tracking-tight">
                {stat.label}
              </p>
              <p className="font-sans text-muted text-xs leading-snug">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-muted text-sm font-sans mt-12 max-w-xl mx-auto"
        >
          Empresas que confiam na Veritas Exacta têm mais tempo para crescer —{' '}
          <strong className="text-ink font-semibold">
            nós cuidamos da parte burocrática.
          </strong>
        </motion.p>
      </div>
    </section>
  )
}
