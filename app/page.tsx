import { HeroSection }         from '@/components/sections/HeroSection'
import { AfterBannerSection }  from '@/components/sections/AfterBannerSection'
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
      <AfterBannerSection />
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
