import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Differentials from '@/components/sections/Differentials'
import Testimonials from '@/components/sections/Testimonials'
import CtaBanner from '@/components/sections/CtaBanner'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <HowItWorks />
      <Differentials />
      <Testimonials />
      <CtaBanner />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
