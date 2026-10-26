import dynamic from 'next/dynamic';
import HeroSlider from '@/components/home/HeroSlider';
import Marquee from '@/components/home/Marquee';
import JsonLd from '@/components/seo/JsonLd';
import { services } from '@/lib/services';
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
  whatsappNumber,
} from '@/lib/site';

// Lazy load below-fold sections for faster initial page load
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const ServicesSlider = dynamic(() => import('@/components/home/ServicesSlider'));
const MarketsSection = dynamic(() => import('@/components/home/MarketsSection'));
const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection'));
const TeamSection = dynamic(() => import('@/components/home/TeamSection'));
const FounderSection = dynamic(() => import('@/components/home/FounderSection'));
const WhySlider = dynamic(() => import('@/components/home/WhySlider'));
const TestimonialsSlider = dynamic(() => import('@/components/home/TestimonialsSlider'));
const BlogSection = dynamic(() => import('@/components/home/BlogSection'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));

export default function Home() {
  return (
    <>
      {/*
        Organization + WebSite schema.
        Deliberately omits aggregateRating: there are no verifiable published
        reviews on the site, and self-serving review markup is a Google
        structured-data violation that risks a manual action. Re-add it only
        once real, visible reviews exist on the page.
      */}
      <JsonLd
        type="custom"
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ProfessionalService',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: absoluteUrl('/logo.svg'),
              image: absoluteUrl('/api/og'),
              description:
                'Digital marketing agency specialising in social media marketing, SEO, Google Ads, AI automation and web development for businesses in the UAE, Saudi Arabia, USA and Canada.',
              ...(whatsappNumber() ? { telephone: `+${whatsappNumber()}` } : {}),
              email: CONTACT_EMAIL,
              founder: {
                '@type': 'Person',
                name: 'Asad Ali',
                jobTitle: 'CEO & Founder',
              },
              areaServed: [
                'United Arab Emirates',
                'Saudi Arabia',
                'Qatar',
                'Kuwait',
                'United States',
                'Canada',
                'United Kingdom',
                'Pakistan',
              ].map((name) => ({ '@type': 'Country', name })),
              availableLanguage: ['English', 'Urdu', 'Arabic'],
              sameAs: SOCIAL_PROFILES,
              priceRange: '$$',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Digital Marketing Services',
                itemListElement: services.map((s) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: s.title,
                    description: s.shortDesc,
                    url: absoluteUrl(`/services/${s.slug}`),
                  },
                })),
              },
            },
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              publisher: { '@id': `${SITE_URL}/#organization` },
              inLanguage: 'en',
            },
          ],
        }}
      />

      {/* Homepage Sections */}
      <HeroSlider />
      <Marquee />
      <AboutSection />
      <ServicesSlider />
      <MarketsSection />
      <PortfolioSection />
      <TeamSection />
      <FounderSection />
      <WhySlider />
      <TestimonialsSlider />
      <BlogSection />
      <CTASection />
    </>
  );
}
