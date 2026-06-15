import { HeroSection }         from '@/components/sections/HeroSection'
import { QuotePanelSection }   from '@/components/sections/QuotePanelSection'
import { StatsBar }            from '@/components/sections/StatsBar'
import { ServicesGrid }        from '@/components/sections/ServicesGrid'
import { FeatureCardsSection } from '@/components/sections/FeatureCardsSection'
import { WhyUsSection }        from '@/components/sections/WhyUsSection'
import { AboutSection }        from '@/components/sections/AboutSection'
import { ProcessSection }      from '@/components/sections/ProcessSection'
import { ReviewsSection }      from '@/components/sections/ReviewsSection'
import { GallerySection }      from '@/components/sections/GallerySection'
import { CtaSection }          from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuotePanelSection />
      <StatsBar />
      <ServicesGrid />
      <FeatureCardsSection />
      <WhyUsSection />
      <AboutSection />
      <ProcessSection />
      <ReviewsSection />
      <GallerySection />
      <CtaSection />
    </main>
  )
}
