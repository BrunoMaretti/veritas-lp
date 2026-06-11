'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileText,
  Building2,
  TrendingDown,
  Users,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
  Receipt,
  ArrowRight,
} from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/motion'
import { WA_LINK } from '@/lib/constants'

const services = [
  {
    icon: FileText,
    title: 'Contabilidade Empresarial',
    description:
      'Escrituração contábil completa, balancetes, balanço patrimonial e entrega de obrigações acessórias com conformidade total.',
  },
  {
    icon: Building2,
    title: 'Abertura de Empresas',
    description:
      'Da abertura do CNPJ ao enquadramento tributário ideal. Cuidamos de toda a burocracia para você começar com o pé direito.',
  },
  {
    icon: TrendingDown,
    title: 'Planejamento Tributário',
    description:
      'Analisamos seu regime tributário e identificamos alternativas legais para reduzir impostos e proteger seu fluxo de caixa.',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    description:
      'Folha de pagamento, admissões, demissões, eSocial e encargos trabalhistas — gestão completa dos seus colaboradores.',
  },
  {
    icon: ClipboardCheck,
    title: 'Obrigações Fiscais',
    description:
      'Apuração de impostos, emissão de guias, SPED, DCTF, ECD, ECF. Nunca mais perca um prazo ou pague multa desnecessária.',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Financeira',
    description:
      'Análise de resultados, controle de custos e planejamento financeiro estratégico para decisões mais seguras e lucrativas.',
  },
  {
    icon: ShieldCheck,
    title: 'Certificado Digital',
    description:
      'Emissão e renovação de e-CPF e e-CNPJ, com orientação sobre o tipo ideal e suporte completo na instalação.',
  },
  {
    icon: Receipt,
    title: 'IR Pessoa Física',
    description:
      'Declaração de IR em atraso, retificações, orientação sobre malha fina e regularização de pendências na Receita Federal.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="servicos"
      className="bg-navy relative overflow-hidden py-section"
      aria-label="Nossos serviços"
      ref={ref}
    >
      <div className="absolute inset-0 dot-texture opacity-30" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="max-w-xl mb-16"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">
            O que oferecemos
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-h2 text-cream mb-4 text-balance">
            Soluções para cada etapa do seu negócio
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/55 leading-relaxed">
            Do nascimento da empresa à gestão financeira madura — cobrimos todos os aspectos
            contábeis com precisão e cuidado.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.07, 0.2)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group bg-navy p-7 flex flex-col gap-4 transition-all duration-250 hover:bg-navy-mid cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-border-dark group-hover:bg-gold/10 transition-colors duration-250">
                  <Icon
                    className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-250"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-cream text-[1.05rem] leading-snug font-medium">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{service.description}</p>

                {/* Hover CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold/0 group-hover:text-gold text-xs font-sans font-medium transition-all duration-250 -mt-1"
                  aria-label={`Solicitar ${service.title} via WhatsApp`}
                >
                  Solicitar serviço
                  <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </a>
              </motion.article>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-cream/40 text-sm font-sans mb-5">
            Não encontrou o que procura? Fale com a gente.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Tirar dúvidas no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
