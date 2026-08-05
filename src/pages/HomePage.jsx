import SEO from '@/components/seo/SEO'
import Hero from '@/components/home/Hero'
import ByTheNumbers from '@/components/home/ByTheNumbers'
import FeaturedStory from '@/components/home/FeaturedStory'
import FeaturedCompanies from '@/components/home/FeaturedCompanies'
import InteractiveTimeline from '@/components/home/InteractiveTimeline'
import WhyStoriesMatter from '@/components/home/WhyStoriesMatter'
import BusinessLessons from '@/components/home/BusinessLessons'
import ExploreByIndustry from '@/components/home/ExploreByIndustry'
import NewsletterCTA from '@/components/home/NewsletterCTA'
import Connect from '@/components/home/Connect'
import QuoteBreak from '@/components/ui/QuoteBreak'
import { getFeaturedCompany } from '@/data/companies'
import { websiteSchema, organizationSchema } from '@/lib/seo'
import { SITE } from '@/lib/constants'

export default function HomePage() {
  const featured = getFeaturedCompany()

  return (
    <>
      <SEO
        title={`${SITE.name}: ${SITE.tagline}`}
        description={SITE.description}
        path="/"
        schema={[websiteSchema(), organizationSchema()]}
      />
      <Hero />
      <ByTheNumbers />
      <FeaturedStory company={featured} />
      <QuoteBreak
        quote="The people who are crazy enough to think they can change the world are the ones who do."
      />
      <FeaturedCompanies />
      <InteractiveTimeline />
      <QuoteBreak quote="It always seems impossible until it’s done." />
      <WhyStoriesMatter />
      <BusinessLessons />
      <QuoteBreak quote="The comeback is always greater than the setback." dark />
      <ExploreByIndustry />
      <NewsletterCTA />
      <Connect />
    </>
  )
}
