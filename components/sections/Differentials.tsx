'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, HeartHandshake, Lock, Cpu } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight } from '@/lib/motion'

const items = [
  {
    num: '01',
    icon: Award,
    title: 'Experiência e Confiança',
    desc: 'Com mais de 9 anos atuando no mercado paulistano, construímos reputação baseada em ética, precisão e entrega consistente. Nossos clientes ficam porque os resultados aparecem.',
  },
  {
    num: '02',
    icon: HeartHandshake,
    title: 'Atendimento Próximo',
    desc: 'Você não vai ficar sem resposta. Nosso modelo de atendimento humanizado garante que cada dúvida seja respondida com clareza — sem jargão e sem enrolação.',
  },
  {
    num: '03',
    icon: Lock,
    title: 'Segurança e Transparência',
    desc: 'Processos organizados, comunicação honesta e total responsabilidade sobre as informações do cliente. Sua empresa em conformidade, sem surpresas desagradáveis.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'Contabilidade Moderna',
    desc: 'Usamos tecnologia para automatizar o que é rotina e dedicar mais tempo ao que realmente importa: a estratégia do seu negócio. Eficiência sem perder o toque humano.',
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="diferenciais"
      className="bg-cream py-section"
      aria-label="Nossos diferenciais"
      ref={ref}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20 items-start">

          {/* Left: sticky heading */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={staggerContainer(0.1)}
            className="lg:sticky lg:top-32"
          >
            <motion.p variants={fadeUp} className="eyebrow text-navy/60 mb-4">
              Por que a Veritas Exacta
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-h2 text-ink text-balance mb-6">
              O que nos diferencia dos demais escritórios
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted leading-relaxed text-sm">
              Não somos só um escritório contábil. Somos parceiros estratégicos comprometidos com o
              crescimento sustentável de cada negócio que atendemos.
            </motion.p>
            <motion.span variants={fadeUp} className="gold-rule mt-8 block" aria-hidden="true" />
          </motion.div>

          {/* Right: differentials list */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={staggerContainer(0.12, 0.15)}
            className="flex flex-col gap-0 divide-y divide-border-light"
          >
            {items.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.num}
                  variants={fadeUp}
                  className="group py-8 grid grid-cols-[3rem_1fr] gap-6 items-start"
                >
                  {/* Number */}
                  <span
                    className="font-serif text-4xl text-border-light group-hover:text-gold transition-colors duration-300 leading-none pt-1"
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-4 h-4 text-gold" aria-hidden="true" />
                      <h3 className="font-sans font-semibold text-ink text-base">{item.title}</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
