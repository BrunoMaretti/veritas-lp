import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Differentials from '@/components/sections/Differentials'
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
      <Differentials />
      <CtaBanner />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
