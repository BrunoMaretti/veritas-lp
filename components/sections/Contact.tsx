'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight } from '@/lib/motion'
import { WA_LINK, WA_NUMBER_DISPLAY, EMAIL, PHONE, ADDRESS } from '@/lib/constants'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    const text = encodeURIComponent(
      `Olá! Me chamo *${name}*${company ? ` e represento a empresa *${company}*` : ''}.\n\n${message || 'Vim pelo site da Veritas Exacta e gostaria de saber mais sobre os serviços.'}`
    )
    window.open(`https://wa.me/5511999325877?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full bg-border-dark/40 border border-border-dark text-cream placeholder:text-muted/50 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-200'

  return (
    <section
      id="contato"
      className="bg-ink py-section"
      aria-label="Entre em contato"
      ref={ref}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">
            Fale conosco
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-h2 text-cream text-balance max-w-lg">
            Pronto para organizar o financeiro da sua empresa?
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">

          {/* Left: contact info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={staggerContainer(0.1, 0.15)}
          >
            <ul className="flex flex-col gap-6 mb-10" role="list">
              <motion.li variants={fadeUp}>
                <a
                  href={`tel:+551120593032`}
                  className="flex items-start gap-4 group"
                  aria-label={`Telefone: ${PHONE}`}
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-border-dark flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Phone className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-muted text-xs font-sans mb-0.5 uppercase tracking-wider">Telefone</p>
                    <p className="text-cream text-sm font-medium">{PHONE}</p>
                  </div>
                </a>
              </motion.li>

              <motion.li variants={fadeUp}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  aria-label={`WhatsApp: ${WA_NUMBER_DISPLAY}`}
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-border-dark flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]/60 group-hover:text-[#25D366] transition-colors" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-muted text-xs font-sans mb-0.5 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-cream text-sm font-medium">{WA_NUMBER_DISPLAY}</p>
                  </div>
                </a>
              </motion.li>

              <motion.li variants={fadeUp}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 group"
                  aria-label={`E-mail: ${EMAIL}`}
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-border-dark flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Mail className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-muted text-xs font-sans mb-0.5 uppercase tracking-wider">E-mail</p>
                    <p className="text-cream text-sm font-medium break-all">{EMAIL}</p>
                  </div>
                </a>
              </motion.li>

              <motion.li variants={fadeUp}>
                <address className="flex items-start gap-4 not-italic">
                  <span className="flex-shrink-0 w-10 h-10 rounded-sm bg-border-dark flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold/60" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-muted text-xs font-sans mb-0.5 uppercase tracking-wider">Endereço</p>
                    <p className="text-cream text-sm font-medium">{ADDRESS}</p>
                  </div>
                </address>
              </motion.li>
            </ul>

            {/* Big WhatsApp button */}
            <motion.a
              variants={fadeUp}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Iniciar conversa no WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.55 }}
          >
            <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-cream/70 text-xs font-sans mb-1.5 uppercase tracking-wider">
                    Seu nome <span className="text-gold" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como posso te chamar?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-cream/70 text-xs font-sans mb-1.5 uppercase tracking-wider">
                    Empresa
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da empresa (opcional)"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-cream/70 text-xs font-sans mb-1.5 uppercase tracking-wider">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente o que você precisa..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary justify-center w-full mt-2"
                >
                  Enviar via WhatsApp
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <p className="text-muted text-xs text-center">
                  Sua mensagem abrirá diretamente no WhatsApp. Respondemos em até 24h úteis.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 rounded-sm overflow-hidden border border-border-dark"
        >
          <iframe
            title="Localização da Veritas Exacta — R. Tuiuti, 1161, Tatuapé, São Paulo"
            src="https://maps.google.com/maps?q=R.+Tuiuti,+1161,+Tatuap%C3%A9,+S%C3%A3o+Paulo,+SP,+Brasil&output=embed&z=16"
            width="100%"
            height="320"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(200deg) saturate(0.7)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
