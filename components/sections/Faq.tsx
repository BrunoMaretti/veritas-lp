'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { staggerContainer, fadeUp } from '@/lib/motion'
import { WA_LINK } from '@/lib/constants'

const faqs = [
  {
    q: 'Quais são os regimes tributários disponíveis e como sei qual é o melhor para minha empresa?',
    a: 'Os principais regimes no Brasil são Simples Nacional, Lucro Presumido e Lucro Real. A escolha ideal depende do faturamento anual, da margem de lucro e do segmento de atuação. Na Veritas Exacta, fazemos uma análise completa do seu negócio e apresentamos simulações reais para que você decida com clareza qual regime gera menos imposto de forma legal.',
  },
  {
    q: 'Minha empresa é MEI. Preciso mesmo de contador?',
    a: 'O MEI não é obrigado por lei a ter contador, mas contar com apoio profissional pode evitar erros na declaração anual, orientar sobre o momento certo de migrar de categoria e garantir que você não pague tributos a mais. Para MEIs que estão crescendo, a assessoria contábil é especialmente estratégica.',
  },
  {
    q: 'Quanto tempo leva para abrir uma empresa com a Veritas Exacta?',
    a: 'O prazo varia de acordo com o tipo societário e a complexidade do negócio, mas em geral trabalhamos entre 7 e 20 dias úteis para abertura completa, incluindo CNPJ, inscrição estadual/municipal e enquadramento no regime tributário. Cuidamos de toda a documentação para você.',
  },
  {
    q: 'Como funciona o atendimento — é tudo online ou preciso ir ao escritório?',
    a: 'O atendimento é 100% remoto para quem preferir. Utilizamos ferramentas digitais para envio de documentos, assinaturas eletrônicas e comunicação ágil. Mas também recebemos clientes presencialmente em nosso escritório no Tatuapé, São Paulo. A escolha é sua.',
  },
  {
    q: 'Vocês atendem empresas de qualquer segmento?',
    a: 'Sim. Atendemos empresas de comércio, serviços, tecnologia, saúde, construção civil, e-commerce e outros segmentos. Cada negócio tem suas particularidades fiscais e trabalhistas, e nossa equipe está atualizada para lidar com as nuances de cada área.',
  },
  {
    q: 'O que acontece se minha empresa tiver débitos ou pendências fiscais?',
    a: 'Não tem problema. Trabalhamos com regularização de empresas — analisamos a situação, identificamos as pendências junto à Receita Federal, Simples Nacional, FGTS e outros órgãos, e traçamos um plano de regularização que pode incluir parcelamentos e renegociações.',
  },
  {
    q: 'Como é feita a proteção e confidencialidade dos dados da minha empresa?',
    a: 'Tratamos as informações financeiras e documentais dos nossos clientes com total sigilo e responsabilidade. Seguimos as diretrizes da LGPD e utilizamos sistemas com acesso controlado. Seus dados nunca são compartilhados com terceiros sem seu consentimento expresso.',
  },
]

export default function Faq() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="faq"
      className="bg-cream py-section"
      aria-label="Perguntas frequentes"
      ref={ref}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={staggerContainer(0.1)}
            className="lg:sticky lg:top-32"
          >
            <motion.p variants={fadeUp} className="eyebrow text-navy/60 mb-4">
              Dúvidas frequentes
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-h2 text-ink text-balance mb-5">
              Perguntas que nossos clientes costumam fazer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted text-sm leading-relaxed mb-8">
              Não encontrou a resposta que procura? Fale diretamente com um dos nossos especialistas.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark inline-flex text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-[0.925rem] text-ink font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
