'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Lock, Award, Headphones } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion'
import { WA_LINK, PHONE } from '@/lib/constants'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const seals = [
  { icon: ShieldCheck, label: 'Dados protegidos pela LGPD' },
  { icon: Lock, label: 'Sigilo profissional garantido' },
  { icon: Award, label: '9+ anos de experiência' },
  { icon: Headphones, label: 'Suporte ágil e humanizado' },
]

export default function CtaBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="relative overflow-hidden bg-navy py-24"
      aria-label="Chamada para ação"
      ref={ref}
    >
      {/* Gold vertical accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_85%_50%,rgba(201,168,76,0.05),transparent)]"
      />
      <div className="absolute inset-0 dot-texture opacity-50" aria-hidden="true" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            Pronto para começar?
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-h1 text-cream text-balance mb-5 leading-tight"
          >
            Sua empresa merece uma contabilidade que funciona de verdade.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-cream/50 text-lg leading-relaxed mb-10 max-w-xl">
            Fale agora com um especialista. Sem compromisso, sem enrolação — só uma conversa honesta sobre como podemos ajudar.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center mb-12">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon />
              Solicitar orçamento gratuito
            </a>
            <a href={`tel:+551120593032`} className="btn-ghost-light text-sm">
              Ligar: {PHONE}
            </a>
          </motion.div>

          {/* Trust seals */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {seals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 glass rounded-md px-3 py-2.5"
              >
                <Icon className="w-4 h-4 text-gold/60 flex-shrink-0" aria-hidden="true" />
                <span className="text-cream/50 text-[11px] font-sans leading-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
