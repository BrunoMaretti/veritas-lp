'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md border-b border-border-dark shadow-lg shadow-ink-deep/30'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Navegação principal">
            {/* Logo */}
            <a href="#" className="flex flex-col" aria-label="Veritas Exacta — página inicial">
              <span className="font-serif text-cream font-bold text-lg leading-none tracking-tight">
                VERITAS EXACTA
              </span>
              <span className="eyebrow text-[9px] mt-0.5">Contabilidade</span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-7" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream font-sans text-sm transition-colors duration-150 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
            >
              Falar com especialista
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              className="md:hidden p-2 text-cream/80 hover:text-cream"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-navy/98 backdrop-blur-md border-b border-border-dark md:hidden"
          >
            <nav className="section-container py-6 flex flex-col gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-cream/80 hover:text-cream font-sans text-base py-3 border-b border-border-dark/50 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="btn-primary mt-4 justify-center"
              >
                Falar com especialista
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
