'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeUp, fadeRight, fadeLeft } from '@/lib/motion'
import { WA_LINK } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Ética e transparência', desc: 'Comunicação honesta em cada etapa do processo.' },
  { title: 'Atendimento humanizado', desc: 'Você é atendido como parceiro, não como número.' },
  { title: 'Atualização constante', desc: 'Equipe sempre alinhada com as últimas normas vigentes.' },
  { title: 'Responsabilidade', desc: 'Tratamos seus dados e finanças com máximo cuidado.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="sobre"
      className="bg-ink relative overflow-hidden py-section"
      aria-label="Sobre a Veritas Exacta"
      ref={ref}
    >
      {/* Large background number */}
      <p
        aria-hidden="true"
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-serif text-[20rem] font-bold text-white/[0.015] leading-none select-none pointer-events-none"
      >
        VE
      </p>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: decorative / accent */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeRight}
            className="relative"
          >
            {/* Quote block */}
            <div className="border-l-2 border-gold pl-8 py-2">
              <p
                className="font-serif text-h2 text-cream leading-tight mb-6 text-balance"
                aria-label="Missão da empresa"
              >
                &ldquo;Oferecer soluções contábeis seguras, estratégicas e personalizadas para cada
                negócio.&rdquo;
              </p>
              <p className="eyebrow text-gold/60 text-[10px]">— Missão da Veritas Exacta</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border-dark">
              {[
                { n: '9+', label: 'anos' },
                { n: '8', label: 'serviços' },
                { n: '1', label: 'equipe dedicada' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="font-serif text-3xl text-gold font-bold leading-none">
                    {item.n}
                  </span>
                  <span className="text-muted text-xs font-sans mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={staggerContainer(0.1, 0.15)}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              Quem somos
            </motion.p>

            <motion.h2 variants={fadeUp} className="font-serif text-h2 text-cream mb-6 text-balance">
              Mais de 9 anos construindo relações de confiança
            </motion.h2>

            <motion.p variants={fadeUp} className="text-cream/60 leading-relaxed mb-4">
              A Veritas Exacta nasceu com o propósito de oferecer contabilidade que vai além das
              obrigações legais. Acreditamos que um bom contador é, antes de tudo, um parceiro
              estratégico — alguém que ajuda o empresário a tomar decisões mais seguras e crescer
              com base em dados reais.
            </motion.p>

            <motion.p variants={fadeUp} className="text-cream/60 leading-relaxed mb-10">
              Atendemos MEIs, startups, PMEs e pessoas físicas com um modelo de atendimento próximo
              e humanizado. Cada cliente recebe atenção individualizada porque entendemos que cada
              negócio é único.
            </motion.p>

            {/* Values grid */}
            <motion.ul
              variants={staggerContainer(0.08)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              role="list"
            >
              {values.map((v) => (
                <motion.li
                  key={v.title}
                  variants={fadeUp}
                  className="flex flex-col gap-1 p-4 border border-border-dark rounded-sm"
                >
                  <span className="text-cream text-sm font-sans font-medium">{v.title}</span>
                  <span className="text-muted text-xs leading-snug">{v.desc}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeUp}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light inline-flex text-sm"
            >
              Falar com nossa equipe
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
