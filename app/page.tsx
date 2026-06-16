import { HeroSection }         from '@/components/sections/HeroSection'
import { AfterBannerSection }  from '@/components/sections/AfterBannerSection'
import { WorkSection }         from '@/components/sections/WorkSection'
import { ServicesSection }     from '@/components/sections/ServicesSection'
import { WhyChooseSection }    from '@/components/sections/WhyChooseSection'
import { MeetOwnerSection }    from '@/components/sections/MeetOwnerSection'
import { HowItWorksSection }   from '@/components/sections/HowItWorksSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection'
import { WhyUsSection }        from '@/components/sections/WhyUsSection'
import { GallerySection }      from '@/components/sections/GallerySection'
import { CtaSection }          from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AfterBannerSection />
      <WorkSection />
      <ServicesSection />
      <WhyChooseSection />
      <MeetOwnerSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <WhyUsSection />
      <GallerySection />
      <CtaSection />
    </main>
  )
}
