import { HeroSection }        from '@/components/sections/HeroSection'
import { StatsBar }           from '@/components/sections/StatsBar'
import { PdrSection }         from '@/components/sections/PdrSection'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ServicesGrid }       from '@/components/sections/ServicesGrid'
import { AboutSection }       from '@/components/sections/AboutSection'
import { ReviewsSection }     from '@/components/sections/ReviewsSection'
import { ServiceAreaSection } from '@/components/sections/ServiceAreaSection'
import { CtaSection }         from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <PdrSection />
      <BeforeAfterSection />
      <ServicesGrid />
      <AboutSection />
      <ReviewsSection />
      <ServiceAreaSection />
      <CtaSection />
    </main>
  )
}
